// 1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// 2. Вивести кожну змінну за допомогою: console.log , alert, document.write
let task = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false];
console.log(task)
alert(task)
document.write(task)

// 3. Переприсвоїти кожній змінній з завдання значення на довільне.
// 4. Вивести кожну змінну за допомогою: console.log , alert, document.write
let message = ['Я нічого не розумію в тому JS <br/>'];
console.log(message);
alert(message);
document.write(message);

// 5.Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person.
// (Не об'єкт)        //тут щось не так!!!!!!!!!!!!!
let person = [
    firstName = 'Дмитро',
    middleName = 'Бєлошапкін',
    lastName = 'Анатолійович',
]
console.log(person)

// 6. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// 7. Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt("Як Вас звати?");
let lastname = prompt('Як Вас по-батькові?');
let age = prompt('Який Ваш вік?');

alert (`'Вітаю' ${name} ${lastname}. 'Тобі' ${age} 'років'`);

// 8. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// 9. let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)

// 10. Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// 11. В однакових виразах не використовувати однакові оператори!!!
console.log(5 < 6)
console.log(5 === 6)
console.log(5 >= 6)
console.log(5 > 6)
console.log(10 === 10)
console.log(10 >= 10)
console.log(10 > 10)
console.log(10 < 10)
console.log(10 !== 10)
console.log(123 === '123')
console.log(123 == '123')


// 24. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let A = 5;
document.write(str + A + "<br/>");
document.write(str - A + "<br/>");
document.write(str * "2" + "<br/>");
document.write(str / 2 + "<br/>");
//
// /!* + робить з str -numbert *!/*/
