// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random() * 60);

    if (time <= 15) {
    console.log('перша черга')
    } else if (time >= 16 && time <= 30){
    console.log('друга чегра')
    } else if (time >=31 && time <= 45){
    console.log('третя частина')
    } else if (time >=46 && time <= 60){
    console.log('четверта частина')
    } else {
    console.log('помилка із Math.random')
    }

    console.log(time)

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.floor(Math.random() * 31)

    if (day <= 10) {
    console.log('перша декада')
    } else if (day >= 11 && day <= 20){
        console.log('друга декада')
    } else if (day >= 21 && day <= 31){
        console.log('третя декада')
    } else {
        console.log('помилка із Math.random')
    }
console.log(day)

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = 'true';
    if (test === 'true') {
        console.log('Вірно')
    } else {
        console.log('Неправильно')
    }
console.log(test)

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 0;
    if (a !== 0){
        console.log('Вірно')
    } else {
        console.log('Невірно')
    }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let week = 'куку';
switch (week) {
    case 'monday':
        console.log('lesson JS');
        break;
    case 'tuesday':
        console.log('practikal JS');
        break;
    case 'wednesday':
        console.log('lesson JS');
        break;
    case 'thursday':
        console.log('practikal JS');
        break;
    case 'friday':
        console.log('lesson JS');
        break;
    case 'saturday':
        console.log('lesson English');
        break;
    case 'sunday':
        console.log('weekend');
        break;
    default:
        console.log('error')
}
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = prompt('Рік вашого народження');
if (year % 4 ===0) {
    console.log('Високосний рік')
} else {
    console.log('Звичайний рік')
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let js = prompt('Яка «офіційна» назва JavaScript?')

if (js === 'ECMAScript') {
    console.log('Правильно')
} else {
    console.log('Не знаєте? ECMAScript!')
}