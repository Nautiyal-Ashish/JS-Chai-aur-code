// Immediately Invoked Function Expressions 

// (function chai(){
//     console.log("DB CONNECTED");
// })()

// Syntax
// (function nameOfFunction(){}
// )();

// ----Arrow IIFE ------------

(function chai(){
    // named iife
    console.log("DB CONNECTED");
})();

( (name) => {
    //simple iife
    console.log("DB CONNECTED Second");
    console.log(name);
})('Ashish')
