var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    centeredSlides: false,
    fade: true,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });