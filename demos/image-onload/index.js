console.time('image-load')
const img1 = document.querySelector('#image1');
img1.addEventListener('load', onLoad);
function onLoad(e){
    console.timeEnd('image-load');
    img1.classList.add('appear');
}