// function sayMyName(){
//     console.log("H");
//     console.log("e");
//     console.log("l");
//     console.log("l");
//     console.log("o");
// }

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumber();

function addTwoNumber(number1, number2){
    return number1+number2
    // console.log("Suraj"); ==> unreachable code
}
const result = addTwoNumber(3,5);
// console.log(result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter username");
        return;
    }

    return `${username} just logged in`;
}

// console.log(loginUserMessage('Suraj'))

// console.log(loginUserMessage());

// function test(){
//     return
// }
// console.log(test());

function loginUserMessage(username = 'default'){
    if(username===undefined){
        console.log("Please enter username");
        return;
    }

    return `${username} just logged in`;
}

console.log(loginUserMessage('Suraj'))