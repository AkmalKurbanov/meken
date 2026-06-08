document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.js-scroll-nav a[href^="#"]');
  const header = document.querySelector(".header");

  function updateActiveState(targetHash) {
    document.querySelectorAll('.js-scroll-nav li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll(`.js-scroll-nav a[href="${targetHash}"]`).forEach(link => {
      link.closest('li').classList.add('active');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        updateActiveState(targetId);

        const headerHeight = header ? header.offsetHeight : 0;
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - headerHeight,
          behavior: "smooth",
        });

        history.pushState(null, null, targetId);
      } else {
        window.location.href = "/" + targetId;
      }
    });
  });

  if (window.location.hash) {
    const hash = window.location.hash;
    requestAnimationFrame(() => {
      updateActiveState(hash);
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        setTimeout(() => {
          const headerHeight = header ? header.offsetHeight : 0;
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - headerHeight,
            behavior: "smooth"
          });
        }, 100);
      }
    });
  }
});