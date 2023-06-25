function openTab(event, tabName) {
    var tabContent = document.getElementsByClassName("mainContent");
    for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("active", "slide-in");
      tabContent[i].classList.add("slide-out");
    }
  
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  
    var tab = document.getElementById(tabName);
    tab.classList.remove("slide-out");
    tab.classList.add("active", "slide-in");
    event.currentTarget.classList.add("active");

  }
  
  // По умолчанию открыть первую вкладку
  document.getElementById("contentMain").classList.add("active");
  document.querySelector(".menu button").classList.add("active");
  

  var elements = document.querySelectorAll('[data-name]');

// Перебираем элементы и добавляем обработчик события клика
elements.forEach(function(element) {
  element.addEventListener('click', function() {
    // Получаем значение атрибута data-name
    var name = this.getAttribute('data-name');
    
    // Находим элемент с id="nemePage"
    var titleElement = document.getElementById('namePage');
    
    // Меняем текст элемента на значение атрибута data-name
    titleElement.innerText = name;
  });
});






function updateDateTime() {
    var dateElement = document.getElementById('date');
    var timeElement = document.getElementById('time');
    
    // Получаем текущую дату и время
    var currentDate = new Date();
    
    // Форматируем дату и время в нужном формате
    var formattedDate = currentDate.toLocaleDateString();
    var formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Выводим отформатированную дату и время
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
  }
  
  // Обновляем дату и время каждую секунду
  setInterval(updateDateTime, 1000);


  
const fileInputs = document.querySelectorAll('.file-input');

fileInputs.forEach((fileInput) => {
  const fileInputLabel = fileInput.parentElement;
  const selectedFileName = fileInputLabel.querySelector('.selected-file-name');

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      selectedFileName.textContent = fileInput.files[0].name;
      fileInputLabel.classList.add("active");
    } else {
      selectedFileName.textContent = 'Нет выбранного файла';
      fileInputLabel.classList.remove("active");
    }
  });
});



$(document).ready(function() {
	$("textarea").emojioneArea({
  	pickerPosition: "bottom",
  	filtersPosition: "bottom",
    tonesStyle: "checkbox"
  });
});



var accordionItems = document.getElementsByClassName('accordion-item');

for (var i = 0; i < accordionItems.length; i++) {
  var header = accordionItems[i].querySelector('.accordion-header');
  header.addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('active');
    } else {
      content.style.maxHeight = content.scrollHeight + 50 + 'px';
      content.classList.add('active');

    }
  });
}
