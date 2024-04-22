// for loop

// for (variable initilization ; checking condition ; increasing/decreasing) {
    
// }

for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer Loop : ${i}`);
    for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop : ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j);
    }
}

// ------------------
let myArray = ["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// ----- break and continue -------
// Break
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break //come outside end program
//     }
//     console.log(`Value of i is ${index}`);
// }


// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue //one time skip
    }
    console.log(`Value of i is ${index}`);
}