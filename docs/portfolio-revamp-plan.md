# Portfolio Revamp Plan

**Portfolio:** [cliffordemmanuel.github.io](https://cliffordemmanuel.github.io/)
**Direction approved:** unified professional identity; content-first refresh, not a redesign.
**Prepared:** 18 October 2026

## Goal

Update the portfolio so it presents one coherent professional story across Data
Engineering, AI Engineering, and Trustworthy AI. The site should be accurate,
easy to scan, and grounded in public, non-confidential evidence rather than a
generic list of tools or client claims.

### Professional identity

**Data & AI Engineer | Cloud Data Platforms, AI Engineering & Trustworthy AI**

**Core introduction**

> I am a Data & AI Engineer with more than seven years of experience designing,
> developing, and operating data platforms and AI-enabled applications. My work
> spans production data engineering, cloud infrastructure, data quality, and
> generative AI across financial services, public-sector healthcare, renewable
> energy, and telecommunications. I am particularly interested in building
> systems that are dependable, explainable, and secure.

This is a single identity—not separate personas for data-engineering and
trustworthy-AI roles. The portfolio will show the progression from operating
reliable data systems to building AI-enabled products and researching the
reliability of AI systems.

## Current-site findings

The site is an **al-folio Jekyll** portfolio. Its homepage is
`_pages/about.md`; the rendered CV is sourced from `_data/cv.yml`; project cards
are under `_projects/`.

The current homepage is focused almost exclusively on data engineering and
trustworthy AI. Its CV omits the current S4D Consulting engagement, current
BigSpark work, current certification status, and the accepted MSc result. The
project page is dominated by earlier learning projects. This supports a
content-first refresh without changing the visual theme or framework.

## Content record and accuracy boundaries

All public copy must distinguish what is in production, what is an internal
deployment, what is experimental, and what is still in progress. No client
data, system diagrams, source code, performance figures, or implementation
details should be published without permission.

| Area | Publicly safe positioning |
| --- | --- |
| S4D Consulting, April 2026–present | Lead data engineering, AI, and DevOps workstreams for pharmaceutical intelligence initiatives. Rwanda work covers GenAI/data/DevOps; Zambia work remains in progress. Say what was delivered only where confirmed. |
| BigSpark Ltd, March 2023–present | Build and maintain production Spark, Scala, SQL, and AWS pipelines for NatWest data through Smart Data Foundry. Describe the LLM evaluation, three-month data-quality/governance scoring engagement, internal Bedrock agent, and experimental data-quality tooling with correct scope. |
| S4D Consulting, August–October 2024 | Separate engagement for Global Fund/ADEx integration: Azure Databricks, PySpark, Spark SQL, Unity Catalog, Azure Data Factory, and medallion architecture. |
| Bboxx and PEG Africa | Operational ownership of production data pipelines supporting business operations across 14 countries at Bboxx and four at PEG Africa. Emphasise monitoring, validation, incidents, reporting, and user support. |
| GetInnotized GmbH | Analytics and data-science experience, including retail-outlet benchmarking and e-commerce adoption work. |
| Education | MSc Computer Science dissertation graded and formally accepted; formal award expected November 2026. Do not present it as awarded yet. BSc Computer Science and Engineering, First Class Honours. |
| Certification | Databricks Certified Data Engineer Associate, March 2025–March 2027. |
| Research | Reproducible benchmark on explanation tamper resistance / adversarial robustness in XAI. Findings are unpublished; say so, and do not imply peer review or publication. |

## Information architecture

The existing structure can be refined rather than rebuilt:

| Visitor need | Existing location | Refresh approach |
| --- | --- | --- |
| Immediate professional identity | Homepage (`_pages/about.md`) | Rewrite headline and introduction; retain existing visual layout. |
| Career history, skills, education, certifications | CV (`_data/cv.yml`, `_pages/cv.md`) | Replace outdated descriptions with an accurate, scannable record. |
| Evidence of technical approach | Projects (`_projects/`, `_pages/projects.md`) | Prioritise selected case studies over a repository-style list. |
| Research depth | New research/case-study content in Phase 2 | Give the MSc/XAI work a dedicated public page or detailed project entry. |
| Ongoing thinking | Blog (`_posts/`) | Publish only material that is useful and safe to share. |

No theme overhaul, framework migration, or broad styling work is planned in the
first phase.

## Delivery plan

Each numbered step has a mandatory review gate. I will describe the exact files,
copy, and intended result before making any website edit, then wait for approval.

### Phase 1 — Accurate professional foundation

1. **Homepage identity and introduction**
   - Update only `_pages/about.md`.
   - Replace the subtitle with the approved headline and rewrite the opening
     narrative around reliable data systems, AI-enabled products, and
     trustworthy-AI research.
   - Preserve the profile image, layout, social links, posts section, theme, and
     navigation.
   - **Gate:** approve proposed copy before editing.

2. **Experience record**
   - Update `_data/cv.yml` to distinguish the two S4D engagements and accurately
     describe BigSpark, Bboxx, PEG Africa, and GetInnotized.
   - Use scoped verbs such as “contributed to” where appropriate; mark Zambia as
     in progress.
   - **Gate:** approve the revised role-by-role wording before editing.

3. **Skills, education, and certification accuracy**
   - Update `_data/cv.yml` with capability-led skill groups, MSc status, BSc
     result, and Databricks certification dates.
   - Remove or correct claims that cannot be supported by current experience.
   - **Gate:** approve the grouped skills and credential wording before editing.

4. **Portfolio hygiene and navigation audit**
   - Review outdated navigation labels, placeholder/demo content, and current
     homepage/CV links; propose narrowly scoped removals or relabeling.
   - Do not delete any project, page, or asset without explicit approval.
   - **Gate:** approve each proposed removal, hide, or navigation change.

### Phase 2 — Evidence-led case studies and MSc research

5. **Selected-work strategy and project-card refresh**
   - Identify which existing public projects remain useful and which should be
     de-emphasised.
   - Establish clear public categories such as Data Engineering, AI Engineering,
     and Trustworthy AI.
   - **Gate:** approve project selection and any card copy before editing.

6. **Explainable-AI adversarial-robustness case study**
   - Create a dedicated public research entry describing the question,
     reproducible benchmark, methods, evaluation, limitations, and repository.
   - State clearly that results are unpublished and avoid claims beyond the
     evidence.
   - **Gate:** approve the research summary, evidence, and any diagram before
     publishing.

7. **Professional case-study outlines**
   - Prepare high-level, approval-first outlines for: pharmaceutical intelligence
     and GenAI; data-quality evaluation; cloud data engineering with Databricks;
     and internal AI workflow automation.
   - Use anonymised, high-level descriptions unless written permission supports
     more detail. Where public proof is needed, favour original demos using
     synthetic data over client material.
   - **Gate:** approve each outline and disclosure boundary before any page is
     created.

### Phase 3 — Writing, usability, and discoverability

8. **Technical writing plan**
   - Select a small set of useful articles grounded in public work, such as data
     quality, reliable pipelines, or XAI robustness.
   - Refresh or retain older posts only where they support the professional
     narrative.
   - **Gate:** approve topic and outline before drafting or editing a post.

9. **UX and SEO polish**
   - Review page titles, descriptions, accessible image text, internal links,
     professional contact paths, and social-preview metadata.
   - Propose small changes before touching `_config.yml`, templates, styles, or
     navigation.
   - **Gate:** approve the exact settings and files before implementation.

10. **Quality assurance and launch review**
    - Format changed files, build the Jekyll site, and review key pages in desktop
      and mobile layouts.
    - Check links, old claims, dates, project visibility, and that confidential
      information has not entered public copy.
    - **Gate:** present the review result before any commit, deployment, or
      publication action.

## Working agreement

- One approved step at a time; no website edit occurs before its review gate.
- Content changes come before visual redesign.
- The existing al-folio theme and site structure stay in place unless a later,
  explicitly approved step changes them.
- No commitment, deployment, deletion, or exposure of confidential material is
  implied by this plan.
