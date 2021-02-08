const Footer = (() => {
  const addFooter = () => {
    const footerContainer = document.createElement('footer');
    const content = document.getElementById('content');
    footerContainer.innerHTML = `<div>Developed By <a href = "#">Sajjad Ahmad</a></div>
    <div><a href = 'https://github.com/SajjadAhmad14' target = 'blank' class = 'icons'><i class="fab fa-github"></i></a>
    <a href = 'https://www.linkedin.com/in/sajjadahmad14' target = 'blank' class = 'icons'><i class="fab fa-linkedin-in"></i>
    </a>
    <a href = 'https://twitter.com/Sajjad_Ahmad14' target = 'blank' class = 'icons'><i class="fab fa-twitter"></i>
    </div>`;
    content.appendChild(footerContainer);
  };
  return { addFooter };
})();
export default Footer;