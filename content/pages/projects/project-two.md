---
type: ProjectLayout
title: Another cool project
colors: colors-a
date: '2021-12-20'
client: Awesome client
description: >-
  It’s hard to imagine that I’ve that I wrote all this code by myself, probably because I worked with an entire team :) but they definitely followed my lead most of the time.
---
<!-- 💖 One-line "I love you because..." with inline Next button -->
<span id="love-line" style="display:inline-flex; align-items:center; gap:.5rem; flex-wrap:wrap;">
  <span>I love you because&nbsp;</span>
  <span id="love-reason" aria-live="polite" style="font-weight:600;">you are very kind</span>
  <button id="love-next"
    type="button"
    aria-label="Show next reason"
    style="
      display:inline-flex; align-items:center; justify-content:center;
      padding:.25rem .5rem; line-height:1; border:1px solid currentColor;
      border-radius:6px; background:transparent; color:inherit; cursor:pointer;
      font: inherit; opacity:.9;
    "
  >↻</button>
</span>

<script>
  (function () {
    // ✏️ Edit these (order = sequence)
    const REASONS = [
      "you are very kind",
      "of your hair",
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
    if (!reasonEl || !btn) return;

    // Start at the first item and advance sequentially
    let idx = 0;
    function render() {
      reasonEl.textContent = REASONS[idx];
    }
    btn.addEventListener('click', function () {
      idx = (idx + 1) % REASONS.length;
      render();
    });

    // Also let users tap the reason text to advance (nice on mobile)
    reasonEl.addEventListener('click', () => btn.click());

    // Initial paint (matches the first item above)
    render();
  })();
</script>
