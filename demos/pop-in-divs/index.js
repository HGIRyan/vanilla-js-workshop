document.addEventListener('DOMContentLoaded', main);
function main(){
    console.log('DOM Content Loaded.');
    const popInDivs = Array.from(document.querySelectorAll('.pop-in'));
    const contentDivs = Array.from(document.querySelectorAll('.content-div'));
    const resetButton = document.querySelector('#reset-animations');
    insertContent();
    loadDivsInView();
    window.addEventListener('scroll', loadDivsInView);
    resetButton.addEventListener('click', resetAnimations)
    // functions // 
    function loadDivsInView() {
        const windowOffset = window.pageYOffset;
        const windowHeight = window.innerHeight;
        popInDivs.forEach(el=>{
            if (windowOffset + windowHeight - (el.offsetHeight/2) > el.offsetTop) {
                if (!el.classList.contains('appear'))
                    el.classList.add('appear');
            }
        })
    }
    function insertContent() {
        contentDivs.forEach(el=>{
            el.innerText = 'atqui haec patefactio quasi rerum opertarum, cum quid quidque sit aperitur, definitio est. qua tu etiam inprudens utebare non numquam. nam hunc ipsum sive finem sive extremum sive ultimum definiebas id esse, quo omnia, quae recte fierent, referrentur neque id ipsum usquam referretur. praeclare hoc quidem. bonum ipsum etiam quid esset, fortasse, si opus fuisset, definisses aut quod esset natura adpetendum aut quod prodesset aut quod iuvaret aut quod liberet modo. nunc idem, nisi molestum est, quoniam tibi non omnino displicet definire et id facis, cum vis, velim definias quid sit voluptas, de quo omnis haec quaestio est.'
        })
    }
    function resetAnimations() {
        popInDivs.forEach(el=>{
            el.classList.remove('appear');
        })
    }
}