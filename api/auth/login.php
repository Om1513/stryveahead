<?php
// User login API endpoint

// Include the user functions
require_once __DIR__ . '/../../includes/user_functions.php';

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
    
    // Validate required fields
    $required_fields = ['email', 'password'];
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            $errors[] = ucfirst($field) . ' is required';
        }
    }
    
    if (!empty($errors)) {
        jsonResponse([
            'ok' => false,
            'error' => $errors[0]
        ], 400);
    }
    
    // Clean data
    $email = strtolower(trim($input['email']));
    $password = $input['password'];
    
    // Validate email format
    if (!validateEmailFormat($email)) {
        jsonResponse([
            'ok' => false,
            'error' => 'Please enter a valid email address'
        ], 400);
    }
    
    // Rate limiting check
    $client_ip = getClientIP();
    if (!checkRateLimit('login_' . $client_ip)) {
        jsonResponse([
            'ok' => false,
            'error' => 'Too many login attempts. Please try again later.'
        ], 429);
    }
    
    // Check for demo credentials first
    if ($email === 'admin@gmail.com' && $password === 'password1234') {
        // Demo login - set session
        session_start();
        $_SESSION['user_id'] = 'demo';
        $_SESSION['user_email'] = $email;
        $_SESSION['is_demo'] = true;
        
        jsonResponse([
            'ok' => true,
            'message' => 'Login successful!',
            'user_type' => 'demo'
        ]);
        return;
    }
    
    // Authenticate user from database
    try {
        $user_id = authenticateUser($email, $password);
        
        if ($user_id === false) {
            // Log failed attempt
            if (function_exists('logError')) {
                logError("Login failed for email: " . $email . " - Invalid credentials");
            }
            
            jsonResponse([
                'ok' => false,
                'error' => 'Invalid email or password'
            ], 401);
        }
        
        // Get user details
        $user = getUserById($user_id);
        
        if (!$user) {
            jsonResponse([
                'ok' => false,
                'error' => 'User account not found'
            ], 404);
        }
        
        // Check if user is active
        if ($user['status'] !== 'active') {
            jsonResponse([
                'ok' => false,
                'error' => 'Account is inactive. Please contact support.'
            ], 403);
        }
        
        // Set session
        session_start();
        $_SESSION['user_id'] = $user_id;
        $_SESSION['user_email'] = $user['email'];
        $_SESSION['is_demo'] = false;
        
        // Log successful login
        if (function_exists('logError')) {
            logError("User logged in successfully. ID: " . $user_id . " Email: " . $email);
        }
        
        jsonResponse([
            'ok' => true,
            'message' => 'Login successful!',
            'user' => [
                'id' => $user['id'],
                'email' => $user['email'],
                'created_at' => $user['created_at']
            ]
        ]);
        
    } catch (Exception $e) {
        $error_message = $e->getMessage();
        
        // Log error
        if (function_exists('logError')) {
            logError("Login failed for email: " . $email . " Error: " . $error_message);
        }
        
        // Check if it's a table missing error
        if (strpos($error_message, "doesn't exist") !== false || strpos($error_message, "Table") !== false) {
            jsonResponse([
                'ok' => false,
                'error' => 'Database table not found. Please run the setup SQL first.'
            ], 500);
        }
        
        // Generic error for security (don't reveal specific database errors)
        jsonResponse([
            'ok' => false,
            'error' => 'Unable to process login. Please try again later.'
        ], 500);
    }
    
} catch (Exception $e) {
    if (function_exists('logError')) {
        logError("Login endpoint error: " . $e->getMessage());
    }
    
    jsonResponse([
        'ok' => false,
        'error' => 'Something went wrong. Please try again later.'
    ], 500);
}
?>