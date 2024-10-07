//home.js

import myImage from './assets/images/banh-mi.jpg';

function createHomePage() {
    //the html connector
    const content = document.querySelector('#content');
    content.textContent = '';
    //-------------------------

    //the about aboutCard div
    const aboutCard = document.createElement('div');

    //about title
    const aboutHeader = document.createElement('h2');
    aboutHeader.textContent = 'About';

    //about img
    const img = document.createElement('img');
    img.src = myImage;

    //the about text
    const description = document.createElement('p');
    description.textContent = `Fresh baked bread, fresh, crisp vegatables. Quick and easy no problem.`;

    //-------------------------------------
    // the append station
    aboutCard.appendChild(aboutHeader);
    aboutCard.appendChild(img);
    aboutCard.appendChild(description);

    content.appendChild(aboutCard);
    //-------------------------------------

    //the um, "looks at paper" hours
    const hoursCard = document.createElement('div');

    //the header for hours
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours';

    const daysUl = document.createElement('ul');

    const hours = [
        'Monday: 6am - 8pm',
        'Tuesday: 6am - 8pm',
        'Wednesday: 6am - 8pm',
        'Thurday: 6am - 8pm',
        'Friday: 6am - 8pm',
        'Saturday: 6am -8pm',
        'Sunday: 6am - 8pm'
    ];  

    hours.forEach()

    //

    //----
    //addend station
    hoursCard.appendChild(hoursHeader);

    content.appendChild(hoursCard);

}

export default createHomePage;