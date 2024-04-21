// console.log("A");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("S");
// console.log("H");

function sayMyName() {
console.log("A");
console.log("S");
console.log("H");
console.log("I");
console.log("S");
console.log("H");
}
// sayMyName //reference
// sayMyName(); //calling

// parameters -> number1,number2

// addTwoNumbers(
    // 1,5 -> arguments)

//--------------------

// function addTwoNumbers(number1,number2){ 
//     console.log(number1 + number2); 
// }
// const result = addTwoNumbers(2,5);
// console.log(result); //undefined


// --------------------
function addTwoNumbers(number1,number2){ 
    let result = number1 + number2;
    return result; 
}

// const result = addTwoNumbers(2,5);
// console.log("Result :",result);

// ----------------
function loginUserMessage(username = "User") {
    // if (!username) {
    //     console.log("Please Enter Username");
    //     return
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ashish"));
// console.log(loginUserMessage()); 

// -----------------------------------
// ... -> Rest operator 
function calculateCartPrice (val1, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200,300,500));

const user ={ 
    username : "ashish",
    price : 199
}

function handleObject ( anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// --DirectObject----
// handleObject({
//     username : "hitesh",
//     price : 200
// })

// ---Array---
// const myNewArray = [200,400,500,600]
// function returnSecondValue (getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));

