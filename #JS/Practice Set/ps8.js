window.onload = function () {

console.log("Script loaded!");

// QUestion 3

document.getElementById("google").addEventListener("click", () => {
    window.location.href = "https://google.com";
});

document.getElementById("chatgpt").addEventListener("click", () => {
    window.location.href = "https://chatgpt.com";
});

document.getElementById("youtube").addEventListener("click", () => {
    window.location.href = "https://youtube.com";
});

// Question 5

setInterval(function () {
  document.getElementById("bulb-box").classList.toggle("bulb");  
}, 300);

};