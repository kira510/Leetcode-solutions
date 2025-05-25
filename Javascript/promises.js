//----------1--------------
/*
const promise = new Promise((resolve, reject) => {
  reject(Error('Error occurred'));
});

promise.catch(error => console.log(error.message));
promise.catch(error => console.log(error.message));
*/

//----------2-----------
/*
const promise = new Promise((resolve, reject) => {
  reject(Error('Error occurred'));
});

promise.catch(error => console.log(error.message))
    .catch(error => console.log(error));
*/

//----------3-----------
/*
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1);
})

console.log('end');
*/

//----------4-----------
/*
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    resolve();
    console.log(1);
})

promise1.then(() => console.log("resolved"));

console.log('end');
*/

//----------5------------
/*
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
*/

//--------6-------------
/*
console.log('Start');
setTimeout(() => {
 console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
 console.log('Promise resolved');
});
console.log('End');
*/

//-----------7-------------
/*
let firstTask = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'Task One');
});

let secondTask;

let thirdTask = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1200, 'Task Three');
});

let fourthTask = new Promise(function(resolve, reject) {
  setTimeout(reject, 300, 'Task Four');
  //setTimeout(resolve, 1200, 'Task Three');
});

let fifthTask = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, 'Task Two');
});

let combinedPromise = Promise.all([firstTask, secondTask, thirdTask, fourthTask, fifthTask]);

combinedPromise
  .then(function(data) {
    console.log('1');
    console.log(data);
    data.forEach(function(value) {
      console.log('Result:', value);
    });
  })
  .catch(function(error) {
    console.error('Error:', error);
  });
*/

//--------------------8---------------
/*
const promise1 = new Promise(resolve => setTimeout(resolve, 100, 'One'));
const promise2 = new Promise(resolve => setTimeout(resolve, 200, 'Two'));

Promise.race([promise1, promise2])
  .then(value => console.log(value))
  .catch(error => console.error(error));
*/

//------------------8------------------------
/*
const promise1 = Promise.resolve(1);
const promise2 = new Promise(resolve => setTimeout(resolve, 200, 2));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 100, 'Error'));

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values))
  .catch(error => console.error(error));
  */

//---------------9-----------------
/*
const promise1 = Promise.resolve(1);
const promise2 = new Promise(resolve => setTimeout(resolve, 200, 2));

Promise.all([promise1, promise2])
  .then(values => console.log(values))
  .catch(error => console.error(error));
*/

//-----------10---------------
/*
console.log('start')
Promise.resolve(1)
  .then(value => {
    console.log(value);
    return Promise.resolve(2);
  })
  .then(value => console.log(value));
console.log('end')
*/