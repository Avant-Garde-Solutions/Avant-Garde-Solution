 
 const container = document.querySelector('.form-container');
  const toggleBtn = document.querySelector('.toggle-btn');

  function toggleSlide() {
    container.classList.toggle('slide');
    toggleBtn.textContent = container.classList.contains('slide') 
      ? 'Sign In' 
      : 'Sign Up';
  }
