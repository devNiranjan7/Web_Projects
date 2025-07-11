let user = prompt("Enter S (Snake), W (Water) or G (Gun) : ");

let option = Math.floor(Math.random() * 3);

let computer = ["S", "W", "G"][option];

let result;

if (user === computer) {
    result = "It's a draw!";
}

else if (
    (user === "S" && computer === "W") ||
    (user === "W" && computer === "G") ||
    (user === "G" && computer === "S")
) {
    result = "You win!";
}

else if (
    (user === "S" && computer === "G") ||
    (user === "W" && computer === "S") ||
    (user === "G" && computer === "W")
) {
    result = "You lose!";
}

else {
    result = "Invalid input!";
}

alert(`You chose: ${user}\nComputer chose: ${computer}\n${result}`);