// toogle menu mobile
const clickMenun = document.querySelector(".click-toogle");
const menuMobile = document.querySelector(".header-mobile");
const bodyMobile = document.querySelector("body");

clickMenun.addEventListener("click", function () {
  clickMenun.classList.toggle("active");
  menuMobile.classList.toggle("active");
  bodyMobile.classList.toggle("hidden");
    
});


// show video 
const btnVideo = document.querySelector('.btn-video__open');
const wrapVideo = document.querySelector('.video-list');
const closeVideo = document.querySelector('.video-item__close');


btnVideo.addEventListener('click', ()=> {
    console.log(wrapVideo, 'wrapVideo');
    wrapVideo.classList.add('show-video')

})

closeVideo.addEventListener('click', ()=> {
    wrapVideo.classList.remove('show-video')
    console.log(closeVideo, 'closeVideo');
})