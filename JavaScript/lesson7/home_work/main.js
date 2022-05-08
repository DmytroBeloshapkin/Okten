// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

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
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = users.filter(value => !(value.id % 2))
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = users.sort((a, b) => b.id - a.id)
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let client = [
    new Client(1, `Dima`, `Beloshapkin`, `beloshapkin.dmytro@gmail.com`, `0672757648`, 5),
    new Client(2, `Marianna`, `Beloshapkina`, `beloshapkina.marianna@gmail.com`, `0976708331`, 5),
    new Client(3, `Vitaliy`, `Beloshapkin`, `beloshapkin.vitaliy@gmail.com`, `0671231212`, 9),
    new Client(4, `Yura`, `Beloshapkin`, `beloshapkin.yuriy@gmail.com`, `0971233231`, 1),
    new Client(5, `Vasyl`, `Pekera`, `pekera.vasul@gmail.com`, `0972563310`, 1),
    new Client(6, `Khrestuna`, `Pekera`, `pekera.khrystinma@gmail.com`, `0501236547`, 3),
    new Client(7, `Oleksandr`, `Pekera`, `pekera.sahsa@gmail.com`, `0975551122`, 9),
    new Client(8, `Anna`, `Pekera`, `pekera.anna@gmail.com`, `0509874502`, 0),
    new Client(9, `Tanya`, `Beloshapkina`, `beloshapkina.tanya@gmail.com`, `0976708330`, 1),
    new Client(10, `Ira`, `Klimenko`, `klymenko.ira@gmail.com`, `0681231212`, 2)
];
console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = client.sort((a, b) => a.order - b.order)
console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarCreator(model, producer, age, maxSpeed, engine) {

        this.model = model,
        this.producer = producer,
        this.age = age,
        this.maxSpeed = maxSpeed,
        this.engine = engine,

        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        },

        this.info = function () {
            for (const argumentsKey in this) {
            if (typeof this[argumentsKey] !=='function')
            console.log(`${argumentsKey} ${this[argumentsKey]}`) // додати ключі
            }
        },

        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = newSpeed
        },

        this.addDriver = function (driver) {
            this.driver = driver
        }

}

let myCars = new CarCreator('Mecedes-Benz', 'Studgard', 2012, 260, 2, 2)

myCars.drive() // done
myCars.info() // done
myCars.increaseMaxSpeed('300 km/h') // done
myCars.addDriver('Dima Beloshapkin') // done

console.log(myCars);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку