const marvel_heros = ['Thor', 'Ironman', 'spiderman']
const dc_heros = ['superhero', 'flash', 'batman']
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// let allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// *** spread operator ***
const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

let anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_arr = anotherArr.flat(Infinity);
console.log(real_another_arr);

console.log(Array.isArray("Suraj"));
console.log(Array.from("Suraj"));
console.log(Array.from({name:"suraj"})); // interasting array 

let score1 = 100;
let score2 = 200;
let score3 = 300;

let score_arr = Array.of(score1, score2, score3);
console.log(score_arr);