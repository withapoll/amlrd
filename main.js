// AMLRD redesign — progressive enhancement only.
// Motion is purposeful (design-eng/apple): scroll reveals, an origin-aware
// tab indicator, and a sticky-nav hairline. Everything degrades to static.

(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---- scroll reveal (staggered within a section) ----
  // IntersectionObserver drives it, but content must NEVER stay stuck invisible
  // (IO can be throttled in a background tab or unsupported), so we back it with
  // an immediate in-view pass plus a scroll/resize fallback.
  const reveals = [...document.querySelectorAll('.reveal')];
  const revealNow = (el) => {
    if (el.classList.contains('is-in')) return;
    // stagger siblings that share a parent, capped so it never feels slow
    const group = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    const idx = group.indexOf(el);
    el.style.transitionDelay = Math.min(idx, 6) * 55 + 'ms';
    el.classList.add('is-in');
  };

  if (reduce) {
    reveals.forEach(revealNow);
  } else {
    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.9 && r.bottom > 0;
    };
    const sweep = () => {
      let remaining = false;
      reveals.forEach((el) => {
        if (el.classList.contains('is-in')) return;
        if (inView(el)) revealNow(el);
        else remaining = true;
      });
      return remaining;
    };

    sweep(); // above-the-fold reveals immediately, no wait on IO

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealNow(entry.target);
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      reveals.forEach((el) => { if (!el.classList.contains('is-in')) io.observe(el); });
    }

    // bulletproof fallback: reveal in-view items on scroll even if IO never fires
    const onScroll = () => { if (!sweep()) { window.removeEventListener('scroll', onScroll); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    setTimeout(sweep, 1400); // last resort — never leave content hidden
  }

  // ---- sticky-nav hairline once scrolled ----
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- tabs: sliding indicator + filter ----
  const tablist = document.querySelector('.tabs');
  const indicator = tablist && tablist.querySelector('.tabs__indicator');
  const tabs = tablist ? [...tablist.querySelectorAll('.tab')] : [];
  const cards = [...document.querySelectorAll('#work-grid .card')];

  function moveIndicator(tab) {
    if (!indicator) return;
    const pad = tablist.getBoundingClientRect().left + parseFloat(getComputedStyle(tablist).paddingLeft);
    const r = tab.getBoundingClientRect();
    indicator.style.width = r.width + 'px';
    indicator.style.transform = `translateX(${r.left - pad}px)`;
  }

  function applyFilter(filter) {
    cards.forEach((card) => {
      const show = filter === 'all' || card.dataset.type === filter;
      card.classList.toggle('is-hidden', !show);
    });
  }

  function selectTab(tab) {
    tabs.forEach((t) => {
      const on = t === tab;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', String(on));
    });
    moveIndicator(tab);
    applyFilter(tab.dataset.filter);
  }

  if (tabs.length) {
    // init indicator to the active tab once fonts settle (avoids width jump)
    const initial = tabs.find((t) => t.classList.contains('is-active')) || tabs[0];
    const paint = () => moveIndicator(initial);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(paint);
    requestAnimationFrame(paint);
    window.addEventListener('resize', () => {
      const active = tabs.find((t) => t.classList.contains('is-active')) || tabs[0];
      moveIndicator(active);
    }, { passive: true });

    tabs.forEach((tab) => tab.addEventListener('click', () => selectTab(tab)));

    // keyboard: arrow-key roving between tabs
    tablist.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const i = tabs.findIndex((t) => t.classList.contains('is-active'));
      const next = e.key === 'ArrowRight' ? (i + 1) % tabs.length : (i - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      selectTab(tabs[next]);
    });
  }
})();
