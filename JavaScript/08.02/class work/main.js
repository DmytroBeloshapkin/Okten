// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minThreeNumbers (a, b, c)
{
    if (a < b &&  a < c) {
    console.log(a);
    document.write(`найменше число ${a} <br>`);

    } else if (b < a &&  b < c) {
    console.log(b);
    document.write(`найменше число ${b}<br>`);

    } else if  (c < a &&  c < b) {
     console.log(c);
     document.write(`найменше число ${c}<br>`);

    } else {
     console.log('error');
     document.write('error <br>')
     }
}
minThreeNumbers (
    prompt(`Шукаємо найменше число, ведіть число а`),
    prompt(`ведіть число б`),
    prompt(`ведіть чи сло с`)
);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxThreeNumbers (a, b, c)
{
    if (a > b &&  a > c) {
        console.log(a);
        document.write(`найбільше число ${a}<br>`);

    } else if (b > a &&  b > c) {
        console.log(b);
        document.write(`найбільше число ${b}<br>`);

    } else if  (c > a &&  c > b) {
        console.log(c);
        document.write(`найбільше число ${c}<br>`);

    } else {
        console.log('error');
        document.write('error <br>')
    }
}
maxThreeNumbers (
    prompt(`Шукаємо найбільше число, ведіть число а`),
    prompt(`ведіть число б`),
    prompt(`ведіть число с`)
);

// - створити функцію яка повертає найбільше число з масиву
let arrey1 = [99, 5, 10, 15, 20, 25, 30];

function maxNumber (arrey){

    let max = arrey[0];
    for (let element of arrey) {
        if (element>max){
            max = element;
        }
    }
    return max;
}
console.log (maxNumber(arrey1));
document.write(`я не розумію логіки побудови цього коду((( передивився лекції вже по 2 рази<br>`)

// - створити функцію яка повертає найменьше число з масиву
function minNumber(arrey){

    let min = arrey[0];
    for (let element of arrey) {
        if (element<min){
            min = element;
        }
    }
    return min;
}

console.log(minNumber(arrey1))
document.write(`я не розумію логіки побудови цього коду((( передивився лекції вже по 2 рази<br>`)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13
let arrey = [5,9,10]

function sumElement (arrey){

    let sum = 0;
    for (const number of arrey) {
    sum = number+sum;
}
return sum;
}

console.log(sumElement(arrey))

// не розумію(


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arrey10 = [100, 5, 10, 15, 20, 25, 30];

function arithmetic (arrey1){
    let result = 0;
    for (let check of arrey1) {
        result = (result + check);
    }
    return result/arrey1.length;
}
console.log(Math.floor (arithmetic(arrey10)));
document.write(`Середнє арефметичне наших чисел: ${Math.floor (arithmetic(arrey10))}<br>`);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);




// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.






// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.




// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//ritar