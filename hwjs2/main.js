// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 4, 5, 6, 'string', true, false, [16, 'string', true]];
console.log('1) ' + arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    tittle: 'title1',
    genre: 'genre1',
    pageCount: 100
}
let book2 = {
    tittle: 'title2',
    pageCount: 200,
    genre: 'genre2'
}
let book3 = {
    tittle: 'title3',
    pageCount: 300,
    genre: 'genre3'
}
console.log('2) ')
console.log(book1, book2, book3)


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'title4',
    pageCount: '400',
    genre: 'genre4',
    authors: [
        author1 = {
            name: 'name1',
            age: '44'
        },
        author2 = {
            name: 'name2',
            age: '55'
        }
    ]
}
let book5 = {
    title: 'title5',
    pageCount: '500',
    genre: 'genre5',
    authors: [
        author1 = {
            name: 'name1',
            age: '44'
        },
        author2 = {
            name: 'name2',
            age: '55'
        }
    ]
}
let book6 = {
    title: 'title6',
    pageCount: '600',
    genre: 'genre6',
    authors: [
        author1 = {
            name: 'name1',
            age: '44'
        },
        author2 = {
            name: 'name2',
            age: '55'
        }
    ]
}
console.log('3)')
console.log(book4, book5, book6)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arrCustomers = [
    user1 = {
        name: 'name1',
        username: 'username1',
        password: 'password1'
    },
    user2 = {
        name: 'name2',
        username: 'username2',
        password: 'password2'
    },
    user3 = {
        name: 'name3',
        username: 'username3',
        password: 'password3'
    },
    user4 = {
        name: 'name4',
        username: 'username4',
        password: 'password4'
    },
    user5 = {
        name: 'name5',
        username: 'username5',
        password: 'password5'
    },
    user6 = {
        name: 'name6',
        username: 'username6',
        password: 'password6'
    },
    user7 = {
        name: 'name7',
        username: 'username7',
        password: 'password7'
    },
    user8 = {
        name: 'name8',
        username: 'username8',
        password: 'password8'
    },
    user9 = {
        name: 'name9',
        username: 'username9',
        password: 'password9'
    },
    user10 = {
        name: 'name10',
        username: 'username10',
        password: 'password10'
    }
]
console.log('4)')
console.log(arrCustomers[0].password, arrCustomers[1].password, arrCustomers[2].password, arrCustomers[3].password, arrCustomers[4].password, arrCustomers[5].password, arrCustomers[6].password, arrCustomers[7].password, arrCustomers[8].password, arrCustomers[9].password)

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
console.log('5)')
let x = 1;
if (x !== 0) {
    console.log('verno');
} else {
    console.log('ne verno')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log('6)')
let time = 40
if (time >= 0 && time <= 14) {
    console.log('pervaya')
} else if (time > 14 && time <= 29) {
    console.log('vtoraya')
} else if (time > 29 && time <= 44) {
    console.log('tretiaia')
} else if (time > 44 && time <= 59) {
    console.log('chetvertaia')
} else if (time < 0) {
    alert('6) chislo dolzhno bit polozhitelnim')
} else if (time > 59) {
    // console.log('vvedite chislo do 59')
    alert('6) vvedite chislo do 59')
} else {
    alert('Error')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця
// потрапляє це число (у першу, другу чи третю).
console.log('7)')
let day = 1;
if (day >= 1 && day < 10) {
    console.log('decada 1')
} else if (day >= 10 && day < 20) {
    console.log('decada 2')
} else if (day >= 20 && day <= 31) {
    console.log('decada 3')
} else {
    alert('vvedite korrektniy den mesiatsa')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log('8)')
let dayOfWeek = 7
switch (dayOfWeek) {
    case 1 :
        dayOfWeek === 1;
        console.log('ponedelnik')
        break;
    case 2:
        dayOfWeek === 2;
        console.log('vtornik')
        break;
    case 3:
        dayOfWeek === 3;
        console.log('sreda')
        break;
    case 4:
        dayOfWeek === 4;
        console.log('chetverg')
        break;

    case 5:
        dayOfWeek === 5;
        console.log('piatnica')
        break;
    case 6:
        dayOfWeek === 6;
        console.log('subbota')
        break;
    case 7:
        dayOfWeek === 7;
        console.log('voskresenie')
        break;
    default:
        console.log('vvedite den nedeli')
}
//- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
console.log('9)');
let num1 = 10;
let num2 = 5;
if (num1 === num2) {
    console.log('chisla ravni');
} else if (num1 > num2) {
    console.log('Pervoe chislo bolshe');
} else if (num1 < num2) {
    console.log('Vtoroe chislo bolshe');
} else {
    console.log('error');
}
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення
// змінної х являється falsy (хибноподібні, тобто приводиться до false)
console.log('10)')
let y = '';
y = y || 'default'
console.log(y)
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль
// "Супер".
console.log('11)')
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('super')
} else {
    console.log('you need more experience')
}

if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('super')
} else {
    console.log('you need more experience')
}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('super')
} else {
    console.log('you need more experience')
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('super')
} else {
    console.log('you need more experience')
}
if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('super')
} else {
    console.log('you need more experienceexperience')
}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('super')
} else {
    console.log('you need more experience ')
}

//other way
console.log('11.1)')
let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 4},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6}
]
let fitsForJob = coursesAndDurationArray1[0].monthDuration
fitsForJob = (fitsForJob >=5) || 'not enough'
console.log(fitsForJob)

//КАК БЕЗ IF И SWITCH ВЫВЕСТИ В КОНСОЛЬ НЕ 'TRUE',  А STRING ЗНАЧЕНИЕ(ИЛИ ЛЮБОЕ СВОЕ ЗНАЧЕНИЕ)???

// fitsForJob = coursesAndDurationArray1[1].monthDuration
// fitsForJob = (fitsForJob >=5) || 'not enough'
// console.log(fitsForJob)
// fitsForJob = coursesAndDurationArray1[2].monthDuration
// fitsForJob = (fitsForJob >=5) || 'not enough'
// console.log(fitsForJob)
