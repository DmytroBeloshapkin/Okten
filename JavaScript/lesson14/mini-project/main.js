let usersContainer = document.getElementsByClassName('users')[0]


fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then(value => {
        for (const userItem of value) {
            let userContainer = document.createElement('div')
            userContainer.classList.add('user')
            let anchor = document.createElement('a')
            anchor.innerText = `${userItem.id} - ${userItem.name}`
            anchor.href = `./user-details.html?data=${JSON.stringify(userItem)}`
            userContainer.append(anchor)
            usersContainer.appendChild(userContainer)
        }
    });

///////////////////////////////////////////////////////////////////////////

let url = new URL(location.href)
let user = (JSON.parse(url.searchParams.get('data')))
console.log(user);

let userDetailsContainer = document.getElementsByClassName('user-details')[0]
let postsContainer = document.getElementsByClassName('posts')[0]
let postsDetailsButton = document.getElementsByClassName('postsDetailsButton')[0]
userDetailsContainer.innerText = `${JSON.stringify(user)}`


postsDetailsButton.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((value) => value.json())
        .then(value => {
                for (const postItem of value) {
                    let postContainer = document.createElement('div')
                    postContainer.classList.add('post')
                    postContainer.innerText = postItem.title
                    let postDetailsButton = document.createElement("button")
                    postDetailsButton.innerText = 'posts detaling'
                    postDetailsButton.onclick = function () {
                        location.href = `./post-details.html?data=${JSON.stringify(postItem)}`
                    }
                    postContainer.appendChild(postDetailsButton)

                    postsContainer.append(postContainer)
                }
            }
        )
}
userDetailsContainer.appendChild(postsButton)

///////////////////////////////////////////////////////////////////////////


let url1 = new URL(location.href);
let post = JSON.parse(url1.searchParams.get('data'));
console.log(post);
let postContainer = document.getElementsByClassName('post')[0];
postContainer.innerText = JSON.stringify(post);

let commentsContainer = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const commentItem of value) {
            let commentContainer = document.createElement('li');
            commentContainer.innerText = commentItem.body;

            commentsContainer.appendChild(commentContainer);
        }
    });













