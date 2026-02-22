---
layout: default
title: About Us
permalink: /about/
page_class: about-page-wrap
---

<div class="about-page">

  <!-- ===== HERO ===== -->
  <section class="about-hero" aria-labelledby="about-hero-title">
    <div class="about-hero-inner">
      <p class="about-hero-kicker">ABOUT US</p>
      <h1 id="about-hero-title" class="about-hero-title">
        <span>Building a Community of</span>
        <span>Excellence</span>
      </h1>
      <p class="about-hero-subtitle">
        Empowering the next generation of Hispanic STEM leaders at Prairie View A&amp;M University
      </p>
      <div class="about-hero-divider" aria-hidden="true"></div>
    </div>
  </section>

  <!-- ===== MISSION & VISION ===== -->
  <!-- Replace the placeholder text below with your chapter's official statements -->
  <section id="mission" class="about-mission" aria-labelledby="mission-heading">
    <div class="about-mission-inner">

      <div class="about-mission-block" data-animate>
        <span class="section-label">Our Mission</span>
        <h2 id="mission-heading" class="about-mission-heading">Why We Exist</h2>
        <p class="about-mission-text">
          SHPE changes lives by empowering the Hispanic community to realize its fullest
          potential and to impact the world through STEM awareness, access, support, and
          development. Our PVAMU chapter delivers this mission through professional
          development, academic support, peer mentorship, and a culture of familia that
          uplifts every member.
        </p>
      </div>

      <div class="about-mission-sep" aria-hidden="true"></div>

      <div class="about-mission-block" data-animate style="--delay: 0.15s">
        <span class="section-label">Our Vision</span>
        <h2 class="about-mission-heading">Where We're Going</h2>
        <p class="about-mission-text">
          To be the premier organization developing and empowering a diverse community
          of scientists, engineers, and leaders who will impact society for generations
          to come — starting right here at Prairie View A&amp;M University.
        </p>
      </div>

    </div>
  </section>

  <!-- ===== OUR VALUES ===== -->
  <section id="values" class="about-values" aria-labelledby="values-heading">
    <div class="about-values-inner">

      <div class="about-values-header">
        <span class="section-label">What We Stand For</span>
        <h2 id="values-heading" class="about-values-heading">Our Core Values</h2>
      </div>

      <div class="about-values-grid">

        <!-- Familia -->
        <div class="about-value-card" data-animate style="--delay: 0s">
          <div class="about-value-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <p class="about-value-name">Familia</p>
          <p class="about-value-desc">We are more than an organization — we are a family that uplifts and supports every member through their academic journey and beyond.</p>
        </div>

        <!-- Education -->
        <div class="about-value-card" data-animate style="--delay: 0.1s">
          <div class="about-value-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            </svg>
          </div>
          <p class="about-value-name">Education</p>
          <p class="about-value-desc">We believe in the transformative power of knowledge and are committed to academic excellence and lifelong learning in STEM.</p>
        </div>

        <!-- Resilience -->
        <div class="about-value-card" data-animate style="--delay: 0.2s">
          <div class="about-value-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
          </div>
          <p class="about-value-name">Resilience</p>
          <p class="about-value-desc">We honor the grit and determination that defines our community, persisting through challenges to emerge stronger together.</p>
        </div>

        <!-- Service -->
        <div class="about-value-card" data-animate style="--delay: 0.3s">
          <div class="about-value-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <p class="about-value-name">Service</p>
          <p class="about-value-desc">We are called to give back — to our campus, our community, and the next generation of Hispanic STEM leaders who will follow.</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ===== HISTORY & GALLERY ===== -->
  {% include about-history.html %}

</div>

<script src="{{ '/assets/js/gallery.js' | relative_url }}" defer></script>
