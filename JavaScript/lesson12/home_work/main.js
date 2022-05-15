// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => {
        return value.json();
    })

    .then(posts => {
            let div = document.createElement('div');
            div.classList.add('style')
            for (const post of posts) {
                let divCard = document.createElement('div')
                divCard.classList.add('card')
                divCard.innerHTML = `
    <h3> ID:    ${post.id}</h3>
    <h4> title: ${post.title}</h4>
    <h5> body:  ${post.body}</h5>`;
                div.appendChild(divCard);
                document.body.appendChild(div)
            }
        }
    )


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((value) => value.json())
    .then(comments => {
        let wraper = document.createElement('div')
            wraper.classList.add('style')
    for (const comment of comments) {
        let divCard = document.createElement('div')
        divCard.classList.add('comment')
        divCard.innerHTML=`
        <h3>ID: ${comment.id}</h3>
        <h4>name: ${comment.name}</h4>
        <h5>email: ${comment.email}</h5>
        <h6>body: ${comment.body}</h6>`;

        wraper.appendChild(divCard);
        document.body.appendChild(wraper)
    }
}
)
