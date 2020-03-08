
let exp1 = [0];
//let exp2 = 0;
let sum = 0;

let monthly = document.querySelector('#month')

let boxCont = document.getElementById('content')

let expType = document.getElementById('exptype')
expType.addEventListener('click', createNewCounter)
let boxCurrentSum = document.createElement('div')

let boxRes = document.createElement('div')
//let expName = document.createElement('div')
//expName.setAttribute('id', 'expname')

function createNewCounter() {
    boxCont.addEventListener('click', addammount)

    let boxNewCounter = document.createElement('div')
    boxNewCounter.setAttribute('class', 'box-new')
    document.body.appendChild(boxNewCounter)

    let boxDiv = document.createElement('div')
    boxNewCounter.appendChild(boxDiv)

    let h2 = document.createElement('h2');
    let typename = prompt('Input name of expenses type')
    h2.innerHTML = typename;
    boxDiv.appendChild(h2);

    let btnInpExp = document.createElement('button')
    btnInpExp.setAttribute('type', 'submit')
    btnInpExp.innerHTML = ' Input expenses'
    boxDiv.appendChild(btnInpExp)
    
/*
    let btnCurren.Sum = document.createElement('button')
    btnCurrentSum.setAttribute('type', 'submit') 
    btnCurrentSum.innerHTML = 'Get current sum'
    boxDiv.appendChild(btnCurrentSum)
    btnCurrentSum.addEventListener('click', calc)
*/
    let btnDelLast = document.createElement('button')
    btnDelLast.setAttribute('type', 'submit')
    btnDelLast.innerHTML = 'Delete last figure'
    boxDiv.appendChild(btnDelLast)
    
    let btnRemove = document.createElement('button')
    btnRemove.setAttribute('type', 'submit')
    btnRemove.innerHTML = 'Remove counter'
    boxDiv.appendChild(btnRemove)

    //btnRemove.addEventListener('click', removeCounter)

    let boxAddAmmount = document.createElement('div')
    boxAddAmmount.setAttribute('class', 'addam')
    boxNewCounter.appendChild(boxAddAmmount)

    boxCurrentSum.setAttribute('class', 'current-amount')
    boxNewCounter.appendChild(boxCurrentSum) // created / exists

    let h4 = document.createElement('h4')
    h4.innerHTML = 'Current Sum'
    boxCurrentSum.appendChild(h4)

}

function addammount(event) { //YES!!!
    let exp2 = event.target  
    exp2 = Number(prompt("Input ammount")); 
       
    if(isNaN(exp2) !== true) {
        document.getElementsByClassName("addam").innerHTML = exp1.push(" "+`${exp2.toFixed(2)}`); 
        document.getElementsByClassName("addam").innerHTML = exp1;     
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
    
    boxRes.setAttribute('class', 'result')
    boxCurrentSum.appendChild(boxRes) 
    if (exp1.length) {
        sum = exp1.reduce((a, b) => {
           return (parseFloat(a)) + (parseFloat(b));   
        });
       // console.log(sum.toFixed(2))
       boxRes.innerHTML = sum;
    }
   else {
       boxRes.innerHTML = '0';
    }   
}


// check the function 'reduce' for array!!!!
    //res = exp1.reduce((sum, current) => sum + current);
    //document.getElementById("result").innerHTML = res;
/*
function restart() {
    // can not add one first figure to Current total!!!!!!!!!
    document.getElementById("total").innerHTML = sum.toFixed(2);
    document.getElementById("addam").innerHTML = 0;
    document.getElementById("result").innerHTML = 0;
}
*/

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


/*
function createRemoveType() {
    btnRemove.setAttribute('type', 'submit')
    btnRemove.innerHTML = 'Remove expenses type'
    expName.appendChild(btnRemove) 
}
*/

/*
function removeCounter() {
    expName.removeChild(btnRemove)
    expName.removeChild(h2);
}
 */     
    
/*
function funk2 () {
     let div = document.createElement('div');
     div.setAttribute('class', 'box2');
     
     box.appendChild(div)
}
*/

/*
function typeExpCounter() {
    let typename = prompt('Input name of expenses type')
    let expType = document.createElement('h2');
    let box = document.getElementById('expname');
    //box.appendChild(expType);
    expType.innerHTML = typename;
    box.appendChild(expType);

    delet();
    restart()
}
*/