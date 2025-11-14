document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("site-header");

  if (!header) return;

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
