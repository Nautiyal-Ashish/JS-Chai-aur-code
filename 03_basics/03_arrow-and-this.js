// arrow functions

// const user = {
//     username : "Ashish",
//     price : 999,

//     welcomeMessage : function () {
//         //this used for current context
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this); //empty in node

// ---------
// function chai(){
//     let userName = "Ashish"
//     console.log(this.userName); //undefined
// }

// chai()

// -----------------------

// const chai = function () {
//     let userName = "Ashish"
//     console.log(this.userName);
// }

// const chai = () => {
//     let userName = "Ashish"
//     console.log(this.userName);
// }
// chai()


// -----------------------

// () => {} - Syntax


//Basic Arrow function
// const addTwo = (num1,num2)=> {
//     return num1 + num2
// }

// console.log(addTwo(2,5));

// Implicit return

// const addTwo = (num1,num2) => num1 + num2
// const addTwo = (num1,num2) => (num1 + num2)
// console.log(addTwo(2,5));

// Object return implicitily

// const addTwo = (num1,num2) =>( {username : "Ashish"})
// console.log(addTwo(2,5));

