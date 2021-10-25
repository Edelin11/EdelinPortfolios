// getting the element by id
var country = document.getElementById("country");
var city = document.getElementById("cities");
var amount = document.getElementById("amount");
var btn = document.getElementById("ok");// to see fee
var next = document.getElementById("next");
var btn3 = document.getElementById("ok3");
var onFee = document.getElementById("fee");
var forTotal = document.getElementById("total");
var sent = document.getElementById("sent");
var receipt = document.getElementById("recibo");

var receipt2 = document.getElementById("receipt");

btn.addEventListener('click', ()=>dominican());
btn.addEventListener('click', ()=>colombia());
btn.addEventListener('click', ()=>united());
btn.addEventListener('click', ()=>mexico());

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


country.onclick = function(){
    if(country.value === 'dr'){
        city.innerHTML = `
        <select name="city" id="city"> City 
        <option value="dr">  </option>
        <option value="dr">Santo Domingo</option>
        <option value="dr">Santiago</option>
        <option value="dr">Monte Plata</option>
        </select>
        `;
    }   
    else if(country.value === 'usa'){
        city.innerHTML = `
        <select name="city" id="city"> City 
        <option value="usa">  </option>
        <option value="usa">New York</option>
        <option value="usa">Boston</option>
        <option value="usa">Providence</option>
        </select>
        `;}
}


/* fees for sending to different countries */
var UsaFee = 4.50;
var UsaFee2 = 9;
var drFee = (2.75 / 100); // 2.75 for each 100
var mxFee = 4.99;
var colFee = (2 / 100);
var spFee = 8;

/* currency of different countries */
var UsaCurrency = 1; // we multiply everything to us currency because we are sending from USA. 
var DRcurrency = 56;
var mxCurrency = 19;
var colCurrency = 3800;
var spainCurrency = 2;
// por cada 25 dolar aumenta 0.689 , 0.689 dividido en dos = 0.3445 ,
// por cada 50, osea 0.689 + 0.689 = 1.378
var y = (2.75 / 100)* 400; // the power of googoling the correct way. 
console.log(y); 


const dominican =()=>{  
    var cantidad = amount.value;
    var toSend = parseInt(cantidad); // make the amount you input an integer
    var total = toSend * DRcurrency;
    console.log("In DR is "+total); // total in DR
    if(country.value == "dr"){
        if(toSend <= 100){
            var nowPay = (toSend + 2.75);
            onFee.innerHTML = `<p>Fee: 2.75</p>`;
            console.log(nowPay);
            forTotal.innerHTML = `<p>You pay ${nowPay}</p>`;
        }else{
        var u = (drFee) * toSend;
        var youPay = (toSend + u);
        var finalP = youPay.toFixed(2);
        onFee.innerHTML = `<p>Fee: ${u.toFixed(2)}</p>`;
        console.log(finalP);
        forTotal.innerHTML = `<p>You pay ${finalP}</p>`;
        }
    } 
    window.onclick = function(event){
        if (event.target == modal) {
            modal.style.display = "none";
        }}
    span.onclick = function(){
        modal.style.display = "none"; }

    sent.onclick = function(){
        modal.style.display = "block";
        console.log("no errors");       
    }
    var getName = document.getElementById("name").value;
    document.getElementById("demo").innerHTML = "Your money transfer to " + getName + 
    " is completed. They will receive "+ cantidad + " dolares." ;
}

const colombia =()=>{
    var cantidad = amount.value;
    var forInt = parseInt(cantidad); // make the amount you input an integer
    var total = forInt * colCurrency;
    console.log("In colombia is "+total); // total in DR
    if(country.value == "col"){
        if(forInt <= 100){
            var nowPay = (forInt + 2);
            onFee.innerHTML = `<p>Fee: 2</p>`;
            console.log(nowPay);
            forTotal.innerHTML = `<p>You pay ${nowPay}</p>`;
        }else{
        var u = (colFee) * forInt;
        var youPay = (forInt + u);
        var finalP = youPay.toFixed(2);
        onFee.innerHTML = `<p>Fee: ${u.toFixed(2)}</p>`;
        console.log(finalP);
        forTotal.innerHTML = `<p>You pay ${finalP}</p>`;
        }
        sent.onclick = function(){
            console.log("no errors");
            receipt.innerHTML = `<p>your order was sent. They will receive ${cantidad}</p>`;
            modal.style.display = "block";
        }
    } 
}

const united =()=>{
    var cantidad = amount.value;
    var forInt = parseInt(cantidad); // make the amount you input an integer
    if(country.value == "usa"){
        if(forInt <= 50){
            var youPay = (forInt + UsaFee);
            var finalP = youPay.toFixed(2);
            onFee.innerHTML = `<p>Fee: 4.50</p>`;
            console.log(finalP);
            forTotal.innerHTML = `<p>You pay ${finalP}</p>`;  
        }else{
            var youPay = (forInt) + (UsaFee2);
            var finalP = youPay.toFixed(2);
            onFee.innerHTML = `<p>Fee: ${UsaFee2.toFixed(2)}</p>`;
            console.log(finalP);
            forTotal.innerHTML = `<p>You pay ${finalP}</p>`;
        }
    sent.onclick = function(){
        console.log("no errors");
        receipt.innerHTML = `<p>your order was sent. They will receive ${cantidad}</p>`;
        modal.style.display = "block";
        }
    }
}

const mexico =()=>{
    var cantidad = amount.value;
    var forInt = parseInt(cantidad); // make the amount you input an integer
    if(country.value == "mx"){
        var youPay = (forInt + mxFee);
        var finalP = youPay.toFixed(2);
        console.log(finalP);
        forTotal.innerHTML = `<p>You pay ${finalP}</p>`;
    }    
    sent.onclick = function(){
        console.log("no errors");
        receipt.innerHTML = `<p>your order was sent. They will receive ${cantidad}</p>`;
        modal.style.display = "block";
    }
}

