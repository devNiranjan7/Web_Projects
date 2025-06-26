alert("Hello World");

console.log("Hey Console,I am Dev");

var d = prompt("Enter a number.");

console.log(typeof d);

var isTrue = confirm("Are you sure?");

if (isTrue) {
    console.log("You entered a number and confirm it.");
}
else {
    console.log("You entered a number but you don't confirm it.");
}

console.log("Entered number is " + d);

let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}