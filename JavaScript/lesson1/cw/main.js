// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let arr = [
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10),
    Math.floor(Math.random()*10)
    ]
console.log(arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]+arr[8]+arr[9])

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books =
    [
    {
    name: 'JS',
    pages: 151,
    janr: 'education',
    actor: 'Sergiy'
    },
    {
    name: 'Phyton',
    pages: 511,
    janr: 'education',
    actor: 'Dima'
    }
    ]

console.log(books)
console.log(books[0].name)
console.log(books[0])
console.log(books[1])

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let widht = 23
let  height = 10
let s = (widht*2)+(height*2)

console.log(s)



// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10
let dC = 4
const PI = 3.14
let r = dC/2

let v = PI * Math.pow(2, r) * heightC
console.log(v)
// V = 	 π R2 h

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3
let m = 4

let k = Math.pow(n,2) + Math.pow(m,2)
console.log(k)


// c2 = a2+b2


// c2=a2+b2


