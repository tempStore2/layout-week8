// var swiper = new Swiper(".swiper-banner", {
//   slidesPerView: 1,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
// });
var swiper = new Swiper(".swiper-choices", {
  slidesPerView: 1.3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },

  breakpoints: {
    375: {
      slidesPerView: 1.4,
    },
    420: {
      slidesPerView: 1.5,
    },
    440: {
      slidesPerView: 1.6,
    },
    460: {
      slidesPerView: 1.7,
    },
    480: {
      slidesPerView: 1.8,
    },
    500: {
      slidesPerView: 1.9,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
    992: {
      slidesPerView: 3.5,
    },
    1140: {
      slidesPerView: 4,
    },
  },
});
