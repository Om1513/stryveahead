<?php
// Load configuration if not already loaded
if (!defined('APP_NAME')) {
    require_once __DIR__ . '/../config/config.php';
    require_once __DIR__ . '/../includes/functions.php';
}

$pageTitle = 'Register - ' . APP_NAME;
$pageDescription = 'Create your ' . APP_NAME . ' account';

ob_start();
?>

<main class="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-yellow-50/30 pt-20">
    <div class="container mx-auto px-6 sm:px-12 lg:px-24">
        <div class="flex items-center justify-center min-h-[calc(100vh-5rem)] py-12 stagger-container">
            <div class="w-full max-w-md fade-in-up">
                <!-- Header -->
                <div class="text-center mb-8 slide-in-up">
                    <h1 class="text-3xl font-bold text-gray-900 mb-2">
                        Create Account
                    </h1>
                    <p class="text-gray-600">
                        Join <?php echo APP_NAME; ?> to get started
                    </p>
                </div>

                <!-- Registration Form -->
                <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 slide-in-up">
                    <form id="register-form" onsubmit="handleSubmit(event)" class="space-y-6">
                        
                        <!-- Email Field -->
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                                Email Address <span class="text-red-500">*</span>
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <!-- Password Field -->
                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                                Password <span class="text-red-500">*</span>
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    class="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                    placeholder="Enter your password"
                                    required
                                    minlength="8"
                                />
                                <button
                                    type="button"
                                    onclick="togglePasswordVisibility('password')"
                                    class="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <svg id="password-eye-closed" class="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    <svg id="password-eye-open" class="h-5 w-5 text-gray-400 hover:text-gray-600 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                                    </svg>
                                </button>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">At least 8 characters with letters and numbers</p>
                        </div>

                        <!-- Confirm Password Field -->
                        <div>
                            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password <span class="text-red-500">*</span>
                            </label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                </div>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    name="confirmPassword"
                                    class="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                                    placeholder="Confirm your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onclick="togglePasswordVisibility('confirmPassword')"
                                    class="absolute inset-y-0 right-0 pr-3 flex items-center"
                                >
                                    <svg id="confirmPassword-eye-closed" class="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                    <svg id="confirmPassword-eye-open" class="h-5 w-5 text-gray-400 hover:text-gray-600 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Error Message -->
                        <div id="error-message" class="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-lg p-3 hidden">
                        </div>

                        <!-- Success Message -->
                        <div id="success-message" class="text-green-600 text-sm text-center bg-green-50 border border-green-200 rounded-lg p-3 hidden">
                        </div>

                        <!-- Submit Button -->
                        <button
                            type="submit"
                            id="submit-button"
                            class="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed btn-enhanced"
                        >
                            Create Account
                        </button>
                    </form>

                    <!-- Already have account -->
                    <div class="mt-6 text-center">
                        <p class="text-sm text-gray-600">
                            Already have an account? 
                            <a href="/login" class="text-orange-500 hover:text-orange-600 font-medium">
                                Sign in here
                            </a>
                        </p>
                    </div>
                </div>

                <!-- Back to Home -->
                <div class="text-center mt-6 slide-in-up">
                    <button
                        onclick="window.location.href = '/'"
                        class="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                        ← Back to Home
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
let isLoading = false;

function togglePasswordVisibility(fieldId) {
    const passwordInput = document.getElementById(fieldId);
    const eyeClosed = document.getElementById(fieldId + '-eye-closed');
    const eyeOpen = document.getElementById(fieldId + '-eye-open');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeClosed.classList.add('hidden');
        eyeOpen.classList.remove('hidden');
    } else {
        passwordInput.type = 'password';
        eyeClosed.classList.remove('hidden');
        eyeOpen.classList.add('hidden');
    }
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    const successDiv = document.getElementById('success-message');
    
    successDiv.classList.add('hidden');
    errorDiv.textContent = message;
    errorDiv.classList.remove('hidden');
    
    // Hide error after 7 seconds
    setTimeout(() => {
        errorDiv.classList.add('hidden');
    }, 7000);
}

function showSuccess(message) {
    const errorDiv = document.getElementById('error-message');
    const successDiv = document.getElementById('success-message');
    
    errorDiv.classList.add('hidden');
    successDiv.textContent = message;
    successDiv.classList.remove('hidden');
}

// Clean registration success banner
function showRegistrationSuccessMessage() {
    showNotification('Account created successfully! Redirecting to login...');
}

function hideMessages() {
    const errorDiv = document.getElementById('error-message');
    const successDiv = document.getElementById('success-message');
    errorDiv.classList.add('hidden');
    successDiv.classList.add('hidden');
}

// Real-time password validation
document.getElementById('confirmPassword').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    
    if (confirmPassword && password !== confirmPassword) {
        this.style.borderColor = '#ef4444';
    } else {
        this.style.borderColor = '#d1d5db';
    }
});

async function handleSubmit(e) {
    e.preventDefault();
    
    if (isLoading) return;
    
    hideMessages();
    
    const form = document.getElementById('register-form');
    const submitButton = document.getElementById('submit-button');
    const formData = new FormData(form);
    
    const email = formData.get('email').trim();
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    // Client-side validation
    if (!email || !password || !confirmPassword) {
        showError('Please fill in all required fields');
        return;
    }
    
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }
    
    if (password.length < 8) {
        showError('Password must be at least 8 characters long');
        return;
    }
    
    if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        showError('Password must contain at least one letter and one number');
        return;
    }
    
    isLoading = true;
    
    // Update button state
    submitButton.disabled = true;
    submitButton.innerHTML = `
        <div class="flex items-center justify-center">
            <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Creating Account...
        </div>
    `;
    
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                confirmPassword: confirmPassword
            })
        });
        
        const result = await response.json();
        
        if (result.ok) {
            showRegistrationSuccessMessage();
            form.reset();
            
            // Redirect to login after 2 seconds  
            setTimeout(() => {
                window.location.href = '/login?registered=1';
            }, 2000);
            
        } else {
            showError(result.error || 'Registration failed. Please try again.');
        }
        
    } catch (error) {
        console.error('Registration error:', error);
        showError('Something went wrong. Please try again later.');
    } finally {
        isLoading = false;
        submitButton.disabled = false;
        submitButton.textContent = 'Create Account';
    }
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add stagger delays to form elements
    const formElements = document.querySelectorAll('.slide-in-up');
    formElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});
</script>

<?php
$content = ob_get_clean();
include 'templates/layout.php';
?>
