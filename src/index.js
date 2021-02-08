import 'bootstrap';
import Nav from './modules/nav';
import Contact from './modules/contact';
import Menu from './modules/menu';
import Home  from './modules/home';
import Container from './modules/container';
import Footer from './modules/footer';
Nav.addNav();
Container.addContainer();
Home.addHomePage();
Footer.addFooter();
const clearTabCotent = () => {
  const container = document.getElementsByClassName('content-container')[0];
  if (container.childNodes.length == 1) {
  container.removeChild(container.lastChild);
  }
};

const showContact = () => {
  clearTabCotent();
  Contact.addContact();
};

const showMenu = () => {
  clearTabCotent();
  Menu.addMenu();
};

const showHomePage = () => {
  clearTabCotent();
  Home.addHomePage();
}

document.addEventListener('DOMContentLoaded', () => {
  const contact = document.getElementById('contact');
  const menu = document.getElementById('menu');
  const home = document.getElementById('home');
  contact.addEventListener('click', showContact);
  menu.addEventListener('click', showMenu);
  home.addEventListener('click', showHomePage);
}
);
