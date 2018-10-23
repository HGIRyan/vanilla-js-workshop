document.addEventListener("DOMContentLoaded", main);

function main() {
  document.body.addEventListener("keyup", onKeyUp);
  const p = document.querySelector("#player");
  p.style.top = "0";
  p.style.left = "0";
  function onKeyUp(e) {
    switch (e.key) {
      case "ArrowUp": {
        const newTop = parseInt(p.style.top) - 25;
        if (newTop >= 0) p.style.top = newTop + "px";
        break;
      }
      case "ArrowDown": {
        const newTop = parseInt(p.style.top) + 25;
        if (newTop <= document.body.offsetHeight - p.offsetHeight) p.style.top = newTop + "px";
        break;
      }
      case "ArrowLeft": {
        const newLeft = parseInt(p.style.left) - 25;
        if (newLeft >= 0) p.style.left = newLeft + "px";
        break;
      }
      case "ArrowRight": {
        const newLeft = parseInt(p.style.left) + 25;
        if (newLeft <= document.body.offsetWidth - p.offsetWidth) p.style.left = newLeft + "px";
        break;
      }
    }
  }
}
