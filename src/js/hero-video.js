const video = document.querySelector('.hero-video__bg');

const observerOptions = {
  root: null, 
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, observerOptions);

if (video) {
  observer.observe(video);
}