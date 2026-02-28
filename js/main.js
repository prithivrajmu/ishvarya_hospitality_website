// ============================================================
// ISHVARYA HOSPITALITY SOLUTIONS — Main JavaScript
// ============================================================
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

inject();
injectSpeedInsights();

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollAnimations();
    initMobileMenu();
    initActivePage();
    initCounterAnimation();
});

// --- Navbar Scroll Effect ---
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// --- Mobile Menu ---
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    if (!hamburger || !navLinks || !navbar) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navbar.classList.toggle('menu-open');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            navbar.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });
}

// --- Scroll Animations ---
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .stagger-children').forEach(el => {
        observer.observe(el);
    });
}

// --- Active Page Highlight ---
function initActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage ||
            (currentPage === '' && href === 'index.html') ||
            (currentPage === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// --- Counter Animation ---
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-count'));
                const suffix = entry.target.getAttribute('data-suffix') || '';
                animateCounter(entry.target, target, suffix);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 30);
}

// --- Web3Forms Contact/Quote Form ---
function initWeb3Form(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const messageDiv = form.querySelector('.form-message');

        // Show loading
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        // Hide previous messages
        if (messageDiv) {
            messageDiv.classList.remove('success', 'error');
            messageDiv.style.display = 'none';
        }

        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                if (messageDiv) {
                    messageDiv.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you shortly.';
                    messageDiv.classList.add('success');
                    messageDiv.style.display = 'block';
                }
                form.reset();
            } else {
                throw new Error(result.message || 'Something went wrong');
            }
        } catch (error) {
            if (messageDiv) {
                messageDiv.textContent = 'Oops! Something went wrong. Please try again or contact us directly.';
                messageDiv.classList.add('error');
                messageDiv.style.display = 'block';
            }
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

// Initialize forms when present
document.addEventListener('DOMContentLoaded', () => {
    initWeb3Form('contactForm');
    initWeb3Form('quoteForm');
});

// --- Smooth scroll for anchor links ---
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});
