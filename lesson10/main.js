// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
//

const htmlDivElement = document.createElement('div');
htmlDivElement.classList.add('item');
document.body.appendChild(htmlDivElement);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( users => users.forEach(user=>{
        let divUser = document.createElement('div');
        divUser.innerText = `${user.id} ${user.name}`;


        const linkUser = document.createElement('a');
        linkUser.href = `user-details.html?id=${user.id}`;
        // const linkUser = document.createElement('button');
        // linkUser.onclick = () => {location.href = `user-details.html?id=${user.id}`}
        linkUser.innerText = 'user details';
        divUser.appendChild(linkUser);

        htmlDivElement.appendChild(divUser);
        })
    );






//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

// Стилизація проєкта -
//      index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.

//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .

//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
