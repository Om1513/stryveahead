<?php
// Load configuration if not already loaded
if (!defined('APP_NAME')) {
    require_once __DIR__ . '/../config/config.php';
    require_once __DIR__ . '/../includes/functions.php';
}

$pageTitle = 'Dashboard - ' . APP_NAME;
$pageDescription = 'Analytics Dashboard - ' . APP_NAME;

ob_start();
?>

<main class="min-h-screen" style="background: linear-gradient(135deg, #F25227 0%, #E8AA29 100%);">
    <div class="container mx-auto px-6 sm:px-12 lg:px-24">
        <div class="flex flex-col items-center justify-center min-h-screen py-12">
            <!-- Dashboard Header -->
            <div class="text-center mb-8 fade-in-up">
                <h1 class="text-4xl font-bold text-white mb-4">
                    Analytics Dashboard
                </h1>
                <p class="text-white/90 text-lg">
                    Welcome to your growth intelligence dashboard
                </p>
            </div>

            <!-- Dashboard Content -->
            <div class="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8 slide-in-up">
                <!-- Looker Studio Embed -->
                <div class="w-full flex justify-center">
                    <iframe 
                        width="100%" 
                        height="600" 
                        src="https://lookerstudio.google.com/embed/reporting/04627c28-a37a-4a3f-a843-6d4ef7225d44/page/p_r654tn9rtd" 
                        frameborder="0" 
                        style="border:0; min-width: 600px; max-width: 1200px;" 
                        allowfullscreen 
                        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox">
                    </iframe>
                </div>
                
                <!-- Dashboard Footer -->
                <div class="mt-8 text-center">
                    <button 
                        onclick="logout()" 
                        class="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 hover:scale-105 btn-enhanced">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
// Check if user is logged in
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
        window.location.href = '/login';
        return;
    }
    
    // Add page transition animation
    document.body.classList.add('page-transition');
});

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = '/';
}

// Make iframe responsive
function resizeIframe() {
    const iframe = document.querySelector('iframe');
    const container = iframe.parentElement;
    const containerWidth = container.offsetWidth;
    
    if (containerWidth < 600) {
        iframe.style.width = '100%';
        iframe.style.minWidth = '100%';
        iframe.style.height = '400px';
    } else {
        iframe.style.width = '100%';
        iframe.style.minWidth = '600px';
        iframe.style.height = '600px';
    }
}

// Resize on load and window resize
window.addEventListener('load', resizeIframe);
window.addEventListener('resize', resizeIframe);
</script>

<?php
$content = ob_get_clean();
include 'templates/layout.php';
?>
