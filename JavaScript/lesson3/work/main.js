// let arr = [10,20,30,40,50,60,70,80,90,100];
// console.log(arr);
//
// for (const number of arr) {
//     console.log(number)
// }
//
// let menuitem = [
//     'about',
//     'cources',
//     'contact',
//     'blog'
// ]
// document.write(`<ul>`);
// for (const string of menuitem) {
//     document.write(`<li> ${string}`)
// }
// document.write(`</ul>`)

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

document.write(`<div>`)
for (const user of users) {
    if (user.status)
    document.write(`<li> ${user.name} ${user.age} </li>`)
    console.log(user);
}
document.write(`</div>`)

