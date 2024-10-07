// Import styles and other modules
import './styles.css';
import createHomePage from './home.js';

document.addEventListener('DOMContentLoaded', () => {
    //Load the Home page initially
    createHomePage();

    //Set up event listeners for buttons
    document.getElementById('home').addEventListenener('click', createHomePage);
})