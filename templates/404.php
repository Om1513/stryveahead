<?php
// Load configuration if not already loaded
if (!defined('APP_NAME')) {
    require_once __DIR__ . '/../config/config.php';
    require_once __DIR__ . '/../includes/functions.php';
}

$pageTitle = '404 - Page Not Found - ' . APP_NAME;
$pageDescription = 'The page you are looking for could not be found.';

ob_start();
?>

<section class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full text-center space-y-8">
        <div>
            <img src="/public/images/logo/logo.png" alt="<?php echo APP_NAME; ?>" class="mx-auto h-16 w-auto mb-8">
            
            <div class="text-9xl font-bold text-orange-button mb-4">404</div>
            
            <h1 class="text-3xl font-extrabold text-gray-900 mb-4">
                Page Not Found
            </h1>
            
            <p class="text-lg text-gray-600 mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            
            <div class="space-y-4">
                <a href="/" 
                   class="inline-block bg-orange-button hover:bg-orange-button/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                    Go Back Home
                </a>
                
                <div class="text-sm text-gray-500">
                    <p>or</p>
                </div>
                
                <button onclick="history.back()" 
                        class="inline-block border border-gray-300 hover:border-orange-button text-gray-700 hover:text-orange-button font-medium py-3 px-6 rounded-xl transition-all duration-300">
                    Go Back
                </button>
            </div>
        </div>
        
        <!-- Quick Links -->
        <div class="pt-8 border-t border-gray-200">
            <p class="text-sm text-gray-600 mb-4">Quick Links:</p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="#about" class="text-sm text-orange-button hover:text-orange-button/80 transition-colors">About Us</a>
                <a href="#services" class="text-sm text-orange-button hover:text-orange-button/80 transition-colors">Services</a>
                <a href="#portfolio" class="text-sm text-orange-button hover:text-orange-button/80 transition-colors">Portfolio</a>
                <a href="#team" class="text-sm text-orange-button hover:text-orange-button/80 transition-colors">Team</a>
                <a href="#contact" class="text-sm text-orange-button hover:text-orange-button/80 transition-colors">Contact Us</a>
            </div>
        </div>
    </div>
</section>

<?php
$content = ob_get_clean();
include 'templates/layout.php';
?>
