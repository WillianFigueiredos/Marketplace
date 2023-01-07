

//Bootstrap Carousel
function startCarousel() {
  const carousel = document.getElementById("carouselExampleCaptions");
  const nextButton = carousel.querySelector(".carousel-control-next");

  setInterval(function () {
    nextButton.dispatchEvent(new Event("click"));
  }, 5000);
}
startCarousel();


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
  autoplay: true,
  interval: 4000,
  arrows: false,
  pagination: false,
  pauseOnHover: true,
  wheel: true,
});
splide.mount();


//Menu-Modal
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

//Modal-Newsletter
setTimeout(function() {
  $('#modal2').modal('show');
}, 3000);


function closeItem() {
  $('#modal2').modal('hide');
}



const actionbtn = document.querySelector(".text", "#iconsperson");

function redirectBtnlogin() {
    window.location.href = "login.html";
}

const actionproductcard = document.querySelector(".product-card");

function redirectProductpage() {
    window.location.href = "produto.html";
    
}


