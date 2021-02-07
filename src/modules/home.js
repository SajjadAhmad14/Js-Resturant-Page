const Home = (() => {
  const addHomePage = () => {
    const homeContainer = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Green Valley!';
    homeContainer.appendChild(h1);
    homeContainer.setAttribute('id', 'homeContainer');
    const menuBtn = document.createElement('BUTTON');
    menuBtn.textContent = 'See Menu';
    menuBtn.setAttribute('class', 'menu-btn');
    homeContainer.appendChild(menuBtn);
    const container = document.getElementsByClassName('content-container')[0]
    container.appendChild(homeContainer);
  }
  return { addHomePage };
})();
export default Home;