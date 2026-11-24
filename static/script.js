// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle?.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Light/dark appearance toggle. The choice stays active while the page is open.
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.querySelector(".theme-icon").textContent = "☾";
  themeToggle.setAttribute("aria-label", "Switch to dark theme");
}
themeToggle?.addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  themeToggle.querySelector(".theme-icon").textContent = next === "dark" ? "☼" : "☾";
  themeToggle.setAttribute("aria-label", next === "dark" ? "Switch to light theme" : "Switch to dark theme");
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#111d2b" : "#ffffff");
});

// Project category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

// Copy the email address to the clipboard
const copyButton = document.getElementById("copyEmail");
const copyFeedback = document.getElementById("copyFeedback");
copyButton?.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyFeedback.textContent = "Email address copied.";
  } catch {
    copyFeedback.textContent = "Please copy: " + email;
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Subtle entrance animation for content sections
const revealItems = document.querySelectorAll(".section-top, .about-layout, .stats-row, .skill-panel, .project-card, .journey-grid, .beyond-card, .contact-main");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealItems.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}

// Reading progress and active section highlighting
const scrollProgress = document.getElementById("scrollProgress");
const progressSections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-menu a[href^='#']");

function updateScrollFeatures() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = progress + "%";

  let currentId = "";
  progressSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 180) currentId = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
  });
}

window.addEventListener("scroll", updateScrollFeatures, { passive: true });
window.addEventListener("resize", updateScrollFeatures);
updateScrollFeatures();

// Resume dialog
const resumeDialog = document.getElementById("resumeDialog");
const openResume = document.getElementById("openResume");
const closeResume = document.getElementById("closeResume");
const printResume = document.getElementById("printResume");

openResume?.addEventListener("click", () => resumeDialog?.showModal());
closeResume?.addEventListener("click", () => resumeDialog?.close());
printResume?.addEventListener("click", () => window.print());

resumeDialog?.addEventListener("click", (event) => {
  if (event.target === resumeDialog) resumeDialog.close();
});