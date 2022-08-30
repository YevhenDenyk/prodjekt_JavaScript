//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let url = new URL(location.href);
let id = url.searchParams.get('id');

const detailPost = document.querySelector('.detailPost');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(post => {

        for (const postKey in post) {

            const detailPostKey = document.createElement('div');
            detailPostKey.innerText = `${postKey}: ${post[postKey]}`;
            detailPost.appendChild(detailPostKey);

        }
    })

const commentsToPost = document.querySelector('.commentsToPost');

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response =>response.json())
    .then(comments=>{
        for (const comment of comments) {

            let commentDiv = document.createElement('div');
            commentDiv.className = 'commentDiv';
            commentsToPost.appendChild(commentDiv);

            for (const commentKey in comment) {

                let commentKeyDiv = document.createElement('div');
                commentKeyDiv.className = 'commentKeyDiv';
                commentKeyDiv.innerText = `${commentKey}: ${comment[commentKey]}`;
                commentDiv.appendChild(commentKeyDiv);
            }
        }

    })