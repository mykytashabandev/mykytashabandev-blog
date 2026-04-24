---
title: 'Why I Am Writing About Web Performance'
description: 'A note about this blog, what it will cover, and why performance matters more now than ever.'
pubDate: 'Apr 23 2026'
tags: ['performance']
---

The web is getting slower.

Not because engineers got worse at their jobs. Because AI tools help us write more code, faster. More code usually means more JavaScript, more CSS, more weight. And if nobody is watching the performance side, pages bloat without anyone noticing.

I have been working as a frontend developer for several years. Most of that time I spent building interfaces — components, routing, state management. Standard frontend work. But over the past year something shifted. I started caring a lot about what happens _after_ the code ships.

How long does the page take to show something meaningful? Does the layout jump around while resources load? How quickly does the page respond when a user clicks something? These are measurable things. And they matter.

## Why I started this blog

My day job involves working on a checkout SDK — code that runs inside other companies' e-commerce sites. Checkout is one of the most performance-sensitive surfaces on the web. A slow checkout costs money, directly. That context made performance feel concrete rather than theoretical.

I started reading everything I could about it. Browser rendering pipelines. Core Web Vitals. The science of measuring performance from real users in the real world, not just in a lab.

Writing forces me to understand things clearly. If I cannot explain something in plain language, I do not understand it well enough. So this blog is my way of making knowledge stick — and hopefully useful to others.

## What this blog will cover

Mostly practical things:

- **Core Web Vitals** — LCP, CLS, and INP: how to measure them, what causes problems, and what fixes actually work
- **JavaScript performance** — bundle size, parse time, runtime bottlenecks
- **E-commerce and checkout** — where performance has direct business impact
- **Rendering patterns** — when SSR, islands architecture, or streaming makes sense
- **Tools** — Lighthouse, WebPageTest, browser DevTools, real user monitoring

I will also write about what I learn building this blog itself. It is built with Astro, deployed to Vercel, and aims for a Lighthouse score of 100. The thinking behind each decision is worth documenting.

## A note on language

I am Ukrainian, based in Wroclaw, and English is not my first language. I write plainly on purpose. If something is unclear, it is a bug — let me know.

Let's start.
