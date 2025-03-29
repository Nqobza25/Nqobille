// JavaScript for interactivity will go here

console.log("Portfolio script loaded.");

// Smooth scrolling for navigation links (kept from previous version)
document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Offset scroll position slightly to account for sticky header height
            const headerOffset = document.querySelector('header').offsetHeight + 20; // Get header height + some buffer
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Intersection Observer for fade-in effect on scroll
const sections = document.querySelectorAll('main section');

const observerOptions = {
    root: null, // relative to document viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the section is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'visible' class when the section comes into view
            entry.target.classList.add('visible');
            // Optional: Unobserve after it becomes visible to avoid re-triggering
            // observer.unobserve(entry.target);
        } else {
            // Optional: Remove 'visible' class if you want the effect to reverse when scrolling up
            // entry.target.classList.remove('visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});
