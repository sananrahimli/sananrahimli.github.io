
  
  // Слайдер товара

  var swiper = new Swiper(".product__gallery-navigation", {
    spaceBetween: 28,
    slidesPerView: 3,
    direction: "vertical",
    freeMode: true,
    loop: true,
    navigation: {
          nextEl: ".product__gallery-navigation-next",
          prevEl: ".product__gallery-navigation-prev",
        },
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".product__gallery", {
    spaceBetween: 10,
    
    thumbs: {
      swiper: swiper,
    },
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
  
  
  // Слайдер подвале товара рекомендованные
  
  var swiper = new Swiper(".productPageCollectionCatalog", {
    spaceBetween: 28,
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
      navigation: {
          nextEl: ".CollectionSwiper-button-next",
          prevEl: ".CollectionSwiper-button-prev",
        },
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
  
  // Слайдер подвале товара рекомендованные
  
  var swiper = new Swiper(".productPageRecomendCatalog", {
    spaceBetween: 28,
    slidesPerView: 5,
    slidesPerGroup: 1,
    loop: true,
      navigation: {
          nextEl: ".RecomendSwiper-button-next",
          prevEl: ".RecomendSwiper-button-prev",
        },
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


  function moveElements() {
    const galleryPhoto = document.querySelector('.galleryPhoto');
    const productAction = document.querySelector('.productAction');

    if (window.innerWidth < 998) {
        galleryPhoto.after(productAction);
    } 
}

// Вызывать функцию при загрузке страницы и при изменении размеров окна
window.addEventListener('load', moveElements);
window.addEventListener('resize', moveElements);