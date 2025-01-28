// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth Scrolling (Optional Enhancement)
const navLinks = document.querySelectorAll('.nav a');

for (let link of navLinks) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 60;

    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });

    // Close mobile menu after clicking (for mobile)
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
}

// Contact Form Submission (Optional Enhancement)
// You can use an API like EmailJS or integrate with a backend to handle form submissions.
