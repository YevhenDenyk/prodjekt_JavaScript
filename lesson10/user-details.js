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

const olUserDetails = document.createElement('ol');
userDiv.appendChild(olUserDetails);


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        console.log(user);

        for (const usersKey in user) {

            const li = document.createElement('li');
            li.innerText = `${usersKey} --- ${user[usersKey]}`;
            olUserDetails.appendChild(li);
        }

        // const liId = document.createElement('li');
        // liId.innerText = `id --- ${user.id}`
        // olUserDetails.appendChild(liId);


    })