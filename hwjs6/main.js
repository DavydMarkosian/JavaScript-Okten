let acceptPasswordFn = (prompt) => {
    if (prompt[0] === prompt[0].toUpperCase()) {
        if (prompt.length > 8 && typeof prompt[0] === "string")
            document.write(`<div class="style">Accepted</div>`)
        if (prompt.length < 8 || typeof prompt[0] != "string") {
            document.write(`<div class="style">
Your password supposed to be more than 8 symbols and letter is first 
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

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrOfNums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let toStr = arrOfNums.map(num => num.toString())
console.log(toStr)

//............................................................
//- створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу
// direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];
let sort1 = nums.sort((a, b) => {
    return a - b
})
console.log(sort1)

let sort2 = nums.sort((a, b) => {
    return b - a
})
console.log(sort2)

//.............................................................
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let descendingMonDur = coursesAndDurationArray.sort
((a, b) => {
    return b.monthDuration - a.monthDuration
})
console.log(descendingMonDur)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(function (value) {
        return value.monthDuration > 5
    }
)
console.log(filter)

// -- за допомоги map перетворити кожен елемент на наступний тип
// {id,title,monthDuration}

//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}

let addIdToObj = coursesAndDurationArray.map(function (obj, index) {
    obj.id = index + 1
    return obj
})
console.log(addIdToObj)

//....................................................................
//....................................................................
// описати колоду карт (від 6 до туза без джокерів)
let cards = []
let cardSuit = ['spade', 'diamond', 'heart', 'clubs']
let color = ['red', 'black']
let value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king']

function createCardsV(value) {
    for (const valueC of value) {
        cards.push({valueC});
    }
}

createCardsV(value)
createCardsV(value)
createCardsV(value)
createCardsV(value)
for (let i = 0; i < 9; i++) {
    cards[i].suit = cardSuit[0]
}
for (let i = 9; i < 18; i++) {
    cards[i].suit = cardSuit[1]
}
for (let i = 18; i < 27; i++) {
    cards[i].suit = cardSuit[2]
}
for (let i = 27; i < 36; i++) {
    cards[i].suit = cardSuit[3]
}
for (const card of cards) {
    if (card.suit === cardSuit[1] || card.suit === cardSuit[2]) {
        card.color = color[0]
    } else {
        card.color = color[1]
    }
}
console.log(cards)

//  - знайти піковий туз
let findSpadeAce = cards.filter(card => {
        return card.suit === 'spade' && card.valueC === 'ace'
    }
)
console.log(findSpadeAce)

//  - всі шістки
let findAllOfSix = cards.filter(card => {
    return card.valueC === '6'
})
console.log(findAllOfSix)

//  - всі червоні карти
let findAllOfReds = cards.filter(card => {
    return card.color === 'red'
})
console.log(findAllOfReds)
//  - всі буби
let findAllOfDiamonds = cards.filter(card => {
    return card.suit === 'diamond'
})
console.log(findAllOfDiamonds)
//  - всі трефи від 9 та більше
let findClubsFromNine = cards.filter(card => {
    return card.suit === 'clubs' && card.valueC >= 9
        || card.valueC === 'jack' && card.suit === 'clubs'
        || card.valueC === 'queen' && card.suit === 'clubs'
        || card.valueC === 'king' && card.suit === 'clubs'
        || card.valueC === 'ace' && card.suit === 'clubs'
})
console.log(findClubsFromNine)

//..............................................................
//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях"
// в об'єкт
let reduce = cards.reduce((acc, card) => {
    if (card.suit === 'spade') {
        acc.spade.push(card)
    }
    if (card.suit === 'diamond') {
        acc.diamond.push(card)
    }
    if (card.suit === 'heart') {
        acc.heart.push(card)
    }
    if (card.suit === 'clubs') {
        acc.clubs.push(card)
    }
    return acc;
}, {spade: [], diamond: [], heart: [], clubs: []});
console.log(reduce)

//............................................................................
//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray);
let findSass = coursesArray.filter (function (person){
    if (person.modules.includes('sass')){
        return person
    }
})
console.log(findSass)

// --написати пошук всіх об'єктів, в який в modules є docker
let findDocker = coursesArray.filter(person=>{
    if (person.modules.includes('docker')){
        return person
    }
})
console.log(findDocker)








































