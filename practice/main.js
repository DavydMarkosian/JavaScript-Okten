// function writer(title, price, descr) {
//     document.write(`
// <div class="box">
//     <h2>${title} ${price}</h2>
//     <p>${descr}</p>
// </div>
// `);
// }
//
// writer('milk', 121, 'fresh milk');
// document.write(`<hr>`);
// writer('bread', 43, 'white');
// document.write(`<hr>`);
// writer('water', 12, 'spring water');
// document.write(`<hr>`);
// writer('candy', 21, 'roshen');
// document.write(`<hr>`);
// writer('cheese', 50, 'cheddar');
// document.write(`<hr>`);
// writer('sausage', 81, 'krakiv');
// document.write(`<hr>`);
//
//
// //..............................................................................
//function return


// function calc(a, b) {
//     let res = a + b;
//     console.log(res);
//     return res;
// }
//
// calc(7, 3)
// //......................................................
// taxes (pdv,warTax)
// function percentage(sum,per){
//     let res = sum/100*per;
//     console.log(res);
//     return res;
// }
// percentage(1000,20)
// function percentage(sum, per) {
//     return sum / 100 * per;
// }
//
// function tax(sum) {
//     return sum - percentage(sum, 20) - percentage(sum, 1.5);
// }
//
// let fin = tax(1000);
// console.log(fin);
//..................................

//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
//
// function userFilter (users) {
//     let filteredUsers = [];
//     for (const user of users) {
//         if (user.age === 30) {
//             filteredUsers.push(user)
//         }
//     }
//     return filteredUsers;
// }
// let filter = userFilter(users);
// console.log(filter)














