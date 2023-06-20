document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button");
    var winnerIndex = Math.floor(Math.random() * buttons.length);
    
    buttons.forEach(function(button, index) {
      button.addEventListener("click", function() {
        if (index === winnerIndex) {
          alert("Buton câștigător!");
        } else {
          alert("Buton necâștigător!");
        }
      });
    });
  });