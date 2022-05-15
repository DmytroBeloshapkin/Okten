// console.log(window.location);
// location.href = "https://www.google.com"

let users = [
    {id: 1, name: 'Dima', age: 36, status: true}, {id: 2, name: 'Marianna', age: 37, status: true}, {
        id: 3,
        name: 'Vitaliy',
        age: 8,
        status: false
    }, {id: 4, name: 'Jura', age: 4, status: false}, {id: 5, name: 'Tetiana', age: 66, status: false}, {
        id: 6,
        name: 'Olya',
        age: 58,
        status: false
    }, {id: 7, name: 'Vasul', age: 32, status: true}, {id: 8, name: 'Khristina', age: 35, status: true}, {
        id: 9,
        name: 'Oleksandr',
        age: 5,
        status: false
    }, {id: 10, name: 'Anna', age: 2, status: false}];

// // let userS = '{"name": "dima", "age": 31, "status": true}'
// let userS = JSON.stringify(users) // в стрінгу
// console.log(users);
// console.log(userS);
//
// let pars = JSON.parse(userS) // з стрінги в обжект
// console.log(pars);

// window.localStorage.setItem('key1','value1')

// let item1 = localStorage.getItem('key1')
// console.log(item1);

// localStorage.setItem('user', {name: 'vasya', toString() {
//     return'x y '
//     }})

// let item2 = localStorage.setItem('user', JSON.stringify({name: 'vasya'}))
// console.log(item2);

// for (const user of users) {
//     localStorage.setItem(`users-${user.id}`, JSON.stringify(user))
// }

// console.log(localStorage.length);
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     let user = localStorage.getItem(key)
//     console.log(JSON.parse(user));
// }

// localStorage.setItem('users', JSON.stringify(users));
// let usersJSON = localStorage.getItem('users');
// console.log(usersJSON);
// let pars = JSON.parse(usersJSON);
// console.log(pars);
//
// let filter = pars.filter(value => value.status)
// localStorage.setItem('users',JSON.stringify(filter))

// for (const user of users) {
//
//     let div = document.createElement('div')
//     div.innerText = user.name;
//     let but = document.createElement("button")
//     but.innerText = 'кнопка'
//     div.append(but)
//     // document.body.append(div);
//     but.onclick = function () {
//         let users = localStorage.getItem('users')
//         console.log(users);
//         if (!users) {
//             users = []
//             users.push(user)
//             let string = JSON.stringify(users)
//             localStorage.setItem(`users`, string)
//         } else {
//             let real = JSON.parse(users)
//             real.push(user)
//             localStorage.setItem('users', JSON.stringify(real))
//         }
//
//     }
//
//     document.body.append(div)
//
// }


// sessionStorage.setItem('xxx', 'yyy')

// document.cookie = 'name=кука'; // кука діставатель
// document.cookie='surname=abrikosov';
// document.cookie='age=36'
//
// let cookies = document.cookie.split(';')
// let obj= {}
//
// for (let i = 0; i < cookies.length; i++) {
//     let cookie = cookies[i].split('=');
//     obj[cookie[0]] = cookie[1];
// }
// console.log(obj);

// navigator.geolocation.getCurrentPosition(({coords})  => console.log(coords)) //знайти по координатах

// navigator.mediaDevices.getUserMedia({video: true}) // відео
//     .then(stream => {
//         let videoplayer = document.getElementById('videoplayer')
//         videoplayer.srcObject = stream;
//         videoplayer.play();
//     });

// let siteUrl = location.href;
// console.log(siteUrl);
//
// let url = new URL(siteUrl)
// console.log(url);
// let ijt = url.searchParams.get('_ijt')
// console.log(ijt);


