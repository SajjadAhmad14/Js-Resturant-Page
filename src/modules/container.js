const Container = (() => {
  const addContainer = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'content-container');
    const content = document.getElementById('content');
    content.appendChild(div);
  }
  return { addContainer }
})();
export default Container;