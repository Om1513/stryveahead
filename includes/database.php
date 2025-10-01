<?php
// Database connection and operations class

class Database {
    private static $instance = null;
    private $connection;
    
    private function __construct() {
        $this->connect();
    }
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    private function connect() {
        // Check if database constants are defined
        if (!defined('DB_HOST') || !defined('DB_USER') || !defined('DB_NAME')) {
            $error = "Database configuration missing. Please check your .env file.";
            if (function_exists('logError')) {
                logError($error);
            }
            if (APP_ENV === 'development') {
                die($error);
            } else {
                die("Configuration error. Please contact administrator.");
            }
        }
        
        // Check if database credentials are provided
        if (empty(DB_HOST) || empty(DB_USER) || empty(DB_NAME)) {
            $error = "Database credentials are empty. Please configure your .env file.";
            if (function_exists('logError')) {
                logError($error);
            }
            if (APP_ENV === 'development') {
                die($error . "<br><br>Required: DB_HOST, DB_USER, DB_NAME in .env file");
            } else {
                die("Configuration error. Please contact administrator.");
            }
        }
        
        try {
            // Build DSN with proper error handling
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
            
            // Add port if specified
            if (defined('DB_PORT') && !empty(DB_PORT)) {
                $dsn .= ";port=" . DB_PORT;
            }
            
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4",
                PDO::ATTR_TIMEOUT => 30, // 30 second timeout
                PDO::ATTR_PERSISTENT => false
            ];
            
            // Add SSL options if specified
            if (defined('DB_SSL') && DB_SSL === 'true') {
                $options[PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT] = false;
            }
            
            // Attempt connection
            $this->connection = new PDO($dsn, DB_USER, DB_PASSWORD, $options);
            
            // Test the connection
            $this->connection->query('SELECT 1');
            
        } catch (PDOException $e) {
            $errorMessage = "Database connection failed: " . $e->getMessage();
            
            // Log detailed error for debugging
            if (function_exists('logError')) {
                logError($errorMessage, [
                    'host' => DB_HOST,
                    'database' => DB_NAME,
                    'user' => DB_USER,
                    'port' => defined('DB_PORT') ? DB_PORT : 3306,
                    'error_code' => $e->getCode()
                ]);
            }
            
            // Show appropriate error message
            if (APP_ENV === 'development') {
                $debugInfo = "<br><br><strong>Debug Info:</strong><br>";
                $debugInfo .= "Host: " . DB_HOST . "<br>";
                $debugInfo .= "Database: " . DB_NAME . "<br>";
                $debugInfo .= "User: " . DB_USER . "<br>";
                $debugInfo .= "Port: " . (defined('DB_PORT') ? DB_PORT : 3306) . "<br>";
                $debugInfo .= "Error Code: " . $e->getCode() . "<br>";
                $debugInfo .= "<br><strong>Common Solutions:</strong><br>";
                $debugInfo .= "1. Check if MySQL server is running<br>";
                $debugInfo .= "2. Verify database credentials in .env file<br>";
                $debugInfo .= "3. Ensure database exists<br>";
                $debugInfo .= "4. Check if user has proper permissions<br>";
                die($errorMessage . $debugInfo);
            } else {
                die("Database connection failed. Please try again later.");
            }
        }
    }
    
    public function getConnection() {
        return $this->connection;
    }
    
    public function testConnection() {
        try {
            $this->connection->query('SELECT 1');
            return true;
        } catch (PDOException $e) {
            logError("Database test failed: " . $e->getMessage());
            return false;
        }
    }
    
    /**
     * Execute a prepared statement
     */
    public function execute($sql, $params = []) {
        try {
            $stmt = $this->connection->prepare($sql);
            $result = $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            logError("Database query failed: " . $e->getMessage(), [
                'sql' => $sql,
                'params' => $params
            ]);
            throw $e;
        }
    }
    
    /**
     * Insert contact information
     */
    public function insertContactInfo($data) {
        $sql = "INSERT INTO contact_info (
            first_name, last_name, email, phone, company_name, 
            designation, industry, website_url
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        
        $params = [
            $data['firstName'],
            $data['lastName'],
            $data['email'],
            $data['phone'],
            $data['companyName'],
            $data['designation'],
            $data['industry'],
            $data['websiteUrl'] ?? null
        ];
        
        try {
            $stmt = $this->execute($sql, $params);
            return $this->connection->lastInsertId();
        } catch (PDOException $e) {
            // Check for duplicate entry
            if ($e->getCode() == 23000) {
                throw new Exception("Email already exists", 1062);
            }
            throw $e;
        }
    }
    
    /**
     * Get contact information (for admin)
     */
    public function getContactInfo($limit = 50, $offset = 0) {
        $sql = "SELECT * FROM contact_info ORDER BY created_at DESC LIMIT ? OFFSET ?";
        $stmt = $this->execute($sql, [$limit, $offset]);
        return $stmt->fetchAll();
    }
    
    /**
     * Get contact count
     */
    public function getContactCount() {
        $sql = "SELECT COUNT(*) as count FROM contact_info";
        $stmt = $this->execute($sql);
        $result = $stmt->fetch();
        return $result['count'];
    }
    
    /**
     * Insert user (for authentication)
     */
    public function insertUser($email, $password) {
        $sql = "INSERT INTO users (email, password) VALUES (?, ?)";
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        
        try {
            $stmt = $this->execute($sql, [$email, $hashedPassword]);
            return $this->connection->lastInsertId();
        } catch (PDOException $e) {
            if ($e->getCode() == 23000) {
                throw new Exception("User already exists", 1062);
            }
            throw $e;
        }
    }
    
    /**
     * Get user by email
     */
    public function getUserByEmail($email) {
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $this->execute($sql, [$email]);
        return $stmt->fetch();
    }
    
    /**
     * Update user last login
     */
    public function updateUserLastLogin($userId) {
        $sql = "UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?";
        $this->execute($sql, [$userId]);
    }
    
    /**
     * Get users (for admin, without passwords)
     */
    public function getUsers($limit = 50, $offset = 0) {
        $sql = "SELECT id, email, created_at, last_login FROM users ORDER BY created_at DESC LIMIT ? OFFSET ?";
        $stmt = $this->execute($sql, [$limit, $offset]);
        return $stmt->fetchAll();
    }
    
    /**
     * Get user count
     */
    public function getUserCount() {
        $sql = "SELECT COUNT(*) as count FROM users";
        $stmt = $this->execute($sql);
        $result = $stmt->fetch();
        return $result['count'];
    }
}

// Helper function to get database instance
function getDB() {
    return Database::getInstance();
}
?>
