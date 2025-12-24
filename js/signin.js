/* ============================================================
    SIGN IN PAGE JAVASCRIPT
   ============================================================ */

// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    const signinForm = document.getElementById('signinForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const signInButton = document.querySelector('.btn-signin');
    
    // Function to check if button should be active
    function checkButtonState() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (email && password) {
            signInButton.classList.add('active');
            signInButton.disabled = false;
        } else {
            signInButton.classList.remove('active');
            signInButton.disabled = true;
        }
    }
    
    // Monitor input changes
    if (emailInput && passwordInput && signInButton) {
        emailInput.addEventListener('input', checkButtonState);
        passwordInput.addEventListener('input', checkButtonState);
        
        // Initial check
        checkButtonState();
    }
    
    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            
            // Basic validation
            if (!email || !password) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            //  success message
            alert('Successfully signed in!');
            
            // Reset form
            signinForm.reset();
            checkButtonState(); // Update button state after reset
        });
    }
    
    // Forgot password link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
             alert('Check your email for a password reset link.');
        });
    }
    
    // Sign up button
    const signupButton = document.querySelector('.btn-signup');
    if (signupButton) {
        signupButton.addEventListener('click', function(e) {
            e.preventDefault();
             // Get form values
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            // Alert after sign up
            alert('Sign up completed successfully.');
            // Reset form
            signinForm.reset();
        });
    }
});

