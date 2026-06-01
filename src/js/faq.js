const accordion = document.querySelector('.accordion');

if (accordion) {
  const items = accordion.querySelectorAll('.accordion__item');

  items.forEach(item => {
    const trigger = item.querySelector('.accordion__trigger');
    const content = item.querySelector('.accordion__content');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherContent = otherItem.querySelector('.accordion__content');
          const otherTrigger = otherItem.querySelector('.accordion__trigger');
          otherContent.style.height = '0px';
          otherContent.setAttribute('aria-hidden', 'true');
          otherTrigger.setAttribute('aria-expanded', 'false');
        }
      });

   
      if (isOpen) {
        item.classList.remove('is-open');
        content.style.height = '0px';
        content.setAttribute('aria-hidden', 'true');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
      
        content.style.height = `${content.scrollHeight}px`;
        content.setAttribute('aria-hidden', 'false');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}