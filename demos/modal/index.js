const btn = document.querySelector('.button');

btn.addEventListener('click', onClick);

function onClick(e) {
  document.body.classList.toggle('show-modal');
}