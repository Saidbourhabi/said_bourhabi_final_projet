const modal = document.getElementById("modal");
const bookBtn = document.querySelector(".book-btn");
const closeBtn = document.querySelector(".close-btn");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const dropdowns = document.querySelectorAll(".dropdown");

// Modal functionality
bookBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Mobile dropdown functionality
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector("a");
    
    link.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle("active");
        }
    });
});

// Close menu when clicking outside on mobile
document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768 && navLinks.classList.contains("active")) {
        if (!e.target.closest(".navbar") && !e.target.closest(".modal")) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove("active");
            });
        }
    }
});

// Close dropdowns when resizing to desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    }
});

// Scroll hide/show navbar functionality
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        // At top of page
        navbar.classList.remove('nav-down');
        navbar.classList.add('nav-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('nav-down')) {
        // Scrolling down
        navbar.classList.remove('nav-up');
        navbar.classList.add('nav-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('nav-down')) {
        // Scrolling up
        navbar.classList.remove('nav-down');
        navbar.classList.add('nav-up');
    }
    
    lastScroll = currentScroll;
});

// Make sure the navbar is visible when at top of page
window.addEventListener('load', () => {
    if (window.pageYOffset === 0) {
        navbar.classList.add('nav-up');
    }
});