// Keep track of the current visible section (starting at 0)
let currentSection = 0;

// Grab all sections and compute how many there are
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;

// Slide the .container by updating transform translateY
function slideToSection(index) {
    // Ensure the requested index is within bounds
    if (index < 0) index = 0;
    if (index >= totalSections) index = totalSections - 1;
    
    currentSection = index;
    // Move the container upward by index * 100vh
    document.querySelector(".container").style.transform = `translateY(-${index * 100}vh)`;
}

// Listen for scroll events (wheel)
document.addEventListener("wheel", (event) => {
    // Prevent normal scroll
    event.preventDefault();
    // Scrolling down
    if (event.deltaY > 0) {
        slideToSection(currentSection + 1);
    } 
    // Scrolling up
    else {
        slideToSection(currentSection - 1);
    }
}, { passive: false });

// Optional: add support for arrow keys
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        slideToSection(currentSection + 1);
    } else if (event.key === "ArrowUp") {
        slideToSection(currentSection - 1);
    }
});

// Optional: add simple touch swipe support for mobile
let touchStartY = 0;
document.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
    let touchEndY = event.changedTouches[0].clientY;
    // If we swiped up (touchStartY > touchEndY + threshold)
    if (touchStartY - touchEndY > 50) {
        slideToSection(currentSection + 1);
    } 
    // If we swiped down (touchStartY < touchEndY - threshold)
    else if (touchStartY - touchEndY < -50) {
        slideToSection(currentSection - 1);
    }
});
