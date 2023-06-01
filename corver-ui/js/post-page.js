
// Слайдер картинок поста

var swiper = new Swiper(".postSliders", {
    slidesPerView: 4,
    spaceBetween: 39,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-nextPostGal",
        prevEl: ".swiper-button-prevPostGal",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        568: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 39
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