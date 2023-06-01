

// mainSlider Carousel
var swiper = new Swiper(".homeSlider", {
    pagination: {
      el: ".swiper-pagination-home",
      clickable: true,
    },
  });


// Хит продаж карусель

var swiper = new Swiper(".hitsSwiper", {
    spaceBetween: 32,
    slidesPerView: 5,
    slidesPerGroup: 5,
    loop: true,
    pagination: {
      el: ".swiper-pagination-hits",
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      // when window width is >= 480px
      568: {
        slidesPerView: 3,
        spaceBetween: 32,
        slidesPerGroup: 3,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 5,
        spaceBetween: 32
      },
    }
  });

//  Посты карусель

var swiper = new Swiper(".postsSliderSwiper", {
    spaceBetween: 32,
    slidesPerView: 4,
    loop: false,    
    navigation: {
        nextEl: ".PostsSwiper-button-next",
        prevEl: ".PostsSwiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 3,
          spaceBetween: 35
        },
        // when window width is >= 640px
        998: {
          slidesPerView: 4,
          spaceBetween: 32
        },
      }
  }); 


// Товары из каталога для реализации идеи карусель

var swiper = new Swiper(".goodsCatalog", {
    spaceBetween: 48,
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 35
      },
      998: {
        slidesPerView: 5,
        spaceBetween: 28
      },
    }
  });
  