//UI
const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');

//Event Listener Nav
togglebtn.addEventListener('click', function () {
    document.body.classList.toggle('shownav');
    // console.log('hay');
});

//Show Modal
openbtn.addEventListener('click', function () {
    modal.classList.add('showmodal');
});

//close Modal
closebtn.addEventListener('click', function () {
    modal.classList.remove('showmodal');
});

//Hide Modal on Outside Click
// window.addEventListener('click',function (e){
//     // console.log(e.target);
//
//     if(e.target === modal){
//         modal.classList.remove('showmodal');
//     }
// });

window.addEventListener('click', (e) => e.target === modal ? modal.classList.remove('showmodal') : false);