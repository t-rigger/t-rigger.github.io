// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('#nav-menu a');
navLinks.forEach(link => {
link.addEventListener('click', () => {
if (navMenu.classList.contains('active')) {
navMenu.classList.remove('active');
}
});
});

// Scroll Animation
const sections = document.querySelectorAll('section');
const options = {
root: null,
threshold: 0.1,
rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
if (!entry.isIntersecting) {
return;
}
entry.target.classList.add('visible');
observer.unobserve(entry.target);
});
}, options);

sections.forEach(section => {
observer.observe(section);
});
