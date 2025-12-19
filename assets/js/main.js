document.addEventListener('DOMContentLoaded', () => {
    // Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth Scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Scroll Animation System
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once animated
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Function to add animation classes to elements
    function addScrollAnimations() {
        // Section titles - fade in from bottom
        document.querySelectorAll('.section-title').forEach((el, index) => {
            el.classList.add('scroll-fade-in');
            if (index > 0) {
                el.classList.add(`delay-${Math.min(index, 4)}`);
            }
            animationObserver.observe(el);
        });

        // About cards - fade in with stagger
        document.querySelectorAll('.about-card').forEach((el, index) => {
            el.classList.add('scroll-fade-in');
            el.classList.add(`delay-${Math.min(index + 1, 4)}`);
            animationObserver.observe(el);
        });

        // Team cards - scale animation
        document.querySelectorAll('.team-card').forEach((el, index) => {
            el.classList.add('scroll-scale');
            el.classList.add(`delay-${Math.min(index % 4, 4)}`);
            animationObserver.observe(el);
        });

        // Study cards - fade in
        document.querySelectorAll('.study-card').forEach((el, index) => {
            el.classList.add('scroll-fade-in');
            el.classList.add(`delay-${Math.min(index % 4, 4)}`);
            animationObserver.observe(el);
        });

        // Publication items - slide from left
        document.querySelectorAll('.publication-item').forEach((el, index) => {
            el.classList.add('scroll-slide-left');
            el.classList.add(`delay-${Math.min(index % 4, 4)}`);
            animationObserver.observe(el);
        });

        // News blog items - slide from right
        document.querySelectorAll('.news-blog-item').forEach((el, index) => {
            el.classList.add('scroll-slide-right');
            el.classList.add(`delay-${Math.min(index % 4, 4)}`);
            animationObserver.observe(el);
        });

        // Column titles - fade in
        document.querySelectorAll('.column-title').forEach((el) => {
            el.classList.add('scroll-fade-in');
            animationObserver.observe(el);
        });

        // Footer columns - fade in
        document.querySelectorAll('.footer-col').forEach((el, index) => {
            el.classList.add('scroll-fade-in');
            el.classList.add(`delay-${Math.min(index + 1, 4)}`);
            animationObserver.observe(el);
        });

        // Hero content (if exists and not already visible)
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && !heroContent.classList.contains('visible')) {
            heroContent.classList.add('scroll-fade-in');
            animationObserver.observe(heroContent);
            // Make hero visible immediately on load
            setTimeout(() => {
                heroContent.classList.add('visible');
            }, 100);
        }
    }

    // Initialize animations
    addScrollAnimations();

    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileNavToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileNavToggle.classList.remove('active');
            });
        });
    }
});
