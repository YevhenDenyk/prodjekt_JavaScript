// На странице user-details.html:
//// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
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
//    //console.log(document.getElementById('userDiv'))     //--- перевірка заданого індексу, також перевіряв через елементи в консолі.

let userDiv = document.querySelector('#userDiv');
let userDetailsDiv = document.querySelector('.userDetailsDiv')

// const userDetailsDiv = document.createElement('div');
// userDetailsDiv.classList.add('userDetailsDiv');
// userDiv.appendChild(userDetailsDiv);


//////  Через цикл в циклі в 3 рівня
 // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
 //    .then(response => response.json())
 //    .then(user => {
 //        for (const userKey in user) {
 //            if (typeof user[userKey] !== "object") {
 //
 //                const userKeyDiv = document.createElement('div');
 //                userKeyDiv.innerText = `${userKey} --- ${user[userKey]}`;
 //                userDetailsDiv.appendChild(userKeyDiv);
 //
 //            } else {
 //                for (const userKeyKey in user[userKey]) {
 //
 //                    if (typeof user[userKey][userKeyKey] !=='object') {
 //                        const userKeyDiv = document.createElement('div');
 //                        userKeyDiv.innerText = `${userKeyKey} --- ${user[userKey][userKeyKey]}`;
 //                        userDetailsDiv.appendChild(userKeyDiv);
 //
 //                    } else {
 //
 //                        for (const userKeyKeyKey in user[userKey][userKeyKey]) {
 //                            const userKeyDiv = document.createElement('div');
 //                            userKeyDiv.innerText = `${userKeyKeyKey} --- ${user[userKey][userKeyKey][userKeyKeyKey]}`;
 //                            userDetailsDiv.appendChild(userKeyDiv);
 //                        }
 //
 //
 //                    }
 //                }
 //
 //            }
 //        }
 //    })


// Через рекурсію

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {

        createUser(user);

        function createUser (user) {
            for (const userKey in user) {
                if (typeof user[userKey] !== "object") {

                    const userKeyDiv = document.createElement('div');
                    userKeyDiv.innerText = `${userKey}:    ${user[userKey]}`;
                    userDetailsDiv.appendChild(userKeyDiv);

                } else {
                    const userKeyDiv = document.createElement('div');
                    userKeyDiv.innerText = `${userKey}:`;
                    userDetailsDiv.appendChild(userKeyDiv);
                    createUser(user[userKey]);
                }
            }
        }
    });

const postUserDiv = document.querySelector('#userPost');

// let postUserButton = document.createElement('a');
// postUserButton.innerText = 'post of current user'
// userDiv.appendChild(postUserButton);

// postUserButton.href =()=>{
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
//         .then(response => response.json())
//         .then(post=>{
//             for (const postKey in post) {
//                 const titleUserPost = document.createElement('div');
//                 titleUserPost.innerText = `${postKey}: ${post[postKey]}`;
//                 postUserDiv.appendChild(titleUserPost);
//             }
//         })
// }

let postUserButton = document.createElement('button');
postUserButton.innerText = 'post of current user'
userDiv.appendChild(postUserButton);
postUserButton.onclick =(e)=>{
    e.preventDefault()  //// --- не розібрався що це таке, але без нього не працює.
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(post=>{
            console.log(post)
            for (const postKey of post) {

                const titleUserPost = document.createElement('div');
                titleUserPost.innerText = `${postKey.id}:  ${postKey.title}`;
                postUserDiv.appendChild(titleUserPost);

                const linkPost = document.createElement('button');
                linkPost.onclick = () => {location.href = `post-details.html?id=${postKey.id}`}
                linkPost.innerText = 'user details';
                postUserDiv.appendChild(linkPost);

            }
        })
}