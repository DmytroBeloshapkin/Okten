// function usersDatabase() { // замикання
//     let users = [
//         {id: 1, name: 'Dima', age: 36, status: true},
//         {id: 2, name: 'Marianna', age: 37, status: true},
//         {id: 3, name: 'Vitaliy', age: 8, status: false},
//         {id: 4, name: 'Jura', age: 4, status: false},
//         {id: 5, name: 'Tetiana', age: 66, status: false},
//         {id: 6, name: 'Olya', age: 58, status: false},
//         {id: 7, name: 'Vasul', age: 32, status: true},
//         {id: 8, name: 'Khristina', age: 35, status: true},
//         {id: 9, name: 'Oleksandr', age: 5, status: false},
//         {id: 10, name: 'Anna', age: 2, status: false}
//     ];
//     return {
//         addUser: function (user) {
//             console.log(user);
//             if (user.id && user.name && user.age && user.status) {
//                 users.push(user);
//             } else {
//                 console.log('no info')
//             }
//         },
//         getUsers: () => console.log(users),
//         getStatusTrue: () => users.filter(value => value.status),
//         getAgeGT30: (arg) => users.filter(value => value.age > arg),
//         getAgeSort: (arg) => {
//             if (arg==='asd') {
//                 return users.sort((a, b) => a.age - b.age)
//             } else if (arg==='dsa'){
//                 return users.sort((a, b) => b.age - a.age)
//             }
//         }
//     }
// }
//
// let m = usersDatabase();
// console.log(m);
// m.addUser({id: 11, name: 'Dima', age: 36, status: true});
// m.getUsers()
// console.log(m.getStatusTrue());
// console.log(m.getAgeGT30(35));
// console.log(m.getAgeSort('asd'));
// console.log(m.getAgeSort('dsa'));

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

// Array.prototype.myForeach = function (callback){
//     for (const item of this) {
//         callback(item)
//     }
// }
// users.myForeach(function (u) {
//     console.log('this is user of current iteration', u)
// });

// class Car{
//     constructor(model) {
//         this.model = model;
//     }
// }
// let car = new Car('Porshe')
//
//
// class UserComp{
//     constructor(name, car) {
//         this.name = name;
//         this.car = car;
//     }
// }
//
// let new1 = new UserComp('Dima', 'Mecedes')
// console.log(new1);
//
//
//
// class UserAgrigation {
//     constructor(name, model) {
//         this.name = name;
//         this.model = new Car(model);
//     }
// }
//
// let news = new UserAgrigation('Dima', 'Lamborgini')
// console.log(news);