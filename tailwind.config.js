/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.php",
    "./public/**/*.html",
    "./index.php",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'orange-button': '#FF6B35',
        'gray-text': '#6B7280',
        'gray-light': '#F3F4F6',
        'soft': '#F8F9FA',
        'paragraph': '#374151',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #F25227 0%, #E8AA29 100%);',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
        'fade-in-up': 'fadeInUp 1.5s ease-out',
        'slide-up': 'slideUp 1.2s ease-out',
        'slide-in-left': 'slideInLeft 1.5s ease-out',
        'slide-in-right': 'slideInRight 1.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'scale-in': 'scaleIn 1.2s ease-out',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)' },
        },
      },
    }
  },
  plugins: [],
}
