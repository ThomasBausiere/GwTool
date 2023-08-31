let backgrounds = ["../src/bg_01.png","../src/bg_02.png", "../src/bg_03.png", "../src/bg_04.png", "../src/bg_05.png", "../src/bg_06.png", "../src/bg_07.png", "../src/bg_08.png", "../src/bg_09.png", "../src/bg_10.png"];
let currentIndex = 0;

function changeBackground() {
  let body = document.querySelector("body");
  let nextIndex = (currentIndex + 1) % backgrounds.length;
  let nextBackground = backgrounds[nextIndex];
  let img = new Image();
  img.onload = function() {
    body.style.transition = "background-image 1s ease-in-out";
    body.style.backgroundImage = `url(${img.src})`;
    setTimeout(() => {
      body.style.transition = "";
      currentIndex = nextIndex;
      setTimeout(changeBackground, 10000);
    }, 1000);
  }
  img.src = nextBackground;
}

document.addEventListener("DOMContentLoaded", () => {
  changeBackground();
  document.addEventListener("keydown", function(event) {
    if (event.keyCode === 37) { // left arrow
      currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
      changeBackground();
    } else if (event.keyCode === 39) { // right arrow
      currentIndex = (currentIndex + 1) % backgrounds.length;
      changeBackground();
    }
  });
});
