// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let one = 'hello world';
console.log(one.length);
document.write(`<div>Довжина стрінгового значення ${one.length}</div>`)

let two = 'lorem ipsum';
console.log(two.length);
document.write(`<div>Довжина стрінгового значення ${two.length}</div>`)

let three ='javascript is cool';
console.log(three.length);
document.write(`<div>Довжина стрінгового значення ${three.length}</div>`)


// - Перевести до великого регістру наступні стрінгові значення
let toUpperCase1 = one.toUpperCase();
console.log(toUpperCase1)

let toUpperCase2 = two.toUpperCase();
console.log(toUpperCase2)

let toUpperCase3 = three.toUpperCase();
console.log(toUpperCase3)

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let low1 = 'HELLO WORLD';
console.log(low1.toLowerCase())

let low2 = 'LOREM IPSUM';
console.log(low2.toLowerCase())

let low3 = 'JAVASCRIPT IS COOL';
console.log(low3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let string = ' dirty string   ';
console.log(string.trim()) // згідно з превью
console.log(string.replaceAll(' ', '')) // всі пробіли


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//  let str = 'Каждый охотник желает знать';
//  let arr = stringToarray(str);
//  document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';
let arr = [str];
document.write(arr);

// let stringToarray = (str) => str.split(' ');   // ЦЕЙ КОД ТАКОЖ ПРАЦЮЄ

let stringToarray = (str) => {
    return str.split(' ');
}

console.log(stringToarray(str));
// console.log(stringToarray(arr)); // тут щось не конектиться


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// document.writeln(delete_characters(str, 7)); // Каждый
let deleteCharacters = (str, length) => str.substr(0, length);

console.log(deleteCharacters(str, 7));
document.write(`<div>${deleteCharacters(str,7)}</div>`)

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//  let str = "HTML JavaScript PHP";
//  document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let strJS = "HTML JavaScript PHP";

// let replaseStr = (str) => {
//     let rStr = str.replaceAll(' ', '-')
//     return rStr;
// }
//
// let upStr = (str) => {
//     let uStr = str.toUpperCase()
//     return uStr
// }

// document.write(`<div>${upStr(strJS)}</div>`); // 'HTML-JAVASCRIPT-PHP'
// document.write(`<div>${replaseStr(strJS)}</div>`); // 'HTML-JAVASCRIPT-PHP
    // let strReplaser =  str => str.split(' ').join('-').toUpperCase();  // ЦЕЙ КОД ТАКОЖ ПРАЦЮЄ

    let strReplaser = str => {
        let string = str.split(' ').join('-').toUpperCase();
        return string
    }

console.log(strReplaser(strJS));
document.write(`<div>${strReplaser(strJS)}<div>`);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let firstSymbol = str => {
        let first = str.charAt(0).toUpperCase();
        return first+ str.slice(1);
}

console.log(firstSymbol(str))


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let firstSymbolPro = str => {
    let firstPro = str.split(' ').map(item => item[0].toUpperCase().concat(item.slice(1))).join(' '); // мало що зрозщумів)
    return firstPro;
}

console.log(firstSymbolPro(str))






