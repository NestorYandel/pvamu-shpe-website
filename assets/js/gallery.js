document.addEventListener("DOMContentLoaded", function () {
  var galleries = document.querySelectorAll("[data-gallery]");

  galleries.forEach(function (gallery) {
    var slides = gallery.querySelectorAll(".history-gallery-slide");
    var prevButton = gallery.querySelector("[data-gallery-prev]");
    var nextButton = gallery.querySelector("[data-gallery-next]");
    var index = 0;

    if (!slides.length) return;

    function showSlide(nextIndex) {
      slides[index].classList.remove("is-active");
      index = (nextIndex + slides.length) % slides.length;
      slides[index].classList.add("is-active");
    }

    if (prevButton) {
      prevButton.addEventListener("click", function () {
        showSlide(index - 1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", function () {
        showSlide(index + 1);
      });
    }
  });
});
