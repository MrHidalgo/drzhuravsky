/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const locoScrollCB = () => {
		window.locoScroll = '';
		
		let headerNode = document.getElementById('header');
		
		locoScroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true,
			getSpeed: true,
			getDirection: true,
			useKeyboard: true,
			lerp: 0.1,
			multiplier: 1,
			firefoxMultiplier: 50,
			touchMultiplier: 2.5,
			tablet: {
				smooth: true
			}, smartphone: {
				smooth: true
			}
		});
		
		locoScroll.on("scroll", (e) => {
			window.scrollX = e.scroll.x
			window.scrollY = e.scroll.y
			changeHeaderPosition(e);
		})
		
		locoScroll.on('call', (value, way, obj) => {
			/* ACTION */
		});
		
		function changeHeaderPosition(instance) {
			let headerHeight = headerNode.getBoundingClientRect().height;
			
			if (instance.direction === "down") {
				if (instance.scroll.y > headerHeight) {
					headerNode.classList.add("pinned");
					headerNode.classList.remove("unpinned");
				}
			}
			
			if(instance.direction === "up") {
				if (instance.scroll.y <= headerHeight) {
					headerNode.classList.remove("pinned");
					headerNode.classList.add("unpinned");
				}
			}
		}
	};
	
	const menuToggle = () => {
		$('.menu__btn').hover(
			(ev) => {
				const el = $(ev.currentTarget),
					elID = el.attr('data-id');
				
				if($(window).width() >= 768) {
					$('.menu__btn').removeClass('is-hover');
					el.addClass('is-hover');
					
					$('.menu__content').hide();
					$('.menu__content[data-content-id="' + elID + '"]').fadeIn(500);
				}
			},
			(ev) => {},
		);
		
		$('.menu__link-wrapper').hover(
			(ev) => {},
			(ev) => {
				if($(window).width() >= 768) {
					$('.menu__btn').removeClass('is-hover');
					$('.menu__content').hide();
				}
			}
		);
	};
	
	const scrollViewPortAnimation = () => {
		// AOS.init({
		// 	offset: 200,
		// 	delay: 50,
		// 	duration: 1000,
		// 	easing: 'ease-in-out-cubic',
		// 	mirror: false,
		// 	once: true
		// });
		
		var wow = new WOW({
			boxClass: 'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 50,          // distance to the element when triggering the animation (default is 0)
			mobile: true,       // trigger animations on mobile devices (default is true)
			live: true,       // act on asynchronously loaded content (default is true)
			callback: function (box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null,    // optional scroll container selector, otherwise use window,
			resetAnimation: true,     // reset animation on end (default is true)
		});
		
		wow.init();
	};
	
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================
		
		// lib
		initHamburger();
		initSwiper();
		// ==========================================

		// callback
		menuToggle();
		scrollViewPortAnimation();
		// ==========================================
		
		// setTimeout(() => {
		// 	$('body').animate({opacity: 1}, 750);
		// 	$('header').addClass('is-animate');
		//
		// 	setTimeout(() => {
		// 		$('header').removeClass('is-animate').addClass('is-show');
		// 	}, 1000);
		//
		// 	locoScrollCB();
		// }, 500);
	};
	initNative();
})();
