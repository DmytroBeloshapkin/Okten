// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
let arrey = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;
while (i < arrey.length) {
    console.log(arrey[i]);
    i++;
}

//     2. перебрати його циклом for
for (let j = 0; j < arrey.length; j++) {
    const arreyElement = arrey[j];
    console.log(arreyElement)
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < arrey.length) {
    if (arrey[j]%2===0)
    console.log(arrey[j]);
    j++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let k = 0; k < arrey.length; k++) {
    const arreyElement = arrey[k];
    if (k%2===0)
        console.log(arreyElement)
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let ji = 0
while (ji<arrey.length){
    if (arrey[ji]%2===0)
        console.log(arrey[ji])
    ji++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k = 0; k < arrey.length; k++) {
    const arreyElement = arrey[k];
    if (arreyElement%2===0)
        console.log(arreyElement)
}

// 7. замінити кожне число кратне 3 на слово "okten"
for (let k = 0; k < arrey.length; k++) {
    const arreyElement = arrey[k];
    if (arreyElement % 3 === 0) {
        let arreyElement = `okten`
        console.log(arreyElement)
    }
}

// 8. вивести масив в зворотньому порядку.
for (let k = arrey.length-1; k>=0; k--) {
    const arreyElement = arrey[k];
    console.log(arreyElement)
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (let k = arrey.length-1; k>=0; k--) {
    const arreyElement = arrey[k];
    if (arreyElement % 3 === 0) {
        let arreyElement = `okten`
        console.log(arreyElement)
    }
}