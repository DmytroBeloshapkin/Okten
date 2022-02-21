// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let newClass = document.getElementById(`main_header`);
newClass.classList.add(`testClass`);
//************************************************************************************

// b) робить шириниу елементу ul 400px
let ulChanger = document.getElementsByTagName('ul');
for (const ulChangerElement of ulChanger) {
    ulChangerElement.style.width = '400px';
    ulChangerElement.style.border = '1px solid red';
    // ulChangerElement.style.text-decoration = 'none' // не працюэ((
    // }
//************************************************************************************

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthClassChanger = document.getElementsByClassName(`linkList`);
for (const widthClassChangerElement of widthClassChanger) {
    widthClassChangerElement.style.width = '50%';
    widthClassChangerElement.style.border = '1px solid red';}
//************************************************************************************

// d) отримує текст який зберігається в елементі з класом listElement2
let textReader = document.getElementsByClassName('listElement2');
textReader[0].innerText = 'тест тексту';
//************************************************************************************

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liChengerColor = document.getElementsByTagName(`li`);
for (const liChengerColorElement of liChengerColor) {
    liChengerColorElement.style.backgroundColor = `grey`;}
//************************************************************************************

// f) отримує всі елементи 'a' та додає їм клас anchor               !!!!!!!!!! я замінив в index <p> на <a>
let aNewClassAdd = document.getElementsByTagName(`a`);
    for (const aNewClassAddElement of aNewClassAdd) {
        aNewClassAddElement.classList.add(`anchor`)}}
//************************************************************************************

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aIf = document.getElementsByTagName(`a`);
for (const aIfElement of aIf) {
    if  (aIfElement.innerText === `link3`)
        aIfElement.style.fontsize = `40px`}
//************************************************************************************

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aClassAdd = document.getElementsByTagName(`a`);
for (const aClassAddElement of aClassAdd) {
    let XXX = aClassAdd.innerText;
    aClassAddElement.classList.add(`XXX`) }
//************************************************************************************

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let backgroundChenger = document.getElementsByClassName('sub-header');
for (const backgroundChengerElement of backgroundChenger) {
    backgroundChengerElement.style.backgroundColor = prompt('колір фону') }
//************************************************************************************

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let colorChenger = document.getElementsByClassName('sub-header');
for (const colorChengerElement of colorChenger) {
    if (colorChengerElement.innerText === `content 2 segment`) {
            colorChengerElement.style.color = prompt('колір тексту') } }
//************************************************************************************

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let classRandom = document.getElementsByClassName(`content_1`)
for (const classRandomElement of classRandom) {
    classRandomElement.innerText = prompt(`Ведіть текст для перевірки`) }
//************************************************************************************

// l) отримати елементи p та змінити їм padding на 20px
let pChanger = document.getElementsByTagName(`p`)
for (const pChangerElement of pChanger) {
    pChangerElement.style.padding = `20px`}
//************************************************************************************

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let classChanger = document.getElementsByClassName(text2);
for (const classChangerElement of classChanger) {
    classChangerElement.classList.add = `mon-year`;
    classChangerElement.innerText = `dec-2021`; }
//************************************************************************************