// Reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curVal) {
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal
// }, 2)//this 2 first time will be assigned to acc

// by arrow function

// const myTotal = myNums.reduce((acc,curVal)=> (acc+curVal),2)

// console.log(myTotal);

// ---------------

const shoppingCart = [ 
    {
        itemName : "JS course",
        price : "2999"
    },
    {
        itemName : "Python course",
        price : "999"
    },
    {
        itemName : "Mobile Dev course",
        price : "5999"
    },
    {
        itemName : "Data Science course",
        price : "12999"
    },
]

const total = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(total);