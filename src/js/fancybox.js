import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind('[data-fancybox]', {
  // Отключает группировку, каждый элемент открывается как отдельное окно
  groupAll: false,
  
  // Отключает стрелки навигации, так как мы не хотим листать между документами
  Thumbs: {
    autoStart: false,
  },
  
  // Настройка того, что будет в "шапке" окна
  Toolbar: {
    display: {
      left: ["infobar"],
      middle: ["zoomIn", "zoomOut", "toggle1to1"],
      right: ["close"],
    },
  },
});