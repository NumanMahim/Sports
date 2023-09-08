// script.js

// Add event listener to close the sports menu when clicking outside of it
document.addEventListener('click', function (event) {
    const sportsDropdown = document.querySelector('.sports-dropdown');
    if (event.target.closest('.sports-dropdown') !== sportsDropdown) {
        const sportsMenu = sportsDropdown.querySelector('.sports-menu');
        sportsMenu.style.display = 'none';
    }
});
console.log("Hello, this is a debug message.");

// Prevent the menu from closing when clicking inside it
const sportsMenu = document.querySelector('.sports-menu');
sportsMenu.addEventListener('click', function (event) {
    event.stopPropagation();
});
