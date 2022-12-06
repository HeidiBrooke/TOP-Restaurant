console.log('This is newer');
// import './style.css';
// import mainImage from './LogoPie.png';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

let div = document.createElement('div');
div.setAttribute('id', 'content');
document.body.appendChild(div);

home();

const loadPage = (e) => {
    console.log('Ive been clicked');
    console.log("target value is:" + e.target.textContent);
    let divChildren = div.children;
    divChildren = Array.from(divChildren);
    if (e.target.textContent === 'Menu') {
        divChildren.forEach(child => {child.remove()});
        menu();
        addListeners();
    }
    else if (e.target.textContent === 'contact'){
        divChildren.forEach(child => {child.remove()});
        contact();
        addListeners();
    }
    else {
        divChildren.forEach(child => {child.remove()});
        home();
        addListeners();
    }
}

function addListeners() {
    let nav = document.getElementById('nav');
    let navItems = Array.from(nav.children);
    console.log(navItems);
    navItems.forEach(item => {
        console.log('adding listeners')
        item.addEventListener('click', loadPage);
    })
}



addListeners();
// menu();
//contact();


