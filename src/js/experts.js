import Swiper from "swiper";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';

const swiper = new Swiper(".experts-swiper-js", {
  modules: [Navigation, EffectFade, Pagination],
  effect: "fade",
  autoHeight: true,
  fadeEffect: {
    crossFade: true,
  },
  speed: 700,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    transitionStart: () => {
      stopAllVideos();
    },
  },
});

function stopAllVideos() {
  const allVideos = document.querySelectorAll("video");
  allVideos.forEach((video) => {
    if (!video.paused) {
      video.pause();
      const block = video.closest(".video-block");
      if (block) block.classList.remove("is-playing");
    }
  });
}

document.addEventListener("click", (event) => {
  const block = event.target.closest(".video-block");
  if (!block) return;

  const video = block.querySelector("video");
  if (!video) return;

  if (video.paused) {
    stopAllVideos();
    video.play().catch((error) => {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    });
    block.classList.add("is-playing");
  } else {
    video.pause();
    block.classList.remove("is-playing");
  }
});

document.addEventListener("ended", (event) => {
  if (event.target.tagName === "VIDEO") {
    const block = event.target.closest(".video-block");
    if (block) block.classList.remove("is-playing");
  }
}, true);