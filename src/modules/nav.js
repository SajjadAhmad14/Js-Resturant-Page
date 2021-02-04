function navBar() {
  const content = document.getElementById('content');
  const childDiv = document.createElement('div');
  childDiv.classList.add('nav-tabs');
  const home = document.createElement("BUTTON");
  home.innerHTML = 'Home';
  home.setAttribute('data-for-tab', '1');
  home.classList.add('nav-btn');
  const menu = document.createElement("BUTTON");
  menu.innerHTML = 'Menu';
  menu.setAttribute('data-for-tab', '2');
  menu.classList.add('nav-btn');
  const contact = document.createElement("BUTTON");
  contact.innerHTML = 'Contact Us';
  contact.setAttribute('data-for-tab', '3');
  contact.classList.add('nav-btn');
  contact.classList.add('nav-btn-active');
  childDiv.appendChild(home);
  childDiv.appendChild(menu);
  childDiv.appendChild(contact);
  content.appendChild(childDiv);
  }
export { navBar };