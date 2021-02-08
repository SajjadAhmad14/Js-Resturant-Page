const Contact = (() => {
  const addContact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contactContainer');
    contactContainer.innerHTML = `
    <h1>Contact Us:</h1>
    <div>Phone: +9299200000000</div>
    <div>Email: contact@greenvalley.com</div>
    `;
    const container = document.getElementsByClassName('content-container')[0];
    container.appendChild(contactContainer);
  };
  return { addContact };
})();
export default Contact;