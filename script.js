// ===== Menu mobile =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => navLinks.classList.remove("open"))
);

// ===== Barre de navigation : bordure au scroll =====
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// ===== Lien actif selon la section visible =====
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach(s => sectionObserver.observe(s));

// ===== Animation à l'apparition =====
const revealTargets = document.querySelectorAll(
  ".about-grid, .skill-card, .t-item, .project-card, .g-item, .cv-box, .contact-card"
);
revealTargets.forEach(el => el.classList.add("reveal"));
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach(el => revealObserver.observe(el));

// ===== Filtres de la galerie de designs =====
const filterButtons = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".g-item");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    galleryItems.forEach(item => {
      item.classList.toggle("hide", cat !== "all" && item.dataset.cat !== cat);
    });
  });
});

// ===== Lightbox (agrandir un design au clic) =====
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = "<img alt='Design agrandi'>";
document.body.appendChild(lightbox);

document.getElementById("gallery").addEventListener("click", (e) => {
  const img = e.target.closest(".g-item")?.querySelector("img");
  if (!img) return;
  lightbox.querySelector("img").src = img.src;
  lightbox.classList.add("open");
});
lightbox.addEventListener("click", () => lightbox.classList.remove("open"));
document.addEventListener("keydown", e => { if (e.key === "Escape") lightbox.classList.remove("open"); });

// ===== Année du footer =====
document.getElementById("year").textContent = new Date().getFullYear();