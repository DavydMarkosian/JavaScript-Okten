
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let btn = document.getElementById('btn')
let text = document.getElementById('text')

btn.onclick=function (e){
    text.id=''
}






















