// for in

// for (const key in object) {
// }
    

// object - for in
const myObj = {
    js : 'javacript',
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
    // console.log(key); //key will print
    // console.log(myObj[key]); // value will print 
    // console.log(`${key} shortcut is for ${myObj[key]}`); 
}

// array - for in

const programming = ["js","rb","cpp","java","py"]

for (const key in programming) {
    // console.log(key); // index printed 
    // console.log(programming[key]); 
}

// map - for in

// const map = new Map()
// map.set('IN', "India")
// map.set('UN', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); //nothing printed because map is not iterable 
// }

