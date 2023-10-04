// array

const myArr = [1,2,3,4,5,'Suraj',true];
console.log(myArr);
console.log(typeof myArr); // object

const myArr2 = new Array(5,4,3,2);
console.log(myArr2); // [ 5, 4, 3, 2 ]

myArr2.push(7);
console.log(myArr2); // [ 5, 4, 3, 2, 7 ]

myArr2.pop();
console.log(myArr2); // [ 5, 4, 3, 2 ]

myArr2.unshift(10);
console.log(myArr2); // [ 10, 5, 4, 3, 2 ]

myArr2.shift();
console.log(myArr2); // [ 5, 4, 3, 2 ]

console.log(myArr2.includes(10));
console.log(myArr2.indexOf(9));
console.log(myArr2.indexOf(3));

const newArr = myArr2.join();
console.log(myArr2); // [ 5, 4, 3, 2 ]
console.log(newArr); // 5,4,3,2

// slice, splice

console.log("A", myArr);

const myArr3 = myArr.slice(1,3);
console.log(myArr3);

const myArr4 = myArr.splice(1,3);
console.log(myArr4); 