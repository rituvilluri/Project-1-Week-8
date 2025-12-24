/**
 ============================================================
 MAIN JAVASCRIPT
 ============================================================
 */

$(document).ready(function() {
    
    /* =========================
     NAVBAR SCROLL EFFECT
     ========================= */
    $(window).on('scroll', function() {
        const $header = $('.site-header');
        
        if ($(window).scrollTop() > 50) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    });

    /** 
     =========================
     SMOOTH SCROLL FOR ANCHOR LINKS
     =========================
     */
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: target.offset().top - 80 // Offset for fixed header
            }, 800);
        }
    });

    /**
     ===========================
     CLOSE MOBILE NAV ON LINK CLICK
     =========================== */
    $('.navbar-nav .nav-link').on('click', function() {
        const $navbarCollapse = $('.navbar-collapse');
        
        if ($navbarCollapse.hasClass('show')) {
            $navbarCollapse.collapse('hide');
        }
    });

    /**
     =======================================
     FORM VALIDATION for register modal form
     =======================================
     */
    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        
        const email = $('#email').val();
        const password = $('#password').val();
        
        // Alert after sign in
        if (email && password) {
            alert('Thank you for signing in! (Demo - no actual submission)');
            
            // Close the modal
            $('#registerModal').modal('hide');
            
            // Reset the form
            this.reset();
        }
    });

    /**
     =========================
     ACTIVE PAGE HIGHLIGHTING
     =========================
     */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    $('.navbar-nav .nav-link').each(function() {
        const linkPage = $(this).attr('href');
        
        if (linkPage === currentPage) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

});

/**
 * ============================================================
 * FUTURE ENHANCEMENTS (To be added):
 * ============================================================
 * 
 *1. Vue.js Component: Interactive location finder
 * ============================================================
 */
