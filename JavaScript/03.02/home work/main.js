// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('Ведыть число від 0 до 59');
if (time >= 1 && time <=14){
console.log('I чверть');
} else if (time >=15 && time <=30){
console.log('II чверть');
} else if (time >=31 && time <=45){
console.log('III чверть');
} else if (time >=46 && time <=60){
console.log('IV чверть');
} else {
console.log('error');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Ведыть число від 1 до 31')
if (day >= 0 && day <= 10) {
console.log('I половина місяця')
} else if (day >= 11 && day <= 20) {
console.log('II половина місяця')
} else if (day >= 21 && day <= 31) {
console.log('III половина місяця')
} else {
console.log('error')
}

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = prompt('test 1: виведіть слово "true" для перевірки коду');
if (test === 'true') {
console.log('Вірно')
} else {
console.log('Неправильно')
}

let test2 = prompt('test 2: виведіть слово  "true" для перевірки коду (свіч)');
switch (test2) {
case 'true':
    console.log('Вірно')
    break;
default:
    console.log('Неправильно')
}

let test3 = prompt('test 3: виведіть будь що для перевірки коду (тернарка)');
test3 = 'true' ? console.log('Вірно') : console.log('Неправильно');
//розібратись


// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('Ведіть число 1, 0, -3')
if (a !== 0) {
console.log('Вірно')
} else {
console.log('Невірно')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let days = prompt ('Ведіть день тижня, що цікавить Вас укр.мовою')
switch (days) {
    case 'понеділок':
        console.log('лекція з JS');
        break;
    case 'вівторок':
        console.log('практика з JS');
        break;
    case 'середа':
        console.log('лекція з JS');
        break;
    case 'четвер':
        console.log('практика з JS');
        break;
    case 'п’ятниця':
        console.log('лекція з JS');
        break;
    case 'субота':
        console.log('лекція з English');
        break;
    case 'неділя':
        console.log('практика з JS і відпочинок');
        break;
    default:
        console.log('error, ведіть текст укр.мовою');
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.


let years = prompt('Ведіть рік, який вас цікавить')
if (years % 4 === 0) {
    console.log('Високосний рік')
} else {
    console.log('Звичайний рік')
}
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let JS = prompt('Яка «офіційна» назва JavaScript?');
if (JS === 'ECMAScript'){
    console.log('Правильно')
} else {
    console.log('Не знаєте? ECMAScript!')
}
