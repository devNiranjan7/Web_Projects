// Question 1

let arr1 = [1, 33, 4, 64, 50, 100, 40, 30, 28];

let a;

a = prompt('Enter number to add in array : ');

arr1.push(Number(a));

console.log(arr1);

// Question 2

do {
    a = prompt('Enter number to add in array : ');
    arr1.push(Number(a));
    console.log(arr1);
}
while (a != 0);

// Question 3

console.log(arr1.filter(num => num%10==0));

// Question 4

console.log(arr1.map(num => num**2));

// Question 5

let arr2=[1,2,3,4,5,6];

console.log(arr2.reduce((x1,x2)=> x1*x2));