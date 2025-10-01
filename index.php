<?php
// Main PHP application entry point
session_start();

// Error reporting for development
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Load configuration
require_once 'config/config.php';
require_once 'includes/functions.php';
require_once 'includes/database.php';

// Get the current route
$request_uri = $_SERVER['REQUEST_URI'];
$path = parse_url($request_uri, PHP_URL_PATH);
$path = rtrim($path, '/');

// Debug logging (remove in production)
if (APP_ENV === 'development') {
    error_log("Request URI: " . $request_uri);
    error_log("Parsed Path: " . $path);
}

// Handle API routes
if (strpos($path, '/api/') === 0) {
    handleApiRoute($path);
    exit;
}

// Handle static file requests (CSS, JS, Images)
if (preg_match('/\.(css|js|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot)$/', $path)) {
    handleStaticFile($path);
    exit;
}

// Route handling for pages
switch ($path) {
    case '':
    case '/':
        $currentPage = 'home';
        include 'templates/home.php';
        break;
    case '/login':
        $currentPage = 'login';
        include 'templates/login.php';
        break;
    case '/dashboard':
        $currentPage = 'dashboard';
        include 'templates/dashboard.php';
        break;
    case '/register':
        $currentPage = 'register';
        include 'templates/register.php';
        break;
    default:
        $currentPage = '404';
        http_response_code(404);
        include 'templates/404.php';
        break;
}

function handleApiRoute($path) {
    // Set JSON header
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    
    // Handle preflight OPTIONS request
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }
    
    // Route API requests
    switch ($path) {
        case '/api/contact':
            include 'api/contact.php';
            break;
        case '/api/health':
            include 'api/health.php';
            break;
        case '/api/auth/login':
            include 'api/auth/login.php';
            break;
        case '/api/auth/register':
            include 'api/auth/register.php';
            break;
        case '/api/admin/contacts':
            include 'api/admin/contacts.php';
            break;
        case '/api/admin/users':
            include 'api/admin/users.php';
            break;
        default:
            http_response_code(404);
            echo json_encode(['ok' => false, 'error' => 'API endpoint not found']);
            break;
    }
}

function handleStaticFile($path) {
    $file_path = __DIR__ . '/public' . $path;
    
    if (file_exists($file_path)) {
        // Get file extension
        $ext = pathinfo($file_path, PATHINFO_EXTENSION);
        
        // Set appropriate content type
        $content_types = [
            'css' => 'text/css',
            'js' => 'application/javascript',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'eot' => 'application/vnd.ms-fontobject'
        ];
        
        if (isset($content_types[$ext])) {
            header('Content-Type: ' . $content_types[$ext]);
        }
        
        // Set cache headers for static files
        header('Cache-Control: public, max-age=31536000');
        header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 31536000) . ' GMT');
        
        readfile($file_path);
    } else {
        http_response_code(404);
        echo "File not found";
    }
}
?>
