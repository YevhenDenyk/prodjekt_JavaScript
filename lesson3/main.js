// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// let x = +prompt('enter a nuber');
// if (x !== 0) {
//     console.log('true');
// } else {
//     console.log('folse')
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('enter a time');
// if (time > 0 && time <= 15) {
//     console.log("перша четверть години")
// } else if (time > 15 && time <= 30) {
//     console.log("друга четверть години");
// } else if (time > 30 && time <= 45) {
//     console.log('третя четверть години');
// } else if (time > 45 && time <= 60) {
//     console.log('четверта четверть години');
// } else {
//     console.log("в годині 60 хв, якщо що)))");
// }



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

// let day = +prompt('Число місяця?')
// if (day >= 1 && day <= 10) {
//     console.log('the first decade of the month');
// } else if (day > 10 && day <= 20) {
//     console.log('the second decade of the month');
// } else if (day > 20 && day <= 31) {
//     console.log('the third decade of the month');
// } else {
//     console.log('ERROR')
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('dey?');
// switch (day) {
//     case 1:
//         console.log('mondey');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('sunday');
//         break;
//     default:
//         console.log('not dey');
//         break;
// }




//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let x = 4;
let y = 7;
if (x > y) {
    console.log(x);
}else if (x < y) {
    console.log(y);
} else {
    console.log('even');
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)

// let x='' || 'default';
// console.log(x);






