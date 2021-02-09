const Contact = (() => {
  const addContact = () => {
    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('id', 'contactContainer');
    contactContainer.innerHTML = `
    <h1>Contact Us:</h1>
    <div>Phone: +9299200000000</div>
    <div>Email: contact@greenvalley.com</div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26439.036110863373!2d73.36448885828344!3d34.07260275676617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfd4b203243f2b%3A0xe2a84441ca2e0678!2sNathia%20Gali%2C%20Abbottabad%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1612792138236!5m2!1sen!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    `;
    const container = document.getElementsByClassName('content-container')[0];
    container.appendChild(contactContainer);
  };
  return { addContact };
})();
export default Contact;