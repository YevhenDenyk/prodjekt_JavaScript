// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let ololo= ['vfv', 15, true, 16, 51651, 'kek', 'wefwef', 'vrevre', false];
ololo[9]='ohohoh'
console.log(ololo);
console.log(ololo[0]);
console.log(ololo[1]);
console.log(ololo[2]);
console.log(ololo[3]);
console.log(ololo[4]);
console.log(ololo[5]);
console.log(ololo[6]);
console.log(ololo[7]);
console.log(ololo[8]);
console.log(ololo[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book0 = {
    title: 'title',
    pageCount: 247,
    genre: 'genre',
}
let book1 = {
    title: 'title etbdf',
    pageCount: 247,
    genre: 'genre ddd',
}
let book2 = {
    title: 'title qqd',
    pageCount: 247,
    genre: 'genre rrr',
}


console.log(book0);
console.log(book0.pageCount);
console.log(book0.title);
console.log(book1);
console.log(book1.pageCount);
console.log(book1.title);
console.log(book2);
console.log(book2.pageCount);
console.log(book2.title);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let book3 = {
    title: 'title',
    pageCount: 247,
    genre: 'genre',
    autor: ['vasya','jora','igor']
}
let book4 = {
    title: 'title etbdf',
    pageCount: 247,
    genre: 'genre ddd',
    autor: ['roma','vlad']
}
let book5 = {
    title: 'title qqd',
    pageCount: 247,
    genre: 'genre rrr',
    autor: [4143,'david']
}
console.log(book3.autor[1]);
console.log(book4.autor[0]);
console.log(book5.autor[0]);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

const user = [
    {
        name: 'ihor',
        username: 'ihiryan',
        password: 'cwec124',
    },
    {
        name: 'sdvsv',
        username: 'ihisdvsdvryan',
        password: 'cwesdvec124',
    },
    {
        name: 'sdvsdv',
        username: 'regergerg',
        password: 'cwec12ergergerg4',
    },
    {
        name: 'egreghj',
        username: 'ihiergredcryan',
        password: 'svsdvdsv',
    },
    {
        name: 'evsdvsdv',
        username: 'sdvsihirsvsdvsdyan',
        password: 'cwesvsvsdvc124',
    },
    {
        name: 'iervhor',
        username: 'ihirrverryan',
        password: 'cwec1wefwef24',
    },
    {
        name: 'iervhor',
        username: 'ihirrverryan',
        password: 'cwec12dvdfvdfv4',
    },
    {
        name: 'iervhor',
        username: 'ihirrverryan',
        password: 'cwec12dfvdfvd4',
    },
    {
        name: 'iervhor',
        username: 'ihirrverryan',
        password: 'cwecdvdfvdf124',
    },
    {
        name: 'iervhor',
        username: 'ihirrverryan',
        password: 'cwedvdvdfvc124',
    },
    {
        name: 'iervhor',
        username: 'ihirrverryan',
        password: 'cwecdvdfvdfv124',
    },
    {
        name: 'iervhor',
        username: 'ihirrverryan',
        password: 'aaaaaaaaaaaaaaaa',
    },
]

console.log(user);
console.log(user[0]['password']);
console.log(user[1]['password']);
console.log(user[2].password);
console.log(user[3]['password']);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6]['password']);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9]['password']);
console.log(user[10].password);
console.table(user[11]['password']);
