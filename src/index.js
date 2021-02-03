document.body.onload = navBar;
function navBar() {
body = document.querySelector('body');
const nav = document.createElement('nav');
const uList = document.createElement('ul');
uList.classList.add('nav-bar');
const li1 = document.createElement('li');
const brand = document.createElement('a');
brand.setAttribute('href', '#');
brand.textContent = 'GreenValley';
li1.appendChild(brand);
uList.appendChild(li1)
const li2 = document.createElement('li');
const home = document.createElement('a');
home.textContent = 'Home';
home.setAttribute('href', '#');
const menu = document.createElement('a');
menu.textContent = 'Menu';
menu.setAttribute('href', '#');
const contact = document.createElement('a');
contact.textContent = 'Contact';
contact.setAttribute('href', '#');
li2.appendChild(home);
li2.appendChild(menu);
li2.appendChild(contact);
uList.appendChild(li2)
nav.appendChild(uList)
body.appendChild(nav);
}