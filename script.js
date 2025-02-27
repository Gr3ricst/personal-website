let currentSection = 0;
const sections = document.querySelectorAll(".section");
const totalSections = sections.length;

// Function to slide to the next/previous section
function slideToSection(index) {
    if (index < 0 || index >= totalSections) return;
    currentSection = index;
    document.querySelector(".container").style.transform = `translateY(-${index * 100}vh)`;
}

// Scroll wheel event
document.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        slideToSection(currentSection + 1); // Scroll down
    } else {
        slideToSection(currentSection - 1); // Scroll up
    }
}, { passive: false });

// Keyboard support (Arrow keys)
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
        slideToSection(currentSection + 1); // Swipe up
    } else if (touchStartY - touchEndY < -50) {
        slideToSection(currentSection - 1); // Swipe down
    }
});
