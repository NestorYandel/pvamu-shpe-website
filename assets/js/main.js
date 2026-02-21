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

  // ── Mobile nav toggle ────────────────────────────────────────────────────
  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");

  function closeNav() {
    if (!siteNav) return;
    siteNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.style.overflow = "";
  }

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close when a nav link is clicked
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    // Close on Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && siteNav.classList.contains("is-open")) {
        closeNav();
        navToggle.focus();
      }
    });
  }

  // ── Scroll-reveal animations ─────────────────────────────────────────────
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
