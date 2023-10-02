const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let banner_img = document.querySelector(".banner-img");
let banner_tagLine = document.querySelector("#banner p");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
let dot = document.querySelectorAll(".dot");

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", () => {
    changeImage(i);
  });
}

changeImage = (nb) => {
  banner_img.src = "./assets/images/slideshow/" + slides[nb].image;
  banner_tagLine.innerHTML = slides[nb].tagLine;
  dot.forEach((d) => {
    d.classList.remove("dot_selected");
  });
  dot[nb].classList.add("dot_selected");
};

arrow_left.addEventListener("click", function () {
  alert("left");
});
arrow_right.addEventListener("click", function () {
  alert("right");
});
