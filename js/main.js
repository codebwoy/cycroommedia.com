/**
 * Cycroom Media - Main JavaScript
 * Mobile menu, smooth scroll, language switcher
 */

(function () {
  'use strict';

  const LANG_LABELS = { en: 'EN', de: 'DE', fr: 'FR', tw: 'TW', sw: 'SW', ha: 'HA', es: 'ES', it: 'IT' };

  function getNested(obj, path) {
    return path.split('.').reduce(function (o, k) { return o && o[k]; }, obj);
  }

  function applyTranslations(lang) {
    if (!window.TRANSLATIONS || !window.TRANSLATIONS[lang]) return;
    const t = window.TRANSLATIONS[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = getNested(t, key);
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
        else el.textContent = val;
      }
    });
    const current = document.querySelector('.lang-current');
    if (current) current.textContent = LANG_LABELS[lang] || lang.toUpperCase();
    document.documentElement.lang = lang === 'en' ? 'en' : lang === 'de' ? 'de' : lang;
  }

  function setLanguage(lang) {
    try { localStorage.setItem('cycroom_lang', lang); } catch (e) {}
    applyTranslations(lang);
    const menu = document.querySelector('.lang-menu');
    if (menu) {
      menu.querySelectorAll('.lang-option').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      });
    }
  }

  // Language dropdown
  const langTrigger = document.querySelector('.lang-trigger');
  const langMenu = document.querySelector('.lang-menu');
  const langDropdown = document.querySelector('.lang-dropdown');
  if (langTrigger && langMenu) {
    langTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = langMenu.classList.contains('open');
      langMenu.classList.toggle('open');
      if (langDropdown) langDropdown.classList.toggle('open', !open);
      langTrigger.setAttribute('aria-expanded', !open);
    });
    document.addEventListener('click', function () {
      langMenu.classList.remove('open');
      if (langDropdown) langDropdown.classList.remove('open');
      langTrigger.setAttribute('aria-expanded', 'false');
    });
    langMenu.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        setLanguage(btn.getAttribute('data-lang'));
        langMenu.classList.remove('open');
        if (langDropdown) langDropdown.classList.remove('open');
        langTrigger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Init language
  const saved = (function () { try { return localStorage.getItem('cycroom_lang'); } catch (e) { return null; } })();
  setLanguage(saved || 'en');

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('active');
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Smooth scroll for anchor links (native CSS scroll-behavior handles most cases)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
