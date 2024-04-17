// singleton  
// Object.create

// object literals 

const mySym = Symbol("Key1")

const jsUser = {
    name : "Ashish",
    age : 21,
    [mySym] : "myKey1",
    location : "Delhi",
    email : "ashish@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Thrusday"]
} 

// console.log(jsUser.email);  //method 1 
// console.log(jsUser["email"]);  //method 2
// console.log(jsUser[mySym]);


// jsUser.email = "hitesh@demo.com"
// Object.freeze(jsUser)
// jsUser.email = "hitesh@micro.com"

jsUser.greeting = function (){
    console.log("Hello Js User");
}

jsUser.greetingTwo = function (){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
// console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());