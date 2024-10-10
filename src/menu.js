//menu.js

function createMenuPage() {
    //grab and refresh
    const content = document.querySelector('#content');
    content.textContent = '';
    //-----------------------------

    //create the menu card
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    //-------------------------------

    //menu box and innterhtml
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Mains';

    //append station eventually
    menuCard.appendChild(menuTitle);
    content.appendChild(menuCard);
    //----

    //bahn mi card
    const banhMiCard = document.createElement('div');
    banhMiCard.classList.add('menu-card')

    //image first
    banhMiImage = document.createElement('img');
    banhMiImage.src = '';
    //i need to link these images correctly



}

export default createMenuPage;