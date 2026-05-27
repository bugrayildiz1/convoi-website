/* ═══════════════════════════════════════════════════════════
   QAVIO — main.js
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─── CUSTOM CURSOR ─────────────────────────────────────── */
const curDot  = document.getElementById('cur-dot');
const curRing = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

window.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  curDot.style.left = mx + 'px';
  curDot.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  curRing.style.left = rx + 'px';
  curRing.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .feat-card, .sec-card, .price-card, .plan-cta, .channel').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
});

/* ─── NAV SCROLL ─────────────────────────────────────────── */
const nav = document.getElementById('nav');
const langDd = document.getElementById('lang-dd');
const heroLogo = document.getElementById('hero-logo');
const mobileHeader = document.getElementById('mobile-header');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  const pastHero = window.scrollY > 80;
  if (langDd)       langDd.classList.toggle('hidden', pastHero);
  if (heroLogo)     heroLogo.classList.toggle('hidden', pastHero);
  if (mobileHeader) mobileHeader.classList.toggle('hidden', pastHero);
}, { passive: true });

/* ─── MOBILE HAMBURGER + DRAWER ────────────────────────── */
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

function openDrawer() {
  hamburger?.classList.add('open');
  mobileMenu?.classList.add('open');
  mobileOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  hamburger?.classList.remove('open');
  mobileMenu?.classList.remove('open');
  mobileOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.contains('open') ? closeDrawer() : openDrawer();
});

document.getElementById('mmenu-close')?.addEventListener('click', closeDrawer);
mobileOverlay?.addEventListener('click', closeDrawer);

document.querySelectorAll('.mmenu-links a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

/* ─── MOBILE LANG TRIGGER ───────────────────────────────── */
const mobileLangTrigger = document.getElementById('mobile-lang-trigger');
const mobileLangMenu    = document.getElementById('mobile-lang-menu');

mobileLangTrigger?.addEventListener('click', e => {
  e.stopPropagation();
  const opening = !mobileLangMenu.classList.contains('open');
  mobileLangMenu.classList.toggle('open', opening);
  mobileLangTrigger.classList.toggle('open', opening);
});

document.addEventListener('click', () => {
  mobileLangMenu?.classList.remove('open');
  mobileLangTrigger?.classList.remove('open');
});

/* ─── HERO PHONE ANIMATOR ───────────────────────────────── */
class HeroPhone {
  constructor() {
    this.screens  = Array.from(document.querySelectorAll('.pscreen'));
    this.dots     = Array.from(document.querySelectorAll('.pdot'));
    this.current  = 0;
    this.timers   = [];
    this.durations = [7000, 6500, 6500]; // ms each screen stays visible

    if (!this.screens.length) return;
    this.activate(0);
    this.schedule();
  }

  schedule() {
    const t = setTimeout(() => {
      this.next();
      this.schedule();
    }, this.durations[this.current]);
    this.timers.push(t);
  }

  next() {
    const nextIdx = (this.current + 1) % this.screens.length;
    const curr = this.screens[this.current];
    const next = this.screens[nextIdx];

    // Exit current
    curr.classList.add('exiting');
    this.dots[this.current]?.classList.remove('active');

    setTimeout(() => {
      curr.classList.remove('active', 'exiting');
      this.current = nextIdx;
      this.activate(nextIdx);
    }, 450);
  }

  activate(idx) {
    const screen = this.screens[idx];
    this.restartAnims(screen);
    screen.classList.add('active');
    this.dots[idx]?.classList.add('active');

    // Screen-specific logic
    if (idx === 0) this.runChatSequence(screen);
    if (idx === 1) this.runFlowSequence(screen);
    if (idx === 2) this.runDashSequence(screen);
  }

  restartAnims(el) {
    el.querySelectorAll('[data-anim]').forEach(child => {
      child.classList.remove('show');
      child.style.animation = 'none';
      void child.offsetHeight; // force reflow
      child.style.animation  = '';
    });
    // Reset dashboard rows
    el.querySelectorAll('.dash-row').forEach(r => r.classList.remove('show'));
    // Reset chip selections to default
    el.querySelectorAll('.date-chip').forEach(c => c.classList.remove('sel'));
    // Remove glows
    el.querySelectorAll('.glow, .pulse').forEach(c => c.classList.remove('glow', 'pulse'));
    // Reset counters
    el.querySelectorAll('[data-count]').forEach(c => { c.textContent = '0'; });
    // Remove highlights
    el.querySelectorAll('.flow-val.hl').forEach(v => v.classList.remove('hl'));
  }

  after(ms, fn) {
    const t = setTimeout(fn, ms);
    this.timers.push(t);
    return t;
  }

  showAnim(el) {
    if (!el) return;
    el.classList.add('show');
  }

  /* Chat screen sequence */
  runChatSequence(screen) {
    const items = screen.querySelectorAll('[data-anim]');
    const delays = [400, 1200, 1900, 2200, 3200, 4400];
    items.forEach((el, i) => {
      this.after(delays[i] ?? (300 + i * 600), () => this.showAnim(el));
    });
    // Pulse first button
    this.after(3100, () => {
      const btn = screen.querySelector('.msg-btn');
      if (btn) btn.classList.add('pulse');
    });
  }

  /* Flow form sequence */
  runFlowSequence(screen) {
    // Highlight name field
    this.after(800, () => {
      const name = screen.querySelector('.flow-val-name');
      if (name) name.classList.add('hl');
    });
    // Highlight service
    this.after(1700, () => {
      const svc = screen.querySelector('.flow-val-svc');
      if (svc) svc.classList.add('hl');
    });
    // Select date chip
    this.after(2600, () => {
      const chips = screen.querySelectorAll('.date-chip');
      chips.forEach(c => c.classList.remove('sel'));
      if (chips[1]) chips[1].classList.add('sel'); // "Çar 21"
    });
    // Select time chip
    this.after(3600, () => {
      const tChips = screen.querySelectorAll('.time-chip');
      tChips.forEach(c => c.classList.remove('sel'));
      if (tChips[1]) tChips[1].classList.add('sel'); // "11:30"
    });
    // Pulse submit button
    this.after(4700, () => {
      const btn = screen.querySelector('.flow-btn-gr');
      if (btn) btn.classList.add('glow');
    });
  }

  /* Dashboard sequence */
  runDashSequence(screen) {
    // Count up numbers
    this.after(300, () => {
      screen.querySelectorAll('[data-count]').forEach(el => {
        this.countUp(el, parseInt(el.dataset.count), 1800);
      });
    });
    // Show rows with stagger
    const rows = screen.querySelectorAll('.dash-row');
    rows.forEach((row, i) => {
      this.after(1800 + i * 700, () => row.classList.add('show'));
    });
  }

  countUp(el, target, duration) {
    const start = Date.now();
    const suffix = el.dataset.suffix || '';
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}

/* ─── SCROLL DEMO PHONE ──────────────────────────────────── */
function initScrollDemo() {
  const steps   = document.querySelectorAll('#demo .step');
  const slides  = document.querySelectorAll('#demo-phone .phone-slide');
  if (!steps.length || !slides.length) return;

  let current = 0;

  function show(idx) {
    if (idx === current) return;
    slides[current].classList.remove('active');
    slides[idx].classList.add('active');
    current = idx;
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = parseInt(e.target.dataset.screen, 10);
        steps.forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
        show(idx);
      }
    });
  }, { threshold: 0.5, rootMargin: '-10% 0px -35% 0px' });

  steps.forEach(s => obs.observe(s));
}

/* ─── FADE UP ────────────────────────────────────────────── */
function initFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fu').forEach(el => obs.observe(el));
}

/* ─── CONTACT FORM ───────────────────────────────────────── */
const WA_NUMBER = '905XXXXXXXXX'; // ← kendi numaranızı girin

window.handleSubmit = function(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const text = encodeURIComponent(
    'Merhaba Qavio! Demo talep ediyorum.\n\n' +
    `Ad: ${fd.get('name')}\nTel: ${fd.get('phone')}\n` +
    (fd.get('email')   ? `E-posta: ${fd.get('email')}\n`   : '') +
    `Sektör: ${fd.get('sector')}\n` +
    (fd.get('message') ? `\nNot: ${fd.get('message')}` : '')
  );
  document.getElementById('cform').style.display      = 'none';
  document.getElementById('f-success').style.display  = 'block';
  setTimeout(() => window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank'), 700);
};

/* ─── SMOOTH SCROLL ──────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─── HERO SCROLL EXIT ───────────────────────────────────── */
function initHeroScroll() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const p = Math.min(window.scrollY / (hero.offsetHeight * 0.6), 1);
    if (p > 0) {
      hero.style.transform = `scale(${1 - p * 0.05})`;
      hero.style.opacity   = `${1 - p * 0.25}`;
    } else {
      hero.style.transform = '';
      hero.style.opacity   = '';
    }
  }, { passive: true });
}

/* ─── AI CHAT DEMO ANIMATOR ──────────────────────────────── */
function initAiChatDemo() {
  const msgs      = document.querySelectorAll('#ai-demo-msgs > *');
  const overlay   = document.getElementById('ai-flow-overlay');
  const submitBtn = document.getElementById('afo-submit');
  if (!msgs.length) return;

  // #ai-demo-msgs children: 0=user, 1=typing, 2=bot-flow-card, 3=confirmation
  const sequence = [
    { idx: 0, inAt: 400 },               // user msg
    { idx: 1, inAt: 1100, outAt: 1900 }, // typing
    { idx: 2, inAt: 1900 },              // bot sends flow card
    { idx: 3, inAt: 7600 },              // confirmation after flow closes
  ];

  const CYCLE = 12000;
  let timers = [];

  function show(el) {
    el.style.transition = 'opacity .4s ease, transform .4s ease';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }
  function hide(el) {
    el.style.transition = 'opacity .3s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(0)';
  }
  function reset() {
    timers.forEach(clearTimeout);
    timers = [];
    msgs.forEach(el => {
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
    });
    overlay?.classList.remove('open');
    submitBtn?.classList.remove('glow');
    overlay?.querySelectorAll('.date-chip').forEach(c => c.classList.remove('sel'));
  }

  function animate() {
    reset();
    sequence.forEach(step => {
      timers.push(setTimeout(() => show(msgs[step.idx]), step.inAt));
      if (step.outAt) timers.push(setTimeout(() => hide(msgs[step.idx]), step.outAt));
    });
    // Flow form opens (slides up over chat)
    timers.push(setTimeout(() => overlay?.classList.add('open'), 3600));
    // Chip selections — one by one after form opens
    timers.push(setTimeout(() => {
      const rows = overlay?.querySelectorAll('.date-row');
      rows?.[0]?.querySelectorAll('.date-chip')[1]?.classList.add('sel'); // 👥 4
    }, 4200));
    timers.push(setTimeout(() => {
      const rows = overlay?.querySelectorAll('.date-row');
      rows?.[1]?.querySelectorAll('.date-chip')[1]?.classList.add('sel'); // Çar 21
    }, 4900));
    timers.push(setTimeout(() => {
      const rows = overlay?.querySelectorAll('.date-row');
      rows?.[2]?.querySelectorAll('.date-chip')[1]?.classList.add('sel'); // 20:00
    }, 5600));
    // Submit button pulses (user taps)
    timers.push(setTimeout(() => submitBtn?.classList.add('glow'), 6300));
    // Flow form closes (slides back down)
    timers.push(setTimeout(() => {
      overlay?.classList.remove('open');
      submitBtn?.classList.remove('glow');
    }, 7100));
  }

  animate();
  setInterval(animate, CYCLE);
}

/* ─── GEO PRICING ────────────────────────────────────────── */
const geoState = { isTurkey: false, rate: null };

const USD_MONTHLY  = [19,  49,  129];
const USD_YEARLY   = [15,  39,   99];
const USD_YR_TOTAL = [149, 389, 990];
const USD_YR_SAVE  = [79,  199, 558];

function fmtTL(usd) {
  const raw  = usd * geoState.rate;
  const step = raw >= 1000 ? 100 : 10;
  return '₺' + (Math.ceil(raw / step) * step).toLocaleString('tr-TR');
}

function applyGeoPrice() {
  if (!geoState.isTurkey || !geoState.rate) return;

  const isYearly = document.getElementById('tog-yearly')?.classList.contains('active');

  document.querySelectorAll('.js-price').forEach((el, i) => {
    el.dataset.monthly = fmtTL(USD_MONTHLY[i]);
    el.dataset.yearly  = fmtTL(USD_YEARLY[i]);
    el.textContent = isYearly ? el.dataset.yearly : el.dataset.monthly;
  });

  document.querySelectorAll('.js-yearly-note').forEach((el, i) => {
    el.textContent = fmtTL(USD_YR_TOTAL[i]) + '/yıl · ' + fmtTL(USD_YR_SAVE[i]) + ' tasarruf';
  });

  document.querySelectorAll('[data-i18n="plan-per"]').forEach(el => {
    el.textContent = '/ay';
  });
}

async function initGeoPrice() {
  try {
    const geo  = await fetch('https://ipapi.co/json/').then(r => r.json());
    if (geo.country_code !== 'TR') return;

    const data = await fetch('https://open.er-api.com/v6/latest/USD').then(r => r.json());
    geoState.isTurkey = true;
    geoState.rate     = data.rates.TRY;
    applyGeoPrice();
  } catch (_) { /* kur çekilemezse USD kalır */ }
}

/* ─── PRICE TOGGLE ───────────────────────────────────────── */
function initPriceToggle() {
  const togMonthly = document.getElementById('tog-monthly');
  const togYearly  = document.getElementById('tog-yearly');
  if (!togMonthly || !togYearly) return;

  function setMode(mode) {
    const yearly = mode === 'yearly';
    togMonthly.classList.toggle('active', !yearly);
    togYearly.classList.toggle('active', yearly);
    document.querySelectorAll('.js-price').forEach(el => {
      el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
    document.querySelectorAll('.js-yearly-note').forEach(el => {
      el.classList.toggle('show', yearly);
    });
  }

  togMonthly.addEventListener('click', () => setMode('monthly'));
  togYearly.addEventListener('click', () => setMode('yearly'));
}

/* ─── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  new HeroPhone();
  initScrollDemo();
  initFadeUp();
  initSmoothScroll();
  initHeroScroll();
  initAiChatDemo();
  initPriceToggle();
  initGeoPrice();
});
