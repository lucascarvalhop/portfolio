import projetosObj from './projetosObj.js';

export default function modal() {
  const imgs = document.querySelectorAll('.abrirModal');
  const modalC = document.querySelector('.modal');

  function openModal(event) {
    event.preventDefault();
    let key = event.currentTarget.getAttribute('data-key');
    let projetos = projetosObj();
    modalC.classList.add('active');
    if (modalC.classList.contains('active')) {
      document.querySelector('.modal-container img').src = projetos[key].src;
      document.querySelector('.modal-container .modalT').innerHTML =
        projetos[key].title;
      document.querySelector('.modal-container .desc').innerHTML =
        projetos[key].desc;
      document.querySelector('.modal-container .tec').innerHTML =
        projetos[key].tecU;
      document
        .querySelector('.modal-container .btn-projeto')
        .closest('a')
        .setAttribute('href', projetos[key].projeto);
      document
        .querySelector('.modal-container .btn-repositorio')
        .closest('a')
        .setAttribute('href', projetos[key].repositorio);
      modalC.style.display = 'flex';
    }
  }

  imgs.forEach((imagem, index) => {
    imagem.setAttribute('data-key', index);
    imagem.addEventListener('click', openModal);
  });

  /* Fechar modal com click no botão de fechar */

  function closeModal() {
    modalC.style.display = 'none';
  }

  document
    .querySelector('.modal-container .fechar')
    .addEventListener('click', () => {
      closeModal();
    });

  /* Fechar modal com click fora do modal */

  function cliqueForaDoModal(event) {
    if (event.target == this) {
      closeModal();
    }
  }
  document.querySelector('.modal').addEventListener('click', cliqueForaDoModal);
}
