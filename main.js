document.addEventListener("DOMContentLoaded", function() {
  var box = document.querySelectorAll("#box");
  var card = document.querySelectorAll(".box2");

  box.forEach(function(box) {
    box.addEventListener("click", function(event) {
      event.preventDefault();
      box.classList.toggle("clicked");
      
      setTimeout(function() {
        box.classList.toggle('clicked');
        window.open(box.href,'_Blank')
      }, 1000);
    }); 
  })
  
  card.forEach(function(card) {
    card.addEventListener('click',function (event) {
      event.preventDefault();
      card.classList.toggle('clicked');
      
      setTimeout(function () {
        card.classList.toggle('clicked');
        window.open(card.href,'_Blank')
      },1000)
    })
  })
  
});

document.addEventListener('DOMContentLoaded', function() {
  var box = document.querySelectorAll('.box');  var box3 = document.querySelectorAll('.box3');

  box.forEach(function (box) {
      box.classList.add('masuk');
  });
  box3.forEach(function (box3) {
      box3.classList.add('masuk2');
  });
});