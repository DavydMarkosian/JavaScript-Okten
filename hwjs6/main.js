// let password = 'W18234523p'
let acceptPasswordFn = (prompt) => {
    if (prompt[0] === prompt[0].toUpperCase()) {
        if (prompt.length > 8 && typeof prompt[0] === "string")
            document.write(`<div class="style">Accepted</div>`)
        if (prompt.length < 8 || typeof prompt[0] != "string") {
            document.write(`<div class="style">
Your password supposed to be more than 8 symbols and first symbol letter
</div>`)
        }
    } else if (prompt[0] !== prompt[0].toUpperCase()) {
        document.write(`<div class="style">First letter supposed to be in uppercase</div>`)
    }
}
// acceptPasswordFn(prompt(`Enter your password:`))
document.write(`<hr>`)


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
//..........................................................................
// - Є "брудна" стрінга let str = ' dirty string   ' .

// Почистити її від зайвих пробілів.
let strDS2 = ' dirty string    '

document.write(`<div class="style">${strDS2.trim()}</div>`)
let trim = strDS2.trim()

console.log(trim[0], trim[trim.length - 1])


document.write(`<hr>`)
//...............................................................................
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';

// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strRV = 'Ревуть воли як ясла повні';
let stringToArrayFn = (string) => {
    document.write(`<div class="style">${string.split(' ')}</div>`)
}

stringToArrayFn(strRV)

document.write(`<hr>`)
//.............................................................
//Привод номера в нужный формат
//to use replace
// let phoneNum = '+1 (431)-294-69-72'
// let pV1 = phoneNum.replaceAll(' ', '')
// let pV2 = pV1.replaceAll('(', '')
// let pV3 = pV2.replaceAll(')', '')
// let pV4 = pV3.replaceAll('-', '')

// let p = pV4.replaceAll('+1', '')
let phoneNum = '+1 (431)-294-69-72'
let p = phoneNum
    .replaceAll('+1', '')
    .replaceAll('(', '')
    .replaceAll(')', '')
    .replaceAll(' ', '')
    .replaceAll('-', '')

document.write(`<div class="style">${p}</div>`)

document.write(`<hr>`)
//..............................................................
// accepting the password with condition of elements
// has to be longer than 8 and first letter uppercase

// let password = 'W123123p';
// for (let i = 0; i < 1; i++) {
//     if (password[0]===password[0].toUpperCase()){
//         console.log('Accepted')
//     }
//     else if (password[0]!==password[0].toUpperCase()){
//         console.log('First letter supposed to be Upper case!')
//     }
// }
//




