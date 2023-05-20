// Define the animal slaughter rates in graves per second
const kettleSlaughterRate = 100000 / 2; // Estimated kettle slaughter rate per year
const chickenSlaughterRate = 1000000 / 2; // Estimated chicken slaughter rate per year
const pigSlaughterRate = 500000 / 2; // Estimated pig slaughter rate per year


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

// Animate the kettle graveyard
animateGraveyard('kettle-graveyard', kettleSlaughterRate);

// Animate the chicken graveyard
animateGraveyard('chicken-graveyard', chickenSlaughterRate);

// Animate the pig graveyard
animateGraveyard('pig-graveyard', pigSlaughterRate);
