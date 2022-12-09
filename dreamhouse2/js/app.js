$('.open-popup-photo').magnificPopup({
    items: [
      {
        src: '../images/gallery/gallery1.jpg'
      },
      {
        src: '../images/gallery/gallery2.jpg'
      },
      {
        src: '../images/gallery/gallery3.jpg'
      },
      {
        src: '../images/gallery/gallery4.jpg'
      },
      {
        src: '../images/gallery/gallery5.jpg'
      },
      {
        src: '../images/gallery/gallery6.jpg'
      },
      {
        src: '../images/gallery/gallery7.jpg'
      },
      {
        src: '../images/gallery/gallery8.jpg'
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