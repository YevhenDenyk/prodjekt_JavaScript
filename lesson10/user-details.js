// На странице user-details.html:
//// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.



let url = new URL(location.href);
let id = url.searchParams.get('id');

// let userDiv = document.querySelector('#userDiv');
let userDetailsDiv = document.querySelector('.userDetailsDiv')


//////  Через цикл в циклі в 3 рівня
//  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(response => response.json())
//     .then(user => {
//         for (const userKey in user) {
//             if (typeof user[userKey] !== "object") {
//
//                 const userKeyDiv = document.createElement('div');
//                 userKeyDiv.innerText = `${userKey} --- ${user[userKey]}`;
//                 userDetailsDiv.appendChild(userKeyDiv);
//
//             } else {
//                 for (const userKeyKey in user[userKey]) {
//                     if (typeof user[userKey][userKeyKey] !=='object') {
//
//                         const userKeyDiv = document.createElement('div');
//                         userKeyDiv.innerText = `${userKeyKey} --- ${user[userKey][userKeyKey]}`;
//                         userDetailsDiv.appendChild(userKeyDiv);
//
//                     } else {
//
//                         for (const userKeyKeyKey in user[userKey][userKeyKey]) {
//                             const userKeyDiv = document.createElement('div');
//                             userKeyDiv.innerText = `${userKeyKeyKey} --- ${user[userKey][userKeyKey][userKeyKeyKey]}`;
//                             userDetailsDiv.appendChild(userKeyDiv);
//                         }
//
//
//                     }
//                 }
//
//             }
//         }
//     })


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
const buttonDiv = document.querySelector('.buttonDiv');


let postUserButton = document.createElement('button');
postUserButton.innerText = 'post of current user'
buttonDiv.appendChild(postUserButton);

postUserButton.onclick =(e)=>{
    e.preventDefault()  //// --- заборонити виконання дефолтної події
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(post=>{
            // console.log(post)
            for (const postKey of post) {

                const postDiv = document.createElement('div');
                postDiv.className = 'postDiv';
                postUserDiv.appendChild(postDiv)

                const titleUserPost = document.createElement('div');
                titleUserPost.className = 'titleUserPost'
                titleUserPost.innerText = `${postKey.id}:  ${postKey.title}`;
                // postUserDiv.appendChild(titleUserPost);

                const linkPost = document.createElement('button');
                // linkPost.className = 'linkPost'
                linkPost.onclick = () => {location.href = `post-details.html?id=${postKey.id}`}
                linkPost.innerText = 'post details';
                // postUserDiv.appendChild(linkPost);

                postDiv.append(titleUserPost, linkPost)

            }
        })
    postUserButton.disabled=true
    }