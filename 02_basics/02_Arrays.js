// Array Part 2 
const marvelHeros  = ["Thor","IronMan","Spiderman"]

const dcHeros = ["Superman","Flash","Batman"]

// marvelHeros.push(dcHeros) //push at index 3 - dcHeros become single element

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]); //flash

// let allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const all_new_heros = [...marvelHeros,...dcHeros]
// console.log(all_new_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//converting array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name : "hitesh"})) //interesting case


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));