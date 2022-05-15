let buttun1 = document.getElementById('btn1')

// buttun1.onclick = function (){
//     console.log('ти нашо мене натискаєш стільки раз?')
// };
//
// buttun1.addEventListener('click', function (){
//     console.log('click1')
// })

buttun1.addEventListener('mousemove', function (e){
    console.log('click')
    console.log(e.target)
})