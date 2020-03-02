
let but = document.getElementById('btn');
but.addEventListener('click', funk)
but.addEventListener('click', funk2)
let box = document.getElementById('box');
       
       function funk() {

           let typename = prompt('Input name of expenses type')
           
           let h2 = document.createElement('h2');
           h2.innerHTML = typename;
           box.appendChild(h2);

      
       } 
   
       function funk2 () {
            let div = document.createElement('div');
            div.setAttribute('class', 'box2');
            
            box.appendChild(div)
       }
       
 