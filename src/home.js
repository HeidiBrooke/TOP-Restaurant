console.log('This is the home page running');
import './style.css';
import mainImage from './LogoPie.png';

const home = () => {
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

    const myImage = new Image();
    myImage.src = mainImage;
    myImage.setAttribute('id', 'mainImage');

    main.appendChild(myImage);

    let mainCopy = document.createElement('div');
    mainCopy.setAttribute('id', 'mainCopy');
    mainCopy.textContent = 'Pie. Loved by all. Hand made in North Plains, Oregon since 2015.';
    main.appendChild(mainCopy);

    let footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'Footer 2022 @footer Trademark-Footer';
    main.appendChild(footer);
    
}

export default home;
