// let a;
// a = 100;
// console.log(a);
//
// let str = 'ddbfddfcssecsd';
// console.log(str);
//
// let bool1 = true;
// let bool2 = false;
//
// console.log(typeof a);
// console.log(typeof str);
// console.log(bool1);


let str1;
str1 = 'hello';
console.log(str1);
// alert(str1);
// document.write(str1);

let str2;
str2 = 'owu';
console.log(str2);
// document.write(str2)

let str3 = 'com';
console.log(str3);
// document.write(str3);

let str4 = 'ua';
console.log(str4);
// document.write(str4);

let n1 = 1;
console.log(n1);
let n2 = 10;
console.log(n2);
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;

let words1 = str1 + ' ' + str2 + '.' + str3 + '.' + str4;
console.log(words1)
// alert(words1);
document.write(words1);

let words2 = `${str1} ${str2}.${str3}.${str4}`;
console.log(words2);

// < > <= >= == === != !==
//== "еквівалентне" порінює як код стрінгу та цифру
//=== поріпнює стрінгу і цифру як вони написані
// !== не іквівалетне
console.log(!!'vnjvfj');
console.log(!!'');

let bool1 = n2 > n3;
console.log(bool1);
// alert(bool1);

console.log(n4 <= n5);
console.log(n7 !== n6 * n4);


let firstName;
firstName = 'Yevhen';
let lastName = 'Denyk';
let middleName ='Vyacheslavovich'
let flm;
flm = firstName + ' ' + lastName + ' ' + middleName;
console.log(flm);

let a = 100
let b = '100'
let c = true
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof (+b));
console.log(!!a);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let person = prompt("Як вас звати?", "");
console.log(person);

if (person != null) {
    document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
}

let persone1 = prompt("Яке у васолень прізвище?", "");
console.log(persone1);

let persone2 = prompt("Як вас побатькові?", "");
console.log(persone2);