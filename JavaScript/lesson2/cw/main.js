// - Користувач вводить або має два числа.
    // Потрібно знайти та вивести максимальне число з тих двох .
    // Також потрібно врахувати коли введені рівні числа.

// let a = prompt(`перше число`)
// let b = prompt(`друге число`)
//
// if (a < b){
//     console.log(b)
// } else if (a > b){
//     console.log(a)
// } else if (a === b){
//     console.log('рівні')
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let num = Math.floor(Math.random()*90)
if (num <20){
    console.log(`1`)
} else if (num>=21 && num <=48){
    console.log(`2`)
} else if (num >=49&& num <= 90){
    console.log(`3`)
} else {
    console.log(`error`)
}
console.log(num)


// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = Math.floor(Math.random()*11)

if (number ===10){
    console.log(`вірно`)
} else {
    console.log('не вірно')
}
    console.log(number)

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temp = Math.floor(Math.random()*30)

if (temp >= 10 && temp <=22){
    console.log(`йдемо вчитись`)
} else {
    console.log('сидимо вдома')
}
console.log(temp)


// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .


let casino = Math.floor(Math.random()*6)
console.log(casino)

switch (casino) {

    case 1:
        console.log(`Авто`);
        break;

    case 2:
        console.log(`Мото`);
        break;

    case 3:
        console.log(`Телефон`);
        break;

    case 4:
        console.log(`i`);
        break;

    case 5:
        console.log(`т.д.`);
        break;

    default:
            console.log(`error`)
}


