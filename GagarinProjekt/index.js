// Loading
setTimeout(() => {
  document.getElementById("page").style.display = "block";
  document.getElementById("loading").style.display = "none";
}, 2000);

// Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  mousewheel: true,
  allowTouchMove: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Burger-menu
function burgerMenu() {
  const buttons = $(".js-burger-menu-button");
  console.log("burgerbuttons", buttons);
  buttons.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  let menu = $(".e-burger-menu");

  const overlay = document.getElementById("js-overley");

  overlay.addEventListener("click", (e) => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("e-burger-menu_active", "e-burger-menu1_active");
    if (menu.hasClass("e-burger-menu_active", "e-burger-menu1_active")) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "visible");
    }
  }
}
burgerMenu();

// Map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.7392221699282, lng: 37.64366884351654 },
    zoom: 16,
    zoomControl: true,
  });
  let marker = new google.maps.Marker({
    position: { lat: 55.7392221699282, lng: 37.64366884351654 },
    map: map,
    title: "Gagarin digital",
  });
}

// Form
const form = document.getElementById("js-flag-form");
const addBtn = document.getElementById("js-flag-up");

class user {
  constructor(name1, email, text) {
    this.name1 = name1;
    this.email = email;
    this.text = text;
  }
}
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
const name1 = document.getElementById("js-name");
const email = document.getElementById("js-contact");
const text = document.getElementById("js-text");

addBtn.addEventListener("click", () => {
  console.log(name1, email);
  const newUser = new user(name1.value, email.value, text.value);
  const userJSON = JSON.stringify(newUser);
  form.reset();

  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: userJSON,
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      alert("Обратная связь");
    })
    .catch((error) => {
      const status = error.status;
      readError(status);
    });
});

function readError(status) {
  switch (status) {
    default: {
      alert("Непердбачувані помилки на сервері");
    }
  }
}

document.body.style.overflow = "hidden";
