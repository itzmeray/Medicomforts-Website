// Function to create falling celebration elements (confetti, sparkles)
function createFallingElements() {
    const celebrationContainer = document.querySelector('.celebration-effects');
  
    setInterval(() => {
      const element = document.createElement('div');
      element.classList.add('falling-element');
      
      // Set random color
      const colors = ['#ff1493', '#ff6347', '#32cd32', '#00ced1', '#8a2be2'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      element.style.backgroundColor = color;
  
      // Randomize the horizontal position
      element.style.left = `${Math.random() * 100}%`;
  
      // Append the element to the celebration container
      celebrationContainer.appendChild(element);
  
      // Remove the element after it has fallen off the screen
      setTimeout(() => {
        element.remove();
      }, 5000); // 5 seconds to match the falling duration
    }, 150); // Generate new element every 150ms
  }
  
  // Start the celebration effect on page load
  window.onload = () => {
    createFallingElements();
  };
  