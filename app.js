VanillaTilt.init(document.querySelectorAll(".box"), {
  max: 15,
  speed: 300,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  scale: 1.1,
});

document.addEventListener("DOMContentLoaded", function () {
  const modeSwitch = document.querySelector(".mode-switch");

  modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
  });
});
