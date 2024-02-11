//- створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div')

document.body.appendChild(div);
div.style.backgroundColor = 'grey';
div.style.color = 'coral';
div.style.fontSize = '44px';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.innerText = 'some text over here';
let divClone = div.cloneNode(true);
divClone.style.backgroundColor = 'green';
document.body.appendChild(divClone)

//- Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//     let li = document.createElement('li')
//     li.innerText=item
//     ul.appendChild(li)
// }
// document.body.appendChild(ul)

let array = ['Main', 'Products', 'About us', 'Contacts']
let ul = document.createElement('ul')
array.forEach(function (value) {
    let li = document.createElement('li')
    li.innerText = value
    ul.appendChild(li)
})
document.body.appendChild(ul)

//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}]

let wrap = document.createElement('div')
document.body.appendChild(wrap)
wrap.classList.add('wrap')


coursesAndDurationArray.forEach(value => {
    let divTM = document.createElement('div')
    divTM.innerText = (value.title + ' -  ' + value.monthDuration + ' months')
    wrap.appendChild(divTM)
    divTM.classList.add('bc-stl', 'wrap')

})


// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray1 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray1.forEach(value => {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    div.append(h1, p)
    document.body.appendChild(div)
    h1.innerText = value.title
    p.innerText = value.monthDuration
    div.classList.add('item')
    h1.classList.add('heading')
    p.classList.add('description')
    div.classList.add('border-center')
})

//- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'>
// та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let hr = document.createElement('hr')
document.body.appendChild(hr)

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу' +
            ' Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу ' +
            'бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини,' +
            ' він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», ' +
            'её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, ' +
            'которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ ' +
            'Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не т' +
            'олько своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных ' +
            'Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, ' +
            'в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом.' +
            ' Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, ' +
            'дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

simpsons.forEach(value => {

    let div = document.createElement('div')
    document.body.appendChild(div)
    div.classList.add('member')


    let divH1PP = document.createElement('div')
    div.append(divH1PP)
    divH1PP.classList.add('leftBlock')

    let h1 = document.createElement('h1')
    divH1PP.append(h1)
    h1.innerText = `${value.name} ${value.surname}`

    let p = document.createElement('p')
    divH1PP.append(p)
    p.innerText = `Age: ${value.age}`

    let pInfo = document.createElement('p')
    divH1PP.append(pInfo)
    pInfo.innerText = ` ${value.info}`

    let pic = document.createElement('img')
    if (value.name === 'Bart') {
        pic.src = 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        div.appendChild(pic)
    }
    if (value.name === 'Homer') {
        pic.src = 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        div.appendChild(pic)
    }
    if (value.name === 'Marge') {
        pic.src = 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        div.appendChild(pic)
    }
    if (value.name === 'Lisa') {
        pic.src = 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        div.appendChild(pic)
    }
    if (value.name === 'Maggie') {
        pic.src = 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        div.appendChild(pic)
    }
    let hr = document.createElement('hr')
    document.body.appendChild(hr)
})

//-----------------------------------------the last one--------------------------------------------
//Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись
// значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом


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
coursesArray.forEach(value => {
    let wrap = document.createElement('div')
    document.body.appendChild(wrap)
    wrap.classList.add('wrap-courses','border-radius' )

    let divTitle = document.createElement('div')
    wrap.appendChild(divTitle)
    divTitle.classList.add('title','border-radius')
    divTitle.innerText = value.title

    let divDurations = document.createElement('div')
    wrap.appendChild(divDurations)
    divDurations.classList.add('durations')

    let monthDuration = document.createElement('div')
    divDurations.appendChild(monthDuration)
    monthDuration.classList.add('duration','border-radius')
    monthDuration.innerText = ('months: ' + value.monthDuration)

    let hourDuration = document.createElement('div')
    divDurations.appendChild(hourDuration)
    hourDuration.classList.add('duration','border-radius')
    hourDuration.innerText = ('hours: ' + value.hourDuration)

    let divModules = document.createElement('div')
    wrap.appendChild(divModules)
    divModules.classList.add('modules')

    value.modules.forEach(value => {
        let divMod = document.createElement('div')
        divMod.classList.add('module','border-radius')
        divMod.innerText = value
        divModules.appendChild(divMod)
    })
    let hr = document.createElement('hr')
    document.body.appendChild(hr)
})









