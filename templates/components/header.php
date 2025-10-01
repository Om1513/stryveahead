<?php
// Load configuration if not already loaded
if (!defined('APP_NAME')) {
    require_once __DIR__ . '/../../config/config.php';
    require_once __DIR__ . '/../../includes/functions.php';
}

// Load navigation data
if (!isset($navigationItems)) {
    require_once __DIR__ . '/../../includes/content.php';
}
?>

<!-- SVG gradient definition -->
<svg class="nav-gradient-svg">
    <defs>
        <linearGradient id="nav-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F25227" />
            <stop offset="100%" stop-color="#E8AA29" />
        </linearGradient>
    </defs>
</svg>

<header class="site-header">
    <div class="header-container">
        <!-- Logo -->
        <a href="/" class="site-logo" aria-label="<?php echo APP_NAME; ?> - Home">
            <img src="/public/images/logo/logo.png" alt="<?php echo APP_NAME; ?> Advisors Logo" loading="eager" />
        </a>
        
        <!-- Desktop Navigation -->
        <div class="desktop-nav-wrapper">
            <nav class="desktop-nav" role="navigation" aria-label="Main navigation">
                <?php foreach ($navigationItems as $item): ?>
                <a href="<?php echo escape($item['href']); ?>" 
                   class="nav-link"
                   <?php if (isset($item['external']) && $item['external']): ?>
                   target="_blank" rel="noopener noreferrer"
                   <?php endif; ?>>
                    <span><?php echo str_replace(' ', '&#160;', escape($item['label'])); ?></span>
                </a>
                <?php endforeach; ?>
                
                <!-- Desktop Login/Logout Button -->
                <div id="desktop-auth-button">
                    <a href="/login" id="desktop-login-btn" class="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 hover:scale-105 btn-enhanced">
                        Login
                    </a>
                    <button id="desktop-logout-btn" onclick="logout()" class="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-lg font-medium hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 hover:scale-105 btn-enhanced hidden">
                        Logout
                    </button>
                </div>
            </nav>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-button" 
                onclick="toggleMobileMenu()" 
                aria-label="Open menu"
                aria-expanded="false"
                aria-controls="mobile-menu"
                id="mobile-menu-button">
            <div class="relative w-5 h-5">
                <svg class="menu-icon menu" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg class="menu-icon close" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>
        </button>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu-overlay" class="mobile-menu-overlay" onclick="closeMobileMenu()"></div>
    
    <!-- Mobile Menu Panel -->
    <div id="mobile-menu" class="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
        <!-- Menu Header -->
        <div class="mobile-menu-header">
            <button class="mobile-menu-close" onclick="closeMobileMenu()" aria-label="Close menu">
                <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <span class="mobile-menu-title">Menu</span>
        </div>
        
        <!-- Navigation Items -->
        <nav class="mobile-menu-nav" role="navigation" aria-label="Mobile navigation">
            <div class="mobile-menu-links">
                <?php foreach ($navigationItems as $item): ?>
                <a href="<?php echo escape($item['href']); ?>" 
                   class="mobile-nav-link"
                   onclick="closeMobileMenu()"
                   <?php if (isset($item['external']) && $item['external']): ?>
                   target="_blank" rel="noopener noreferrer"
                   <?php endif; ?>>
                    <?php echo str_replace(' ', '&#160;', escape($item['label'])); ?>
                </a>
                <?php endforeach; ?>
                
                <!-- Mobile Login/Logout Button -->
                <div class="mobile-login-section" id="mobile-auth-section">
                    <a href="/login" id="mobile-login-btn" class="mobile-login-button" onclick="closeMobileMenu()">
                        Login
                    </a>
                    <button id="mobile-logout-btn" onclick="logout(); closeMobileMenu();" class="mobile-login-button bg-red-500 hover:bg-red-600 hidden">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    </div>
</header>

<script>
let isMobileMenuOpen = false;

function toggleMobileMenu() {
    if (isMobileMenuOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    isMobileMenuOpen = true;
    const overlay = document.getElementById('mobile-menu-overlay');
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    const menuIcon = button.querySelector('.menu-icon.menu');
    const closeIcon = button.querySelector('.menu-icon.close');
    
    // Show overlay and menu
    overlay.classList.add('open');
    menu.classList.add('open');
    
    // Update button state
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close menu');
    
    // Animate icons
    menuIcon.classList.add('open');
    closeIcon.classList.add('open');
    
    // Lock body scroll
    document.body.classList.add('body-scroll-lock');
}

function closeMobileMenu() {
    isMobileMenuOpen = false;
    const overlay = document.getElementById('mobile-menu-overlay');
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    const menuIcon = button.querySelector('.menu-icon.menu');
    const closeIcon = button.querySelector('.menu-icon.close');
    
    // Hide overlay and menu
    overlay.classList.remove('open');
    menu.classList.remove('open');
    
    // Update button state
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
    
    // Animate icons
    menuIcon.classList.remove('open');
    closeIcon.classList.remove('open');
    
    // Unlock body scroll
    document.body.classList.remove('body-scroll-lock');
}

// Close menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
    }
});

// Close menu when clicking on navigation links
document.addEventListener('click', function(e) {
    if (e.target.matches('.mobile-nav-link')) {
        closeMobileMenu();
    }
});

// Global logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = '/';
}

// Update auth buttons based on login status
function updateAuthButtons() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Desktop buttons
    const desktopLoginBtn = document.getElementById('desktop-login-btn');
    const desktopLogoutBtn = document.getElementById('desktop-logout-btn');
    
    // Mobile buttons
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    const mobileLogoutBtn = document.getElementById('mobile-logout-btn');
    
    if (isLoggedIn) {
        // Show logout, hide login
        if (desktopLoginBtn) desktopLoginBtn.classList.add('hidden');
        if (desktopLogoutBtn) desktopLogoutBtn.classList.remove('hidden');
        if (mobileLoginBtn) mobileLoginBtn.classList.add('hidden');
        if (mobileLogoutBtn) mobileLogoutBtn.classList.remove('hidden');
    } else {
        // Show login, hide logout
        if (desktopLoginBtn) desktopLoginBtn.classList.remove('hidden');
        if (desktopLogoutBtn) desktopLogoutBtn.classList.add('hidden');
        if (mobileLoginBtn) mobileLoginBtn.classList.remove('hidden');
        if (mobileLogoutBtn) mobileLogoutBtn.classList.add('hidden');
    }
}

// Update auth buttons on page load
document.addEventListener('DOMContentLoaded', updateAuthButtons);
</script>