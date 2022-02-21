// - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let paragraf = document.getElementById (`content`);
console.log(paragraf.innerText);

//***********************************************************
// -- отримує текст з блоку з id "rules"
let text = document.getElementById(`rules`);
console.log(text.innerText);

//***********************************************************
// -- замініть текст параграфа з id 'content' на будь-який інший
let changeParagraf = document.getElementById(`content`);
changeParagraf.innerText = `Тестування зміни параграфа "content" командою inner.Text`;

//***********************************************************
// -- замініть текст параграфа з id 'rules' на будь-який інший
let changeParagrafID = document.getElementById(`rules`);
changeParagrafID.innerText = `Тестування зміни параграфа "rules" командою innet.Text`;

//***********************************************************
// -- змініть кожному елементу колір фону на червоний
let changeColor = document.body.children;
for (const changeColorElement of changeColor) {
    changeColorElement.style.backgroundColor = `red`;
}
//***********************************************************
// -- змініть кожному елементу колір тексту на синій
let changeColorText = document.body.children;
for (const changeColorTextElement of changeColorText) {
    changeColorTextElement.style.color = `blue`
}
//***********************************************************
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let finderID = document.getElementById(`rules`);
console.log(finderID.classList);

//***********************************************************
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let changeAllColorText = document.getElementsByClassName(`fc_rules`);
for (const changeAllColorTextElement of changeAllColorText) {
    changeAllColorTextElement.style.color = `pink`; //red
}
//***********************************************************