const anchorLinks = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector('.header'); // Укажите класс вашей шапки

if (anchorLinks.length > 0) {
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      
      if (targetId !== '#' && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Получаем высоту шапки (если шапка есть, иначе 0)
          const headerHeight = header ? header.offsetHeight : 0;
          
          // Считаем позицию элемента на странице с учетом прокрутки
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          
          // Вычитаем высоту шапки из финальной точки
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