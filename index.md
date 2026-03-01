---
layout: default
title: Home
hero: true
hero_image: /assets/img/Hero.png
hero_title: Society of Hispanic Professional Engineers
hero_subtitle: Prairie View A&M University
hero_secondary_text: Learn More
hero_secondary_link: /about/
---


<div class="home-sponsors">
  <div class="home-sponsors-header">
    <span class="home-sponsors-label">Our Sponsors</span>
    <a href="{{ '/sponsorshpe/' | relative_url }}" class="home-sponsors-cta">Become a Sponsor</a>
  </div>
  <hr class="home-sponsors-rule">
  <div class="home-sponsors-logos">
    <img
      src="{{ '/assets/img/logos/centerpoint-energy-logo.png' | relative_url }}"
      alt="CenterPoint Energy Logo"
      loading="lazy"
      class="home-sponsors-logo"
    >
  </div>
</div>

<section class="events-intro">
  <div class="container events-intro-content" data-animate>
    <span class="section-label">UPCOMING EVENTS</span>
    <h2 class="events-title">Event Calendar</h2>
    <p class="events-desc">
      Join us for workshops, socials, and career-focused events throughout the
      semester. Check the calendar for dates, times, and locations.
    </p>
  </div>
</section>

<div class="calendar-embed">
  <iframe
    src="https://calendar.google.com/calendar/embed?src=0d5dd6914ea815453a697f4f5827508582c9e97241e096314098fc7f47aca72f%40group.calendar.google.com&ctz=America%2FChicago"
    style="border: 0"
    width="100%"
    height="700"
    frameborder="0"
    scrolling="no">
  </iframe>
</div>

{% include connect-section.html %}
