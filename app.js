const modeSwitch = document.querySelector(".mode-switch");

modeSwitch.addEventListener("click", () => {
  document.documentElement.classList.toggle("white");
  modeSwitch.classList.toggle("active");
});

VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 15,
  speed: 300,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  scale: 1.1,
});