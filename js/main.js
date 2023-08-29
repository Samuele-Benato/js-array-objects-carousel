const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const slidesContainer = document.getElementById("slide-container");
const prevButton = document.getElementById("go-prev");
const nextButton = document.getElementById("go-next");

let activeSlide = 0;

let slidesHTML = "";

for (let i = 0; i < images.length; i++) {
  const imagesUrl = images[i].image;
  const titleImage = images[i].title;
  const textImage = images[i].text;

  console.log(imagesUrl);

  let active = i == activeSlide ? "active" : "";

  slidesHTML += `
  <div class = 'slide ${active}'>
    <div class = 'image-container'>
      <img src= '${imagesUrl}' alt = '' />
    </div>
    
    <div class = 'caption'>
      <h1> ${titleImage} </h1>
      <p> ${textImage} </p>
    </div>
    
  </div>`;
  console.log(slidesHTML);
}

slidesContainer.innerHTML = slidesHTML;

nextButton.addEventListener("click", function () {
  const allSlidesEl = document.querySelectorAll(".slide");

  const activeSlideEl = allSlidesEl[activeSlide];
  activeSlideEl.classList.toggle("active");

  activeSlide++;

  if (activeSlide >= allSlidesEl.length) {
    activeSlide = 0;
  }

  const newActiveSlide = allSlidesEl[activeSlide];
  newActiveSlide.classList.toggle("active");
});

prevButton.addEventListener("click", function () {
  const allSlidesEl = document.querySelectorAll(".slide");

  const activeSlideEl = allSlidesEl[activeSlide];
  activeSlideEl.classList.toggle("active");

  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = allSlidesEl.length - 1;
  }

  const newActiveSlide = allSlidesEl[activeSlide];
  newActiveSlide.classList.toggle("active");
});
