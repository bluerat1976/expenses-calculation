
let but = document.getElementById('btn');
but.addEventListener('click', funk)
but.addEventListener('click', funk2)

       
        function funk() {

           let typename = prompt('Input name of expenses type')
           
           let h2 = document.createElement('h2');
           h2.innerHTML = typename;
           document.body.appendChild(h2);
       } 
   
        function funk2() {
            let box = document.createElement('div');
            box.setAttribute('class', 'box2');
            document.body.appendChild(box)
            
            btnCreate()
            
                function btnCreate() {
                    let btn = document.createElement('button')
                    btn.setAttribute('type', 'submit')
                    btn.innerHTML = 'Input figure'
                    box.appendChild(btn)
                    btn.addEventListener('click', addAmmount)

                    function addAmmount() {
                        let res = document.createElement('p')
                        a = prompt('Input ammount')
                        res.innerHTML = a
                        box.appendChild(res)
                    }
                }
       }
       
        
