//  Дано список імен.
 let n1 = 'Harry..Potter'
 let n2 = 'Ron---Whisley'
 let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'


/*let arreyNormalized = (str) => {
    str.replaceAll('..', ' ')
    str.replaceAll('---', ' ')
    str.replaceAll('__', ' ')
    return str
}
console.log(arreyNormalized(n1))*/


let arreyNormalized = (name, symbol) => name.split(symbol).filter(item => item.length > 0).join(' ');

console.log(arreyNormalized(n1, '.'));
console.log(arreyNormalized(n2, '-'));
console.log(arreyNormalized(n3, '_'));


//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let RandomArray = length => {
    let array = [];

    for (let i = 0; i < length; i++) {
        let arrayElement = Math.round(Math.random() * 100);
        array.push(arrayElement);
    }
    return array;
}

console.log(RandomArray(10));



// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(RandomArray(10).sort());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(RandomArray(25).filter (num => num%2));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.




// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]




// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];



// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців