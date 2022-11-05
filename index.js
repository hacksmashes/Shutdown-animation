let btn = document.querySelector(".btn");
let h2 = document.querySelector(".h2");
let h2click = document.querySelector(".h2click");
let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");

function action() {
  btn.style.transform = "scale(0)";
  btn.style.transition = "transform 0.5s ease-in";
  h2.classList.add("h2click");
}

function hoverIn() {
  btn.style.transition = "all 0.2s";
}

setTimeout(() => {
  document.querySelector(".body").style.opacity = "0";
}, 13000);

setTimeout(() => {
  s1.style.animationName = "changed";
  s2.style.animationName = "changed";
  s3.style.animationName = "changed";
}, 12500);
