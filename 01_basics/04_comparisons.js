// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// Avoid the below conversion
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //null is converted into 0

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// === strict check

console.log("2" == 2); //true
console.log("2" === 2); //false