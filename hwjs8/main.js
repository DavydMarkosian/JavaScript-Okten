// function User(name, id, status) {
//     this.name = name
//     this.id = id
//     this.status = status
// }
//
// let user1 = new User('igor', 1234, true)
// let user2 = new User('olga', 6542, true)
// let user3 = new User('ina', 9848, false)
// let user4 = new User('ira', 7483, true)
// let user5 = new User('maxim', 1423, true)
// let user6 = new User('vasya', 7045, true)
// let user7 = new User('petya', 5473, false)
//
// let arrNewUsers = []
// arrNewUsers.push(user1, user2, user3, user4, user5, user6, user7)
//
// console.log(arrNewUsers);
// for (const user of arrNewUsers) {
//     if (user.name.includes('maxim')) {
//         user.name = 'Now is Solder'
//         console.log(user)
//     }
// }
//
// function Card(suit, value) {
//     this.suit = suit;
//     this.value = value;
// }

// let arrCards = []
// let card1 = new Card('spade', 6)
// let card2 = new Card('spade', 7)
// let card3 = new Card('spade', 8)
// let card4 = new Card('spade', 9)
// let card5 = new Card('spade', 10)
//
// arrCards.push(card1, card2, card3, card4, card5)
// console.log(arrCards)
//
// function Worker(skills, experience) {
//     this.skills = skills
//     this.experience = experience
// }
//
// let w1 = new Worker('html, css, js, java', 4)
// let w2 = new Worker('html, css, js, java, sql, python', 6)
// let w3 = new Worker('html, css, java, sql, python', 4)
// let w4 = new Worker('html, css, js, sql, python', 3)
// let w5 = new Worker('html, css, js, java', 1)
//
// let arrWorkers = [];
// arrWorkers.push(w1, w2, w3, w4, w5)
// console.log(arrWorkers)
//
// function Student(name, math, chemistry, history, science) {
//     this.name = name;
//     this.math = math;
//     this.chemistry = chemistry
//     this.history = history
//     this.science = science
// }
//
// let arrStudent = []
// let student1 = new Student('masha', 4, 3, 4, 4)
// let student2 = new Student('katia', 5, 5, 5, 5)
// let student3 = new Student('sveta', 3, 4, 5, 5)
// let student4 = new Student('illa', 5, 3, 4, 4)
// let student5 = new Student('semen', 4, 3, 5, 5)
// let student6 = new Student('oleg', 3, 2, 3, 3)
// arrStudent.push(student1, student2, student3, student4, student5, student6)
//
// for (const student of arrStudent) {
//     let res = ((student.math + student.chemistry + student.history + student.science) / 4)
//     if (res >= 4) {
//         console.log(res + ' : ' + 'Accepted!')
//     } else {
//         console.log(res + ' : ' + 'Sorry!')
//     }
// }
//
// function Emploer(salary, type, subsidiary, type2) {
//     this.salary = salary
//     this.type = type
//     this.subsidiary = {salary, type2}
// }
//
// let arrEmployer = []
// let emp1 = new Emploer(25, 'full-time', 25, 'full')
// let emp2 = new Emploer(20, 'part-time')
// let emp3 = new Emploer(21, 'full-time')
// let emp4 = new Emploer(24, 'part-time')
// let emp5 = new Emploer(26, 'full-time')
// let emp6 = new Emploer(24, 'part-time')
// let emp7 = new Emploer(20, 'full-time')
// let emp8 = new Emploer(20, 'full-time')
// let emp9 = new Emploer(20, 'part-time')
// let emp10 = new Emploer(20, 'full-time')
// let emp11 = new Emploer(20, 'part-time')
// let emp12 = new Emploer(20, 'full-time')
// let emp13 = new Emploer(21, 'full-time')
// let emp14 = new Emploer(24, 'part-time')
// let emp15 = new Emploer(26, 'full-time')
// let emp16 = new Emploer(24, 'part-time')
// let emp18 = new Emploer(20, 'part-time')
// let emp19 = new Emploer(20, 'full-time')
// arrEmployer.push(emp1, emp2, emp3, emp4, emp5, emp6, emp7, emp8, emp9, emp10, emp11, emp12, emp13, emp14, emp15, emp16, emp18, emp19)
// console.log(arrEmployer)
//
// let filterEmpMethod = arrEmployer.filter(value => value.salary > 24 && value.type === 'full-time')
// console.log(filterEmpMethod)


//- Створити функцію конструктор для об'єктів User з полями
// id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(name, id, surname, email, phone) {
    this.name = name
    this.id = id
    this.surname = surname
    this.email = email
    this.phone = phone
}

let arrUsers = []
let u1 = new User('Ivan', 6548, 'lastIvan', 'someEmail', 657847)
let u2 = new User('Petia', 8456, 'lastPetia', 'someEmail', 987654)
let u3 = new User('Katia', 7651, 'lastKatia', 'someEmail', 234456)
let u4 = new User('Ina', 9807, 'lastIna', 'someEmail', 756423)
let u5 = new User('Olia', 7854, 'lastOlia', 'someEmail', 474535)
let u6 = new User('Misha', 1274, 'lastMisha', 'someEmail', 176587)
let u7 = new User('Zhenia', 2682, 'lastZhenia', 'someEmail', 246856)
let u8 = new User('Max', 8234, 'lastMax', 'someEmail', 965345)
let u9 = new User('Igor', 1535, 'lastIgor', 'someEmail', 152456)
let u10 = new User('Anna', 3654, 'lastAnna', 'someEmail', 356745)

arrUsers.push(u1, u2, u3, u4, u5, u6, u7, u8, u9, u10)
console.log(arrUsers)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

let usersMethodFilterFn = arrUsers.filter(value => value.id % 2 === 0,
    console.log('value'))
console.log(usersMethodFilterFn)

//- Взяти масив з  User[] з попереднього завдання,
// та відсортувати його по id. по зростанню (sort)

let usersMethodSortFn = arrUsers.sort((a, b) => {
    return a.id - b.id
})
console.log(usersMethodSortFn)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client extends User {
    constructor(name, id, surname, email, phone, order) {
        super(name, id, surname, email, phone);
        this.order = order
    }
}

let arrClients = []
let c1 = new Client('Ivan', 6548, 'lastIvan', 'someEmail', 657847, ['it2', 'it8', 'it9'])
let c2 = new Client('Petia', 8456, 'lastPetia', 'someEmail', 987654, ['it4'])
let c3 = new Client('Katia', 7651, 'lastKatia', 'someEmail', 234456, ['it1'])
let c4 = new Client('Ina', 9807, 'lastIna', 'someEmail', 756423, ['it1', 'it2', 'it3', 'it4', 'it5', 'it6', 'it7', 'it8', 'it9'])
let c5 = new Client('Olia', 7854, 'lastOlia', 'someEmail', 474535, ['it6', 'it7', 'it8', 'it9'])
let c6 = new Client('Misha', 1274, 'lastMisha', 'someEmail', 176587, ['it8', 'it9'])
let c7 = new Client('Zhenia', 2682, 'lastZhenia', 'someEmail', 246856, ['it5', 'it6', 'it7', 'it8', 'it9'])
let c8 = new Client('Max', 8234, 'lastMax', 'someEmail', 965345, ['it1', 'it4', 'it6', 'iy8'])
let c9 = new Client('Igor', 1535, 'lastIgor', 'someEmail', 152456, ['it2', 'it3'])
let c10 = new Client('Anna', 3654, 'lastAnna', 'someEmail', 356745, ['it5', 'it7', 'it9'])
arrClients.push(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10)
console.log(arrClients)

//- Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let itemsMethodSort = arrClients.sort((c1, c2) => {
    return c1.order.length - c2.order.length
})
console.log(itemsMethodSort)

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями: модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
//     об'єкт car
function Car(model, make, year, maxSpeed, capacity) {
    this.model = model,
        this.make = make,
        this.year = year,
        this.maxSpeed = maxSpeed,
        this.capacity = capacity,
        this.driver = {}

    this.drive = function () {
        console.log(`The max speed of this car is: ${this.maxSpeed} km/h`)
    }
    this.info = function () {
        console.log(`Model:${this.model} Make:${this.make} Year:${this.year} MaxSpeed:${this.maxSpeed} Capacity:${this.capacity}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue
    }
    this.driver = function (driver) {
        this.driver = driver
    }

}

let car1 = new Car('CRV', 'HONDA', '2020', 200, '1880cc')
// let car2 = new Car('OPTIMA', 'KIA', '2024', 250, '2200cc')

console.log(car1)
car1.info()
car1.drive()
car1.increaseMaxSpeed(20)
console.log(car1)
car1.drive()
car1.changeYear(2000)
console.log(car1)
car1.driver({name: 'Kostia', age: 25, exp: 3})
console.log(car1)

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
//     об'єкт car

class CarCC {
    constructor(model, make, year, maxSpeed, capacity) {
        this.model = model,
            this.make = make,
            this.year = year,
            this.maxSpeed = maxSpeed,
            this.capacity = capacity,
            this.driver = {}
    }

    drive = function () {
        console.log(`We're driving ${this.maxSpeed}km/h`)
    }
    info = function () {
        console.log(`==================info===============`)
        console.log(`Model: ${this.model}`)
        console.log(`Make: ${this.make}`)
        console.log(`Year: ${this.year}`)
        console.log(`MaxSpeed: ${this.maxSpeed}`)
        console.log(`Capacity: ${this.capacity}`)
        console.log(`Driver: ${this.driver}`)
        console.log(`==================info===============`)
    }
    increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
    }
    changeYear = function (newValue) {
        this.year = newValue
    }
    addDriver = function (driver) {
        this.driver = driver
    }
}

let car = new CarCC('Mustang', 'Ford', 2020, 280, 5000)
console.log(car)
car.increaseMaxSpeed(20)
car.changeYear(2024)
car.drive()
car.addDriver(JSON.stringify({name: 'Max', age: 25}))
car.info()

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let arrCinderellas = []

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}
let cinderella1=new Cinderella('Jane',20,38)
let cinderella2=new Cinderella('Jas',23,35)
let cinderella3=new Cinderella('Sindy',22,36)
let cinderella4=new Cinderella('Polly',27,35)
let cinderella5=new Cinderella('Molly',26,37)
let cinderella6=new Cinderella('Sam',30,38)
let cinderella7=new Cinderella('Pam',29,39)
let cinderella8=new Cinderella('Zhiline',19,34)
let cinderella9=new Cinderella('Ally',40,36)
let cinderella10=new Cinderella('Ema',34, 40)

arrCinderellas.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10);
console.log(arrCinderellas)

class Prince {
    constructor(name,age,found) {
        this.name=name
        this.age=age
        this.found=found
    }
}
let prince = new Prince('John',28,34)
console.log(prince)

 arrCinderellas.forEach(function (value) {
     if (value.footSize===prince.found){
         document.write(`<div class="box"> ${value.name} is Cinderella</div>`)
     }
 })


let won = arrCinderellas.find(value => value.footSize===prince.found)
console.log(won)


















































































