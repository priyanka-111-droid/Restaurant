import coffee from './coffee.jpg';
import croissant from './croissant.jpg';
import pastry from './pastry.jpg';

const menu = ()=>{
    const content = document.querySelector('#content');
    const menuHeading = document.createElement('h2');
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = "Our Menu";
    content.appendChild(menuHeading);

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');
    content.appendChild(menuDiv);

    const items = [coffee,croissant,pastry];
    const itemDescriptions = [
        "Cappucino",
        "Danish Croissant",
        "Black Forest"
    ];
    for(let i=0;i<3;i++){
        const menuSquare = document.createElement('div');
        menuSquare.classList.add('menu-square')
        menuDiv.appendChild(menuSquare);
        const img = new Image();
        img.classList.add('menu-img');
        img.src=items[i];
        menuSquare.appendChild(img);
        const desc = document.createElement('p');
        desc.classList.add('img-desc');
        desc.textContent = itemDescriptions[i];
        menuSquare.appendChild(desc);
    }
}
export default menu;