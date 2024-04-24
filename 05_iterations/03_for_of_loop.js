// for of

// for (const iterator of object(chiz)) {
    
// }

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(`Value of ${num}`);
}

const greetings = "Hello World";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('UN', "United States of America")
map.set('FR', "France")
map.set('IN', "India") //this will not print 


// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':', value);
}


const myObject = {
    'Game1' : 'NFS',
    'Game2' : 'SpiderMan',
    'Game3' : 'GTA',
    'Game4' : 'Temple Run'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':', value); //not work
// }