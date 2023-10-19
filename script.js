//hizmetlerimiz

var btn_diva = document.getElementById("btn_diva");
var btn_divb = document.getElementById("btn_divb");
var btn_divc = document.getElementById("btn_divc");
var diva = document.getElementById("diva");
var divb = document.getElementById("divb");
var divc = document.getElementById("divc");

diva.style.display = 'block';
divb.style.display = 'none';
divc.style.display = 'none';

btn_diva.addEventListener('click', () => {
  diva.style.display = 'block';
  divb.style.display = 'none';
  divc.style.display = 'none';

});

btn_divb.addEventListener('click', () => {
  diva.style.display = 'none';
  divb.style.display = 'block';
  divc.style.display = 'none';

});
btn_divc.addEventListener('click', () => {
  diva.style.display = 'none';
  divb.style.display = 'none';
  divc.style.display = 'block';

});



// ekibimiz
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },

});

//güncel yazılar
var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});



//togglebtn
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropdown-menuu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

