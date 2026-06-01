const anchorLinks = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector('.header');

if (anchorLinks.length > 0) {
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      
      if (targetId !== '#' && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          
          const headerHeight = header ? header.offsetHeight : 0;
          
          
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          
          
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}