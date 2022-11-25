export default function animaScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.7;

  function animar() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if (sectionTop < 0) {
        section.classList.add('atv');
      }
    });
  }

  animar();

  window.addEventListener('scroll', animar);
}
