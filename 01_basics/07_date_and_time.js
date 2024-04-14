// Dates 

const myDate = new Date()
// console.log(myDate); //2024-04-14T06:39:47.007Z
// console.log(myDate.toString()); //Sun Apr 14 2024 06:39:47 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Sun Apr 14 2024
// console.log(myDate.toLocaleString()); //4/14/2024, 6:39:47 AM
// console.log(myDate.toISOString()); //2024-04-14T06:39:47.007Z
// console.log(myDate.toJSON()); //2024-04-14T06:39:47.007Z
 
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0 , 23)
// let myCreatedDate = new Date(2023, 0 , 23 , 5 , 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")


// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday : "long",
    dateStyle: "medium",
});

