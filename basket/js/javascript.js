
// Google Maps
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]}
        ;

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}
// Google Maps end

jQuery(document).ready(function( $ ) {
    // subscribe:
    $("#buttonSubscribe").click(function(){
        var vemail = $("#email").val();
        if(vemail=='')
        {
            alert("Please fill out the form");
        }
        else if(vemail==''){alert('Email field is required')}
        else{
            $.get("php/email.php", { email:vemail },
                function(response, status){
                    $("#email").val('');
                    alert(response+"\n\nStatus : " + status);
                });
        }
    });

    // contact
    $("#buttonContact").click(function(){
        var vname = $("#InputName").val();
        var vemail = $("#InputEmail").val();
        var vmessage = $("#InputMessage").val();
        if(vname=='' || vemail=='' || vmessage=='')
        {
            alert("Please fill out the form");
        }
        else{
            $.get("php/contact.php", { name:vname,email:vemail,message:vmessage },
                function(response, status){
                    $("#InputName").val('');
                    $("#InputEmail").val('');
                    $("#InputMessage").val('');
                    alert(response+"\n\nStatus : " + status);
                });
        }
    });


    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({'overflow':'scroll'});

    // counterUp
    $('span').counterUp({
        delay: 10, // the delay time in ms
        time: 1000 // the speed time in ms
    });

    // ScrollReveal
    window.sr = new scrollReveal();

    // cache the window object
    $window = $(window);

    $('section[data-type="background"]').each(function(){
// declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
// HTML5 proves useful for helping with creating JS functions!
// also, negative value because we're scrolling upwards
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

// background position
            var coords = '50% '+ yPos + 'px';

// move the background
            $scroll.css({ backgroundPosition: coords });
        }); // end window scroll
    });  // end section function
});




