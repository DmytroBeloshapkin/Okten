// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [1,2,3,'one','two','tree',true, false]
// console.log(arr)
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arrey = []
// arrey[0] = 1
// arrey[1] = 'куку'
// arrey[2] = true
// arrey[3] = 1050
//
// console.log(arrey)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div></div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//         document.write(`<div>${i+1}. довільний текст</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0
// while (i < 20){
//     document.write(`<h4> ${i+1}. довільним текстом всередині  </h4>`)
// i++
// }
//
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arreys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let j = 0; j < arreys.length; j++)
// console.log(arreys[j])
//
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let str = ['one', 'two', 'tree']
// for (let i = 0; i < str.length; i++)
//     console.log(str[i])
//
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let random = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'one', 'two', 'tree', true, false]
// for (let i = 0; i < random.length; i++)
//     console.log(random[i])

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arreyBoolin = ['one','two','three','four', 60, 70, 80, 90, true, false];
//
// for (let i = 0; i < arreyBoolin.length; i++) {
//     const arreyBoolinElement = arreyBoolin[i];
//     if (typeof arreyBoolinElement === "boolean")
//         console.log(arreyBoolinElement)
// }
//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// for (let i = 0; i < arreyBoolin.length; i++) {
//     const arreyBoolinElement = arreyBoolin[i];
//     if (typeof arreyBoolinElement  === `number`)
//         console.log(arreyBoolinElement)
//
// }
//
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (let i = 0; i < arreyBoolin.length; i++) {
//     const arreyBoolinElement = arreyBoolin[i];
//     if (typeof arreyBoolinElement  === `string`)
//         console.log(arreyBoolinElement)
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrey = []
arrey [0] = 1
arrey [1] = 2
arrey [2] = 'куку'
arrey [3] = true
arrey [4] = false
//
//
// for (let i = 0; i < arrey.length; i++) {
//     const arreyElement = arrey[i];
//     console.log(arrey[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     const arreyElement = arrey[i];
//     console.log(i)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     const arreyElement = arrey[i];
//     console.log(i)
// }



// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     const arreyElement = arrey[i];
//     console.log(i)
// }
// - Створити цикл for н..а 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write\
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}