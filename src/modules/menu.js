const menu = (() => {
  const addMenu = () => {
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.innerHTML = 'I am a menu page';
    content.appendChild(div);
  };
  const seeMenu = () => {
    const contact = document.getElementById('menu');
    contact.classList.add('class', 'active');
  };
  return { seeMenu, addMenu };
})();
export default menu ;