// Question 1

console.log("Dev\"".length);

// prints 4

// Question 2

let mySelf = "Dev";

console.log(mySelf.includes("ev"));
console.log(mySelf.startsWith("S"));
console.log(mySelf.endsWith("v"));

// Question 3

console.log(mySelf.toLowerCase());

// Question 4

let str = "Please give me Rs 1000";
console.log(str.slice(18));

// Question 5

let str1 = "Tony";
// str1[2] = "r" 
// str1 is not changed , because string is immutable
console.log(str1);