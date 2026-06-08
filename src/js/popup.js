// Используем этот подход в main.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. Делегирование клика по кнопкам
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.popup-trigger-js');
    
    if (trigger) {
      e.preventDefault();
      // Получаем значение напрямую из dataset
      const triggerValue = trigger.dataset.popup;
      // Ищем попап в момент клика, а не при загрузке страницы
      const targetPopup = document.querySelector(`.popup-js[data-popup="${triggerValue}"]`);
      
      if (targetPopup) {
        targetPopup.classList.add('is-open');
        document.body.classList.add('is-locked');
      } else {
        console.warn('Попап не найден для:', triggerValue);
      }
    }
  });

  // 2. Делегирование закрытия (крестик или фон)
  document.addEventListener('click', (e) => {
    const isCloseBtn = e.target.closest('.popup__close');
    const isOverlay = e.target.classList.contains('popup-js');
    
    if (isCloseBtn || isOverlay) {
      const openPopup = e.target.closest('.popup-js') || e.target;
      if (openPopup) {
        openPopup.classList.remove('is-open');
        document.body.classList.remove('is-locked');
      }
    }
  });
});