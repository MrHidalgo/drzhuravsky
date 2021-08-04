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
			lerp: 1,
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
				}
			}
			
			if(instance.direction === "up") {
				if (instance.scroll.y <= headerHeight) {
					headerNode.classList.remove("pinned");
				}
			}
		}
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
		// ==========================================
	};
	initNative();
	
	// locoScrollCB();
})();
