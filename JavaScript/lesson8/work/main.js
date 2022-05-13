// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
//
// let metaList = document.head.getElementsByTagName('meta')
// console.log(metaList);
// for (let metaListElement of metaList) {
//
//     console.log('-----start------')
//     console.log(metaListElement);
//     console.log(metaListElement.attributes);
//     console.log('-----end------')
// }

// let title = document.head.getElementsByTagName('title')
// console.log(title);

// console.log(document.head.children);

// let products = document.getElementsByClassName('product')
// for (const product of products) {
//     // console.log(product);
//     product.classList.add('x')
//     product.classList.add('qwe')
//     product.classList.remove('qwe')
//
//     product.style.background = 'green'
//
//     products[0].style.background = 'orange'
// }
//
// let h1ofBlock = products[0].children[0];
// console.log(h1ofBlock);
// h1ofBlock.innerHTML = `<i>Єбать ти хакер</i>`
//
// console.log(document.body.children); // html elements
// console.log(document.body.childNodes); // node - html, text, todoo
//
// console.log(document.getElementById('xxx')); // по ID
//
// console.log(document.querySelector('body > .wrap> .product'));
// console.log(document.querySelectorAll('body > .wrap> .product'));

// let form1 = document.getElementsByTagName("form")[0];
// console.log(form1[0].name);

// formsAP
// console.log(document.forms.form1.name);
// console.log(document.forms.form1.password);
// console.log(document.forms.form1.gender);

// let a1 = document.getElementsByTagName('a')[0]
// console.log(a1.id)


function scraper (startElement) {
    console.log(startElement);
    let children = startElement.children
    for (const child of children) {
    scraper(child)
    }
}

scraper(document.body)
