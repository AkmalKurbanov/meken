const words = document.querySelectorAll('.hero__slogan span');
let currentIndex = 0;


if (words.length > 0) {
  
  words[0].classList.add('is-visible');

  function changeWord() {

    words[currentIndex].classList.remove('is-visible');
    

    currentIndex = (currentIndex + 1) % words.length;
    
    words[currentIndex].classList.add('is-visible');
  }


  setInterval(changeWord, 4000);
}