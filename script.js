// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking a link
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null, // use the viewport as the root
    rootMargin: '0px',
    threshold: 0.2 // when 20% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'is-visible' class when the element comes into view
            entry.target.classList.add('is-visible');
            // Stop observing once the animation is triggered
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Select all elements to animate
const elementsToAnimate = document.querySelectorAll('.fade-in, .slide-up');
elementsToAnimate.forEach(el => observer.observe(el));
