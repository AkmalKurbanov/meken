import Swiper from "swiper";
import { Navigation, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';

const swiper = new Swiper(".experts-swiper-js", {
  modules: [Navigation, EffectFade,Pagination],
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
  const allVideoBlocks = document.querySelectorAll(".video-block");

  allVideoBlocks.forEach((block) => {
    const video = block.querySelector("video");
    if (video && !video.paused) {
      video.pause();
      block.classList.remove("is-playing");
    }
  });
}

// 2. Логика кастомного плеера (клик по всей области)
const videoBlocks = document.querySelectorAll(".video-block");

videoBlocks.forEach((block) => {
  const video = block.querySelector("video");

  if (!video) return;

  const togglePlay = async () => {
    if (video.paused) {
      try {
        // Опционально: если хотим, чтобы при запуске одного видео остальные затихали
        stopAllVideos();

        await video.play();
        block.classList.add("is-playing");
      } catch (error) {
        console.error("Воспроизведение заблокировано браузером:", error);
      }
    } else {
      video.pause();
      block.classList.remove("is-playing");
    }
  };

  // Клик по всей области видео-блока
  block.addEventListener("click", togglePlay);

  // Возврат кнопки Play, если видео доиграло до конца самостоятельно
  video.addEventListener("ended", () => {
    block.classList.remove("is-playing");
  });
});
