  
  let lastScrollY = window.scrollY;
const scrolleElement = document.querySelector('.Scrolle');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // Scrolling down
        scrolleElement.classList.remove('dark-blue');
        scrolleElement.classList.add('black');
    } else {
        // Scrolling up
        scrolleElement.classList.remove('black');
        scrolleElement.classList.add('dark-blue');
    }

    lastScrollY = currentScrollY;
});

  // Optional: Add JavaScript to pause on hover or reset animation timing
        const slider = document.querySelector('.slider');
        let isPaused = false;
    
        slider.addEventListener('mouseenter', () => {
            isPaused = true;
            slider.style.animationPlayState = 'paused';
        });
    
        slider.addEventListener('mouseleave', () => {
            isPaused = false;
            slider.style.animationPlayState = 'running';
        });


