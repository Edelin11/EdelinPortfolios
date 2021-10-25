
var triangulo = document.getElementById("init");
var playa = document.getElementById("init2");


function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("init");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else{
       text.style.display = "none";
    }
} 
function myFunction2() {
    var checkBox = document.getElementById("myCheck2");
    var text2 = document.getElementById("init2");
    if (checkBox.checked == true){
        text2.style.display = "block";
    } else{
       text2.style.display = "none";
    }
} 

const triangle =()=>{
    // fig1 container
    var fig = document.createElement("DIV");
    fig.setAttribute('id', 'container');
    triangulo.appendChild(fig);
    // fig1 tria 1
    var tri1 = document.createElement("DIV");
    tri1.setAttribute('class', 'tri1-1');
    fig.appendChild(tri1);
    // fig2 tria 1
    var tri2 = document.createElement("DIV");
    tri2.setAttribute('class', 'tri1-2');
    fig.appendChild(tri2);
    // fig3 tria 1
    var tri3 = document.createElement("DIV");
    tri3.setAttribute('class', 'tri1-3');
    fig.appendChild(tri3);
    // fig2 tria 1
    var tri4 = document.createElement("DIV");
    tri4.setAttribute('class', 'tri2-1');
    fig.appendChild(tri4);
    // fig2 tria 2
    var tri5 = document.createElement("DIV");
    tri5.setAttribute('class', 'tri2-2');
    fig.appendChild(tri5);
    // fig2 tria 3
    var tri6 = document.createElement("DIV");
    tri6.setAttribute('class', 'tri2-3');
    fig.appendChild(tri6);
    // fig3 tria 1
    var tri7 = document.createElement("DIV");
    tri7.setAttribute('class', 'tri3-1');
    fig.appendChild(tri7);
    // fig3 tria 2
    var tri8 = document.createElement("DIV");
    tri8.setAttribute('class', 'tri3-2');
    fig.appendChild(tri8);
    // fig3 tria 3
    var tri9 = document.createElement("DIV");
    tri9.setAttribute('class', 'tri3-3');
    fig.appendChild(tri9);
}

const beach =()=>{
    // fig2 container
    var fig = document.createElement("DIV");
    fig.setAttribute('id', 'container2');
    playa.appendChild(fig);
    // shadow
    var sha = document.createElement("DIV");
    sha.setAttribute('class', 'shadow');
    fig.appendChild(sha);
     // the ball
     var ball = document.createElement("DIV");
     sha.setAttribute('class', 'ball');
     fig.appendChild(ball);
}
