---
layout: default
title: Officers
permalink: /officers/
---
{% include nav.html %}
# Meet Our Officers

{% for officer in site.data.officers %}
### {{ officer.name }}
**Role:** {{ officer.role }}  
**Major:** {{ officer.major }}  
**Year:** {{ officer.year }}  
**Email:** {{ officer.email }}  
[LinkedIn]({{ officer.linkedin }})

---

{% endfor %}
