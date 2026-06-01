import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

var swiper = new Swiper(".docs-swiper-js", {
  modules: [Autoplay],
  slidesPerView: "auto",
  spaceBetween: 24,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
