---
type: ProjectLayout
title: A Perfunctory List of Why I Love You
colors: colors-a
date: '2025-10-24'
client: Adityaveer Singh Dahiya
description: If you ever find yourself wondering why your funny, beautiful, smart girlfriend loves you so much (a very valid question, by the way), here's 31 reasons why!
---
<!-- 💖 "I love you because..." one-liner (refresh to change) -->
<div>
  <span>I love you because&nbsp;</span>
  <span id="love-reason" style="font-weight:600;">you are very kind</span>
</div>
<script>
const reasons = ["you are very kind","of your hair","you light up every room","you could pull off a goatee","you wear your shirt tucked out","you're brave and thoughtful","you have a great pair of biceps and shoulders","you smell great","you have an early 2000s professor vibe","you have a sitcom humour","you say 'listen' a lot","you're curious","you were chill with me bleeding to death in your house","you sing 'Creep' well","you're patient with me","you care about your hair a lot","you look cute wrapped up in a towel","you have a lot of cheese in your repository","you dress really well for a boy","you did not like Tanishq Tuteja","your armpit has an interesting stench","Anju Dahiya is a GOAT","your feet look really nice and funny","AWHO sujjan vihar lowkey rules","you're the most beautiful person I have ever laid eyes on","you have Nepali eyes","you have a very cute Hindi accent","you are funny when you're high","you're my boyfriend","you have a list of the meds I need :)","you care about me so much and make me feel so loved and cared for","you're you -- and I wouldn't change a single thing about you"];

let currentIndex = 0;
const reasonEl = document.getElementById('love-reason');

function showNextReason() {
  currentIndex = (currentIndex + 1) % reasons.length;
  reasonEl.textContent = reasons[currentIndex];
}

// Start cycling every 5 seconds
setInterval(showNextReason, 5000);
</script>
