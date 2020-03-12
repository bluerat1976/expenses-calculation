
let monthly = document.querySelector('#month')

let expType = document.getElementById('exptype')
expType.addEventListener('click', createNewCounter)
let sum = 0;
let sumT = 0;
let q = sum;

//let x;
//let z = 0;

let tot = document.getElementById('total')
let s = document.createElement('div')

tot.appendChild(s)



function createNewCounter() {
    let exp1 = [];
    

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
    btnInpExp.addEventListener('click', addammount)

    let btnDelLast = document.createElement('button')
    btnDelLast.setAttribute('type', 'submit')
    btnDelLast.innerHTML = 'Delete last figure'
    boxDiv.appendChild(btnDelLast)
    btnDelLast.addEventListener('click', delet)

    let btnRemove = document.createElement('button')
    btnRemove.setAttribute('type', 'submit')
    btnRemove.setAttribute('class', 'removecount')
    btnRemove.innerHTML = 'Remove counter'
    boxDiv.appendChild(btnRemove)
    btnRemove.addEventListener('click', removeCounter)

    let btnAddTotal = document.createElement('button')
    btnAddTotal.setAttribute('type', 'submit')
    btnAddTotal.innerHTML = 'Add sum to total'
    boxDiv.appendChild(btnAddTotal)
    btnAddTotal.addEventListener('click', addToTotal)
    

    let boxAddAmmount = document.createElement('div')
    boxAddAmmount.setAttribute('class', 'addam')
    boxNewCounter.appendChild(boxAddAmmount)

    let boxCurrentSum = document.createElement('div')
    boxCurrentSum.setAttribute('class', 'current-amount')
    boxNewCounter.appendChild(boxCurrentSum) // created / exists

    let curS = document.createElement('div')
    curS.setAttribute('class', 'curSum')
    boxDiv.appendChild(curS)

    let h4 = document.createElement('h4')
    h4.innerHTML = 'Current Sum'
    boxCurrentSum.appendChild(h4)

    function addammount() { //YES!!!
        
        let fig = document.createElement('p')
        fig.setAttribute('style', true)
        fig.style.display = 'inline'
        //fig.setAttribute('class', 'addam' ) 
        
        let amm = Number(prompt("Input ammount")); 
            
        if(isNaN(amm) !== true) {
                
            //document.getElementsByClassName("addam").innerHTML = exp1.push(" "+`${amm.toFixed(2)}`);    
            //document.getElementsByClassName("addam").innerHTML = exp1;         
            
            boxAddAmmount.innerHTML = exp1.push(" "+`${amm.toFixed(2)}`);   
            boxAddAmmount.innerHTML = exp1;         

        //fig.innerHTML = `${amm} +`
        //boxAddAmmount.appendChild(fig) 
        
        } else {        
            alert("Wrong number")  
        }  
        calc()   
    } 

     function delet() {
         
        boxAddAmmount.innerHTML = exp1.pop();
        boxAddAmmount.innerHTML = exp1;
       
        calc()
    }

    let boxRes = document.createElement('div')
    boxRes.setAttribute('class', 'result')

    function calc() {
        boxRes.setAttribute('class', 'result')
        boxCurrentSum.appendChild(boxRes) 
        if (exp1.length) {
            sum = exp1.reduce((a, b) => {
               return (parseFloat(a) || 0) + (parseFloat(b) || 0);   
            });
           // console.log(sum.toFixed(2))
           boxRes.innerHTML = sum; 
           curS.innerHTML = sum; 
           s.innerHTML = sum 
        }
       else {
           boxRes.innerHTML = ' ';
        }   
       // document.getElementById('total').innerHTML = 0
    } 

    function removeCounter() {
        document.body.removeChild(boxNewCounter)
    }
     
    function addToTotal() {
        
        totalSum.push(sum)
        for(let i = 0; i<totalSum.length; i++) {
            console.log(totalSum[i]) 
        z += totalSum[i]
        console.log(totalSum[i])
        let z = totalSum[i]
        console.log(z)
        }
       
       
    }

    function declean() {
        for(let i = 0; i < totalSum.length; i++) {
             totalSum.shift()
        }    
        console.log(totalSum)
    }
    //declean()
   
}

/*
function restart() {
    // can not add one first figure to Current total!!!!!!!!!
    let sumCurrentTotal = []
    sumCurrentTotal.push(sum.toFixed(2))

    for(let i = 0; i <= sumCurrentTotal.length; i++) {
    sumCurrentTotal[i] += sum.toFixed(2)
    }   
    alert(sumCurrentTotal)

    //document.getElementById("total").innerHTML = sum.toFixed(2);
    //document.getElementsByClassName("addam").innerHTML = 0;
    //document.getElementsByClassName("result").innerHTML = 0;
}
*/


// check the function 'reduce' for array!!!!
    //res = exp1.reduce((sum, current) => sum + current);
    //document.getElementById("result").innerHTML = res;

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