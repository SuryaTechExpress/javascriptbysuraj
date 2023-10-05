function one(){
    const username = "Suraj"
    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = 'Suraj'
    if(username === 'Suraj'){
        const website = 'YouTube'
        // console.log(username+" "+website);
    }
    // console.log(website);
}
// console.log(username);

// ============ interasting ==========
console.log(addOne(5));
function addOne(num){
    return num+1
}

console.log(addTwo(10));
const addTwo = function(num){
    return num + 2
}

