<?php
// Health check API endpoint

try {
    $db = getDB();
    $dbStatus = $db->testConnection();
    
    $health = [
        'ok' => true,
        'status' => 'healthy',
        'timestamp' => date('c'),
        'services' => [
            'database' => $dbStatus ? 'healthy' : 'unhealthy',
            'php' => 'healthy'
        ],
        'version' => '1.0.0',
        'environment' => APP_ENV
    ];
    
    $status_code = $dbStatus ? 200 : 503;
    if (!$dbStatus) {
        $health['ok'] = false;
        $health['status'] = 'degraded';
    }
    
    jsonResponse($health, $status_code);
    
} catch (Exception $e) {
    logError("Health check error: " . $e->getMessage());
    
    jsonResponse([
        'ok' => false,
        'status' => 'unhealthy',
        'timestamp' => date('c'),
        'error' => 'Service unavailable'
    ], 503);
}
?>
