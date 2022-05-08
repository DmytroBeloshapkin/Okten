// - Знайти та вивести довижину настипних стрінгових значень
let a = 'hello world';
let b = 'lorem ipsum';
let c = 'javascript is cool';

console.log(a.length);
console.log(b.length);
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
let upA = a.toUpperCase()
let upB = b.toUpperCase()
let upC = c.toUpperCase()
console.log(upA, upB, upC)

// - Перевести до нижнього регістру настипні стрінгові значення
console.log(upA.toLowerCase(), upB.toLowerCase(), upC.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let strDirty = ' dirty string   '
let clearString = strDirty.replace(' ', '')
console.log(clearString);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
let newStr = str.split(' ');
console.log(newStr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let map = arr.map(num => num.toString())
console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a)
    }
    return [];
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


let sortMin = nums.sort((a, b) => a - b)
console.log(sortMin)

let sortMax = nums.sort((a, b) => b - a)
console.log(sortMax)


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// -- відсортувати його за спаданням за monthDuration
let coursesSort = coursesAndDurationArray.sort(function (a,b){
    return  a.monthDuration - b.monthDuration
    })
console.log(coursesSort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesFiltr = coursesAndDurationArray.filter(value => value.monthDuration >= 5)
console.log(coursesFiltr);




// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше


let cards = {
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}