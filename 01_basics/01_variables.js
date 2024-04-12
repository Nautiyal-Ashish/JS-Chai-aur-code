// const keyword - cannot change again
const accountId = 144553;

// let - can be changed and also support block scope and functional scope unlike var
let accountEmail = "ashish@google.com";

/*
Prefer not to use var 
Because of issue in block scope and funtional scope
*/
var accountPassword = "12345";
accountCity = "Jaipur";

// If variable is not given any value JS consider it as undefined.
let accountState;

// accountId = 2; //not allowed to change the const variable


accountEmail = "an@an.com"
accountPassword = "21212121"
accountCity = "dehradun"

// console.log(accountId);

console.table([accountId, accountEmail , accountPassword , accountCity,accountState]);