// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// let str1 = 'lorem ipsum'
// let str2 = 'javascript is cool'
// console.log('javascript is cool'.length);
// console.log(str.length);
// console.log(str1.length);
// console.log(str1.length, str2.length, str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM';
// let str3 = 'JAVASCRIPT IS COOL';
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні'
// let arr = stringToarray = (str) => str.split(' ');
// console.log(stringToarray(str));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let  arr = [10,8,-7,55,987,-1011,0,1050,0]
// // let strigs = arr.map(value => value += '');
// // let strigs = arr.map(value => value + '');
// // let  strigs = arr.map(value => value.toString());
// let strigs = arr.map(value => String(value));
// console.log(strigs);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
// // console.log(nums.sort((a, b) => a - b));
// const sortNums = (arr,direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b);
//     } else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// }
// console.log(sortNums(nums,'descending'));
// console.log(sortNums(nums, 'ascending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));


// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


let deckOfCards = [
    {
        cardSuit: null,
        value: 'Joker',
        color: 'black'
    },
    {
        cardSuit: null,
        value: 'Joker',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '10',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '9',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '8',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '7',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit: 'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'clubs',
        value: '6',
        color: 'black'
    },
    {
        cardSuit: 'diamond',
        value: '6',
        color: 'red'
    },
    {
        cardSuit: 'heart',
        value: '6',
        color: 'red'
    }
]
// - знайти піковий туз
// const find = deckOfCards.find(value => value.cardSuit === 'diamond' && value.value === 'ace');
// console.log(find);

// - всі шістки
// let filter = deckOfCards.filter(value => value.value === '6');
// console.log(filter);

// - всі червоні карти
// let filter = deckOfCards.filter(value => value.color === 'red');
// console.log(filter);

// - всі буби

// let filter = deckOfCards.filter(value => value.cardSuit === 'diamond');
// console.log(filter);

// - всі трефи від 9 та більше
// let filter = deckOfCards.filter(value => value.cardSuit === 'spade' && value.value > '8' || value.cardSuit === 'spade' &&
//     value.value === '10' || value.color === 'black' && value.value === 'Joker');
// console.log(filter);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = deckOfCards.reduce((accum,card)=>{
    if (card.cardSuit === 'spade'){
        accum.spades.push(card);
    } else if(card.cardSuit==='diamond') {
        accum.diamonds.push(card);
    }else if (card.cardSuit === 'clubs'){
        accum.clubs.push(card);
    }else if (card.cardSuit === 'heart'){
        accum.hearts.push(card);
    }
    return accum;

},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(reduce);




// робота з стінгою
// //
// let str = 'hello world!!!'
// str.length - довжина стінги
// str.concat('wwww1111!!!') - сконкативувати щось до стрінги
// str.toUpperCase() - привести значення стрінги до верхнього регістру
// str.toLowerCase() - привести значення стрінги до нижнього регістру
// str.startsWith('xxx') - перевірити наявність символів в стінзі, видає булове значення. починає шукати значення від початку стрінги
// str.andsWith('xxx') - перевірити наявність символів в стінзі, видає булове значення. починає шукати значення від кінця стрінги
// str.includes('ffddf') - перпевіряє наявніть значення в стрінзі, виводить булову відповідь
// str.substring(2,7) - вирізає частину стінги від першого значення до другого
// str.indexOf('w') - визначити індекс елементу стрінги, починає шукати елемент з початку
// str.lastIndexOf('l') - визначає індекс елементу, починає шукати елемет з кінця
// str.indexOf('w', 4) - визначає індекс елементу, починає шукати з позиції
// str.charAt(8) - визначає який елемент в позиції
// str.replace('wo', 'mi') - замінити якийсь символ на інший, заміняє 1 раз з початку
// str.replaceAll('wo', 'mi') - замінити якийсь символ на інший, у всіх випадках
// str.split(' ') - зозподіляє стрінгу по вказаному елементу та формує масив


//Базові функції масивів
////
// arr.push() - додати новий елемент з кінця
// arr.pop() - видалити елемент з кінця масиву, видалений елемент повертається
// arr.unshift() - додати новий елемент з початку
// arr.shift() - видалит елемент з початку масиву, видалений елемент повертається
// arr.join(;) - об''єднати всі елементи масиву, в дужках зається розподілювач
// arr.concat(nums) - об''єднати 2 масиви, до першого додається в кінці другий, що в дужках, створюється новий масив
// arr.reverse() - реверснути масив, всі елементи міняють порядок
// arr.slice(1, 6) - обрізати масив, вирізані елементи повертаються у вигляді нового масву
// arr.splice(3,8) - вирізає з 3 елемента 8 значень та пакує в новий масив, в головному масиві значення видаляються
// arr.splice(3,8,'dsvsds', 15, 'rev3') - 3 та наступні значення в умові описуть елементи, які необхідно вставити замість вирізаних
// arr.indexOf('vfd') - визначити індекс конкретного елементу
// arr.includes('sfsdsd')- перевірити наявність в масиві значення, в результаті виводить булове значення


// Функції масивів на основі колбеків
//
// users.forEach(value => console.log(value)) - виконає функцію для кожного елементу масиву (інтерує масив та виконує функцію вказану в дужках)
// let filter = users.filter(value => value.status) - фільтрує, значення виводиться в окремий масив
// let map = users.map((user, index) => ({name: user.name, age: user.age, status: user.status, id: index + 1}))
//                        - інтерує масив, додає нове значення та виводить у новий масив
// let find = users.find(value => value.name === 'max'); - функція перевіряє наявність елементу, знаходить перший і зупиняється, виводить булове значення
//           console.log(find);
// users.every(value =>value.status) - перевіряє статуси в масиві, якщо ВСІ статуси в масиві "тру" виводить булове значення 'тру'
// users.some(value =>value.status) - перевіряє статуси в масиві, якщо ХОЧ ОДИН статус в масиві "тру" виводить булове значення 'тру'

// // users.sort((user1, user2) => user1.age - user2.age);
// // let sort = users.sort((user1, user2) => {
// //     if (user1.name > user2.name) {
// //         return 1;
// //     }
// //     if (user1.name < user2.name) {
// //         return -1;
// //     }
// //     if (user1.name === user2.name) {
// //         return 0;
// //     }
// //
// // });
// // console.log(sort);   - сортує перший варіант по значенню, другий по стрінзі


// let reduce = users.reduce(function (accumulator, user) {
//
//     if (user.status) {
//         accumulator.statusTrue.push(user);
//     } else {
//         accumulator.statusFalse.push(user);
//     }
//     return accumulator;
// }, {statusTrue: [], statusFalse: []});
//
// console.log(reduce);  - бере масив, проганяє через умови та вкладає в новий масив який ми задамо, масисиви в масиві, масиви в об'єкті
//                       першим значенням іде масив який формуємо(в який акумуємо) другим масив який інтеруємо







