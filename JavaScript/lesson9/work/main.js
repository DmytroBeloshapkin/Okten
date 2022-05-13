// let h2 = document.createElement('h2');
// h2.innerText = 'lesson 9'
// document.body.append(h2);
// let target = document.getElementsByClassName('target');
// target = target[0];
// let cloneNodeH2 = h2.cloneNode(true)
// target.append(cloneNodeH2);

// let wrap = document.createElement('div') // div
// wrap.classList.add('wrap') // div class wrap
//
// let outer = document.createElement('div');
// outer.classList.add('outer');
//
// let box1 = document.createElement('div');
// box1.classList.add('inner');
// box1.classList.add('box-1');
//
// let box2 = document.createElement('div');
// box2.classList.add('inner');
// box2.classList.add('box-2');
//
// wrap.append(outer);
// outer.append(box1, box2);
// document.body.append(wrap);
//
// let point1 = document.getElementsByClassName('point1')[0];
// console.log(point1.nextElementSibling);
// console.log(point1.previousElementSibling);
// console.log(point1.parentElement);
//
// let anchorElement = document.createElement('a')
// anchorElement.href = 'www.owu.com.ua'
// anchorElement.innerText = 'web'
// document.body.appendChild(anchorElement)

// let products = [
//     {title: 'milk', price: 22},
//     {title: 'beer', price: 28},
//     {title: 'juice', price: 38},
//     {title: 'coca-cola', price: 21},
//     {title: 'milk', price: 22},
//     {title: 'beer', price: 28},
//     {title: 'juice', price: 38},
//     {title: 'coca-cola', price: 21},
// ]
//
// let products2 = [
//     {title: 'milk', price: 22},
//     {title: 'beer', price: 28},
//     {title: 'juice', price: 38},
//     {title: 'coca-cola', price: 21},
//
// ]
//
//
// function productsAppeder(list){
//     for (const product of list) {
//
//         let productDiv = document.createElement('div');
//         let productsDiv = document.getElementsByClassName('products')[0];
//         productsDiv.appendChild(productDiv)
//
//         let h2 = document.createElement('h2')
//         h2.innerText = `${product.title}`
//
//         let p = document.createElement('p')
//         p.innerText = `${product.price}`
//
//         productsDiv.appendChild(h2)
//         productsDiv.appendChild(p)
//     }
// }
//
// productsAppeder(products)
// productsAppeder(products2)

// let users = [
//     {id: 1, name: 'Dima', age: 36, status: true},
//     {id: 2, name: 'Marianna', age: 37, status: true},
//     {id: 3, name: 'Vitaliy', age: 8, status: false},
//     {id: 4, name: 'Jura', age: 4, status: false},
//     {id: 5, name: 'Tetiana', age: 66, status: false},
//     {id: 6, name: 'Olya', age: 58, status: false},
//     {id: 7, name: 'Vasul', age: 32, status: true},
//     {id: 8, name: 'Khristina', age: 35, status: true},
//     {id: 9, name: 'Oleksandr', age: 5, status: false},
//     {id: 10, name: 'Anna', age: 2, status: false}
// ];
//
// let {id, name, age, status, wife, wife: {name: wifeName}} = {
//
//     id: 10,
//     name: 'Anna',
//     age: 2,
//     status: false,
//     wife: {name: 'Kolya'}
// }
// console.log(name);
// console.log(wife);
// console.log(wifeName);

// let numbers = [11,22,33]
// num1 = numbers[0]
// num2 = numbers[1]
// num3 = numbers[2]

// let [num1, num2, num3] = [11, 22, 33]
// console.log(num3);

// let users = [
//     {id: 1, name: 'Dima', age: 36, status: true},
//     {id: 2, name: 'Marianna', age: 37, status: true},
//     {id: 3, name: 'Vitaliy', age: 8, status: false},
//     {id: 4, name: 'Jura', age: 4, status: false},
//     {id: 5, name: 'Tetiana', age: 66, status: false},
//     {id: 6, name: 'Olya', age: 58, status: false},
//     {id: 7, name: 'Vasul', age: 32, status: true},
//     {id: 8, name: 'Khristina', age: 35, status: true},
//     {id: 9, name: 'Oleksandr', age: 5, status: false},
//     {id: 10, name: 'Anna', age: 2, status: false}
// ];
//
// let users2 = [...users]
// console.log(users2);

// function foobar (...item){
// }
//
// foobar(...users)












