const userEmail = []
// no comparison used but we assume that parameter is true
if (userEmail) {
    console.log("Got User Email");
}else{
    console.log("Dont have User Email");
}

// falsy values
// false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN

// Truthy values
// true , 1 , "0" , 'false' , " ", [] , {}, function(){} //empty function

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }