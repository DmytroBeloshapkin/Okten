// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника
// S = a · b
let rectangleS = (a , b) => (a * b);

console.log(rectangleS(5,10));

// - створити функцію яка обчислює та повертає площу кола
// S = π r2
const PI = 3.14

let circulS = (r) => PI * Math.pow(2, r);
console.log(circulS(2))

// - створити функцію яка обчислює та повертає площу циліндру
// S = 2 π R h - площа бокової поверхні
// S = 2 π R (R + h) - площа повноъ поверхні

let cylinder = (R, h) => (2 * PI * R * h);
console.log(cylinder(5, 10))

let cylinderFull = (R, h) => (2 * PI * R * (R + h))
console.log(cylinderFull(5, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrey1 = [1,2,3,5,12050, `текст-тест`];

let arreyAccept = (arrey) => {
    for (let i = 0; i < arrey.length; i++){
    document.write(arrey[i], ` `);
    }
}
arreyAccept(arrey1);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraphMaker  = (text) => {
    document.write(`<p>${text}</p>`)
}

paragraphMaker (`перевірка paragraphMaker`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let liMaker = (text) => {
    document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write(`</ul>`)
}

liMaker(`тест liMaker`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let liMarekPRO = (text, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++)
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`)
}

liMarekPRO(`тест liMarekPRO`, 15 );


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listMaker = (arrey) => {
        document.write(`<ul>`);
            for (let i = 0; i < arrey.length; i++) {
            document.write(`<li>${arrey[i]}</li>`);
    }
        document.write(`</ul>`);
}

listMaker (arrey1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок
let myfamily = [

    {
        user: 1,
        id: 'Beloshapkin',
        name: 'Dima',
        age: 36
    },

    {
        user: 2,
        id: 'Beloshapkina',
        name: 'Marianna',
        age: 37
    },

    {
        user: 3,
        id: 'Beloshapkin',
        name: 'Vitaliy',
        age: 9
    },

    {
        user: 4,
        id: 'Beloshapkin',
        name: 'Juriy',
        age: 4
    }
]


let arreyBilder = (arrey) => {
for (let i = 0; i < arrey.length; i++) {
    const myfamilyElement = arrey[i];
    document.write(`<ul>`);
        document.write(`<li>user: ${myfamilyElement.user}</li>`)
        document.write(`<li>id: ${myfamilyElement.id}</li>`)
        document.write(`<li>name: ${myfamilyElement.name}</li>`)
        document.write(`<li>age: ${myfamilyElement.age}</li>`)
    document.write(`</ul>`);
    }
}

arreyBilder(myfamily);