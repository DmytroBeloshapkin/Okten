// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((value) => value.json())
//     .then(postsData => {
//
//
//         let postsBlock = document.getElementsByClassName('posts')[0]
//         for (const postItem of postsData) {
//             console.log(postItem);
//             let postLi = document.createElement('li')
//             postLi.innerText = postItem.body
//             postsBlock.appendChild(postLi)
//         }
//     })


fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then(users => {
            console.log(users);
        }
    )

// fetch('https://jsonplaceholder.typicode.com/users',{
//     method: 'GET'
//     }).then(value => value.json())
//     .then(value => console.log(value));

let form = document.forms.saveUsersForm;
form.onsubmit = (e) => {
    e.preventDefault();
    let name = form.name.value;
    let username = form.username.value;
    let email = form.email.value;

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            username,
            email,
        })
    }).then(value => value.json())
        .then(value => console.log(value))
}

