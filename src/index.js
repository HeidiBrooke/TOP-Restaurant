console.log('This is newer');
// import './style.css';
// import mainImage from './LogoPie.png';
import home from './home.js';

let div = document.createElement('div');
div.setAttribute('id', 'content');
document.body.appendChild(div);

home();

