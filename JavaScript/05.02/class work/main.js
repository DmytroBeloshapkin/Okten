// 1. зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arrey = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     a. перебрати його циклом while
i = 0;
while (i < arrey.length) {
    console.log(arrey[i]);
    i++;
}

//     b. перебрати його циклом for
for (let j = 0; j < arrey.length; j++) {
    console.log(arrey[j]);
}

//     c. перебрати циклом while та вивести  числа тільки з непарним індексом
ij = 0;
while (ij < arrey.length) {
    ij++;
    if (ij % 2 === 0) {
        console.log(ij);
    }
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let j = 0; j < arrey.length; j++) {
    if (arrey[j] % 2 === 1)
        console.log(arrey[j])

}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
u = 0;
while (u < arrey.length) {
    if (u % 2 === 0) {
        console.log(u);
    }
    ;
    u++
}
;


// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arrey.length; j++) {
    if (arrey[j] % 2 === 0)
        console.log(arrey[j])
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let jju = 0; jju < arrey.length; jju++) {
    if (arrey[jju] % 3 === 0) {
        arrey[jju] = 'okten';
        console.log(arrey[jju])
    }
}

// 8. вивести масив в зворотньому порядку.
let arreyBack = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let back = arreyBack.length - 1; back >= 0; back--) {
    console.log(arreyBack[back]);

    // тут вища макетматика напевно я не зрозумыв цього алгоритму, буду передивлятись лекцыю можливо тоды заїду в тему, останій код копіпаст що перевірити чи працює, працює але як воно працює я хз)
}
;


