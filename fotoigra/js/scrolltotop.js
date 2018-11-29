var element = document.getElementById("scrolltotop");
$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 1000) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });
});
