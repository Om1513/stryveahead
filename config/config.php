<?php
// Configuration file for PHP application

// Load environment variables from .env file if it exists
$envFile = __DIR__ . '/../.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        
        // Skip comments and empty lines
        if (empty($line) || strpos($line, '#') === 0) {
            continue;
        }
        
        // Parse key=value pairs
        if (strpos($line, '=') !== false) {
            list($name, $value) = explode('=', $line, 2);
            $name = trim($name);
            $value = trim($value);
            
            // Remove quotes if present
            $value = trim($value, '"\'');
            
            // Set environment variable
            $_ENV[$name] = $value;
            putenv("$name=$value");
        }
    }
}

// Database configuration
define('DB_HOST', $_ENV['DB_HOST'] ?? 'localhost');
define('DB_USER', $_ENV['DB_USER'] ?? '');
define('DB_PASSWORD', $_ENV['DB_PASSWORD'] ?? '');
define('DB_NAME', $_ENV['DB_NAME'] ?? '');
define('DB_PORT', $_ENV['DB_PORT'] ?? 3306);

// Application configuration
define('APP_NAME', 'StryveAhead Advisors');
define('APP_URL', $_ENV['APP_URL'] ?? 'http://localhost');
define('APP_ENV', $_ENV['APP_ENV'] ?? 'development');

// Site metadata
define('SITE_TITLE', 'StryveAhead - Scale Your Brand Across Q-Commerce, E-Commerce & Modern Trade');
define('SITE_DESCRIPTION', 'Your trusted partner for scaling brands across Q-Commerce, E-Commerce, and Modern Trade. We specialise in helping brands establish strong presence, optimise operations, and achieve long-term growth.');
define('SITE_KEYWORDS', 'q-commerce, e-commerce, modern trade, brand scaling, growth intelligence, brand advisory');

// Contact information
define('CONTACT_PHONE', '+91 99209 52802');
define('CONTACT_EMAIL', 'info@stryveahead.com');
define('CONTACT_ADDRESS', 'Mumbai, India');

// Security settings
define('SESSION_LIFETIME', 3600); // 1 hour
define('CSRF_TOKEN_NAME', '_token');

// Rate limiting
define('RATE_LIMIT_WINDOW', 15 * 60); // 15 minutes
define('RATE_LIMIT_MAX', 5); // Max 5 requests per window

// Development settings
if (APP_ENV === 'development') {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
} else {
    ini_set('display_errors', 0);
    ini_set('display_startup_errors', 0);
    error_reporting(0);
}
?>
