// while and do while loop

// While Loop
let index = 0;
while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2;
}

let myArray = ['flash','batman','superman']
let arr = 0

while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr++; // arr = arr + 1 
}

// Do while loop

let score = 11;

do {
    console.log(`Score is ${score}`); //in 11 first one time print then condition check
    score++;
} while (score <= 10);