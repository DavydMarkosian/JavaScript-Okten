// let str='hallo okten'
// document.write(`<div>${str.concat('!!!')}</div>`)

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1_1 = 'hello world';
let str1_2 = 'lorem ipsum';
let str1_3 = 'javascript is cool';


document.write(`<div class="style">${str1_1.length}</div>`)
document.write(`<div class="style">${str1_2.length}</div>`)
document.write(`<div class="style">${str1_3.length}</div>`)

document.write(`<hr>`)

//..............................................................
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

document.write(`<div class="style">${str1_1.toUpperCase()}</div>`)
document.write(`<div class="style">${str1_2.toUpperCase()}</div>`)
document.write(`<div class="style">${str1_3.toUpperCase()}</div>`)

document.write(`<hr>`)

//................................................................
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str2_1 = 'HELLO WORLD';
let str2_2 = 'LOREM IPSUM';
let str2_3 = 'JAVASCRIPT IS COOL';
document.write(`<div class="style">${str2_1.toLowerCase()}</div>`)
document.write(`<div class="style">${str2_2.toLowerCase()}</div>`)
document.write(`<div class="style">${str2_3.toLowerCase()}</div>`)

document.write(`<hr>`)

//..................................................................
// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.

let strDS = ' dirty string    !'
document.write(`<div class="style">${strDS.replaceAll('  ', '')}</div>`)

document.write(`<hr>`)

//...............................................................................
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strRV = 'Ревуть воли як ясла повні';
let stringToArrayFn = (string)=>{
    document.write(`<div class="style">${string.split(' ')}</div>`)
}
stringToArrayFn(strRV)
document.write(`<hr>`)























