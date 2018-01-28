(function ($) {
    $(document).ready(function() {
        $('#products-slider').owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: true,
            navText: [
                "<i class='fa fa-2x fa-angle-left'></i>",
                "<i class='fa fa-2x fa-angle-right'></i>"
            ],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true,
                    loop: true
                }
            }
        });

    });

	new WOW().init();

	jQuery(window).load(function() {
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});


	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
            resizeLogo();
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
            resizeLogo();
		}
	});


  $(window).resize(function() {
      resizeLogo();
  });

  function resizeLogo() {
      if(($(window).width() < 750 && $(".navbar").offset().top > 50)
    || ($(window).width() > 750 && $(".navbar").offset().top > 50)
          || ($(window).width() < 750 && $(".navbar").offset().top < 50)){
          $(".navbar-brand > img").remove();
          $(".navbar-brand").prepend('<img class="aloe-logo-min" src="assets/img/icons/logoAloe-min-white.png">');
      } else {
          $(".navbar-brand > img").remove();
          $(".navbar-brand").prepend('<img class="aloe-logo" src="assets/img/icons/logoAloe.png">');
      }
  }

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {

		$('.navbar-nav li a').on('click', function(event) {

			if( $(this).is('a:not([href^="#"])') || $(this).attr("href") == '#' ) {
	     return;
	    }
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
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
