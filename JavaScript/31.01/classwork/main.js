// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let array = [Math.random (11)*10];
console.log(array)

// тут я не зрозумів


// // 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: 'JS course',
    numberPage: 100500,
    genre: 'comix'
}
console.log(book)

// // 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let newBook = {
    name: 'JS course',
    numberPage: 100500,
    genre: 'comix',
    actors: 'oktenweb'
}
console.log(newBook)

// // 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
var booking = {
    name: 'JS course',
    numberPage: 100500,
    genre: 'comix',
    actors: 'oktenweb'}

console.log(booking ['name']);
console.log(booking ['numberPage']);
console.log(booking ['genre']);
console.log(booking ['actors']);

// // 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// // Значення площі зберігати в змінній s.
let height = 25;
let width = 10;
let s = ((height + width) * 2);
console.log(s);

// // 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// // результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let r = dC/2;
const PI = 3.1415926535;
let v = (PI*((dC/2)*(dC/2))*heightC);
console.log(v);

// // 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// // Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3
let m = 4
let result = (Math.pow(n,2)+Math.pow(m,2))
console.log(result)