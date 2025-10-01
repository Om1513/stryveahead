<?php
// Contact form API endpoint

// Include the MySQLi connection functions
require_once __DIR__ . '/../includes/mysqli_connection.php';

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['ok' => false, 'error' => 'Method not allowed'], 405);
}

try {
    // Get JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        jsonResponse([
            'ok' => false,
            'error' => 'Invalid JSON data'
        ], 400);
    }
    
    // Define required fields
    $required_fields = ['firstName', 'lastName', 'email', 'phone', 'companyName', 'designation', 'industry'];
    
    // Validate required fields
    $errors = validateRequiredFields($input, $required_fields);
    if (!empty($errors)) {
        jsonResponse([
            'ok' => false,
            'error' => $errors[0]
        ], 400);
    }
    
    // Validate email
    if (!validateEmail($input['email'])) {
        jsonResponse([
            'ok' => false,
            'error' => 'Please enter a valid email address'
        ], 400);
    }
    
    // Validate website URL if provided
    if (!empty($input['websiteUrl']) && !filter_var($input['websiteUrl'], FILTER_VALIDATE_URL)) {
        jsonResponse([
            'ok' => false,
            'error' => 'Please enter a valid URL'
        ], 400);
    }
    
    // Clean and prepare data
    $data = [
        'firstName' => sanitizeInput($input['firstName']),
        'lastName' => sanitizeInput($input['lastName']),
        'email' => strtolower(trim($input['email'])),
        'phone' => sanitizeInput($input['phone']),
        'companyName' => sanitizeInput($input['companyName']),
        'designation' => sanitizeInput($input['designation']),
        'industry' => sanitizeInput($input['industry']),
        'websiteUrl' => !empty($input['websiteUrl']) ? trim($input['websiteUrl']) : null
    ];
    
    // Insert into database using MySQLi
    try {
        $insertId = insertContactInfo($data);
        
        // Log successful submission
        if (function_exists('logError')) {
            logError("Contact form submitted successfully. ID: " . $insertId . " Email: " . $data['email']);
        }
        
        jsonResponse([
            'ok' => true,
            'message' => "Thank you for your message! We'll get back to you soon."
        ]);
        
    } catch (Exception $e) {
        logError("Database error in contact endpoint: " . $e->getMessage());
        
        // In development, if database connection fails, simulate success
        if (defined('APP_ENV') && APP_ENV === 'development' && !testMySQLiConnection()) {
            logError("Development Mode: Database not available, simulating success");
            logError("Contact form data received: " . json_encode($data));
            
            jsonResponse([
                'ok' => true,
                'message' => '✅ Development Mode: Form submitted successfully! (Check logs for data)'
            ]);
        }
        
        // Check if it's a table missing error
        if (strpos($e->getMessage(), "doesn't exist") !== false || strpos($e->getMessage(), "Table") !== false) {
            jsonResponse([
                'ok' => false,
                'error' => 'Database table not found. Please run the setup SQL first.'
            ], 500);
        }
        
        jsonResponse([
            'ok' => false,
            'error' => 'Unable to process your request. Please try again later.'
        ], 500);
    }
    
} catch (Exception $e) {
    logError("Contact form submission error: " . $e->getMessage());
    
    jsonResponse([
        'ok' => false,
        'error' => 'Something went wrong. Please try again later.'
    ], 500);
}
?>
