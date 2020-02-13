 
let d = new Date();

function newD() {
    document.getElementById('data').innerHTML = d; 
}


function start() {
window.timerId = window.setInterval(timer, 1000); 
}
 
function timer () {
    let elem = document.getElementById("timer");
  
    let d = new Date( );
    elem.value = d; 
    
    //elem.value = parseInt(elem.value) + 1;
}

function stop() {
    window.clearInterval(window.timerId);
}

