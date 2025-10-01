<?php
// Simple admin page to view contact submissions
// SECURE THIS PAGE IN PRODUCTION!

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../includes/mysqli_connection.php';

// Simple password protection (change this in production!)
$admin_password = "admin123";
$is_authenticated = false;

if (isset($_POST['password'])) {
    if ($_POST['password'] === $admin_password) {
        $is_authenticated = true;
        setcookie('admin_auth', hash('sha256', $admin_password), time() + 3600, '/');
    }
} elseif (isset($_COOKIE['admin_auth']) && $_COOKIE['admin_auth'] === hash('sha256', $admin_password)) {
    $is_authenticated = true;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Submissions - StryveAhead Admin</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .login-form { max-width: 300px; margin: 100px auto; }
        .login-form input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 4px; }
        .login-form button { width: 100%; padding: 10px; background: #007cba; color: white; border: none; border-radius: 4px; cursor: pointer; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f2f2f2; font-weight: bold; }
        tr:hover { background-color: #f5f5f5; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .logout { color: #dc3545; text-decoration: none; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: #007cba; color: white; padding: 20px; border-radius: 8px; text-align: center; }
        .stat-number { font-size: 2em; font-weight: bold; }
        .export-btn { background: #28a745; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; }
    </style>
</head>
<body>

<?php if (!$is_authenticated): ?>
    <div class="login-form container">
        <h2>Admin Login</h2>
        <form method="POST">
            <input type="password" name="password" placeholder="Enter admin password" required>
            <button type="submit">Login</button>
        </form>
        <p><small>Default password: admin123</small></p>
    </div>
<?php else: ?>
    <div class="container">
        <div class="header">
            <h1>📋 Contact Submissions</h1>
            <div>
                <a href="?export=csv" class="export-btn">Export CSV</a>
                <a href="?logout=1" class="logout">Logout</a>
            </div>
        </div>

        <?php
        // Handle logout
        if (isset($_GET['logout'])) {
            setcookie('admin_auth', '', time() - 3600, '/');
            header('Location: ' . $_SERVER['PHP_SELF']);
            exit;
        }

        try {
            // Get statistics
            $conn = connectDatabase();
            
            $total_result = mysqli_query($conn, "SELECT COUNT(*) as total FROM contact_info");
            $total_contacts = mysqli_fetch_assoc($total_result)['total'];
            
            $today_result = mysqli_query($conn, "SELECT COUNT(*) as today FROM contact_info WHERE DATE(submitted_at) = CURDATE()");
            $today_contacts = mysqli_fetch_assoc($today_result)['today'];
            
            $week_result = mysqli_query($conn, "SELECT COUNT(*) as week FROM contact_info WHERE submitted_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)");
            $week_contacts = mysqli_fetch_assoc($week_result)['week'];
            
            closeDatabase($conn);
            
            echo "<div class='stats'>";
            echo "<div class='stat-card'><div class='stat-number'>$total_contacts</div><div>Total Contacts</div></div>";
            echo "<div class='stat-card'><div class='stat-number'>$today_contacts</div><div>Today</div></div>";
            echo "<div class='stat-card'><div class='stat-number'>$week_contacts</div><div>This Week</div></div>";
            echo "</div>";

            // Handle CSV export
            if (isset($_GET['export']) && $_GET['export'] === 'csv') {
                $contacts = getContactSubmissions(1000);
                
                header('Content-Type: text/csv');
                header('Content-Disposition: attachment; filename="contact_submissions_' . date('Y-m-d') . '.csv"');
                
                $output = fopen('php://output', 'w');
                fputcsv($output, ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Company', 'Designation', 'Industry', 'Website', 'Submitted At']);
                
                foreach ($contacts as $contact) {
                    fputcsv($output, [
                        $contact['id'],
                        $contact['first_name'],
                        $contact['last_name'],
                        $contact['email'],
                        $contact['phone'],
                        $contact['company_name'],
                        $contact['designation'],
                        $contact['industry'],
                        $contact['website_url'],
                        $contact['submitted_at']
                    ]);
                }
                fclose($output);
                exit;
            }

            // Get recent contacts
            $contacts = getContactSubmissions(50);
            
            if (empty($contacts)) {
                echo "<p>No contact submissions yet.</p>";
            } else {
                echo "<table>";
                echo "<tr><th>ID</th><th>Name</th><th>Email</th><th>Company</th><th>Phone</th><th>Industry</th><th>Submitted</th></tr>";
                
                foreach ($contacts as $contact) {
                    echo "<tr>";
                    echo "<td>" . $contact['id'] . "</td>";
                    echo "<td>" . htmlspecialchars($contact['first_name'] . ' ' . $contact['last_name']) . "</td>";
                    echo "<td>" . htmlspecialchars($contact['email']) . "</td>";
                    echo "<td>" . htmlspecialchars($contact['company_name']) . "</td>";
                    echo "<td>" . htmlspecialchars($contact['phone']) . "</td>";
                    echo "<td>" . htmlspecialchars($contact['industry']) . "</td>";
                    echo "<td>" . date('M j, Y H:i', strtotime($contact['submitted_at'])) . "</td>";
                    echo "</tr>";
                }
                echo "</table>";
            }
            
        } catch (Exception $e) {
            echo "<div style='color: red; background: #f8d7da; padding: 15px; border-radius: 5px;'>";
            echo "<strong>Error:</strong> " . htmlspecialchars($e->getMessage());
            echo "</div>";
        }
        ?>
        
        <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 5px;">
            <h3>⚠️ Security Notice</h3>
            <p><strong>This is a basic admin interface. For production use:</strong></p>
            <ul>
                <li>Change the default password</li>
                <li>Add proper authentication</li>
                <li>Restrict access by IP if needed</li>
                <li>Use HTTPS only</li>
            </ul>
        </div>
    </div>
<?php endif; ?>

</body>
</html>

