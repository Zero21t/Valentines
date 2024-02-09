document.addEventListener("DOMContentLoaded", function() {
    const heartsContainer = document.querySelector('.hearts');
  
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerText = '❤️';
      heart.style.left = Math.random() * (window.innerWidth - 40) + 'px';
      heart.style.top = Math.random() * (window.innerHeight -40) + 'px';
      heart.style.animationDuration = Math.random() * 3 + 2 + 's';
      heart.style.fontSize = Math.random() * 30 + 10 + 'px';
  
      document.body.appendChild(heart); // Append heart to body instead of heartsContainer
  
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  
    setInterval(createHeart, 300);
});
