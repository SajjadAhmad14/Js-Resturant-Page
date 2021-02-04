function contactUs() {
  const content = document.getElementById('content');
  const div = document.createElement('div');
  div.innerHTML = 'I am a contact page';
  div.classList.add('tab-content');
  div.classList.add('tab-content-active');
  div.setAttribute('data-tab', '3');
  content.appendChild(div);
}
export { contactUs };