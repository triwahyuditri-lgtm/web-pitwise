/* PITWISE — language switch (Indonesian is the page source; this file holds the English copy) */
(function () {
  'use strict';

  // Values are HTML. Elements marked data-i18n get innerHTML; data-i18n-attr sets attributes.
  var EN = {
    // Shared: meta, navbar, footer
    'skip': 'Skip to content',
    'nav.aria': 'Main navigation',
    'nav.open': 'Open menu',
    'nav.features': 'Features',
    'nav.preview': 'Screens',
    'nav.pricing': 'Pricing',
    'nav.demo': 'Demo',
    'nav.contact': 'Contact',
    'nav.download': 'Download',
    'nav.cta': 'Download Free',
    'footer.desc': 'Offline mining field tool for supervisors, pit control, and production engineers.',
    'footer.product': 'Product',
    'footer.legal': 'Legal',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.tiktok': 'TikTok @pitwise.app (opens in a new tab)',
    'footer.copy': '&copy; 2026 PITWISE. All rights reserved.',
    'footer.tagline': 'Made in Indonesia for Indonesian mines.',

    // Home: meta
    'home.title': 'PITWISE — Offline Mining Field Tool',
    'home.desc': 'PITWISE — an offline mining field tool for productivity tracking, measurement, and field calculations. Built for mining professionals.',

    // Hero
    'hero.badge': 'Android app for open-pit mining',
    'hero.title': 'Your Pit. Your Data. <span class="accent-text">Your Control.</span>',
    'hero.lead': 'PITWISE is a professional offline mining field tool for supervisors, pit control teams, and production engineers. Measure distances on GeoPDF and DXF maps, estimate productivity, calculate volumes, and analyze road grades — all without an internet connection.',
    'hero.cta': 'Get it on Google Play',
    'hero.demo': 'Try the Calculator Demo',
    'hero.float1': '255.0 BCM / hr',
    'hero.float2.label': 'GPS · No signal',
    'hero.float2.value': 'Tracking active',

    // Stats
    'stats.aria': 'Google Play statistics',
    'stats.dau.value': '7.28K',
    'stats.dau': 'Daily Active Users',
    'stats.mau.value': '27.2K',
    'stats.mau': 'Monthly Active Users',
    'stats.installs.value': '53.1K',
    'stats.installs': 'Total Installs',
    'stats.devices.value': '31.7K',
    'stats.devices': 'Active Devices',
    'stats.rating.value': '4.3<span class="star">★</span>',
    'stats.rating': 'Google Play Rating',
    'stats.reviews': 'Google Play Reviews',
    'stats.updated': 'Google Play data as of <time datetime="2026-10-13">13 October 2026</time> · active users &amp; devices are 28-day averages',

    // About (value proposition)
    'about.eyebrow': 'Why PITWISE',
    'about.title': 'Built for <span class="accent-text">the mine site</span>',
    'about.p1': 'PITWISE is an Android app built specifically for mine supervisors, pit control officers, and production engineers. It provides practical field tools — distance and area measurement on GeoPDF/DXF maps, overburden and coal volume calculations, excavator productivity estimates, and road grade analysis — all designed to run fully offline.',
    'about.p2': 'On open-pit mines, connectivity can’t be relied on. PITWISE removes that dependency. Load your site maps, walk the pit, take measurements, and produce reports without needing a cell signal.',
    'value1.title': 'Works without signal',
    'value1.text': 'Maps, measurements, calculations, and reports keep working in areas with no cell coverage.',
    'value2.title': 'Precision from map geometry',
    'value2.text': 'Coordinates come straight from GeoPDF and DXF map vertices — no manual input.',
    'value3.title': 'Your data stays with you',
    'value3.text': 'All calculations run locally on the device, in the field where decisions are made.',

    // App preview
    'preview.eyebrow': 'App Screens',
    'preview.title': 'See PITWISE on <span class="accent-text">Android</span>',
    'preview.sub': 'From GeoPDF maps to productivity calculators — all in one app.',
    'shot.login.alt': 'PITWISE login screen',
    'shot.home': 'Home',
    'shot.home.alt': 'PITWISE home screen',
    'shot.addmap': 'Add Map',
    'shot.addmap.alt': 'Adding a PDF or DXF map',
    'shot.pdf': 'GeoPDF Viewer',
    'shot.pdf.alt': 'GeoPDF map viewer',
    'shot.dxf': 'DXF Viewer',
    'shot.dxf.alt': 'DXF map viewer',
    'shot.tracking.alt': 'Base map with GPS tracking',
    'shot.calc': 'Mining Calculator',
    'shot.calc.alt': 'Mining calculator',
    'shot.prod': 'Productivity',
    'shot.prod.alt': 'Productivity menu',
    'shot.exca': 'Excavator Productivity',
    'shot.exca.alt': 'Excavator productivity',
    'shot.settings': 'Settings',
    'shot.settings.alt': 'App settings',

    // Features
    'features.eyebrow': 'Key Features',
    'features.title': 'Every field tool in <span class="accent-text">one app</span>',
    'features.sub': 'Tools built specifically for daily mine operations — from reading maps to production reporting.',
    'f1.title': 'GeoPDF &amp; DXF Viewer',
    'f1.text': 'Load georeferenced PDF and DXF mine maps directly on your device. View layers, pan, zoom, and overlay your live GPS position on the map — fully offline.',
    'f2.title': 'Snap-to-Vertex Precision',
    'f2.text': 'Tap map vertices with automatic snapping for accurate distance and area measurements. Coordinates are extracted straight from the map geometry — no manual input.',
    'f3.title': 'Volume Calculation (BCM/LCM)',
    'f3.text': 'Calculate overburden and coal volumes in Bank Cubic Meters and Loose Cubic Meters with a configurable swell factor. Standard mining formulas are built in.',
    'f4.title': 'Productivity Estimates',
    'f4.text': 'Estimate excavator and hauler productivity per shift from bucket capacity, cycle time, fill factor, and job efficiency. Compare actuals against production targets.',
    'f5.title': 'Road Grade Analysis',
    'f5.text': 'Calculate haul road gradients between two elevation points. Check whether a road segment meets safe grade requirements for loaded and empty trucks.',
    'f6.title': 'Offline-First Architecture',
    'f6.text': 'Every feature runs locally on your device with no internet dependency. Maps, calculations, measurements, and reports all work in areas without cell coverage.',

    // Free vs Premium
    'cmp.eyebrow': 'Plans',
    'cmp.title': 'Free vs <span class="accent-text">Premium</span>',
    'cmp.sub': 'Start at no cost. Upgrade when you need the full toolkit.',
    'cmp.free': 'Free',
    'cmp.free.price': 'Rp 0 — no time limit',
    'cmp.free.1': 'Single map viewer (GeoPDF or DXF)',
    'cmp.free.2': 'Basic distance measurement',
    'cmp.free.3': 'Standard mining calculator',
    'cmp.free.4': 'Single-shift productivity input',
    'cmp.free.5': 'Contains ads',
    'cmp.free.6': 'No advanced productivity analytics',
    'cmp.free.7': 'No data export (PDF/CSV)',
    'cmp.free.8': 'No priority updates &amp; support',
    'cmp.premium': 'Premium <span class="pill">Complete</span>',
    'cmp.premium.price': 'From Rp 19,000 / month',
    'cmp.prem.1': 'Ad-free',
    'cmp.prem.2': 'Unlimited maps &amp; multi-map manager',
    'cmp.prem.3': 'Distance, area &amp; snap-to-vertex measurement',
    'cmp.prem.4': 'Advanced &amp; multi-shift productivity analytics',
    'cmp.prem.5': 'PDF &amp; CSV data export',
    'cmp.prem.6': 'Full mining calculator (BCM/LCM, grade)',
    'cmp.prem.7': 'Priority feature updates',
    'cmp.prem.8': 'Priority email support',

    // Pricing
    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'Transparent <span class="accent-text">pricing</span>',
    'pricing.sub': 'No hidden fees. Voucher codes accepted. Renews automatically through Google Play and can be cancelled anytime.',
    'plan.monthly': 'Monthly',
    'plan.monthly.price': '<small>Rp</small>19,000',
    'plan.monthly.period': 'per month',
    'plan.3m': '3 Months',
    'plan.3m.price': '<small>Rp</small>49,000',
    'plan.3m.period': 'per 3 months — <strong>save 14%</strong>',
    'plan.yearly': 'Yearly',
    'plan.yearly.price': '<small>Rp</small>169,000',
    'plan.yearly.period': 'per year — <strong>save 25%</strong>',
    'plan.best': 'Best Value',
    'plan.full': 'Full Premium access',
    'plan.cancel': 'Cancel anytime',
    'plan.support.std': 'Standard email support',
    'plan.support.prio': 'Priority email support',
    'plan.subscribe': 'Subscribe',
    'pricing.note': 'Subscriptions are purchased in the app through Google Play Billing and renew automatically until cancelled. Cancel anytime in <a href="https://play.google.com/store/account/subscriptions" target="_blank" rel="noopener noreferrer">Google Play subscriptions</a> · <a href="https://support.google.com/googleplay/answer/7018481?hl=en" target="_blank" rel="noopener noreferrer">How to cancel</a>',

    // Demo calculator
    'demo.eyebrow': 'Interactive Demo',
    'demo.title': 'Try the <span class="accent-text">productivity calculator</span>',
    'demo.sub': 'Estimate Excavator, Hauler, and Hauling Cycle output instantly — right in your browser.',
    'demo.tabs': 'Calculator type',
    'demo.ct.sec': 'Cycle Time (sec)',
    'demo.ct.min': 'Cycle Time (min)',
    'demo.ewh': 'EWH (hours)',
    'demo.bcmhint': '*Enter BCM values',
    'demo.dist': 'Distance (m)',
    'demo.sload': 'Loaded Speed (km/h)',
    'demo.sempty': 'Empty Speed (km/h)',
    'demo.tload': 'Loading Time (min)',
    'demo.tdump': 'Dumping Time (min)',
    'demo.tqueue': 'Queue Time (min)',
    'demo.btn': 'Calculate Productivity',
    'demo.placeholder': 'Press <strong>Calculate Productivity</strong> to see the result.',
    'demo.cta': 'This is just a small part of PITWISE’s productivity features. In the app you can track daily output, compare it against targets, and export reports.',
    'demo.cta.btn': 'Get it on Google Play',

    // Testimonials
    'testi.eyebrow': 'Testimonials',
    'testi.title': 'Trusted by <span class="accent-text">mining professionals</span>',
    'testi.sub': 'What people using PITWISE in the field say.',
    'testi.stars': '5 out of 5 stars',
    'testi.1': '"Really helpful in the field. I used to carry a laptop to open maps; now my phone is enough. Distance and area measurements are accurate."',
    'testi.1.role': 'Mine Supervisor, South Kalimantan',
    'testi.2': '"The excavator productivity calculator is very useful for daily monitoring. The data can be compared directly with production targets."',
    'testi.2.role': 'Pit Control Officer, East Kalimantan',
    'testi.3': '"An app the field really needs. Offline, lightweight, and the features match mining operations. I’ve already recommended it to my team."',
    'testi.3.role': 'Production Engineer, South Sumatra',

    // Download
    'dl.eyebrow': 'Download',
    'dl.title': 'Ready to take PITWISE <span class="accent-text">to the pit?</span>',
    'dl.sub': 'Get the official PITWISE app on the Google Play Store. Safe, always up to date, and ready to boost your mine’s productivity.',
    'dl.malware': 'Malware-Free',
    'dl.private': 'Safe &amp; Private Data',
    'dl.badge.alt': 'Get it on Google Play',
    'dl.badge.src': 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
    'dl.small': 'Free download · Android',

    // About us + contact
    'aboutus.eyebrow': 'About Us',
    'aboutus.title': 'About <span class="accent-text">PITWISE</span>',
    'aboutus.p1': 'PITWISE is developed by a team that understands the needs of open-pit mining operations in Indonesia. With hands-on experience in the coal mining industry, we design tools that supervisors, pit control, and production engineers actually need.',
    'aboutus.p2': 'Our mission is simple: <strong>bring GIS technology and production reporting into the hands of field workers</strong>, with no internet connection, no complicated training, and no high costs.',
    'aboutus.location': 'Location',
    'contact.title': 'Technical Support',
    'contact.text': 'Need help with installation, licensing, or a technical issue? Send a message and our support team will reply within one business day.',
    'contact.name': 'Name',
    'contact.name.ph': 'Your name',
    'contact.email.ph': 'name@company.com',
    'contact.message': 'Message',
    'contact.message.ph': 'Tell us about your issue',
    'contact.send': 'Send via Email',

    // Legal pages
    'privacy.title': 'Privacy Policy — PITWISE',
    'privacy.desc': 'PITWISE Privacy Policy — learn how we handle data and protect your privacy.',
    'terms.title': 'Terms of Service — PITWISE',
    'terms.desc': 'PITWISE Terms of Service — read the terms and conditions for using the PITWISE app.'
  };

  var root = document.documentElement;
  var originals = new WeakMap();
  var listeners = [];
  var current = 'id';

  function record(el) {
    var rec = originals.get(el);
    if (!rec) {
      rec = { html: el.innerHTML, attrs: {} };
      originals.set(el, rec);
    }
    return rec;
  }

  function apply(lang) {
    var en = lang === 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var rec = record(el);
      var value = en ? EN[el.getAttribute('data-i18n')] : null;
      if (el.tagName === 'TITLE') {
        if (!('text' in rec)) rec.text = el.textContent;
        el.textContent = value != null ? value : rec.text;
      } else {
        el.innerHTML = value != null ? value : rec.html;
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var rec = record(el);
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var i = pair.indexOf(':');
        if (i < 0) return;
        var attr = pair.slice(0, i).trim();
        var key = pair.slice(i + 1).trim();
        if (!(attr in rec.attrs)) rec.attrs[attr] = el.getAttribute(attr);
        var value = en ? EN[key] : null;
        el.setAttribute(attr, value != null ? value : rec.attrs[attr]);
      });
    });

    // Legal pages carry a full block per language
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang-block') !== lang;
    });

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === lang));
    });

    root.lang = lang;
    current = lang;
    root.classList.remove('lang-pending');
    followHash(lang);
    listeners.forEach(function (fn) { fn(lang); });
  }

  // Links like privacy.html#delete-account point into the Indonesian block; in English, jump to the
  // matching "-en" heading instead.
  function followHash(lang) {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id || lang !== 'en') return;
    var target = document.getElementById(id);
    var alt = document.getElementById(id + '-en');
    if (!target || !alt || !target.closest('[hidden]')) return;
    // Wait for the browser's own hash scroll (which finds nothing visible) before jumping
    var jump = function () { alt.scrollIntoView({ behavior: 'instant' }); };
    if (document.readyState === 'complete') setTimeout(jump, 0);
    else window.addEventListener('load', function () { setTimeout(jump, 0); }, { once: true });
  }

  window.addEventListener('hashchange', function () { followHash(current); });

  function setLang(lang) {
    if (lang !== 'en') lang = 'id';
    try { localStorage.setItem('pw-lang', lang); } catch (e) { /* storage unavailable */ }
    // Keep a ?lang= link in sync so it does not override the choice on reload
    if (/[?&]lang=/.test(location.search) && window.history && history.replaceState) {
      var url = new URL(location.href);
      url.searchParams.set('lang', lang);
      history.replaceState(null, '', url);
    }
    apply(lang);
  }

  function initialLang() {
    var match = /[?&]lang=(en|id)\b/.exec(location.search);
    if (match) {
      // A shared ?lang= link also sets the preference for the other pages
      try { localStorage.setItem('pw-lang', match[1]); } catch (e) { /* storage unavailable */ }
      return match[1];
    }
    try { return localStorage.getItem('pw-lang') === 'en' ? 'en' : 'id'; } catch (e) { return 'id'; }
  }

  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-set-lang')); });
  });

  window.PWI18n = {
    get lang() { return current; },
    onChange: function (fn) { listeners.push(fn); }
  };

  apply(initialLang());
})();
