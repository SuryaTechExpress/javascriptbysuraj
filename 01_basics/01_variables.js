const accountId = 112345;
let acoountEmail = "suraj@google.com"
var accountName = "SUraj Kumar";
accountCity = "Bihar"
// accountId = 465;  not allowed

accountEmail = "Surya@gmail.com"
accountName = "Suraj"
accountCity = "Banglore"
let accountState;
console.log(accountState);  // undefined
console.log(accountId);
/*
Prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId, accountName,accountEmail, accountCity, accountState])