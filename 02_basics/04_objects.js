// Objects Part 2 
// singleton

const tinderUser = new Object(); //singleton
// const tinderUser = {}; //non singleton

 tinderUser.id = "123abc"
 tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstname : "ashish",
            lastName : "nautiyal"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstname);

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj4 = {
    5 : "c",
    6 : "d"
}

// const obj3 = {obj1,obj2}
// Object.assign = (target, source)
// const obj3 = Object.assign({},obj1, obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: 'a@gmail.com'
    },
    {
        id: 1,
        email: 'a@gmail.com'
    },
    {
        id: 1,
        email: 'a@gmail.com'
    },
    {
        id: 1,
        email: 'a@gmail.com'
    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //output is array
console.log(Object.values(tinderUser)); //output is array
console.log(Object.entries(tinderUser)); //output is array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))