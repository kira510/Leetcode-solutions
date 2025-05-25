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

console.log(1)
setTimeout(() => {
    console.log(2)
})
Promise.resolve().then ( () => console.log(3))
setTimeout(() => {
    console.log(4)
})
console.log(7)

const foo = NaN

console.log(typeof foo)

function job() {
    return new Promise(function (resolve, reject) {
      reject();
    }); }

const promise = job();

promise
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 3");
  });

console.log(8);


//-------------------------part2--------
// const fs = require('fs');
// const readStream = fs.createReadStream('./makeArrayZero.js');

// console.log('Start');

// setTimeout(() => {
//   console.log('setTimeout0');
// }, 0);

// setTimeout(() => {
//   console.log('setTimeout1');
// }, 0);

// setImmediate(() => {
//   console.log('setImmediate1');
// });

// readStream.on('data', (chunk) => {
//     console.log("read----->");
//     setTimeout(() => console.log('setTimeout'), 0);
//     setImmediate(() => console.log('setImmediate'))
// });

// setTimeout(() => {
//   console.log('setTimeout2');
// }, 0);

// setImmediate(() => {
//   console.log('setImmediate2');
// });

// console.log('End');


//---------------------------------
setImmediate(() => {
   console.log("setImmediate is called");
});

Promise.resolve("Promise is resolved").then(console.log);

setTimeout(() => {
   console.log("Time function is called");
}, 0);

process.nextTick(() => {
   console.log("Process.nextTick");
});

// Output
// Process.nextTick
// Promise is resolved
// Time function is called
// setImmediate is called
// In this example

// process.nextTick() executes before moving to the next phase.
// Resolved Promises execute right after process.nextTick().
// setTimeout() executes in the timers phase.
// setImmediate() executes in the check phase.


