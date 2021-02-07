const Menu = (() => {
  const addMenu = () => {
    const h1 = document.createElement('h1');
    h1.setAttribute('id','menu-content');
    h1.innerHTML = 'I am a menu page';
    const container = document.getElementsByClassName('content-container')[0]
    container.appendChild(h1);
  };
  return { addMenu };
})();
export default Menu ;