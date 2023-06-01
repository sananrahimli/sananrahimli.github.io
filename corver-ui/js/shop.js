
  
  function decreaseValue() {
    var input = document.getElementById("inputField");
    var value = parseInt(input.value);
    if (value > 1) {
      input.value = value - 1;
    }
  }

  function increaseValue() {
    var input = document.getElementById("inputField");
    var value = parseInt(input.value);
    input.value = value + 1;
  }


function moveElements() {
    const thisCollection = document.querySelector('.thisCollection');
    const main__price = document.querySelector('.main__price');

    if (window.innerWidth < 998) {
      thisCollection.after(main__price);
    } 
}

// Вызывать функцию при загрузке страницы и при изменении размеров окна
window.addEventListener('load', moveElements);
window.addEventListener('resize', moveElements);