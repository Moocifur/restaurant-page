// Import styles and other modules
import './styles.css';
import createHomePage from './home.js';
import createMenuPage from './menu.js';
// import createContactPage from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    //Load the Home page initially
    createHomePage();

    //Set up event listeners for buttons
    document.getElementById('home').addEventListener('click', createHomePage);
    document.getElementById('menu').addEventListener('click', createMenuPage);
})