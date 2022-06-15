const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  initialSlide: 1,
  spaceBetween: 25,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    391: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    570: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: { slidesPerView: 3, spaceBetween: 30 },
  },
});

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  const navBtns = document.querySelector('.nav__btns');
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      body.classList.add('locked');
      navBtns.classList.add('active');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
      navBtns.classList.remove('active');
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
      navBtns.classList.remove('active');
    }
  });
}
burgerMenu();

// Submenu

function submenu() {
  const submenu = document.querySelector('.language__submenu');
  const trigger = document.querySelector('.with__submenu');
  const arrow = document.querySelector('.language__arrow');

  trigger.addEventListener('click', () => {
    submenu.classList.toggle('active');
    arrow.classList.toggle('active');
  });
}
submenu();
