// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами
// // а і б
// function calcAreaRectangle(a, b) {
//     let area = a * b;
//     return area;
// }
//
// let aRec = calcAreaRectangle(10, 2)
// console.log('1. Area rectangle - ', aRec)
//
//
// // створити функцію яка обчислює та повертає площу кола з радіусом r
// function calcAreaCircle(r) {
//     let area = 3.14 * r * r
//     return area;
// }
//
// let aCircle = calcAreaCircle(2)
// console.log('2. Area circle - ', aCircle)
//
// //створити функцію яка обчислює та повертає площу циліндру висотою h,
// // та радіутом r
// function areaCylinder(h, r) {
//     let area = 2 * 3.14 * r * h
//     return area;
// }
//
// let sCyl = areaCylinder(5, 5);
// console.log('3. Area cylinder - ', sCyl)

//- створити функцію яка приймає масив та виводить кожен його елемент

// function returnArray (array){
//
//     for (const item of array){
//         console.log(item)
//     }
//
// }
// let array = [8,345,'hi']
// returnArray(array)

//- створити функцію яка створює параграф з текстом.
// Текст задати через аргумент
// function createParWithText(text) {
//     document.write(`
//     <p>${text}</p>
//     `)
// }

// createParWithText('some text about lorem ipsum')
// createParWithText('next one to check just in case')
//
// //створити функцію яка створює ul з трьома елементами li.
// // Текст li задати через аргумент всім однаковий
// function createList(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
//
// createList('magic is existing')
//

//.....................................
//створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)


// let arr = [];
// function pushArr(length){
//     for (let i=0;i<length;i++){
//         arr[arr.length]= Math.round(Math.random()*10)
//         document.write(`<ul>`)
//         document.write(`<li>${Math.round(Math.random()*10)}</li>`)
//         document.write(`</ul>`)
//
//     }
//     return arr;
// }
// let num = pushArr(3)
// console.log(num)

//....................................................
// створити функцію яка приймає масив примітивних елементів
// (числа,стрінги,булеві), та будує для них список
// function acceptArr (arr){
//     for (let element of arr){
//         document.write(`<ul><li>${element}</li></ul>`)
//     }
//     return arr;//option
// }
// let arr = [2,54,'hi',true]
// console.log(acceptArr(arr))

//..................................................
////- створити функцію яка приймає масив об'єктів з наступними полями id, name, age
// та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arrObjects = [
//     {id: 2134, name: 'Petia', age: 18},
//     {id: 7654, name: 'Olia', age: 54},
//     {id: 8975, name: 'Katia', age: 23},
//     {id: 2346, name: 'Vasia', age: 53},
//     {id: 8564, name: 'Dima', age: 26}
// ]
// function acceptObjects (){
//     for (const user of arrObjects) {
//         document.write(`<div>${user.name}: id - ${user.id}; age - ${user.age}</div>`)
//     }
//     return arrObjects;
// }
// acceptObjects (arrObjects)


//........................................................
//- створити функцію яка повертає найменьше число з масиву
// let arrOfNums = [7, 43, 8, -89, 645, 32, 14, 4, -6, -45]
//
// function calcLowestNum(array) {
//     let min = arrOfNums[0]
//     for (const num of array) {
//         if (min > num) {
//             min = num;
//         }
//     }
//     return min;
// }
// console.log(calcLowestNum(arrOfNums))
// //............................................
// // the same function for the highest num
//
// function calcHighestNum(array) {
//     let max = arrOfNums[0]
//     for (const num of array) {
//         if (max < num) {
//             max = num;
//         }
//     }
//     return max;
// }
// console.log(calcHighestNum(arrOfNums))
//

//....................................................................
//- створити функцію sum(arr)яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
// let arrOfNums = [-7, 43, 0, 8, 89, 645, 32, 14, 5, 6, 45]
//
// function sumOfNum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//          sum = sum+array[i]
//     }
//     return sum
// }
//
// console.log(sumOfNum(arrOfNums))

//,................................................
//- створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відаовідних індексах

// function swap(arr, index1, index2) {
//     num1 = arr[index1];
//     num2 = arr[index2];
//     arr[index1]=num2;
//     arr[index2]=num1;
// return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 2, 1));
//

//.................................................................
//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
// => 250
//
 function exchange(sumUAH, currencyValues, exchangeCurrency) {
     for (const currency of currencyValues) {
         if (currency.currency === exchangeCurrency) {
             return sumUAH / currency.value
         }
    }
 }

 let result = exchange(
     10000,
     [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}],
     'USD');
 console.log(result)
//
//

//.....................................................................
//Напишите функцию showMessage, которая будет содержать переменную message
// со значением "Привет, ". Создайте переменную userName со значением "Вася" или
// любое другое имя вначале кода за пределами функции и добавьте эту переменную
// к значению переменной message. Выведите результат в alert.

// function showMessage(userName) {
//     message = message + userName
//     return message
// }
// let message = 'sho ti,';
// let userName = 'Vasia'
// console.log(showMessage(userName))

//..................................................
//Напишите код, который создает кнопку, повешайте на нее событие onclick,
// которое при нажатии на кнопку выполняет функцию myFunction.





















