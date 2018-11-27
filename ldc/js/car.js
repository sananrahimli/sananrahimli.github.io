jQuery(document).ready(function($) {
	var slideCount = $('.slider ul li').length;
	var slideWidth = $('.slider ul li').width() + 96;
	var slideHeight = $('.slider ul li').height() + 96;
	var sliderUlWidth = slideCount * slideWidth;
	
	$('.slider').css( {width: slideWidth, height: slideHeight });
	
	$('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth});
	
	function moveLeft() {
		$('.slider ul').animate({
				left: + slideWidth
		}, 200, function () {
				$('.slider ul li:last-child').prependTo('.slider ul');
				$('.slider ul').css('left', '');
		});
  };
	
	function moveRight() {
		$('.slider ul').animate({
				left: - slideWidth
		}, 200, function () {
				$('.slider ul li:first-child').appendTo('.slider ul');
				$('.slider ul').css('left', '');
		});
	};
	
	$('.left').click(function () {
		moveLeft();
	});

	$('.right').click(function () {
		moveRight();
	});
	
	setInterval(function () {
		moveRight();
	}, 5000);
});