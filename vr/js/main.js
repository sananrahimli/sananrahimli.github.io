(new WOW).init(),$(window).scroll(function(){$(window).scrollTop()>100?$("section#s2").addClass("nav-fixed"):$("section#s2").removeClass("nav-fixed")}),$(document).ready(function(){$("a#inline").fancybox({hideOnContentClick:!0})}),$(document).ready(function(){return $("a[href*=#s]").bind("click",function(n){var i=$(this);$("html, body").stop().animate({scrollTop:$(i.attr("href")).offset().top-90},2e3),n.preventDefault()}),!1}),$(document).ready(function(){$(".fancybox").fancybox({openEffect:"elastic",closeEffect:"elastic",spinnerTpl:'<div class="fancybox-loading"></div>'})}),jQuery(function(n){if(is_mobile())n(".block2").each(function(){"fixed"==n(this).css("backgroundAttachment")&&n(this).css("backgroundAttachment","scroll")}),n(".cre-animate").css({transform:"none","-webkit-transform":"none","-moz-transform":"none","-ms-transform":"none","-o-transform":"none",transition:"none","-webkit-transition":"none",opacity:1}).removeClass(".cre-animate");else skrollr.init()}),$(document).ready(function(){$(".keys").slick({infinite:!0,slidesToShow:1,slidesToScroll:1}),$(".reviews").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:900,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}}],responsive:[{breakpoint:800,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]}),$(".certification").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,responsive:[{breakpoint:1100,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]})});