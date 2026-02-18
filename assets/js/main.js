document.addEventListener("DOMContentLoaded", function () {
  // ── Header scroll behavior ──────────────────────────────────────────────
  var header = document.getElementById("site-header");
  var isHomePage = document.body.classList.contains("home-page");

  if (header) {
    if (!isHomePage) {
      header.classList.add("scrolled");
    } else {
      function onScroll() {
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
      onScroll();
      window.addEventListener("scroll", onScroll);
    }
  }

  // ── Scroll-reveal animations ────────────────────────────────────────────
  var animatables = document.querySelectorAll("[data-animate]");
  if (animatables.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    animatables.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately for browsers without IntersectionObserver
    animatables.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
});
