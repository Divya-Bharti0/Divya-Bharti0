const loginButton = document.getElementById('loginButton');
const loginPopup = document.getElementById('loginPopup');
const closePopup = document.getElementById('closePopup');

// Open popup with fade-in effect
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    loginPopup.style.display = 'block';
    loginPopup.classList.add('popup-fade-in');
    loginPopup.classList.remove('popup-fade-out');
    loginPopup.setAttribute('aria-hidden', 'false');
});

// Close popup with fade-out effect
closePopup.addEventListener('click', () => {
    loginPopup.classList.add('popup-fade-out');
    setTimeout(() => {
        loginPopup.style.display = 'none';
        loginPopup.classList.remove('popup-fade-in');
        loginPopup.setAttribute('aria-hidden', 'true');
    }, 300); // Match the fade-out animation duration
});

// Close popup by clicking outside it
window.addEventListener('click', (event) => {
    if (event.target === loginPopup) {
        closePopup.click(); // Reuse the close button logic
    }
});

// Close popup with ESC key
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closePopup.click(); // Reuse the close button logic
    }
});

// Toggle Course Details
function toggleDetails(courseId) {
    const details = document.getElementById(courseId);
    details.classList.toggle('visible'); // Add smooth transition via CSS
}

// Debounced Scroll Event for Course Card Animation
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(() => {
    const elements = document.querySelectorAll('.course-card');
    elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) { // Trigger 90% in view
            el.classList.add('visible');
        }
    });
}));
