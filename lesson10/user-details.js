// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.



let url = new URL(location.href);
let id = url.searchParams.get('id');


// const userDiv = document.createElement('div');
// userDiv.classList.add(`userDiv`)
//    //userDiv.id = ('userDiv');         //--- Як правильно задати індекс елементу? -- працює, мабуть вірно зробив.
// document.body.appendChild(userDiv);
//     //console.log(document.getElementById('userDiv'))     //--- перевірка заданого індексу, також перевіряв через елементи в консолі.

let userDiv = document.querySelector('#userDiv');

const userDetailsDiv = document.createElement('div');
userDiv.appendChild(userDetailsDiv);

 fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        for (const userKey in user) {

            let qwe = user[userKey];

            if (typeof qwe !== "object") {
                const userKeyDiv = document.createElement('div');
                userKeyDiv.innerText = `${userKey} --- ${qwe}`;
                userDetailsDiv.appendChild(userKeyDiv);
            } else {
                for (const qweKey in qwe) {
                    const userKeyDiv = document.createElement('div');
                    userKeyDiv.innerText = `${qweKey} --- ${qwe[qweKey]}`;
                    userDetailsDiv.appendChild(userKeyDiv);
                }

            }
        }
    })






 // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    // .then(response => response.json())
    // .then(user => {
    //     // console.log(user);
    //     for (const userKey in user) {
    //         const userKeyDiv = document.createElement('div');
    //         userKeyDiv.innerText = `${userKey} --- ${user[userKey]}`;
    //         userDetailsDiv.appendChild(userKeyDiv);
    //     }
    // })


// Якась ххх через рекурсію

// fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(response => response.json())
//     .then(user => {
//         function explorer(user) {
//             for (const userKey in user) {
//
//                 let qwe = user[userKey];
//
//                 if (typeof qwe !== "object") {
//                     const userKeyDiv = document.createElement('div');
//                     userKeyDiv.innerText = `${userKey} --- ${qwe}`;
//                     userDetailsDiv.appendChild(userKeyDiv);
//                 } else {
//                     explorer(qwe)
//                 }
//
//             }
//         }
//     });

