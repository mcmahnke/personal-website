let body = document.querySelector("body");
let button = document.getElementById("startButton");

let i = 0;
let text = "Hello... My Name is Matthew Mahnke. Welcome to my Website.";
let speed = 50;

const typing = function () {
  if (i < text.length) {
    document.getElementById("introText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}

const buttonFade = function() {
    button.classList.remove("hidden");
}

typing();

setTimeout(buttonFade, speed * 1.3 * text.length);

button.addEventListener("click", function() {
    document.querySelector("nav").classList.remove("hidden");
    let sections = document.querySelector(".sections");
    sections.classList.remove("hidden");
    window.location.hash = "aboutAnchor";
});
