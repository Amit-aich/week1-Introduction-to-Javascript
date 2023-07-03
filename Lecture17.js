//ES5 - Functionally scoped (var)
// es6 -block scoped (let const)

// var abc = 10;

//Scoping

// function testing() {
//     var abc = 20;
//     let xyz = 'block scoped'
//     console.log(abc)
//     //Block scope
//     if(1) {
//         console.log('Inside If',xyz);
//         console.log(abc);
//     }
//     console.log('Outside If',xyz)
// }

// testing(); //calling a function

// var name = 'Cipher';
// let year = 2020;

// function test() {
//     console.log(name);
//     console.log(year);
// }
// test()

//Function Declaration and Function Expression

//Hoisting
// function myFunc() {
//     console.log('Inside myFunc Declaration')
// }

// let myFunc2 = function() {
//     console.log('Inside myFunc2: function Expression')

// }

// myFunc();
// myFunc2();


// console.log(name2)
// name();

// let name2 = "Mrudula"
// function name() {
//     console.log('hello');
// }

//Arrow Functions

//  let newfunc = () => {
//     console.log('Arrow Function created');
//     console.log(this);
//  }
//  newfunc();

//  let funExp = function() {
//     console.log('function expression created');
//     console.log(this)

//  }
//  funExp();

let newfunc = (name) => {
    console.log('Arrow')
    console.log(name)
};

newfunc('cipher');