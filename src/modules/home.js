const Home = (() => {
  const addHomePage = () => {
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'homeContainer');
    homeContainer.innerHTML = `
    <h1>Welcome to Green Valley!</h1>
    <button class = 'menu-btn' id = 'show-menu-btn'>See Menu</button>
    `
    const container = document.getElementsByClassName('content-container')[0]
    container.appendChild(homeContainer);
  }
  return { addHomePage };
})();
export default Home;