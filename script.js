// Define the animal slaughter rates in graves per second 
const cattleSlaughterRate = 1 / 5; // 1 grave every 5 seconds
const pigGraveRate = 47 / 1; // 1 grave every 0.021 seconds
const chickenGraveRate = 2200 / 1; // 1 grave every 0.00045 seconds

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

// Add an event listener to each menu item
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const animalPage = item.getAttribute('href'); // Get the animal page URL
    window.location.href = animalPage; // Navigate to the animal page
  });
});

// Check the current page URL to determine which animal page is being displayed
const currentPageURL = window.location.pathname;

// Animate the kettle graveyard if it's the current page
if (currentPageURL.includes('kettle.html')) {
  animateGraveyard('kettle-graveyard', kettleSlaughterRate);
}

// Animate the chicken graveyard if it's the current page
if (currentPageURL.includes('chicken.html')) {
  animateGraveyard('chicken-graveyard', chickenSlaughterRate);
}

// Animate the pig graveyard if it's the current page
if (currentPageURL.includes('pig.html')) {
  animateGraveyard('pig-graveyard', pigSlaughterRate);
}

// Animate the cattle graveyard
animateGraveyard('cattle-graveyard', cattleSlaughterRate);

// Animate the pig graveyard
animateGraveyard('pig-graveyard', pigGraveRate);

// Animate the chicken graveyard
animateGraveyard('chicken-graveyard', chickenGraveRate);
