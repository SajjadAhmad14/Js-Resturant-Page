const Menu = (() => {
  const addMenu = () => {
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menuContainer');
    menuContainer.innerHTML = `
    <div class = 'menu-box'><h3>Chicken Tikka</h3>
    <button class = 'order-btn'>Order now</button>
    </div>
    <div class = 'menu-box'><h3>Chicken Boti</h3>
    <button class = 'order-btn'>Order now</button>
    </div>
    <div class = 'menu-box'><h3>Chicken Malai</h3>
    <button class = 'order-btn'>Order now</button>
    </div>
    <div class = 'menu-box'><h3>Chicken Soup</h3>
    <button class = 'order-btn'>Order now</button>
    </div>
    <div class = 'menu-box'><h3>Mutton Tikka</h3>
    <button class = 'order-btn'>Order now</button>
    </div>
    <div class = 'menu-box'><h3>Mutton Boti</h3>
    <button class = 'order-btn'>Order now</button>
    </div>
    <div class = 'menu-box'><h3>Fresh Juices</h3>
    <button class = 'order-btn'>Order now</button>
    </div>
    <div class = 'menu-box'><h3>Salads</h3>
    <button class = 'order-btn'>Order now</button>
    </div>
    `
    // const menu1 = document.createElement('div');
    // menu1.setAttribute('class', 'menu-box');
    // menu1.textContent = 'Chicken Tikka';
    // menuContainer.appendChild(menu1);
    // const menu2 = document.createElement('div');
    // menu2.setAttribute('class', 'menu-box');
    // menu2.textContent = 'Chicken Handi';
    // menuContainer.appendChild(menu2);
    // const menu3 = document.createElement('div');
    // menu3.setAttribute('class', 'menu-box');
    // menu3.textContent = 'Chicken Nihari';
    // menuContainer.appendChild(menu3);
    // const menu4 = document.createElement('div');
    // menu4.setAttribute('class', 'menu-box');
    // menu4.textContent = 'Mutton Karai';
    // menuContainer.appendChild(menu4);
    // const menu5 = document.createElement('div');
    // menu5.setAttribute('class', 'menu-box');
    // menu5.textContent = 'Mutton Pulao';
    // menuContainer.appendChild(menu5);
    // const menu6 = document.createElement('div');
    // menu6.setAttribute('class', 'menu-box');
    // menu6.textContent = 'Chicken Soup';
    // menuContainer.appendChild(menu6);
    // const menu7 = document.createElement('div');
    // menu7.setAttribute('class', 'menu-box');
    // menu7.textContent = 'Mutton Boti';
    // menuContainer.appendChild(menu7);
    // const menu8 = document.createElement('div');
    // menu8.setAttribute('class', 'menu-box');
    // menu8.textContent = 'Chicken Boti';
    // menuContainer.appendChild(menu8);
    const container = document.getElementsByClassName('content-container')[0]
    container.appendChild(menuContainer);
  };
  return { addMenu };
})();
export default Menu ;