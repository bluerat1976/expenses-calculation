
let but = document.getElementById('btn');
but.addEventListener('click', funk)
but.addEventListener('click', funk2)
let boxTotal = document.createElement('div')
                    boxTotal.setAttribute('id', 'totalCurrent')
                    document.body.appendChild(boxTotal)
       
        function funk() {

           let typename = prompt('Input name of expenses type')
           
           let h2 = document.createElement('h2');
           h2.innerHTML = typename;
           document.body.appendChild(h2);
       } 
   
        function funk2() {
            let sum = 0;
            let a;
            

            let box = document.createElement('div');
            box.setAttribute('class', 'box2');
            document.body.appendChild(box)
            let p = document.createElement('p')

            btnCreate()
            
                function btnCreate() {
                    let btn = document.createElement('button')
                    btn.setAttribute('type', 'submit')
                    btn.innerHTML = 'Input figure'
                    box.appendChild(btn)
                    btn.addEventListener('click', addAmmount)

                    function addAmmount() {
                        let res = document.createElement('p')
                        a = parseInt(prompt('Input ammount'))
                        res.innerHTML = a
                        box.appendChild(res)
                    }

                function btnSumCreate() {
                    let btnSum = document.createElement('button')
                    btnSum.setAttribute('type', 'submit')
                    btnSum.innerHTML = 'Summa'
                    box.appendChild(btnSum)
                    btnSum.addEventListener('click', getSum)
                    
                    function getSum() {
                        
                        p.setAttribute('style', 'backgroundColor')
                        p.style.backgroundColor = '#cccccc'
                        p.setAttribute('class', 'summ')
                       sum += a 
                        p.innerHTML = sum;
                    // console.log(sum.toFixed(2))
                        box.appendChild(p)
                    }
                }    
                
                btnSumCreate()

                function btnTotal() {
                    let btnT = document.createElement('button')
                    btnT.setAttribute('type', 'submit')
                    btnT.innerHTML = 'Sent to total'
                    box.appendChild(btnT)
                    btnT.addEventListener('click', totalSum)
                    
                    function totalSum() {
                    
                    let total = document.getElementsByClassName('summ')
                    for(let i = 0; i<= total.length; i++) {
                      total[i]++
                      
                    }

                    document.getElementById('totalCurrent').innerHTML = total

                }
                totalSum()

                }
                btnTotal()

            

                totalCurrent
            }
       }
       
        
