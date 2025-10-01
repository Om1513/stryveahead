<?php
// Admin contacts API endpoint

// Check if user is logged in
if (empty($_SESSION['logged_in']) || !$_SESSION['logged_in']) {
    jsonResponse(['ok' => false, 'error' => 'Unauthorized'], 401);
}

try {
    $db = getDB();
    
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        // Get contacts with pagination
        $limit = isset($_GET['limit']) ? max(1, min(100, (int)$_GET['limit'])) : 50;
        $offset = isset($_GET['offset']) ? max(0, (int)$_GET['offset']) : 0;
        
        $contacts = $db->getContactInfo($limit, $offset);
        $total = $db->getContactCount();
        
        jsonResponse([
            'ok' => true,
            'data' => $contacts,
            'pagination' => [
                'total' => $total,
                'limit' => $limit,
                'offset' => $offset,
                'hasMore' => ($offset + $limit) < $total
            ]
        ]);
        
    } else {
        jsonResponse(['ok' => false, 'error' => 'Method not allowed'], 405);
    }
    
} catch (Exception $e) {
    logError("Admin contacts error: " . $e->getMessage());
    
    jsonResponse([
        'ok' => false,
        'error' => 'Failed to retrieve contacts'
    ], 500);
}
?>
