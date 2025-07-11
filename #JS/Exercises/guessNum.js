let random = Math.ceil(Math.random() * 100);
console.log(random);
let score = 100;
let guess = 0;
let userNum;

do {

    userNum = parseInt(prompt("Guess a number between 1-100 : "));
    guess++;

    if (userNum > random) {
        alert("You number is greater! Try lesser number.");
    }

    else if (userNum < random) {
        alert("Your number is lesser! Try greater number.");
    }

    else {
        alert("You guessed it correct!");
        alert(`Your score : ${score - guess + 1}`);
    }
} while (userNum !== random);