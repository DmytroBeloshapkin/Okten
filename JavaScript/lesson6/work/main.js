// let a = 'hello ';
// let b = 'world ';
// let c ='mother fucker'
// let d = 'PikACHu'
// console.log(a.concat(b,c)); // додавання
//
// console.log(c.toUpperCase()); // великі букви
// console.log(c.toLowerCase()); // малі букви
// console.log(d.toLowerCase()); // малі букви
//
// console.log(d.endsWith('P')); // містить в кінці
// console.log(d.startsWith('P')); // містить на початку
// console.log(d.includes('ACH')); // має в собі значення
//
// console.log(d.charAt(0)); // виведе по індексу
// console.log(d.indexOf('A')); // покаже індекс букви
//
// console.log(d.indexOf('A')); // покаже індекс першого
// console.log(d.lastIndexOf('u')); // покаже індекс останнього
//
// console.log(d.replace('PikACHu', 'єбаний покемон')); // заміняє
// console.log(d.replaceAll('PikACHu', 'єбаний покемон')); // заміняє всі символи
//
// console.log(d.substring(0,3)); // Обрізає з і до
//
// console.log(d.split('k')); // розділяє по букві і робить масив
//
// let user = {id:1, name: 'dima', surname: 'beloshapkin', tel: 380672757648}
// console.log(user)
//
// let info = '1-dima-beloshapkin-380672757648'
// let information = info.split('-');
// let userNew = {
//     id: information[0],
//     name: information[1].toUpperCase(),
//     surname: information[2],
//     tel: information[3]
// }
// console.log(userNew); // розподілення по символу знов спліт

////////////////////////////////////////////////////////////////////////////////////////////////////

let arrey = [11, 22, 33];
// console.log(Array.isArray(arrey)); // перевірка на масив
//
// console.log(arrey)
// arrey.push(10, 20, 30) // додавання для масивів
// console.log(arrey)
//
// arrey.unshift(101) // додавання на початок
// console.log(arrey)
//
// arrey.pop() // забирає останнє
// console.log(arrey)
//
// arrey.shift() // забирає перше
// console.log(arrey)
//
// let join = arrey.join('-') // зєднання масиву в стрінгу символом
// console.log(join)
//
// let item = ['one', 'two', 'thee', 'four'] // обєднання масивів
// let concat = arrey.concat(item)
// console.log(concat)
//
// let revers = arrey.reverse()
// console.log(revers)
//
// let off = concat.indexOf('one'); // вказує індекс+1 вказаного елементу у масиві
// console.log(off);
//
//
// let arreyNew = [1, 2, 3, 4, 5, 6, 7, 8];
// let splice = arreyNew.splice(0,2, 'через кому можна додати') // видалення з масиву
// console.log(splice) // вирізаний шматок
// console.log(arreyNew) // те що залишилось
//
// let arrey = [1, 2, 3, 4, 5];
// let includes = arrey.includes(1)
// console.log(includes)

let users = [
    {id: 1, name: 'Dima', age: 36, status: true},
    {id: 2, name: 'Marianna', age: 37, status: true},
    {id: 3, name: 'Vitaliy', age: 8, status: false},
    {id: 4, name: 'Jura', age: 4, status: false},
    {id: 5, name: 'Tetiana', age: 66, status: false},
    {id: 6, name: 'Olya', age: 58, status: false},
    {id: 7, name: 'Vasul', age: 32, status: true},
    {id: 8, name: 'Khristina', age: 35, status: true},
    {id: 9, name: 'Oleksandr', age: 5, status: false},
    {id: 10, name: 'Anna', age: 2, status: false}
];

let matrix = [
    [1, 2, 3],
    [
        4, 5, 6,
        ['a', 'b', 'c']
    ]
];

// let x = []
// users.forEach(function (user) {
//     if (user.status){
//         x.push(user)
//     }
// console.log(user)
// });
//
// console.log(x)
//
// users.forEach((value) => console.log(value)); // повертає новий масив з новими елементами

// let filter = users.filter(value => value.status) // фільтр
// let filter2 = users.filter(value => !value.status)
// console.log(filter)
// console.log(filter2)
//
// let filterNew1 = users.filter(function (user) {
//     return user.status && user.age > 10
// })
// console.log(filterNew1)
//
// let filterNew2 = users.filter(user => !user.status && user.age > 10)
// console.log(filterNew2)

// users.map(function (user, index){
//     user.idynaher = index+1
//     return user
// })
//
// console.log(users)

// let sort = users.sort(function (a,b){ // сортування по цифрам
//     return a.age - b.age
// })
// console.log(sort)
//
// let sortLength = users.sort((a,b) => a.name.length - b.name.length)
// console.log(sortLength)

// let find = users.find(user => user.status) // пошук на мінімалках
// console.log(find)
//
// let every = users.every(user => typeof user.name==='string') // перевірка на відповідність умові
// console.log(every)
//
// let some = users.some(user => user.name==='Dima') // перевірка на відповідність одній умові
// console.log(some)

// let flat = matrix.flat(2) //Обєднати в один масив в площину (2 це глибина)
// console.log(flat);

// let matrixNew = matrix.flatMap(value => value + 'краказябра')
// console.log(matrixNew)

// let reduce = arrey.reduce((previousValue, currentValue) => {
//     console.log(previousValue, currentValue);
//     return previousValue+ currentValue
//     },0)
// console.log(reduce)

// let reduceNew = users.reduce((basket, user) => {
//     basket[user.id] = user
//     return basket
// }, {})
// console.log(reduceNew);

// let newreduce = users.reduce((backet, user) => {
//     if (user.status) {
//         backet.statusTrue.push(user);
//     } else {
//         backet.statusFalce.push(user);
//     }
//     return backet;
//
// }, {statusTrue: [], statusFalce: []})
//
// console.log(newreduce);


// let New = users.map((user) => {
//         let userNew = {
//             name: user.name,
//             age: user.age,
//     }
//     return userNew;
// });
//
// console.log(New)
