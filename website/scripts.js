document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.scrollable-nav');
  nav.classList.toggle('open');
});

// Scroll-to-Top Button 
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.getElementById('nav-links');
  
  // When the user clicks anywhere in the nav area, toggle the slide effect
  navLinks.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Smooth scroll to the top
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle navigation menu (hamburger menu)
document.querySelector('.menu-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.scrollable-nav');
  nav.classList.toggle('open');
});

// Update footer year dynamically
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Social media icon hover effect with scaling
document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)'; // Enlarge on hover
    icon.style.transition = 'transform 0.3s ease'; // Smooth transition
  });
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)'; // Return to original size
  });
});

// Responsive font size based on screen width
function adjustFontSize() {
  const root = document.documentElement;
  const screenWidth = window.innerWidth;

  if (screenWidth < 576) {
    root.style.fontSize = '12px'; // Small screens
  } else if (screenWidth < 768) {
    root.style.fontSize = '14px'; // Medium screens
  } else if (screenWidth < 992) {
    root.style.fontSize = '16px'; // Large screens
  } else {
    root.style.fontSize = '18px'; // Extra large screens
  }
}

// Call adjustFontSize on load and resize
window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);

// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Make all images responsive
function makeImagesResponsive() {
  document.querySelectorAll('img').forEach(img => {
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
  });
}

// Call makeImagesResponsive on load
window.addEventListener('load', makeImagesResponsive);


