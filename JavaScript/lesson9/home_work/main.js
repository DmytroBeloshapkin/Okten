// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div')
div.classList.add('wrap')
div.classList.add('collapse')
div.classList.add('alpha')
div.classList.add('beta')

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'silver'
div.style.color = 'red'
div.style.fontSize = '24px'

// - додати цей блок в body.
div.innerText = 'test text'
document.body.append(div)

// - клонувати його повністю, та додати клон в body.
let clone = div.cloneNode(true)

document.body.append(clone)

// - додати йому класи wrap, collapse, alpha, beta
clone.classList.add('wrap')
clone.classList.add('collapse')
clone.classList.add('alpha')
clone.classList.add('beta')

// - Є масив:
let arrey = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.
let menu = document.getElementsByClassName(`menu`)[0]
for (const item of arrey) {
    let li = document.createElement(`li`)
    li.innerText = item
    menu.append(li)

}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const course of coursesAndDurationArray) {
    let divCource = document.createElement(`div`)
    divCource.innerText = `Назва курсу ${course.title}, триваліть навчання${course.monthDuration}`
    document.body.appendChild(divCource)
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: '!!JavaScript Complex', monthDuration: 5},
    {title: '!!Java Complex', monthDuration: 6},
    {title: '!!Python Complex', monthDuration: 6},
    {title: '!!QA Complex', monthDuration: 4},
    {title: '!!FullStack', monthDuration: 7},
    {title: '!!Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли.

for (const divClass of coursesAndDurationArray2) {
    let divCreator = document.createElement(`div`)
    divCreator.classList.add(`item`)

    let h1 = document.createElement(`h4`)
    h1.classList.add(`heading`)
    h1.innerText = `${divClass.title}`

    let p = document.createElement(`p`)
    p.classList.add(`description`)
    p.innerText = `${divClass.monthDuration}`

document.body.appendChild(divCreator)
document.body.appendChild(h1)
document.body.appendChild(p)
}


