//first part of  task--------------------------
console.log('1. Створити змінні. Присвоїти кожному з них значення: \'hello\',\'owu\',\'com\', \'ua\', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.\n' +
    'Вивести кожну змінну за допомогою: console.log')
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
const Pi = 3.14;
let i = 2.7;
let j = 16;
let k = true;
let l = false;
console.log('1:',a,b,c,d,e,f,g,h,Pi,i,j,k,l);

//second part of task--------------------------
console.log('2.Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З\'єднати їх в одну змінну person (Не об\'єкт, просто за допомоги конкатенації)')
let firstName = 'David ';
let middleName = 'Markosian ';
let lastName = 'Robertovich';
let person = (firstName+middleName+lastName);
console.log('2:',person);

//third part of task----------------------------
console.log('3.За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.let a = 100; let b = \'100\'; let c = true;');
 a = 100;
 b = '100';
 c = true;
console.log('3:');
console.log(typeof a);
console.log(typeof b);
console.log(typeof c); 