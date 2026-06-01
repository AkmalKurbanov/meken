const switchers = document.querySelectorAll(".lang-switcher-js");

document.addEventListener("click", (event) => {
  switchers.forEach(switcher => {
    if (!switcher.contains(event.target)) {
      switcher.classList.remove("is-open");
    }
  });
});

switchers.forEach(switcher => {
  switcher.addEventListener("click", (event) => {
    event.stopPropagation();
    
    switchers.forEach(s => {
      if (s !== switcher) s.classList.remove("is-open");
    });
    
    switcher.classList.toggle("is-open");
  });
});