<?php
// Load configuration if not already loaded
if (!defined('APP_NAME')) {
    require_once __DIR__ . '/../config/config.php';
    require_once __DIR__ . '/../includes/functions.php';
}

// Load content data
require_once __DIR__ . '/../includes/content.php';

$pageTitle = 'Raise. Scale. Grow. - ' . APP_NAME;
$pageDescription = SITE_DESCRIPTION;

ob_start();
?>

<!-- Hero Section -->
<section class="relative bg-gradient-hero py-8 sm:py-12 lg:py-16 overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
        <!-- Semi-transparent white rectangles -->
        <div class="absolute -left-96 -top-2 w-[720px] h-[665px] bg-white/5 rounded-[80px]"></div>
        <div class="absolute -left-[70px] top-[496px] w-[496px] h-[576px] bg-white/5 rounded-[80px]"></div>
        <div class="absolute left-[1071px] top-[247px] w-[496px] h-[665px] bg-white/5 rounded-[80px]"></div>
        
        <!-- Animated Dots pattern -->
        <div class="absolute right-10 bottom-32 opacity-30 dots-pattern animate-float">
            <?php for ($i = 0; $i < 24; $i++): 
                $row = floor($i / 6);
                $col = $i % 6;
            ?>
            <div class="dot-animated" 
                 style="left: <?php echo $col * 40 + 10; ?>px; top: <?php echo $row * 40 + 10; ?>px; animation-delay: <?php echo $i * 0.1; ?>s;"></div>
            <?php endfor; ?>
        </div>
    </div>
    
    <div class="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <!-- Hero Content -->
            <div class="text-white lg:flex-[3] lg:max-w-5xl text-center sm:text-left stagger-container">
                <h1 class="text-[55px] font-bold font-inter mb-6 sm:mb-8 leading-[60px] tracking-[-0.02em] text-center sm:text-left hero-title">
                    <?php echo escape($heroContent['title']); ?>
                </h1>

                <p class="text-body-lg sm:text-xl font-inter mb-8 sm:mb-12 text-white/90 leading-[1.5] font-medium tracking-[-0.01em] text-center sm:text-left hero-description">
                    <?php echo nl2br(escape($heroContent['description'])); ?>
                </p>

                <div class="flex justify-center sm:justify-start hero-cta">
                    <a href="#contact">
                        <button class="bg-orange-button hover:bg-orange-button/90 text-white font-semibold font-inter px-6 sm:px-12 py-4 sm:py-5 h-[50px] sm:h-[60px] rounded-2xl shadow-[0px_62px_85px_-22px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 text-base sm:text-lg tracking-[-0.01em] btn-animated">
                            <?php echo escape($heroContent['primaryCta']); ?>
                        </button>
                    </a>
                </div>
            </div>
            
            <!-- Hero Image -->
            <div class="relative h-[400px] sm:h-[500px] lg:h-[700px] lg:flex-[2] w-full hero-image">
                <div class="absolute inset-0 rounded-2xl shadow-[24px_30px_51px_0px_rgba(0,0,0,0.1)] overflow-hidden">
                    <img 
                        src="/public/images/hero/home.jpg" 
                        alt="StryveAhead Growth Intelligence Suite"
                        class="w-full h-full object-cover"
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="py-12 sm:py-16 lg:py-24 bg-white">
    <div class="container mx-auto px-6 sm:px-12 lg:px-24">
        <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <!-- About Image -->
            <div class="relative order-2 lg:order-1 about-image">
                <div class="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                    <img 
                        src="/public/images/about/teamwork.jpg" 
                        alt="StryveAhead Team Collaboration"
                        class="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
            
            <!-- About Content -->
            <div class="order-1 lg:order-2 about-content">
                <h2 class="text-[67px] font-bold leading-[80px] text-neutral-900 mb-4 sm:mb-6 font-inter text-center sm:text-left about-title">
                    <?php echo escape($aboutContent['title']); ?>
                </h2>
                
                <p class="text-body-lg text-neutral-600 mb-6 sm:mb-8 leading-relaxed about-description">
                    <?php echo escape($aboutContent['description']); ?>
                </p>
                
                <div class="space-y-3 sm:space-y-4 mb-6 sm:mb-8 about-features">
                    <?php foreach ($aboutContent['features'] as $index => $feature): ?>
                    <div class="flex items-start gap-3 feature-item">
                        <div class="feature-check"></div>
                        <p class="text-body text-neutral-700 leading-relaxed">
                            <?php echo escape($feature); ?>
                        </p>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="relative py-16 sm:py-24 stats-section">
    <!-- Decorative Circles Background -->
    <div class="stats-circles">
        <div class="stats-circle stats-circle-1"></div>
        <div class="stats-circle stats-circle-2"></div>
        <div class="stats-circle stats-circle-3"></div>
        <div class="stats-circle stats-circle-4"></div>
    </div>

    <div class="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div class="stats-grid stats-container" id="stats-container">
            <?php foreach ($statsContent['stats'] as $index => $stat): ?>
            <div class="stat-card <?php echo (isset($stat['highlighted']) && $stat['highlighted']) ? 'highlighted' : ''; ?>" 
                 tabindex="0" 
                 role="article" 
                 aria-label="Statistic: <?php echo escape($stat['number'] . ' ' . $stat['label']); ?>"
                 data-stat-id="<?php echo escape($stat['id']); ?>"
                 onmouseenter="handleStatHover('<?php echo escape($stat['id']); ?>')"
                 onmouseleave="handleStatLeave()">
                
                <!-- Decorative Background Elements -->
                <div class="stat-decorative-1"></div>
                <div class="stat-decorative-2"></div>

                <!-- Content -->
                <div class="stat-content">
                    <div class="stat-inner">
                        <div class="stat-number counter" 
                             data-target="<?php echo preg_replace('/[^0-9]/', '', $stat['number']); ?>" 
                             data-suffix="<?php echo preg_replace('/[0-9]/', '', $stat['number']); ?>">
                            0<?php echo preg_replace('/[0-9]/', '', $stat['number']); ?>
                        </div>
                        <div class="stat-label">
                            <?php echo escape($stat['label']); ?>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="relative py-16 sm:py-24 services-section" aria-label="Services section">
    <!-- Background decorative elements -->
    <div class="absolute -left-[105px] top-[322px] w-[496px] h-[576px] rounded-[80px] bg-paragraph opacity-5"></div>
    <div class="absolute left-[526px] top-[424px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5"></div>
    <div class="absolute left-[954px] top-[420px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5"></div>
    <div class="absolute left-[321px] top-[420px] w-[164px] h-[190px] rounded-[20px] bg-white opacity-5"></div>
    <div class="absolute left-[1177px] top-[618px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5"></div>
    <div class="absolute left-[98px] top-[617px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5"></div>
    <div class="absolute left-[749px] top-[570px] w-[164px] h-[190px] rounded-[80px] bg-white opacity-5"></div>

    <div class="container mx-auto px-6 sm:px-12 lg:px-24">
        <div class="relative">
            <!-- Header Section -->
            <div class="services-header">
                <!-- Title -->
                <div class="w-full">
                    <h2 class="services-title">
                        <?php echo escape($servicesContent['title']); ?>
                    </h2>
                </div>
                
                <!-- Description -->
                <div class="w-full">
                    <p class="services-description">
                        <?php echo escape($servicesContent['description']); ?>
                    </p>
                </div>
            </div>

            <!-- Services Grid - 4x2 Layout -->
            <div class="relative services-container">
                <div class="services-grid">
                    <?php foreach ($servicesContent['services'] as $service): ?>
                    <div class="service-card" 
                         aria-label="<?php echo escape($service['title']); ?> service"
                         onclick="openServiceModal('<?php echo escape($service['id']); ?>')">
                        
                        <!-- Card Background -->
                        <div class="service-card-bg"></div>

                        <!-- Content Container -->
                        <div class="service-content">
                            <!-- Icon -->
                            <div class="service-icon-container">
                                <div class="service-icon">
                                    <?php echo getServiceIcon($service['icon']); ?>
                                </div>
                            </div>

                            <!-- Text Content -->
                            <div class="service-text-content">
                                <!-- Title - Fixed height for consistency -->
                                <div class="service-title-container">
                                    <h3 class="service-title">
                                        <?php echo escape($service['title']); ?>
                                    </h3>
                                </div>
                                
                                <!-- Description - Starts from same baseline -->
                                <div class="service-description-container">
                                    <p class="service-description">
                                        <?php echo escape($service['description']); ?>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>

    <!-- Service Modal -->
    <div id="service-modal" class="service-modal" style="display: none;">
        <!-- Backdrop with blur -->
        <div class="service-modal-backdrop" onclick="closeServiceModal()"></div>

        <!-- Modal Content -->
        <div class="service-modal-content modal-enter">
            <!-- Close Button -->
            <button class="service-modal-close" onclick="closeServiceModal()" aria-label="Close modal">
                <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Modal Content -->
            <div class="service-modal-body">
                <!-- Icon -->
                <div class="service-modal-icon">
                    <div class="w-20 h-20" id="modal-icon"></div>
                </div>

                <!-- Title -->
                <h2 class="service-modal-title" id="modal-title"></h2>

                <!-- One-line description -->
                <p class="service-modal-description" id="modal-description"></p>

                <!-- Separator line -->
                <div class="service-modal-separator"></div>

                <!-- Detailed description -->
                <div class="service-modal-details">
                    <p class="service-modal-details-text" id="modal-details"></p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Portfolio/Clients Section -->
<section id="portfolio" class="py-12 sm:py-20 bg-white">
    <div class="container mx-auto px-6 sm:px-12 lg:px-24">
        <div class="text-center mb-16 observe-animation">
            <h2 class="text-[60px] font-bold leading-[60px] text-gray-900 mb-6 font-inter">
                Our Portfolio
            </h2>
        </div>
        
        <div class="relative">
            <!-- Gradient overlay for fade effect -->
            <div class="absolute inset-0 portfolio-gradient"></div>
            
            <!-- Logo Belt Container -->
            <div class="overflow-hidden py-8 md:py-12">
                <div class="logo-belt">
                    <?php 
                    // Create 4 sets of logos for seamless infinite scroll
                    $logoSets = array_merge($clientLogos, $clientLogos, $clientLogos, $clientLogos);
                    
                    // Special size clients
                    $specialSizeClients = ['TWF', 'Scandalous', 'Indic', 'Vanity Wagon', 'BBetter'];
                    
                    foreach ($logoSets as $index => $client): 
                        $isSpecialSize = in_array($client['name'], $specialSizeClients);
                        $sizeClass = $isSpecialSize ? 'special-size' : 'normal-size';
                    ?>
                    <div class="logo-item <?php echo $sizeClass; ?>" 
                         role="img" 
                         aria-label="<?php echo escape($client['name']); ?> logo">
                        <img 
                            src="<?php echo escape($client['image']); ?>" 
                            alt="<?php echo escape($client['name']); ?> logo"
                            loading="lazy"
                        />
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Team Section -->
<section id="team" class="relative py-16 sm:py-24 team-section">
    <!-- Background circle on the right -->
    <div class="absolute right-[72px] top-[108px] w-[496px] h-[576px] rounded-[80px] bg-neutral-600 opacity-5"></div>

    <div class="container mx-auto px-6 sm:px-12 lg:px-24">
        <div class="team-container">
            <!-- Left Content -->
            <div class="team-content team-content-animate">
                <div class="mb-8 text-center lg:text-left">
                    <h2 class="team-title">
                        <?php echo escape($teamContent['title']); ?>
                    </h2>
                    <p class="team-description">
                        <?php echo escape($teamContent['description']); ?>
                    </p>
                </div>
            </div>

            <!-- Right Content - Large Team Card -->
            <div class="team-card-container team-card-animate">
                <?php if (!empty($teamContent['members'])): ?>
                    <?php $member = $teamContent['members'][0]; ?>
                    <div class="large-team-card" 
                         tabindex="0" 
                         role="article" 
                         aria-label="Team member: <?php echo escape($member['name']); ?>, <?php echo escape($member['title']); ?>">
                        
                        <!-- Image -->
                        <div class="team-card-image">
                            <img 
                                src="<?php echo escape($member['imageUrl']); ?>" 
                                alt="<?php echo escape($member['name']); ?> - <?php echo escape($member['title']); ?>"
                                loading="lazy"
                            />
                        </div>
                        
                        <!-- Content -->
                        <div class="team-card-content">
                            <div class="team-card-info">
                                <div class="team-card-details">
                                    <div class="team-member-name">
                                        <?php echo escape($member['name']); ?>
                                    </div>
                                    <div class="team-member-title <?php echo (isset($member['featured']) && $member['featured']) ? 'featured' : ''; ?>">
                                        <?php echo escape($member['title']); ?>
                                    </div>
                                    <?php if (!empty($member['bio'])): ?>
                                    <div class="team-member-bio">
                                        <?php echo escape($member['bio']); ?>
                                    </div>
                                    <?php endif; ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>

<!-- Contact/CTA Section -->
<section id="contact" class="py-16 lg:py-24 bg-gradient-hero">
    <div class="container mx-auto px-6 sm:px-12 lg:px-24">
        <div class="max-w-4xl mx-auto text-center observe-animation">
            <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
                <?php echo escape($ctaContent['title']); ?>
            </h2>
            <p class="text-xl text-white/90 mb-12 leading-relaxed">
                <?php echo escape($ctaContent['description']); ?>
            </p>
            
            <!-- Contact Form -->
            <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-card">
                <form id="contact-form" onsubmit="submitContactForm(event)" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                            <input type="text" id="firstName" name="firstName" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-button focus:border-transparent outline-none transition-all">
                        </div>
                        <div>
                            <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                            <input type="text" id="lastName" name="lastName" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-button focus:border-transparent outline-none transition-all">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                            <input type="email" id="email" name="email" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-button focus:border-transparent outline-none transition-all">
                        </div>
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                            <input type="tel" id="phone" name="phone" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-button focus:border-transparent outline-none transition-all">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="companyName" class="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                            <input type="text" id="companyName" name="companyName" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-button focus:border-transparent outline-none transition-all">
                        </div>
                        <div>
                            <label for="designation" class="block text-sm font-medium text-gray-700 mb-2">Designation *</label>
                            <input type="text" id="designation" name="designation" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-button focus:border-transparent outline-none transition-all">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="industry" class="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                            <input type="text" id="industry" name="industry" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-button focus:border-transparent outline-none transition-all">
                        </div>
                        <div>
                            <label for="websiteUrl" class="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                            <input type="url" id="websiteUrl" name="websiteUrl" 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-button focus:border-transparent outline-none transition-all">
                        </div>
                    </div>
                    
                    <button type="submit" 
                            class="w-full bg-orange-button hover:bg-orange-button/90 text-white font-semibold py-4 px-8 rounded-xl btn-animated hover-glow animate-pulse-glow shadow-lg">
                        <?php echo escape($ctaContent['buttonText']); ?>
                    </button>
                    
                    <p class="text-sm text-gray-500 text-center">
                        <?php echo escape($ctaContent['disclaimer']); ?>
                    </p>
                </form>
            </div>
            
        </div>
    </div>
</section>

<?php
$content = ob_get_clean();
include 'templates/layout.php';
?>
