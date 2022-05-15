let btn1 = document.getElementById('btn1')

// buttun1.onclick = function (){
//     console.log('ти нашо мене натискаєш стільки раз?')
// };
//
// buttun1.addEventListener('click', function (){
//     console.log('click1')
// })

// buttun1.addEventListener('mousemove', function (e){
//     console.log('click me')
//     console.log(e.target)
// })

// document.getElementById('title')
// document.onmousemove = function (e) {
//     title.innerText = `x - ${e.clientX}; y - ${e.clientY}`
// }

// let points = [];
// document.onclick = function (e) {
//     points.push({x: e.clientX, y: e.clientY});
// };
//
//
// btn1.addEventListener('click', () => {
//     console.log(points);
// });

// let users = [];
// let form = document.forms[0];
// form.onsubmit = function (e) {
//     e.preventDefault()
//     let user = {login: e.target.login.value, password: e.target.password.value}
//     users.push(user)
//
//     console.log(users)
// };
//
// let inputLogin = form.login;
// inputLogin.addEventListener('input', (e) => {
//     if (e.target.value.toLowerCase().includes('fuck')) {
//         alert('кря-кря')
//     }
//
//     console.log('input done')
//     console.log(e.target.value);
//
// })


// let users = [
//     {name: 'Dima', age: 35},
//     {name: 'Marianna', age: 78}
// ]
// let form = document.forms[0];
// let usernameInput = form.username;
// let result = document.getElementById('result')
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//     result.innerText=''
//     let usernameValue = usernameInput.value;
//     let filter = users.filter(value => value.name === usernameValue);
//     for (const item of filter) {
//         let li = document.createElement('li');
//         li.innerText = `${item.name}, ${item.age}`;
//         result.append(li)
//     }
// };


let users = [
    {name: 'Dima', age: 35, status: true},
    {name: 'Marianna', age: 78, status: false}
]

let chbx = document.getElementById('chbx')
chbx.onclick = function () {

    let resultArr = [];
    if (chbx.checked) {
        resultArr = users.filter(value => value.status)
    } else {
        resultArr = users.filter(value => !value.status)
    }
    for (const item of resultArr) {
        console.log(item);
    }
};
