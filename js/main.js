const $icon = document.getElementById("icon");
const $button = document.getElementById("btnM");
const $overlay = document.getElementById("overlay");
const $modal = document.getElementById("modal");
const $close = document.getElementById("close");
const $hideButton = document.getElementById("hide-modal");
const $closeButton = document.getElementById("close-modal");
//
const ipad = window.matchMedia("screen and (max-width: 768px)");
const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burger-menu");
ipad.addListener(validation);
validation(ipad);
function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
    // console.log(event);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}
function hideShow() {
  if (menu.classList.contains("is_active")) {
    menu.classList.remove("is_active");
  } else {
    menu.classList.add("is_active");
  }
}
//
$icon.addEventListener("click", (event) => {
  console.log(event);
  $overlay.style.transition = "1.1s ease-in";
  $modal.style.animation = "animationOut .8s forwards";
  $overlay.classList.remove("active");
});
$button.addEventListener("click", (event) => {
  console.log(event);
  $modal.style.animation = "animationIn .8s forwards";
  $overlay.classList.add("active");
});
$close.addEventListener("click", (event) => {
  $overlay.style.transition = "1.1s ease-in";
  $modal.style.animation = "animationFalse .8s forwards";
  $overlay.classList.remove("active");
});
$overlay.addEventListener("click", (event) => {
  if (event.target === $overlay) {
    $overlay.style.transition = "1.1s ease-in";
    $modal.style.animation = "animationOut .8s forwards";
    $overlay.classList.remove("active");
  }
});
$hideButton.addEventListener("click", (event) => {
  console.log(event);
  $overlay.style.transition = "1.1s ease-in";
  $modal.style.animation = "animationOut .8s forwards";
  $overlay.classList.remove("active");
});
$closeButton.addEventListener("click", (event) => {
  $overlay.style.transition = "1.1s ease-in";
  $modal.style.animation = "animationFalse .8s forwards";
  $overlay.classList.remove("active");
});
//Media query
