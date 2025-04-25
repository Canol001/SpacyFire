import { services } from './servicesData.js';

const servicesContainer = document.getElementById('services-container');

services.forEach((service, index) => {
  const layoutClass = index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';

  const serviceHTML = `
    <div class="flex flex-col ${layoutClass} items-center gap-8 mb-12 opacity-0 translate-y-10 transition-all duration-700 service-item">
      <img src="${service.img}" alt="${service.title}" class="w-full md:w-1/2 rounded-lg shadow-md">
      <div class="w-full md:w-1/2">
        <h3 class="text-2xl font-semibold mb-3">${service.title}</h3>
        <p class="text-slate-600 font-mono mb-4">&gt; ${service.description}</p>
        <a href="#contact" class="text-cyan-600 hover:text-cyan-500 font-semibold">Request a Quote →</a>
      </div>
    </div>
  `;
  servicesContainer.insertAdjacentHTML('beforeend', serviceHTML);
});

// Scroll-trigger animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll('.service-item').forEach((el) => observer.observe(el));
