const cardImage = document.querySelector(".card-image");
const cardTitle = document.querySelector(".card-title");
const cardDescription = document.querySelector(".card-description");

const profile = [
  {
    name: "New movie is released!",
    description: "Click the button to watch on Jetflix app.",
    image:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },

  {
    name: "Check out our latest series!",
    description: "Discover new episodes and new characters.",
    image:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },

  {
    name: "New music album released!",
    description: "Listen to new songs and enjoy them with us.",
    image:
      "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  },
];

let sum = 0;

function show() {
  const { image, name, description } = profile[sum];
  cardImage.src = image;
  cardTitle.textContent = name;
  cardDescription.textContent = description;

  sum = (sum + 1) % profile.length;
}

show();

setInterval(show, 5000);
