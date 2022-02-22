// Все робити за допомоги js.
// - створити блок,
let divCreater = document.createElement(`div`);

// - додати йому класи wrap, collapse, alpha, beta
divCreater.classList.add (`wrap`);
divCreater.classList.add (`collapse`);
divCreater.classList.add (`alpha`);
divCreater.classList.add (`beta`);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divCreater.style.backgroundColor = `silver`;
divCreater.style.color = `green`;
divCreater.style.fontSize = `40px`;

// - додати цей блок в body.
divCreater.innerText = 'тест блоку div'
document.body.append(divCreater);

// - клонувати його повністю, та додати клон в body.
let clone = divCreater.cloneNode(true); // із вмістом
document.body.append(clone);

let clone2 = divCreater.cloneNode(); // пустий
document.body.append(clone2);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arrey = ['Main','Products','About us','Contacts'];

let menu = document.getElementsByClassName(`menu`)[0];
for (const string of arrey) {
    let li = document.createElement(`li`)
    li.innerText = string
    menu.appendChild(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4} ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let divCreator = document.createElement(`div`);
    divCreator.innerHTML = `Назва курсу <b>${coursesAndDurationArrayElement.title}</b>, тривалість навчання - ${coursesAndDurationArrayElement.monthDuration} місяців`;
    document.body.appendChild(divCreator);
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4} ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const coursesAndDurationArray2Element of coursesAndDurationArray2) {
    let divClass = document.createElement(`div`);
    divClass.classList.add(`item`);

    let h2Creater = document.createElement(`h2`);
    h2Creater.innerHTML = `${coursesAndDurationArray2Element.title}`
    h2Creater.classList.add(`heading`);

    let pCreater = document.createElement(`p`)
    pCreater.classList.add(`description`)
    pCreater.innerHTML = `${coursesAndDurationArray2Element.monthDuration}`

    divClass.appendChild(h2Creater);
    divClass.appendChild(pCreater);
    document.body.appendChild(divClass); }