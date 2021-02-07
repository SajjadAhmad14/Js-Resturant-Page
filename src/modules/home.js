const Home = ( () => {
  const addHomePage = () => {
    const h1 = document.createElement('h1');
    h1.setAttribute('id','home-content');
    h1.innerHTML = 'I am a home page';
    const container = document.getElementsByClassName('content-container')[0]
    container.appendChild(h1);
  }
  return { addHomePage };
})();
export default Home ;