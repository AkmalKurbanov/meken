const burger = document.querySelector('.burger-js');
const menuContainer = document.querySelector('body');
const menuLinks = document.querySelectorAll('.menu__nav a[href^="#"]');

if (burger && menuContainer) {
  burger.addEventListener('click', function() {
    menuContainer.classList.toggle('menu-is-open');
  });

  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuContainer.classList.remove('menu-is-open');
      });
    });
  }
}

function updateLayoutVariables() {
  const header = document.querySelector('.header');
  if (header) {
    const rect = header.getBoundingClientRect();
    document.documentElement.style.setProperty('--header-height', `${rect.height}px`);
  }
}

window.addEventListener('resize', updateLayoutVariables);
document.addEventListener('DOMContentLoaded', updateLayoutVariables);
updateLayoutVariables();