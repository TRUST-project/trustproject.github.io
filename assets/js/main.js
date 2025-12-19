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

    // Scroll Animation System - Focus on News Page
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
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

    // Check if we're on the news page
    const isNewsPage = window.location.pathname.includes('news.html') || 
                       document.querySelector('.publication-item') !== null;

    if (isNewsPage) {
        // Apply slide-left animation to publication items
        const publicationItems = document.querySelectorAll('.publication-item');
        publicationItems.forEach((el, index) => {
            // Add animation class immediately
            el.classList.add('scroll-slide-left');
            if (index > 0) {
                el.classList.add(`delay-${Math.min(index, 4)}`);
            }
            // Check if element is already in viewport
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                // If already visible, animate immediately with slight delay
                setTimeout(() => {
                    el.classList.add('visible');
                }, 100 * (index + 1));
            } else {
                // Otherwise observe for scroll
                animationObserver.observe(el);
            }
        });

        // Apply slide-right animation to news blog items
        const newsBlogItems = document.querySelectorAll('.news-blog-item');
        newsBlogItems.forEach((el, index) => {
            // Add animation class immediately
            el.classList.add('scroll-slide-right');
            if (index > 0) {
                el.classList.add(`delay-${Math.min(index, 4)}`);
            }
            // Check if element is already in viewport
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                // If already visible, animate immediately with slight delay
                setTimeout(() => {
                    el.classList.add('visible');
                }, 100 * (index + 1));
            } else {
                // Otherwise observe for scroll
                animationObserver.observe(el);
            }
        });

        // Column titles fade in
        const columnTitles = document.querySelectorAll('.column-title');
        columnTitles.forEach((el) => {
            el.classList.add('scroll-fade-in');
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                setTimeout(() => {
                    el.classList.add('visible');
                }, 200);
            } else {
                animationObserver.observe(el);
            }
        });
    }

    // Check if we're on the team page
    const isTeamPage = window.location.pathname.includes('team.html') || 
                       document.querySelector('.team-card') !== null;

    if (isTeamPage) {
        // Apply fade-in animation to team cards
        const teamCards = document.querySelectorAll('.team-card');
        teamCards.forEach((el, index) => {
            // Add animation class immediately
            el.classList.add('scroll-fade-in');
            if (index > 0) {
                el.classList.add(`delay-${Math.min(index, 4)}`);
            }
            // Check if element is already in viewport
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                // If already visible, animate immediately with slight delay
                setTimeout(() => {
                    el.classList.add('visible');
                }, 150 * (index + 1));
            } else {
                // Otherwise observe for scroll
                animationObserver.observe(el);
            }
        });

        // Section title fade in
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.classList.add('scroll-fade-in');
            const rect = sectionTitle.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                setTimeout(() => {
                    sectionTitle.classList.add('visible');
                }, 100);
            } else {
                animationObserver.observe(sectionTitle);
            }
        }
    }

    // Check if we're on the index/home page
    const isIndexPage = window.location.pathname.includes('index.html') || 
                        window.location.pathname === '/' ||
                        (document.querySelector('.about-card') !== null && document.querySelector('.hero-content') !== null);

    if (isIndexPage) {
        // Apply fade-in animation to about cards in "Our Mission" section
        const aboutCards = document.querySelectorAll('.about-card');
        aboutCards.forEach((el, index) => {
            // Add animation class immediately
            el.classList.add('scroll-fade-in');
            if (index > 0) {
                el.classList.add(`delay-${Math.min(index, 4)}`);
            }
            // Check if element is already in viewport
            const rect = el.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                // If already visible, animate immediately with slight delay
                setTimeout(() => {
                    el.classList.add('visible');
                }, 200 * (index + 1));
            } else {
                // Otherwise observe for scroll
                animationObserver.observe(el);
            }
        });

        // Section title fade in for "Our Mission"
        const missionSectionTitle = document.querySelector('#about .section-title');
        if (missionSectionTitle) {
            missionSectionTitle.classList.add('scroll-fade-in');
            const rect = missionSectionTitle.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                setTimeout(() => {
                    missionSectionTitle.classList.add('visible');
                }, 100);
            } else {
                animationObserver.observe(missionSectionTitle);
            }
        }
    }

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
