"use strict";

const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  loop: true,
  slidesPerView: 3,
  coverflowEffect: {
    // depth: 20,
    // rotate: 50,
    // slideShadows: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: false, // Disable dot pagination
  keyboard: true, // Prevent arrow key control
  allowTouchMove: false, // Disable swiping
});

let isDragging = false;

// video stuff
document.querySelectorAll(".hover-video").forEach((video) => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0; // Reset to the beginning
  });
});
