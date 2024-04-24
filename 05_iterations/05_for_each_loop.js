// for each 

const coding = ['js','ruby','java','python','cpp']

// -----------------
// by simple function keyword

// coding.forEach( function (item) {
//    console.log(item);
// } )

// -----------------
// by arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// -------------------
// by defining function seperataly
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe) //give only reference

// -------------------
// item 
// index
// full array
// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr);
// })

// ------------------

// [{}{}{}]
const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js",
    },
    {
        langName: "Java",
        langFileName: "java",
    },
    {
        langName: "Python",
        langFileName: "py",
    }
]

myCoding.forEach((item,index) => {
    console.log(item.langName);
})