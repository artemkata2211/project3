
const swiper = new Swiper('.swiper', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable : true ,
  },
  hashNavigation: true,
  slidesPerView : 1.7,
  mousewheel: true,
  keyboard: true,
  freeMode: true,
  width: 330,
  height: 80,
  breakpoints: { 320: { enabled: true, },
   768: { enabled: false, } }
}); 

let button = document.querySelector('.content__contiunuation');
let hiddens = document.querySelectorAll('.hidden');

button.onclick = function () {
for (let hidden of hiddens) {
  if (hidden.classList.contains('hidden')) {
    button.classList.toggle('icon');
hidden.classList.toggle('hidden');
button.textContent = 'Скрыть';
  } else {
     hidden.classList.add('hidden');
    button.textContent = 'Показать еще';
    button.classList.remove('icon');
  }
}
}



