let a;

a = prompt("Enter number you want factorial of :");

a = Number(a);

let arr = [];

for (let i = 1; i <= a; i++) {
    arr.push(i);
}

console.log(arr.reduce((x, y) => x * y));