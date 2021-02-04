import {navBar} from './modules/nav.js';
import {contactUs} from './modules/contact.js';
import {menu} from './modules/menu.js';
navBar();
contactUs();
menu();
function setTabs() {
  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const navTabs = button.parentElement;
      const tabsContainer = navTabs.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(`.tab-content[data-tab = "${tabNumber}"]`);
      navTabs.querySelectorAll('.nav-btn').forEach(button => {
      button.classList.remove('nav-btn-active');
      });
      tabsContainer.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('tab-content-active');
      });
      button.classList.add('nav-btn-active');
      tabToActivate.classList.add('nav-content-active');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTabs()
} 
);
