// console.log('start');
// setTimeout(() => {
//     let counter = 1;
//     console.log(`${counter}: Прокинутися`);
//     setTimeout(() => {
//         counter++;
//         console.log(`${counter}: Ранкова гігієна`);
//         setTimeout(() => {
//             counter++;
//             console.log(`${counter}: Сніданок`);
//             setTimeout(() => {
//                 counter++;
//                 console.log(`${counter}: Прогулянка з собакою`);
//                 setTimeout(() => {
//                     counter++;
//                     console.log(`${counter}: Робота`);
//                     setTimeout(() => {
//                         counter++;
//                         console.log(`${counter}: Навчання JS`);
//                         setTimeout(() => {
//                             counter++;
//                             console.log(`${counter}: Вечеря`);
//                             setTimeout(() => {
//                                 counter++;
//                                 console.log(`${counter}: Сон`);
//                             }, 1000)
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
// console.log('end');


new Promise((resolve, reject) => {
    let counter = 0;
    setTimeout(() => {
        counter++;
        console.log(`${counter}: Прогулянка`);
        resolve(counter);
    }, 1000)
})
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log(`${counter}: Ранкова гігієна`);
                resolve(counter);
            }, 1000)
        })
    })

    .then(counter =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++;
                console.log(`${counter}: Сніданок`)
                resolve(counter);
            },1000)
        })
    })

    .then(counter =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++;
                console.log(`${counter}: Прогулянка з собакою`)
                resolve(counter);
            },1000)
        })
    })

    .then(counter =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++;
                console.log(`${counter}: Робота`)
                resolve(counter);
            },1000)
        })
    })

    .then(counter =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++;
                console.log(`${counter}: Навчання JS`)
                resolve(counter);
            },1000)
        })
    })

    .then(counter =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++;
                console.log(`${counter}: Вечеря`)
                resolve(counter);
            },1000)
        })
    })

    .then(counter =>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                counter++;
                console.log(`${counter}: Сон`)
                resolve(counter);
            },1000)
        })
    })