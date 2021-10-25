let board = document.getElementById('board');
let mensaje = document.getElementById('the-message');


//let board = document.getElementById('container');
//const $board = $('#board');

function the_board(r, c){ // 9 by 9
    for(let i = 0; i < r; i++){  // this is for the rows
        const rowDiv = document.createElement('div'); // creating the div
        rowDiv.classList.add('row'); // giving it a class name = row
        
        for(j = 0; j<c; j++){ // this is for the columns
            const colDiv = document.createElement('div'); // creating the columns div
            colDiv.classList.add('col','squares'); // giving it class names 
            let m = document.getElementById('col');
            
            const pic = document.createElement('div'); // creating a div for the bombs
            if(Math.random()<0.1){ // randomnly placing bombs
                pic.classList.add('foto');
                colDiv.appendChild(pic);
                colDiv.addEventListener('click',function(){
                pic.innerHTML = '<img src="bomba.png" width="25px" object-position: "center">';
        
                })
            }
            


            var count = 3;
            const bombs = document.createElement('div'); // creating a div for the bombs
            if(Math.random()<0.1){ // randomnly placing bombs
                bombs.classList.add('bomba'); // giving it a name, and we are adding randoms bombs
                colDiv.appendChild(bombs);
                // assign bomb pic to random places in the board, if found three bombs, you loose.
                //colDiv.innerHTML = '<img src="bomba.png" width="50%">';


                colDiv.addEventListener('click',function(){  // on the board it needs to be touch on colDiv and if the bomb is there you lose. 
                // ADD A COUNTING NUMBER SO, IT EXPLODES WHEN I HIT 3 MINAS....
                    mensaje.innerHTML = '<p>You lost!</p>';
                    board.innerHTML = '<img src="atomic.png" width="70%">';
                    
                });
               //rowDiv.appendChild(bombs);
            }
            rowDiv.appendChild(colDiv); // adding the columns to the rows

        }
        board.appendChild(rowDiv); // adding the rows with the columns to the board.
    }
   
}
the_board(10,10); // calling the board function













// <img id="imagen1" src="bomba2.png" style="width:30%" role="button">
            