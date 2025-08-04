// Handle search
function handleSearch(event) {
  event.preventDefault();
  const input = document.getElementById('searchInput');
  const query = input.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert('Please enter a product or service to search.');
  }
}

// Mobile nav toggle
function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('open');
}

// Optional: activate fade-in on scroll
window.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
});


// Contact form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for reaching out! We’ll get back to you soon.');
  this.reset();
});

// Newsletter form
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('You have successfully subscribed to our newsletter.');
  this.reset();
});

