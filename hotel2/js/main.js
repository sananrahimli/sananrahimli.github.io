  // Календарь
var months=new Array();
months[1]="января";
months[2]="февраля";
months[3]="марта";
months[4]="апреля";
months[5]="мая";
months[6]="июня";
months[7]="июля";
months[8]="августа";
months[9]="сентября";
months[10]="октября";
months[11]="ноября";
months[12]="декабря";

    $('.from-date').each(function() {
      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      $(this).children('.date').text(day);
      $(this).children('.month').text(months[month]);
      $('.from-field').val(day + ' ' + months[month])
    });
    
    $('.dest-date').each(function() {
      var date = new Date();
      date.setDate(date.getDate() + 1);
      var day = date.getDate();
      var month = date.getMonth() + 1;
      
      $(this).children('.date').text(day);
      $(this).children('.month').text(months[month]);
      $('.dest-field').val(day + ' ' + months[month])
    });

    $('.from-input').datetimepicker({
      lang: 'ru',
      timepicker: false,
      format: 'd m',
      closeOnDateSelect:true,
      minDate: 0,
      scrollMonth: false,
      onSelectDate:function(ct,$i){
        var day = ct.dateFormat('d');
        var month = ct.dateFormat('m');
        $('.from-date .date').text(day);
        if (month < 10) {
          month = month % 10;
        }
        $('.from-date .month').text(months[month]);
        $('.from-field').val(day + ' ' + months[month])
      }
    });
    $('.dest-input').datetimepicker({
      lang: 'ru',
      timepicker: false,
      format: 'd m',
      closeOnDateSelect:true,
      minDate: 0,
      scrollMonth: false,
      onSelectDate:function(ct,$i){
        var day = ct.dateFormat('d');
        var month = ct.dateFormat('m');
        $('.dest-date .date').text(day);
        if (month < 10) {
          month = month % 10;
        }
        $('.dest-date .month').text(months[month]);
        $('.dest-field').val(day + ' ' + months[month])
      }
    });;
      
$(document).ready(function(){
 $('.single-item').slick();
});

$('.carousel-items').slick({
centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
	$(document).ready(function() {
  $("a.fancybox").fancybox()
});