console.log('This is the menu page running');
import './style.css';
import firstPie from './MainPie.png';
import redPie from './RedPie.png';
import starPie from './StarPie.png';

const menu = () => {
    let div = document.getElementById('content');

    let main = document.createElement('div');
    main.setAttribute('id', 'main');
    div.appendChild(main);
    
    let nav = document.createElement('div');
    nav.setAttribute('id', 'nav');
    main.appendChild(nav);

    let homeTab = document.createElement('div');
    homeTab.textContent = 'Home';
    nav.appendChild(homeTab);

    let menuTab = document.createElement('div');
    menuTab.textContent = 'Menu';
    nav.appendChild(menuTab);

    let contactTab = document.createElement('div');
    contactTab.textContent = 'contact';
    nav.appendChild(contactTab);

    let menuGrid = document.createElement('div');
    menuGrid.setAttribute('id', 'menuGrid');
    main.appendChild(menuGrid);

    let gridItem = document.createElement('div');
    gridItem.setAttribute('id', 'gridItem');
    menuGrid.appendChild(gridItem);

    const myImage = new Image();
    myImage.src = firstPie;
    myImage.setAttribute('id', 'menuItem');

    gridItem.appendChild(myImage);

    let pieDiscription = document.createElement('div');
    pieDiscription.setAttribute('id', 'menuCopy');
    pieDiscription.textContent = 'RazzleBerry Pie. $17 full. $10 personal. Blueberry, raspberry and blackberrys mixture inside a flakey buttery crust.';
    gridItem.appendChild(pieDiscription);

    let footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'Footer 2022 @footer Trademark-Footer';
    main.appendChild(footer);
    
}

export default menu;
