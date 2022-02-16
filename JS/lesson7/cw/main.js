// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//   максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function car (model, manufacturer, age, speadMax, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.age = age;
    this.speadMax = speadMax;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${speadMax} на годину`);
    }
    this.info = function () {
        console.log(`модель ${model}, виробництвло ${manufacturer}, рік випуску ${age}, об’єм двигуна ${engine}`);
    }
    this.newSpeed = function (newSpeed) {
        this.speadMax = newSpeed+speadMax;
    }
    this.changeYear = function (newValue) {
        this.age = newValue;
    }
    this.addDriver = function (driver){
        this.drive = driver;
    }
}

console.log(car(`Mercedes-Benz`, `Daimler AG`, 2012, 260, 2, 2));

//*********************************************************************************************************************************
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor(model, manufacturer, age, speadMax, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.age = age;
        this.speadMax = speadMax;
        this.engine = engine;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${speadMax} на годину`);
    }
    info() {
        console.log(`модель ${model}, виробництвло ${manufacturer}, рік випуску ${age}, об’єм двигуна ${engine}`);
    }
    newSpeed (newSpeed) {
        this.speadMax = newSpeed+speadMax;
    }
    changeYear (newValue) {
        this.age = newValue;
    }
    addDriver (driver){
        this.drive = driver;
    }
}

//*********************************************************************************************************************************
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Girl {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let girls = [
    new girl (`marianna`,36,37),
    new girl (`ira`,34,34),
    new girl (`olya`,36,35),
    new girl (`tanya`,50,39),
    new girl (`khrestuna`,35,38),
    new girl (`penelopa`,18,35),
    new girl (`sofiua`,25,38),
    new girl (`svitlana`,38,37),
    new girl (`katya`,37,36),
    new girl (`pamela`,45,39)
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Boy {
    constructor(name, age,size){
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let boy = new Boy (`dima`, 36, 37);

let Girl = girls.find (finder => finder.size === boy.size)


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
