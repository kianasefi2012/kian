// Simple Testimonials Slider
let currentIndex = 0;
const Testimonial = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.display = i === index ? 'block' : 'none';
    });
}

showTestimonial(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}, 4000);
// Simple slider for testimonials
const Testimonials = document.querySelectorAll('.testimonial-card');
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.style.display = i === index ? 'block' : 'none';
  });
}

showTestimonial(current);

setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 4000);
