---
type: ProjectLayout
title: A Very Cool Activities Checklist
colors: colors-a
date: '2025-10-24'
client: Concerns Adityaveer Singh Dahiya, Ria Agrawal
description: >-
  It’s hard to imagine that I’ve that I wrote all this code by myself, probably because I worked with an entire team :) but they definitely followed my lead most of the time.
---

<!-- ✅ Project Checklist -->
<section id="project-checklist" data-key="project-one">
  <h2>Project Checklist</h2>

  <ul class="todo-list">
    <!-- Edit these items (add/remove li's freely). 
         Give each input a unique data-id to keep its state saved. -->
    <li>
      <label>
        <input type="checkbox" data-id="define-scope" />
        <span>Go Bowling</span>
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" data-id="collect-data" />
        <span>Collect & clean dataset</span>
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" data-id="build-mvp" />
        <span>Build MVP and write docs</span>
      </label>
    </li>
    <li>
      <label>
        <input type="checkbox" data-id="deploy" />
        <span>Deploy and share live link</span>
      </label>
    </li>
  </ul>
</section>

<style>
  /* Basic layout */
  #project-checklist {
    margin: 2rem 0;
    padding: 1rem 1.25rem;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 12px;
  }
  #project-checklist h2 {
    margin-top: 0;
    font-size: 1.25rem;
  }
  .todo-list {
    list-style: none;
    padding-left: 0;
    margin: .5rem 0 0;
  }
  .todo-list li {
    display: flex;
    align-items: center;
    padding: .4rem .2rem;
    border-radius: 8px;
    transition: background .15s ease;
  }
  .todo-list li:hover {
    background: rgba(0,0,0,.03);
  }
  .todo-list label {
    display: flex;
    align-items: center;
    gap: .6rem;
    width: 100%;
    cursor: pointer;
    user-select: none;
  }
  .todo-list input[type="checkbox"] {
    width: 1.1rem;
    height: 1.1rem;
    accent-color: currentColor; /* uses your theme color if supported */
  }
  /* Strike-through when done */
  .todo-list li.done span {
    text-decoration: line-through;
    opacity: .55;
  }

  /* Optional: nice focus state for accessibility */
  .todo-list input[type="checkbox"]:focus-visible + span,
  .todo-list label:focus-within span {
    outline: 2px solid rgba(0, 120, 255, .4);
    outline-offset: 2px;
    border-radius: 4px;
  }
</style>

<script>
  (function () {
    const root = document.getElementById('project-checklist');
    if (!root) return;

    // A unique key per page/section so states don't clash across pages
    const namespace = 'todo:' + (root.getAttribute('data-key') || 'default') + ':';

    // Restore state from localStorage
    function restore() {
      const checkboxes = root.querySelectorAll('input[type="checkbox"][data-id]');
      checkboxes.forEach(cb => {
        const key = namespace + cb.getAttribute('data-id');
        const saved = localStorage.getItem(key);
        const isChecked = saved === '1';
        cb.checked = isChecked;
        toggleDone(cb, isChecked);
      });
    }

    // Apply or remove the "done" class on the <li>
    function toggleDone(cb, checked) {
      const li = cb.closest('li');
      if (!li) return;
      li.classList.toggle('done', !!checked);
    }

    // Save on change
    root.addEventListener('change', function (e) {
      const target = e.target;
      if (target && target.matches('input[type="checkbox"][data-id]')) {
        const key = namespace + target.getAttribute('data-id');
        localStorage.setItem(key, target.checked ? '1' : '0');
        toggleDone(target, target.checked);
      }
    });

    // Clicking anywhere on the label toggles the item (already default), but this
    // ensures the "done" class updates if some browsers delay 'change' events.
    root.addEventListener('click', function (e) {
      const label = e.target.closest('label');
      if (!label) return;
      const cb = label.querySelector('input[type="checkbox"][data-id]');
      if (cb) {
        // Allow the native toggle first, then sync the class in the microtask
        queueMicrotask(() => toggleDone(cb, cb.checked));
      }
    });

    restore();
  })();
</script>


> “Everybody should learn to program a computer, because it teaches you how to think.”

