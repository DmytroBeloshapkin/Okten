// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname - surname; // чому не підсвічуєтиься?
    this. email = email;
    this.phone = phone;
}

//******************************************************************************************
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(1, `Dima`, `Beloshapkin`, `beloshapkin.dmytro@gmail.com`, `0672757648`),
    new User(2, `Marianna`, `Beloshapkina`, `beloshapkina.marianna@gmail.com`, `0976708331`),
    new User(3, `Vitaliy`, `Beloshapkin`, `beloshapkin.vitaliy@gmail.com`, `0671231212`),
    new User(4, `Yura`, `Beloshapkin`, `beloshapkin.yuriy@gmail.com`, `0971233231`),
    new User(5, `Vasyl`, `Pekera`, `pekera.vasul@gmail.com`, `0972563310`),
    new User(6, `Khrestuna`, `Pekera`, `pekera.khrystinma@gmail.com`, `0501236547`),
    new User(7, `Oleksandr`, `Pekera`, `pekera.sahsa@gmail.com`, `0975551122`),
    new User(8, `Anna`, `Pekera`, `pekera.anna@gmail.com`, `0509874502`),
    new User(9, `Tanya`, `Beloshapkina`, `beloshapkina.tanya@gmail.com`, `0976708330`),
    new User(10, `Ira`, `Klimenko`, `klymenko.ira@gmail.com`, `0681231212`)
]

//******************************************************************************************
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let usersFilter = users.filter (item => item.id % 2 === 0);
console.log(usersFilter);

//******************************************************************************************
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let usersSorter =users.sort((a, b) => a.id  - b.id)
console.log(usersSorter);

let usersSorterSur =users.sort((a, b) => a.surname  - b.surname)
console.log(usersSorterSur);

//!!!!!!!!!!!!!!! не розумію чому surname не показує у консолі, але все працює

//******************************************************************************************
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

//******************************************************************************************
// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client (1, `Dima`, `Beloshapkin`, `beloshapkin.dmytro@gmail.com`, `0672757648`, `trues`),
    new Client (2, `Marianna`, `Beloshapkina`, `beloshapkina.marianna@gmail.com`, `0976708331`, `trues`),
    new Client (3, `Vitaliy`, `Beloshapkin`, `beloshapkin.vitaliy@gmail.com`, `0671231212`, `trues`),
    new Client (4, `Yura`, `Beloshapkin`, `beloshapkin.yuriy@gmail.com`, `0971233231`, `trues`),
    new Client (5, `Vasyl`, `Pekera`, `pekera.vasul@gmail.com`, `0972563310`, `falses`),
    new Client (6, `Khrestuna`, `Pekera`, `pekera.khrystinma@gmail.com`, `0501236547`, `falses`),
    new Client (7, `Oleksandr`, `Pekera`, `pekera.sahsa@gmail.com`, `0975551122`, `falses`),
    new Client (8, `Anna`, `Pekera`, `pekera.anna@gmail.com`, `0509874502`, `falses`),
    new Client (9, `Tanya`, `Beloshapkina`, `beloshapkina.tanya@gmail.com`, `0976708330`, `trues`),
    new Client (10, `Ira`, `Klimenko`, `klymenko.ira@gmail.com`, `0681231212`, `falses`)
];

//******************************************************************************************
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order - b.order));