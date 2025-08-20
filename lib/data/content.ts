// Content data extracted from components for better maintainability

export const heroContent = {
  title: "Preserving Your Finances For a Better Future",
  description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
  primaryCta: "Get Started",
  secondaryCta: "Learn More",
  trustIndicators: [
    { number: "500+", label: "Happy Clients" },
    { number: "$50M+", label: "Assets Managed" },
    { number: "15+", label: "Years Experience" }
  ]
}

export const servicesContent = {
  title: "Enjoy Our Excellent Service",
  description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules.",
  services: [
    {
      id: "support-system",
      title: 'Support System',
      description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.',
      icon: 'support_agent',
      variant: 'default' as const
    },
    {
      id: "financial-management",
      title: 'Financial Management',
      description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.',
      icon: 'account_balance_wallet',
      variant: 'featured' as const
    },
    {
      id: "safety-compliance",
      title: 'Safety Compliance',
      description: 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.',
      icon: 'admin_panel_settings',
      variant: 'default' as const
    }
  ]
}

export const aboutContent = {
  title: "Your Trusted Financial Partner",
  description: "With over 15 years of experience in financial consulting, we've helped hundreds of clients achieve their financial goals through personalized strategies and expert guidance.",
  features: [
    "Personalized investment strategies tailored to your unique goals",
    "Comprehensive risk assessment and portfolio diversification",
    "Transparent fee structure with no hidden charges",
    "24/7 support and regular portfolio performance reviews"
  ],
  contactSection: {
    title: "Ready to Get Started?",
    phone: "+1 (555) 123-4567",
    email: "hello@finanxe.com"
  },
  yearsExperience: "15+"
}

export const statsContent = {
  title: "Our History",
  stats: [
    {
      id: "years-experience",
      number: '20+',
      label: 'Years Experience'
    },
    {
      id: "happy-clients",
      number: '5K',
      label: 'Happy Clients',
      highlighted: true
    },
    {
      id: "success-rate",
      number: '99,9%',
      label: 'Succesfull Project'
    },
    {
      id: "expert-staff",
      number: '520+',
      label: 'Expert Staff'
    }
  ]
}

export const teamContent = {
  title: "Meet With Our Executive Team",
  description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
  members: [
    {
      id: "robby-jhony",
      name: 'Robby Jhony',
      title: 'Founder',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/24cb6b4d70ca9b341bc4165f1bb49f9eb972f999?width=522',
      featured: true
    },
    {
      id: "erlina-angel",
      name: 'Erlina Angel',
      title: 'CEO',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/eb8841367628afd2f3fd8c458db60c153e0fe02f?width=522'
    },
    {
      id: "ellisa-maryah",
      name: 'Ellisa Maryah',
      title: 'Manager',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/8e13cd570a97a4eb26002d1db489c81c002e8f5d?width=522'
    },
    {
      id: "richo-night",
      name: 'Richo Night',
      title: 'Consultation',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/4dda93fa7b58bd543ac67d962d35a510871dca0d?width=522'
    }
  ]
}

export const testimonialsContent = {
  title: "What They Say",
  description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
  testimonials: [
    {
      id: "jhon-merrasi",
      name: "Jhon Merrasi",
      role: "Our Customers",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/dea2198a686ce13b162a94d2bce4e24d2b182d34?width=128",
      position: "bottom-left" as const,
      quote: undefined,
      featured: undefined
    },
    {
      id: "angel-mersic",
      name: "Angel Mersic",
      role: "Our Customers",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/cace11a1fa4ff91a8724f7a7e3b4b7ad5891d48f?width=128",
      position: "top-center" as const,
      quote: undefined,
      featured: undefined
    },
    {
      id: "chena-williams",
      name: "Chena Williams",
      role: "Our Customers",
      quote: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
      imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/e95d24fa53c04540e72375f95e1d13e966de9189?width=128",
      position: "bottom-right" as const,
      featured: true
    }
  ]
}

export const ctaContent = {
  title: "Let's Work Together",
  description: "Comprehensive financial planning and investment strategies tailored to your goals. Get started with a free consultation today.",
  placeholder: "Your email address",
  buttonText: "Get Started",
  loadingText: "Sending...",
  disclaimer: "Free consultation • No commitment required"
}

export const footerContent = {
  description: "Your trusted financial partner for investment planning, wealth management, and securing your financial future. Expert guidance you can count on.",
  quickLinks: [
    { id: "services", href: '#services', label: 'Services' },
    { id: "about", href: '#about', label: 'About' },
    { id: "team", href: '#team', label: 'Team' },
    { id: "testimonials", href: '#testimonials', label: 'Testimonials' },
    { id: "contact", href: '#contact', label: 'Contact' }
  ],
  contact: {
    address: {
      street: "123 Financial District",
      city: "New York, NY 10004"
    },
    phone: "+1 (555) 123-4567",
    email: "hello@finanxe.com"
  },
  socialLinks: [
    { id: "facebook", href: '#', label: 'Facebook' },
    { id: "twitter", href: '#', label: 'Twitter' },
    { id: "linkedin", href: '#', label: 'LinkedIn' },
    { id: "instagram", href: '#', label: 'Instagram' }
  ],
  legalLinks: [
    { id: "privacy", href: "#privacy", label: "Privacy Policy" },
    { id: "terms", href: "#terms", label: "Terms of Service" },
    { id: "cookies", href: "#cookies", label: "Cookie Policy" }
  ]
}
