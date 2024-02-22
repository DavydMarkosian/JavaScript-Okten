// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


let array = []

function Object(name, age) {
    this.name = name;
    this.age = age;
}

for (let i = 0; i < 100; i++) {
    let age = Math.round(Math.random()*50)
    const user = new Object('max', age)
    array.push(user)

}
console.log(array)

localStorage.setItem('users',JSON.stringify(array))
let users = JSON.parse(localStorage.getItem('users'))


let btnNext = document.getElementById('next')

btnNext.onclick = function (e){
    let ind = 2
    let limit = 10*ind;

    users.forEach((user, index)=>{
        if (index<limit){
            console.log(user)}
    })
}






































































