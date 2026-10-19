---
layout: page
title: Selected Work
permalink: /projects/
description: Selected professional delivery, independent research, and practical data and AI experiments.
nav: true
nav_order: 1
---

{% assign featured_projects = site.projects | where: "featured", true | sort: "featured_order" %}

<div class="feature-grid">
  {% for project in featured_projects %}
    {% include project_feature_card.liquid project=project %}
  {% endfor %}
</div>

{% assign experiments = site.projects | where: "category", "Experiments" | sort: "importance" %}
{% if experiments.size > 0 %}

<h2 class="section-title">Experiments</h2>
<ul class="work-list">
  {% for project in experiments %}
    <li>
      <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}">
        <span class="work-main">
          <span class="work-title">{{ project.title }}</span>
          <span class="work-desc">{{ project.description }}</span>
        </span>
        {% if project.tag %}
          <span class="work-tag">{{ project.tag }}</span>
        {% endif %}
      </a>
    </li>
  {% endfor %}
</ul>
{% endif %}
