$('.open-popup-photo').magnificPopup({
    items: [
      {
        src: './images/gallery/gallery1.webp'
      },
      {
        src: './images/gallery/gallery2.webp'
      },
      {
        src: './images/gallery/gallery3.webp'
      },
      {
        src: './images/gallery/gallery4.webp'
      },
      {
        src: './images/gallery/gallery5.webp'
      },
      {
        src: './images/gallery/gallery6.webp'
      },
      {
        src: './images/gallery/gallery7.webp'
      },
      {
        src: './images/gallery/gallery8.webp'
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


function calcDays() {
  let inputGelish = document.querySelector('#gelishtarixi').value
  let inputGedish = document.querySelector('#gedishtarixi').value
  let gunSayi = document.querySelector('label.day > span > i')

  gunSayi.innerHTML = inputGedish - inputGelish

}
// parseInt(inputGedish) - parseInt(inputGedish)