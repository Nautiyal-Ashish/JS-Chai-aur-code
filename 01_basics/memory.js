// Two Types of memory
// Stack Memory (Primitive) 
// Heap Memory (Non-Primitive)

let myName = "nautiyalAshu"

let anotherName = myName
anotherName = "chai aur code"

console.log(myName); //old value
console.log(anotherName); //new value

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "userTwo@google.com"

// both will get new values
console.log(userOne.email); 
console.log(userTwo.email);