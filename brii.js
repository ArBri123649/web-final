// Smooth scroll for nav links
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const dest = document.querySelector(this.getAttribute('href'));
    if (dest) {
      dest.scrollIntoView({behavior: "smooth"});
    }
  });
});

// Simple contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const msg = document.getElementById('formMsg');
  msg.textContent = 'Message sent! Thank you for reaching out.';
  msg.style.color = '#ff4e50';
  form.reset();
  setTimeout(() => { msg.textContent = ''; }, 3500);
});

// Animate skills bar on scroll (optional)
function animateSkills() {
  const bars = document.querySelectorAll('.progress');
  bars.forEach(bar => {
    bar.style.width = 0;
    const newWidth = bar.classList.contains('html') ? '96%' :
                     bar.classList.contains('css') ? '90%' :
                     bar.classList.contains('js') ? '85%' :
                     bar.classList.contains('react') ? '75%' : '50%';
    setTimeout(() => { bar.style.width = newWidth; }, 400);
  });
}

let skillsAnimated = false;
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('.skills-bar');
  if (skillsSection && !skillsAnimated) {
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      animateSkills();
      skillsAnimated = true;
    }
  }
});

// Animate on load if in view
window.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.skills-bar');
  if (skillsSection) {
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      animateSkills();
      skillsAnimated = true;
    }
  }
});