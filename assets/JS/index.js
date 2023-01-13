/*
//Bootstrap Carousel
function startCarousel() {
  const carousel = document.getElementById("carouselExampleCaptions");
  const nextButton = carousel.querySelector(".carousel-control-next");

  setInterval(function () {
    nextButton.dispatchEvent(new Event("click"));
  }, 5000);
}
startCarousel();
*/

//SplideJs
const splide = new Splide(".splide", {
  type: "loop",
  padding: { y: 10 },
  gap: "1rem",
  rewind: true,
  speed: 2000,
  width: "100vw",
  perPage: 4,
  start: 1,
  perMove: 1,
  autoplay: false,
  interval: 4000,
  arrows: false,
  pagination: false,
  pauseOnHover: true,
  wheel: true,
});
splide.mount();

//SplideJsmobile
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    padding: { y: 10 },
    gap: "1rem",
    rewind: true,
    speed: 2000,
    width: "100vw",
    perPage: 1,
    start: 1,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    arrows: false,
    pagination: false,
    pauseOnHover: true,
    wheel: true,
  }).mount();
});

//Menu-Modal-Dropdown
function toggleDropdownMenu() {
  var menu = document.getElementById("dropdown-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function toggleDropdownMenu2() {
  var menu = document.getElementById("dropdown-menu2");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function toggleDropdownMenu3() {
  var menu = document.getElementById("dropdown-menu3");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function toggleDropdownMenu4() {
  var menu = document.getElementById("dropdown-menu4");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

setTimeout(function () {
  $("#modal2").modal("show");
}, 3500);

function closeItem() {
  $("#modal2").modal("hide");
}

// redirect index
const returnbtn = document.querySelector(".col-md-2");
function redirectBtnindex() {
  window.location.href = "index.html";
}

// redirect login e produto
const actionbtn = document.querySelector(
  ".text",
  ".link",
  "#iconsperson",
  ".account-login"
);
function redirectBtnlogin() {
  window.location.href = "Login.html";
}

const actionproductcard = document.querySelector(
  ".card-banner",
  ".card-price",
  ".conditions-price",
  ".conditions-payment",
  "title-text"
);
function redirectProductpage() {
  window.location.href = "produto.html";
}

//Fixed Navbar
var navbar1 = document.querySelector("#navbar1");
var navbar2 = document.querySelector("#navbar2");
var sticky = navbar1.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navbar1.classList.add("fixed");
    navbar2.classList.add("fixed");
    navbar2.classList.add("color");
  } else {
    navbar1.classList.remove("fixed");
    navbar2.classList.remove("fixed");
    navbar2.classList.remove("color");
  }
};

//Contador Desktop
const countDownDate = new Date("Jan 20, 2023 19:00:00").getTime();
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const dayLabel = document.getElementById("day-label");
const hourLabel = document.getElementById("hours-label");
const minutesLabel = document.getElementById("minutes-label");
const secondsLabel = document.getElementById("seconds-label");

const x = setInterval(function () {
  const now = new Date().getTime();
  let distance = countDownDate - now;
  if (distance < 0) {
    distance = countDownDate - distance;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
  dayLabel.innerHTML = "DIA";
  hourLabel.innerHTML = "HORAS";
  minutesLabel.innerHTML = "MIN.";
  secondsLabel.innerHTML = "SEG.";
}, 1000);

console.log(countDownDate);

//Contador Mobile
const countDownDatemobile = new Date("Jan 20, 2023 19:00:00").getTime();

const daysMobileElement = document.getElementById("days-mobile");
const hoursMobileElement = document.getElementById("hours-mobile");
const minutesMobileElement = document.getElementById("minutes-mobile");
const secondsMobileElement = document.getElementById("seconds-mobile");
const dayLabelMobile = document.getElementById("day-label-mobile");
const hourLabelMobile = document.getElementById("hours-label-mobile");
const minutesLabelMobile = document.getElementById("minutes-label-mobile");
const secondsLabelMobile = document.getElementById("seconds-label-mobile");

const xmobile = setInterval(function () {
  const now = new Date().getTime();
  let distance = countDownDatemobile - now;
  if (distance < 0) {
    distance = countDownDatemobile - distance;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysMobileElement.innerHTML = days;
  hoursMobileElement.innerHTML = hours;
  minutesMobileElement.innerHTML = minutes;
  secondsMobileElement.innerHTML = seconds;
  dayLabelMobile.innerHTML = "DIAS";
  hourLabelMobile.innerHTML = "HORAS";
  minutesLabelMobile.innerHTML = "MIN.";
  secondsLabelMobile.innerHTML = "SEG.";
}, 1000);

console.log(countDownDate);
