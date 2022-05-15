let users = [
    {id: 1, name: 'Dima', age: 36, status: true},
    {id: 2, name: 'Marianna', age: 37, status: true},
    {id: 3, name: 'Vitaliy', age: 8, status: false},
    {id: 4, name: 'Jura', age: 4, status: false},
    {id: 5, name: 'Tetiana', age: 66, status: false},
    {id: 6, name: 'Olya', age: 58, status: false},
    {id: 7, name: 'Vasul', age: 32, status: true},
    {id: 8, name: 'Khristina', age: 35, status: true},
    {id: 9, name: 'Oleksandr', age: 5, status: false},
    {id: 10, name: 'Anna', age: 2, status: false}
];


let usersBox = document.getElementById('users');
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
for (const user of users) {
    let userDiv = document.createElement('div')
    userDiv.innerText = user.name + ''
    let button = document.createElement('button')
    button.innerHTML = '<b>add to favorites</b>'
    button.onclick = function (e){
        favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
    userDiv.append(button)
    usersBox.append(userDiv)
}

