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
		// ==========================================
		
		setTimeout(() => {
			$('body').animate({opacity: 1}, 750);
			$('header').addClass('is-animate');
			
			setTimeout(() => {
				$('header').removeClass('is-animate').addClass('is-show');
			}, 1000);
			
			locoScrollCB();
		}, 500);
	};
	initNative();
})();
