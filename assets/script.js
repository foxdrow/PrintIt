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

let currentSlide = 0;

for (let i = 0; i < dot.length; i++) {
  dot[i].addEventListener("click", () => {
    changeImage(i);
  });
}

arrow_left.addEventListener("click", function () {
  if (currentSlide == 0) {
    changeImage(slides.length - 1);
  } else {
    changeImage(currentSlide - 1);
  }
});

arrow_right.addEventListener("click", function () {
  if (currentSlide == slides.length - 1) {
    changeImage(0);
  } else {
    changeImage(currentSlide + 1);
  }
});

changeImage = (slideNumber) => {
  banner_img.src = "./assets/images/slideshow/" + slides[slideNumber].image;
  banner_tagLine.innerHTML = slides[slideNumber].tagLine;
  dot.forEach((item) => {
    item.classList.remove("dot_selected");
  });
  dot[slideNumber].classList.add("dot_selected");
  currentSlide = slideNumber;
};
