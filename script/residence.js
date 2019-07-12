//DATA CONTROLLER===get some data or calculate
var dataController =  (function() {

 


})();



//UI CONTROLLER===write methods here
var UIController = (function() {

  var DOMstrings = {
   currentImage: ".gallery-residence__current-image",
   thumbs: ".gallery-residence__thumb-box img"
  }

  var opacity = 0.5;
  var thumbnails = document.querySelectorAll(DOMstrings.thumbs);
  var current = document.querySelector(DOMstrings.currentImage);

  return {
    thumbnail: document.querySelectorAll(DOMstrings.thumbs),
   

    firstThumbOpacity: function() {
      thumbnails[0].style.opacity = opacity;
    },

    imageActivate: function(e) {
      thumbnails.forEach(function(img) {
        img.style.opacity = 1;
      })
      current.src = e.target.src;
      // e.target.classList.add("fade-out");
      e.target.style.opacity = opacity;
    }
  };
  
})();



//CONTROLLER===call methods here
var Controller = ( function( dataCtrl, UICtrl ) { 

  var firstState = function() {//first state of the program
    UICtrl.firstThumbOpacity();
  };

  UICtrl.thumbnail.forEach(function(img){
    img.addEventListener('click', UICtrl.imageActivate);
  });

  return {
    init: function() {
      firstState();
    }
  }
})(dataController, UIController);

Controller.init();
