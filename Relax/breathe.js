let triangle = document.getElementById('triangulo');
let shape1 = document.getElementById('shape1');
let heart = document.getElementById('corazon');
let shape2 = document.getElementById('shape2');
let star = document.getElementById('estrella');
let shape3 = document.getElementById('shape3');

triangle.addEventListener('click', ()=>clicksForward());
heart.addEventListener('click', ()=>clicksForward2());
star.addEventListener('click', ()=>clicksForward3());


const clicksForward = () => {
    if(triangle){
        shape1.innerHTML = `
        <div class="" id="container">
          <div class="tri1-1"></div>
          <div class="tri1-2"></div>
          <div class="tri1-3"></div>
          <div class="tri2-1"></div>
          <div class="tri2-2"></div>
          <div class="tri2-3"></div>
          <div class="tri3-1"></div>
          <div class="tri3-2"></div>
          <div class="tri3-3"></div>
        </div>`;
      shape2.innerHTML = ``;
      shape3.innerHTML = ``;
    }
}
const clicksForward2 = () => {
    if(heart){
        shape1.innerHTML = ``;
        shape3.innerHTML = ``;
        shape2.innerHTML = ` 
            <div class="center-shape">
                <div class="heart"><i class="fa fa-thin fa-heart w3-xlarge heart-color"></i></div>
                <div class="heart2"><i class="fa fa-thin fa-heart w3-xlarge heart-color"></i></div>
            </div>`;
    } 
}
const clicksForward3 = () => {
    if(heart){
        shape1.innerHTML = ``;
        shape2.innerHTML = ``;
        shape3.innerHTML = ` 
            <div class="center-shape">
                <div class="star"><i class="fa fa-thin fa-star w3-xlarge star-color"></i></div>
                <div class="star2"><i class="fa fa-thin fa-star w3-xlarge star-color"></i></div>
            </div>`;
    } 
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
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
  }