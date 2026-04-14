const scrollButton = document.querySelector(".scroll-to-top");

function updateScrollButton() {
  if (!scrollButton) return;
  if (window.scrollY > 360) {
    scrollButton.classList.add("is-visible");
  } else {
    scrollButton.classList.remove("is-visible");
  }
}

function setupScrollToTop() {
  if (!scrollButton) return;
  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", updateScrollButton, { passive: true });
  updateScrollButton();
}

function setupSmoothAnchorScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupScrollToTop();
  setupSmoothAnchorScroll();
});
