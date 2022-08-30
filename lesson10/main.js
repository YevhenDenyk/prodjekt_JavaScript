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
        divUser.className = 'userDivP1';

        const divUserName = document.createElement('div');
        divUserName.className = 'divUserName'
        divUserName.innerText = `${user.name}`;


        const linkUser = document.createElement('a');
        linkUser.href = `user-details.html?id=${user.id}`;
        // const linkUser = document.createElement('button');
        // linkUser.onclick = () => {location.href = `user-details.html?id=${user.id}`}
        linkUser.innerText = 'user details';
        linkUser.className = 'linkUser'


        divUser.append(divUserName,linkUser);
        htmlDivElement.appendChild(divUser);
        })
    );
