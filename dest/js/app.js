"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

  var btn = document.querySelector("[hamburger-js]"),
      hideScrollContainer = document.querySelectorAll("html, body"),
      mobileContainer = document.querySelector("[mobile-block-js]");

  /**
    * @description
   */
  if (btn) {
    btn.addEventListener("click", function (ev) {
      var elem = ev.currentTarget;

      if (elem.classList.contains("is-active")) {
        elem.classList.remove("is-active");
        mobileContainer.classList.add("is-animated");
        mobileContainer.classList.remove("is-open");

        setTimeout(function () {
          mobileContainer.classList.remove("is-animated");
        }, 1000);
      } else {
        elem.classList.add("is-active");
        mobileContainer.classList.add("is-open");
      }

      hideScrollContainer.forEach(function (val, idx) {
        val.classList.toggle("is-hideScroll");
      });
    });
  }
};

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
var initHeaderFixed = function initHeaderFixed() {

  var elSelector = 'header',
      $element = $(elSelector);

  if (!$element.length) return true;

  var elHeight = 0,
      elTop = 0,
      $document = $(document),
      dHeight = 0,
      $window = $(window),
      wHeight = 0,
      wScrollCurrent = 0,
      wScrollBefore = 0,
      wScrollDiff = 0;

  $window.on('scroll', function (ev) {
    for (var i = 0; i < $element.length; i++) {

      elHeight = $($element[i]).outerHeight();
      dHeight = $document.height();
      wHeight = $window.height();
      wScrollCurrent = $window.scrollTop();
      wScrollDiff = wScrollBefore - wScrollCurrent;
      elTop = parseInt($($element[i]).css('top')) + wScrollDiff;

      if (wScrollCurrent <= 0) {
        $($element[i]).css('top', 0).removeClass('is-fixed is-hide');
      } else if (wScrollDiff > 0) {
        $($element[i]).css('top', 0).removeClass('is-hide').addClass('is-fixed');
      } else if (wScrollDiff < 0) {
        if (wScrollCurrent + wHeight >= dHeight - elHeight) {
          // $($element[i]).css('top', (elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0);
        } else {
          $($element[i]).css('top', -$element.outerHeight(true)).addClass('is-hide');
        }
      }
    }

    wScrollBefore = wScrollCurrent;
  });
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

  var moreSlider1 = new Swiper('.moreSlider1', {
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
      init: function init(swiper) {
        $(swiper.$el).css({
          // left: ($('.more__header')[0].getBoundingClientRect().left),
          // width: 'calc(100% + ' + ($('.more__header')[0].getBoundingClientRect().left + 2) + 'px)',
          paddingLeft: $('.more__header')[0].getBoundingClientRect().left
        });
      }
    }
  });

  var moreSlider2 = new Swiper('.moreSlider2', {
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
      init: function init(swiper) {
        $(swiper.$el).css({
          // width: 'calc(100% - ' + $('.more__header')[0].getBoundingClientRect().left + 'px)',
          paddingLeft: $('.more__header')[0].getBoundingClientRect().left
        });
      }
    }
  });

  $(window).on('resize', function () {
    $('.moreSlider1, .moreSlider2').css({ paddingLeft: $('.more__header')[0].getBoundingClientRect().left });
  });
};

/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */

  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   *
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initPreventBehavior();
    // ==========================================

    // lib
    initHamburger();
    initHeaderFixed();
    initSwiper();
    // ==========================================

    // callback
    // ==========================================
  };
  initNative();
})();