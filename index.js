function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* 
function updateImage() {

    if (window.matchMedia("(min-width: 500px)").matches) {
        
    document.getElementById("pic3").src = "Fotos/download__1_-removebg-preview.png";

    
    } else {

    document.getElementById("pic3").src = "Fotos/download__1_-removebg-preview22.png";
    }
}

window.addEventListener("resize", updateImage);
updateImage();
*/


function startCarousel() {
  const carousel = document.getElementById("carouselExampleCaptions");
  const nextButton = carousel.querySelector(".carousel-control-next");

  setInterval(function () {
    nextButton.dispatchEvent(new Event("click"));
  }, 5000);
}
startCarousel();


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


