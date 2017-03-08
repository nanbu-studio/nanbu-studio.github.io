(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      var href = $anchor.attr('href');
      var animate = function (selector) {
        $('html, body').stop().animate({
            scrollTop: ($(selector).offset().top - 50)
        }, 1250, 'easeInOutExpo');
      };

      if (window.location.pathname == '/' && href.indexOf('/#') == 0) {
        href = href.replace(/\//, '');
        animate(href);
        event.preventDefault();
      } else if (href.indexOf('#') == 0) {
        animate(href);
        event.preventDefault();
      } else {}

    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict
