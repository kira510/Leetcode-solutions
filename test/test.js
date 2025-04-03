// async function test() {
//     let arr = [1,2, 3,4]

//     let testArr = arr.map(async (item) => {
//         console.log(item)
//         await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve()
//                 console.log('----')
//             }, 1000)
//             console.log('ran + ', item)
//         })
//     })

//     console.log(testArr)
// }

// test()

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// })
// Promise.resolve().then ( () => console.log(3))
// setTimeout(() => {
//     console.log(4)
// })
// console.log(7)

// const foo = NaN

// console.log(typeof foo)

// function job() {
//     return new Promise(function (resolve, reject) {
//       reject();
//     }); }

//     const promise = job();

// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 3");
//   });