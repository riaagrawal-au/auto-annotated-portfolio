---
type: ProjectLayout
title: Another cool project
colors: colors-a
date: '2021-12-20'
client: Awesome client
description: >-
  It’s hard to imagine that I’ve that I wrote all this code by myself, probably because I worked with an entire team :) but they definitely followed my lead most of the time.
---
<!-- 💖 "I love you because..." one-liner with sequential button -->
<span id="love-line" style="display:inline-flex; align-items:center; gap:.4rem; flex-wrap:wrap;">
  <span>I love you because&nbsp;</span>
  <span id="love-reason" aria-live="polite" style="font-weight:600;">you are very kind</span>
  <button id="love-next"
    type="button"
    aria-label="Next reason"
    style="
      display:inline-flex; align-items:center; justify-content:center;
      padding:.25rem .45rem; line-height:1;
      border:1px solid currentColor; border-radius:6px;
      background:transparent; color:inherit; cursor:pointer;
      font:inherit; opacity:.85; transition:opacity .2s;
    "
  >↻</button>
</span>

<script>
  (function () {
    // 📝 Your list of reasons (sequential order)
    const REASONS = [
      "you are very kind",
      "of your hair",
      "you light up every room",
      "you’re brave and thoughtful",
      "you make me laugh",
      "you listen — really listen",
      "your curiosity is contagious",
      "you’re patient with me",
      "you care about little things",
      "you have a lot of cheese in your repository"
    ];

    const reasonEl = document.getElementById("love-reason");
    const btn = document.getElementById("love-next");
    if (!reasonEl || !btn) return;

    let idx = 0;

    // Update display
    function render() {
      reasonEl.textContent = REASONS[idx];
    }

    // Advance through reasons sequentially
    btn.addEventListener("click", () => {
      idx++;
      if (idx >= REASONS.length) idx = 0; // loop back to first
      render();
    });

    // Bonus: click the text itself to go next (mobile-friendly)
    reasonEl.addEventListener("click", () => btn.click());

    // Initial display
    render();
  })();
</script>
