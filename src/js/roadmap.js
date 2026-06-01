const roadmap = document.querySelector(".roadmap__list");

if (roadmap) {
  const active = Number(roadmap.dataset.active);
  const items = roadmap.querySelectorAll("li");

  items.forEach((item, index) => {
    if (index < active - 1) {
      item.classList.add("is-completed");
    }

    if (index === active - 1) {
      item.classList.add("is-current");
    }
  });
}