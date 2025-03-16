// script.js - Shared JavaScript for All Pages

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a link (on mobile view)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Get the "Back to Top" button
const backToTopButton = document.getElementById("back-to-top");

// Listen for scroll events
window.addEventListener("scroll", function () {
    // Get the current scroll position
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Show or hide the Back to Top button
    if (scrollPosition > 100) {
        backToTopButton.classList.add("show"); // Show button
    } else {
        backToTopButton.classList.remove("show"); // Hide button
    }
});

