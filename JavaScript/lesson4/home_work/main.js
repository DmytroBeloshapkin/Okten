// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function triangleSquare(a, b) {
    let resutl = a * b;
    return resutl;
}

console.log(triangleSquare(5, 10));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function radiusСircle(r) {
    const PI = 3.14;
    let result = PI * Math.pow(r, 2);
    return result;
}

console.log(radiusСircle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderАrea(h, r) {
    const PI = 3.14;
    let result = 2 * PI * r * h
    return result
}

console.log(cylinderАrea(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
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

function arreyAcept(arr) {
    for (const user of arr) {
        console.log(user)
    }
}

arreyAcept(users)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphMaker(txt) {
    document.write(`<p>${txt}</p>`)
}

paragraphMaker(`куку`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulMaker(txt1, txt2, txt3) {
    document.write(`<ul>`)
    document.write(`<li>${txt1}`)
    document.write(`<li>${txt2}`)
    document.write(`<li>${txt3}`)
    document.write(`</ul>`)
}

ulMaker(`куку`, `привіт`, `працює`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulMakerPro(txt, length) {

    document.write(`<ul>`)

    for (let i = 0; i < length; i++) {
        const txtElement = txt[i];
        document.write(`<li>${txt}`)
    }

    document.write(`</ul>`)
}

ulMakerPro(`тест`, 7)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrMakerLow(arr) {
    document.write(`<ul>`)
    for (const user of arr) {
        document.write(`<li>${user.name}`)
    }
    document.write(`</ul>`)
}

arrMakerLow(users)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrMakerPro(arr) {
    for (const arrElement of arr) {
        document.write(`<div>`)
        document.write(`<li>${arrElement.id}</li>`)
        document.write(`<li>${arrElement.name}</li>`)
        document.write(`<li>${arrElement.age}</li>`)
        document.write(`</div>`)
        document.write(`<hr>`)
    }
}

arrMakerPro(users)


// - створити функцію яка повертає найменьше число з масиву

let arreyMinMax = [60, 70, 80, 90, 10, 20, 30, 40, 50]

function arrayMin(array) {
    let min = array[0];
    for (const arreyElement of array) {
        if(arreyElement < min){
            min = arreyElement;
        }
    }
    return min;
}
console.log(arrayMin(arreyMinMax));

function arreyMax(array){
    let max = array[0];
    for (const arreyElement of array) {
        if(arreyElement>max){
            max = arreyElement;
        }
    }
    return max
}

console.log(arreyMax(arreyMinMax));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function arreyAdd (array){
    let start = 0;
    for (const arrayElement of array) {
        start = arrayElement + start;
    }
    return start
}

console.log(arreyAdd(arreyMinMax));


