const name = "Suraj"
const repoCount = 50

// console.log(name + repoCount);

// console.log(`Hello my name is ${name} and my repo count is
//  ${repoCount}`);// string interpolation

 const gameName = new String("PUBG MOBILE");

//  console.log(gameName.charAt(0));
//  console.log(gameName[0]);

//  console.log(gameName.toUpperCase());
//  console.log(gameName.indexOf('U'));

 let newName = gameName.substring(0,2); // startwith 0 and give 2 character
//  const anotherString = gameName.slice(-11,8)
//  console.log(anotherString);

 const newString = "    suraj   "
//  console.log(newString);
//  console.log(newString.trim()); // remove space from priffix and suffix

const url = "http://suraj.com/suraj%20kumar";

// console.log(url.replace("%20", "-"));
// console.log(url.includes('suraj')); // true
// console.log(url.includes('sunder')); // false

const string = "my name is suraj";

console.log(string.split(' '));