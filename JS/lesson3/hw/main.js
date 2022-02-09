// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let num = [1,2,3,4,5];
let str = ['one', 'two','three','four','five'];
let obj = [1,2,3,4,5, 'one', 'two','three','four','five', true];

console.log(num);
console.log(str);
console.log(obj);
console.log(num, str, obj);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let zero = [];
zero [0] = 10
zero [1] = 20
zero [2] = 30
zero [3] = 40
zero [4] = 50

console.log(zero);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {     // i початковий індекс, і<10 кількість повторів, і++ - крок кожен наступний
document.write(`<div>'random text'</div>`)
}

for (let i = 0; i < zero.length; i++) {
    document.write(`<div>${zero[i]}</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>довільний текст${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0
while (i < 20){
    document.write(`<h2>довільний текст в середині</h2>`)
    i++
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let ii = 0
while (ii < 20){
    document.write(`<h2>довільний текст в середині ${ii}</h2>`)
    ii++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arreyNum = [10,20,30,40,50,60,70,80,90,100];
for (let i = 0; i < arreyNum.length; i++) {
    console.log(arreyNum[i])
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arreyStr = ['one','two','three','four','five','six','seven','eight','nine','ten']
for (let i = 0; i < arreyStr.length; i++) {
    console.log(arreyStr[i]);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arreyRandom = ['one','two','three','four','five',60,70,80,90,100];
for (let i = 0; i < arreyRandom.length; i++) {
    console.log(arreyRandom[i])
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let arreyBoolin = ['one','two','three','four', 60, 70, 80, 90, true, false];
for (let i = 0; i < arreyBoolin.length; i++) {
    const arreyBoolinElement = arreyBoolin[i];
    if (typeof arreyBoolinElement === `boolean`){
        console.log(arreyBoolinElement)
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
for (let i = 0; i < arreyBoolin.length; i++) {
    const arreyBoolinElement = arreyBoolin[i];
    if (typeof arreyBoolinElement === `number`)
        console.log(arreyBoolinElement)
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
for (let i = 0; i < arreyBoolin.length; i++) {
    const arreyBoolinElement = arreyBoolin[i];
    if (typeof arreyBoolinElement === `string`)
        console.log(arreyBoolinElement)
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arreyNull = [];
arreyNull[0] = 1
arreyNull[1] = `two`
arreyNull[2] = 150
arreyNull[3] = true
arreyNull[4] = false
arreyNull[5] = `zero`

for (let i = 0; i < arreyNull.length; i++) {
    const arreyNullElement = arreyNull[i];
    console.log(arreyNullElement)
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i)
    }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i+=2) {
    console.log(i)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i%2 ===0)
    console.log(i)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i%2 !==0)
        console.log(i)
}