const Home = ( () => {
  const addHomePage = () => {
    const div = document.createElement('div');
    div.innerHTML = 'I am a home page';
    return div
  }
  return { addHomePage };
})();
export default Home ;