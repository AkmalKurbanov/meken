import Swiper from "swiper";
import { Autoplay,  EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

var swiper = new Swiper(".hero-swiper-js", {
  modules: [Autoplay, EffectFade],
  effect: "fade",
  allowTouchMove: false,
  simulateTouch: false,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true
});
