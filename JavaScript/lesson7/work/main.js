// let users = [
//
//     {id: 1, name: 'Dima', age: 36, status: true},
//     {id: 2, name: 'Marianna', age: 37, status: true},
//     {id: 3, name: 'Vitaliy', age: 8, status: false},
//     {id: 4, name: 'Jura', age: 4, status: false},
//     {id: 5, name: 'Tetiana', age: 66, status: false},
//     {id: 6, name: 'Olya', age: 58, status: false},
//     {id: 7, name: 'Vasul', age: 32, status: true},
//     {id: 8, name: 'Khristina', age: 35, status: true},
//     {id: 9, name: 'Oleksandr', age: 5, status: false},
//     {id: 10, name: 'Anna', age: 2, status: false}
// ];

// users[0].surname = 'Beloshapkin' // додати до масиву
// console.log(users[0])

// let obj = {}; // додали до обєкта дані
//
// let field = ['id','name','age'];
// let value = ['1', 'Dima', 36]
//
// for (let i = 0; i < value.length; i++) {
//     const valueElement = value[i];
//     obj[field[i]] = value[i]
// }
//
// console.log(obj);

// let user = { // видалити з обєкта елемент
//     id:1,
//     name: 'Dima'
// }
//
// delete user.id
// console.log(user)

// let u1 = { // this
//     name: 'Dima',
//     surname: 'Beloshapkin',
//     greeating: function () {
//         return `hello my name is ${this.name} ${this.surname}`;
//     },
//     wife: {
//         name: 'Marianna',
//         greeating: function () {
//             console.log(`hello my name is ${this.name} i am wife`);
//         }
//     }
// }
// u1.wife.greeating();
// console.log(u1.greeating());
//
//
// function greeating (obj){
//     return (`hello my name is ${obj.name} ${obj.surname}`)
// }
//
// let dog = {
//     name: 'Hasya',
//     surname: 'undefined'
// }
//
// console.log(greeating(dog));

// function outer() {  //замикання
//     let x = 0;
//
//        function inner() {
//            return ++x;
//        }
//
//     return inner;
// }
//
// let clos = outer();
// console.log(clos());
// console.log(clos());
// console.log(clos());
//
// console.log(outer()());

// function userCreator(name, age) { // треба завчити спроба 1
//     let obj = {name: name, age: age}
//
//     return {
//         getName: function () {return obj.name; },
//         getAge: function () {return obj.age; },
//         setAge: function (age) {obj.age = age; }
//     };
// }
//
// let manipulator = userCreator('Dima', 36);
// //
// console.log(manipulator);
// console.log(manipulator.getName());
// console.log(manipulator.getAge());
// manipulator.setAge(32);
// console.log(manipulator.getAge())

// function userCreator(name, age) {  // треба завчити спроба 2
//     let obj = {name: name, age: age}
//     return {
//         getName: function () {
//             return obj.name
//         },
//         getAge: function () {
//             return obj.age
//         }
//     }
// }
//
// let manipulator = userCreator('dima', 36)
// console.log(manipulator.getName());
// console.log(manipulator.getAge());

// function userCreator (name, age) {  // треба завчити спроба 3
//     let obj = {name:name, age:age}
//     return{
//         getName: function () { return obj.name},
//         getAge: function () {return obj.age}
// }
// }
//
// let manipulator = userCreator('dima',36)
// console.log(manipulator.getName());
// console.log(manipulator.getAge());

// function Constructor (id, name,skils) {
//     this.id = id;
//     this.name = name;
//     this.skils = skils;
//     this.greeting = function (){
//         console.log(`привіт мене звати ${this.name}`);
//     }
// }
//
//
// let user1 = new Constructor(1, 'Dima', ['пожрать', 'поспать']);
// console.log(user1);
//
// let user2 = new Constructor(2,'Marianna','чанахи')
// console.log(user2);
//
// user1.greeting();
// user2.greeting();
//
// let userArrey = [user1, user2]
// console.log(userArrey);

// class User {
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
//     greeting() {
//         return `hello my name is ${this.name}`
//     }
// }
//
// let new1 = new User(1, 'Dima');
// let new2 = new User(2, 'Marianna');
// console.log(new1);
// console.log(new2);
// console.log(new1.greeting());

// class Person {                  // (alt + insert)  constructor make
//     constructor(id, name) {
//         this.id = id;
//         this.name = name;
//     }
// }
//
// let person = new Person(1, 'Dima')
// console.log(person);

// class Car {
//         constructor(power, speed) {
//         this.power = power;
//         this.speed = speed;
//     }
//     drive (){
//         console.log('bubububu')
//     }
// }
// class SuperCar extends Car {
//
//     constructor(power, speed, model) {
//         super(power, speed);
//         this.model = model;
//     }
//     drive() {
//         super.drive(
//             console.log('бум')
//         );
//     }
// }
//
// let superCar = new SuperCar(170,250,'Mercedes')
// console.log(superCar);
//
// superCar.drive()