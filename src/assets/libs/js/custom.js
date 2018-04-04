//todo rewrite cache an selectors in vars
(function ($) {
	new WOW().init();

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navigation-bar").offset().top > 50) {
			$(".navigation-bar-fixed-top").addClass("top-nav-collapse");
            resizeLogo();
		} else {
			$(".navigation-bar-fixed-top").removeClass("top-nav-collapse");
            resizeLogo();
		}
	});


  $(window).resize(function() {
      resizeLogo();
  });

  function resizeLogo() {
      if(($(window).width() < 750 && $(".navigation-bar").offset().top > 50)
    || ($(window).width() > 750 && $(".navigation-bar").offset().top > 50)
          || ($(window).width() < 750 && $(".navigation-bar").offset().top < 50)){
          $(".navigation-bar-brand > img.aloe-logo").hide();
          $(".navigation-bar-brand > img.aloe-logo-min").show();
      } else {
          $(".navigation-bar-brand > img.aloe-logo-min").hide();
          $(".navigation-bar-brand > img.aloe-logo").show();
      }
  }

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
    resizeLogo();

		$('.navigation-bar-nav li a').on('click', function(event) {

			if( ($(this).is('a:not([href^="#"])') && $(this).is('a:not([href^="/#"])'))
        || ($(this).attr("href") == '#' && $(this).attr("href") == '/#')) {
	     return;
	    }
			var $anchorRef = $(this).attr('href');
			$('html, body').stop().animate({
				scrollTop: $($anchorRef.substring($anchorRef.indexOf("#"), $anchorRef.length)).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		$('.page-scroll a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

	});

})(jQuery);

$( window ).on('load', function() {
  $("#preloader").delay(100).fadeOut("slow");
  $("#load").delay(100).fadeOut("slow");
});
