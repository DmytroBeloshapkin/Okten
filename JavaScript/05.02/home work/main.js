// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arey1 = [1,2,3,4,5];
let arey2 = ['one', 'two','three','four','five'];
let arey3 = [1,2,'three',true,false];
console.log(arey1);
console.log(arey2);
console.log(arey3);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arey4 = [prompt('Як Вас звати')];
let arey5 = [prompt('яке ваше прізвище')];
let arey6 = ('Привіт на нашому сайті '  + arey5 +' '+ arey4);
console.log(arey6);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>random text</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>random text ${i}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h1> random text </h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let ii = 0;
while (ii < 20) {
    document.write(`<h1> random text ${ii}</h1>`);
    ii++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arey7 = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)];
for (let j = 0; j < arey7.length; j++) {
    const arey7Element = arey7[j];
    console.log(arey7[j])
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arey8 = [
    'ivan',
    'petro',
    'sergiy',
    'dima',
    'marianna',
    'vitaliy',
    'juriy',
    'tanya',
    'khrystyuna',
    'tanya',
    'olya',
    'andriy'];
for (let j = 0; j < arey8.length; j++) {
    const arey8Element = arey8[j];
    console.log(arey8[j])
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arey9 = [
    1,
    5,
    4,
    6,
    'dima',
    'marianna',
    'vitaliy',
    'juriy',
    'vasil',
    true];
for (let j = 0; j < arey9.length; j++) {
    const srey9Element = arey9[j];
    console.log(arey9[j])
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arey10 = [
    1,
    5,
    100500,
    true,
    false,
    false,
    '',
    ' ',
    'vitaliy',
    'jura'
];
for (let j = 0; j < arey10.length; j++) {
    if (typeof arey10[j] === 'boolean') {
        console.log(arey10[j]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arey11 = [
    1,
    5,
    100500,
    true,
    false,
    false,
    '',
    ' ',
    'vitaliy',
    'jura'
];
for (let j = 0; j < arey11.length; j++) {
    if (typeof arey11[j] === 'number') {
        console.log(arey11[j]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arey12 = [
    1,
    5,
    100500,
    true,
    false,
    false,
    'куку',
    'ляля',
    'vitaliy',
    'jura'
];
for (let j = 0; j < arey12.length; j++) {
    if (typeof arey12[j] === 'string') {
        console.log(arey12[j]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arey13 = [];
arey13[0] = prompt('ведіть щось 1/10');
arey13[1] = prompt('ведіть щось 2/10');
arey13[2] = prompt('ведіть щось 3/10');
arey13[3] = prompt('ведіть щось 4/10');
arey13[4] = prompt('ведіть щось 5/10');
arey13[5] = prompt('ведіть щось 6/10');
arey13[6] = prompt('ведіть щось 7/10');
arey13[7] = prompt('ведіть щось 8/10');
arey13[8] = prompt('ведіть щось 9/10');
arey13[9] = prompt('ведіть щось 10/10');

for (let j = 0; j < arey13.length; j++) {
    const arey13Element = arey13[j];
    console.log(arey13[j]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

    for (let j = 0; j < 10; j++) {
    const arey13Element = arey13[j];
    console.log('поточний номер кроку: '+ j +' ')
    document.write('поточний номер кроку: '+ j +' <br>')
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    const arey13Element = arey13[j];
    console.log('поточний номер кроку: '+ j +' ')
    document.write('поточний номер кроку: '+ j +' <br>')
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j+=2) {
    const arey13Element = arey13[j];
    console.log('поточний номер кроку: '+ j +' ')
    document.write('поточний номер кроку: '+ j +' <br>')
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2 === 0) {
        const arey13Element = arey13[j];
        console.log('поточний номер кроку: '+ j +' ')
        document.write('поточний номер кроку: '+ j +' <br>')
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2 === 1) {
        const arey13Element = arey13[j];
        console.log('поточний номер кроку: '+ j +' ')
        document.write('поточний номер кроку: '+ j +' <br>')
    }
}
