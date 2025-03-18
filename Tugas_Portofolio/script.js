// Select the menu icon and navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Add event listener to toggle the navbar visibility
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});