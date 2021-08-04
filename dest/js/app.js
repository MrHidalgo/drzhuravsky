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

	if ($('.more').length) {
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
	}
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {});

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var locoScrollCB = function locoScrollCB() {
		window.locoScroll = '';

		var headerNode = document.getElementById('header');

		locoScroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			getSpeed: true,
			getDirection: true,
			useKeyboard: true,
			lerp: 0.055,
			multiplier: 1,
			firefoxMultiplier: 50,
			touchMultiplier: 2.5,
			tablet: {
				smooth: true
			}, smartphone: {
				smooth: true
			}
		});

		locoScroll.on("scroll", function (e) {
			window.scrollX = e.scroll.x;
			window.scrollY = e.scroll.y;
			changeHeaderPosition(e);
		});

		locoScroll.on('call', function (value, way, obj) {
			/* ACTION */
		});

		function changeHeaderPosition(instance) {
			var headerHeight = headerNode.getBoundingClientRect().height;

			if (instance.direction === "down") {
				if (instance.scroll.y > headerHeight) {
					headerNode.classList.add("pinned");
				}
			}

			if (instance.direction === "up") {
				if (instance.scroll.y <= headerHeight) {
					headerNode.classList.remove("pinned");
				}
			}
		}
	};

	var menuToggle = function menuToggle() {
		$('.menu__btn').hover(function (ev) {
			var el = $(ev.currentTarget),
			    elID = el.attr('data-id');

			if ($(window).width() >= 768) {
				$('.menu__btn').removeClass('is-hover');
				el.addClass('is-hover');

				$('.menu__content').hide();
				$('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
			}
		}, function (ev) {});

		$('.menu__link-wrapper').hover(function (ev) {}, function (ev) {
			if ($(window).width() >= 768) {
				$('.menu__btn').removeClass('is-hover');
				$('.menu__content').hide();
			}
		});
	};

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
		initSwiper();
		// ==========================================

		// callback
		menuToggle();
		// ==========================================

		setTimeout(function () {
			$('body').animate({ opacity: 1 }, 1000);
			locoScrollCB();
		}, 500);
	};
	initNative();
})();