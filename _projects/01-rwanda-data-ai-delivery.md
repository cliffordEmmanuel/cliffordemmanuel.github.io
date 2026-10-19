---
layout: page
title: "Rwanda: Data, GenAI & DevOps Delivery"
description: Designing and building a governed data platform, a self-hosted grounded assistant, and the infrastructure beneath both, for a national public-health supply chain.
importance: 1
category: "Professional Case Study"
featured: true
featured_order: 1
kicker: "Case study · 2026–present"
cta: Read case study
---

> **Ongoing engagement**<br>
> Details are generalised to respect confidentiality: no client data, system names or performance claims.

## The problem

Planners in a national public-health supply chain need to know how much of each
product the country will need, where it will be needed, and which suppliers can
deliver it. The information behind those answers existed, but it was spread
across ERP transactions, logistics and consumption records, and external
reference data. Each source had its own identifiers, owner and refresh cycle.
Forecasting and procurement work had also grown along separate paths.

A figure could be produced. It was much harder to say where it came from.

The question underneath the work was simple: what has to be true before someone
should trust this number?

## My role

At S4D Consulting, I am the hands-on technical lead across data engineering,
generative AI and deployment operations. I work with a small engineering team,
separate forecasting and market-intelligence model owners, and the client's
ICT, data and user teams.

I design and build much of the platform myself. I also coordinate the delivery
around it: in-country workshops, dependencies held by other teams, and a running
view of what is built, what is pending, and what is waiting on someone else.

## Three decisions that shaped the work

### One foundation for both models

Rather than let forecasting and procurement keep separate pipelines, I designed
one governed platform. Source data lands in an immutable raw zone, then moves
through bronze, silver and gold layers. A shared conformed core handles product,
location, date and price once, and the two lanes split only where their
questions differ. Model outputs come back as versioned records with run-level
lineage, so a planning figure can be followed back to a single source load.

### An assistant that is allowed to say "I don't know"

Planners wanted to ask questions in plain language, but these are forecast and
cost figures. The self-hosted model never touches the database. It can only
call a small set of curated, read-only tools. The backend does the
calculations, every number in a draft answer is checked against the rows it
came from, and every turn is logged. The assistant explains what the outputs
show, not why a model produced them.

### Infrastructure as part of the design

The data had to stay in the country, and the model server sat on a separately
managed network. Instead of joining the two networks, I kept a single encrypted
path between them. When that path was blocked, I gathered connectivity evidence
that turned an open-ended failure into a specific change request. The link is
now deployed as code, alongside CI/CD that deploys each environment only when
its own code changes.

## How the pieces fit

The order matters. An assistant is only as trustworthy as the evidence it can
reach. That evidence only exists because the data is reconciled and traced, and
it is only reachable because the network path and deployment pipeline are in
place. Treating data, AI and operations as one problem kept each choice honest
about what it depended on.

## Where it stands

The data platform, model-output loaders, assistant, grounding check, audit
trail and delivery automation have been implemented. The assistant has also
been through a validation session with client users on current outputs.

Production hardening comes next: sign-in and role-based access, per-user
history, request queueing to the GPU, and a release gate on answer quality.

## Read the full case studies

[Grounded by design: building a self-hosted assistant for health-supply planning]({% link _posts/2026-10-19-grounded-by-design.md %})<br>
How the assistant retrieves and explains governed outputs without inventing figures or making decisions.

[The foundation before the forecast: building a governed data platform for supply planning]({% link _posts/2026-10-19-foundation-before-the-forecast.md %})<br>
How a shared, traceable data platform brings forecasting and procurement onto one footing.
