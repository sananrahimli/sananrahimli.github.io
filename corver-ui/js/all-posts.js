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
  