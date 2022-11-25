export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('.nav-list a[href^="#"]');
  const seta = document.querySelector('.setaScroll');
  const linkHome = document.querySelector('.home');
  function scrollToSection(event) {
    event.preventDefault();
    let href = event.currentTarget.getAttribute('href');
    let section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function scrollToHome(event) {
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  linkHome.addEventListener('click', scrollToHome);

  seta.addEventListener('click', scrollToSection);
  linksInternos.forEach((link) => {
    if (link.getAttribute('href') != '#home') {
      link.addEventListener('click', scrollToSection);
    }
  });
}
