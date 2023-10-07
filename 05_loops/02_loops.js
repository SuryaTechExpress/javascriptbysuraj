// while loops

let array = [1,2,3,4,5,6,7,8,9,10]
let i = 0;
while (i<array.length) {
    // console.log(`value of i is ${array[i]}`);
    i++;
}

// do-while loop

let score = 11;

do{
    // console.log(`score is ${score}`);
    score++;
}while(score<=15)


// for-of loop

const arr1 = [1,2,3,4,5]

for(let x of arr1){
    // console.log(x);
}


const greet = "Hello World"

for(let x of greet){
    // console.log(`Each char is ${x}`);
}


// Maps

/* let map = new Map()
map.set(`IN`,`India`)
map.set(`USA`,`United State Of America`)
map.set(`IN`,`India`)
map.set(`BH`,`India`) */

// console.log(map);

/* for(const [Key,Value] of map){
    console.log(`Key is ${Key} and value is ${Value}`)
} */


const myObj = {
    'game1':'Cricket',
    'game2':'FhootBall'
}
/* Object is not iterable */
// for(const key of myObj){
//     console.log(key);
// }

for(const key in myObj){
    // console.log(myObj[key]);
}
// for-in loop gives key
let arr = [6,5,4,3,2,1]

for(let x in arr){
    // console.log(arr[x]);
}


let map = new Map()
map.set(`IN`,`India`)
map.set(`USA`,`United State Of America`)
map.set(`IN`,`India`)
map.set(`BH`,`India`)
// for-in loop can work on map
for(let m in map.values){
    console.log(m);
}


// for-each loop 

const coding = ['JS','JAVA','Python','RUby','C++','C']

// forEach loop using function
coding.forEach(
    function(i){
        console.log(i);
    }
)


// forEach loop using arraow function

coding.forEach(i=>console.log(`Boom is ${i}`))

// forEach loop refers to function

function printMe(i){
    console.log(`Hi ${i}`);
}

coding.forEach(printMe)



coding.forEach((item,key,array)=>
console.log(`${item} , ${key} , ${array}`)
)