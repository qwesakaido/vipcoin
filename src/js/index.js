const swiper = new Swiper('.packages__slider', {

    slidesPerView: 4,
    loop: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    navigation: {
      prevEl: '.packages__prev-button',
      nextEl: '.packages__next-button',
    },

    pagination: {
      el:'.swiper-pagination',
      clickable: true,
    }
});

