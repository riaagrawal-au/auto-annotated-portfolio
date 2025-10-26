---
type: ProjectLayout
title: A Perfunctory List of Reasons Why I Love You
colors: colors-a
date: '2025-10-26'
client: Adityaveer Singh Dahiya, Ria Agrawal
description: >-
  If you ever find yourself wondering why your funny, beautiful, smart girlfriend loves you so much (a very valid question, by the way), here's 31 reasons why.
---

<section id="love-reason">
  <div class="reason-container" onclick="showNextReason()">
    <h2>I love you because...</h2>
    <p id="reason-text" class="reason">you are very kind</p>
    <div class="refresh-hint">Click to see another reason</div>
  </div>
</section>

<style>
  #love-reason {
    margin: 2rem auto;
    padding: 2rem;
    max-width: 600px;
    text-align: center;
  }
  
  .reason-container {
    padding: 2rem;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(255,182,193,0.1) 0%, rgba(255,218,224,0.1) 100%);
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .reason-container:hover {
    transform: scale(1.02);
  }
  
  .reason-container:active {
    transform: scale(0.98);
  }
  
  .reason-container h2 {
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    color: #d64775;
    font-weight: 600;
  }
  
  .reason {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #333;
    min-height: 3rem;
    margin: 2rem 0;
    font-style: italic;
  }
  
  .refresh-hint {
    margin-top: 2rem;
    font-size: 0.875rem;
    color: #666;
    opacity: 0.7;
  }
</style>

<script>
  const reasons = [
    "you are very kind",
    "of your hair",
    "you light up every room",
    "you could pull off a goatee",
    "you wear your shirt tucked out",
    "you're brave and thoughtful",
    "you have a great pair of biceps and shoulders",
    "you smell great",
    "you have an early 2000s professor vibe",
    "you have a sitcom humour",
    "you say 'listen' a lot",
    "you're curious",
    "you were chill with me bleeding to death in your house",
    "you sing 'Creep' well",
    "you're patient with me",
    "you care about your hair a lot",
    "you look cute wrapped up in a towel",
    "you have a lot of cheese in your repository",
    "you dress really well for a boy",
    "you did not like Tanishq Tuteja",
    "your armpit has an interesting stench",
    "Anju Dahiya is a GOAT",
    "your feet look really nice and funny",
    "AWHO sujjan vihar lowkey rules",
    "you're the most beautiful person I have ever laid eyes on",
    "you have Nepali eyes",
    "you have a very cute Hindi accent",
    "you are funny when you're high",
    "you're my boyfriend",
    "you have a list of the meds I need :)",
    "you care about me so much and make me feel so loved and cared for",
    "you're you -- and I wouldn't change a single thing about you"
  ];
  
  let currentIndex = 0;
  
  function showNextReason() {
    currentIndex = (currentIndex + 1) % reasons.length;
    document.getElementById('reason-text').textContent = reasons[currentIndex];
  }
</script>
