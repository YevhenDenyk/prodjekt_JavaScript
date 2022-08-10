// - створити функцію, яка обробляє та повертає площу прямокутника зі сторонами а і б
function areaRect(a, b) {
    return a * b;

}

areaRect(5, 5);
areaRect(3, 5);

console.log(areaRect(2,4));

// - створити функцію, яка обчислює та повертає площу кола з радіусом r
// function areaCircle(r) {
//     const area = 3.14 * r * r;
//     console.log(+area);
// }
//
// areaCircle(5);
// areaCircle(3.1);
// areaCircle(123.4);


// - створити функцію, яка обробляє та повертає площу циліндру висотою h, та радіутом r
// function areaCylinder(h, r) {
//     const area = 2 * 3.14 * r * h;
//     console.log(+area);
// }
//
// areaCylinder(6, 2);
// areaCylinder(1, 1);
// areaCylinder(2.2, 8);


// - створити функцію інформаційного масиву та вивести кожен його елемент

// function arrayPrinter(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
let users = [{name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
// let products = [{
//     title: 'milk',
//     price: 22,
//     image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// }, {
//     title: 'juice',
//     price: 27,
//     image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// }, {
//     title: 'tomato',
//     price: 47,
//     image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// }, {
//     title: 'tea',
//     price: 15,
//     image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// },];
//
// arrayPrinter(users);
// arrayPrinter(products);


// - створити функцію створення абзацу з текстом. Текст задати через аргумент
// function textPrint(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// textPrint(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam consequuntur cumque
// eum harum illum iste, laudantium, maiores, modi mollitia nam quam qui quis quo quos reiciendis? Dolorum, nihil.))))))))`)


// - створити функцію створення ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function printListStatic(li) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${li}</li>`)
//     }
//     document.write(`</ul>`)
// }
// printListStatic(`hvhvhvhhv`)
// printListStatic(`Ok Google!`)


// - створити функцію створення ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//          Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function printListDynamic(text, number) {
//     document.write(`<ol>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ol>`)
// }
//
// printListDynamic(`ololo trololo`, 7);


// - створити функцію, яка замінює масив примітивних елементів (числа, стрінги, булеві), та будує для них список
let tyy = [135,`fdvd`,2]
function foo(arr) {
        document.write(`<ol>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ol>`)
}
foo(tyy)



// - створити функцію, яка також використовує масив об'єктів з наступними полями id,name,age та виводити їх у документ.
//              Для кожного об'єкта окремий блок.



function arrayElement(array) {
    for (const element of array) {
        document.write(`<div>${element.name} ${element.age} ${element.status}</div>`);
    }
}
arrayElement(users);

// - створити функцію, яка повертає найменше число з масиву

function minNumber(array) {
    min = array[0]
    for (const item of array) {
        if (min > item) {
            min = item;
        }
    }
    return min;
}
let qwe = [255, 45, 567,-156, 2, 8, 90, -1, -12];

console.log(minNumber(qwe));
// - створює функцію, яка замінює масив, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// function sumArray(array) {
//     sum = array[0]
//     for (let i = 1; i < array.length ; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }

function sumArray(array) {
    sum = 0
    for (const arrayElement1 of array) {
        sum += arrayElement1;
    }
    return sum;
}

rty=[1,2,3,4,5,6,7]

console.log(sumArray(rty));





function foobar(...xxx) {
    console.log(xxx);
}
foobar(`jffj`,2,2,556,3,`folse`,`true`)
