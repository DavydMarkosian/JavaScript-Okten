let div = document.createElement('div')
document.body.append(div)
div.classList.add('border')

let num = JSON.parse(localStorage.getItem('value')||0)
let newNum = num+1
localStorage.setItem('value',newNum)

div.innerText=newNum













