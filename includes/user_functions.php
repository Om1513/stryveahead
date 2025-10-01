<?php
// User management functions for registration and authentication

require_once __DIR__ . '/mysqli_connection.php';

/**
 * Register a new user
 */
function registerUser($email, $password) {
    $conn = connectDatabase();
    
    try {
        // Check if user already exists
        $check_stmt = mysqli_prepare($conn, "SELECT id FROM users WHERE email = ?");
        if (!$check_stmt) {
            throw new Exception("Prepare failed: " . mysqli_error($conn));
        }
        
        mysqli_stmt_bind_param($check_stmt, "s", $email);
        mysqli_stmt_execute($check_stmt);
        $check_result = mysqli_stmt_get_result($check_stmt);
        
        if (mysqli_num_rows($check_result) > 0) {
            mysqli_stmt_close($check_stmt);
            closeDatabase($conn);
            throw new Exception("User with this email already exists");
        }
        
        mysqli_stmt_close($check_stmt);
        
        // Hash password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        // Insert new user
        $insert_stmt = mysqli_prepare($conn, "INSERT INTO users (email, password, created_at) VALUES (?, ?, NOW())");
        if (!$insert_stmt) {
            throw new Exception("Prepare failed: " . mysqli_error($conn));
        }
        
        mysqli_stmt_bind_param($insert_stmt, "ss", $email, $hashed_password);
        
        if (!mysqli_stmt_execute($insert_stmt)) {
            throw new Exception("Execute failed: " . mysqli_stmt_error($insert_stmt));
        }
        
        $user_id = mysqli_insert_id($conn);
        
        mysqli_stmt_close($insert_stmt);
        closeDatabase($conn);
        
        return $user_id;
        
    } catch (Exception $e) {
        if (isset($check_stmt)) mysqli_stmt_close($check_stmt);
        if (isset($insert_stmt)) mysqli_stmt_close($insert_stmt);
        closeDatabase($conn);
        throw $e;
    }
}

/**
 * Authenticate user login
 */
function authenticateUser($email, $password) {
    $conn = connectDatabase();
    
    try {
        $stmt = mysqli_prepare($conn, "SELECT id, password FROM users WHERE email = ? AND status = 'active'");
        if (!$stmt) {
            throw new Exception("Prepare failed: " . mysqli_error($conn));
        }
        
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        
        if (mysqli_num_rows($result) == 0) {
            mysqli_stmt_close($stmt);
            closeDatabase($conn);
            return false; // User not found
        }
        
        $user = mysqli_fetch_assoc($result);
        mysqli_stmt_close($stmt);
        
        // Verify password
        if (password_verify($password, $user['password'])) {
            // Update last login
            $update_stmt = mysqli_prepare($conn, "UPDATE users SET last_login = NOW() WHERE id = ?");
            if ($update_stmt) {
                mysqli_stmt_bind_param($update_stmt, "i", $user['id']);
                mysqli_stmt_execute($update_stmt);
                mysqli_stmt_close($update_stmt);
            }
            
            closeDatabase($conn);
            return $user['id']; // Return user ID on success
        } else {
            closeDatabase($conn);
            return false; // Invalid password
        }
        
    } catch (Exception $e) {
        if (isset($stmt)) mysqli_stmt_close($stmt);
        if (isset($update_stmt)) mysqli_stmt_close($update_stmt);
        closeDatabase($conn);
        throw $e;
    }
}

/**
 * Get user information by ID
 */
function getUserById($user_id) {
    $conn = connectDatabase();
    
    try {
        $stmt = mysqli_prepare($conn, "SELECT id, email, created_at, last_login, status FROM users WHERE id = ?");
        if (!$stmt) {
            throw new Exception("Prepare failed: " . mysqli_error($conn));
        }
        
        mysqli_stmt_bind_param($stmt, "i", $user_id);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        
        if (mysqli_num_rows($result) == 0) {
            mysqli_stmt_close($stmt);
            closeDatabase($conn);
            return null;
        }
        
        $user = mysqli_fetch_assoc($result);
        mysqli_stmt_close($stmt);
        closeDatabase($conn);
        
        return $user;
        
    } catch (Exception $e) {
        if (isset($stmt)) mysqli_stmt_close($stmt);
        closeDatabase($conn);
        throw $e;
    }
}

/**
 * Get user information by email
 */
function getUserByEmail($email) {
    $conn = connectDatabase();
    
    try {
        $stmt = mysqli_prepare($conn, "SELECT id, email, created_at, last_login, status FROM users WHERE email = ?");
        if (!$stmt) {
            throw new Exception("Prepare failed: " . mysqli_error($conn));
        }
        
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        
        if (mysqli_num_rows($result) == 0) {
            mysqli_stmt_close($stmt);
            closeDatabase($conn);
            return null;
        }
        
        $user = mysqli_fetch_assoc($result);
        mysqli_stmt_close($stmt);
        closeDatabase($conn);
        
        return $user;
        
    } catch (Exception $e) {
        if (isset($stmt)) mysqli_stmt_close($stmt);
        closeDatabase($conn);
        throw $e;
    }
}

/**
 * Validate email format
 */
function validateEmailFormat($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Validate password strength
 */
function validatePassword($password) {
    // At least 8 characters, at least one letter and one number
    if (strlen($password) < 8) {
        return "Password must be at least 8 characters long";
    }
    
    if (!preg_match('/[A-Za-z]/', $password)) {
        return "Password must contain at least one letter";
    }
    
    if (!preg_match('/[0-9]/', $password)) {
        return "Password must contain at least one number";
    }
    
    return true; // Valid
}

/**
 * Get all users (admin function)
 */
function getAllUsers($limit = 100) {
    $conn = connectDatabase();
    
    try {
        $limit = intval($limit);
        $query = "SELECT id, email, created_at, last_login, status FROM users ORDER BY created_at DESC LIMIT ?";
        
        $stmt = mysqli_prepare($conn, $query);
        mysqli_stmt_bind_param($stmt, "i", $limit);
        mysqli_stmt_execute($stmt);
        
        $result = mysqli_stmt_get_result($stmt);
        $users = [];
        
        while ($row = mysqli_fetch_assoc($result)) {
            $users[] = $row;
        }
        
        mysqli_stmt_close($stmt);
        closeDatabase($conn);
        
        return $users;
        
    } catch (Exception $e) {
        if (isset($stmt)) mysqli_stmt_close($stmt);
        closeDatabase($conn);
        throw $e;
    }
}
?>

