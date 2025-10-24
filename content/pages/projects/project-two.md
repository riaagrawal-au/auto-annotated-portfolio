---
type: ProjectLayout
title: Another cool project
colors: colors-a
date: '2021-12-20'
client: Awesome client
description: >-
  It’s hard to imagine that I’ve that I wrote all this code by myself, probably because I worked with an entire team :) but they definitely followed my lead most of the time.
---
<!-- 💖 One-line "I love you because..." cycler (random start) -->
<section id="love-because" style="margin:1rem 0;">
  <p style="display:flex; align-items:center; flex-wrap:wrap; gap:.5rem; font-size:1.1rem; line-height:1.6;">
    <span>I love you because&nbsp;</span>
    <span id="love-reason"
          aria-live="polite"
          style="font-weight:600; white-space:nowrap;"></span>
    <button id="love-next"
            type="button"
            style="margin-left:.5rem; padding:.35rem .6rem; border:1px solid rgba(0,0,0,.15); border-radius:8px; background:#fff; cursor:pointer;">
      ↻ Next
    </button>
  </p>
  <noscript><em>(Enable JavaScript to rotate reasons.)</em></noscript>
</section>

<script>
  (function () {
    const ROOT = document.getElementById('love-because');
    if (!ROOT) return;

    // 👉 Edit this list to whatever you want (add/remove freely)
    const REASONS = [
      "of your hair",
      "you are very kind",
      "you light up every room",
      "you’re brave and thoughtful",
      "you make me laugh",
      "you listen—really listen",
      "your curiosity is contagious",
      "you’re patient with me",
      "you care about little things",
      "you have a lot of cheese in your repository"
    ];

    const reasonEl = document.getElementById('love-reason');
    const btn = document.getElementById('love-next');

    // ▶ Start at a random index (no persistence)
    let idx = Math.floor(Math.random() * REASONS.length);

    function render() {
      reasonEl.textContent = REASONS[idx];
    }

    // Advance on click, wrapping around
    btn.addEventListener('click', () => {
      idx = (idx + 1) % REASONS.length;
      render();
    });

    // Optional: tap the reason text itself to advance (nice on mobile)
    reasonEl.addEventListener('click', () => btn.click());

    // Initialize
    render();
  })();
</script>
