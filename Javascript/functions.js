//------------------bind-------------------
//-------------1-----------------
/*
function printName() {
    console.log(this.name);
}

let guy = {
    name: 'kiran'
}

printName.bind(guy)()
*/

/*
function printName(designation) {
    console.log(this.name + `,${designation}`);
}

let guy = {
    name: 'kiran'
}

printName.bind(guy)('Senior SW engineer');
*/

/*
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {
        console.log(this.name);
    }
}

Object.prototype.MyBind = function (bindObj) {

    // Here "this" will be sayHi function
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod();
    }
}
let HiFun = PrintName.sayHi.MyBind(nameObj);
HiFun();
*/


//--------------------call---------------------
/*
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

PrintName.sayHi.call(nameObj, 42);
*/

/*
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

Object.prototype.MyCall = function (bindObj, ...args) {
    bindObj.myMethod = this;

    bindObj.myMethod(...args);

}
PrintName.sayHi.MyCall(nameObj, 42);
*/


/*
//-------------remember the polyfills------------
Object.prototype.MyBind = function (bindObj, ...args) {
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod(...args);
    }
}

Object.prototype.MyCall = function (callObj, ...args) {
    callObj.method = this;
    callObj.method(...args);
}

Object.prototype.MyApply = function (bindObj, args) {
    bindObj.myMethod = this;

    bindObj.myMethod(...args);

}

let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    },
    printAge: function (age) {
        console.log(this.name + " age is " + age);
    }
}

let HiFun = PrintName.sayHi.MyBind(nameObj, 42);
HiFun();
PrintName.printAge.MyCall(nameObj, 42);
*/