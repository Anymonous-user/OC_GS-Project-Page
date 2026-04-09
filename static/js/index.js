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

function setupCyclingMetrics() {
  const nodes = document.querySelectorAll("[data-series]");
  nodes.forEach((node) => {
    const frames = node.dataset.series
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (frames.length < 2) return;

    let index = 0;
    node.textContent = frames[index];

    window.setInterval(() => {
      index = (index + 1) % frames.length;
      node.textContent = frames[index];
    }, 1600);
  });
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
  setupCyclingMetrics();
  setupSmoothAnchorScroll();
});
