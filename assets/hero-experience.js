/*
  KELTHEN — The Intelligence System
  Expérience scroll en 4 actes : Signal → Réseau → Perception → Noyau (+ éclatement vers les sections).
  Dépendance unique : three (npm i three).  Usage : const destroy = mountKelthenExperience(el, { THREE, lang:'en' })
*/
function mountKelthenExperience(container, opts = {}) {
  const THREE = opts.THREE || (typeof window !== "undefined" ? window.THREE : null);
  const cfg = Object.assign({ lang: "en", ctaHref: "#contact", secondaryHref: "#services", scrollLength: 520, showLangToggle: true, onLangChange: null }, opts);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Textes (EN principal, FR secondaire) ---------------- */
  const TXT = {
    en: {
      a1h: "Ideas are everywhere.", a1p: "Most never get built. Kelthen turns yours into systems that run.", hint: "Scroll to enter the system",
      a2h: "Everything connects.", a2p: "Leads, emails, bookings, payments. One network, working as one.",
      a3h: "It sees what you miss.", a3p: "AI agents that watch, answer and act, day and night.",
      a4h: "One hub. All your growth.", a4p: "Websites, automation and AI, engineered as one system by Kelthen.",
      cta: "Get a free audit", cta2: "Explore the system",
      prog: ["Signal", "Network", "Perception", "Core"],
      nodes: ["Leads", "Email", "Booking", "AI Agent", "Messages", "Sales", "Reports", "Insights"]
    },
    fr: {
      a1h: "Les idées sont partout.", a1p: "La plupart ne voient jamais le jour. Kelthen transforme les vôtres en systèmes qui tournent.", hint: "Faites défiler pour entrer dans le système",
      a2h: "Tout se connecte.", a2p: "Leads, emails, rendez-vous, paiements. Un seul réseau qui travaille d’un bloc.",
      a3h: "Il voit ce qui vous échappe.", a3p: "Des agents IA qui surveillent, répondent et agissent, jour et nuit.",
      a4h: "Un seul centre. Toute votre croissance.", a4p: "Sites, automatisations et IA, conçus comme un seul système par Kelthen.",
      cta: "Demander un audit gratuit", cta2: "Explorer le système",
      prog: ["Signal", "Réseau", "Perception", "Noyau"],
      nodes: ["Leads", "Emails", "Agenda", "Agent IA", "Messages", "Ventes", "Rapports", "Veille"]
    }
  };
  let lang = TXT[cfg.lang] ? cfg.lang : "en";

  /* ---------------- Logo officiel (tracés extraits du guideline) ---------------- */
  const MARK_SVG = `<svg class="kx-mark" viewBox="0 0 1066 1000" aria-hidden="true"><path fill="#C1D9E5" d="M269.8 767.1L0 767.1L323.5 234.8L587.6 243.4Z"/><path fill="#03785B" d="M734.6 532.4L1049.9 1000L773.5 1000L602 745.7L461.6 537.4L594.1 324.2L795.7 0L1065.5 0Z"/></svg>`;
  const G = {
    "K": "M 20.41 0 L 20.41 -19.23 L 79.83 -19.23 L 88.16 0 L 102.38 0 L 91.8 -25.97 L 102.38 -51.83 L 88.16 -51.83 L 79.83 -32.7 L 20.41 -32.7 L 20.41 -51.83 L 6.62 -51.83 L 6.62 0 Z",
    "E": "M 101.73 -19.23 L 101.73 -32.7 L 20.41 -32.7 L 20.41 -38.47 L 101.73 -38.47 L 101.73 -51.83 L 6.62 -51.83 L 6.62 0 L 101.73 0 L 101.73 -13.36 L 20.41 -13.36 L 20.41 -19.23 Z",
    "L": "M 20.41 -51.83 L 6.62 -51.83 L 6.62 0 L 101.73 0 L 101.73 -13.36 L 20.41 -13.36 Z",
    "T": "M 6.62 -38.47 L 47.12 -38.47 L 47.12 0 L 61.02 0 L 61.02 -38.47 L 101.73 -38.47 L 101.73 -51.83 L 6.62 -51.83 Z",
    "H": "M 20.41 -51.83 L 6.62 -51.83 L 6.62 0 L 20.41 0 L 20.41 -19.23 L 87.84 -19.23 L 87.84 0 L 101.73 0 L 101.73 -51.83 L 87.84 -51.83 L 87.84 -32.7 L 20.41 -32.7 Z",
    "N": "M 20.41 -38.47 L 20.41 0 L 6.62 0 L 6.62 -51.83 L 89.88 -51.83 C 91.36 -51.83 92.82 -51.55 94.25 -51.02 C 95.68 -50.48 96.94 -49.7 98.05 -48.67 C 99.15 -47.64 100.04 -46.38 100.72 -44.88 C 101.39 -43.38 101.73 -41.68 101.73 -39.75 L 101.73 0 L 87.84 0 L 87.84 -35.16 C 87.84 -36.16 87.59 -36.96 87.09 -37.56 C 86.59 -38.16 85.99 -38.47 85.28 -38.47 Z"
  };
  const X = [0.0, 104.828, 210.618, 280.931, 386.721, 492.511, 598.301];
  const WORD = ["K", "E", "L", "T", "H", "E", "N"].map((c, i) => `<path transform="translate(${X[i]} 0)" d="${G[c]}"/>`).join("");
  const WORD_SVG = `<svg class="kx-word" viewBox="4 -54 700 56" role="img" aria-label="Kelthen"><g fill="#FFFFFF">${WORD}</g></svg>`;
  const AR = 1.0655;
  const LOGO = [[[.2698, .7671], [0, .7671], [.3235, .2348], [.5876, .2434]], [[.7346, .5324], [1.0499, 1], [.7735, 1], [.602, .7457], [.4616, .5374], [.5941, .3242], [.7957, 0], [1.0655, 0]]];

  /* ---------------- CSS (injecté une fois) ---------------- */
  if (!document.getElementById("kx-style")) {
    const st = document.createElement("style"); st.id = "kx-style";
    st.textContent = `
.kx{position:relative;background:#000;color:#fff;font-family:var(--kx-font,"GT America","Inter Tight","Helvetica Neue",Arial,sans-serif)}
.kx-stage{position:sticky;top:0;height:100vh;height:100dvh;overflow:hidden;background:radial-gradient(80% 90% at 60% 45%,#02303A 0%,#011E2E 45%,#000 100%)}
.kx canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.kx-shade{position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(1,20,31,.78),rgba(1,20,31,.25) 45%,transparent 65%)}
.kx-mark,.kx-word{position:absolute;left:0;top:0;opacity:0;pointer-events:none;will-change:transform,opacity}
.kx-mark{filter:drop-shadow(0 0 30px rgba(3,120,91,.6))}
.kx-flash{position:absolute;inset:0;pointer-events:none;opacity:0;background:radial-gradient(circle at 50% 50%,rgba(228,240,245,.95),rgba(3,120,91,.55) 30%,transparent 68%)}
.kx-act{position:absolute;left:clamp(20px,5vw,72px);right:clamp(20px,5vw,72px);bottom:14vh;max-width:640px;opacity:0;pointer-events:none;will-change:opacity,transform}
.kx-act.on{pointer-events:auto}
.kx-act h1,.kx-act h2{font-size:clamp(2.5rem,6vw,5.6rem);line-height:.95;letter-spacing:-.045em;font-weight:700;margin:0}
.kx-act p{margin:22px 0 0;max-width:36ch;font-size:clamp(1rem,1.3vw,1.18rem);line-height:1.55;color:rgba(193,217,229,.86)}
.kx-hint{margin-top:34px;display:flex;align-items:center;gap:12px;font-size:.85rem;color:rgba(193,217,229,.75)}
.kx-hint i{width:1px;height:38px;background:linear-gradient(#C1D9E5,transparent);transform-origin:top;animation:kxd 1.8s ease-in-out infinite}
@keyframes kxd{0%{transform:scaleY(0)}50%{transform:scaleY(1)}100%{transform:scaleY(1);opacity:0}}
.kx-core{left:50%;right:auto;bottom:auto;text-align:center;max-width:760px;width:calc(100% - 40px)}
.kx-core h2{font-size:clamp(2.3rem,5.4vw,4.8rem)}
.kx-core p{margin-left:auto;margin-right:auto}
.kx-ctas{margin-top:26px;display:flex;gap:14px 22px;justify-content:center;flex-wrap:wrap;align-items:center}
.kx-btn{background:#03785B;color:#fff;text-decoration:none;font-weight:600;padding:15px 26px;border-radius:12px;box-shadow:0 10px 40px -10px rgba(3,120,91,.9);transition:filter .2s,transform .2s}
.kx-btn:hover{filter:brightness(1.12);transform:translateY(-1px)}
.kx-link{color:#fff;font-weight:500;text-underline-offset:6px;text-decoration-color:rgba(193,217,229,.35)}
.kx-lang{position:absolute;top:calc(env(safe-area-inset-top,0px) + var(--kx-top,20px));right:clamp(20px,5vw,72px);display:flex;border:1px solid rgba(193,217,229,.25);border-radius:999px;padding:3px;z-index:5;background:rgba(1,30,46,.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.kx-lang button{all:unset;cursor:pointer;font-size:.78rem;font-weight:600;padding:6px 11px;border-radius:999px;color:rgba(193,217,229,.8)}
.kx-lang button[aria-pressed="true"]{background:#C1D9E5;color:#011E2E}
.kx-prog{position:absolute;right:clamp(14px,3vw,40px);top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:18px;z-index:2}
.kx-prog span{display:flex;align-items:center;gap:10px;justify-content:flex-end;font-size:.72rem;color:rgba(193,217,229,.45);transition:color .4s}
.kx-prog span::after{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;transition:transform .4s}
.kx-prog span.on{color:#fff}.kx-prog span.on::after{transform:scale(1.6);background:#03785B}
.kx :focus-visible{outline:2px solid #C1D9E5;outline-offset:3px;border-radius:8px}
@media (max-width:760px){.kx-shade{background:linear-gradient(0deg,rgba(1,20,31,.92),rgba(1,20,31,.3) 45%,transparent 70%)}.kx-act{bottom:9vh}.kx-prog b{display:none}.kx-prog{right:10px}}`;
    document.head.appendChild(st);
  }

  /* ---------------- DOM ---------------- */
  const root = document.createElement("section");
  root.className = "kx"; root.setAttribute("aria-label", "Kelthen");
  root.style.height = (reduce ? 100 : cfg.scrollLength) + "vh";
  root.innerHTML = `<div class="kx-stage">
    <canvas class="kx-gl" aria-hidden="true"></canvas>
    <div class="kx-shade"></div>
    <canvas class="kx-hub" aria-hidden="true"></canvas>
    ${MARK_SVG}${WORD_SVG}
    <div class="kx-flash"></div>
    ${cfg.showLangToggle ? `<div class="kx-lang" role="group" aria-label="Language"><button type="button" data-l="en">EN</button><button type="button" data-l="fr">FR</button></div>` : ""}
    <div class="kx-act" data-a="1"><h1 data-t="a1h"></h1><p data-t="a1p"></p><div class="kx-hint"><i></i><span data-t="hint"></span></div></div>
    <div class="kx-act" data-a="2"><h2 data-t="a2h"></h2><p data-t="a2p"></p></div>
    <div class="kx-act" data-a="3"><h2 data-t="a3h"></h2><p data-t="a3p"></p></div>
    <div class="kx-act kx-core" data-a="4"><h2 data-t="a4h"></h2><p data-t="a4p"></p>
      <div class="kx-ctas"><a class="kx-btn" href="${cfg.ctaHref}" data-t="cta"></a><a class="kx-link" href="${cfg.secondaryHref}" data-t="cta2"></a></div></div>
    <div class="kx-prog" aria-hidden="true"><span><b data-p="0"></b></span><span><b data-p="1"></b></span><span><b data-p="2"></b></span><span><b data-p="3"></b></span></div>
  </div>`;
  container.appendChild(root);
  const $ = (s) => root.querySelector(s);
  const acts = [...root.querySelectorAll(".kx-act")], dots = [...root.querySelectorAll(".kx-prog span")];
  const markEl = $(".kx-mark"), wordEl = $(".kx-word"), flashEl = $(".kx-flash"), shadeEl = $(".kx-shade"), coreEl = $(".kx-core");

  function setLang(l) {
    lang = TXT[l] ? l : "en";
    root.querySelectorAll("[data-t]").forEach((el) => (el.textContent = TXT[lang][el.dataset.t]));
    root.querySelectorAll("[data-p]").forEach((el) => (el.textContent = TXT[lang].prog[+el.dataset.p]));
    root.querySelectorAll(".kx-lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.l === lang));
    if (cfg.onLangChange) cfg.onLangChange(lang);
  }
  root.querySelectorAll(".kx-lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.l)));
  setLang(lang);
  try { window.__kxSetLang = setLang; } catch (e) {}

  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const sm = (x) => x * x * (3 - 2 * x);
  const ease = (x) => (x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

  /* Sans WebGL : logo + slogan fixes */
  const glCanvas = $(".kx-gl");
  let hasGL = false;
  try { const tc = document.createElement("canvas"); hasGL = !!THREE && !!(tc.getContext("webgl2") || tc.getContext("webgl")); } catch (e) { hasGL = false; }
  if (!hasGL) {
    root.style.height = "100vh";
    markEl.style.cssText += ";opacity:1;width:180px;height:169px;transform:translate(calc(50vw - 90px),18vh)";
    wordEl.style.cssText += ";opacity:1;width:300px;height:24px;transform:translate(calc(50vw - 150px),calc(18vh + 190px))";
    coreEl.style.cssText += ";opacity:1;pointer-events:auto;top:calc(18vh + 240px);transform:translateX(-50%)";
    return () => root.remove();
  }

  /* ---------------- Three.js ---------------- */
  let W = 1, H = 1, mobile = innerWidth < 760;
  const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, antialias: false, alpha: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, .1, 100);

  const N = mobile ? 14000 : 30000;
  const fab = new Float32Array(N * 3), net = new Float32Array(N * 3), eye = new Float32Array(N * 3), logo = new Float32Array(N * 3), rnd = new Float32Array(N * 4);
  const R = Math.random;

  // Échantillonnage exact du logomark
  const samp = (() => {
    const s = 420, c = document.createElement("canvas"); c.width = Math.ceil(s * AR); c.height = s;
    const g = c.getContext("2d");
    LOGO.forEach((poly, k) => { g.fillStyle = k ? "#0f0" : "#f00"; g.beginPath(); poly.forEach(([x, y], i) => (i ? g.lineTo(x * s, y * s) : g.moveTo(x * s, y * s))); g.closePath(); g.fill(); });
    const d = g.getImageData(0, 0, c.width, s).data, out = [];
    for (let y = 0; y < s; y += 2) for (let x = 0; x < c.width; x += 2) { const q = (y * c.width + x) * 4; if (d[q + 3] > 200) out.push([x / s, y / s, d[q] > d[q + 1] ? 0 : 1]); }
    return out;
  })();

  const NX = Math.round(Math.sqrt(N * 1.5)), NZ = Math.ceil(N / NX);
  const nSphere = Math.floor(N * .45), nDisk = Math.floor(N * .8);
  const beams = Array.from({ length: 40 }, () => { const a = R() * Math.PI * 2, r = 3.2 + R() * 5.5; return [Math.cos(a) * r, Math.sin(a) * r, .8 + R() * 3.2]; });

  for (let i = 0; i < N; i++) {
    const i3 = i * 3, i4 = i * 4;
    // Tissu
    const gx = i % NX, gz = Math.floor(i / NX);
    fab[i3] = -9 + 18 * gx / (NX - 1) + (R() - .5) * .03; fab[i3 + 1] = -6 + 12 * gz / (NZ - 1); fab[i3 + 2] = 0;
    // Réseau (globe + socle + colonnes)
    if (i < nSphere) {
      const y = 1 - 2 * (i + .5) / nSphere, rad = Math.sqrt(1 - y * y), th = i * 2.39996, Rr = 2.7 * (1 + (R() - .5) * .02);
      net[i3] = Math.cos(th) * rad * Rr; net[i3 + 1] = y * Rr; net[i3 + 2] = Math.sin(th) * rad * Rr;
    } else if (i < nDisk) {
      const a = R() * Math.PI * 2, rr = Math.round((3 + Math.pow(R(), .7) * 6) * 2) / 2 + (R() - .5) * .05;
      net[i3] = Math.cos(a) * rr; net[i3 + 1] = -2.9 + (R() - .5) * .04; net[i3 + 2] = Math.sin(a) * rr;
    } else {
      const b = beams[(R() * beams.length) | 0];
      net[i3] = b[0]; net[i3 + 1] = -2.9 + R() * b[2]; net[i3 + 2] = b[1];
    }
    // Œil
    const u = R(); let ep;
    if (u < .1) { ep = 0; eye[i3] = (R() - .5) * 14; eye[i3 + 1] = (R() - .5) * 8; eye[i3 + 2] = -R() * 3; }
    else if (u < .55) {
      ep = 1; const spoke = Math.floor(R() * 150), ang = spoke / 150 * Math.PI * 2 + (R() - .5) * .012;
      const rr = R() < .12 ? 1.82 + (R() - .5) * .05 : .62 + Math.pow(R(), .8) * 1.2;
      eye[i3] = Math.cos(ang) * rr; eye[i3 + 1] = Math.sin(ang) * rr; eye[i3 + 2] = 0;
    } else if (u < .8) { ep = 2; eye[i3] = (R() * 2 - 1) * 3.3; eye[i3 + 1] = R() < .5 ? 1 : -1; eye[i3 + 2] = 0; }
    else { ep = 3; const rad = R() < .5 ? 2.5 : 3.1, sg = Math.floor(R() * 12); eye[i3] = sg * Math.PI / 6 + R() * Math.PI / 9; eye[i3 + 1] = 0; eye[i3 + 2] = rad * (R() < .5 ? 1 : -1); }
    // Logo (38 % des particules) + poussière
    let lp;
    if (R() < .38) { const p = samp[(R() * samp.length) | 0]; lp = p[2]; logo[i3] = p[0] + R() * .004 - AR / 2; logo[i3 + 1] = -(p[1] + R() * .004 - .5); logo[i3 + 2] = (R() - .5) * .05; }
    else { lp = 2; const a = R() * Math.PI * 2, b = Math.acos(2 * R() - 1), rr = (5 + R() * 5) / 2.4; logo[i3] = Math.sin(b) * Math.cos(a) * rr; logo[i3 + 1] = Math.cos(b) * rr * .6; logo[i3 + 2] = Math.sin(b) * Math.sin(a) * rr - 2; }
    rnd[i4] = R(); rnd[i4 + 1] = R(); rnd[i4 + 2] = lp; rnd[i4 + 3] = ep;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(fab, 3));
  geo.setAttribute("aFabric", new THREE.Float32BufferAttribute(fab, 3));
  geo.setAttribute("aNet", new THREE.Float32BufferAttribute(net, 3));
  geo.setAttribute("aEye", new THREE.Float32BufferAttribute(eye, 3));
  geo.setAttribute("aLogo", new THREE.Float32BufferAttribute(logo, 3));
  geo.setAttribute("aRand", new THREE.Float32BufferAttribute(rnd, 4));

  const U = {
    uT: { value: 0 }, uStage: { value: 0 }, uPR: { value: 1 }, uOpen: { value: .15 }, uNetRot: { value: 0 },
    uLogoS: { value: 2.4 }, uLogoY: { value: 1.1 }, uExplode: { value: 0 }, uAspect: { value: 1 }, uEyeK: { value: 1 }, uMouse: { value: new THREE.Vector2(9, 9) }
  };
  const mat = new THREE.ShaderMaterial({
    uniforms: U, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `
uniform float uT; uniform float uStage; uniform float uPR; uniform float uOpen; uniform float uNetRot;
uniform float uLogoS; uniform float uLogoY; uniform float uExplode; uniform float uAspect; uniform float uEyeK; uniform vec2 uMouse;
attribute vec3 aFabric; attribute vec3 aNet; attribute vec3 aEye; attribute vec3 aLogo; attribute vec4 aRand;
varying vec3 vCol; varying float vA;
float wave(vec2 p,float t){return .35*sin(p.x*.9+t*.55+p.y*.7)+.22*sin(p.y*1.3-t*.45+p.x*.4)+.08*sin((p.x+p.y)*2.3+t*.9);}
vec3 pal(float b){
  vec3 c0=vec3(.04,.2,.26); vec3 c1=vec3(.012,.47,.36); vec3 c2=vec3(.18,.71,.55); vec3 c3=vec3(.76,.85,.9);
  if(b<.4) return mix(c0,c1,b/.4);
  if(b<.75) return mix(c1,c2,(b-.4)/.35);
  return mix(c2,c3,clamp((b-.75)/.25,0.,1.));
}
float seg(float s,float k,float r){return smoothstep(0.,1.,clamp((s-k)*1.25-r*.25,0.,1.));}
void main(){
  float r1=aRand.x; float r2=aRand.y; float lp=aRand.z; float ep=aRand.w;
  vec2 fp=aFabric.xy; float wy=wave(fp,uT);
  vec3 F=vec3(fp.x,wy-1.2,fp.y);
  float ca=cos(-.45); float sa=sin(-.45);
  F=vec3(F.x*ca-F.z*sa,F.y,F.x*sa+F.z*ca);
  float sh=(wave(fp+vec2(.05,0.),uT)-wy)/.05;
  float sx=(fp.x-(mod(uT*1.6,22.)-11.))*.9; float sig=exp(-sx*sx);
  float fb=clamp(.22+max(sh,0.)*.8,0.,1.);
  vec3 FC=pal(fb*.85)+vec3(.05,.55,.4)*sig; float FA=.7+sig*.3;
  float c=cos(uNetRot); float s=sin(uNetRot);
  vec3 NP=vec3(c*aNet.x+s*aNet.z,aNet.y,-s*aNet.x+c*aNet.z);
  vec3 NC=pal(.5+.5*r2); float NA=.55;
  vec3 E=aEye; float EA=.75; vec3 EC=pal(.55+.4*r2);
  float L=3.3; float h=uOpen*1.45;
  if(ep>.5&&ep<1.5){
    E.xy+=uMouse*vec2(.5,.3)*step(abs(uMouse.x),2.);
    float q=E.x/L; float lim=h*(1.-q*q);
    EA=.75*(1.-smoothstep(lim-.15,lim,abs(E.y)));
    EC=mix(vec3(.012,.5,.38),vec3(.8,.9,.93),r2*r2*r2);
  } else if(ep>1.5&&ep<2.5){
    float q=aEye.x/L;
    E=vec3(aEye.x,aEye.y*h*(1.-q*q)+(r2-.5)*.07,0.);
    EC=vec3(.76,.85,.9); EA=.8;
  } else if(ep>2.5){
    float ang=aEye.x+uT*(aEye.z>0.?.12:-.08); float rr=abs(aEye.z);
    E=vec3(cos(ang)*rr,sin(ang)*rr*.62,-.4);
    EC=vec3(.5,.75,.72); EA=.45;
  }
  E*=uEyeK;
  vec3 LG=aLogo*uLogoS+vec3(0.,uLogoY,0.);
  vec3 LC=lp<.5?vec3(.76,.85,.9):(lp<1.5?vec3(.02,.56,.42):pal(.3+.4*r2));
  float LA=lp<1.5?.32:.2;
  float w1=seg(uStage,0.,r1); float w2=seg(uStage,1.,r1);
  float w3=clamp((uStage-2.)*1.1-r1*.1,0.,1.);
  vec3 P=mix(F,NP,w1); vec3 C=mix(FC,NC,w1); float A=mix(FA,NA,w1);
  P=mix(P,E,w2); C=mix(C,EC,w2); A=mix(A,EA,w2);
  vec3 ctr=vec3(0.);
  float d1=smoothstep(0.,.5,w3); float d2=smoothstep(.5,1.,w3);
  P=mix(P,ctr+(P-ctr)*.03,d1); P=mix(P,LG,d2);
  C=mix(C,vec3(.85,1.,.95),d1*(1.-d2)); C=mix(C,LC,d2); A=mix(A,LA,d2);
  vec3 dir=normalize(vec3(r1-.5,r2-.5,fract(r1*7.31+r2*3.7)-.5)+vec3(.001));
  P+=dir*uExplode*uExplode*16.; A*=1.-uExplode*.9;
  P+=vec3(sin(uT*1.3+r1*40.),cos(uT*1.1+r2*30.),0.)*.012;
  vec4 mv=modelViewMatrix*vec4(P,1.);
  gl_Position=projectionMatrix*mv;
  vec2 nd=gl_Position.xy/gl_Position.w;
  float md=length((nd-uMouse)*vec2(uAspect,1.));
  float glow=(1.-smoothstep(0.,.32,md))*(1.-w2);
  C+=glow*vec3(.3,.55,.45);
  float sz=(1.3+r2*1.5)*(1.+glow*1.1); sz=mix(sz,1.6,d2);
  gl_PointSize=sz*uPR*(9./max(-mv.z,.5));
  vCol=C; vA=A*clamp(1.25-(-mv.z-6.)/16.,.12,1.);
}`,
    fragmentShader: `
varying vec3 vCol; varying float vA;
void main(){ vec2 d=gl_PointCoord-vec2(.5); float r=length(d); if(r>.5) discard; float a=(1.-smoothstep(.1,.5,r))*vA; gl_FragColor=vec4(vCol,a); }`
  });
  const points = new THREE.Points(geo, mat); points.frustumCulled = false; scene.add(points);

  // Liens du réseau
  const nodeIdx = Array.from({ length: 220 }, (_, k) => Math.floor(k * nSphere / 220));
  const np = nodeIdx.map((i) => [net[i * 3], net[i * 3 + 1], net[i * 3 + 2]]);
  const segs = [];
  np.forEach((a, i) => {
    const d = np.map((b, j) => [j, (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2]).filter((x) => x[0] !== i).sort((x, y) => x[1] - y[1]);
    for (let k = 0; k < 2; k++) segs.push(...a, ...np[d[k][0]]);
  });
  for (let k = 0; k < 12; k++) { const a = k / 12 * Math.PI * 2, x = Math.cos(a) * 5.4, z = Math.sin(a) * 5.4, l = Math.hypot(x, -1.9, z); segs.push(x, -1.9, z, x / l * 2.7, -1.9 / l * 2.7, z / l * 2.7); }
  const lgeo = new THREE.BufferGeometry(); lgeo.setAttribute("position", new THREE.Float32BufferAttribute(segs, 3));
  const lmat = new THREE.LineBasicMaterial({ color: 0x1A9A74, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
  const lines = new THREE.LineSegments(lgeo, lmat); lines.frustumCulled = false; scene.add(lines);

  /* ---------------- Hub de services (2D, par-dessus) ---------------- */
  const hubCv = $(".kx-hub"), hctx = hubCv.getContext("2d");
  const circ = (cx, cy, r) => `M${cx + r} ${cy}a${r} ${r} 0 1 1 ${-2 * r} 0a${r} ${r} 0 1 1 ${2 * r} 0`;
  const ICONS = [
    circ(9, 8, 3) + "M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5M15.5 5.2a3 3 0 0 1 0 5.6M17.5 15c2 .6 3.5 2.4 3.5 5",
    "M3 6h18v12H3zM3 6l9 7 9-7",
    "M4 5h16v15H4zM4 10h16M8 3v4M16 3v4",
    "M6 9h12v10H6zM12 5v4M9.5 14h.01M14.5 14h.01M3 13v3M21 13v3" + circ(12, 4, 1),
    "M4 5h16v11H10l-5 4v-4H4z",
    "M3 4h3l2.2 11h10.6L21 8H7" + circ(9.5, 19, 1.2) + circ(17.5, 19, 1.2),
    "M4 20V11M10 20V5M16 20v-6M3 20h18",
    circ(11, 11, 6.5) + "M16 16l5 5"
  ].map((d) => new Path2D(d));
  let hubDrawn = false;
  function drawHub(t, hub, ex, cx, cy, ls, lw) {
    if (hubDrawn) { hctx.clearRect(0, 0, W, H); hubDrawn = false; }
    const out = 1 - ex; if (hub <= 0 || out <= 0) return; hubDrawn = true;
    const by = cy + ls * .62;
    for (let k = 0; k < 3; k++) {
      const pr = (t * .35 + k / 3) % 1;
      hctx.globalAlpha = hub * out * (1 - pr) * .7; hctx.strokeStyle = k % 2 ? "#C1D9E5" : "#1A9A74"; hctx.lineWidth = 1.3;
      hctx.beginPath(); hctx.ellipse(cx, by, lw * (.45 + pr * .7), ls * (.1 + pr * .16), 0, 0, Math.PI * 2); hctx.stroke();
    }
    const n = ICONS.length, Rx = mobile ? W * .4 : Math.min(ls * 1.9, W * .36), Ry = ls * .8, fall = ex * ex * H * .9;
    const P = [];
    for (let i = 0; i < n; i++) {
      const a = -Math.PI + i / (n - 1) * Math.PI + Math.sin(t * .2) * .04;
      P.push({ x: cx + Math.cos(a) * Rx, y: cy + Math.sin(a) * Ry + fall * (1 + i % 3 * .3), r: (mobile ? 15 : 22) * (.9 - .2 * Math.sin(a)), al: clamp(hub * 1.6 - i * .08, 0, 1) * out, i });
    }
    for (const p of P) {
      if (p.al <= 0) continue;
      const g = hctx.createLinearGradient(cx, cy, p.x, p.y); g.addColorStop(0, "rgba(3,120,91,0)"); g.addColorStop(.4, "rgba(26,154,116,.7)"); g.addColorStop(1, "rgba(193,217,229,.8)");
      hctx.globalAlpha = p.al * .8; hctx.strokeStyle = g; hctx.lineWidth = 1.1; hctx.beginPath(); hctx.moveTo(cx, cy); hctx.lineTo(p.x, p.y); hctx.stroke();
      for (let k = 0; k < 2; k++) {
        let f = (t * .45 + p.i * .37 + k * .5) % 1; if (p.i % 2) f = 1 - f;
        hctx.globalAlpha = p.al * Math.sin(f * Math.PI); hctx.fillStyle = "#E4F0F5";
        hctx.beginPath(); hctx.arc(cx + (p.x - cx) * f, cy + (p.y - cy) * f, 2.2, 0, Math.PI * 2); hctx.fill();
      }
    }
    for (const p of P) {
      if (p.al <= 0) continue;
      const { x, y, r } = p, rr = r * (1 + .25 * (1 - ease(p.al)));
      hctx.globalAlpha = p.al; hctx.lineWidth = 1.1;
      hctx.strokeStyle = "rgba(193,217,229,.55)"; hctx.beginPath(); hctx.ellipse(x, y + r * 1.05, r * 1.35, r * .36, 0, 0, Math.PI * 2); hctx.stroke();
      hctx.strokeStyle = "rgba(26,154,116,.9)"; hctx.beginPath(); hctx.ellipse(x, y + r * 1.05, r * .95, r * .25, 0, 0, Math.PI * 2); hctx.stroke();
      const g = hctx.createRadialGradient(x - rr * .35, y - rr * .4, rr * .05, x, y, rr);
      g.addColorStop(0, "rgba(228,240,245,.45)"); g.addColorStop(.55, "rgba(3,120,91,.22)"); g.addColorStop(1, "rgba(193,217,229,.4)");
      hctx.fillStyle = g; hctx.beginPath(); hctx.arc(x, y, rr, 0, Math.PI * 2); hctx.fill();
      hctx.strokeStyle = "rgba(193,217,229,.6)"; hctx.stroke();
      hctx.save(); hctx.translate(x - rr * .5, y - rr * .5); hctx.scale(rr / 24, rr / 24);
      hctx.strokeStyle = "#F4FAFC"; hctx.lineWidth = 1.7; hctx.lineCap = "round"; hctx.lineJoin = "round"; hctx.stroke(ICONS[p.i]); hctx.restore();
      if (!mobile) { hctx.font = '500 12.5px "Inter Tight",sans-serif'; hctx.textAlign = "center"; hctx.fillStyle = "rgba(193,217,229,.9)"; hctx.fillText(TXT[lang].nodes[p.i], x, y + r * 2.05); }
    }
    hctx.globalAlpha = 1;
  }

  /* ---------------- Taille, souris, visibilité ---------------- */
  function resize() {
    W = root.clientWidth; H = innerHeight; mobile = W < 760;
    const pr = Math.min(devicePixelRatio || 1, mobile ? 1.5 : 2);
    renderer.setPixelRatio(pr); renderer.setSize(W, H, false);
    hubCv.width = Math.round(W * pr); hubCv.height = Math.round(H * pr); hctx.setTransform(pr, 0, 0, pr, 0, 0); hubDrawn = false;
    camera.aspect = W / H; camera.updateProjectionMatrix();
    U.uPR.value = pr; U.uAspect.value = W / H;
    const visW = 2 * 10 * Math.tan(22.5 * Math.PI / 180) * camera.aspect;
    U.uLogoS.value = 2.4 * Math.min(1, visW * .55 / (2.4 * AR));
    U.uLogoY.value = mobile ? 1.25 : 1.1;
    U.uEyeK.value = mobile ? 0.68 : 1;
    if (reduce) render(performance.now());
  }
  const mouse = { x: 9, y: 9, tx: 9, ty: 9 };
  const onMove = (e) => { mouse.tx = e.clientX / W * 2 - 1; mouse.ty = -(e.clientY / H) * 2 + 1; };
  const onLeave = () => { mouse.tx = 9; mouse.ty = 9; };
  addEventListener("pointermove", onMove, { passive: true });
  document.addEventListener("pointerleave", onLeave);
  addEventListener("resize", resize);
  let visible = true;
  const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting)); io.observe(root);

  /* ---------------- Timeline du scroll ---------------- */
  const KEYS = [[0, 0], [.16, 0], [.28, 1], [.40, 1], [.52, 2], [.64, 2], [.78, 3], [1, 3]];
  const stageAt = (p) => { for (let i = 1; i < KEYS.length; i++) if (p <= KEYS[i][0]) { const [a, sa] = KEYS[i - 1], [b, sb] = KEYS[i]; return sa + (sb - sa) * sm((p - a) / (b - a || 1)); } return 3; };
  const win = (p, a, b, f = .035) => clamp(Math.min((p - (a - f)) / f, ((b + f) - p) / f), 0, 1);
  const CAM = [[1.6, 10, -1.2], [.5, 13, -.2], [0, 9.5, 0], [0, 10, 0]];
  const v = new THREE.Vector3();
  let sp = 0, raf = 0;

  function render(now) {
    const t = reduce ? 20 : now / 1000;
    const rect = root.getBoundingClientRect(), total = rect.height - H;
    const pRaw = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;
    sp += (pRaw - sp) * .075; if (reduce) sp = .86;
    const p = sp, stage = stageAt(p);
    mouse.x += (mouse.tx - mouse.x) * (Math.abs(mouse.tx) > 5 ? 1 : .08); mouse.y += (mouse.ty - mouse.y) * (Math.abs(mouse.ty) > 5 ? 1 : .08);
    const mx = Math.abs(mouse.x) > 5 ? 0 : mouse.x, my = Math.abs(mouse.y) > 5 ? 0 : mouse.y;

    U.uT.value = t; U.uStage.value = stage; U.uMouse.value.set(mouse.x, mouse.y);
    U.uOpen.value = .15 + .85 * sm(clamp((p - .5) / .1, 0, 1));
    U.uNetRot.value = t * .06 + p * 2;
    const ex = sm(clamp((p - .92) / .08, 0, 1)); U.uExplode.value = ex;
    lines.rotation.y = U.uNetRot.value; lmat.opacity = .5 * clamp(1 - Math.abs(stage - 1) * 1.6, 0, 1);

    const si = Math.min(2, Math.floor(stage)), f = sm(clamp(stage - si, 0, 1));
    let cy = CAM[si][0] + (CAM[si + 1][0] - CAM[si][0]) * f, cz = CAM[si][1] + (CAM[si + 1][1] - CAM[si][1]) * f, ly = CAM[si][2] + (CAM[si + 1][2] - CAM[si][2]) * f;
    if (stage > 2) { const w = stage - 2; cz -= 6 * sm(clamp(w / .5, 0, 1)) * (1 - sm(clamp((w - .5) / .06, 0, 1))); }
    const par = stage > 2.9 ? .15 : .35;
    camera.position.set(mx * par, cy + my * .2, cz); camera.lookAt(0, ly, 0);
    renderer.render(scene, camera);

    // Logo net + wordmark + textes du noyau
    const lY = U.uLogoY.value, lS = U.uLogoS.value;
    v.set(0, lY, 0).project(camera); const cx = (v.x + 1) / 2 * W, ccy = (1 - v.y) / 2 * H;
    v.set(0, lY + lS / 2, 0).project(camera); const top = (1 - v.y) / 2 * H;
    const mh = (ccy - top) * 2, mw = mh * AR;
    const la = clamp((stage - 2.92) / .08, 0, 1) * (1 - ex);
    markEl.style.width = mw + "px"; markEl.style.height = mh + "px";
    markEl.style.transform = `translate(${cx - mw / 2}px,${ccy - mh / 2}px)`; markEl.style.opacity = la * .95;
    const wh = mh * .13, ww = wh * 12.5, wy = ccy + mh / 2 + mh * .1;
    wordEl.style.width = ww + "px"; wordEl.style.height = wh + "px";
    wordEl.style.transform = `translate(${cx - ww / 2}px,${wy}px)`; wordEl.style.opacity = clamp((stage - 2.96) / .04, 0, 1) * (1 - ex);
    coreEl.style.top = (wy + wh + (mobile ? 26 : 34)) + "px";

    flashEl.style.opacity = .85 * Math.exp(-Math.pow((stage - 2.53) * 14, 2));
    shadeEl.style.opacity = 1 - clamp((stage - 2.6) / .4, 0, 1);

    const A = [clamp(1 - (p - .1) / .05, 0, 1), win(p, .3, .38), win(p, .55, .62), win(p, .81, .9)];
    acts.forEach((el, i) => {
      const o = reduce ? (i === 3 ? 1 : 0) : A[i];
      el.style.opacity = o; el.classList.toggle("on", o > .5);
      const dy = (1 - o) * 24;
      el.style.transform = i === 3 ? `translate(-50%,${dy}px)` : `translateY(${dy}px)`;
    });
    const cur = Math.round(stage); dots.forEach((d, i) => d.classList.toggle("on", i === cur));

    drawHub(t, reduce ? 1 : sm(clamp((p - .8) / .07, 0, 1)), ex, cx, ccy, mh, mw);
  }
  function loop(now) { raf = requestAnimationFrame(loop); if (visible) render(now); }
  resize();
  if (!reduce) raf = requestAnimationFrame(loop);

  /* ---------------- Nettoyage (React unmount) ---------------- */
  return function destroy() {
    cancelAnimationFrame(raf); io.disconnect();
    removeEventListener("pointermove", onMove); document.removeEventListener("pointerleave", onLeave); removeEventListener("resize", resize);
    geo.dispose(); mat.dispose(); lgeo.dispose(); lmat.dispose(); renderer.dispose();
    root.remove();
    try { if (window.__kxSetLang === setLang) window.__kxSetLang = null; } catch (e) {}
  };
}

(function () {
  const mount = document.getElementById("kx-root");
  if (!mount || typeof window.THREE === "undefined") return;
  const initLang = (window.__i18nLang && window.__i18nLang()) || "en";
  window.__kxDestroy = mountKelthenExperience(mount, {
    THREE: window.THREE, lang: initLang, ctaHref: "contact.html", secondaryHref: "#services", showLangToggle: false, scrollLength: 320
  });
})();
