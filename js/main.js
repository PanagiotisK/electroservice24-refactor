/**
 * main.js — shared logic for electroservice24 static site
 * Handles: theme switching, language toggle, hamburger menu, WhatsApp FAB
 */

(function () {
  'use strict';

  /* ─── THEME ─────────────────────────────────────────────────── */
  const THEMES = ['minimal', 'bold', 'corporate'];
  const DEFAULT_THEME = 'corporate';

  function applyTheme(name) {
    if (!THEMES.includes(name)) name = DEFAULT_THEME;
    const link = document.getElementById('theme-css');
    if (link) {
      link.href = resolveCSSPath(name);
    }
    localStorage.setItem('es24-theme', name);

    // Keep dropdown in sync if present
    const sel = document.getElementById('theme-switcher');
    if (sel) sel.value = name;

    // Update body data attr for any per-theme JS tweaks
    document.body.dataset.theme = name;
  }

  function resolveCSSPath(name) {
    // Works whether page is at root or in a subdir
    const depth = (window.location.pathname.match(/\//g) || []).length - 1;
    const prefix = depth > 0 ? '../'.repeat(depth) : '';
    return prefix + 'css/theme-' + name + '.css';
  }

  function initTheme() {
    const saved = localStorage.getItem('es24-theme') || DEFAULT_THEME;
    applyTheme(saved);
  }

  /* ─── LANGUAGE ──────────────────────────────────────────────── */
  const DEFAULT_LANG = 'el';

  function applyLang(lang) {
    if (lang !== 'el' && lang !== 'en') lang = DEFAULT_LANG;
    localStorage.setItem('es24-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.el, .en').forEach(el => {
      el.style.display = 'none';
    });
    document.querySelectorAll('.' + lang).forEach(el => {
      el.style.display = '';
    });

    // Update toggle button labels
    const btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.textContent = lang === 'el' ? 'EN' : 'ΕΛ';
      btn.title = lang === 'el' ? 'Switch to English' : 'Αλλαγή σε Ελληνικά';
    }
  }

  function initLang() {
    const saved = localStorage.getItem('es24-lang') || DEFAULT_LANG;
    applyLang(saved);
  }

  /* ─── HAMBURGER MENU ─────────────────────────────────────────── */
  function initHamburger() {
    const btn = document.getElementById('hamburger-btn');
    const overlay = document.getElementById('mobile-nav');
    const closeBtn = document.getElementById('mobile-nav-close');

    if (!btn || !overlay) return;

    btn.addEventListener('click', () => {
      overlay.classList.remove('translate-x-full');
      overlay.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });

    function closeMenu() {
      overlay.classList.add('translate-x-full');
      overlay.classList.remove('translate-x-0');
      document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // Close on backdrop click
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeMenu();
    });

    // Close on nav link click
    overlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ─── CONTACT FABS ───────────────────────────────────────────── */
  function injectContactFABs() {
    const phoneFab = document.createElement('a');
    phoneFab.href = 'tel:6980289041';
    phoneFab.id = 'phone-fab';
    phoneFab.setAttribute('aria-label', 'Καλέστε μας');
    phoneFab.title = 'Καλέστε μας τώρα';
    phoneFab.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M6.62 10.79a15.054 15.054 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/>
      </svg>
    `;

    const whatsappFab = document.createElement('a');
    whatsappFab.href = 'https://wa.me/306980289041';
    whatsappFab.target = '_blank';
    whatsappFab.rel = 'noopener noreferrer';
    whatsappFab.id = 'whatsapp-fab';
    whatsappFab.setAttribute('aria-label', 'WhatsApp');
    whatsappFab.title = 'Στείλτε μας μήνυμα στο WhatsApp';
    whatsappFab.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.738 5.47 2.027 7.773L0 32l8.469-2.004A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.756-1.845l-.484-.287-5.027 1.189 1.213-4.896-.315-.503A13.295 13.295 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.293-9.961c-.4-.2-2.363-1.167-2.729-1.3-.366-.133-.633-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.267-.467.3-.867.1-.4-.2-1.688-.623-3.215-1.985-1.188-1.06-1.99-2.37-2.224-2.77-.234-.4-.025-.616.176-.815.18-.178.4-.467.6-.7.2-.233.267-.4.4-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.334s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.832 6.035.955.413 1.7.66 2.281.845.958.306 1.831.263 2.52.16.768-.115 2.363-.967 2.696-1.9.333-.934.333-1.734.233-1.9-.1-.167-.367-.267-.767-.467z"/>
      </svg>
    `;
    document.body.appendChild(phoneFab);
    document.body.appendChild(whatsappFab);
  }

  /* ─── PAGE TRANSITION ────────────────────────────────────────── */
  function initPageTransition() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.25s ease';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.style.opacity = '1';
      });
    });

    // Fade-out on internal link clicks
    document.querySelectorAll('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') ||
          href.startsWith('mailto') || href.startsWith('tel') ||
          href.startsWith('https://wa.me')) return;
      a.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => { window.location.href = href; }, 200);
      });
    });
  }

  /* ─── THEME SWITCHER DROPDOWN (index.html only) ──────────────── */
  function initThemeSwitcher() {
    const sel = document.getElementById('theme-switcher');
    if (!sel) return;
    sel.addEventListener('change', () => applyTheme(sel.value));
  }

  /* ─── LANGUAGE TOGGLE BUTTON ─────────────────────────────────── */
  function initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = localStorage.getItem('es24-lang') || DEFAULT_LANG;
      applyLang(current === 'el' ? 'en' : 'el');
    });
  }

  /* ─── IMAGE LOOKUP ───────────────────────────────────────────── */
  function resolveImages() {
    if (!window.IMAGES) return;
    document.querySelectorAll('img[data-img]').forEach(function (img) {
      var key = img.dataset.img;
      if (IMAGES[key]) img.src = IMAGES[key];
    });
  }

  /* ─── ACTIVE NAV LINK ────────────────────────────────────────── */
  function highlightActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a[data-page]').forEach(a => {
      if (a.dataset.page === path) {
        a.classList.add('nav-active');
      }
    });
  }

  /* ─── INIT ───────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    resolveImages();
    initHamburger();
    injectContactFABs();
    initPageTransition();
    initThemeSwitcher();
    initLangToggle();
    highlightActiveNav();
  });

})();
