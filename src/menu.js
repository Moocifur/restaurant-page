//menu.js

//imports
import banhImage from './assets/images/menu-banh.jpeg';
import springImage from './assets/images/menu-rolls.jpeg';
import phoImage from './assets/images/menu-pho.jpg';
import coffeeImage from './assets/images/menu-coffee.jpeg';
import nuocMatImage from './assets/images/menu-nuocMat.jpeg';

function createMenuPage() {
    //grab and refresh---------------------
    const content = document.querySelector('#content');
    content.textContent = '';

    //main backCard-----------------
    const backCard = document.createElement('div');
    backCard.classList.add('back-card');

    //"Mains" title-------------------
    const mainsHeader = document.createElement('h2');
    mainsHeader.classList.add('menu-headers');
    mainsHeader.textContent = 'Mains';
    //attach Menu on backCard
    backCard.appendChild (mainsHeader);

    //Menu item 1 card (Banh Mi)-------------------------
    const banhMiCard = document.createElement('div');
    banhMiCard.classList.add('menu-card');

    //the picture--
    const banhMiImage = document.createElement('img');
    banhMiImage.src = banhImage;

    //Text-Wrap
    const banhMiTextWrap = document.createElement('div');
    banhMiTextWrap.classList.add('text-wrap');

    //Name
    const banhMiName = document.createElement('h3');
    banhMiName.textContent = 'Banh-Mi';

    //price
    const banhMiPrice = document.createElement('p');
    banhMiPrice.textContent = '$8.00';
    
    //description
    const banhMiDesc = document.createElement('p');
    banhMiDesc.textContent = `Freshly baked bread, creamy patey, crisp vegetables`;

    //append station for textwrap
    banhMiTextWrap.appendChild(banhMiName);
    banhMiTextWrap.appendChild(banhMiPrice);

    
    //append sctructure for bahnCard
    banhMiCard.appendChild(banhMiImage);
    banhMiCard.appendChild(banhMiTextWrap);
    banhMiCard.appendChild(banhMiDesc)


    //menu item 2 card (Spring Rolls)------------------------
    const springRollCard = document.createElement('div');
    springRollCard.classList.add('menu-card');

    //the image
    const springRollImage = document.createElement('img');
    springRollImage.src = springImage;//------------I AM HERE GOTTA GET A IMAGE AND APPEND!

    //textwrap
    const springRollTextWrap = document.createElement('div');
    springRollTextWrap.classList.add('text-wrap');

    //name
    const springRollName = document.createElement('h3');
    springRollName.textContent = 'Spring Rolls (3)';

    //price
    const springRollPrice = document.createElement('p');
    springRollPrice.textContent = '$7.00';

    //descripttion
    const springRollDesc = document.createElement('p');
    springRollDesc.textContent = `Shrimp, Fresh Lettuce, Vermicelli`;

    //append to textwrap
    springRollTextWrap.appendChild(springRollName);
    springRollTextWrap.appendChild(springRollPrice);

    //append station for the rolls
    springRollCard.appendChild(springRollImage);
    springRollCard.appendChild(springRollTextWrap);
    springRollCard.appendChild(springRollDesc);

    //new item?-----------------------------------------------

    //the pho card
    const phoCard = document.createElement('div');
    phoCard.classList.add('menu-card');

    //the image
    const phoImg = document.createElement('img');
    phoImg.src = phoImage;
    
    //textwrap?
    const phoTextWrap = document.createElement('div');
    phoTextWrap.classList.add('text-wrap');
    
    //name
    const phoName = document.createElement('h3');
    phoName.textContent = 'Pho To-Go!'

    //price
    const phoPrice = document.createElement('p');
    phoPrice.textContent = '$10.00';

    //description
    const phoDesc = document.createElement('p');
    phoDesc.textContent = 'its pho to go, so easy, no hassle, alway hot!'

    //phoCard appendStation
    phoCard.appendChild(phoImg);
    phoCard.appendChild(phoTextWrap);
    phoTextWrap.appendChild(phoName);
    phoTextWrap.appendChild(phoPrice);
    phoCard.appendChild(phoDesc);

    //drinks now--
    const drinksDiv = document.createElement('h2');
    drinksDiv.classList.add('menu-headers');
    drinksDiv.textContent ='Drinks';

    //viet ice tea boi!!-----------------
    const coffeeCard = document.createElement('div');
    coffeeCard.classList.add('menu-card');

    //coffee image
    const coffeeImg = document.createElement('img');
    coffeeImg.src = coffeeImage;

    //textwrap
    const coffeeTextWrap = document.createElement('div');
    coffeeTextWrap.classList.add('text-wrap');

    //name
    const coffeeName = document.createElement('h3');
    coffeeName.textContent = 'Vietnamese Iced Coffee';

    //price
    const coffeePrice = document.createElement('p');
    coffeePrice.textContent = '$3.00';

    //description
    const coffeeDesc = document.createElement('p');
    coffeeDesc.textContent = 'Wanna get cracked out and stay awake all night? Then here it is!';

    //append
    coffeeCard.appendChild(coffeeImg);
    coffeeCard.appendChild(coffeeTextWrap);
    coffeeTextWrap.appendChild(coffeeName);
    coffeeTextWrap.appendChild(coffeePrice);
    coffeeCard.appendChild(coffeeDesc);

    //last one, nuoc mat
    
    //card
    const nuocMatCard = document.createElement('div');
    nuocMatCard.classList.add('menu-card');
    
    //img
    const nuocMatImg = document.createElement('img');
    nuocMatImg.src = nuocMatImage;

    //textwrap
    const nuocMatTextWrap = document.createElement('div');
    nuocMatTextWrap.classList.add('text-wrap');
    
    //name
    const nuocMatName = document.createElement('h3');
    nuocMatName.textContent = 'Nuoc Mat';
    
    //price
    const nuocMatPrice = document.createElement('p');
    nuocMatPrice.textContent = '$6.00';

    //desc
    const nuocMatDesc = document.createElement('p');
    nuocMatDesc.textContent = 'Artichoke Tea of the Panda!';

    //append
    nuocMatCard.appendChild(nuocMatImg);
    nuocMatCard.appendChild(nuocMatTextWrap);
    nuocMatTextWrap.appendChild(nuocMatName);
    nuocMatTextWrap.appendChild(nuocMatPrice);
    nuocMatCard.appendChild(nuocMatDesc);

    //Place to backcard------------------------------
    backCard.appendChild(banhMiCard);
    backCard.appendChild(springRollCard);
    backCard.appendChild(phoCard);
    backCard.appendChild(drinksDiv);
    backCard.appendChild(coffeeCard);
    backCard.appendChild(nuocMatCard);

    //The Final Append
    content.appendChild(backCard);
}

export default createMenuPage;