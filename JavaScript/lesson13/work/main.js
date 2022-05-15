// let user1 = {
//     name: 'Dima',
//     greeting: function (msg){
//         console.log(`${msg} my name is ${this.name}`);
//     },
//
//     foobar: function (a,b,c){
//         console.log(this,a,b,c)
//     },
// };
//
// let user2 = {name: 'Marianna'};
//
// user1.greeting.call(user2,'привіт')
//
// user1.foobar.call(user2,'a','b','c')
//
// let arg = ['aaa','bbc','ccc']
// user1.foobar.apply(user2,arg)
//
// let greeating = user1.greeting.bind(user2,'alloha')
// greeating()
// greeating()
// greeating()
//
// let greeating2 = user1.greeting.bind(user2)
// greeating2('заміна алохи')
//
//
// function User(name,surname){
//     this.name = name;
//     this.surname = surname;
// }
//
// function Custormen(name,surname,password)  {
// User.apply(this, arguments)
// this.password = password
// }
//
// let customer = new Custormen('asd','qwe','zxc')
// console.log(customer);

//////////////////////////////////////////////////////part 13.2 //////////////////////////////

// let nums = [1, 2, 3]
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
//
// Array.prototype.print = function () {
//     for (const item of this) {
//         console.log(item);
//     }
// }
//
// nums.print();
// users.print()
//
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((value) => value.json())
//     .then(value => value.print()
//     )

// console.log(users[0].__proto__.__proto__);


////////////////////////////////////////////////////////

// setTimeout(() => {
//     console.log('hello Dima')
//     x = 1000
// }, 2000)
//
//
// console.log('start');
//
// setTimeout(() => {
//         let counter = 0;
//         console.log('do1', counter);
//         setTimeout(() => {
//             counter++;
//             console.log('do2', counter);
//             setTimeout(() => {
//                 counter++;
//                 console.log('do3', counter);
//             }, 2000)
//         }, 2000)
//     }, 2000
// )
// console.log('end');


let promise = new Promise((resolve, reject) => {
    let counter = 0
    setTimeout(() => {
        console.log('do', counter);
        counter++
        resolve(counter)
    }, 1000)
})

let promise2 = promise.then((counter) => {
    console.log(counter);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('do', counter);
            counter++;
            resolve(counter);
        }, 2000)
    })
}); 

promise2.then(value => console.log(value))



function timeoutFn(counter, milis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('async operation', counter)
            counter++
            resolve(counter)
         }, milis)
    });
}
timeoutFn(0,2000).then(value => {
    return timeoutFn(value,2000)
})

.then(value => timeoutFn(value,2000))


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(value => console.log(value)
    )



