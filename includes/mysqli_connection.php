<?php
// Simple MySQLi Database Connection
// Based on the cPanel hosting requirements

function connectDatabase() {
    // Database credentials from .env file
    $servername = DB_HOST;     // localhost
    $username = DB_USER;       // stryveahead_user
    $password = DB_PASSWORD;   // Stryveahead@123
    $dbname = DB_NAME;         // stryveahead_db
    
    // Create connection using MySQLi
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    // Check connection
    if (!$conn) {
        // Log error if possible
        if (function_exists('logError')) {
            logError("MySQLi Connection failed: " . mysqli_connect_error());
        }
        
        if (defined('APP_ENV') && APP_ENV === 'development') {
            die("Connection failed: " . mysqli_connect_error());
        } else {
            die("Database connection error. Please contact administrator.");
        }
    }
    
    // Set charset to utf8mb4 for better emoji/unicode support
    mysqli_set_charset($conn, "utf8mb4");
    
    return $conn;
}

function closeDatabase($conn) {
    if ($conn) {
        mysqli_close($conn);
    }
}

// Test connection function
function testMySQLiConnection() {
    try {
        $conn = connectDatabase();
        if ($conn) {
            closeDatabase($conn);
            return true;
        }
        return false;
    } catch (Exception $e) {
        return false;
    }
}

// Insert contact information into database
function insertContactInfo($data) {
    $conn = connectDatabase();
    
    try {
        // Prepare SQL statement to prevent SQL injection
        $stmt = mysqli_prepare($conn, "
            INSERT INTO contact_info (
                first_name, last_name, email, phone, 
                company_name, designation, industry, website_url, 
                submitted_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
        ");
        
        if (!$stmt) {
            throw new Exception("Prepare failed: " . mysqli_error($conn));
        }
        
        // Bind parameters (s = string)
        mysqli_stmt_bind_param($stmt, "ssssssss", 
            $data['firstName'],
            $data['lastName'], 
            $data['email'],
            $data['phone'],
            $data['companyName'],
            $data['designation'],
            $data['industry'],
            $data['websiteUrl']
        );
        
        // Execute the statement
        $result = mysqli_stmt_execute($stmt);
        
        if (!$result) {
            throw new Exception("Execute failed: " . mysqli_stmt_error($stmt));
        }
        
        // Get the inserted ID
        $insertId = mysqli_insert_id($conn);
        
        // Close statement
        mysqli_stmt_close($stmt);
        closeDatabase($conn);
        
        return $insertId;
        
    } catch (Exception $e) {
        if (isset($stmt)) {
            mysqli_stmt_close($stmt);
        }
        closeDatabase($conn);
        throw $e;
    }
}

// Get all contact submissions (for admin use)
function getContactSubmissions($limit = 100) {
    $conn = connectDatabase();
    
    try {
        $limit = intval($limit);
        $query = "SELECT * FROM contact_info ORDER BY submitted_at DESC LIMIT ?";
        
        $stmt = mysqli_prepare($conn, $query);
        mysqli_stmt_bind_param($stmt, "i", $limit);
        mysqli_stmt_execute($stmt);
        
        $result = mysqli_stmt_get_result($stmt);
        $submissions = [];
        
        while ($row = mysqli_fetch_assoc($result)) {
            $submissions[] = $row;
        }
        
        mysqli_stmt_close($stmt);
        closeDatabase($conn);
        
        return $submissions;
        
    } catch (Exception $e) {
        if (isset($stmt)) {
            mysqli_stmt_close($stmt);
        }
        closeDatabase($conn);
        throw $e;
    }
}
?>

