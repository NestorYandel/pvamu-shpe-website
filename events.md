---
layout: default
title: Events
permalink: /events/
---



# Upcoming Events

{% if site.data.events.upcoming %}
{% for event in site.data.events.upcoming %}
## {{ event.title }}
**Date:** {{ event.date }}  
**Time:** {{ event.time }}  
**Location:** {{ event.location }}  

{{ event.description }}

{% if event.rsvp_link %}
[RSVP here]({{ event.rsvp_link }})
{% endif %}

---

{% endfor %}
{% else %}
There are no upcoming events right now. Check back soon!
{% endif %}

# Past Events

{% if site.data.events.past %}
{% for event in site.data.events.past %}
## {{ event.title }}
**Date:** {{ event.date }}  
**Time:** {{ event.time }}  
**Location:** {{ event.location }}  

{{ event.description }}

{% if event.recap_link %}
[View recap]({{ event.recap_link }})
{% endif %}

---

{% endfor %}
{% else %}
No past events have been added yet.
{% endif %}
