<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($pageTitle) ? escape($pageTitle) : SITE_TITLE; ?></title>
    <meta name="description" content="<?php echo isset($pageDescription) ? escape($pageDescription) : SITE_DESCRIPTION; ?>">
    <meta name="keywords" content="<?php echo SITE_KEYWORDS; ?>">
    <meta name="author" content="<?php echo APP_NAME; ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo isset($pageTitle) ? escape($pageTitle) : SITE_TITLE; ?>">
    <meta property="og:description" content="<?php echo isset($pageDescription) ? escape($pageDescription) : SITE_DESCRIPTION; ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo getCurrentUrl(); ?>">
    <meta property="og:image" content="<?php echo APP_URL; ?>/public/images/logo/logo.png">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo isset($pageTitle) ? escape($pageTitle) : SITE_TITLE; ?>">
    <meta name="twitter:description" content="<?php echo isset($pageDescription) ? escape($pageDescription) : SITE_DESCRIPTION; ?>">
    <meta name="twitter:image" content="<?php echo APP_URL; ?>/public/images/logo/logo.png">
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/public/images/logo/logo.png">
    
    <!-- Preload critical resources only for homepage -->
    <?php if (!isset($currentPage) || $currentPage === 'home'): ?>
    <link rel="preload" href="/public/images/hero/home.jpg" as="image" type="image/jpeg">
    <?php endif; ?>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <!-- Tailwind CSS - Production Build -->
    <link href="/public/css/styles.css" rel="stylesheet">
</head>
<body class="font-inter antialiased bg-white <?php echo (isset($currentPage) && $currentPage === 'login') ? 'login-page' : ''; ?> <?php echo (isset($currentPage)) ? 'page-' . $currentPage : ''; ?>">
    <?php if (!isset($currentPage) || $currentPage !== 'login'): ?>
    <!-- Header -->
    <?php include 'components/header.php'; ?>
    <?php endif; ?>
    
    <!-- Main Content -->
    <?php if (!isset($currentPage) || $currentPage !== 'login'): ?>
    <main class="pt-20">
        <?php echo $content; ?>
    </main>
    <?php else: ?>
    <!-- Login page content without header -->
    <?php echo $content; ?>
    <?php endif; ?>
    
    <!-- Footer -->
    <?php include 'components/footer.php'; ?>
    
    <!-- JavaScript -->
    <script>
        // Global JavaScript functions
        
        // Smooth scroll to anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            const menuButton = document.getElementById('mobile-menu-button');
            
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('animate-fade-in');
                menuButton.innerHTML = '<span class="material-icons">close</span>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('animate-fade-in');
                menuButton.innerHTML = '<span class="material-icons">menu</span>';
            }
        }
        
        // Form submission handlers
        async function submitForm(formId, endpoint) {
            const form = document.getElementById(formId);
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.innerHTML = '<div class="spinner mr-2"></div>Sending...';
            
            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.ok) {
                    showNotification(result.message, 'success');
                    form.reset();
                } else {
                    showNotification(result.error, 'error');
                }
            } catch (error) {
                showNotification('Something went wrong. Please try again.', 'error');
            } finally {
                // Reset button state
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }
        }
        
        
        // Contact form submission
        async function submitContactForm(event) {
            event.preventDefault();
            await submitForm('contact-form', '/api/contact', 'contact');
        }
        
        // Show clean notification banner
        function showNotification(message, type = 'info') {
            // Remove any existing notifications
            const existingNotifications = document.querySelectorAll('.notification-banner');
            existingNotifications.forEach(n => n.remove());
            
            const notification = document.createElement('div');
            notification.className = 'notification-banner fixed top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-xl max-w-sm w-full mx-4 animate-slide-down bg-white text-gray-800 shadow-lg border border-gray-200';
            
            notification.innerHTML = `
                <div class="text-center">
                    <p class="font-medium text-base">${message}</p>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Auto-remove after 4 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.transform = 'translateX(-50%) translateY(-100%)';
                    notification.style.opacity = '0';
                    setTimeout(() => notification.remove(), 300);
                }
            }, 4000);
            
            // Allow manual close by clicking
            notification.addEventListener('click', () => {
                notification.style.transform = 'translateX(-50%) translateY(-100%)';
                notification.style.opacity = '0';
                setTimeout(() => notification.remove(), 300);
            });
        }
        
        // Specific notification functions for different actions
        function showContactSuccessMessage() {
            showNotification('Thank you! We will be contacting you shortly.');
        }
        
        function showLoginSuccessMessage() {
            showNotification('Welcome back! Login successful.');
        }
        
        function showRegistrationSuccessMessage() {
            showNotification('Account created successfully! Welcome aboard.');
        }
        
        // Enhanced Intersection Observer for animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add stagger delay for multiple elements
                    setTimeout(() => {
                        const element = entry.target;
                        
                        // Determine animation type based on element classes or data attributes
                        if (element.classList.contains('slide-left')) {
                            element.classList.add('animate-slide-in-left');
                        } else if (element.classList.contains('slide-right')) {
                            element.classList.add('animate-slide-in-right');
                        } else if (element.classList.contains('scale-in')) {
                            element.classList.add('animate-scale-in');
                        } else if (element.classList.contains('fade-up')) {
                            element.classList.add('animate-fade-in-up');
                        } else {
                            element.classList.add('animate-slide-up');
                        }
                        
                        // Add stagger class for sequential animations
                        if (element.dataset.stagger) {
                            element.classList.add(`stagger-${element.dataset.stagger}`);
                        }
                        
                        // Remove observer after animation
                        observer.unobserve(element);
                    }, index * 100); // Stagger animations by 100ms
                }
            });
        }, observerOptions);
        
        // Counter animation for stats
        function animateCounter(element, target, duration = 2000) {
            let start = 0;
            const increment = target / (duration / 16);
            
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    element.textContent = target + (element.dataset.suffix || '');
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(start) + (element.dataset.suffix || '');
                }
            }, 16);
        }
        
        // Parallax scrolling effect
        function handleParallax() {
            const parallaxElements = document.querySelectorAll('.parallax');
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const rate = scrolled * -0.5;
                element.style.transform = `translateY(${rate}px)`;
            });
        }
        
        // Typing animation effect
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.textContent = '';
            
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }
        
        // Enhanced button hover effects
        function initButtonEffects() {
            const buttons = document.querySelectorAll('.btn-animated');
            
            buttons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.05)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        }
        
        // Smooth reveal for text elements
        function initTextReveal() {
            const textElements = document.querySelectorAll('.text-reveal');
            
            textElements.forEach(element => {
                const words = element.textContent.split(' ');
                element.innerHTML = '';
                
                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.textContent = word + ' ';
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(20px)';
                    span.style.transition = `all 0.6s ease ${index * 0.1}s`;
                    element.appendChild(span);
                });
            });
        }
        
        // Stats hover functionality
        let hoveredCardId = null;
        let lastHighlightedCardId = 'brands-supported'; // Default highlighted card
        
        function handleStatHover(cardId) {
            hoveredCardId = cardId;
            lastHighlightedCardId = cardId;
            updateStatCards();
        }
        
        function handleStatLeave() {
            hoveredCardId = null;
            updateStatCards();
        }
        
        function updateStatCards() {
            const cards = document.querySelectorAll('.stat-card');
            cards.forEach(card => {
                const cardId = card.dataset.statId;
                const shouldHighlight = hoveredCardId 
                    ? hoveredCardId === cardId 
                    : lastHighlightedCardId === cardId;
                
                if (shouldHighlight) {
                    card.classList.add('highlighted');
                } else {
                    card.classList.remove('highlighted');
                }
            });
        }
        
        // Service modal functionality
        const servicesData = <?php echo json_encode($servicesContent['services']); ?>;
        
        function openServiceModal(serviceId) {
            const service = servicesData.find(s => s.id === serviceId);
            if (!service) return;
            
            const modal = document.getElementById('service-modal');
            const modalIcon = document.getElementById('modal-icon');
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            const modalDetails = document.getElementById('modal-details');
            
            // Update modal content
            modalIcon.innerHTML = getServiceIconHTML(service.icon);
            modalTitle.textContent = service.title;
            modalDescription.textContent = service.description;
            modalDetails.textContent = service.detailedDescription;
            
            // Show modal - it will be centered via CSS fixed positioning
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Scroll modal into view if needed
            requestAnimationFrame(() => {
                const modalContent = modal.querySelector('.service-modal-content');
                if (modalContent) {
                    modalContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
            
            // Handle escape key
            document.addEventListener('keydown', handleEscapeKey);
        }
        
        function closeServiceModal() {
            const modal = document.getElementById('service-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'unset';
            
            // Remove escape key listener
            document.removeEventListener('keydown', handleEscapeKey);
        }
        
        function handleEscapeKey(e) {
            if (e.key === 'Escape') {
                closeServiceModal();
            }
        }
        
        function getServiceIconHTML(iconName) {
            const icons = {
                'trending_up': '<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.3333 21.3333H50.6667V34.6667M50.6667 21.3333L32 40L24 32L13.3333 42.6667" stroke="url(#paint0_linear_trending_up)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_trending_up" x1="10" y1="18" x2="54" y2="46" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient></defs></svg>',
                'storefront': '<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 24L16 8H48L56 24V32C56 35.3137 53.3137 38 50 38C46.6863 38 44 35.3137 44 32C44 35.3137 41.3137 38 38 38C34.6863 38 32 35.3137 32 32C32 35.3137 29.3137 38 26 38C22.6863 38 20 35.3137 20 32C20 35.3137 17.3137 38 14 38C10.6863 38 8 35.3137 8 32V24Z" stroke="url(#paint0_linear_storefront)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 38V56H44V38M32 38V56" stroke="url(#paint1_linear_storefront)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_storefront" x1="6" y1="6" x2="58" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint1_linear_storefront" x1="18" y1="36" x2="46" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient></defs></svg>',
                'campaign': '<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.6667 21.3333L53.3333 10.6667L58.6667 16L48 26.6667M42.6667 21.3333L37.3333 26.6667L48 26.6667M42.6667 21.3333L48 26.6667" stroke="url(#paint0_linear_campaign)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="21.3333" cy="42.6667" r="16" stroke="url(#paint1_linear_campaign)" stroke-width="3"/><path d="M13.3333 42.6667H29.3333M21.3333 34.6667V50.6667" stroke="url(#paint2_linear_campaign)" stroke-width="3" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_campaign" x1="35" y1="8" x2="60" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint1_linear_campaign" x1="3" y1="25" x2="40" y2="60" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint2_linear_campaign" x1="11" y1="32" x2="32" y2="53" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient></defs></svg>',
                'inventory': '<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="16" width="48" height="40" rx="4" stroke="url(#paint0_linear_inventory)" stroke-width="3"/><path d="M16 16V12C16 9.79086 17.7909 8 20 8H44C46.2091 8 48 9.79086 48 12V16" stroke="url(#paint1_linear_inventory)" stroke-width="3" stroke-linecap="round"/><path d="M24 32H40M24 40H32" stroke="url(#paint2_linear_inventory)" stroke-width="3" stroke-linecap="round"/><circle cx="18" cy="26" r="2" fill="url(#paint3_linear_inventory)"/><defs><linearGradient id="paint0_linear_inventory" x1="6" y1="14" x2="58" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint1_linear_inventory" x1="14" y1="6" x2="50" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint2_linear_inventory" x1="22" y1="30" x2="42" y2="42" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint3_linear_inventory" x1="16" y1="24" x2="20" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient></defs></svg>',
                'account_balance_wallet': '<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6667 42.6667V21.3333C26.6667 18.4 29.04 16 32 16H56V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.3733 8 8 10.4 8 13.3333V50.6667C8 53.6 10.3733 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667V48H32C29.04 48 26.6667 45.6 26.6667 42.6667ZM34.6667 21.3333C33.2 21.3333 32 22.5333 32 24V40C32 41.4667 33.2 42.6667 34.6667 42.6667H58.6667V21.3333H34.6667ZM42.6667 36C40.4533 36 38.6667 34.2133 38.6667 32C38.6667 29.7867 40.4533 28 42.6667 28C44.88 28 46.6667 29.7867 46.6667 32C46.6667 34.2133 44.88 36 42.6667 36Z" fill="url(#paint0_linear_wallet)"/><defs><linearGradient id="paint0_linear_wallet" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient></defs></svg>',
                'analytics': '<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6667 53.3333H53.3333M18.6667 45.3333V38.6667M29.3333 45.3333V29.3333M40 45.3333V34.6667M50.6667 45.3333V24" stroke="url(#paint0_linear_analytics)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18.6667" cy="21.3333" r="5.33333" fill="url(#paint1_linear_analytics)"/><circle cx="29.3333" cy="16" r="5.33333" fill="url(#paint2_linear_analytics)"/><circle cx="40" cy="18.6667" r="5.33333" fill="url(#paint3_linear_analytics)"/><circle cx="50.6667" cy="10.6667" r="5.33333" fill="url(#paint4_linear_analytics)"/><defs><linearGradient id="paint0_linear_analytics" x1="8" y1="20" x2="56" y2="56" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint1_linear_analytics" x1="13" y1="16" x2="24" y2="27" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint2_linear_analytics" x1="24" y1="10.5" x2="35" y2="21.5" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint3_linear_analytics" x1="34.5" y1="13" x2="45.5" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint4_linear_analytics" x1="45" y1="5" x2="56" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient></defs></svg>',
                'groups': '<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="20" r="8" stroke="url(#paint0_linear_groups)" stroke-width="3"/><circle cx="16" cy="24" r="6" stroke="url(#paint1_linear_groups)" stroke-width="3"/><circle cx="48" cy="24" r="6" stroke="url(#paint2_linear_groups)" stroke-width="3"/><path d="M8 56C8 45.5066 16.5066 37 27 37H37C47.4934 37 56 45.5066 56 56" stroke="url(#paint3_linear_groups)" stroke-width="3" stroke-linecap="round"/><path d="M2 52C2 46.4772 6.47715 42 12 42H20" stroke="url(#paint4_linear_groups)" stroke-width="3" stroke-linecap="round"/><path d="M44 42H52C57.5228 42 62 46.4772 62 52" stroke="url(#paint5_linear_groups)" stroke-width="3" stroke-linecap="round"/><defs><linearGradient id="paint0_linear_groups" x1="22" y1="10" x2="42" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint1_linear_groups" x1="8" y1="16" x2="24" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint2_linear_groups" x1="40" y1="16" x2="56" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint3_linear_groups" x1="6" y1="35" x2="58" y2="58" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint4_linear_groups" x1="0" y1="40" x2="22" y2="54" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint5_linear_groups" x1="42" y1="40" x2="64" y2="54" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient></defs></svg>',
                'support_agent': '<svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56 32.5867C56 17.9467 44.64 8 32 8C19.4933 8 7.99998 17.7333 7.99998 32.7467C6.39998 33.6533 5.33331 35.36 5.33331 37.3333V42.6667C5.33331 45.6 7.73331 48 10.6666 48C12.1333 48 13.3333 46.8 13.3333 45.3333V32.5067C13.3333 22.2933 21.2 13.36 31.4133 13.0667C41.9733 12.7467 50.6666 21.2267 50.6666 31.7333V50.6667H32C30.5333 50.6667 29.3333 51.8667 29.3333 53.3333C29.3333 54.8 30.5333 56 32 56H50.6666C53.6 56 56 53.6 56 50.6667V47.4133C57.5733 46.5867 58.6666 44.96 58.6666 43.04V36.9067C58.6666 35.04 57.5733 33.4133 56 32.5867Z" fill="url(#paint0_linear_support)"/><path d="M24 37.3333C25.4727 37.3333 26.6666 36.1394 26.6666 34.6667C26.6666 33.1939 25.4727 32 24 32C22.5272 32 21.3333 33.1939 21.3333 34.6667C21.3333 36.1394 22.5272 37.3333 24 37.3333Z" fill="url(#paint1_linear_support)"/><path d="M40 37.3333C41.4727 37.3333 42.6666 36.1394 42.6666 34.6667C42.6666 33.1939 41.4727 32 40 32C38.5272 32 37.3333 33.1939 37.3333 34.6667C37.3333 36.1394 38.5272 37.3333 40 37.3333Z" fill="url(#paint2_linear_support)"/><defs><linearGradient id="paint0_linear_support" x1="1" y1="4" x2="58" y2="68" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint1_linear_support" x1="20" y1="31" x2="27" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient><linearGradient id="paint2_linear_support" x1="36" y1="31" x2="43" y2="38" gradientUnits="userSpaceOnUse"><stop stop-color="#F25227"/><stop offset="1" stop-color="#E8AA29"/></linearGradient></defs></svg>'
            };
            
            return icons[iconName] || '';
        }
        
        // Enhanced Intersection Observer with multiple animation types
        const enhancedObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add animate class for CSS transitions
                    if (element.classList.contains('observe-fade-in') || 
                        element.classList.contains('observe-slide-left') || 
                        element.classList.contains('observe-slide-right')) {
                        element.classList.add('animate');
                    }
                    
                    // Handle stagger animations
                    if (element.classList.contains('stagger-container')) {
                        element.classList.add('animate');
                        const items = element.querySelectorAll('.stagger-item');
                        items.forEach((item, index) => {
                            setTimeout(() => {
                                item.style.animationDelay = `${index * 0.1}s`;
                                item.classList.add('animate');
                            }, index * 100);
                        });
                    }
                    
                    // Handle counter animations
                    if (element.classList.contains('counter')) {
                        const target = parseInt(element.dataset.target);
                        if (target) {
                            animateCounter(element, target);
                        }
                    }
                    
                    // Stop observing once animated
                    enhancedObserver.unobserve(element);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Initialize all animations
        document.addEventListener('DOMContentLoaded', () => {
            // Add page transition class to body
            document.body.classList.add('page-transition');
            
            // Observe elements with enhanced animation classes
            document.querySelectorAll('.observe-fade-in, .observe-slide-left, .observe-slide-right, .stagger-container, .counter').forEach(el => {
                enhancedObserver.observe(el);
            });
            
            // Observe elements with original animation classes for backward compatibility
            document.querySelectorAll('.observe-animation').forEach(el => {
                observer.observe(el);
            });
            
            // Initialize stats hover functionality
            updateStatCards();
            
            // Initialize button effects
            initButtonEffects();
            
            // Initialize text reveal
            initTextReveal();
            
            // Add parallax scrolling
            window.addEventListener('scroll', handleParallax);
            
            // Enhanced navigation item animations with stagger
            const navItems = document.querySelectorAll('.nav-link');
            navItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(-20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100 + 200);
            });
            
            // Add enhanced button classes to existing buttons
            document.querySelectorAll('button, .btn-animated').forEach(btn => {
                btn.classList.add('btn-enhanced');
            });
            
            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>
