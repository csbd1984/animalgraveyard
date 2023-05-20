// Define the animal slaughter rates in graves per second
const cattleSlaughterRate = 1 / 5; // 1 grave every 5 seconds
const pigSlaughterRate = 1 / 0.021; // 1 grave every 0.021 seconds
const chickenSlaughterRate = 1 / 0.00045; // 1 grave every 0.00045 seconds

// Function to animate the graveyard expansion
function animateGraveyard(graveyardId, slaughterRate) {
    const graveyard = document.getElementById(graveyardId);
    let graveCount = 0;

    // Update the graveyard every second
    setInterval(() => {
        graveCount += slaughterRate;
        graveyard.style.backgroundSize = `${graveCount}px ${graveCount}px`;
    }, 1000);
}

// Check the current page URL to determine which animal page is being displayed
const currentPageURL = window.location.pathname;

// Animate the cattle graveyard if it's the current page
if (currentPageURL.includes('cattle.html')) {
    animateGraveyard('cattle-graveyard', cattleSlaughterRate);
}

// Animate the chicken graveyard if it's the current page
if (currentPageURL.includes('chicken.html')) {
    animateGraveyard('chicken-graveyard', chickenSlaughterRate);
}

// Animate the pig graveyard if it's the current page
if (currentPageURL.includes('pig.html')) {
    animateGraveyard('pig-graveyard', pigSlaughterRate);
}
