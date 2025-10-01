<?php
// Common utility functions

/**
 * Escape HTML output
 */
function escape($string) {
    return htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
}

/**
 * Generate CSRF token
 */
function generateCsrfToken() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

/**
 * Verify CSRF token
 */
function verifyCsrfToken($token) {
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

/**
 * Validate email address
 */
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

/**
 * Sanitize input
 */
function sanitizeInput($input) {
    return trim(strip_tags($input));
}

/**
 * Generate asset URL
 */
function asset($path) {
    return APP_URL . '/public' . $path;
}

/**
 * Get current URL
 */
function getCurrentUrl() {
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
    return $protocol . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
}

/**
 * Redirect function
 */
function redirect($url, $status_code = 302) {
    header("Location: $url", true, $status_code);
    exit();
}

/**
 * JSON response helper
 */
function jsonResponse($data, $status_code = 200) {
    http_response_code($status_code);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit();
}

/**
 * Rate limiting function
 */
function checkRateLimit($identifier) {
    $cache_file = __DIR__ . '/../cache/rate_limit_' . md5($identifier) . '.json';
    $now = time();
    
    if (file_exists($cache_file)) {
        $data = json_decode(file_get_contents($cache_file), true);
        
        // Check if window has expired
        if ($now > $data['reset_time']) {
            $data = ['count' => 1, 'reset_time' => $now + RATE_LIMIT_WINDOW];
        } else if ($data['count'] >= RATE_LIMIT_MAX) {
            return false;
        } else {
            $data['count']++;
        }
    } else {
        $data = ['count' => 1, 'reset_time' => $now + RATE_LIMIT_WINDOW];
    }
    
    // Create cache directory if it doesn't exist
    $cache_dir = dirname($cache_file);
    if (!is_dir($cache_dir)) {
        mkdir($cache_dir, 0755, true);
    }
    
    file_put_contents($cache_file, json_encode($data));
    return true;
}

/**
 * Get client IP address
 */
function getClientIP() {
    $ip_keys = ['HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'HTTP_CLIENT_IP', 'REMOTE_ADDR'];
    
    foreach ($ip_keys as $key) {
        if (!empty($_SERVER[$key])) {
            $ip = $_SERVER[$key];
            if (strpos($ip, ',') !== false) {
                $ip = trim(explode(',', $ip)[0]);
            }
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }
    
    return $_SERVER['REMOTE_ADDR'] ?? 'unknown';
}

/**
 * Format phone number
 */
function formatPhone($phone) {
    // Remove all non-numeric characters
    $phone = preg_replace('/[^0-9]/', '', $phone);
    
    // Add +91 prefix if not present for Indian numbers
    if (strlen($phone) === 10) {
        $phone = '91' . $phone;
    }
    
    return '+' . $phone;
}

/**
 * Validate required fields
 */
function validateRequiredFields($data, $required_fields) {
    $errors = [];
    
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            $errors[] = ucfirst(str_replace('_', ' ', $field)) . ' is required';
        }
    }
    
    return $errors;
}

/**
 * Log error to file
 */
function logError($message, $context = []) {
    $log_dir = __DIR__ . '/../logs';
    if (!is_dir($log_dir)) {
        mkdir($log_dir, 0755, true);
    }
    
    $log_file = $log_dir . '/error.log';
    $timestamp = date('Y-m-d H:i:s');
    $log_entry = "[$timestamp] $message";
    
    if (!empty($context)) {
        $log_entry .= ' Context: ' . json_encode($context);
    }
    
    $log_entry .= PHP_EOL;
    
    file_put_contents($log_file, $log_entry, FILE_APPEND | LOCK_EX);
}

/**
 * Get service icon SVG
 */
function getServiceIcon($iconName) {
    $icons = [
        'trending_up' => '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.3333 21.3333H50.6667V34.6667M50.6667 21.3333L32 40L24 32L13.3333 42.6667" stroke="url(#paint0_linear_trending_up)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_trending_up" x1="10" y1="18" x2="54" y2="46" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
            </defs>
        </svg>',
        
        'storefront' => '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 24L16 8H48L56 24V32C56 35.3137 53.3137 38 50 38C46.6863 38 44 35.3137 44 32C44 35.3137 41.3137 38 38 38C34.6863 38 32 35.3137 32 32C32 35.3137 29.3137 38 26 38C22.6863 38 20 35.3137 20 32C20 35.3137 17.3137 38 14 38C10.6863 38 8 35.3137 8 32V24Z" stroke="url(#paint0_linear_storefront)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 38V56H44V38M32 38V56" stroke="url(#paint1_linear_storefront)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_storefront" x1="6" y1="6" x2="58" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint1_linear_storefront" x1="18" y1="36" x2="46" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
            </defs>
        </svg>',
        
        'campaign' => '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.6667 21.3333L53.3333 10.6667L58.6667 16L48 26.6667M42.6667 21.3333L37.3333 26.6667L48 26.6667M42.6667 21.3333L48 26.6667" stroke="url(#paint0_linear_campaign)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="21.3333" cy="42.6667" r="16" stroke="url(#paint1_linear_campaign)" stroke-width="3"/>
            <path d="M13.3333 42.6667H29.3333M21.3333 34.6667V50.6667" stroke="url(#paint2_linear_campaign)" stroke-width="3" stroke-linecap="round"/>
            <defs>
                <linearGradient id="paint0_linear_campaign" x1="35" y1="8" x2="60" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint1_linear_campaign" x1="3" y1="25" x2="40" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint2_linear_campaign" x1="11" y1="32" x2="32" y2="53" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
            </defs>
        </svg>',
        
        'inventory' => '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="16" width="48" height="40" rx="4" stroke="url(#paint0_linear_inventory)" stroke-width="3"/>
            <path d="M16 16V12C16 9.79086 17.7909 8 20 8H44C46.2091 8 48 9.79086 48 12V16" stroke="url(#paint1_linear_inventory)" stroke-width="3" stroke-linecap="round"/>
            <path d="M24 32H40M24 40H32" stroke="url(#paint2_linear_inventory)" stroke-width="3" stroke-linecap="round"/>
            <circle cx="18" cy="26" r="2" fill="url(#paint3_linear_inventory)"/>
            <defs>
                <linearGradient id="paint0_linear_inventory" x1="6" y1="14" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint1_linear_inventory" x1="14" y1="6" x2="50" y2="18" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint2_linear_inventory" x1="22" y1="30" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint3_linear_inventory" x1="16" y1="24" x2="20" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
            </defs>
        </svg>',
        
        'account_balance_wallet' => '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6667 42.6667V21.3333C26.6667 18.4 29.04 16 32 16H56V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.3733 8 8 10.4 8 13.3333V50.6667C8 53.6 10.3733 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667V48H32C29.04 48 26.6667 45.6 26.6667 42.6667ZM34.6667 21.3333C33.2 21.3333 32 22.5333 32 24V40C32 41.4667 33.2 42.6667 34.6667 42.6667H58.6667V21.3333H34.6667ZM42.6667 36C40.4533 36 38.6667 34.2133 38.6667 32C38.6667 29.7867 40.4533 28 42.6667 28C44.88 28 46.6667 29.7867 46.6667 32C46.6667 34.2133 44.88 36 42.6667 36Z" fill="url(#paint0_linear_wallet)"/>
            <defs>
                <linearGradient id="paint0_linear_wallet" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
            </defs>
        </svg>',
        
        'analytics' => '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6667 53.3333H53.3333M18.6667 45.3333V38.6667M29.3333 45.3333V29.3333M40 45.3333V34.6667M50.6667 45.3333V24" stroke="url(#paint0_linear_analytics)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="18.6667" cy="21.3333" r="5.33333" fill="url(#paint1_linear_analytics)"/>
            <circle cx="29.3333" cy="16" r="5.33333" fill="url(#paint2_linear_analytics)"/>
            <circle cx="40" cy="18.6667" r="5.33333" fill="url(#paint3_linear_analytics)"/>
            <circle cx="50.6667" cy="10.6667" r="5.33333" fill="url(#paint4_linear_analytics)"/>
            <defs>
                <linearGradient id="paint0_linear_analytics" x1="8" y1="20" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint1_linear_analytics" x1="13" y1="16" x2="24" y2="27" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint2_linear_analytics" x1="24" y1="10.5" x2="35" y2="21.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint3_linear_analytics" x1="34.5" y1="13" x2="45.5" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint4_linear_analytics" x1="45" y1="5" x2="56" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
            </defs>
        </svg>',
        
        'groups' => '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="20" r="8" stroke="url(#paint0_linear_groups)" stroke-width="3"/>
            <circle cx="16" cy="24" r="6" stroke="url(#paint1_linear_groups)" stroke-width="3"/>
            <circle cx="48" cy="24" r="6" stroke="url(#paint2_linear_groups)" stroke-width="3"/>
            <path d="M8 56C8 45.5066 16.5066 37 27 37H37C47.4934 37 56 45.5066 56 56" stroke="url(#paint3_linear_groups)" stroke-width="3" stroke-linecap="round"/>
            <path d="M2 52C2 46.4772 6.47715 42 12 42H20" stroke="url(#paint4_linear_groups)" stroke-width="3" stroke-linecap="round"/>
            <path d="M44 42H52C57.5228 42 62 46.4772 62 52" stroke="url(#paint5_linear_groups)" stroke-width="3" stroke-linecap="round"/>
            <defs>
                <linearGradient id="paint0_linear_groups" x1="22" y1="10" x2="42" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint1_linear_groups" x1="8" y1="16" x2="24" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint2_linear_groups" x1="40" y1="16" x2="56" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint3_linear_groups" x1="6" y1="35" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint4_linear_groups" x1="0" y1="40" x2="22" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint5_linear_groups" x1="42" y1="40" x2="64" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
            </defs>
        </svg>',
        
        'support_agent' => '<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56 32.5867C56 17.9467 44.64 8 32 8C19.4933 8 7.99998 17.7333 7.99998 32.7467C6.39998 33.6533 5.33331 35.36 5.33331 37.3333V42.6667C5.33331 45.6 7.73331 48 10.6666 48C12.1333 48 13.3333 46.8 13.3333 45.3333V32.5067C13.3333 22.2933 21.2 13.36 31.4133 13.0667C41.9733 12.7467 50.6666 21.2267 50.6666 31.7333V50.6667H32C30.5333 50.6667 29.3333 51.8667 29.3333 53.3333C29.3333 54.8 30.5333 56 32 56H50.6666C53.6 56 56 53.6 56 50.6667V47.4133C57.5733 46.5867 58.6666 44.96 58.6666 43.04V36.9067C58.6666 35.04 57.5733 33.4133 56 32.5867Z" fill="url(#paint0_linear_support)"/>
            <path d="M24 37.3333C25.4727 37.3333 26.6666 36.1394 26.6666 34.6667C26.6666 33.1939 25.4727 32 24 32C22.5272 32 21.3333 33.1939 21.3333 34.6667C21.3333 36.1394 22.5272 37.3333 24 37.3333Z" fill="url(#paint1_linear_support)"/>
            <path d="M40 37.3333C41.4727 37.3333 42.6666 36.1394 42.6666 34.6667C42.6666 33.1939 41.4727 32 40 32C38.5272 32 37.3333 33.1939 37.3333 34.6667C37.3333 36.1394 38.5272 37.3333 40 37.3333Z" fill="url(#paint2_linear_support)"/>
            <defs>
                <linearGradient id="paint0_linear_support" x1="1" y1="4" x2="58" y2="68" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint1_linear_support" x1="20" y1="31" x2="27" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
                <linearGradient id="paint2_linear_support" x1="36" y1="31" x2="43" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F25227"/>
                    <stop offset="1" stop-color="#E8AA29"/>
                </linearGradient>
            </defs>
        </svg>'
    ];
    
    return isset($icons[$iconName]) ? $icons[$iconName] : '';
}
?>
