let exp1 = [];
let exp2;
let res;



/*
function start() {
    exp1 = parseInt(prompt("Input start ammount"));
    document.getElementById("start").innerHTML = exp1;
    return;
}
*/ 

function addammount() { //YES!!!
    exp2 = Number(prompt("Input ammount")); 
       
    if(isNaN(exp2) !== true) {
            document.getElementById("addam").innerHTML = exp1.push(" "+`${exp2.toFixed(2)}`); 
            document.getElementById("addam").innerHTML = exp1;     
           } else {
             alert("Wrong number") 
            } 
         
        }


function delet() {
    document.getElementById("addam").innerHTML = exp1.pop();
    document.getElementById("addam").innerHTML = exp1;
}


    function calc() {
     res = exp1.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    
    document.getElementById("result").innerHTML = res;
    
    // check the function 'reduce' for array!!!!
    //res = exp1.reduce((sum, current) => sum + current);
    //document.getElementById("result").innerHTML = res;
}



function restart() {
    document.getElementById("total").innerHTML = res.toFixed(2);
    document.getElementById("addam").innerHTML = 0;
    document.getElementById("result").innerHTML = 0;
}

function addcounter () {
    
}