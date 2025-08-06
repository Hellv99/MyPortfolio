/*!
 * Portfolio animations and interactions
 * Copyright 2025 OluwaFeyisola Ayoola
 */
window.addEventListener("DOMContentLoaded", () => {
  // Hide loader after page load
  const loader = document.querySelector(".loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.classList.add("hidden");
      setTimeout(() => loader.remove(), 500);
    });
  }

  // Scroll-triggered animations
  const elements = document.querySelectorAll(
    ".section, .project-card, .skill, .item, .about"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  elements.forEach((element) => observer.observe(element));
});
