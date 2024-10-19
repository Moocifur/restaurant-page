//create the function 
//keep it simple

function createContactPage() {
    const content = document.querySelector('#content');
    content.textContent = '';

    //main backcard---
    const backCard = document.createElement('div');
    backCard.classList.add('back-card');

    //location header
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';

    //address
    const addressText = document.createElement('p');
    addressText.textContent = '123 Fake Street';

    //hours header
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours';

    //hours
    const hoursText = document.createElement('p');
    hoursText.textContent = 'here goes the hours';

    //phone header maybe not like this
    const phoneHeader = document.createElement('h2');

    //phone number
    
    

}

export default createContactPage;