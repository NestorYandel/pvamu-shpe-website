---
layout: default
title: Gallery
permalink: /gallery/
page_class: gallery-page
---

<div class="gl-page">

  <!-- ===== HERO BANNER ===== -->
  <section class="gl-hero" aria-labelledby="gl-hero-title">
    <div class="gl-hero-inner">
      <p class="section-label gl-hero-label">PHOTO GALLERY</p>
      <h1 id="gl-hero-title" class="gl-hero-title">Our Gallery</h1>
      <p class="gl-hero-subtitle">
        A look at our chapter life, events, and community.
      </p>
      <div class="gl-hero-divider" aria-hidden="true"></div>
    </div>
  </section>

  <!-- ===== FILTER + GRID ===== -->
  <section class="gl-main" aria-labelledby="gl-grid-label">
    <div class="gl-main-inner">

      <!-- Filter buttons -->
      <div class="gl-filters" role="tablist" aria-label="Filter photos by category" id="gl-filters">
        <button class="gl-filter-btn is-active" role="tab" aria-selected="true"  data-filter="all"         type="button">All</button>
        <button class="gl-filter-btn"            role="tab" aria-selected="false" data-filter="convention"  type="button">National Convention</button>
        <button class="gl-filter-btn"            role="tab" aria-selected="false" data-filter="gbm"         type="button">GBM</button>
        <button class="gl-filter-btn"            role="tab" aria-selected="false" data-filter="social"      type="button">Social Events</button>
        <button class="gl-filter-btn"            role="tab" aria-selected="false" data-filter="academic"    type="button">Academic</button>
      </div>

      <!-- Photo grid -->
      <div class="gl-grid" id="gl-grid" aria-label="Photo gallery grid">

        <!-- ── National Convention (5 slots) ── -->

        <figure class="gl-card" data-category="convention">
          <div class="gl-card-img" style="background-color: #3d1f5e;">
            <!-- CONVENTION PHOTO 1 -->
          </div>
          <figcaption class="gl-card-caption">National Convention — 2021</figcaption>
        </figure>

        <figure class="gl-card" data-category="convention">
          <div class="gl-card-img" style="background-color: #4b2470;">
            <!-- CONVENTION PHOTO 2 -->
          </div>
          <figcaption class="gl-card-caption">National Convention — 2023</figcaption>
        </figure>

        <figure class="gl-card" data-category="convention">
          <div class="gl-card-img" style="background-color: #3d1f5e;">
            <!-- CONVENTION PHOTO 3 -->
          </div>
          <figcaption class="gl-card-caption">National Convention — Fall 2024</figcaption>
        </figure>

        <figure class="gl-card" data-category="convention">
          <div class="gl-card-img" style="background-color: #4b2470;">
            <!-- CONVENTION PHOTO 4 -->
          </div>
          <figcaption class="gl-card-caption">La Familia — National Conference 2025</figcaption>
        </figure>

        <figure class="gl-card" data-category="convention">
          <div class="gl-card-img" style="background-color: #3d1f5e;">
            <!-- CONVENTION PHOTO 5 -->
          </div>
          <figcaption class="gl-card-caption">Representing PVAMU — National Conference 2025</figcaption>
        </figure>

        <!-- ── Social Events (7 slots) ── -->

        <figure class="gl-card" data-category="social">
          <div class="gl-card-img" style="background-color: #202a44;">
            <!-- SOCIAL PHOTO 1 -->
          </div>
          <figcaption class="gl-card-caption">International Mixer — 2023</figcaption>
        </figure>

        <figure class="gl-card" data-category="social">
          <div class="gl-card-img" style="background-color: #253255;">
            <!-- SOCIAL PHOTO 2 -->
          </div>
          <figcaption class="gl-card-caption">Soccer Social — 2023</figcaption>
        </figure>

        <figure class="gl-card" data-category="social">
          <div class="gl-card-img" style="background-color: #202a44;">
            <!-- SOCIAL PHOTO 3 -->
          </div>
          <figcaption class="gl-card-caption">La Última Pachanga — 2025</figcaption>
        </figure>

        <figure class="gl-card" data-category="social">
          <div class="gl-card-img" style="background-color: #253255;">
            <!-- SOCIAL PHOTO 4 -->
          </div>
          <figcaption class="gl-card-caption">La Última Pachanga — Chess — 2025</figcaption>
        </figure>

        <figure class="gl-card" data-category="social">
          <div class="gl-card-img" style="background-color: #202a44;">
            <!-- SOCIAL PHOTO 5 -->
          </div>
          <figcaption class="gl-card-caption">Lotería Night — Fall 2025</figcaption>
        </figure>

        <figure class="gl-card" data-category="social">
          <div class="gl-card-img" style="background-color: #253255;">
            <!-- SOCIAL PHOTO 6 -->
          </div>
          <figcaption class="gl-card-caption">Noche Latino — Fall 2025</figcaption>
        </figure>

        <figure class="gl-card" data-category="social">
          <div class="gl-card-img" style="background-color: #202a44;">
            <!-- SOCIAL PHOTO 7 -->
          </div>
          <figcaption class="gl-card-caption">Waller County Fair — Fall 2025</figcaption>
        </figure>

        <!-- ── GBM (2 slots) ── -->

        <figure class="gl-card" data-category="gbm">
          <div class="gl-card-img" style="background-color: #1a3535;">
            <!-- GBM PHOTO 1 -->
          </div>
          <figcaption class="gl-card-caption">General Body Meeting — 2023</figcaption>
        </figure>

        <figure class="gl-card" data-category="gbm">
          <div class="gl-card-img" style="background-color: #1a4040;">
            <!-- GBM PHOTO 2 -->
          </div>
          <figcaption class="gl-card-caption">1st Spring General Body Meeting — 2026</figcaption>
        </figure>

        <!-- ── Academic (1 slot) ── -->

        <figure class="gl-card" data-category="academic">
          <div class="gl-card-img" style="background-color: #3a2800;">
            <!-- ACADEMIC PHOTO 1 -->
          </div>
          <figcaption class="gl-card-caption">Engineering Ring Ceremony — Class of 2026</figcaption>
        </figure>

      </div><!-- /.gl-grid -->

    </div><!-- /.gl-main-inner -->
  </section>

</div><!-- /.gl-page -->

<script>
(function () {
  'use strict';

  var filterBtns = document.querySelectorAll('.gl-filter-btn');
  var cards      = document.querySelectorAll('.gl-card');

  if (!filterBtns.length || !cards.length) return;

  function applyFilter(filter) {
    filterBtns.forEach(function (btn) {
      var active = btn.dataset.filter === filter;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    cards.forEach(function (card) {
      var match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyFilter(this.dataset.filter);
    });
  });
}());
</script>
