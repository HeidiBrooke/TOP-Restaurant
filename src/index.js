console.log('This is newer');
import './style.css';
import mainImage from './LogoPie.png';

let div = document.createElement('div');
div.setAttribute('id', 'content');
document.body.appendChild(div);

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

// let mainPic = document.createElement('div');
// mainPic.setAttribute('id', 'mainPic');
// mainPic.textContent = 'I am here';
// main.appendChild(mainPic);

const myImage = new Image();
myImage.src = mainImage;
myImage.setAttribute('id', 'mainImage');

main.appendChild(myImage);
