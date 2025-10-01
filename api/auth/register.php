<?php
// User registration API endpoint

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
    $required_fields = ['email', 'password', 'confirmPassword'];
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (empty($input[$field])) {
            $errors[] = ucfirst(str_replace('Password', ' Password', $field)) . ' is required';
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
    $confirmPassword = $input['confirmPassword'];
    
    // Validate email format
    if (!validateEmailFormat($email)) {
        jsonResponse([
            'ok' => false,
            'error' => 'Please enter a valid email address'
        ], 400);
    }
    
    // Check password match
    if ($password !== $confirmPassword) {
        jsonResponse([
            'ok' => false,
            'error' => 'Passwords do not match'
        ], 400);
    }
    
    // Validate password strength
    $passwordValidation = validatePassword($password);
    if ($passwordValidation !== true) {
        jsonResponse([
            'ok' => false,
            'error' => $passwordValidation
        ], 400);
    }
    
    // Rate limiting check
    $client_ip = getClientIP();
    if (!checkRateLimit('register_' . $client_ip)) {
        jsonResponse([
            'ok' => false,
            'error' => 'Too many registration attempts. Please try again later.'
        ], 429);
    }
    
    // Register user
    try {
        $user_id = registerUser($email, $password);
        
        // Log successful registration
        if (function_exists('logError')) {
            logError("New user registered successfully. ID: " . $user_id . " Email: " . $email);
        }
        
        jsonResponse([
            'ok' => true,
            'message' => 'Account created successfully! You can now sign in.',
            'user_id' => $user_id
        ]);
        
    } catch (Exception $e) {
        $error_message = $e->getMessage();
        
        // Log error
        if (function_exists('logError')) {
            logError("Registration failed for email: " . $email . " Error: " . $error_message);
        }
        
        // Check for specific errors
        if (strpos($error_message, 'already exists') !== false) {
            jsonResponse([
                'ok' => false,
                'error' => 'An account with this email already exists. Try signing in instead.'
            ], 409);
        }
        
        // Check if it's a table missing error
        if (strpos($error_message, "doesn't exist") !== false || strpos($error_message, "Table") !== false) {
            jsonResponse([
                'ok' => false,
                'error' => 'Database table not found. Please run the setup SQL first.'
            ], 500);
        }
        
        // Generic error for other cases
        jsonResponse([
            'ok' => false,
            'error' => 'Unable to create account. Please try again later.'
        ], 500);
    }
    
} catch (Exception $e) {
    if (function_exists('logError')) {
        logError("Registration endpoint error: " . $e->getMessage());
    }
    
    jsonResponse([
        'ok' => false,
        'error' => 'Something went wrong. Please try again later.'
    ], 500);
}
?>