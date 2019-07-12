//DATA CONTROLLER===get some data or calculate
var dataController =  (function() {

 


})();



//UI CONTROLLER===write methods here
var UIController = (function() {

  var slideIndex = 1;
  //private central string storage
  var DOMstrings = {
    forSaleLink: ".featured-properties__sale",
    forRentLink: ".featured-properties__rent",
    forSaleContent: ".for-sale",
    forRentContent: ".for-rent",
    galleryCurrent: ".gallery-residence__current-image"
  };

  return {

    homeCarousel: function(n){
      var slide = document.getElementsByClassName("header__hero");
    
      if (n > slide.length) { slideIndex = 1};
      if (n < 1) { slideIndex = slide.length};
      for (var i = 0; i < slide.length; i++) {
        slide[i].classList.add("fade-out-2");
      };
    
      slide[slideIndex-1].classList.remove("fade-out-2");
      slide[slideIndex-1].classList.add("fade-in");
    },

    autoSlide: function() {
      var i;
      var slide = document.getElementsByClassName("header__hero");
      for (var i = 0; i < slide.length; i++) {
        slide[i].classList.add("fade-out-2");
      };
      if (slideIndex > slide.length){slideIndex = 1}
      slide[slideIndex-1].classList.remove("fade-out-2");
      slide[slideIndex-1].classList.add("fade-in");
      slideIndex++;

      setTimeout(UIController.autoSlide,8000);
    },

    plusIndex: function(n) {
      UIController.homeCarousel(slideIndex = slideIndex + n);
    },
   
  
    clickSale: function() {
      return {
        linkRent: document.querySelector(DOMstrings.forRentLink).classList.add("secondary-color"),
        linkSale: document.querySelector(DOMstrings.forSaleLink).classList.remove("secondary-color"),
        displayRent: document.querySelector(DOMstrings.forRentContent).classList.add("fade-out"),
        removeFade: document.querySelector(DOMstrings.forSaleContent).classList.remove("fade-out"),
        displaySale: document.querySelector(DOMstrings.forSaleContent).classList.add("fade-in")
      }
    },

    clickRent: function() {
      return {
        linkRent: document.querySelector(DOMstrings.forRentLink).classList.remove("secondary-color"),
        linkSale: document.querySelector(DOMstrings.forSaleLink).classList.add("secondary-color"),
        displayRent: document.querySelector(DOMstrings.forRentContent).classList.add("fade-in"),
        removeFade: document.querySelector(DOMstrings.forRentContent).classList.remove("fade-out"),
        displaySale: document.querySelector(DOMstrings.forSaleContent).classList.add("fade-out")
      }
    }   
  }

})();



//CONTROLLER===call methods here
var Controller = ( function( dataCtrl, UICtrl ) { 
  
  var firstState = function() {//first state of the program
    UICtrl.homeCarousel();
    UICtrl.autoSlide();
    document.querySelector(".for-rent").classList.add("fade-out");
    document.querySelector(".featured-properties__rent").classList.add("secondary-color");
  }; 

  var next = function() {
    UICtrl.plusIndex(+1)
  };
  var prev = function() {
    UICtrl.plusIndex(-1)
  };
  //this will change the type of property from sale to rent and vice versa
  var ctrlPropertySale = function() {
     UICtrl.clickSale();
  };
  var ctrlPropertyRent = function() {
    UICtrl.clickRent();
  };

  //EVENT HANDLERS
  document.querySelector(".header__prev").addEventListener("click", prev);
  document.querySelector(".header__next").addEventListener("click", next);
  document.querySelector(".featured-properties__sale").addEventListener("click", ctrlPropertySale);
  document.querySelector(".featured-properties__rent").addEventListener("click", ctrlPropertyRent); 

  return {
    init: function() {
      firstState();
    }
  }

})(dataController, UIController);


Controller.init();











