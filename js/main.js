var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play')
const iFrame = document.getElementById('video')
buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active')
    })
})


modalWindow.addEventListener('click', () => {
    console.log(' in app')
    modalWindow.classList.remove('active')

})