function vallenato() {
	// Add "inactive" class to all headers.
	$('.vallenato-header').toggleClass('vallenato-inactive');

	// Add "closed" class to all content divs.
	$('.vallenato-content').toggleClass('vallenato-closed');


	// The Accordion Effect
	$('.vallenato-header').click(function () {
	    if($(this).is('.vallenato-inactive')) {
	        $('.vallenato-active').toggleClass('vallenato-active vallenato-inactive').next().slideToggle().toggleClass('vallenato-open');
	        $(this).toggleClass('vallenato-active vallenato-inactive');
	        $(this).next().slideToggle().toggleClass('vallenato-open');
	    }

	    else {
	        $(this).toggleClass('vallenato-active vallenato-inactive');
	        $(this).next().slideToggle().toggleClass('vallenato-open');
	    }
	});
}