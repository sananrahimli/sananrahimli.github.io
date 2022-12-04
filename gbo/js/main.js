 var swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      lazy: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

    });

function formCalcDataOneR(val) {
          document.getElementById('day_range').value=val; 
}

function formCalcDataTwoR(val) {
          document.getElementById('diesel_cons').value=val; 
}

function formCalcDataThreeR(val) {
          document.getElementById('diesel_price').value=val; 
}

function formCalcDataFourR(val) {
          document.getElementById('cng_price').value=val; 
}

$("#aerning__header-select").click(function () {
     $(this).toggleClass("show");
   });


$(".click-gallery").click(function () {
     $(this).toggleClass("hidden");
     $(".gallery-open").toggleClass("show");
   });

$(".btn-menu-open").click(function () {
     $(this).toggleClass("transform");
     $(".menu-right-big").toggleClass("show");
});

  $(function(){
      $("h3.title").typed({
        strings: ["Гарантируем окупаемость до 6 месяцев по договору", "Скидка на установку ГБО 50% на третий автомобиль", "В подарок пакет документов для оформления в ГИБДД", "Установка газобаллонного оборудования на грузовые авто"],
        typeSpeed: 22 
      });
  });


  // Калькулятор

window.onload = function() {         
        calculate_mortgage();
}

function select_vehicle() {
       var form = document.mortgage_calc_form;
       var diesel_cons_arr = [10,15,20,30,30,35]; 
       var diesel_day_range_arr = [200,500,300,600,600,800];  

       for (var i=0; i < form.vehicle_type.length; i++) {
            if (form.vehicle_type[i].selected || form.vehicle_type[i].checked) {
               form.diesel_cons.value = diesel_cons_arr[i];                     
               form.day_range.value = diesel_day_range_arr[i];                     
               }
       }
       calculate_mortgage();
}

function change_cons() {
       //if (isVehicleSelected == true) isVehicleSelected = false;
       calculate_mortgage();
}

function select_replacement() {
  var form = document.mortgage_calc_form;
        var replac = form.replacement_percent.value;
        var replac2 = 100 - replac;
        var props = replac + "/" + replac2;
        document.getElementById("replacement_span").innerHTML=props;
      calculate_mortgage();        
}

function savecng() {
  var form = document.mortgage_calc_form;
        var cngprice = form.cng_price.value;
//var rounded = Math.round(number * 10) / 10
if (form.save20.checked) form.cng_price.value = eval ((cngprice /100) * 80);
if (!form.save20.checked) form.cng_price.value = eval ((cngprice /80) * 100) ;
//console.log(form.cng_price.value);
      calculate_mortgage();

}
function calculate_mortgage() {
  var form = document.mortgage_calc_form;


        form.cng_volume.value = form.vehicle_type.value;

        var replac = form.replacement_percent.value;

        var cng_rate = replac / 100; 
        var diesel_rate = 1.0 - cng_rate;

//alert(cng_rate + "/" + diesel_rate);
        
        form.dieselonly_month_cons.value = Math.trunc(form.day_range.value / form.diesel_cons.value);
        form.diesel50_month_cons.value = form.dieselonly_month_cons.value * diesel_rate;
        form.cng50_month_cons.value = Math.trunc((form.dieselonly_month_cons.value / 100) * 50);

        form.diesel_cost.value = form.dieselonly_month_cons.value * form.diesel_price.value;
        form.disel__num_summ.value = form.dieselonly_month_cons.value * form.diesel_price.value;
        form.gasdiesel_cost.value = eval(form.diesel50_month_cons.value * form.diesel_price.value) + eval(form.cng50_month_cons.value * form.cng_price.value);
        
        form.gas__num.value = eval(form.diesel50_month_cons.value * form.diesel_price.value) + eval(form.cng50_month_cons.value * form.cng_price.value);
        
        penalty1 = eval(form.cng50_month_cons.value - form.cng_volume.value);
        if (penalty1 < 0) form.penalty.value = eval(Math.abs(penalty1) * 7); else form.penalty.value = 0;

        var num = Math.round(eval(form.diesel_cost.value - form.gasdiesel_cost.value)); 
        var result = num.toLocaleString();
        form.savings.value = result;
        var num1 = num * 12;
        result = num1.toLocaleString();
        form.savings1year.value = result;
        var num2 = num * 36;
        result = num2.toLocaleString();
        form.savings3years.value = result;
        
}

// Generate PDF


var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {   
    doc.fromHTML($('#mortgage_calc_form').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
});


