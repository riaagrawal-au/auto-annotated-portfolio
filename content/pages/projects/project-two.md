---
type: ProjectLayout
title: Reasons Why I Love You
colors: colors-a
date: '2025-10-26'
client: Adityaveer Singh Dahiya, Ria Agrawal
description: >-
  If you ever find yourself wondering why your funny, beautiful, smart girlfriend loves you so much (a very valid question, by the way), here's 31 reasons why.
---

import LoveReasons from '@/components/LoveReasons'

<LoveReasons />

---

**Create a new file: `components/LoveReasons.jsx`**

```jsx
'use client'

import { useState } from 'react'

export default function LoveReasons() {
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
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reasons.length)
  }

  return (
    <section id="love-reason" style={{
      margin: '2rem auto',
      padding: '2rem',
      maxWidth: '600px',
      textAlign: 'center'
    }}>
      <div 
        onClick={handleClick}
        style={{
          padding: '2rem',
          border: '1px solid rgba(0,0,0,.1)',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, rgba(255,182,193,0.1) 0%, rgba(255,218,224,0.1) 100%)',
          cursor: 'pointer',
          transition: 'transform 0.2s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      >
        <h2 style={{
          marginTop: 0,
          marginBottom: '1.5rem',
          fontSize: '1.5rem',
          color: '#d64775',
          fontWeight: 600
        }}>
          I love you because...
        </h2>
        <p style={{
          fontSize: '1.25rem',
          lineHeight: 1.6,
          color: '#333',
          minHeight: '3rem',
          margin: '2rem 0',
          fontStyle: 'italic'
        }}>
          {reasons[currentIndex]}
        </p>
        <div style={{
          marginTop: '2rem',
          fontSize: '0.875rem',
          color: '#666',
          opacity: 0.7
        }}>
          Click to see another reason
        </div>
      </div>
    </section>
  )
}
```
