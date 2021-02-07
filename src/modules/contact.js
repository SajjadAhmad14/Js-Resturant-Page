const Contact = (() => {
  const addContact = () => {
    const h1 = document.createElement('h1');
    h1.innerHTML = 'I am a contact page';
    h1.setAttribute('id','contact-content');
    const content = document.getElementById('content');
    const container = document.getElementsByClassName('content-container')[0]
    container.appendChild(h1);
  };
  return { addContact };
})();
export default Contact;