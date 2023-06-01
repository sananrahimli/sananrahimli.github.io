
 // Global переключатель позвонить или написать
 function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

// Показываем первый контент по умолчанию
document.getElementById("tab1").style.display = "block";
document.getElementsByClassName("tablinks")[0].className += " active";
// END Global переключатель позвонить или написать


// Код открывающегося поисковика

const searchName = document.getElementById("searchName");
const formSearch = document.getElementById("formSearch");
const closeActiveSearch = document.getElementById("closeActiveSearch");

searchName.addEventListener("click", (event) => {
    event.preventDefault();
    formSearch.classList.add("active");
})
closeActiveSearch.addEventListener("click", (event) => {
    event.preventDefault();
    formSearch.classList.remove("active");
})


// Код открытия большего меню

const bigMenuButton = document.getElementById('bigMenu-btn_click');
const headerBigMenu = document.getElementById('header_bigMenu');


bigMenuButton.addEventListener("click", (event) => {
    event.preventDefault();
    bigMenuButton.classList.toggle("active")
    headerBigMenu.classList.toggle("active");
    document.body.classList.toggle('menuActive');
});




// Код плавной покрутки страницы 

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}







// Модальные окна

        const openModalLinks = document.querySelectorAll('.openModalLink');
        const closeModalBtns = document.querySelectorAll('#closeModalBtn');
        const overlayCloseModal = document.getElementById('overlayCloseModal');
        const allEffect = document.getElementById('allEffect');

        openModalLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                overlay.classList.add('active');
                modal.classList.add('active');
                allEffect.classList.add('active');
                document.body.style.overflow = "hidden"
            });
        });

        closeModalBtns.forEach(function(closeModalBtn) {
          closeModalBtn.addEventListener('click', function () {
            overlay.classList.remove('active');
            allEffect.classList.remove('active');
            const activeModals = document.querySelectorAll('.modal.active');
            document.body.style.overflow = "auto";
            activeModals.forEach(function (modal) {
              modal.classList.remove('active');
            });
          });
        });


        overlayCloseModal.addEventListener('click', function () {
            overlay.classList.remove('active');
            allEffect.classList.remove('active');
            const activeModals = document.querySelectorAll('.modal.active');
            document.body.style.overflow = "auto";
            activeModals.forEach(function (modal) {
                modal.classList.remove('active');
            });
        });









// Получаем элементы <li> и <div.content>
const liElements = document.querySelectorAll('ul.topHeader__nav > li');
const divContent = document.querySelector('ul.moreLinkTop__menu');

// Проверяем ширину экрана
if (window.innerWidth < 1440) {
  // Получаем последние три элемента <li>
  const lastThreeLi = Array.from(liElements).slice(-3);

  // Добавляем последние три элемента <li> в <div.content>
  lastThreeLi.forEach(li => {
    divContent.appendChild(li);
  });

  const toggleButtons = document.querySelectorAll('.moreLinkTop__click');
  const secTopHeader = document.querySelector('#topHeader');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const content = button.nextElementSibling;
      content.classList.toggle('active');
      button.classList.toggle('open');
      secTopHeader.classList.toggle('zIndex_plus');
    });
  });
}

// Проверяем ширину экрана
if (window.innerWidth < 998) {
  // Получаем последние три элемента <li>
  const lastThreeLi = Array.from(liElements).slice(-6);

  // Добавляем последние три элемента <li> в <div.content>
  lastThreeLi.forEach(li => {
    divContent.appendChild(li);
  });

  const toggleButtons = document.querySelectorAll('.moreLinkTop__click');
  const secTopHeader = document.querySelector('#topHeader');
  

}

document.addEventListener('DOMContentLoaded', function() {
  const typeButtons = document.getElementsByClassName('typeButton');
  const contentTypeButtons = document.getElementsByClassName('contentTypeButton');
  const contents = document.getElementsByClassName('content');
  const contentTypes = document.getElementsByClassName('contentTypes');

  // Функция для удаления класса 'active' у всех элементов
  function deactivateAll(elements) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('active');
    }
  }

  // Обработчики событий для кнопок в buttonTypes
  for (let i = 0; i < typeButtons.length; i++) {
    typeButtons[i].addEventListener('click', function() {
      const target = this.getAttribute('data-target');

      deactivateAll(typeButtons);
      this.classList.add('active');

      // Показать соответствующий список кнопок
      deactivateAll(contentTypes);
      document.getElementById(target + 'Content').classList.add('active');
    });
  }

  // Обработчики событий для кнопок в списке contentTypes
  for (let i = 0; i < contentTypeButtons.length; i++) {
    contentTypeButtons[i].addEventListener('click', function() {
      const targetContent = this.getAttribute('data-content');

      deactivateAll(contentTypeButtons);
      this.classList.add('active');

      // Показать соответствующий контент
      deactivateAll(contents);
      document.getElementById(targetContent).classList.add('active');
    });
  }
});



