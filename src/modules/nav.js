const Nav = (() => {
  const addNav = () => {
    const content = document.getElementById('content');
    const childDiv = document.createElement('div');
    childDiv.classList.add('nav-tabs');
    const home = document.createElement('BUTTON');
    home.innerHTML = 'Home';
    home.setAttribute('id', 'home');
    home.classList.add('nav-btn');
    const menu = document.createElement('BUTTON');
    menu.innerHTML = 'Menu';
    menu.setAttribute('id', 'menu');
    menu.setAttribute('class', 'nav-link');
    menu.classList.add('nav-btn');
    const contact = document.createElement('BUTTON');
    contact.innerHTML = 'Contact Us';
    contact.setAttribute('id', 'contact');
    contact.classList.add('nav-btn');
    childDiv.appendChild(home);
    childDiv.appendChild(menu);
    childDiv.appendChild(contact);
    content.appendChild(childDiv);
  };
  return { addNav };
})();
export default Nav;
