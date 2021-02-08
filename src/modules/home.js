const Home = (() => {
  const addHomePage = () => {
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'homeContainer');
    homeContainer.innerHTML = `
    <h1>Welcome to Green Valley!</h1>
    `
    const btn = document.createElement("BUTTON");
    btn.innerHTML = 'See Menu';
    btn.setAttribute('id', 'show-menu-btn');
    btn.setAttribute('class', 'menu-btn');
    homeContainer.appendChild(btn);
    const container = document.getElementsByClassName('content-container')[0]
    container.appendChild(homeContainer);
  }
  return { addHomePage };
})();
export default Home;