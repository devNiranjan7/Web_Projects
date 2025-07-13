let students = [
    "Rohit",
    "Arun",
    "Himanshu",
    "Priyanshu",
    "Yashashvi",
    "Arpit",
    "Rishabh",
    "Dev"
]

let houses = [];

students.forEach(student => {
    if (student.length <= 4) {
        houses.push("Nilgiri");
    }

    else if (student.length <= 6) {
        houses.push("Shivalik");
    }
    else if (student.length <= 8) {
        houses.push("Udaygiri");
    }
    else {
        houses.push("Aravali");
    }
});

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i]} : ${houses[i]}`);
}