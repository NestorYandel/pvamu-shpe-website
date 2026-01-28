document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("site-header");
  var isHomePage = document.body.classList.contains("home-page");

  if (!header) return;

  if (!isHomePage) {
    header.classList.add("scrolled");
    return;
  }

  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll);
});
