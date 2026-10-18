---
layout: page
title: Archive Notes
permalink: /notes/
description: Earlier practical notes on data, software, and analytics.
nav: false
---

<ul class="post-list">
  {% for post in site.posts %}
    {% if post.portfolio_archive == true %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      <li>
        <h3><a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p class="post-meta">
          {{ read_time }} min read &nbsp; &middot; &nbsp;
          {{ post.date | date: '%B %d, %Y' }}
        </p>
      </li>
    {% endif %}
  {% endfor %}
</ul>
