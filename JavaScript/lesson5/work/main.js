// let arr = [100, 200, 300];
// let ri = arr.length;
// let arrrevers = []
// for (const number of arr) {
//     console.log(ri);
//     ri--
//     arrrevers[ri] = number
// }
//
// console.log(arrrevers)
//
// for (let i = 0, ri=arr.length-1;
//      i < arr.length;
//      i++, r--) {
//     const arrElement = arr[i];
// }

// let a = 100;
// let b = a;
// b = 200;
//
// let obj1 = {name: 'vasia'};
//
// let obj2 = obj1;
// console.log(obj2);
// obj2.name = 'kokos';
//
// console.log(obj1);
// console.log(obj2);

// function foobar (){
//     arr = [100,20,30]
// }
// foobar();
// console.log(arr);

// console.log(calculator2(5, 10));
//
// let calculator = function (a, b) {
//     return a + b;
// }
// console.log(calculator(5, 10));
//
// function calculator2(a, b) {
//     return a * b;
// }

// let calculator = (a, b) => {return a + b};
// let calculator = (a, b) => a + b;
// console.log(calculator(10, 20));
// console.log(calculator(150, 200));
//
// let calculatorArrow = (a, b) => {
//     let result = a + b;
//     console.log(result);
//     return result
// }
//
// calculatorArrow(20, 50);

// (function(arg) {
//     console.log(`йопта, ${arg}`)
// }(`куку`));

// function asdqwe(a, b, fn) {
//     console.log(a);
//     console.log(b);
//     // console.log(fn);
//     fn();
// }
//
// asdqwe(10, 20, function () {
//     console.log('hello')
// });

// let users = [
//     {id: 1, name: 'Dima', age: 36, status: true},
//     {id: 2, name: 'Marianna', age: 37, status: true},
//     {id: 3, name: 'Vitaliy', age: 8, status: false},
//     {id: 4, name: 'Jura', age: 4, status: false},
//     {id: 5, name: 'Tetiana', age: 66, status: false},
//     {id: 6, name: 'Olya', age: 58, status: false},
//     {id: 7, name: 'Vasul', age: 32, status: true},
//     {id: 8, name: 'Khristina', age: 35, status: true},
//     {id: 9, name: 'Oleksandr', age: 5, status: false},
//     {id: 10, name: 'Anna', age: 2, status: false}
// ];
//
// // for (const user of users) {
// //     if (user.status)
// //         console.log(user)
// // }
//
// console.log(users.filter(function (user) {return !user.status}));

// function calculatorCallBack(a, b, action) {
//     if (action === '*') {
//         return a * b;
//     } else if (action === '+') {
//         return a + b;
//     } else if (action==='pow'){
//         return Math.pow(a,b)
//     }
// }
//
// console.log(calculatorCallBack(3, 2, 'pow'));

// function calculatorPRO(a, b, fn) {return fn (a, b)}
//
// console.log(calculatorPRO(10, 20, function (a, b) {return a + b}));
//
// console.log(calculatorPRO(10, 20, function (a, b) {return a * b}));
//
// console.log(calculatorPRO(5, 10, function (a, b) {return Math.pow(a, b)}));

// function recursion(){
//     console.log('hello')
//     recursion()
// }

// function cycle(counter){
//     console.log(counter);
//     counter++;
//     if(counter>=100){
//         return;
//     } else {
//
//     }
//     cycle(counter)
// }
// cycle(0);