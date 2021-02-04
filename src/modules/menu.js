function menu() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  div.innerHTML = 'I am menu';
  div.classList.add('tab-content');
  div.setAttribute('data-tab', '2');
  content.appendChild(div);
}
export { menu };