/* ============================================================
   MAIN.JS — Logika utama: tema, navigasi, back-to-top, dll
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. DARK MODE ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', current);
      localStorage.setItem('theme', current);
      updateThemeIcon(current);
    });
  }
  function updateThemeIcon(theme) {
    if (themeToggle) themeToggle.innerHTML = theme === 'dark' ? '☀' : '☾';
  }

  /* ---------- 2. NAVIGASI MOBILE ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
    navMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navMenu.classList.remove('open'))
    );
  }

  /* ---------- 3. BACK TO TOP ---------- */
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('show', window.scrollY > 400);
    });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---------- 4. TAHUN OTOMATIS DI FOOTER ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 5. ACCORDION (PPID) ---------- */
  document.querySelectorAll('.accordion-head').forEach(head => {
    head.addEventListener('click', () => head.parentElement.classList.toggle('open'));
  });

  /* ---------- 6. HIGHLIGHT MENU AKTIF ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === path) a.classList.add('active');
  });

  /* ---------- 7. SLIDER BERITA (sederhana, auto-rotate teks hero) ---------- */
  const ticker = document.getElementById('heroTicker');
  if (ticker) {
    const items = ticker.querySelectorAll('li');
    let idx = 0;
    items.forEach((it, i) => it.style.display = i === 0 ? 'flex' : 'none');
    if (items.length > 1) {
      setInterval(() => {
        items[idx].style.display = 'none';
        idx = (idx + 1) % items.length;
        items[idx].style.display = 'flex';
      }, 3500);
    }
  }

  /* ---------- 8. FORM KONTAK (dummy) ---------- */
  const kontakForm = document.getElementById('kontakForm');
  if (kontakForm) {
    kontakForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Terima kasih! Pesan Anda telah dikirim (demo).');
      kontakForm.reset();
    });
  }
})();
