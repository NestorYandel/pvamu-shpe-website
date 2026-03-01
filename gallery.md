---
layout: default
title: Gallery
permalink: /gallery/
page_class: gallery-page
---

<div class="gl-masonry-wrap">
  {% for file in site.static_files %}
    {% assign p = file.path %}
    {% if p contains "/assets/img/convention/"
       or p contains "/assets/img/social/"
       or p contains "/assets/img/gbm/"
       or p contains "/assets/img/academic/"
       or p contains "/assets/img/Service/" %}
      {% assign ext = file.extname | downcase %}
      {% if ext == ".png" or ext == ".jpg" or ext == ".jpeg" or ext == ".gif" or ext == ".webp" %}
      <figure class="gl-item">
        <img src="{{ file.path | relative_url }}" alt="PVAMU SHPE photo" loading="lazy">
      </figure>
      {% endif %}
    {% endif %}
  {% endfor %}
</div>
