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
console.log(loginUserMessage()); 

