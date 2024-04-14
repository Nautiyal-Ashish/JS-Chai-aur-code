const name = "ashish"
const repoCount = 50

console.log(name + repoCount + " Value");

// String Interpolation 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//Declaration of String 
const gameName = new String('Ashish-nt');
console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("h"));

const newStr = gameName.substring(0,4);
// console.log(newStr);

const anotherStr = gameName.slice(-8,4);
// console.log(anotherStr);

const newStringOne = "      ashsih  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ashish.com/ashish%20nautiyal"

console.log(url.replace('%20','_'));

console.log(url.includes('ashish'));

console.log(gameName.split('-'));