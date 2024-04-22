// comparison operator = 
// <(less than),
// >(greater than),
// <=(less than equal to),
// >=(greater than equal to),
// == (equal) ,
// !=(not equal),
// === (strict eqaul and also type),
// !== (strict not eqaul to )

// if
const isUserLoggedIn = true;


if (2 === "2") {
    console.log("executed");
} //strict equal

// if else 
// -----------
// let temp = 50;

// if (temp < 50) {
//     console.log("Temprature less than 50");
// } else {
//     console.log("Temprature greater than 50");
// }

// ---------
// const score = 200;
// if (score>100) {
//     const power = "fly"
//     console.log(`User Power : ${power}`);
// }

// console.log(`Out User Power : ${power}`);

// ----------

// const balance = 1000;
// implicit scope only in one line
// not recommened
// if (balance > 500) console.log("Yes");

// nesting 
// const balance = 1000;

// if (balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

// ----------

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;


if (userLoggedIn && debitCard) {
    console.log("Allow to buy");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In");
}

// Nullish Coalescing Operator (??) : null, undefined

// when we get null or undefined from database or api we make safety as give two value. 
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 15 //first value 
// console.log(val1);

// Ternary Operator 

// condition ? true : false

const iceTeaPricev = 100
iceTeaPricev <= 80 ? console.log("less than 80") : console.log("more than 80");