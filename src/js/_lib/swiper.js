

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

  const moreSlider1 = new Swiper('.moreSlider1', {
    loop: false,
    freeMode: false,
    effect: 'slide',
    speed: 1500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    on: {
      init: function (swiper) {
        $(swiper.$el).css({
          // left: ($('.more__header')[0].getBoundingClientRect().left),
          // width: 'calc(100% + ' + ($('.more__header')[0].getBoundingClientRect().left + 2) + 'px)',
          paddingLeft: $('.more__header')[0].getBoundingClientRect().left,
        })
      },
    }
  });

  const moreSlider2 = new Swiper('.moreSlider2', {
    loop: false,
    freeMode: false,
    effect: 'slide',
    speed: 1500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    on: {
      init: function (swiper) {
        $(swiper.$el).css({
          // width: 'calc(100% - ' + $('.more__header')[0].getBoundingClientRect().left + 'px)',
          paddingLeft: $('.more__header')[0].getBoundingClientRect().left
        })
      },
    }
  });
  
  $(window).on('resize', () => {
    $('.moreSlider1, .moreSlider2').css({paddingLeft: $('.more__header')[0].getBoundingClientRect().left,})
  });
};
