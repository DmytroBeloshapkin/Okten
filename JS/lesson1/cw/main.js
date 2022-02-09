// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let arrey = [
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10),
    Math.floor(Math.random() *10)
]
let result = arrey[0] + arrey[1] + arrey[2] + arrey[3] + arrey[4] + arrey[5] + arrey[6] + arrey[7] + arrey[8]  + arrey[9];
console.log(result);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: 'JS',
    page: 155,
    genre: 'educational literature'
};

let resultBook = (`Назва книги ${book.name}, кількість аркушів ${book.page}, жанр ${book.genre}`);
console.log(resultBook)

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'JS',
    page: 155,
    genre: 'educational literature',
    actor: 'Sergiy'
}
 let resultBook2 = (`Назва книги ${book2.name}, кількість аркушів ${book2.page}, жанр ${book2.genre}, авторк книги ${book2.actor}`);
console.log(resultBook2)

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
    {
       name: 'JS',
       page: 155,
       genre: 'educational literature',
       actor: 'Sergiy'
    },
    {
        name: 'PYTON',
        page: 195,
        genre: 'educational literature',
        actor: 'Sergiy'
    }
];

console.log(books[0], books[1])

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let h = 23;
let w = 10;
let s = (h * w) * 2

console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dc = 4;
let r = dc/2;
const PI = 3.14;

let cylinder = PI * Math.pow(2, r) * h;

console.log(cylinder)

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;

let pythagoras = Math.pow(2, n) + Math.pow(2, m);

console.log(pythagoras);