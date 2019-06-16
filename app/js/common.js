
		var nav = document.querySelector('.nav');
		var navToggle = document.querySelector('.button__toggle');
		nav.classList.remove('nav--nojs');
		navToggle.addEventListener('click', function() {
			if (nav.classList.contains('nav--closed')) {
				nav.classList.remove('nav--closed');
				nav.classList.add('nav--opened')
			} else {
				nav.classList.add('nav--closed');
				nav.classList.remove('nav--opened')
			}
		})

		$(document).ready(function () {
			var carousel = $(".carousel").waterwheelCarousel({
			  flankingItems: 2,
			  horizonOffset:  0,
			  sizeMultiplier:             0.6
			});
		  
			$('#prev').bind('click', function () {
			  carousel.prev();
			  return false
			});
		  
			$('#next').bind('click', function () {
			  carousel.next();
			  return false;
			});
		  });
		  $(window).resize(function () {
			var widthWind = $(this).width();
		
			if (widthWind <= 360) {
				carousel = $(".carousel").waterwheelCarousel({
					flankingItems: 0
				  });
			}});