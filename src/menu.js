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

    createGridItem(9, menuGrid);

    // let gridItem = document.createElement('div');
    // gridItem.setAttribute('id', 'gridItem');
    // menuGrid.appendChild(gridItem);

    // const myImage = new Image();
    // myImage.src = firstPie;
    // myImage.setAttribute('id', 'menuItem');

    // gridItem.appendChild(myImage);

    // let pieDiscription = document.createElement('div');
    // pieDiscription.setAttribute('id', 'menuCopy');
    // pieDiscription.textContent = 'RazzleBerry Pie. $17 full. $10 personal. Blueberry, raspberry and blackberrys mixture inside a flakey buttery crust.';
    // gridItem.appendChild(pieDiscription);

    let footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'Pie photos courtesy of Levi Guzman, Brooke Lark, and Anna Tukhfatullina on Unsplash';
    main.appendChild(footer);
    
}

const createGridItem = (num, div) => {
    for (let i = 0; i < num; i++) {

    let gridItem = document.createElement('div');
    gridItem.setAttribute('id', 'gridItem');
    div.appendChild(gridItem);

    let num = Math.floor(Math.random() * 3);
    console.log(num);
    let pic = firstPie;
    let pieCopy = 'RazzleBerry Pie. $17 full. $10 personal. Blueberry, raspberry and blackberrys mixture inside a flakey buttery crust.';
    if(num === 1){
        pic = firstPie;
        pieCopy = 'RazzleBerry Pie. $17 full. $10 personal. Blueberry, raspberry and blackberrys mixture inside a flakey buttery crust.';
    }
    else if (num === 2){
        pic = redPie;
        pieCopy = 'Banana Cream Pie. $17 full. $10 personal. Bananas, vanilla custard and a light cream filling.';
    }
    else {
        pic = starPie;
        pieCopy = 'Apple Pie. $17 full. $10 personal. Classic apple and cinnamon filling with a little extra tang.';
    }
    
    const myImage = new Image();
    myImage.src = pic;
    myImage.setAttribute('id', 'menuItem');

    gridItem.appendChild(myImage);

    let pieDiscription = document.createElement('div');
    pieDiscription.setAttribute('id', 'menuCopy');
    pieDiscription.textContent = pieCopy;
    gridItem.appendChild(pieDiscription);

    }
}




export default menu;
