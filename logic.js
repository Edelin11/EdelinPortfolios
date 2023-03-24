  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }
  
  
  // THIS IS FOR THE IMG SLIDERS
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
  }
  
  // slide for second proyect zodiac signs ********
  
  let slideIndex2 = 1;
  showSlides2(slideIndex2);
  
  // Next/previous controls
  function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
  }
  
  // Thumbnail image controls
  function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
  }
  
  function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    if (n > slides.length) {slideIndex2 = 1} 
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active2", "");
    }
    slides[slideIndex2-1].style.display = "block"; 
    dots[slideIndex2-1].className += " active2";
  }
  
  
  // slide for third proyect zodiac signs ********
  
  let slideIndex3 = 1;
  showSlides3(slideIndex3);
  
  // Next/previous controls
  function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
  }
  
  // Thumbnail image controls
  function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
  }
  
  function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides3");
    let dots = document.getElementsByClassName("dot3");
    if (n > slides.length) {slideIndex3 = 1} 
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active3", "");
    }
    slides[slideIndex3-1].style.display = "block"; 
    dots[slideIndex3-1].className += " active3";
  }


  // slide for third proyect zodiac signs ********
  
  let slideIndex4 = 1;
  showSlides4(slideIndex4);
  
  // Next/previous controls
  function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
  }
  
  // Thumbnail image controls
  function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
  }
  
  function showSlides4(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");
    let dots = document.getElementsByClassName("dot4");
    if (n > slides.length) {slideIndex4 = 1} 
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active4", "");
    }
    slides[slideIndex4-1].style.display = "block"; 
    dots[slideIndex4-1].className += " active4";
  }