/* ════════════════════════════════════════════════════════════════════
   THE KELTHEN MUSEUM  (work.html, version 3D)
   Un vrai hall de musée en Three.js, ambiance « Nuit Kelthen » :
   marbre navy qui reflète, colonnes et arches, bannières vertes.
   Au scroll, la caméra vole de la rotonde (le K) à chaque œuvre :
   une sculpture par projet, puis un socle vide réservé au prochain client.
   Une fiche à droite présente le projet et ouvre le dossier existant.

   Dépend de three.min.js (r128, déjà dans assets/vendor) et de main.js
   (projects, wrapFrame, screenContent, openProjectModal).
   Sans WebGL ou avec « réduire les animations » : la grille reste.
   ════════════════════════════════════════════════════════════════════ */
(function kelthenMuseum() {
  'use strict';
  const THREE = window.THREE;
  if (!THREE) return;
  if (typeof projects === 'undefined' || !Array.isArray(projects) || !projects.length) return;
  const workSec = document.getElementById('work');
  if (!workSec) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try { const c = document.createElement('canvas'); if (!(c.getContext('webgl2') || c.getContext('webgl'))) return; } catch (e) { return; }

  /* ─────────────── Textes ─────────────── */
  const T = {
    en: {
      eyebrow: 'The Kelthen Museum', title: 'Every project,<br><em>a work of art.</em>',
      sub: 'Crafted with care. Built to perform. Scroll to walk through the collection.', hint: 'Scroll to enter',
      room: 'Piece', open: 'Open the case file', visit: 'Visit the site', cursor: 'Open', list: 'View as list', back: 'Museum view',
      entrance: 'Rotunda', last: 'Reserved',
      fMeta: 'The next piece', fTitle: 'Would you like to be<br><em>the next piece?</em>',
      fSub: 'This pedestal is waiting for you. Tell us about your business, and we will craft it with the same care.',
      fCta: 'Get a free audit', rsv1: 'RESERVED', rsv2: 'for your project'
    },
    fr: {
      eyebrow: 'Le musée Kelthen', title: 'Chaque projet,<br><em>une œuvre d’art.</em>',
      sub: 'Façonné avec soin. Pensé pour rapporter. Faites défiler pour parcourir la collection.', hint: 'Faites défiler pour entrer',
      room: 'Œuvre', open: 'Ouvrir le dossier', visit: 'Voir le site', cursor: 'Ouvrir', list: 'Voir en liste', back: 'Vue musée',
      entrance: 'Rotonde', last: 'Réservé',
      fMeta: 'La prochaine œuvre', fTitle: 'Et si la prochaine œuvre<br><em>était la vôtre ?</em>',
      fSub: 'Ce socle vous attend. Parlez-nous de votre entreprise, nous la façonnerons avec le même soin.',
      fCta: 'Demander un audit gratuit', rsv1: 'RÉSERVÉ', rsv2: 'à votre projet'
    }
  };
  const STORY = {
    '001': {
      en: { cat: 'Web · Non-profit & community', line: 'A sisterhood for Black women in Alberta needed more than a brochure. We built them a home online: donations, events and their annual conference, all run from one place.', chips: ['Online donations', 'Events & tickets', 'Newsletter'] },
      fr: { cat: 'Web · OBNL & communauté', line: 'Une sororité pour les femmes noires de l’Alberta avait besoin de plus qu’une vitrine. On leur a construit une maison en ligne : dons, événements et conférence annuelle, gérés au même endroit.', chips: ['Dons en ligne', 'Événements & billetterie', 'Infolettre'] }
    },
    '002': {
      en: { cat: 'Web · Marketplace', line: 'In Lomé, ABO helps people find tradespeople they can trust. Every artisan is identity-checked, and a quote is one WhatsApp message away.', chips: ['Verified badge', 'Search by trade & area', 'WhatsApp quotes'] },
      fr: { cat: 'Web · Marketplace', line: 'À Lomé, ABO aide chacun à trouver un artisan de confiance. Chaque artisan est vérifié, et un devis est à un message WhatsApp.', chips: ['Badge Vérifié ABO', 'Recherche métier + quartier', 'Devis WhatsApp'] }
    },
    '003': {
      en: { cat: 'Web · Booking & automation', line: 'A braiding salon in Ottawa, on autopilot. A request comes in, Chichi taps once, and the confirmation, calendar and reminders all go out on their own.', chips: ['AI receptionist', '1-tap approval', 'Automatic reminders'] },
      fr: { cat: 'Web · Réservation & automatisation', line: 'Un salon de tresses à Ottawa en pilote automatique. Une demande arrive, Chichi valide d’un tap, et la confirmation, l’agenda et les rappels partent tout seuls.', chips: ['Réceptionniste IA', 'Validation en 1 tap', 'Rappels automatiques'] }
    },
    '004': {
      en: { cat: 'Web · Agency', line: 'Our own house. The site you are walking through right now, built to load fast and feel alive.', chips: ['SEO & analytics', 'Fast loading', 'Custom animations'] },
      fr: { cat: 'Web · Agence', line: 'Notre propre maison. Le site que vous visitez en ce moment, pensé pour charger vite et paraître vivant.', chips: ['SEO & analytics', 'Chargement rapide', 'Animations sur mesure'] }
    }
  };
  function story(p, l) {
    const s = STORY[p.id] && STORY[p.id][l];
    if (s) return s;
    return { cat: p.category, line: (p.desc || '').split(/(?<=\.)\s/)[0], chips: (p.features || []).slice(0, 3).map((f) => f.title) };
  }
  let lang = 'en';
  try { lang = (window.__i18nLang && window.__i18nLang()) || document.documentElement.lang || 'en'; } catch (e) {}
  if (!T[lang]) lang = 'en';

  /* ─────────────── Styles de l'interface ─────────────── */
  const css = `
#work.km-on{padding:0}
#work.km-on>.work-header,#work.km-on>.work-grid{display:none}
.km{position:relative;height:calc(var(--km-stops,6) * 100vh)}
.km[hidden]{display:none}
.km-stage{position:sticky;top:0;height:100vh;overflow:hidden;background:#04141C}
.km-gl{position:absolute;inset:0;width:100%;height:100%;display:block;outline:none}
.km-vig{position:absolute;inset:0;pointer-events:none;background:radial-gradient(120% 90% at 50% 50%,transparent 55%,rgba(1,10,15,.55) 100%)}
.km-hero{position:absolute;left:5vw;top:calc(50% + 36px);transform:translateY(-50%);width:min(40vw,560px);color:#F0EDE8;z-index:3}
.km-eb{font:500 12px var(--mono,monospace);letter-spacing:.22em;text-transform:uppercase;color:#7CC9AE}
.km-hero h1{margin:18px 0 0;font:700 clamp(2.8rem,5.6vw,5.4rem)/.95 var(--sans);letter-spacing:-.05em;color:#fff;text-wrap:balance}
.km-hero h1 em,.km-panel h2 em{font-style:normal;color:#7CC9AE}
.km-hero p{margin:22px 0 0;max-width:36ch;color:rgba(240,237,232,.72);line-height:1.6;font-size:1.02rem}
.km-hint{margin-top:30px;display:inline-flex;align-items:center;gap:12px;font:500 11px var(--mono,monospace);letter-spacing:.18em;text-transform:uppercase;color:rgba(193,217,229,.65)}
.km-hint i{width:1px;height:40px;background:linear-gradient(#C1D9E5,transparent);transform-origin:top;animation:kmd 1.8s ease-in-out infinite}
@keyframes kmd{0%{transform:scaleY(0)}50%{transform:scaleY(1)}100%{transform:scaleY(1);opacity:0}}
.km-panel{position:absolute;right:clamp(16px,4vw,56px);top:calc(50% + 30px);transform:translateY(-50%);width:min(30vw,400px);max-height:calc(100vh - 200px);overflow:auto;
  z-index:3;opacity:0;visibility:hidden;padding:24px 24px 22px;border-radius:18px;color:#F0EDE8;background:rgba(2,22,32,.82);border:1px solid rgba(193,217,229,.14);
  backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 40px 80px -30px rgba(0,0,0,.7);scrollbar-width:none}
.km-panel::-webkit-scrollbar{display:none}
.km-meta{font:500 11px var(--mono,monospace);letter-spacing:.16em;text-transform:uppercase;color:#7CC9AE;line-height:1.7}
.km-panel h2{font:700 clamp(1.8rem,2.6vw,2.7rem)/1 var(--sans);letter-spacing:-.045em;margin:10px 0 12px;color:#fff;text-wrap:balance}
.km-panel p{color:rgba(240,237,232,.76);line-height:1.58;font-size:.95rem;margin:0}
.km-shot{margin:18px 0 0;display:flex;justify-content:center;border-radius:12px;padding:14px 0 12px;background:linear-gradient(160deg,rgba(193,217,229,.08),rgba(3,120,91,.08));border:1px solid rgba(193,217,229,.08);overflow:hidden}
.km-shot>div{zoom:.78}
.km-chips{display:flex;flex-wrap:wrap;gap:7px;margin-top:16px}
.km-chips span{border:1px solid rgba(3,120,91,.55);color:#C1D9E5;border-radius:999px;padding:5px 11px;font-size:.76rem;background:rgba(3,120,91,.1)}
.km-actions{margin-top:18px;display:flex;flex-wrap:wrap;gap:12px 20px;align-items:center}
.km-btn{display:inline-block;background:#03785B;color:#fff;border:0;border-radius:10px;padding:13px 20px;font:600 15px var(--sans);cursor:pointer;text-decoration:none;
  box-shadow:0 14px 40px -14px rgba(3,120,91,.95);transition:filter .2s,transform .2s}
.km-btn:hover{filter:brightness(1.12);transform:translateY(-1px)}
.km-visit{color:#F0EDE8;font-weight:500;text-decoration:underline;text-underline-offset:6px;text-decoration-color:rgba(193,217,229,.35)}
.km-bar{position:absolute;left:0;right:0;bottom:22px;z-index:3;display:flex;justify-content:center;pointer-events:none;padding:0 16px}
.km-time{pointer-events:auto;display:flex;align-items:stretch;gap:2px;padding:5px;border-radius:14px;background:rgba(2,22,32,.72);border:1px solid rgba(193,217,229,.12);
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);max-width:100%;overflow-x:auto;scrollbar-width:none}
.km-time::-webkit-scrollbar{display:none}
.km-time button{all:unset;cursor:pointer;display:flex;flex-direction:column;gap:3px;padding:8px 14px;border-radius:10px;white-space:nowrap;transition:background .3s}
.km-time button b{font:500 10px var(--mono,monospace);letter-spacing:.14em;color:rgba(193,217,229,.5)}
.km-time button span{font:600 12.5px var(--sans);color:rgba(240,237,232,.72)}
.km-time button:hover{background:rgba(193,217,229,.06)}
.km-time button.on{background:rgba(3,120,91,.28)}
.km-time button.on b{color:#7CC9AE}.km-time button.on span{color:#fff}
.km-time button:focus-visible,.km :focus-visible{outline:2px solid #7CC9AE;outline-offset:2px}
.km-list{all:unset;cursor:pointer;position:absolute;right:clamp(16px,4vw,56px);bottom:30px;z-index:4;font:500 12px var(--sans);color:rgba(193,217,229,.8);
  border:1px solid rgba(193,217,229,.22);border-radius:999px;padding:9px 15px;background:rgba(2,22,32,.6);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.km-list:hover{color:#fff;border-color:rgba(193,217,229,.5)}
.km-cursor{position:absolute;left:0;top:0;width:78px;height:78px;margin:-39px 0 0 -39px;border-radius:50%;background:#03785B;color:#fff;display:flex;align-items:center;justify-content:center;
  font:600 12px var(--sans);pointer-events:none;z-index:4;opacity:0;transform:scale(.4);transition:opacity .25s,transform .25s;box-shadow:0 10px 40px -8px rgba(3,120,91,.9)}
.km-cursor.on{opacity:1;transform:scale(1)}
.km-back{margin-left:12px}
@media (max-width:1100px){.km-list{bottom:auto;top:88px}}
@media (max-width:819px){
  .km-hero{left:16px;right:16px;width:auto;top:auto;bottom:96px;transform:none}
  .km-hero h1{font-size:2.5rem}.km-hero p{font-size:.92rem;margin-top:14px}.km-hint{margin-top:18px}
  .km-panel{left:12px;right:12px;width:auto;top:auto;bottom:84px;transform:none;max-height:52vh;padding:16px 16px 14px;border-radius:16px}
  .km-panel h2{font-size:1.55rem;margin:6px 0 8px}.km-panel p{font-size:.88rem;line-height:1.5}
  .km-shot{display:none}.km-chips{margin-top:10px}.km-chips span{font-size:.7rem;padding:4px 9px}
  .km-actions{margin-top:12px}.km-panel .km-btn{padding:11px 16px;font-size:14px}
  .km-bar{bottom:12px;justify-content:flex-start}
  .km-time button{padding:7px 10px}.km-time button span{font-size:11.5px}
  .km-list{top:84px;right:12px;font-size:11px;padding:7px 12px}
  .km-cursor{display:none}
}`;
  if (!document.getElementById('km-style')) { const st = document.createElement('style'); st.id = 'km-style'; st.textContent = css; document.head.appendChild(st); }

  /* ─────────────── DOM ─────────────── */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const root = document.createElement('div');
  root.className = 'km'; root.id = 'museum';
  root.innerHTML = `<div class="km-stage">
    <canvas class="km-gl" aria-label="The Kelthen Museum" role="img"></canvas>
    <div class="km-vig" aria-hidden="true"></div>
    <div class="km-hero"><p class="km-eb" data-km="eyebrow"></p><h1 data-km-html="title"></h1><p data-km="sub"></p><div class="km-hint"><i></i><span data-km="hint"></span></div></div>
    <div class="km-panels"></div>
    <div class="km-bar"><nav class="km-time" aria-label="Collection"></nav></div>
    <button type="button" class="km-list" data-km="list"></button>
    <div class="km-cursor" aria-hidden="true" data-km="cursor"></div>
  </div>`;
  workSec.insertBefore(root, workSec.firstChild);
  workSec.classList.add('km-on');
  const stage = root.querySelector('.km-stage'), canvas = root.querySelector('.km-gl');
  const heroEl = root.querySelector('.km-hero'), panelsEl = root.querySelector('.km-panels'), timeEl = root.querySelector('.km-time');
  const cursorEl = root.querySelector('.km-cursor'), listBtn = root.querySelector('.km-list');

  const N = projects.length, NST = N + 2; // rotonde + œuvres + socle réservé
  root.style.setProperty('--km-stops', NST);
  const panels = [];
  projects.forEach((p, i) => {
    const shots = p.screens.filter((s) => s.device !== 'raw');
    const main = shots[0] || p.screens[0];
    let shot = '';
    try { shot = typeof wrapFrame === 'function' ? wrapFrame(p, screenContent(main), main.device).replace(/loading="lazy"/g, 'loading="eager"') : ''; } catch (e) { shot = ''; }
    const el = document.createElement('div');
    el.className = 'km-panel';
    el.innerHTML = `<div class="km-meta"></div><h2>${esc(p.name)}</h2><p></p>${shot ? `<div class="km-shot"><div>${shot}</div></div>` : ''}<div class="km-chips"></div>
      <div class="km-actions"><button type="button" class="km-btn"></button>${p.link ? `<a class="km-visit" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer"></a>` : ''}</div>`;
    el.querySelector('.km-btn').addEventListener('click', () => openCase(i));
    panelsEl.appendChild(el); panels.push(el);
  });
  const finPanel = document.createElement('div');
  finPanel.className = 'km-panel';
  finPanel.innerHTML = `<div class="km-meta" data-km="fMeta"></div><h2 data-km-html="fTitle"></h2><p data-km="fSub"></p><div class="km-actions"><a class="km-btn" href="contact.html" data-km="fCta"></a></div>`;
  panelsEl.appendChild(finPanel); panels.push(finPanel);

  const tabs = Array.from({ length: NST }, (_, k) => {
    const b = document.createElement('button'); b.type = 'button';
    b.innerHTML = `<b>${k === 0 ? '000' : String(k).padStart(3, '0')}</b><span></span>`;
    b.addEventListener('click', () => goToStop(k)); timeEl.appendChild(b); return b;
  });

  function openCase(i) { if (typeof openProjectModal === 'function') openProjectModal(i); }

  let backBtn = null;
  function renderText() {
    const t = T[lang];
    root.querySelectorAll('[data-km]').forEach((el) => { el.textContent = t[el.dataset.km]; });
    root.querySelectorAll('[data-km-html]').forEach((el) => { el.innerHTML = t[el.dataset.kmHtml]; });
    projects.forEach((p, i) => {
      const s = story(p, lang), el = panels[i];
      el.querySelector('.km-meta').textContent = `${t.room} ${String(i + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')} · ${s.cat} · ${p.year}`;
      el.querySelector('p').textContent = s.line;
      el.querySelector('.km-chips').innerHTML = s.chips.map((c) => `<span>${esc(c)}</span>`).join('');
      el.querySelector('.km-btn').textContent = t.open;
      const v = el.querySelector('.km-visit'); if (v) v.innerHTML = `${esc(t.visit)} <span aria-hidden="true">↗</span>`;
    });
    tabs.forEach((b, k) => { b.querySelector('span').textContent = k === 0 ? t.entrance : k === NST - 1 ? t.last : projects[k - 1].name; });
    if (backBtn) backBtn.textContent = t.back;
    if (rsvTex) drawReserved();
  }
  document.querySelectorAll('[data-lang-btn]').forEach((b) => b.addEventListener('click', () => setTimeout(() => {
    let l = b.getAttribute('data-lang-btn');
    try { l = (window.__i18nLang && window.__i18nLang()) || l; } catch (e) {}
    if (T[l] && l !== lang) { lang = l; renderText(); }
  }, 0)));

  function setListMode(on) {
    if (on) {
      workSec.classList.remove('km-on'); root.hidden = true; running = false;
      const hdr = workSec.querySelector('.work-header');
      if (hdr && !backBtn) {
        backBtn = document.createElement('button'); backBtn.type = 'button'; backBtn.className = 'btn-ghost km-back';
        backBtn.addEventListener('click', () => setListMode(false));
        const g = hdr.querySelector('.btn-ghost'); (g || hdr).insertAdjacentElement(g ? 'afterend' : 'beforeend', backBtn);
      }
      if (backBtn) { backBtn.hidden = false; backBtn.textContent = T[lang].back; }
      workSec.querySelectorAll('.work-grid .reveal').forEach((c) => c.classList.add('visible'));
      window.scrollTo(0, workSec.getBoundingClientRect().top + scrollY);
    } else {
      workSec.classList.add('km-on'); root.hidden = false; if (backBtn) backBtn.hidden = true;
      resize(); window.scrollTo(0, root.getBoundingClientRect().top + scrollY); start();
    }
  }
  listBtn.addEventListener('click', () => setListMode(true));

  /* ─────────────── Scène Three.js ─────────────── */
  const C = { navy: 0x011E2E, green: 0x03785B, pale: 0xC1D9E5, deep: 0x04141C };
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(C.deep);
  scene.fog = new THREE.Fog(C.deep, 16, 46);
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 120);

  const SP = 11;                         // distance entre deux œuvres
  const XK = (k) => k * SP;              // position x de l'arrêt k
  const X0 = -16, X1 = XK(NST - 1) + 16; // limites du hall
  const WALLZ = -9;
  const mirrorRoot = new THREE.Group(); mirrorRoot.scale.y = -1; scene.add(mirrorRoot); // reflets sur le marbre
  const TOPY = 1.1;     // hauteur des socles
  const spots = [];     // projecteurs
  const anims = [];     // fonctions d'animation (t) => void
  const pickables = []; // maillages cliquables (userData.idx)

  const mat = {
    plinth: new THREE.MeshStandardMaterial({ color: 0x082231, roughness: .5, metalness: .12 }),
    slab: new THREE.MeshStandardMaterial({ color: C.pale, emissive: C.pale, emissiveIntensity: .32, roughness: .4 }),
    strip: new THREE.MeshStandardMaterial({ color: C.green, emissive: C.green, emissiveIntensity: 1.6 }),
    column: new THREE.MeshStandardMaterial({ color: 0x143848, roughness: .62, metalness: .05 }),
    stone: new THREE.MeshStandardMaterial({ color: 0x0E2F3F, roughness: .7 }),
    wall: new THREE.MeshStandardMaterial({ color: 0x0A2330, roughness: .9 }),
    niche: new THREE.MeshStandardMaterial({ color: 0x051720, roughness: 1 }),
    brass: new THREE.MeshStandardMaterial({ color: 0x9FB3BE, roughness: .25, metalness: .9 }),
    rope: new THREE.MeshStandardMaterial({ color: C.green, roughness: .85, emissive: 0x02372A, emissiveIntensity: .6 }),
    paleGloss: new THREE.MeshStandardMaterial({ color: C.pale, roughness: .18, metalness: .25 }),
    greenGloss: new THREE.MeshStandardMaterial({ color: C.green, roughness: .22, metalness: .35, emissive: C.green, emissiveIntensity: .15 })
  };

  /* Textures dessinées (marbre, bannières, gravures) */
  function canvasTex(w, h, draw) {
    const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); draw(g, w, h);
    const t = new THREE.CanvasTexture(c); t.encoding = THREE.sRGBEncoding; t.anisotropy = 4; t.userData = { c, draw }; return t;
  }
  function redraw(t) { const { c, draw } = t.userData; const g = c.getContext('2d'); g.clearRect(0, 0, c.width, c.height); draw(g, c.width, c.height); t.needsUpdate = true; }

  const marble = canvasTex(1024, 1024, (g, w, h) => {
    g.fillStyle = '#0A2632'; g.fillRect(0, 0, w, h);
    let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 26; i++) {
      g.strokeStyle = `rgba(193,217,229,${.02 + rnd() * .05})`; g.lineWidth = .6 + rnd() * 1.8;
      g.beginPath(); let x = rnd() * w, y = rnd() * h; g.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += (rnd() - .4) * 260; y += (rnd() - .5) * 200; g.lineTo(x, y); }
      g.stroke();
    }
    g.strokeStyle = 'rgba(193,217,229,.12)'; g.lineWidth = 2;
    for (let k = 0; k <= 2; k++) { g.beginPath(); g.moveTo(k * w / 2, 0); g.lineTo(k * w / 2, h); g.stroke(); g.beginPath(); g.moveTo(0, k * h / 2); g.lineTo(w, k * h / 2); g.stroke(); }
  });
  marble.wrapS = marble.wrapT = THREE.RepeatWrapping; marble.repeat.set((X1 - X0) / 4, 40 / 4);

  const FONT = '"Inter","Helvetica Neue",Arial,sans-serif', MONO = '"DM Mono",ui-monospace,monospace';
  const banners = [];
  function bannerTex(num, name) {
    return canvasTex(360, 900, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#04644C'); gr.addColorStop(1, '#023F31');
      g.fillStyle = gr; g.beginPath(); g.moveTo(0, 0); g.lineTo(w, 0); g.lineTo(w, h); g.lineTo(w / 2, h - 70); g.lineTo(0, h); g.closePath(); g.fill();
      g.strokeStyle = 'rgba(193,217,229,.55)'; g.lineWidth = 3; g.strokeRect(22, 22, w - 44, h - 150);
      g.fillStyle = '#C1D9E5'; g.textAlign = 'center';
      g.font = `500 30px ${MONO}`; g.fillText(num, w / 2, 110);
      g.fillStyle = '#FFFFFF'; g.font = `700 54px ${FONT}`;
      const words = String(name).toUpperCase().split(' '); let y = 470 - (words.length - 1) * 32;
      words.forEach((wd) => { g.fillText(wd, w / 2, y, w - 70); y += 66; });
    });
  }
  let rsvTex = null;
  function drawReserved() {
    if (!rsvTex) return;
    rsvTex.userData.draw = (g, w, h) => {
      g.fillStyle = 'rgba(2,22,32,.0)'; g.fillRect(0, 0, w, h);
      g.textAlign = 'center';
      g.fillStyle = '#7CC9AE'; g.font = `500 44px ${MONO}`; g.fillText(T[lang].rsv1.split('').join(' '), w / 2, 90);
      g.fillStyle = '#FFFFFF'; g.font = `700 76px ${FONT}`; g.fillText(T[lang].rsv2, w / 2, 190);
    };
    redraw(rsvTex);
  }

  /* Architecture du hall */
  function add(mesh, pos, opts) {
    opts = opts || {};
    if (pos) mesh.position.set(pos[0], pos[1], pos[2]);
    if (opts.shadow) { mesh.castShadow = true; mesh.receiveShadow = true; }
    scene.add(mesh);
    if (opts.mirror !== false) { const m = mesh.clone(); mirrorRoot.add(m); if (opts.anim) anims.push((t) => opts.anim(m, t)); }
    if (opts.anim) anims.push((t) => opts.anim(mesh, t));
    return mesh;
  }
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(X1 - X0, 40),
    new THREE.MeshStandardMaterial({ map: marble, color: 0xffffff, roughness: .28, metalness: .15, transparent: true, opacity: .84 }));
  floor.rotation.x = -Math.PI / 2; floor.position.set((X0 + X1) / 2, 0, 6); floor.receiveShadow = true; floor.renderOrder = 1;
  scene.add(floor);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(X1 - X0, 12), mat.wall); back.position.set((X0 + X1) / 2, 6, WALLZ); scene.add(back);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(X1 - X0, 40), new THREE.MeshStandardMaterial({ color: 0x03101A, roughness: 1 }));
  ceil.rotation.x = Math.PI / 2; ceil.position.set((X0 + X1) / 2, 9.4, 6); scene.add(ceil);
  [X0, X1].forEach((x, s) => { const w = new THREE.Mesh(new THREE.PlaneGeometry(40, 12), mat.wall); w.rotation.y = s ? -Math.PI / 2 : Math.PI / 2; w.position.set(x, 6, 6); scene.add(w); });
  // plinthe lumineuse le long du mur du fond
  add(new THREE.Mesh(new THREE.BoxGeometry(X1 - X0, .05, .05), mat.strip), [(X0 + X1) / 2, .03, WALLZ + .05]);

  const colGeo = new THREE.CylinderGeometry(.3, .34, 6.3, 24), baseGeo = new THREE.BoxGeometry(.95, .32, .95), capGeo = new THREE.BoxGeometry(.9, .26, .9);
  const archGeo = new THREE.TorusGeometry(2.85, .14, 10, 40, Math.PI);
  for (let k = 0; k < NST; k++) {
    const x = XK(k);
    // niche en arc derrière l'œuvre
    const sh = new THREE.Shape(); sh.moveTo(-2.3, 0); sh.lineTo(2.3, 0); sh.lineTo(2.3, 5.2); sh.absarc(0, 5.2, 2.3, 0, Math.PI, false); sh.lineTo(-2.3, 0);
    const niche = new THREE.Mesh(new THREE.ShapeGeometry(sh, 24), mat.niche); niche.position.set(x, 0, WALLZ + .02); scene.add(niche);
    const edge = new THREE.Line(new THREE.BufferGeometry().setFromPoints(sh.getPoints(40).map((p) => new THREE.Vector3(p.x, p.y, 0))),
      new THREE.LineBasicMaterial({ color: C.green, transparent: true, opacity: .55 }));
    edge.position.set(x, 0, WALLZ + .04); scene.add(edge);
    // colonnes et arche
    [-3, 3].forEach((dx) => {
      add(new THREE.Mesh(colGeo, mat.column), [x + dx, 3.47, -5.6], { shadow: true });
      add(new THREE.Mesh(baseGeo, mat.stone), [x + dx, .16, -5.6]);
      add(new THREE.Mesh(capGeo, mat.stone), [x + dx, 6.75, -5.6]);
    });
    const arch = new THREE.Mesh(archGeo, mat.column); arch.position.set(x, 6.85, -5.6); scene.add(arch);
    // colonnes intermédiaires entre deux salles
    if (k < NST - 1) add(new THREE.Mesh(colGeo, mat.column), [x + SP / 2, 3.47, -7.6]);
    // bannière
    const label = k === 0 ? 'Kelthen Museum' : k === NST - 1 ? '· · ·' : projects[k - 1].name;
    const num = k === 0 ? 'EST. 2025' : k === NST - 1 ? 'NO. ' + String(k).padStart(3, '0') : 'NO. ' + projects[k - 1].id;
    const bt = bannerTex(num, label); banners.push(bt);
    const bn = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 3.1), new THREE.MeshStandardMaterial({ map: bt, transparent: true, roughness: .8, emissive: 0x03785B, emissiveIntensity: .12 }));
    bn.position.set(x, 5.25, WALLZ + .1); scene.add(bn);
    // projecteur au plafond
    const sp = new THREE.SpotLight(0xDCEBF3, k === NST - 1 ? 3.2 : 2.6, 16, .36, .65, 1.2);
    sp.position.set(x, 8.9, 3.2); sp.target.position.set(x, 1.6, 0); scene.add(sp); scene.add(sp.target);
    sp.userData.k = k; spots.push(sp);
    const glowG = new THREE.PointLight(C.green, .6, 4.5, 2); glowG.position.set(x, .45, 1.4); scene.add(glowG);
  }

  /* Socles, cordons, sculptures */
  function plinth(x, w, h, d) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat.plinth); body.position.y = h / 2; body.castShadow = body.receiveShadow = true; g.add(body);
    const slab = new THREE.Mesh(new THREE.BoxGeometry(w + .04, .06, d + .04), mat.slab); slab.position.y = h + .03; g.add(slab);
    [[.04, .04], [h - .08, .03]].forEach(([y, s]) => { const st = new THREE.Mesh(new THREE.BoxGeometry(w + .03, s, d + .03), mat.strip); st.position.y = y; g.add(st); });
    g.position.x = x; return g;
  }
  function rope(x, z, span) {
    const g = new THREE.Group();
    const post = new THREE.CylinderGeometry(.035, .05, .92, 12), knob = new THREE.SphereGeometry(.065, 16, 12), foot = new THREE.CylinderGeometry(.16, .18, .04, 20);
    [-span / 2, span / 2].forEach((dx) => {
      const p = new THREE.Mesh(post, mat.brass); p.position.set(dx, .48, 0); g.add(p);
      const kn = new THREE.Mesh(knob, mat.brass); kn.position.set(dx, .96, 0); g.add(kn);
      const f = new THREE.Mesh(foot, mat.brass); f.position.set(dx, .02, 0); g.add(f);
    });
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(-span / 2, .9, 0), new THREE.Vector3(0, .5, 0), new THREE.Vector3(span / 2, .9, 0));
    g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, .028, 8, false), mat.rope));
    g.position.set(x, 0, z); return g;
  }
  function tag(mesh, idx) { mesh.traverse((o) => { if (o.isMesh) { o.userData.idx = idx; o.castShadow = true; } }); pickables.push(mesh); return mesh; }
  // place un objet dans la scène et son reflet ; anim reçoit (obj, t)
  function exhibit(build, anim) {
    const a = build(), b = build();
    scene.add(a); mirrorRoot.add(b);
    if (anim) { anims.push((t) => anim(a, t)); anims.push((t) => anim(b, t)); }
    return a;
  }

  // Logomark exact (tracés du guideline) extrudé
  const LOGO = [[[.2698, .7671], [0, .7671], [.3235, .2348], [.5876, .2434]], [[.7346, .5324], [1.0499, 1], [.7735, 1], [.602, .7457], [.4616, .5374], [.5941, .3242], [.7957, 0], [1.0655, 0]]];
  function logoMesh(size, depth, matBar, matChev) {
    const g = new THREE.Group();
    LOGO.forEach((poly, i) => {
      const s = new THREE.Shape(); poly.forEach(([x, y], j) => { const X = (x - .533) * size, Y = (.5 - y) * size; j ? s.lineTo(X, Y) : s.moveTo(X, Y); });
      const geo = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: depth * .12, bevelSize: size * .012, bevelSegments: 3 });
      geo.translate(0, 0, -depth / 2);
      g.add(new THREE.Mesh(geo, i ? matChev : matBar));
    });
    return g;
  }


  // 0 · Rotonde : le K sur socle rond
  exhibit(() => {
    const g = new THREE.Group();
    const b1 = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.45, .42, 64), mat.stone); b1.position.y = .21; b1.receiveShadow = true; g.add(b1);
    const ring = canvasTex(2048, 128, (c, w, h) => {
      c.fillStyle = '#0E2F3F'; c.fillRect(0, 0, w, h);
      c.fillStyle = 'rgba(193,217,229,.85)'; c.font = `600 64px ${FONT}`; c.textBaseline = 'middle';
      const txt = 'THE KELTHEN MUSEUM   ·   EVERY PROJECT, A WORK OF ART   ·   '; let x = 0;
      while (x < w) { c.fillText(txt, x, h / 2 + 4); x += c.measureText(txt).width; }
    });
    const b2 = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.6, .78, 64, 1, true), new THREE.MeshStandardMaterial({ map: ring, roughness: .6 }));
    b2.position.y = .42 + .39; g.add(b2);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.62, 1.62, .06, 64), mat.slab); cap.position.y = 1.23; g.add(cap);
    const st1 = new THREE.Mesh(new THREE.TorusGeometry(2.4, .025, 8, 96), mat.strip); st1.rotation.x = Math.PI / 2; st1.position.y = .44; g.add(st1);
    const k = logoMesh(1.9, .3, mat.paleGloss, mat.greenGloss); k.position.y = 2.35; k.name = 'spin'; g.add(k);
    g.position.x = XK(0); return tag(g, -1);
  }, (g, t) => { const k = g.getObjectByName('spin'); k.rotation.y = Math.sin(t * .35) * .55; k.position.y = 2.35 + Math.sin(t * .8) * .06; });

  /* ─────────────── Œuvres = le vrai logo de chaque client, encadré ───────────────
     On ne met plus de formes abstraites au hasard : chaque socle porte l'identité
     réelle du projet (logo tiré de son dépôt quand il existe, sinon une plaque
     typographique dans les couleurs de la marque). */
  const LOGOS = {
    '001': { img: 'assets/work/logos/nbw.png' },                              // logo réel (dépôt Network4BWomen)
    '002': { text: 'ABO', tag: 'MARKETPLACE · WEST AFRICA', color: '#2FB39B' }, // plaque typo (couleur ABO)
    '003': { text: 'Cuties Chichi', tag: 'SALON · OTTAWA', color: '#E88AAF', script: true },
    '004': { kelthen: true }                                                   // logo Kelthen (K + KELTHEN)
  };
  function paintPlate(g, w, h, spec) {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#0A2430'); gr.addColorStop(1, '#04141C');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.textAlign = 'center'; g.textBaseline = 'middle';
    if (spec.kelthen) {
      const s = h * 0.52, cx = w * 0.5, cy = h * 0.40;
      const poly = (pts, color) => { g.fillStyle = color; g.beginPath(); pts.forEach(([px, py], j) => { const X = cx + (px - 0.533) * s, Y = cy + (py - 0.5) * s; j ? g.lineTo(X, Y) : g.moveTo(X, Y); }); g.closePath(); g.fill(); };
      poly(LOGO[0], '#C1D9E5'); poly(LOGO[1], '#03785B');
      g.fillStyle = '#F0EDE8'; g.font = `600 ${Math.round(h * 0.135)}px ${FONT}`; g.fillText('KELTHEN', w / 2, h * 0.82);
    } else if (spec.text) {
      g.fillStyle = spec.color || '#C1D9E5';
      const fam = spec.script ? '"Snell Roundhand","Brush Script MT",cursive' : FONT;
      g.font = `700 ${Math.round(h * (spec.script ? 0.30 : 0.24))}px ${fam}`;
      g.fillText(spec.text, w / 2, h * 0.44, w * 0.84);
      if (spec.tag) { g.fillStyle = 'rgba(193,217,229,.72)'; g.font = `500 ${Math.round(h * 0.066)}px ${MONO}`; g.fillText(spec.tag.split('').join(' '), w / 2, h * 0.72, w * 0.88); }
    }
  }
  function artworkTex(p) {
    const spec = LOGOS[p.id] || { text: p.name, color: '#C1D9E5' };
    const W = 1024, H = 512;
    const tex = canvasTex(W, H, (g, w, h) => paintPlate(g, w, h, spec));
    if (spec.img) {
      const im = new Image();
      im.onload = () => {
        tex.userData.draw = (g, w, h) => {
          const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#0A2430'); gr.addColorStop(1, '#04141C'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
          const pad = w * 0.11, aw = w - 2 * pad, ah = h - 2 * pad, ar = im.width / im.height;
          let dw = aw, dh = dw / ar; if (dh > ah) { dh = ah; dw = dh * ar; }
          g.drawImage(im, (w - dw) / 2, (h - dh) / 2, dw, dh);
        };
        redraw(tex);
      };
      im.onerror = () => {};
      im.src = spec.img;
    }
    return tex;
  }
  // cadre type tableau de musée : toile (logo) + baguette laiton + liseré vert
  function framedArt(p) {
    const grp = new THREE.Group();
    const W = 2.0, H = 1.0, fT = 0.1, fD = 0.12;
    const tex = artworkTex(p);
    const canvasMat = new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.55, roughness: 0.55, metalness: 0.05 });
    const panel = new THREE.Mesh(new THREE.BoxGeometry(W, H, 0.05), canvasMat); grp.add(panel);
    const liner = new THREE.Mesh(new THREE.BoxGeometry(W + 0.03, H + 0.03, 0.04), mat.strip); liner.position.z = -0.02; grp.add(liner);
    const bar = (bw, bh, bx, by) => { const m = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, fD), mat.brass); m.position.set(bx, by, 0.01); grp.add(m); };
    bar(W + fT * 2, fT, 0, H / 2 + fT / 2); bar(W + fT * 2, fT, 0, -(H / 2 + fT / 2));
    bar(fT, H + fT * 2, -(W / 2 + fT / 2), 0); bar(fT, H + fT * 2, W / 2 + fT / 2, 0);
    // petit cartel laiton sous le cadre
    const plate = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.16, 0.03), mat.brass); plate.position.set(0, -(H / 2 + fT + 0.16), 0.02); grp.add(plate);
    return grp;
  }

  projects.forEach((p, i) => {
    const k = i + 1, x = XK(k);
    exhibit(() => { const g = plinth(x, 1.5, TOPY, 1.5); g.add(rope(0, 1.55, 2.3)); return g; });
    exhibit(() => {
      const g = framedArt(p); const w = new THREE.Group(); w.add(g); g.name = 'art';
      w.position.set(x, TOPY + 1.25, 0); w.scale.setScalar(1.12); return tag(w, i);
    }, (w, t) => {
      const g = w.getObjectByName('art'); const ph = i * 1.7;
      g.position.y = Math.sin(t * 0.8 + ph) * 0.05;
      g.rotation.y = Math.sin(t * 0.32 + ph) * 0.2;   // léger balancement, pas de rotation complète
    });
  });

  // Dernier arrêt : socle vide, réservé
  const kF = NST - 1, xF = XK(kF);
  exhibit(() => { const g = plinth(xF, 1.5, TOPY, 1.5); g.add(rope(0, 1.55, 2.3)); return g; });
  rsvTex = canvasTex(1024, 256, () => {});
  drawReserved();
  const rsv = new THREE.Mesh(new THREE.PlaneGeometry(2.4, .6), new THREE.MeshBasicMaterial({ map: rsvTex, transparent: true, depthWrite: false }));
  rsv.position.set(xF, TOPY + .9, 0); scene.add(rsv);
  anims.push((t) => { rsv.position.y = TOPY + .9 + Math.sin(t * .9) * .05; });
  const halo = new THREE.Mesh(new THREE.CylinderGeometry(.72, .72, 2.2, 48, 1, true), new THREE.MeshBasicMaterial({ color: C.pale, transparent: true, opacity: .05, side: THREE.DoubleSide, depthWrite: false }));
  halo.position.set(xF, TOPY + 1.1, 0); scene.add(halo);

  // lumières d'ambiance
  scene.add(new THREE.HemisphereLight(0x3C6275, 0x020A10, .55));
  scene.add(new THREE.AmbientLight(0x0B2A38, .35));

  // poussière dans les faisceaux
  const dustN = innerWidth < 820 ? 260 : 600, dpos = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) { dpos[i * 3] = X0 + Math.random() * (X1 - X0); dpos[i * 3 + 1] = Math.random() * 8.5; dpos[i * 3 + 2] = -6 + Math.random() * 14; }
  const dgeo = new THREE.BufferGeometry(); dgeo.setAttribute('position', new THREE.BufferAttribute(dpos, 3));
  const dust = new THREE.Points(dgeo, new THREE.PointsMaterial({ color: C.pale, size: .035, transparent: true, opacity: .45, depthWrite: false }));
  scene.add(dust);
  anims.push((t) => { dust.position.y = Math.sin(t * .15) * .25; dust.rotation.y = Math.sin(t * .05) * .01; });

  /* ─────────────── Caméra : arrêts et trajet ─────────────── */
  let W = 1, H = 1, mobile = false;
  const stops = [];
  function computeStops() {
    for (let k = 0; k < NST; k++) {
      const x = XK(k);
      if (mobile) {
        stops[k] = k === 0 ? { cx: x, cy: 3.8, cz: 15.5, tx: x, ty: 1.0 } : { cx: x, cy: 2.6, cz: 7.2, tx: x, ty: 1.35 };
      } else {
        stops[k] = k === 0 ? { cx: x - 3.9, cy: 3.2, cz: 13.5, tx: x - 3.9, ty: 2.1 }
          : { cx: x + 1.45, cy: 2.3, cz: 6.2, tx: x + 1.45, ty: 1.95 };
      }
    }
  }
  function resize() {
    W = stage.clientWidth || innerWidth; H = stage.clientHeight || innerHeight;
    const wasMobile = mobile; mobile = W < 820;
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mobile ? 1.5 : 1.75));
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.fov = mobile ? 52 : 38; camera.updateProjectionMatrix();
    renderer.shadowMap.enabled = !mobile;
    spots.forEach((s) => { s.castShadow = !mobile; if (!mobile) { s.shadow.mapSize.set(1024, 1024); s.shadow.bias = -.0005; } });
    if (wasMobile !== mobile || !stops.length) computeStops();
  }

  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const ease = (x) => (x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const dwell = (t) => ease(clamp((t - .2) / .6, 0, 1));
  let sp = -1, mx = 0, my = 0, tmx = 0, tmy = 0;
  const look = new THREE.Vector3();
  function progress() { const r = root.getBoundingClientRect(), total = root.offsetHeight - H; return total > 0 ? clamp(-r.top / total, 0, 1) : 0; }
  function goToStop(k) { const total = root.offsetHeight - H; window.scrollTo({ top: root.getBoundingClientRect().top + scrollY + total * (k / (NST - 1)), behavior: 'smooth' }); }

  const clock = new THREE.Clock();
  function frame() {
    const t = clock.getElapsedTime();
    const p = progress();
    sp = sp < 0 ? p : sp + (p - sp) * .07;
    mx += (tmx - mx) * .05; my += (tmy - my) * .05;
    const seg = sp * (NST - 1), k = Math.min(NST - 2, Math.floor(seg)), f = dwell(seg - k);
    const A = stops[k], B = stops[k + 1]; if (!A || !B) return;
    const walk = Math.sin(f * Math.PI);
    camera.position.set(A.cx + (B.cx - A.cx) * f + mx * .45, A.cy + (B.cy - A.cy) * f + walk * 1.3 + my * .25, A.cz + (B.cz - A.cz) * f + walk * 4.2);
    look.set(A.tx + (B.tx - A.tx) * f + mx * .2, A.ty + (B.ty - A.ty) * f + walk * .4, 0);
    camera.lookAt(look);
    anims.forEach((fn) => fn(t));
    renderer.render(scene, camera);

    // interface
    heroEl.style.opacity = clamp(1 - seg * 3.2, 0, 1).toFixed(3);
    heroEl.style.visibility = seg > .33 ? 'hidden' : 'visible';
    panels.forEach((el, i) => {
      const o = clamp((.3 - Math.abs(seg - (i + 1))) / .12, 0, 1);
      el.style.opacity = o.toFixed(3); el.style.visibility = o < .02 ? 'hidden' : 'visible';
      el.style.transform = mobile ? `translateY(${(1 - o) * 16}px)` : `translate(${(1 - o) * 18}px,-50%)`;
    });
    const r = Math.round(seg);
    tabs.forEach((b, j) => b.classList.toggle('on', j === r));
    if (r !== lastTab) { lastTab = r; const b = tabs[r]; if (b && b.scrollIntoView && mobile) timeEl.scrollTo({ left: b.offsetLeft - 20, behavior: 'smooth' }); }
  }
  let lastTab = -1;

  /* ─────────────── Clic / survol des œuvres ─────────────── */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function pick(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pickables, true)[0];
    return hit ? hit.object.userData.idx : undefined;
  }
  canvas.addEventListener('click', (e) => { const i = pick(e); if (i != null && i >= 0) openCase(i); });
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const i = pick(e), on = i != null && i >= 0;
    cursorEl.classList.toggle('on', on); canvas.style.cursor = on ? 'pointer' : '';
    const r = stage.getBoundingClientRect(); cursorEl.style.left = (e.clientX - r.left) + 'px'; cursorEl.style.top = (e.clientY - r.top) + 'px';
  });
  canvas.addEventListener('pointerleave', () => cursorEl.classList.remove('on'));
  addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse') { tmx = e.clientX / W * 2 - 1; tmy = -(e.clientY / H * 2 - 1); } }, { passive: true });

  /* ─────────────── Boucle ─────────────── */
  let running = false, visible = true;
  function loop() { if (!running) return; requestAnimationFrame(loop); if (visible) frame(); }
  function start() { if (running) return; running = true; requestAnimationFrame(loop); }
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(root);
  addEventListener('resize', resize);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { banners.forEach(redraw); drawReserved(); });

  renderText();
  resize();
  frame();
  start();

  const qp = new URLSearchParams(location.search).get('p');
  const qi = qp ? projects.findIndex((pp) => pp.id === qp) : -1;
  if (qi >= 0) requestAnimationFrame(() => { const total = root.offsetHeight - H; window.scrollTo(0, root.getBoundingClientRect().top + scrollY + total * ((qi + 1) / (NST - 1))); sp = -1; });
})();
