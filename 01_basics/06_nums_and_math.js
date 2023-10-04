// // ++++++++++ numbers +++++++++++

// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); // 124

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000



// ++++++++++ Maths ++++++++

// console.log(Math);

// console.log(Math.abs(-4)); // 4
// console.log(Math.abs(4)); // 4

// console.log(Math.round(4.2)); // 4
// console.log(Math.round(4.5)); // 5

// console.log(Math.ceil(7.1)); // 8
// console.log(Math.floor(7.1)); // 7

// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);