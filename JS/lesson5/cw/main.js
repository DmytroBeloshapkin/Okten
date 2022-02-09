// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let minNumber = (a,b,c) => {
    if (a<b && a<c){
        document.write(`<p>Мінімальне число ${a}</p>`)
    } else if (b<a && b<c) {
        document.write(`<p>Мінімальне число ${b}</p>`)
    } else if (c<a && c<b) {
        document.write(`<p>Мінімальне число ${c}</p>`)
    } else {
        document.write(`<p>Помилка вводу даних</p>`)
    }
}
minNumber( 10, 20,3)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let maxNumber = (a,b,c) => {
    if (a>b && a>c){
        document.write(`<p>Максимальне число ${a}</p>`)
    } else if (b>a && b>c) {
        document.write(`<p>Максимальне число ${b}</p>`)
    } else if (c>a && c>b) {
        document.write(`<p>Максимальне число ${c}</p>`)
    } else {
        document.write(`<p>Помилка вводу даних</p>`)
    }
}
maxNumber( 1, 2,3)

// - створити функцію яка повертає найбільше число з масиву
let arreyTest = [1000, 50, 1500, 5, 991, 0]

let arrayMax = (array)  => {
    let max = array[0];
    for (const arreyElement of array) {
        if(arreyElement > max){
            max = arreyElement;
        }
    }
    return max;
}
document.write(`<p>Найбільше число масиву: ${arrayMax(arreyTest)}<p>`)

// - створити функцію яка повертає найменьше число з масиву
let arrayMin = (array) => {
    let min = array[0];
    for (const arreyElement of array) {
        if(arreyElement < min){
            min = arreyElement;
        }
    }
    return min;
}
document.write(`<p>Найменше число масиву: ${arrayMin(arreyTest)}<p>`)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sumArrey = (arrey) => {
    let sum = 0;
    for (const arreyElement of arrey) {
        sum = arreyElement + sum;
    }
    return sum;
}
document.write(`<p> Сума числе масиву ${sumArrey(arreyTest)} </p>`)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticArrey (arrey) {
    let sum = 0;
    for (const arreyElement of arrey) {
        sum = arreyElement + sum / arrey.length;
    }
    return sum;
}
document.write(`<p> Середнє арифметичне число масиву  ${Math.floor(arithmeticArrey(arreyTest))} </p>`)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);










// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let arreyRandom = (length) =>{




}


arreyRandom(25);







// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.









// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].