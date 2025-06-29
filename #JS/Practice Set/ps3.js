// Question 1

let marks = {
    dev: 99,
    ayush: 90,
    yogi: 95
}

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}

// Question 2

for (const key in marks) {
    console.log("The marks of " + key + " is " + marks[key]);
}

// Question 3

let num;

while (num != 7) {
    num = prompt("Enter a number");
}

console.log("You have entered correct number");

// Question 4

function mean(num1, num2, num3, num4, num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5;
}

console.log(mean(8, 4, 2, 6, 10));