// Question 1
function delay(n = 2) {
    return new Promise(resolve =>
        setTimeout(resolve, 1000 * n));
}

async function printMsg() {
    await delay();
    console.log("Hello");

    await delay();
    console.log("World");
}

printMsg();

// Question 2
let nums = [1, 3, 4, 6, 8, 2, 3];
let sum = (...number) =>
    number.reduce((x, y) => x + y);
let average = (...number) => sum(...number) / number.length;
console.log("Average : ", average(...nums));

// Question 3
(async () => {
    await delay(1);
    console.log("Hello!");

    await delay(5);
    console.log("Dev");
})();

//Question 4
function SI(p, r, t) {
    return (p * r * t) / 100;
}
console.log(SI(1000, 10, 2));