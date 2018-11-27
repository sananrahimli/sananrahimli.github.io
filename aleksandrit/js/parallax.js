$('.sld-1').slick({
  vertical: true,
  dots: true,
  dotsClass: true,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 2000
});
 $(document).ready(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
window.onload= function() {
    document.getElementById('toggler').onclick = function() {
        openbox('box', this);
        return false;
    };
};
function openbox(id, toggler) {
    var div = document.getElementById(id);
    if(div.style.display == 'block') {
        div.style.display = 'none';
        toggler.innerHTML = '<div class="open-btn-menu">Меню</div>';
    }
    else {
        div.style.display = 'block';
        toggler.innerHTML = '<div class="open-btn-menu">Меню</div>';
    }
}