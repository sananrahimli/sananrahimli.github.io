 // Слайдер картинок поста

 var swiper = new Swiper(".catalogSliderTop", {
    slidesPerView: 8,
    spaceBetween: 47,
    loop: true,
    navigation: {
        nextEl: ".CatalogSwiper-button-next",
        prevEl: ".CatalogSwiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 5,
          spaceBetween: 35
        },
        // when window width is >= 640px
        998: {
          slidesPerView: 6,
          spaceBetween: 47
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 8,
          spaceBetween: 47
        }
      }
  });



// Кнопка фильтра

const dropFilter_btn = document.getElementById('dropFilter_btn');
const dropFilterList = document.getElementById('dropFilterList');


dropFilter_btn.addEventListener("click", (event) => {
    event.preventDefault();
    dropFilterList.classList.toggle("active");
    dropFilter_btn.classList.toggle("active");
});


// Код выпадающих фильтров
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    const content = button.nextElementSibling;
    content.classList.toggle('active');
    button.classList.toggle('open')
  });
});

  
// Ползунок цен



var slider = document.getElementById('slider__priceSR');
var minPriceInput = document.getElementById('min-price');
var maxPriceInput = document.getElementById('max-price');

noUiSlider.create(slider, {
  start: [23130, 123130],
  connect: true,
  range: {
    'min': 0,
    'max': 500000
  },
  format: {
    to: function (value) {
      return Math.round(value); // Округляем до целого числа
    },
    from: function (value) {
      return parseFloat(value); // Преобразуем обратно в число с плавающей запятой, если необходимо
    }
  }
});

slider.noUiSlider.on('update', function (values, handle) {
  var minPrice = parseInt(values[0]); // Используем parseInt для получения целого числа
  var maxPrice = parseInt(values[1]);

  minPriceInput.value = minPrice;
  maxPriceInput.value = maxPrice;
});

slider.noUiSlider.on('change', function (values, handle) {
  var minPrice = parseInt(values[0]);
  var maxPrice = parseInt(values[1]);

  minPriceInput.value = minPrice;
  maxPriceInput.value = maxPrice;
});

minPriceInput.addEventListener('change', function () {
  slider.noUiSlider.set([parseInt(this.value), null]);
});

maxPriceInput.addEventListener('change', function () {
  slider.noUiSlider.set([null, parseInt(this.value)]);
});