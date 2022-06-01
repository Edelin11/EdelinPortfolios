"use strict";

var triangle = document.getElementById('triangulo');
var shape1 = document.getElementById('shape1');
var heart = document.getElementById('corazon');
var shape2 = document.getElementById('shape2');
var star = document.getElementById('estrella');
var shape3 = document.getElementById('shape3');
triangle.addEventListener('click', function () {
  return clicksForward();
});
heart.addEventListener('click', function () {
  return clicksForward2();
});
star.addEventListener('click', function () {
  return clicksForward3();
});

var clicksForward = function clicksForward() {
  if (triangle) {
    shape1.innerHTML = "\n        <div class=\"\" id=\"container\">\n          <div class=\"tri1-1\"></div>\n          <div class=\"tri1-2\"></div>\n          <div class=\"tri1-3\"></div>\n          <div class=\"tri2-1\"></div>\n          <div class=\"tri2-2\"></div>\n          <div class=\"tri2-3\"></div>\n          <div class=\"tri3-1\"></div>\n          <div class=\"tri3-2\"></div>\n          <div class=\"tri3-3\"></div>\n        </div>";
    shape2.innerHTML = "";
    shape3.innerHTML = "";
  }
};

var clicksForward2 = function clicksForward2() {
  if (heart) {
    shape1.innerHTML = "";
    shape3.innerHTML = "";
    shape2.innerHTML = " \n            <div class=\"center-shape\">\n                <div class=\"heart\"><i class=\"fa fa-thin fa-heart w3-xlarge heart-color\"></i></div>\n                <div class=\"heart2\"><i class=\"fa fa-thin fa-heart w3-xlarge heart-color\"></i></div>\n            </div>";
  }
};

var clicksForward3 = function clicksForward3() {
  if (heart) {
    shape1.innerHTML = "";
    shape2.innerHTML = "";
    shape3.innerHTML = " \n            <div class=\"center-shape\">\n                <div class=\"star\"><i class=\"fa fa-thin fa-star w3-xlarge star-color\"></i></div>\n                <div class=\"star2\"><i class=\"fa fa-thin fa-star w3-xlarge star-color\"></i></div>\n            </div>";
  }
};
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
} // Close the dropdown menu if the user clicks outside of it


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};