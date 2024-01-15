// let a = `hi`
// console.log('you gonna get the problem')
//
//
// let someFn = (a,b) => {
//     let c = a * b
//
//     document.write(`
// <ul>
// <li>${c}</li>
// <li>${c}</li>
// </ul>
// `)
//
//     return c
// }
// someFn(3, 5)
//

//................................................................
//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaSq = (a, b) =>
    document.write(`<p class="style">${a * b}</p>`)
areaSq(3, 5);
document.write(`<hr>`)

//.......................................................................
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const Pi = 3.14
let areaCircle = (r) =>
    document.write(`<p class="style">${Pi * r * r}</p>`)
areaCircle(2)
document.write(`<hr>`)

//.........................................................................
// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r

let areaCylinder = (r, h) =>
    document.write(`<p class="style">${2 * Pi * r * h}</p>`)
areaCylinder(2, 3)
document.write(`<hr>`)

//.........................................................................
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    // {name: 'kolya', age: 29, status: true},
    // {name: 'olya', age: 28, status: false},
    // {name: 'max', age: 30, status: true},
    // {name: 'anya', age: 31, status: false},
    // {name: 'oleg', age: 28, status: false},
    // {name: 'andrey', age: 29, status: true},
    // {name: 'masha', age: 30, status: true},
    // {name: 'olya', age: 31, status: false},
    // {name: 'max', age: 31, status: true}
]
let arrFnShow = (array) => {
    document.write(`<div class="style">`)
    document.write(`<ul>`)
    for (const user of array) {
        document.write(`<li >${user.name} - ${user.age} - ${user.status}</li>`)
    }
    document.write(`</ul>`)
    document.write(`</div>`)
}
arrFnShow(users)
document.write(`<hr>`)

//......................................................................
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let someTextFn = (text) => {
    document.write(`
    <p class="style">${text}</p>
    `)
}
someTextFn('Some text supposed to be right over here.')
document.write(`<hr>`)

//..................................................................
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
let createListFn = (text) => {
    document.write(`<div class="style">`)
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
    document.write(`</div>`)
}
createListFn('Some other text supposed to be right over here and looks like list.')
document.write(`<hr>`)

//..................................................................
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)
let createListWithLoopFn = (text, num) => {
    for (let i = 0; i < num; i++) {
        document.write(`<div class="style">${text}</div>`)
    }
}
createListWithLoopFn('lorem ipsum', 2)
document.write(`<hr>`)

//..............................................................
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
let acceptingArrForListFn = (array) => {
    document.write(`<div class="style">`)
    document.write(`<ul>`)
    for (const element of array) {
        document.write(`<li>${element}</li>`)
    }
    document.write(`</ul>`)
    document.write(`</div>`)
}
let arr = [3, -45, 876, true, 'any name']
acceptingArrForListFn(arr)
document.write(`<hr>`)

//..............................................................
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrUsers = [
    {name: 'anya', age: 31, id: 6453},
    {name: 'oleg', age: 28, id: 8756},
    {name: 'andrey', age: 29, id: 9078},
    {name: 'masha', age: 30, id: 2567},
    {name: 'olya', age: 31, id: 9876},
    {name: 'max', age: 31, id: 1234}
]
let usersArrFn = (array) => {
    for (const user of array) {
        document.write(`<div class="style">`)
        document.write(`${user.name} - ${user.age} - ${user.id}`)
        document.write(`</div>`)
    }
}
usersArrFn(arrUsers)
document.write(`<hr>`)

//................................................................................
// - створити функцію яка повертає найменьше число з масиву
let arrOfNums = [7, 43, 2, 800, 89, 645, 32, 14, 4, 6, 45]
let minNumOfArr = (array) => {
    let min = arrOfNums[0]
    for (const num of array) {
        if (min > num) {
            min = num
        }
    }
    document.write(`<div class="style">${min}</div>`)
    return min;
}
minNumOfArr(arrOfNums)
document.write(`<hr>`)
//..............................................................
// - створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumOfNumsFn = (array) => {
    let sum = array[0]
    for (const num of array) {
        sum += num
    }
    document.write(`<div class="style">${sum}</div>`)
}
sumOfNumsFn(arrOfNums)
document.write(`<hr>`)

// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let switchIndexFn = (array, index1, index2) => {
    let num1 = array[index1]
    let num2 = array[index2]
    array[index1]=num2
    array[index2]=num1
    document.write(`<div class="style">${array}</div>`)
}

switchIndexFn([11, 22, 33, 44], 2, 1)
document.write(`<hr>`)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
// => 250


let exchangeFn = (sumUAH,currencyValues,exchangeCurrency)=>{

    for (const curr of currencyValues ) {
        if (curr.currency === exchangeCurrency ){
            let res= sumUAH/curr.value
            document.write(`<div class="style">${res}</div>`)
        }
    }
}

exchangeFn(
    10000,
    [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'EUR')





















































