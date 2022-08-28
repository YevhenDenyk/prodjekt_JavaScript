// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// const htmlDivElement = document.createElement('div');
// document.body.appendChild(htmlDivElement)
//
// for (const simpson of simpsons) {
//
//     const mainDiv = document.createElement("div");
//     mainDiv.classList.add('simpsonsss')
//     htmlDivElement.appendChild(mainDiv)
//
//     const h2 = document.createElement('h2');
//     h2.innerText = `${simpson.name} --- ${simpson.surname}`
//     mainDiv.appendChild(h2);
//
//     const paragraph = document.createElement('p');
//     paragraph.innerText = `${simpson.age} --- ${simpson.info}`;
//
//     const image = document.createElement('img');
//     image.src = `${simpson.photo}`;
//
//     mainDiv.append(paragraph, image);
// }



// Цикл в циклі
// - Є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let htmlDivElement = document.createElement('div');
// document.body.appendChild(htmlDivElement);
//
// for (const coursesElement of coursesArray) {
//
//     const titleDiv = document.createElement('div');
//     titleDiv.innerText= `${coursesElement.title}`
//     titleDiv.style.marginTop = '20px';
//     titleDiv.style.border = '2px solid darkblue'
//
//
//     const monthDuration = document.createElement("div");
//     monthDuration.innerText = `${coursesElement.monthDuration}`;
//     monthDuration.style.border = '2px solid darkblue';
//     monthDuration.style.marginTop = '20px';
//
//     const hourDuration = document.createElement('div');
//     hourDuration.innerText = `${coursesElement.hourDuration}`;
//     hourDuration.style.border = '2px solid darkblue';
//     hourDuration.style.marginTop = '20px';
//
//     const modulesDiv = document.createElement('div');
//     modulesDiv.style.border = '2px solid darkblue';
//     modulesDiv.style.marginTop = '20px';
//
//     let ul = document.createElement('ul');
//     modulesDiv.appendChild(ul);
//
//     for (const modulesKey of coursesElement.modules) {
//         const liElement = document.createElement('li');
//         liElement.innerText = `${modulesKey}`
//         ul.appendChild(liElement);
//     }
//
//     htmlDivElement.append(titleDiv,monthDuration,hourDuration,modulesDiv)
// }
//


//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const htmlDivElement = document.createElement('div');
//
// htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
// document.body.append(htmlDivElement);
//
// const node = htmlDivElement.cloneNode(true);
// document.body.appendChild(node);


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let array = ['Main','Products','About us','Contacts'];
//
// const menu = document.getElementsByClassName('menu')[0];
//
// for (const item of array) {
//     const li = document.createElement('li');
//     li.innerText = item;
//     menu.appendChild(li);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// const htmlDivElement = document.createElement('div');
// document.body.append(htmlDivElement);
// for (const item of coursesAndDurationArray) {
//     const innerDiv = document.createElement('div');
//     htmlDivElement.append(innerDiv);
//
//     const h3 = document.createElement('h3');
//     h3.innerText = `${item.title}`;
//
//     const p = document.createElement('p');
//     p.innerText = `${item.monthDuration}`;
//
//     innerDiv.append(h3, p);
// }




// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// const htmlDivElement = document.createElement('div');
// document.body.append(htmlDivElement);
// for (const item of coursesAndDurationArray) {
//     const innerDiv = document.createElement('div');
//     innerDiv.classList.add('item');
//     htmlDivElement.append(innerDiv);
//
//     const h3 = document.createElement('h3');
//     h3.classList.add('heading');
//     h3.innerText = `${item.title}`;
//
//     const p = document.createElement('p');
//     p.setAttribute('class','description')
//     p.innerText = `${item.monthDuration}`;
//
//     innerDiv.append(h3, p);
// }


//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// const paragraphElement = document.createElement('p');
// paragraphElement.innerText = `Ololol trololo`;2
// paragraphElement.setAttribute('id', 'text');
// document.body.appendChild(paragraphElement);
//
// const button = document.createElement('button');
// button.innerText = 'click';
// document.body.appendChild(button);
//
// button.onclick = ()=>{
//     paragraphElement.style.display = 'none';
// }



//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const input = document.createElement('input');
// const button = document.createElement('button');
// input.type = 'number';
// input.innerText = 'age';
// button.innerText = 'Click';
//
// document.body.append(input, button);
//
// button.onclick = () => {
//     let value = input.value
//
//     if (value > 0 && value < 18) {
//         alert('Stop');
//     } else if (value >= 18) {
//         alert('Hello');
//     } else {
//         alert('error');
//     }
// }


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const input1 = document.createElement('input');
// let input2 = document.createElement('input');
// let input3 = document.createElement('input');
// const button = document.createElement('button');
// input1.type = 'number';
// input2.type = 'number';
// input3.type = 'text';
// button.innerText = 'ClicK';
// document.body.append(input3, input2, input1, button);
//
// button.addEventListener('click', function () {
//     let row = input1.value
//     let col = input2.value
//     let tex = input3.value
//
//     let generator = (tr, td, text) => {
//         const htmlTableElement = document.createElement('table');
//         document.body.append(htmlTableElement);
//
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr');
//             htmlTableElement.appendChild('tr');
//
//             for (let j = 0; j < td; j++) {
//                 const tr = document.createElement('td');
//                 tr.innerText = `${text}`
//                 tr.appendChild(td);
//             }
//         }
//     };
//
//     generator(row, col, tex);
//     button.disabled = true;
// });