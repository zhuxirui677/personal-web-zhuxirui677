const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll("[data-reveal]").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
  revealObserver.observe(el);
});

const style = document.createElement("style");
style.textContent = "[data-reveal].is-visible{opacity:1!important;transform:none!important;}";
document.head.appendChild(style);
