export default function menuMobile() {
  const bntMobile = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav-list');

  function toggleMenu() {
    nav.classList.toggle('active');
    const linha1 = document.querySelector('.line1');
    const linha2 = document.querySelector('.line2');
    const linha3 = document.querySelector('.line3');
    if (nav.classList.contains('active')) {
      linha1.style.transform = 'rotate(-45deg) translate(-8px, 8px)';
      linha2.style.opacity = '0';
      linha3.style.transform = 'rotate(45deg) translate(-3px, -3px)';
    } else {
      linha1.style.transform = '';
      linha2.style.opacity = '1';
      linha3.style.transform = '';
    }
  }

  const linksInternos = document.querySelectorAll('.nav-list a[href^="#"]');

  linksInternos.forEach((link) => {
    link.addEventListener('click', toggleMenu);
  });

  document.querySelector('.home').addEventListener('click', toggleMenu);

  bntMobile.addEventListener('click', toggleMenu);
}
