const divs = document.querySelectorAll('DIV');
for (let i=0; i<divs.length; i++) {
  divs[i].addEventListener('click', onClick);
  divs[i].style.cursor = "pointer";
}
function onClick(e) {
  this.style.background = "red"
  console.log(this.classList);
}