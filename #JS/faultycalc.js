

function faultycalc(x, y, z) {
    let random = Math.random();
    let obj = {
        "+": "-",
        "*": "+",
        "-": "/",
        "/": "**"
    }

    function safecalc(x, y, z) {
        switch (y) {
            case "+":
                return x + z;
            case "-":
                return x - z;
            case "*":
                return x * z;
            case "/":
                return z !== 0 ? x / z : "Cannot divide by zero";
            case "**": return (x <= 100 && z <= 10) ? x ** z : "Does not compute"
            default:
                return "Invalid Operator!";
        }
    }

    x = Number(x);
    z = Number(z);
    console.log(`Random: ${random}`);
    if (random > 0.1) {
        console.log(`The operation is ${x} ${y} ${z}`);
        return safecalc(x, y, z);
    } else {
        y = obj[y];
        console.log(`The operation is ${x} ${y} ${z}`);
        return safecalc(x, y, z);
    }
}

let x = prompt("Enter first number:");
let y = prompt("Enter operator (+ , - , * , /):");
let z = prompt("Enter second number:");

console.log("The result is " + faultycalc(x, y, z));