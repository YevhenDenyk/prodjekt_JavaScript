// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = []
user.push(new User(2, 'ihor', 'ihorovich', 'dvsvsd@sevsd.ev', +27824));
user.push(new User(1,'vasya', 'sdvsd','dvsvsd@sevsd.ev',+782720));
user.push(new User(3,'jkl', 'soi','cxv@sevsd.ev',+3809452452));
user.push(new User(4,'sdc', 'jhg','dvsxcvxvsd@sevsd.ev',+45452404));
user.push(new User(6,'cvb', 'fds','xcbxcb@sevsd.ev',+452452));
user.push(new User(5,'hjk', 'rty','egwz@sevsd.ev',+4524278));
user.push(new User(8,'asd', 'poi','icv@sevsd.ev',+3783));
user.push(new User(10,'qwe', 'vbn','wer@sevsd.ev',+3727375));
user.push(new User(9,'ert', 'ytr','ret@sevsd.ev',+8734378278));
user.push(new User(7,'tyu', 'xcv','evxcv@sevsd.ev',+278275272));

console.log(user);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = user.filter(value => value.id % 2 === 0);
console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = user.sort((a, b) => a.id - b.id);
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
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


let client = [];
client.push(new Client(1,'vasya', 'sdvsd','dvsvsd@sevsd.ev',+782720, [`dsvsdv`,'dsvsdv','sdcs']));
client.push(new Client(2, 'ihor', 'ihorovich', 'dvsvsd@sevsd.ev', +27824, ['erv','dfv','dfvdq','ytn','dsv'] ));
client.push(new Client(3,'jkl', 'soi','cxv@sevsd.ev',+3809452452,['dfv','dfb','ervfvdf','rtb']));
client.push(new Client(4,'sdc', 'jhg','dvsxcvxvsd@sevsd.ev',+45452404, [1,1,1,1,1]));
client.push(new Client(6,'cvb', 'fds','xcbxcb@sevsd.ev',+452452,[2,6,85,57,25,5,5,52]));
client.push(new Client(5,'hjk', 'rty','egwz@sevsd.ev',+4524278,[5,6,6,6,51,15,5]));
client.push(new Client(8,'asd', 'poi','icv@sevsd.ev',+3783,[1,55,11,115]));
client.push(new Client(10,'qwe', 'vbn','wer@sevsd.ev',+3727375,[6,9,2,9,21]));
client.push(new Client(7,'tyu', 'xcv','evxcv@sevsd.ev',+278275272,[65]));
client.push(new Client(9,'etvyu', 'excv','zevxcv@sevsd.ev',+5278275272,[26,6]));
console.log(client);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort1 = client.sort((a, b) => a.order.length - b.order.length);
console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//          максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(mod, producer, year, maxSpead, engine) {
    this.mod = mod;
    this.producer = producer;
    this.year = year;
    this.maxSpead = maxSpead;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpead} на годину`);
    };
    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== 'function'){
                console.log(`${item}  ---  ${this[item]}`);
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpead += newSpeed
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };

}

let car = new Car('ZAZ', 'Zaz', 1989, 230, 3.6);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(-200);
console.log(car);
car.addDriver({name: `Alex`,age: 89, status: `old`});
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//                  максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car1 {
    constructor(mod, producer, year, maxSpead, engine) {
        this.mod = mod;
        this.producer = producer;
        this.year = year;
        this.maxSpead = maxSpead;
        this.engine = engine;
    }
        drive()
        {
            console.log(`їдемо зі швидкістю ${this.maxSpead} на годину`);
        }
        info()
        {
            for (const item in this) {
                if (typeof this[item] !== 'function') {
                    console.log(`${item}  ---  ${this[item]}`);
                }
            }
        }
        increaseMaxSpeed(newSpeed)
        {
            this.maxSpead += newSpeed
        }

        addDriver(driver)
        {
            this.driver = driver;

        }
    }

let car1 = new Car1('ZAZi', 'Zazi', 1900, 830, 13.6);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(-200);
console.log(car1);
car1.addDriver({name: `Alex`,age: 89, status: `old`});
console.log(car1);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Ann',25,34);
let cinderella2 = new Cinderella('Ann',25,35);
let cinderella3 = new Cinderella('Alina',25,36);
let cinderella4 = new Cinderella('Ann',25,37);
let cinderella5 = new Cinderella('Ann',25,38);

let cinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5];

class Prince extends Cinderella {
    constructor(name, age, findFootSize) {
        super(name, age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Vasya', 34, 36);

let find = (array, prince)=>{
    for (const arrayElement of array) {
        if (prince.findFootSize === arrayElement.footSize){
            return `My sinderella is ${arrayElement.name}`;
        }
    }
}
console.log(find(cinderellas, prince));

let find1 = cinderellas.find(value => prince.findFootSize === value.footSize);
console.log(find1);