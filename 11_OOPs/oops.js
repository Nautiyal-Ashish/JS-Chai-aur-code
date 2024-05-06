// OOP - Programming paradigm/style
// Object - collection of properties and methods

// why use OOP

// Parts of OOP
// Object literal

// ------------------------
// Prototype
// classes
// Instances (new,this)
// Constructor function

// ------------------------
// 4 pillars
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// ------------------------

// Object Literal
const user = {
  username: "ashish",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from db");
    // console.log(`Username : ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function
// new -> constructor function
// const promise1 = new Promise();
// const Date = new Date();

function User(username, loginCount, signedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.signedIn = signedIn;

  //   also can write methods
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  //   return this; //not required but default already exist
}

const userOne = new User("Ashish", 12, true);
const userTwo = new User("ChaiaurCode", 11, false);
console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);

// when we create new
// 1. an empty object create
// 2. constructor function calls with new
// 3. this got injected
// 4. result
