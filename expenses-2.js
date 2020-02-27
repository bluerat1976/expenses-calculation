
let exp1 = [];
let exp2;
let add = document.getElementById('adding')
let res = document.getElementById('result');
let sum = 0;
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
    /* Works good.
        if(exp1.length) {
            sum = exp1.reduce((a, b) => {
            return (parseFloat(a) ) + (parseFloat(b));
            }); 
            //console.log(sum)
            res.innerHTML = sum
        } else {
            res.innerHTML = '';
        }
       */
    
    sum = exp1.reduce((sum, current) => {return (parseFloat(sum) + parseFloat(current))});
    res.innerHTML = sum
    
}


function restart() {
    document.getElementById("total").innerHTML = +res.toFixed(2);
    document.getElementById("addam").innerHTML = 0;
    document.getElementById("result").innerHTML = 0;
}

function addcounter () {
    
}