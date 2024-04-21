// {} -> scope
// let a = 300;
// if (true) { //Inside this is block scope 
//     let a = 10;
//     const b = 20;
//     console.log("Inner :",a);
// }



// console.log(a);
// console.log(b);
// console.log(c);

// window and node scope is different 

// -------------------------------------

// Nested Scope
function one() {
    const username  = "Ashish";

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "sam"
    if (username === "sam") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++Interesting +++++++++++++

addOne(5) // do not give error 
function addOne(num){
    return num + 1
}

// function but also called expression
addTwo(5) //gives error because variable declared after
const addTwo = function(num){
    return num + 2
}