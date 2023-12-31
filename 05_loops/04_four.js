const myNumber = [1,2,3,4,5,6,7,8,9,10]

/* const newNums = myNumber.map(i=>i+10);
console.log(newNums); */

const newNums = myNumber.map(i=>{return i+10});
// console.log(newNums);

let newNum = myNumber.filter(i=>i%2==0).map(i=>i*i);

// console.log(newNum);


let myNum = [1,2,3,4]
// reduce can use to calculate all price from cart list in real time example
/* myNum = myNum.reduce(
    function(acc,currVal){
        console.log(`acc is ${acc} and currVal is ${currVal}`);
        return acc + currVal
    },0
) */


myNum = myNum.reduce((acc, currVal)=>acc+currVal,0)
console.log(myNum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let allProdutPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(allProdutPrice);