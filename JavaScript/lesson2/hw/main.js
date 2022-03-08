// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = Math.floor(Math.random()*60)

if (time <= 15) {
    console.log('перша чверть')
} else if (time >= 16 && time <= 30) {
    console.log('друга чверть')
} else if (time >= 31 && time <= 45) {
    console.log('третя чверть')
} else if (time >= 46 && time <= 60) {
    console.log('четверта чверть')
} else {
    console.log('error')
}

console.log(time)

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число(у першу, другу чи третю).
let day = Math.floor(Math.random()*31)
if (day < 10){
    console.log('перша')
} else if (day >=11 && day <=20) {
    console.log('друга')
} else if (day >=21 && day <=31) {
    console.log('третя')
} else {
    console.log('error')
}

console.log(day)

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = true
if (test === true) {
    console.log('вірно')
} else {
    console.log('не вірно')
}

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = -3
if (a === 0){
    console.log('не вірно')
} else {
    console.log('вірно')
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
switch (prompt(`який день цікавить`)){

    case 'понеділок':
    console.log('JS');
    break;

    case 'вівторок':
        console.log('практика');
        break;

    case 'середа':
        console.log('JS');
        break;

    case 'четвер':
        console.log('практика');
        break;

    case 'пятниця':
        console.log('JS');
        break;

    case 'субота':
        console.log('англійська');
        break;

    case 'неділя':
        console.log('вихідний');
        break;

    default:
        console.log('error');
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let age = prompt('рік')

if (age % 4 === 0){
    console.log('високосний')
} else {
    console.log('нормальний')
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let js = prompt('Яка «офіційна» назва JavaScript?')
if (js === `ECMAScript`){
    console.log(`Правильно`)
} else {
    console.log('Не знаєте? ECMAScript!')
}