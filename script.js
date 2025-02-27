// Track current section
let currentSection = 0;

// Get sections and count
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;

// Function to move to a section
function slideToSection(index) {
    if (index < 0) index = 0;
    if (index >= totalSections) index = totalSections - 1;
    
    currentSection = index;
    document.querySelector(".container").style.transform = `translateY(-${index * 100}vh)`;
}

// Scroll event for navigation
document.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        slideToSection(currentSection + 1);
    } else {
        slideToSection(currentSection - 1);
    }
}, { passive: false });

// Keyboard navigation
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
        slideToSection(currentSection + 1);
    } else if (event.key === "ArrowUp") {
        slideToSection(currentSection - 1);
    }
});

// Touch swipe support for mobile
let touchStartY = 0;
document.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
    let touchEndY = event.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50) {
        slideToSection(currentSection + 1);
    } else if (touchStartY - touchEndY < -50) {
        slideToSection(currentSection - 1);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".triangle-container");

    // Grid settings
    const rows = 10;
    const cols = 10;

    for (let i = 0; i < rows * cols; i++) {
        const triangle = document.createElement("div");
        triangle.classList.add("triangle");
        container.appendChild(triangle);
    }
});
