const Menu = (() => {
  const addMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer');
    const menu1 = document.createElement('div');
    menu1.setAttribute('class', 'menu-box');
    menu1.textContent = 'I am menu';
    menuContainer.appendChild(menu1);
    const menu2 = document.createElement('div');
    menu2.setAttribute('class', 'menu-box');
    menu2.textContent = 'I am menu';
    menuContainer.appendChild(menu2);
    const menu3 = document.createElement('div');
    menu3.setAttribute('class', 'menu-box');
    menu3.textContent = 'I am menu';
    menuContainer.appendChild(menu3);
    const menu4 = document.createElement('div');
    menu4.setAttribute('class', 'menu-box');
    menu4.textContent = 'I am menu';
    menuContainer.appendChild(menu4);
    const menu5 = document.createElement('div');
    menu5.setAttribute('class', 'menu-box');
    menu5.textContent = 'I am menu';
    menuContainer.appendChild(menu5);
    const menu6 = document.createElement('div');
    menu6.setAttribute('class', 'menu-box');
    menu6.textContent = 'I am menu';
    menuContainer.appendChild(menu6);
    const menu7 = document.createElement('div');
    menu7.setAttribute('class', 'menu-box');
    menu7.textContent = 'I am menu';
    menuContainer.appendChild(menu7);
    const container = document.getElementsByClassName('content-container')[0]
    container.appendChild(menuContainer);
  };
  return { addMenu };
})();
export default Menu ;