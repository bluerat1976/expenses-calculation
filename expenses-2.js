
let exp1 = [];
let exp2;
let res;
let add = document.getElementById('adding')

/*
function start() {
    exp1 = parseInt(prompt("Input start ammount"));
    document.getElementById("start").innerHTML = exp1;
    return;
}
*/ 
 add.addEventListener('oncl', addAmmount);

 function addAmmount() { //YES!!!
   
    exp2 = Number(prompt("Input ammount")); 
       
    // use cycle for ... while ...
    
    if(isNaN(exp2) !== true) {
            document.getElementById("addam").innerHTML = exp1.push(" "+`${exp2.toFixed(2)} ` ); 
            document.getElementById("addam").innerHTML = exp1;     
           } else {
             alert("Wrong number") 
            } 
         
        }
    /*
         function addAmmount() {
            figure = Number(prompt('Input ammount'))
            
            if(figure !== isNaN) {   
                box.innerHTML = figure;
             
                } else {   
                    let a = (prompt('Wrong number. Input other one.'));
                    box.innerHTML = a;
                }


            box.innerHTML = figure;
              
        }
    */
 



function delet() {
    document.getElementById("addam").innerHTML = exp1.pop();
    document.getElementById("addam").innerHTML = exp1;
}

function calc() {
    res = exp1.reduce((sum, current) => sum + current);
   document.getElementById("result").innerHTML = res;
}

function restart() {
    document.getElementById("total").innerHTML = +res.toFixed(2);
    document.getElementById("addam").innerHTML = 0;
    document.getElementById("result").innerHTML = 0;
}

function addcounter () {
    
}