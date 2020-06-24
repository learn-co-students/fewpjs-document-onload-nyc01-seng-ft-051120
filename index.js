// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let target = document.querySelector("p#text");
    target.innerHTML = "This is really cool!"
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

let target = document.querySelector("p#text");