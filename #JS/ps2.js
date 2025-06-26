// Question 1

let age = prompt("What is your age");

if (age > 10 && age < 20) {
    console.log("Your age lies between 10 and 20.");
} else {
    console.log("Your age doesn't lies between 10 and 20.");
}

// Question 2

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Question 3

let num1 = prompt("Enter a number");

if (num1 % 2 === 0 && num1 % 3 === 0) {
    console.log(num1, "is divisible by both 2 and 3");
} else {
    console.log(num1, "is not divisible by both 2 and 3");
}

// Question 4

let num2 = prompt("Enter a number");

if (num2 % 2 === 0 || num2 % 3 === 0) {
    console.log(num2, "is divisible by either 2 or 3");
} else {
    console.log(num2, "is not divisible by either 2 or 3");
}

// Question 5

let drivingage = prompt("What's your age");

(drivingage >= 18) ? console.log("You can drive") : console.log("You can't drive")