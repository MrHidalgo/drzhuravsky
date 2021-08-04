

/**
 * @name initHeaderFixed
 *
 * @description Fixing the site header in the scrolling page.
 */
const initHeaderFixed = () => {
  
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  function doSomething(scrollPos) {
    const headerElement = $('.header');
  
    (scrollPos > 150) ? headerElement.addClass("is-fixed") : headerElement.removeClass("is-fixed");
  }
  
  document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
      
      ticking = true;
    }
  });

};
