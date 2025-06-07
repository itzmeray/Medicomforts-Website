let currentIndex = 0;
const reviews = document.querySelectorAll('.review');
const totalReviews = reviews.length;

// Function to update the carousel display
function updateCarousel() {
  reviews.forEach((review, index) => {
    const offset = (index - currentIndex) * 100;
    review.style.transform = `translateX(${offset}%)`;
    review.style.opacity = (index === currentIndex) ? 1 : 0;
  });
}

// Function to move the carousel, both next and previous
function moveCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalReviews - 1; // Cycle to the last review
  } else if (currentIndex >= totalReviews) {
    currentIndex = 0; // Cycle to the first review
  }
  updateCarousel();
}

// Auto-slide every 3 seconds to the next review
setInterval(() => {
  moveCarousel(1);
}, 3000);

// Initial update to set up the display
updateCarousel();

// Touch swipe functionality
let startX = 0;
let isTouching = false;

document.querySelector('.review-carousel').addEventListener('touchstart', (e) => {
  isTouching = true;
  startX = e.touches[0].clientX;
});

document.querySelector('.review-carousel').addEventListener('touchmove', (e) => {
  if (!isTouching) return;
  const moveX = e.touches[0].clientX - startX;
  if (moveX > 50) {
    moveCarousel(-1);
    isTouching = false;
  } else if (moveX < -50) {
    moveCarousel(1);
    isTouching = false;
  }
});

document.querySelector('.review-carousel').addEventListener('touchend', () => {
  isTouching = false;
});
