function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(2,3,4,5));

function getNumber(val1, val2, ...valRest){
    return valRest
}

// console.log(getNumber(100,200,300,500));

const user = {
    username:"Suraj",
    price:"199"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} or price is ${anyObject.price}`);
}

handleObject(user);
handleObject({
    username:"Sam",
    price:999
})

const myNewArray = [200,400,600,100];

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1000,2000,3000]));