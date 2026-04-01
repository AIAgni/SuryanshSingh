const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const profilePhoto = document.getElementById("profilePhoto");
const photoFallback = document.getElementById("photoFallback");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

if (profilePhoto && photoFallback) {
  profilePhoto.addEventListener("error", () => {
    profilePhoto.style.display = "none";
    photoFallback.style.display = "flex";
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));