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



document.addEventListener("DOMContentLoaded", function()
{
  document.querySelector(".spinner-wrapper").style.opacity= "0";
  setTimeout(function(){
    document.querySelector(".spinner-wrapper").style.display = "none";
  }, 2000); 
});

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


const icon = document.querySelector("ion-icon[name='cart-outline']");
const dropdown = document.querySelector(".dropdown-menu");

icon.addEventListener("click", () => {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});



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

/*
// Obtém a referência do elemento que exibe o número de itens no carrinho
let notificationNumber = document.querySelector('.notification-number');

// Inicializa o número de itens no carrinho como 0
let cartCount = 0;

// Obtém a referência dos botões que adicionam e removem itens ao carrinho
let addToCartButton = document.querySelector('#add-to-cart-button');
let removeFromCartButton = document.querySelector('#remove-from-cart-button');

// Adiciona um evento de clique ao botão de adicionar itens ao carrinho
addToCartButton.addEventListener('click', function() {
    // Incrementa o número de itens no carrinho
    cartCount++;
    // Atualiza o número exibido na bolinha vermelha
    notificationNumber.textContent = cartCount;
});

// Adiciona um evento de clique ao botão de remover itens do carrinho
removeFromCartButton.addEventListener('click', function() {
    // Decrementa o número de itens no carrinho, desde que o número não seja menor que zero
    if (cartCount > 0) {
        cartCount--;
        // Atualiza o número exibido na bolinha vermelha
        notificationNumber.textContent = cartCount;
    }
});


/*
let cartItems = [];

let addToCartButton = document.querySelector('#add-to-cart-button');

let cartList = document.querySelector('.cart-list');

// Adiciona um evento de clique ao botão de adicionar itens ao carrinho
addToCartButton.addEventListener('click', function() {
    // Obtém as informações do item a ser adicionado ao carrinho
    let item = {
        name: "item name",
        image: "image url",
        price: "price",
        quantity: 1
    };
    // Adiciona o item ao carrinho
    cartItems.push(item);
    // Chama a função para atualizar a visualização do carrinho
    updateCart();
});

function updateCart() {
    // Limpa a lista de itens do carrinho
    cartList.innerHTML = "";

    // Adiciona cada item ao carrinho
    cartItems.forEach(function(item) {
        // Cria um novo elemento de lista
        let newItem = document.createElement('li');

        // Adiciona as informações do item ao elemento de lista
        newItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ${item.price}</p>
        `;
        // Adiciona um evento de clique para redirecionar para a página de detalhes do item
        newItem.addEventListener('click', function() {
            window.location.href = "item-details.html?name=" + item.name;
        });

        // Adiciona o elemento de lista à lista de itens do carrinho
        cartList.appendChild(newItem);
    });
}

/*
let cartItems = [];

let addToCartButton = document.querySelector('#add-to-cart-button');

let cartList = document.querySelector('.cart-list');

let mobileCartModal = document.querySelector('#mobile-cart-modal');

let mobileCartList = mobileCartModal.querySelector('.cart-list');

// Adiciona um evento de clique ao botão de adicionar itens ao carrinho
addToCartButton.addEventListener('click', function() {
    // Obtém as informações do item a ser adicionado ao carrinho
    let item = {
        name: "item name",
        image: "image url",
        price: "price",
        quantity: 1
    };
    // Adiciona o item ao carrinho
    cartItems.push(item);
    // Chama a função para atualizar a visualização do carrinho
    updateCart();
});

// Chama a função para atualizar a visualização do modal de carrinho móvel
updateMobileCart();

// Adiciona um evento de clique ao botão de abrir o modal de carrinho móvel
document.querySelector('#open-mobile-cart-button').addEventListener('click', function() {
    mobileCartModal.style.display = "block";
});

// Adiciona um evento de clique ao botão de fechar o modal de carrinho móvel
mobileCartModal.querySelector('.close-button').addEventListener('click', function() {
    mobileCartModal.style.display = "none";
});

function updateCart() {
    // Limpa a lista de itens do carrinho
    cartList.innerHTML = "";
    mobileCartList.innerHTML = "";

    // Adiciona cada item ao carrinho
    cartItems.forEach(function(item) {
        // Cria um novo elemento de lista para o carrinho
        let newItem = document.createElement('li');

        // Adiciona as informações do item ao elemento de lista
        newItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: ${item.price}</p>
        `;
        // Adiciona um evento de clique para redirecionar para a página de detalhes do item
        newItem.addEventListener('click', function() {
            window.location.href = "item-details.

*/


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
