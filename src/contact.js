//create the function 
//keep it simple

import '@fortawesome/fontawesome-free/css/all.min.css';


function createContactPage() {
    const content = document.querySelector('#content');
    content.textContent = '';

    //main backcard---
    const backCard = document.createElement('div');
    backCard.classList.add('back-card');

    //contact header
    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us!';
    backCard.appendChild(contactHeader);

    //location section----
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location-section');

    //address icon 
    const locationIcon = document.createElement('i');
    locationIcon.classList.add('fas', 'fa-map-marker-alt');

    //the actual address
    const addressText = document.createElement('p');
    addressText.textContent = `
    123 Fake St, Los Angeles,
    CA 90042`;

    //append location stuff----
    locationDiv.appendChild(locationIcon);
    locationDiv.appendChild(addressText);

    
    //hours section----
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours-section');

    //hours icon
    const hoursIcon = document.createElement('i');
    hoursIcon.classList.add('fa-solid', 'fa-clock');

    //shit the hours
    //hours div
    const hoursText = document.createElement('div');

    //array hours
    const hours = [
        {day: 'Monday', time: '8am - 6pm'},
        {day: 'Tuesday', time: '8am - 6pm'},
        {day: 'Wednesday', time: '8am - 6pm'},
        {day: 'Thursday', time: '8am - 6pm'},
        {day: 'Friday', time: '8am - 6pm'},
        {day: 'Saturday', time: '10am - 4pm'},
        {day: 'Sunday', time: 'Closed'},
    ];

    //creates the content for hoursText
    hours.forEach( ({day, time}) => {
        const dayHours = document.createElement('p');
        dayHours.textContent = `${day}: ${time}`;
        hoursText.appendChild(dayHours);
    })

    //append hours stuff
    hoursDiv.appendChild(hoursIcon);
    hoursDiv.appendChild(hoursText);

    //phone---------
    const phoneDiv = document.createElement('div');

    //phone icon
    const phoneIcon = document.createElement('i');
    phoneIcon.classList.add('fa-solid', 'fa-phone');

    //phone number?
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(555)-555-5555';

    //phone append
    phoneDiv.appendChild(phoneIcon);
    phoneDiv.appendChild(phoneNumber);

    //section append-----
    backCard.appendChild(locationDiv);
    backCard.appendChild(hoursDiv);
    backCard.appendChild(phoneDiv);
    
    // the back card append
    content.appendChild(backCard);

}

export default createContactPage;