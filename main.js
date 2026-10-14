/* PITWISE — shared site script (theme, navbar, scroll reveal, demo calculator, contact form) */
(function () {
  'use strict';

  const root = document.documentElement;
  const i18n = window.PWI18n || { lang: 'id', onChange() {} };

  // Strings created by this script (the static page copy lives in the HTML and i18n.js)
  const STRINGS = {
    id: {
      themeToLight: 'Ganti ke tema terang',
      themeToDark: 'Ganti ke tema gelap',
      calcError: 'Isi semua kolom dengan angka lebih dari 0.',
      perDay: 'BCM / hari',
      perHour: 'BCM / jam',
      outputHr: 'Produksi / jam',
      trips: 'Ritase / jam',
      distance: 'Jarak',
      hours: 'jam',
      minutes: 'menit',
      mailSubject: (name) => `Pesan Website PITWISE dari ${name}`,
      mailName: 'Nama',
      mailMessage: 'Pesan'
    },
    en: {
      themeToLight: 'Switch to light theme',
      themeToDark: 'Switch to dark theme',
      calcError: 'Fill in every field with a number greater than 0.',
      perDay: 'BCM / day',
      perHour: 'BCM / hr',
      outputHr: 'Output / hr',
      trips: 'Trips / hr',
      distance: 'Distance',
      hours: 'hr',
      minutes: 'min',
      mailSubject: (name) => `PITWISE website message from ${name}`,
      mailName: 'Name',
      mailMessage: 'Message'
    }
  };
  const t = (key) => (STRINGS[i18n.lang] || STRINGS.id)[key];

  // --- Theme (the inline script in <head> sets the initial data-theme) ---
  const themeBtn = document.getElementById('themeToggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const lightQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;

  function storedTheme() {
    try { return localStorage.getItem('pw-theme'); } catch (e) { return null; }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeColor) themeColor.setAttribute('content', theme === 'light' ? '#f7f6f2' : '#0b0c0e');
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', theme === 'light' ? t('themeToDark') : t('themeToLight'));
    }
  }

  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      try { localStorage.setItem('pw-theme', next); } catch (e) { /* storage unavailable */ }
      applyTheme(next);
    });
  }

  // Follow the OS setting until the visitor picks a theme themselves
  if (lightQuery && lightQuery.addEventListener) {
    lightQuery.addEventListener('change', (event) => {
      if (!storedTheme()) applyTheme(event.matches ? 'light' : 'dark');
    });
  }

  // --- Navbar: mobile menu + scrolled state ---
  const navbar = document.querySelector('.navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- Scroll reveal ---
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // --- Demo calculator ---
  function formatters() {
    const locale = i18n.lang === 'en' ? 'en-US' : 'id-ID';
    return {
      fmt1: new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
      fmt2: new Intl.NumberFormat(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      fmtN: new Intl.NumberFormat(locale, { maximumFractionDigits: 2 })
    };
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  function num(id) {
    return parseFloat(document.getElementById(id).value);
  }

  function text(id, fallback) {
    return document.getElementById(id).value.trim() || fallback;
  }

  function renderResult(targetId, result) {
    const target = document.getElementById(targetId);
    if (!result) {
      target.innerHTML = `<p class="demo-error" role="alert">${escapeHtml(t('calcError'))}</p>`;
      return;
    }
    const details = result.details.map(([label, value]) =>
      `<div class="demo-detail-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`
    ).join('');
    target.innerHTML = `
      <div class="demo-result-data">
        <span class="demo-result-unit">${escapeHtml(result.unit)}</span>
        <div class="demo-result-main">
          <span class="demo-result-number">${escapeHtml(result.value)}</span>
          <span class="demo-result-label">${escapeHtml(result.label)}</span>
        </div>
        <div class="demo-result-detail">${details}</div>
      </div>`;
  }

  function allPositive(values) {
    return values.every((v) => Number.isFinite(v) && v > 0);
  }

  const calculators = {
    exca() {
      const { fmt1, fmtN } = formatters();
      const bucket = num('d_bucket');
      const ff = num('d_exca_ff');
      const ct = num('d_exca_ct');
      const sf = num('d_sf');
      const eff = num('d_exca_eff');
      const ewh = num('d_exca_ewh');
      if (!allPositive([bucket, ff, ct, sf, eff, ewh])) return null;
      const prodHr = ((3600 * bucket * ff * eff) / sf) / ct;
      const prodDay = ewh * prodHr;
      return {
        unit: text('d_exca_unit', 'Excavator'),
        value: fmt1.format(prodDay),
        label: t('perDay'),
        details: [
          [t('outputHr'), `${fmt1.format(prodHr)} BCM`],
          ['EWH', `${fmtN.format(ewh)} ${t('hours')}`],
          ['Fill Factor', fmtN.format(ff)],
          ['Swell Factor', fmtN.format(sf)]
        ]
      };
    },
    haul() {
      const { fmt1, fmtN } = formatters();
      const vessel = num('d_vessel');
      const ctMin = num('d_haul_ct');
      const ewh = num('d_haul_ewh');
      if (!allPositive([vessel, ctMin, ewh])) return null;
      const prodHr = (60 * vessel) / ctMin;
      const prodDay = ewh * prodHr;
      return {
        unit: text('d_haul_unit', 'Hauler'),
        value: fmt1.format(prodDay),
        label: t('perDay'),
        details: [
          [t('outputHr'), `${fmt1.format(prodHr)} BCM`],
          ['Cycle Time', `${fmtN.format(ctMin)} ${t('minutes')}`],
          ['Vessel', `${fmtN.format(vessel)} BCM`],
          ['EWH', `${fmtN.format(ewh)} ${t('hours')}`]
        ]
      };
    },
    cycle() {
      const { fmt1, fmt2, fmtN } = formatters();
      const dist = num('d_dist');
      const sLoad = num('d_s_load');
      const sEmpty = num('d_s_empty');
      const tLoad = num('d_t_load');
      const tDump = num('d_t_dump');
      const tQueue = num('d_t_queue');
      const vCap = num('d_v_cap');
      if (!allPositive([dist, sLoad, sEmpty, vCap]) || ![tLoad, tDump, tQueue].every((v) => Number.isFinite(v) && v >= 0)) {
        return null;
      }
      const travelLoaded = dist / (sLoad * 1000 / 60);
      const travelEmpty = dist / (sEmpty * 1000 / 60);
      const totalCT = travelLoaded + travelEmpty + tLoad + tDump + tQueue;
      const trips = 60 / totalCT;
      const prod = trips * vCap;
      return {
        unit: 'Hauling Cycle',
        value: fmt1.format(prod),
        label: t('perHour'),
        details: [
          ['Cycle Time', `${fmt1.format(totalCT)} ${t('minutes')}`],
          [t('trips'), fmt2.format(trips)],
          [t('distance'), `${fmtN.format(dist)} m`],
          ['Vessel', `${fmtN.format(vCap)} BCM`]
        ]
      };
    }
  };

  const calcForms = Array.from(document.querySelectorAll('[data-calc]'));
  const shown = new Set();

  function runCalc(form) {
    renderResult(form.dataset.result, calculators[form.dataset.calc]());
    shown.add(form);
  }

  calcForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      runCalc(form);
    });
  });

  // Tabs (WAI-ARIA tab pattern with arrow-key support)
  const tabs = Array.from(document.querySelectorAll('.demo-tab'));
  function selectTab(tab, focus) {
    tabs.forEach((tb) => {
      const selected = tb === tab;
      tb.setAttribute('aria-selected', String(selected));
      tb.tabIndex = selected ? 0 : -1;
      document.getElementById(tb.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus();
  }
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab, false));
    tab.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      const next = (i + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      selectTab(tabs[next], true);
    });
  });

  // --- Contact form → mailto ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      const subject = t('mailSubject')(name);
      const body = [`${t('mailName')}: ${name}`, `Email: ${email}`, '', `${t('mailMessage')}:`, message].join('\n');
      window.location.href = `mailto:admin@pitwise.web.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  // Re-render language-dependent output when the visitor switches language
  i18n.onChange(() => {
    applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
    shown.forEach(runCalc);
  });
})();
