// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
alert('Порівняємо числа')
let number1 = prompt('Запишіть число')
let number2 = prompt('Запишіть ще одне число')
if (number1 > number2) {
    console.log(number1)
} else if (number1 < number2) {
    console.log(number2)
} else if (number1 === number2) {
    console.log('числа однакові')
}
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let numberHome = prompt('Ведіть номер квартири 1-90')
if (numberHome > 0 && numberHome <= 20) {
    console.log('Підїзд №1')
} else if (numberHome > 21 && numberHome <= 48) {
    console.log('Підїзд №2')
} else if (numberHome > 49 && numberHome <= 90) {
    console.log('Підїзд №3')
} else if (numberHome > 90) {
    console.log('тут немає такої квартири')
} else {
    console.log('error')
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = prompt('Ведіть число 10')
if (number == 10) {
    console.log('ВІРНО')
} else {
    console.log('НЕВІРНО')
}

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = prompt('Ведіть str, boolean, arrey') // це не зміг запустити
let x = [1,2,3];
if (typeof x === "number") {
    console.log('1')
} else if (typeof x === "string") {
    console.log('2')
} else if (typeof x === "object"){
    console.log('3')
} else {
    console.log('error')
}

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let okten = prompt('Скільки градусів на дворі')
if (okten >= 10 && okten <= 22) {
    console.log('Ми йдемо ВЧИТИСЯ!')
} else {
    console.log('Сиди вдома і дивись лекцію в youtube')
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let prizes = prompt ('Ведіть число від 1 до 5, щоб отримати приз')
switch (prizes) {
    case '1':
        console.log('автомобіль');
        break;
    case '2':
        console.log('мотоцикл');
        break;
    case '3':
        console.log('телефон');
        break;
    case '4':
        console.log('губозакатуюча машинка');
        break;
    case '5':
        console.log('додатковий курс Okten');
        break;
    default:
        console.log('error, було ж написано від 1 до 5');
}