$( document ).ready(function() {

	if ($('#mobile-visible').is(':visible') || $('#sm-visible').is(':visible')) {
		$( "#menu-items" ).hide();
	}
	else {
		$( "#menu-items" ).show();
	}

	$( "#menu-button" ).click(function() {
		$( "#menu-items" ).slideToggle();
	});

	$( window ).resize(function() {
		if ($('#mobile-visible').is(':visible') || $('#sm-visible').is(':visible')) {
			$( "#menu-items" ).hide();
		}
		else {
			$( "#menu-items" ).show();
		}
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					vertical: false,
					verticalSwiping: false,
				}
			},
			],
	});
		

});