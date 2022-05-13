// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//  - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let idContent = document.getElementById("content")
console.log(idContent.innerText);

// -- отримує текст з блоку з id "rules"
let idRules = document.getElementById("rules")
console.log(idRules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
let idReplase = document.getElementById("content")
idReplase.innerText = 'Змінений текст №1'

// -- замініть текст параграфа з id 'rules' на будь-який інший
let idReplaseRules = document.getElementById("rules")
idReplaseRules.innerText = 'Змінений текст №2'

// -- змініть кожному елементу колір фону на червоний
let redBackground = document.body.children
for (const item of redBackground) {
    item.style.backgroundColor = 'red'
    item.style.color = 'white'
}

// -- змініть кожному елементу колір тексту на синій
let blueBackground = document.body.children
for (const item of blueBackground) {
    item.style.backgroundColor = 'blue'
    item.style.color = 'white'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classFind = document.getElementById('rules')
console.log(classFind.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let changeColorRed = document.getElementsByClassName('fc_rules')
for (const colorRed of changeColorRed) {
colorRed.style.color = 'red'
}
