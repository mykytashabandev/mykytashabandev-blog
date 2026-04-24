---
title: 'Core Web Vitals: A Practical Introduction'
description: 'What LCP, CLS, and INP actually measure, why they matter, and how to start improving them.'
pubDate: 'Apr 23 2026'
tags: ['performance', 'core-web-vitals']
---

Google's Core Web Vitals are three metrics that measure real user experience. Not server response time, not synthetic benchmarks — actual experience on real devices, from real Chrome users.

If you have never heard of them: they measure how fast content appears (LCP), how stable the layout is (CLS), and how quickly the page responds to interaction (INP). Let me explain each one properly.

## LCP — Largest Contentful Paint

LCP measures when the largest visible element on the page finishes rendering. This is usually a hero image, a large heading, or a background image in the viewport.

**Good threshold: under 2.5 seconds.**

LCP is the metric most closely tied to how fast a page *feels* to load. Users do not wait for the page to finish — they start judging as soon as they see something meaningful.

Common causes of slow LCP:

- Large images not optimized or not prioritized for early loading
- Render-blocking JavaScript or CSS delaying the first paint
- Slow server response time (high TTFB)
- Images discovered late — for example, set as CSS `background-image` instead of `<img>` tags

The most impactful fixes are usually image optimization and adding `fetchpriority="high"` to the LCP image element. This tells the browser to request it early, before it would normally discover it in the parsing queue.

## CLS — Cumulative Layout Shift

CLS measures visual stability. Every time an element moves unexpectedly — a button shifts down because an ad loaded above it, text reflows because a font swapped in — that contributes to your CLS score.

**Good threshold: under 0.1.**

Layout shifts are frustrating. You try to tap a button and the page moves at the last moment. You tap something you did not intend to tap.

Common causes:

- Images and videos without explicit `width` and `height` attributes
- Ads, embeds, or iframes without reserved space
- Web fonts loading and causing text reflow

The most common fix is the simplest one: always put `width` and `height` on images. This lets the browser reserve the right amount of space before the image loads, preventing the shift entirely.

For fonts, `font-display: optional` eliminates layout shift by not swapping at all. `font-display: swap` swaps but can cause a visible jump. Which one you choose depends on how much you care about the font showing versus the layout being stable.

## INP — Interaction to Next Paint

INP replaced FID (First Input Delay) as a Core Web Vital in March 2024. It measures how quickly the page responds to any user interaction — clicks, taps, keyboard input — throughout the full page lifetime.

**Good threshold: under 200ms.**

FID only measured the *first* interaction. INP measures *all* interactions and reports the worst one (with some statistical tolerance). This is more honest about real user experience.

Slow INP usually means too much work on the main thread. When a user clicks something, the browser has to finish whatever it was doing before it can paint the response. If there is a long task running, the user feels the delay.

Common causes:

- Heavy event handlers doing expensive synchronous work (DOM queries, layout thrashing)
- Third-party scripts blocking the main thread
- React rendering large component trees on every interaction
- `setTimeout` chains that keep the thread busy

The primary tool for diagnosing INP problems is the Chrome DevTools Performance panel. Record a session, find the interaction, and look at what tasks are blocking the response.

## How to measure them

**PageSpeed Insights** (`pagespeed.web.dev`) is the best starting point. Paste any URL and you get both lab data (Lighthouse) and field data (real Chrome users from the CrUX dataset). Field data is what actually matters for your Google Search ranking.

For local development, the Lighthouse panel in Chrome DevTools gives you lab measurements. Remember: your laptop is faster than most users' phones. Always check mobile scores, not just desktop.

For real user monitoring, the [`web-vitals`](https://github.com/GoogleChrome/web-vitals) JavaScript library from Google lets you collect these metrics from real visitors and send them to your analytics. This is what you need to understand your *actual* user experience, not just a simulated one.

## Why this matters beyond Google

Yes, Core Web Vitals are a Google Search ranking signal. That alone makes them worth paying attention to.

But the real reason to care is simpler: fast, stable, responsive pages are better for users.

For e-commerce sites, the data is consistent: faster pages convert better. A 100ms improvement in load time can increase conversions by 1–2%. At scale, that is significant money. Checkout flows are especially sensitive — every additional second costs.

---

In future articles I will go deeper into each metric: specific diagnostic techniques, real production examples, and what fixes actually move the needle versus what just looks good in a Lighthouse report.
