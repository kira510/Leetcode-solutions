// function test() {
//     new Promise((resolve, reject) =>{
//         resolve(1)
//      })
//      .then((f) => {
//         console.log(f)
//         return new Promise((resolve, reject) =>{
//             setTimeout(() => {
//                 resolve(f + 1)
//             }, 5000);
//          })
//      })
//      .then((s) =>{
//         console.log(s);
//         return s + 1;
//      })
//      .then((t) =>{
//         console.log(t);
//      })
//      .catch((err) =>{
//         throw err
//      })
// }\

// for (var i = 0; i < 5; i++) {
//     let func = (function(j){
//         return function () {
//             console.log(j);
//           }
//     })(i)

//     setTimeout(func, i);
// }

//test();


function cbBasedFunction(value, cb){
    let err, finalValue;
    
    const prom = new Promise((resolve, reject) => {
        try {
            // some expensive computation
            cb(err, finalValue)
        } catch(err) {
            cb(err)
        }
    })
}
    
// how will you convert this callback based function into a Promise based one?
    
    
cbBasedFunction(100, (err, newValue) => {});

function PromisyCbFunction(value) {
    return new Promise((resolve, reject)=> {
        cbBasedFunction(value, (err, newValue) => {
            if (err) {
                reject(err);
            } else {
                resolve(newValue)
            };
        })
    })
}

const value = await PromisyCbFunction(100);
