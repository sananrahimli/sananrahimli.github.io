function openbox(a){display=document.getElementById(a).style.display,"none"==display?document.getElementById(a).style.display="block":document.getElementById(a).style.display="none"}$(document).ready(function(){$(".single-item").slick({autoplay:!0,autoplaySpeed:2e3})}),jQuery(function(a){a(window).scroll(function(){a(this).scrollTop()>140?a("#menu").addClass("fixed-m"):a(this).scrollTop()<140&&a("#menu").removeClass("fixed-m")})}),$(document).ready(function(){$("#btn_submit").click(function(){var a=$("#user_name").val(),b=$("#user_phone").val(),c=$("#text_comment").val(),d=$("#text_area").val();$.ajax({url:"action.php",type:"post",dataType:"json",data:{user_name:a,user_phone:b,text_comment:c,text_area:d},success:function(a){$(".messages").html(a.result)}})})});