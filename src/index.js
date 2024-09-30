// Import styles and other modules
import './styles.css';
import { greeting } from './greeting.js';

// Test JavaScript functionality
console.log(greeting);

// Create and add a heading to test DOM manipulation
const heading = document.createElement('h1');
heading.textContent = 'Hello, Webpack!';
document.body.appendChild(heading);