---
type: ProjectLayout
title: A Perfunctory List of Why I Love You
colors: colors-a
date: '2025-10-24'
client: Adityaveer Singh Dahiya
description: If you ever find your wondering, why is it that my funny perfect beautiful girlfriend loves me so much, here's a quick rundown of 31 reasons why
---

<!-- 💖 "I love you because..." one-liner (refresh to change) -->
<span id="love-line" style="display:inline-flex; align-items:center; gap:.4rem; flex-wrap:wrap;">
  <span>I love you because&nbsp;</span>
  <span id="love-reason" aria-live="polite" style="font-weight:600;">you are very kind</span>
</span>

<script>
(function () {
  // 📝 Your list of reasons (random selection on each page load)
  const REASONS = [
    "you are very kind",
    "of your hair",
    "you light up every room",
    "you could pull off a goatee",
    "you wear your shirt tucked out",
    "you're brave and thoughtful",
    "you have a great pair of biceps and shoulders",
    "you smell great",
    "you have a early 2000-s professor vibe",
    "you have a sitcom humour",
    "you say 'listen' alot",
    "you're curious",
    "you were chill with me bleeding to death in your house",
    "you sing 'Creep' well",
    "you're patient with me",
    "you care about your hair alot",
    "you look cute wrapped up in a towel",
    "you have a lot of cheese in your repository",
    "you dress really well for a boy",
    "you did not like Tanishq Tuteja",
    "your armpit has an interesting stench",
    "Anju Dahiya is a GOAT",
    "your feet looks really nice and funny",
    "AWHO sujjan vihar lowkey rules",
    "you're the most beautiful person I have ever lain eyes on",
    "you have Nepali eyes",
    "you have a very cute Hindi accent",
    "you are funny when you're high",
    "you're my boyfriend",
    "you have a list of the meds i need :)",
    "you care about me so much and make me feel so loved and cared for",
    "you're you -- and I wouldn't change a single thing about you"
  ];

  const reasonEl = document.getElementById("love-reason");
  if (!reasonEl) return;

  // Pick a random reason on each page load
  const randomIndex = Math.floor(Math.random() * REASONS.length);
  reasonEl.textContent = REASONS[randomIndex];
})();
</script>
