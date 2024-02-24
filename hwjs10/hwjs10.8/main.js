//*** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//  зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд
//  після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


let h1 = document.createElement('h1')
document.body.append(h1)

let val = localStorage.getItem('sum')
let a = 110
let res = 0
let indicator = document.getElementById('indicator')


let div = document.createElement('div')
document.body.append(div)
div.id = 'message'
let message = document.getElementById('message')
message.innerText='wait for the indication '

if (!val) {
    h1.innerText = '100 UAH'

} else {
    h1.append(val + ' UAH')
}

setTimeout(() => {
    let div = document.createElement('div')
    document.body.append(div)
    div.classList.add('block')
    div.id = 'indicator'
    message.innerText=''

    if (!val) {
        localStorage.setItem('sum', JSON.stringify(a))
    } else {
        let sum = localStorage.getItem('sum')
        res = JSON.parse(sum) + 10
        localStorage.setItem('sum', res)
    }
}, 3000)





