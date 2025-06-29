// Question 1

let age;

age = prompt("Enter your age");

age = Number(age);

// (age >= 18) ? alert("You can drive") : alert("You can't drive");

// Question 2

let isTrue = confirm("Want to see the prompt again.");

if (isTrue) {
    age = prompt("Enter your age");
}

// (age >= 18) ? alert("You can drive") : alert("You can't drive");

// Question 3

if (age < 0) {
    console.error("Age entered is negative!")
}

else {
    (age >= 18) ? alert("You can drive") : alert("You can't drive");
}

// Question 4

let num;

num = prompt("Enter number : ");

if (Number(num) > 4) {
    location.href = "https://www.google.com";
}

// Question 5

let bgcolor = prompt("Enter the color of background : ");

document.body.style.backgroundColor = bgcolor;