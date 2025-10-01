<?php
// Load configuration if not already loaded
if (!defined('APP_NAME')) {
    require_once __DIR__ . '/../../config/config.php';
    require_once __DIR__ . '/../../includes/functions.php';
}

// Load content data
if (!isset($footerContent)) {
    require_once __DIR__ . '/../../includes/content.php';
}
?>

<footer class="bg-soft">
    <div class="container mx-auto px-6 sm:px-12 lg:px-24">
        <div class="flex justify-center items-center py-12 sm:py-16 lg:py-17">
            <div class="w-full max-w-[800px] flex flex-col items-center">
                <!-- Logo -->
                <div class="mb-12 sm:mb-16 lg:mb-18 footer-logo">
                    <img src="/public/images/logo/logo.png" alt="<?php echo APP_NAME; ?>" class="h-12 w-auto">
                </div>

                <!-- Quick Links -->
                <div class="flex items-center gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 flex-wrap justify-center footer-links">
                    <?php foreach ($footerContent['quickLinks'] as $index => $item): ?>
                    <a href="<?php echo escape($item['href']); ?>"
                       class="text-paragraph text-center font-inter text-base sm:text-lg lg:text-xl font-bold leading-6 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-sm whitespace-nowrap footer-nav-link">
                        <?php echo escape($item['label']); ?>
                    </a>
                    <?php endforeach; ?>
                </div>

                <!-- Contact Information -->
                <div class="flex items-center gap-4 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20 flex-wrap justify-center footer-contact">
                    <!-- Location -->
                    <div class="flex items-center gap-2 footer-contact-item">
                        <span class="material-icons footer-icon">location_on</span>
                        <span class="text-paragraph font-inter text-base sm:text-lg font-normal leading-6 whitespace-nowrap">
                            <?php echo escape($footerContent['contact']['address']['street'] . ', ' . $footerContent['contact']['address']['city']); ?>
                        </span>
                    </div>

                    <!-- Phone -->
                    <a href="tel:<?php echo escape($footerContent['contact']['phone']); ?>"
                       class="flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-sm footer-contact-item">
                        <span class="material-icons footer-icon">phone</span>
                        <span class="text-paragraph font-inter text-base sm:text-lg font-normal leading-6 whitespace-nowrap">
                            <?php echo escape($footerContent['contact']['phone']); ?>
                        </span>
                    </a>

                    <!-- Email -->
                    <a href="mailto:<?php echo escape($footerContent['contact']['email']); ?>"
                       class="flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-sm footer-contact-item">
                        <span class="material-icons footer-icon">email</span>
                        <span class="text-paragraph font-inter text-base sm:text-lg font-normal leading-6 whitespace-nowrap">
                            <?php echo escape($footerContent['contact']['email']); ?>
                        </span>
                    </a>
                </div>

                <!-- Company Description -->
                <p class="text-paragraph text-center font-inter text-base sm:text-lg font-normal leading-7 max-w-[600px] sm:max-w-[700px] px-4 footer-description">
                    We partner with high-growth brands to accelerate scale, unlock competitive advantage, and maximise profitability.
                </p>
            </div>
        </div>
    </div>
</footer>
