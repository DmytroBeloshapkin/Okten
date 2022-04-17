// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello'
let b = 'owu'
let c = 'com'
let d = 'ua'
let q = 'кукуруку'

console.log(a,b,c,d);
document.write (a, ' ', b, ' ', c, ' ', d);

console.log(q);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let e = 'привіт'
let f = 'okten'
let g = 'куку'

console.log(e,f,g)
document.write(e, ' ',f, ' ',g)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Дмитро'
let middleName = 'Бєлошапкін'
let lastName = 'Анатолійович'

let res = firstName + middleName + lastName
console.log(res)


// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let name = prompt('name')
let name2 = prompt('first_name')
let age = prompt('вік')

console.log(`Вітаю ${name} ${name2}. Тобі ${age} років`)



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let aa = 100;
let bb = '100';
let cc = true;

console.log(typeof aa)
console.log(typeof bb)
console.log(typeof cc)




// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>");