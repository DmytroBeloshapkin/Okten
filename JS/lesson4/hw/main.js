// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleS (a, b) {
result = a * b * 2
    return result;
}
console.log(rectangleS(2,5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;

function circulS (r){
    result = PI * Math.pow(2, r)
    return result;
}
console.log(Math.floor(circulS(2)))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderS (h, r){
    result = 2 * PI * r * (h+r)
    return result
}
console.log(Math.floor(cylinderS(10, 5)));

// - створити функцію яка приймає масив та виводить кожен його елемент

arrey1 = [100,200,300];

function arreyOutput (arrey) {
    for (let i = 0; i < arrey.length; i++) {
        const arreyElement = arrey[i];
        return arrey;
    }
}
console.log(arreyOutput(arrey1));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraph (text){
    document.write(`<p>${text}</p>`)
}
paragraph(`нарешті запрацювало))`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function liMaker (text1, text2,text3){
    document.write(`<ul>`)
        document.write(`<li> ${text1}`)
        document.write(`<li> ${text2}`)
        document.write(`<li> ${text3}`)
    document.write(`</ul>`)
}
liMaker(`а ну ка`, `давай ка`, `працюй`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liMakerPRO (text, number){
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li> ${text}`)
    }
    document.write(`</ul>`)
}
liMakerPRO(`про програмка`, 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arreyMaker (number, string, boolean){
   document.write(`${number} ${string} ${boolean}<br>`)
}
    arreyMaker (50, 'слів', true)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function arreyObject (id,name,age){
    document.write(`id: ${id}<br>`)
    document.write(`name: ${name}<br>`)
    document.write(`sge: ${age}<br>`)
}
arreyObject (1, `Dima`, 36)
