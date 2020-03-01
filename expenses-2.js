
let exp1 = [];
let exp2 = 0;
let res = document.getElementById('result');
let sum = 0;

let monthly = document.querySelector('#month')

 let div = document.getElementById('box-new');

let btn = document.getElementById('exptype');
btn.addEventListener('click', typeExpCounter)


function typeExpCounter() {
    let typename = prompt('Input name of expenses type')
   
    let h2 = document.createElement('h2');
    h2.innerHTML = typename;
    //box.appendChild(expType);
    
    div.appendChild(h2);

    //delet();
    //restart()
}




function addammount() { //YES!!!
    exp2 = Number(prompt("Input ammount")); 
       
    if(isNaN(exp2) !== true) {
        document.getElementById("addam").innerHTML = exp1.push(" "+`${exp2.toFixed(2)}`); 
        document.getElementById("addam").innerHTML = exp1;     
    } else {
            alert("Wrong number") 
            } 
            
            calc()        
}


function delet() {
    document.getElementById("addam").innerHTML = exp1.pop();
    document.getElementById("addam").innerHTML = exp1;

    calc()
}


function calc() {
 
    if (exp1.length) {
        sum = exp1.reduce((a, b) => {
           return (parseFloat(a)) + (parseFloat(b));   
        });
       // console.log(sum.toFixed(2))
       res.innerHTML = sum;
    } else {
        res.innerHTML = '';
    }  
}

// check the function 'reduce' for array!!!!
    //res = exp1.reduce((sum, current) => sum + current);
    //document.getElementById("result").innerHTML = res;

function restart() {
    // can not add one first figure to Current total!!!!!!!!!
    document.getElementById("total").innerHTML = sum.toFixed(2);
    document.getElementById("addam").innerHTML = 0;
    document.getElementById("result").innerHTML = 0;
}


/*
function addcounter () {
    
}

function funk() {
    for(let i = 0; i<12; i++) {
        let monthTotal = document.createElement('li');
        monthTotal.innerHTML = 'Total per month'
        monthly.appendChild(monthTotal)
    }
}

funk()
*/

/*
function start() {
    exp1 = parseInt(prompt("Input start ammount"));
    document.getElementById("start").innerHTML = exp1;
    return;
}
*/ 