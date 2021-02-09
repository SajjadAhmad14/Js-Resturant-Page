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
    `;
    const container = document.getElementsByClassName('content-container')[0];
    container.appendChild(menuContainer);
  };
  return { addMenu };
})();
export default Menu;