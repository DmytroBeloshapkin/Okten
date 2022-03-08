let arr = [2,17,13,6,22,31,45,66,100,-18]

//     1. перебрати його циклом while
// let i = 0
// while (i < arr.length) {
//     console.log(arr[i])
// i++
// }
//     2. перебрати його циклом for
// for (let j = 0; j < arr.length; j++) {
//     const arrElement = arr[j];
//     console.log(arrElement)
// }
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let j = 0
// while (j < arr.length) {
//     if (j % 2 !== 0) {
//         console.log(arr[j])
//     }
//     j++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let k = 0; k < arr.length; k++) {
//     if (k % 2 !== 0)
//         console.log(arr[k])
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0
// while (i < arr.length){
//     if (i % 2 ===0 ){
//         console.log(arr[i])
//     }
//     i++
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 ===0) {
//       arr[i]  = 'okten'
// }
// }
// console.log(arr)



// 8. вивести масив в зворотньому порядку.
    for (let i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
}
