// let f1 = document.forms.f1
// f1.onsubmit = function (e) {
//     e.preventDefault();
//
//     let nameInput = e.target.username.value;
//     let ageInput = e.target.age.value;
//
//     let user = {nameInput, ageInput}
//     localStorage.setItem(nameInput, JSON.stringify(user))
// };

let carsAray = JSON.parse(localStorage.getItem('cars')) || [];

document.forms.carsForm.onsubmit = function (e) {
    e.preventDefault();

    let model = e.target.model.value;
    let type = e.target.type.value;
    let volume = e.target.volume.value;

    let car = {model, type, volume}
    carsArray.push(car)
    localStorage.setItem('cars', JSON.stringify(carsArray))
}

