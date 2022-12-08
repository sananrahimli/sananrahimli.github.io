$('.open-popup-photo').magnificPopup({
    items: [
      {
        src: '../images/gallery/gallery1.jpeg'
      },
      {
        src: '../images/gallery/gallery2.jpeg'
      },
      {
        src: '../images/gallery/gallery3.jpeg'
      },
      {
        src: '../images/gallery/gallery4.jpeg'
      },
      {
        src: '../images/gallery/gallery5.jpeg'
      },
      {
        src: '../images/gallery/gallery6.jpeg'
      },
      {
        src: '../images/gallery/gallery7.jpeg'
      },
      {
        src: '../images/gallery/gallery8.jpeg'
      }
    ],
    callbacks: {
        open: function(item) {
            setInterval(function() {
                $.magnificPopup.instance.next();
           }, 6000);
        }
        
      },
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});

$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});