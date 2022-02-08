// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// S=a*b
let a = 10;
let b = 20;

function areaRectangle (a, b) {
    let rectangle = a * b;
    return rectangle;
}
console.log(areaRectangle(a, b));
document.write(`Площа прямокутника ` + areaRectangle(a, b));
document.write('<br>')

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S = πr2
const PI = 3.1415926535;
let r = 5;

function areaCircle (PI, r) {
    let circle = PI * (r*2);
    return circle;
}
console.log(areaCircle (PI, r));
document.write(`Площа круга ` + areaCircle (PI, r));
document.write('<br>')

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// S= 2πRH
let h = 5;

function areaCylinder (PI, r, h) {
    let cylinder = (2 * PI * r * h);
    return cylinder;
    }
console.log(areaCylinder (PI, r, h));
document.write(`Площа бічної поверхні циліндра ` + areaCylinder (PI, r, h));
document.write('<br>')


// - створити функцію яка приймає масив та виводить кожен його елемент
let arrey = ['dima', 'marianna', 'vitaliy', 'jura'];
let arrey2 = ['Dima', 'Marianna', 'Vitaliy', 'Jura'];

function arreyElements (arrey) {
    for (let i = 0; i < arrey.length; i++) {
        console.log(arrey[i]);
        document.write(arrey[i] + '<br>');
    }
}

arreyElements (arrey);
arreyElements (arrey2);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphMaker (txt){
    document.write(`<p>${txt}</p> <br>`);
}

paragraphMaker ('Hello Mentor');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulCreator (text){
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

ulCreator (`Hello Mentor, test 2`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function ulCreatorArgumet (text, number){
    document.write(`<ul>`);

    for (let i = 0; i < number; i++) {
    document.write(`<li>${text}</li>`);
    }

    document.write(`</ul>`);
}

ulCreatorArgumet (`Hello Mentor, test 3`, 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrey3 = ['Dima', 'Marianna', 'Vitaliy', 'Jura', 100500, 500100, true, false];

function arreyBilder (arrey) {

    document.write(`<ul>`)
    for (let i = 0; i < arrey.length; i++) {
    document.write(`<li>${arrey[i]}</li>`)
    }
    document.write(`</ul>`)
}

arreyBilder (arrey3)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let Myfamily = [

    {
    "user": '1',
    "id": 'Beloshapkin',
    "name": 'Dima',
    "age": '36'
    },

    {
    "user": '2',
    "id": 'Beloshapkina',
    "name": 'Marianna',
    "age": '37'
    },

    {
    "user": '3',
    "id": 'Beloshapkin',
    "name": 'Vitaliy',
    "age": '9'
    },

    {
    "user": '4',
    "id": 'Beloshapkin',
    "name": 'Juriy',
    "age": '4'
    }
]

// for (let i = 0; i < arreyMyfamily.length; i++) {
//     const arreyMyfamilyElement = arreyMyfamily[i];
//     document.write(`<div>`);
//     document.write(`<p>${arreyMyfamily[i].id},${arreyMyfamily[i].name},${arreyMyfamily[i].age}</p>`);
//     document.write(`</div>`);
// }

function arreyFamily (arrey) {
    for (let i = 0; i < arrey.length; i++) {
        const arreyElement = arrey[i];
        document.write(`<div>`);
        document.write(`<p>ID: ${arrey[i].id},<br>USER NAME: ${arrey[i].name},<br>USER AGE: ${arrey[i].age}</p>`);
        document.write(`</div>`);
    }
}

arreyFamily(Myfamily);


