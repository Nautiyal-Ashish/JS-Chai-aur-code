// # Primitive Datatypes
/*
7 types 
1. String 
2. Number
3. Boolean
4. Null
5. undefined
6. Symbol
7. BigInt
*/

const score = 100;
const scoreValue = 10.2;
const isLogIn = false;
const temp = null;
let userEmail;

const id = Symbol("123");
const id2 = Symbol("123");

console.log(id === id2);

const bigNumber = 332323232323232324n;

// JavaScript is dynamically typed language

// # Reference Type (Non-Primitive Datatypes)

/*
1. Array
2. Objects
3. Functions
*/

const heros = ["shaktiman", "doga","naagraj"]

let myObj = {
    name : "Ashish",
    age : 22,
}

const myFunction = function (){
    console.log("Hello World");
}
