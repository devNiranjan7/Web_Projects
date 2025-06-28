// Question 1

document.querySelector(".item").style.color = "red";

// Question 2

/* I created a table without <tbody>.
   In "view page source" button it doesn't create <tbody> tag but when I inspect the element I found the <tbody> tag */

// Question 3

let boxes = document.getElementsByClassName("container")[0];

boxes.firstElementChild.style.color = "green";

boxes.lastElementChild.style.color = "green";

// Question 4

document.querySelectorAll("li").forEach(element => {
    element.style.backgroundColor = "cyan";
});

// Question 5

/* Answer is none of these because there is no built-in method to directly find farthest ancestor matching a selector */