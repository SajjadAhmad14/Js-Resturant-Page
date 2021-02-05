import nav from './modules/nav';
import contactUs from './modules/contact';
import menu from './modules/menu';
import Home  from './modules/home';

const content = document.getElementById('content');
const container =document.createElement('div');
container.classList.add('bg-red', 'mtop')
content.appendChild(container)

const clearContent = () => {
  container.innerHTML=''
};

const showContact = () => {
  clearContent();
  let contactDiv = contactUs.addContact()
  console.log(contactDiv);
  container.appendChild(contactDiv)
};

const showMenu = () => {
  clearContent();
  menu.addMenu();
};

const showHomePage = () => {
  clearContent();
  let homeDiv = Home.addHomePage()
  console.log(homeDiv);
  container.appendChild(homeDiv)
 
}

document.addEventListener('DOMContentLoaded', () => {
  nav.addNav();
  showHomePage();
  const contact = document.getElementById('contact');
  const menu = document.getElementById('menu');
  const home = document.getElementById('home');
  contact.addEventListener('click', showContact);
  menu.addEventListener('click', showMenu);
  home.addEventListener('click', showHomePage);
}
);
