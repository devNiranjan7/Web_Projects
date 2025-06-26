student = {
    Name: "Dev",
    Phone: 9936000032,
    Marks: 100
}

student.Email = "hellodev@gmail.com"

console.log(student);

for (let num1 = 1; num1 < 6; num1++) {
    console.log(num1);
}

for (const key in student) {
    console.log(key, student[key]);
}

for (const c of "Dev") {
    console.log(c)
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

do {
    console.log(i);
    i++;
} while (i < 8);

function func1(x, y) {
    return x + y;
}

console.log(func1(2, 3));

let arr1 = [2, 1, 's', 4, 3, 'd', 8, 5, 9, 'a', 6];
console.log(arr1.sort());