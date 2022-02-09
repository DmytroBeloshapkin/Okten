// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
const PI = 3.14
let i = 2.7;
let j = 16;
let k = true;
let l = false;

console.log(a, b, c, d, e, f ,g ,h ,PI,i, j, k ,l);
document.write(a, b, c, d, e, f ,g ,h ,PI,i, j, k ,l);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let dima = 'Dima';
let marianna = 'Marianna'
console.log(dima, marianna);
document.write(dima, marianna)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Dima ';
let middleName = 'Beloshapkin ';
let lastName = 'Anatoliyovish ';

let result = (firstName + middleName + lastName);
let result2 = (`${firstName} ${middleName} ${lastName}`)

console.log(result);
console.log(result2)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt('ваше ім’я')
let lastNames = prompt('ваше прізвище')
let age = prompt('ваш вік')

let result3 = (`Вітаю ${name} ${lastNames}. Тобі ${age} років".`)

console.log(result3)

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let aa = 100;
let bb = '100';
let cc = true;

console.log(typeof aa);
console.log(typeof bb);
console.log(typeof cc);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
5 < 6 // true
5 > 6 // false
5 === 6 // false
5 >= 6 // false
10 === 10 // true
10 == 10 // true
10 !== 10 // false
10 < 10 // false
10 > 10 // false
123 === '123' // false
123 == '123' // true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
let q = 5;
document.write(str + q + "<br/>"); // стрінг + цифра----205
document.write(str - q + "<br/>"); // 15
document.write(str * "2" + "<br/>"); // 40
document.write(str / 2 + "<br/>"); // 10