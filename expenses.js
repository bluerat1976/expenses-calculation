var exp1 = [];
var exp2;
var res;


/*
function start() {
    exp1 = parseInt(prompt("Input start ammount"));
    document.getElementById("start").innerHTML = exp1;
    return;
}
*/ 

function addammount() { //YES!!!
    exp2 = parseFloat(prompt("Input new ammount")); 

    //if input contains at list one letter -> wrong number -> input new number
    if(isNaN(exp2) == false) {
        document.getElementById("addam").innerHTML = exp1.push(+exp2.toFixed(2)); 
        document.getElementById("addam").innerHTML = exp1;     
       } else {
        exp2 = parseFloat(prompt('Vrong value. Input new ammount'));   
        
        if(exp2 == Number(exp2)) {
            document.getElementById("addam").innerHTML = exp1.push(+exp2.toFixed(2)); 
            document.getElementById("addam").innerHTML = exp1;  
        } else {
            document.getElementById("addam").innerHTML = exp1.push(null);
            document.getElementById("addam").innerHTML = exp1; 
        }
    } 
    
}

/*
    При любых ошибках преобразования оператор "+" возвращает NaN.

var str = "123bc"
+str // NaN
parseInt(str,10) // 123

*/



function delet() {
    document.getElementById("addam").innerHTML = exp1.pop();
    document.getElementById("addam").innerHTML = exp1;
}

function calc() {
     res = exp1.reduce((sum, current) => sum + current);
    document.getElementById("result").innerHTML = +res.toFixed(2);
}

function restart() {
    document.getElementById("total").innerHTML = +res.toFixed(2);
    document.getElementById("addam").innerHTML = 0;
    document.getElementById("result").innerHTML = 0;
}

function addcounter () {
    
}