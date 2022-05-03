// Все стірлочними!!!!!!!!!
let arrey = [100, 10, 20, 5, 30, 40, 50];
let arrey2 = [10, 50];
let users = [
    {id: 1, name: 'Dima', age: 36, status: true},
    {id: 2, name: 'Marianna', age: 37, status: true},
    {id: 3, name: 'Vitaliy', age: 8, status: false},
    {id: 4, name: 'Jura', age: 4, status: false},
    {id: 5, name: 'Tetiana', age: 66, status: false},
    {id: 6, name: 'Olya', age: 58, status: false},
    {id: 7, name: 'Vasul', age: 32, status: true},
    {id: 8, name: 'Khristina', age: 35, status: true},
    {id: 9, name: 'Oleksandr', age: 5, status: false},
    {id: 10, name: 'Anna', age: 2, status: false}
];

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let average = (arr) => {
//     let start = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         start = start + arrElement
//     }
//     return start / arr.length
// }
// console.log(average(arrey));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minMax = (arr) => {
//     let min = arr[0];
//     let max = arr[0];
//
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement
//         }
//     }
//     console.log(min);
//
//     for (const arrElement of arr) {
//         if (arrElement > max) {
//             max = arrElement
//         }
//     }
//     return max
// }
// console.log(minMax(arrey));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomArrey = (arr) => {
//     arr.push(Math.floor(Math.random() * 100))
//     arr.push(Math.round(Math.random() * 100));
//     return arr
// }
// console.log(randomArrey(arrey));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arrRandom = (limit) => {
//     let random = [];
//     for (let i = 0; i < limit; i++) {
//     random.push(Math.round(Math.random() * 100))
//     }
//     return random
// }
//
// console.log(arrRandom(10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reverArrey = (arr) => {
//     let newArr = [];
//     for (let i = arr.length-1; i >= 0; i--) {
//         const newArrElement = arr[i];
//         newArr.push(newArrElement)
//     }
//     return newArr
// }
// console.log(reverArrey(arrey));


// Переробити на стрілочні функції з попереднього дз

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let triangleSquare = (a, b) => a * b
// console.log(triangleSquare(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let radiusСircle = (r) => 3.14 * Math.pow(r, 2);
// console.log(radiusСircle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinderАrea = (h, r) =>2 * 3.14 * r * h
// console.log(cylinderАrea(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arreyAcept = (arr) => {
//     for (const user of arr) {
//     console.log(user)
//     }
// }
// arreyAcept(arrey)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraphMaker = (txt) => document.write(`<p>${txt}</p>`)
// paragraphMaker(`куку йопта`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulMaker = (txt1, txt2, txt3) => {
//     document.write(`<ul>`)
//     document.write(`<li>${txt1}`)
//     document.write(`<li>${txt2}`)
//     document.write(`<li>${txt3}`)
//     document.write(`</ul>`)
// }
// ulMaker(`куку`, `привіт`, `працює`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulMakerPro = (txt, length) => {
//
//     document.write(`<ul>`)
//
//     for (let i = 0; i < length; i++) {
//         const txtElement = txt[i];
//         document.write(`<li>${txt}`)
//     }
//
//     document.write(`</ul>`)
// }
// ulMakerPro(`тест`, 70)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrMakerLow = (arr) => {
//     document.write(`<ul>`)
//     for (const user of arr) {
//         document.write(`<li>${user}`)
//     }
//     document.write(`</ul>`)
// }
// arrMakerLow(arrey)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrMakerPro = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>`)
//         document.write(`<li>${arrElement.id}</li>`)
//         document.write(`<li>${arrElement.name}</li>`)
//         document.write(`<li>${arrElement.age}</li>`)
//         document.write(`</div>`)
//         document.write(`<hr>`)
//     }
// }
// arrMakerPro(users)

// - створити функцію яка повертає найменьше число з масиву
// let arrayMin = (array) => {
//     let min = array[0];
//     for (const arreyElement of array) {
//         if(arreyElement < min){
//             min = arreyElement;
//         }
//     }
//     return min;
// }
// console.log(arrayMin(arrey));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arreyAdd = (array) => {
//     let start = 0;
//     for (const arrayElement of array) {
//         start = arrayElement + start;
//     }
//     return start
// }
// console.log(arreyAdd(arrey));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let change = (arr) => {
//     arr.splice(0, 2, arr[1],arr[0])
//     return arr
// }
//
// console.log(arrey2);
// console.log(change(arrey2));


