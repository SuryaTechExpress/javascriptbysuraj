// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate.toString());

let newDate = new Date("2023-01-14");
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

