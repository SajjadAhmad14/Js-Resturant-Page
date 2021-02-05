const contactUs = (() => {
  const addContact = () => {
    const div = document.createElement('div');
    div.innerHTML = 'I am a contact page';
    return div
  };
  const seeContact = () => {
    const contact = document.getElementById('contact');
    contact.classList.add('class', 'active');
  };
  return { seeContact, addContact };
})();
export default contactUs;