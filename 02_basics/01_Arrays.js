// Array Part 1

// resizable 
// mix
// zero based indexing
// 

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[1]);

// Array Methods

// myArr.push(6) // add in array
// myArr.push(7) // add in array
// myArr.pop() //remove last value

// myArr.unshift(8) //add to the first position
// myArr.shift() // remove first value


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice & splice

console.log("A ",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);


console.log("B ",myArr);
const myn2 = myArr.splice(1,3);
console.log(myn2);
