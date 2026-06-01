const popupTriggers = document.querySelectorAll('.popup-trigger-js');
const popups = document.querySelectorAll('.popup-js');

if (popupTriggers.length > 0 && popups.length > 0) {
  popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const triggerValue = trigger.getAttribute('data-popup');

      popups.forEach(popup => {
        if (popup.getAttribute('data-popup') === triggerValue) {
          popup.classList.add('is-open');
          document.body.classList.add('is-locked');
        }
      });
    });
  });

  popups.forEach(popup => {
    const closeBtn = popup.querySelector('.popup__close');

    const closePopup = () => {
      popup.classList.remove('is-open');
      document.body.classList.remove('is-locked');
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', closePopup);
    }

    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closePopup();
      }
    });
  });
}