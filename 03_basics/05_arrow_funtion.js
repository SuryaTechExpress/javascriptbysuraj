const user = {
    username:"Suraj",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = 'Sam'
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = 'Suraj'
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = 'Suraj'
//     console.log(this.username);
// }
const chai = () => {
    let username = 'Suraj'
    console.log(this.username);
}
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2 // explicit return 
}

const sumOfTwo = (num1, num2) => num1 + num2 // implicit return 

console.log(addTwo(3,4));
console.log(sumOfTwo(5,5));

const obj = (num1, num2) => ({username:'Suraj'})
console.log(obj(10, 20));

const myArray = [2,3,4,5,7]

myArray.forEach(e=>console.log(e))