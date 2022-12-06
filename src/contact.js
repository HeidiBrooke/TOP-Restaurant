console.log('This is the contact page running');
import './style.css';

const contact = () => {
    let div = document.getElementById('content');

    let main = document.createElement('div');
    main.setAttribute('id', 'full');
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

    let contactForm = document.createElement('form');
    contactForm.setAttribute('id', 'contactForm');
    main.appendChild(contactForm);

    let aDiv = document.createElement('div');
    aDiv.setAttribute('id', 'formDiv')
    contactForm.appendChild(aDiv);

    let email = document.createElement('label');
    // email.setAttribute('id', 'email');
    email.textContent = 'Email: ';
    aDiv.appendChild(email);

    let emailInput = document.createElement('input');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('type', "email");
    aDiv.appendChild(emailInput);

    let anotherDiv = document.createElement('div');
    anotherDiv.setAttribute('id', 'formDiv')
    contactForm.appendChild(anotherDiv);

    let message = document.createElement('label');
    message.setAttribute('id', 'message');
    message.textContent = 'Message: ';
    anotherDiv.appendChild(message);

    let messageInput = document.createElement('input');
    messageInput.setAttribute('id', 'messageInput');
    messageInput.setAttribute('type', "text");
    anotherDiv.appendChild(messageInput);

    let thirdDiv = document.createElement('div');
    thirdDiv.setAttribute('id', 'formDiv')
    contactForm.appendChild(thirdDiv);

    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('id', 'button');
    button.textContent = 'Submit';
    contactForm.appendChild(button);

    let footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = 'Pie photos courtesy of Levi Guzman, Brooke Lark, and Anna Tukhfatullina on Unsplash';
    main.appendChild(footer);

    
}

export default contact;