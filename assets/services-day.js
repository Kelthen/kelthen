/* ════════════════════════════════════════════════════════════════════
   KELTHEN — AU RYTHME DU SOLEIL  (index.html, tout ce qui suit le hero)

   1. Ambiance selon l'heure réelle du visiteur : aube, jour, soir, nuit.
      Appliquée à tout ce qui suit le hero (le hero et le pied de page
      ne changent pas). Bouton soleil/lune dans le menu : auto, jour, nuit.
   2. « Une journée avec Kelthen » : la journée d'un client défile de
      gauche à droite au scroll, en partant de l'heure réelle. Le soleil
      suit son arc, puis la lune ; chaque moment montre un service et sa
      vraie démo (SERVICE_DEMOS de main.js).
   3. « Un seul système », puis « Qu'aimeriez-vous améliorer ? »,
      « Voici par où on commencerait », « Comment on travaille avec vous ».
   4. Les chiffres de l'accueil deviennent des faits vérifiables.

   Dépend de main.js. Sur contact.html : préremplit le message (?audit=).
   ════════════════════════════════════════════════════════════════════ */
(function kelthenSun() {
  'use strict';

  /* ─── Page contact : préremplir le message venu du diagnostic ─── */
  const msgField = document.getElementById('contactMessage');
  if (msgField) {
    const a = new URLSearchParams(location.search).get('audit');
    if (a && !msgField.value) msgField.value = a.slice(0, 1500);
    return;
  }
  const sec = document.getElementById('services');
  if (!sec) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canDemo = typeof SERVICE_DEMOS !== 'undefined' && typeof mkChatSim === 'function' && typeof playChatSim === 'function';
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  const getLang = () => { try { return (window.__i18nLang && window.__i18nLang()) || document.documentElement.lang || 'en'; } catch (e) { return 'en'; } };
  let lang = getLang() === 'fr' ? 'fr' : 'en';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const svcText = (n, k) => { const el = document.querySelector(`#services [data-i18n="svc${n}.${k}"]`); return el ? el.textContent.trim() : ''; };
  const fmtTime = (h) => { h = ((h % 24) + 24) % 24; const hh = Math.floor(h), mm = Math.round((h - hh) * 60); return `${hh}:${String(mm === 60 ? 0 : mm).padStart(2, '0')}`; };

  /* ═════════════ Textes ═════════════ */
  const T = {
    en: {
      greet: {
        dawn: ['Good morning.', 'Your day is starting, and we’re already at work.'],
        day: ['Hello.', 'While you’re with your clients, we take care of the rest.'],
        dusk: ['Good evening.', 'Your day is done. Ours keeps going, for you.'],
        night: ['Still up?', 'While you sleep, your clients can still book.']
      },
      now: 'It’s', dayTitle: 'Let us walk you through<br><em>a day with Kelthen.</em>',
      intro: 'Moment by moment, from now until tomorrow, here is an ordinary day for a business like yours. At each step, you’ll see what we do for you. Nothing technical on your end.',
      legend: ['Scroll down, at your own pace', 'The day moves forward, left to right, with the sun', 'Each moment shows one service at work'],
      agenda: 'Coming up in your day', hint: 'Let’s begin',
      sysHint: 'Tap a circle to see what it does for you.', see: 'See this moment',
      planTitle: 'Your plan, step by step', planEmpty: 'Your plan builds itself here as you tick.', today: 'Today', tomorrow: 'Tomorrow', pause: 'Pause', play: 'Play again', demo: 'Live example',
      sysEb: 'Everything works together', sysTitle: 'One system,<br><em>working for you.</em>',
      sysSub: 'Each step hands over to the next. We set it up, tune it with you, and look after it.',
      nodes: { 5: 'Google', 1: 'Website', 2: 'Booking', 4: 'Reminders', 6: 'Reviews', 3: 'Assistant' },
      gEb: 'Your turn', gTitle: 'What would you like<br><em>to improve first?</em>',
      gSub: 'Tick what speaks to you. There are no wrong answers, it simply helps us know where to start.',
      empty: 'Pick one or more wishes, and we’ll show you where we would start.',
      start: 'Here’s where we would start with you', plan: 'Suggested plan', from: 'from', together: 'We talk it through together, with no commitment.',
      cta: 'Get my free audit', wa: 'Talk about it on WhatsApp', note: 'Free. We reply within 24 hours.',
      msgHead: 'Hi Kelthen, I would like a free audit.', msgGoals: 'What I would like to improve:', msgPlan: 'Suggested plan:',
      wEb: 'How we work with you', wTitle: 'Simple, clear,<br><em>and at your pace.</em>',
      wLine: 'Nothing technical on your end. You talk directly to the people who build it.',
      steps: [
        ['A call to get to know you', '30 minutes, free. We listen to what you want, with no jargon and no pressure.'],
        ['A clear proposal', 'Within 48 h: a fixed price, what’s included, and when it will be ready. No surprises.'],
        ['We build, you follow along', 'A preview every week. You approve, we adjust.'],
        ['We stay after launch', 'Go-live, a quick walkthrough and ongoing support. A question? Just send a message.']
      ],
      facts: [['24/7', 'online booking, even at night'], ['2', 'automatic reminders before each appointment'], ['1 tap', 'to approve a booking'], ['< 24 h', 'to reply to you, promised']],
      factsNote: 'The first three come from the booking system we run for Cuties Chichi, live today.',
      mode: { auto: 'Ambience: follows the time of day', light: 'Ambience: day', dark: 'Ambience: night' }
    },
    fr: {
      greet: {
        dawn: ['Bonjour.', 'Votre journée commence, et nous sommes déjà au travail.'],
        day: ['Bonjour.', 'Pendant que vous êtes avec vos clients, on s’occupe du reste.'],
        dusk: ['Bonsoir.', 'Votre journée est finie. La nôtre continue, pour vous.'],
        night: ['Encore debout ?', 'Pendant que vous dormez, vos clients peuvent réserver.']
      },
      now: 'Il est', dayTitle: 'Laissez-nous vous présenter<br><em>une journée avec Kelthen.</em>',
      intro: 'Moment par moment, de maintenant jusqu’à demain, voici une journée ordinaire pour une entreprise comme la vôtre. À chaque étape, vous verrez ce qu’on fait pour vous. Rien de technique de votre côté.',
      legend: ['Faites défiler vers le bas, à votre rythme', 'La journée avance de gauche à droite, avec le soleil', 'Chaque moment montre un service à l’œuvre'],
      agenda: 'Au programme de votre journée', hint: 'On commence',
      sysHint: 'Touchez un cercle pour voir ce qu’il fait pour vous.', see: 'Voir ce moment',
      planTitle: 'Votre plan, étape par étape', planEmpty: 'Votre plan se construit ici, au fil de vos choix.', today: 'Aujourd’hui', tomorrow: 'Demain', pause: 'Pause', play: 'Rejouer', demo: 'Exemple réel',
      sysEb: 'Tout est relié', sysTitle: 'Un seul système,<br><em>qui travaille pour vous.</em>',
      sysSub: 'Chaque étape passe le relais à la suivante. On l’installe, on le règle avec vous, et on s’en occupe.',
      nodes: { 5: 'Google', 1: 'Site web', 2: 'Réservation', 4: 'Rappels', 6: 'Avis', 3: 'Assistante' },
      gEb: 'À vous', gTitle: 'Qu’aimeriez-vous<br><em>améliorer en premier ?</em>',
      gSub: 'Cochez ce qui vous parle. Il n’y a pas de mauvaise réponse : c’est simplement pour savoir par où commencer.',
      empty: 'Choisissez une ou plusieurs envies, on vous montre par où on commencerait.',
      start: 'Voici par où on commencerait avec vous', plan: 'Formule conseillée', from: 'à partir de', together: 'On en parle ensemble, sans engagement.',
      cta: 'Demander mon audit gratuit', wa: 'En parler sur WhatsApp', note: 'Gratuit. On vous répond en moins de 24 h.',
      msgHead: 'Bonjour Kelthen, je voudrais un audit gratuit.', msgGoals: 'Ce que j’aimerais améliorer :', msgPlan: 'Formule conseillée :',
      wEb: 'Comment on travaille avec vous', wTitle: 'Simple, clair,<br><em>et à votre rythme.</em>',
      wLine: 'Rien de technique de votre côté. Vous parlez directement aux personnes qui construisent.',
      steps: [
        ['Un appel pour se connaître', '30 minutes, gratuit. On écoute ce que vous voulez, sans jargon ni pression.'],
        ['Une proposition claire', 'Sous 48 h : un prix fixe, ce qui est inclus, et quand ce sera prêt. Pas de surprise.'],
        ['On construit, vous suivez', 'Un aperçu chaque semaine. Vous validez, on ajuste.'],
        ['On reste là après', 'Mise en ligne, prise en main et suivi. Une question ? Un message suffit.']
      ],
      facts: [['24/7', 'réservation en ligne, même la nuit'], ['2', 'rappels automatiques avant chaque rendez-vous'], ['1 tap', 'pour valider une réservation'], ['< 24 h', 'pour vous répondre, c’est promis']],
      factsNote: 'Les trois premiers viennent du système de réservation qu’on fait tourner pour Cuties Chichi, en ligne aujourd’hui.',
      mode: { auto: 'Ambiance : selon l’heure', light: 'Ambiance : jour', dark: 'Ambiance : nuit' }
    }
  };

  // Les moments de la journée (heure, service, démo)
  const SCENES = [
    { h: 7 + 40 / 60, svc: 5, demo: 'google',
      en: ['Someone is looking for what you do.', 'Close by, someone searches for a service like yours. They find you on Google and Maps, with your hours and your reviews.'],
      fr: ['Quelqu’un cherche ce que vous faites.', 'Tout près de chez vous, quelqu’un cherche un service comme le vôtre. Il vous trouve sur Google et Maps, avec vos horaires et vos avis.'] },
    { h: 9 + 15 / 60, svc: 1, demo: 'site',
      en: ['Your website puts them at ease.', 'Clear, fast and pleasant on a phone. They understand right away what you offer.'],
      fr: ['Votre site le met en confiance.', 'Clair, rapide et agréable sur téléphone. Il comprend tout de suite ce que vous proposez.'] },
    { h: 9 + 17 / 60, svc: 2, demo: 'booking',
      en: ['They book, calmly.', 'They pick a time and leave a deposit. You were with a client: it all happened without you.'],
      fr: ['Il réserve, tranquillement.', 'Il choisit un créneau et laisse un acompte. Vous étiez avec une cliente : tout s’est fait sans vous.'] },
    { h: 12, svc: 4, demo: 'reminders',
      en: ['The reminder goes out on its own.', 'Tomorrow’s client gets a short message. Nobody forgets, and you had nothing to do.'],
      fr: ['Le rappel part tout seul.', 'Votre cliente de demain reçoit un petit message. Personne n’oublie, et vous n’avez rien eu à faire.'] },
    { h: 15 + 30 / 60, svc: 6, demo: 'reviews',
      en: ['A happy client says so.', 'After their visit, they leave a Google review. A few weeks later, a kind note invites them back.'],
      fr: ['Un client content le dit.', 'Après sa visite, il laisse un avis sur Google. Quelques semaines plus tard, un petit mot l’invite à revenir.'] },
    { h: 22 + 30 / 60, svc: 3, demo: 'ai',
      en: ['You rest. We answer for you.', 'A message arrives on Instagram. Your assistant replies with your information and offers a time. You’ll read it all in the morning.'],
      fr: ['Vous vous reposez. On répond pour vous.', 'Un message arrive sur Instagram. Votre assistante répond avec vos informations et propose un créneau. Vous lirez tout demain matin.'] }
  ];

  // Envies (positives) → service → formule (d'après la page Tarifs)
  const GOALS = [
    { svc: 5, tier: 1, en: 'Be easier to find on Google', fr: 'Être trouvé plus facilement sur Google' },
    { svc: 1, tier: 1, en: 'A website that builds trust', fr: 'Un site qui donne confiance' },
    { svc: 2, tier: 2, en: 'Get bookings without picking up the phone', fr: 'Recevoir des réservations sans décrocher' },
    { svc: 4, tier: 2, en: 'Fewer forgotten appointments', fr: 'Moins de rendez-vous oubliés' },
    { svc: 6, tier: 3, en: 'Clients who come back and recommend me', fr: 'Des clients qui reviennent et me recommandent' },
    { svc: 3, tier: 3, en: 'Reply to everyone, even when I’m busy', fr: 'Répondre à tout le monde, même quand je suis occupé' }
  ];
  const PLANS = {
    en: { 1: ['The Essentials', '$900', 'Presence & visibility'], 2: ['The Business', '$2,500', 'Performance & automation'], 3: ['Custom', null, 'AI & growth solutions'] },
    fr: { 1: ['L’Essentiel', '900 $', 'Présence & visibilité'], 2: ['Le Business', '2 500 $', 'Performance & automatisation'], 3: ['Sur-Mesure', null, 'Solutions IA & croissance'] }
  };
  const QUOTE = { en: 'on quote', fr: 'sur devis' };
  const WA = '14185735199';

  /* ═════════════ 1. Ambiance selon l'heure ═════════════ */
  const periodOf = (h) => (h < 5 || h >= 21 ? 'night' : h < 9 ? 'dawn' : h < 17 ? 'day' : 'dusk');
  let mode = store.get('kelthen-ambience') || 'auto';
  const nowH = () => { const d = new Date(); return d.getHours() + d.getMinutes() / 60; };
  function ambience() {
    if (mode === 'light') return 'day';
    if (mode === 'dark') return 'night';
    let p = periodOf(nowH());
    if ((p === 'day' || p === 'dawn') && matchMedia('(prefers-color-scheme: dark)').matches) p = 'dusk';
    return p;
  }
  function applyAmbience() { document.documentElement.setAttribute('data-kt', ambience()); updateToggles(); }

  const css = `
.kt-zone{--kt-bg:#011E2E;--kt-surface:#062A3B;--kt-surface2:#04283A;--kt-ink:#F0EDE8;--kt-muted:rgba(240,237,232,.7);--kt-line:rgba(193,217,229,.14);--kt-em:#7CC9AE;--kt-chip:rgba(3,120,91,.12);--kt-kbar:#C1D9E5;
  --bg:var(--kt-bg);--white:var(--kt-ink);--white-muted:var(--kt-muted);--border:var(--kt-line);--blue-light:var(--kt-em);
  background:var(--kt-bg);color:var(--kt-ink);transition:background-color .8s ease,color .8s ease;position:relative}
html[data-kt="dusk"] .kt-zone{--kt-bg:#0E2E3E;--kt-surface:#133A4D;--kt-surface2:#0B2837}
html[data-kt="dawn"] .kt-zone,html[data-kt="day"] .kt-zone{--kt-ink:#011E2E;--kt-muted:rgba(1,30,46,.68);--kt-line:rgba(1,30,46,.12);--kt-em:#03785B;--kt-chip:rgba(3,120,91,.08);--kt-kbar:#011E2E;color-scheme:light}
html[data-kt="dawn"] .kt-zone{--kt-bg:#EAF2F5;--kt-surface:#FFFFFF;--kt-surface2:#DCE9EF}
html[data-kt="day"] .kt-zone{--kt-bg:#F5F9FA;--kt-surface:#FFFFFF;--kt-surface2:#E8F1F4}
.kt-zone::before{content:"";display:block;height:110px;background:linear-gradient(180deg,#010B12,var(--kt-bg));transition:background .8s}
.kt-zone .marquee-wrap{background:var(--kt-surface2);border-color:var(--kt-line)}
.kt-zone .marquee-item{color:var(--kt-muted)}
.kt-zone #solutions{background:var(--kt-surface2)}
.kt-zone .industry-card{background:var(--kt-surface)}
.kt-zone .numbers-strip,.kt-zone .num-card{background:var(--kt-surface2)}
.kt-zone .numbers-grid{background:var(--kt-line)}
.kt-zone .num-label{color:var(--kt-muted);line-height:1.6}
.kt-zone .num-val{font-weight:600;color:var(--kt-em)}
.kt-facts-note{margin:0;padding:18px 5vw 22px;text-align:center;font-size:.85rem;color:var(--kt-muted);background:var(--kt-surface2);border-bottom:1px solid var(--kt-line)}
.kt-toggle{all:unset;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;color:rgba(240,237,232,.8);border:1px solid rgba(193,217,229,.2);margin-right:14px;transition:border-color .2s,color .2s}
.kt-toggle:hover{color:#fff;border-color:rgba(193,217,229,.5)}
.kt-toggle:focus-visible{outline:2px solid #7CC9AE;outline-offset:2px}
.kt-toggle svg{width:17px;height:17px}
.nav-mobile .kt-toggle{margin:8px 0 0;width:44px;height:44px}

/* ── Une journée : de gauche à droite ── */
#services.kd-on{padding:0}
#services.kd-on>.services-header,#services.kd-on>.services-grid{display:none}
.kd{position:relative;height:calc(var(--kd-n,8) * 88vh)}
.kd-stage,.kd.static .kd-panel{--ink:#F0EDE8;--ink2:rgba(240,237,232,.74);--chip:rgba(255,255,255,.06);--chipline:rgba(193,217,229,.18)}
.kd-stage{position:sticky;top:0;height:100vh;overflow:hidden;--ink:#F0EDE8;--ink2:rgba(240,237,232,.74);--chip:rgba(255,255,255,.06);--chipline:rgba(193,217,229,.18);color:var(--ink)}
.kd-stage.is-light,.kd-panel.is-light{--ink:#011E2E;--ink2:rgba(1,30,46,.7);--chip:rgba(255,255,255,.55);--chipline:rgba(1,30,46,.12)}
.kd-sky{position:absolute;inset:0}
.kd-stars{position:absolute;inset:0;opacity:0;background-image:radial-gradient(1px 1px at 12% 22%,#C1D9E5 50%,transparent 51%),radial-gradient(1px 1px at 28% 12%,#C1D9E5 50%,transparent 51%),radial-gradient(1.5px 1.5px at 44% 30%,#fff 50%,transparent 51%),
  radial-gradient(1px 1px at 61% 16%,#C1D9E5 50%,transparent 51%),radial-gradient(1px 1px at 77% 26%,#C1D9E5 50%,transparent 51%),radial-gradient(1.5px 1.5px at 89% 10%,#fff 50%,transparent 51%),
  radial-gradient(1px 1px at 8% 36%,#C1D9E5 50%,transparent 51%),radial-gradient(1px 1px at 53% 7%,#fff 50%,transparent 51%),radial-gradient(1px 1px at 35% 40%,#C1D9E5 50%,transparent 51%),radial-gradient(1px 1px at 70% 38%,#fff 50%,transparent 51%)}
.kd-arc{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.kd-sun,.kd-moon{position:absolute;left:0;top:0;border-radius:50%;pointer-events:none;will-change:transform,opacity}
.kd-sun{width:26px;height:26px;margin:-13px 0 0 -13px;background:#FFFFFF;box-shadow:0 0 0 10px rgba(255,255,255,.18),0 0 80px 30px rgba(255,250,235,.5)}
.kd-moon{width:20px;height:20px;margin:-10px 0 0 -10px;background:#DCE8EE;box-shadow:0 0 0 7px rgba(193,217,229,.08),0 0 50px 14px rgba(193,217,229,.22)}
.kd-haze{position:absolute;left:0;right:0;bottom:0;height:40%;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(3,120,91,.08))}
.kd-top{position:absolute;left:0;right:0;top:84px;z-index:3;display:flex;justify-content:center;padding:0 16px}
.kd-line{position:relative;display:flex;width:100%;max-width:820px}
.kd-line::before,.kd-fill{content:"";position:absolute;left:calc(100% / var(--kd-n) / 2);right:calc(100% / var(--kd-n) / 2);top:6px;height:2px;border-radius:2px;background:var(--chipline)}
.kd-fill{right:auto;width:0;background:#03785B;transition:width .2s linear}
.kd-tick{all:unset;cursor:pointer;flex:1;position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:6px;font:500 10.5px var(--mono,monospace);letter-spacing:.06em;color:var(--ink2);opacity:.75;transition:opacity .3s}
.kd-tick i{width:14px;height:14px;border-radius:50%;background:var(--chip);border:2px solid var(--chipline);transition:background .3s,border-color .3s,transform .3s}
.kd-tick small{font-size:9px;letter-spacing:.1em;text-transform:uppercase;opacity:.7;min-height:11px}
.kd-tick.done i{background:#03785B;border-color:#03785B}
.kd-tick.on{opacity:1;color:var(--ink)}.kd-tick.on i{transform:scale(1.3);background:#03785B;border-color:var(--ink)}
.kd-tick:focus-visible{outline:2px solid #03785B;outline-offset:3px;border-radius:6px}
.kd-track{position:absolute;left:0;top:0;height:100%;display:flex;will-change:transform}
.kd-panel{flex:none;width:100vw;height:100%;display:flex;align-items:center;justify-content:center;padding:150px clamp(16px,5vw,72px) 40px;box-sizing:border-box}
.kd-pin{width:100%;max-width:1180px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:clamp(24px,5vw,80px);align-items:center}
.kd-eb{font:500 12px var(--mono,monospace);letter-spacing:.2em;text-transform:uppercase;color:#03785B}
.kd-stage:not(.is-light) .kd-eb{color:#7CC9AE}
.kd-h{margin:14px 0 0;font:700 clamp(2.3rem,4.6vw,4.4rem)/1 var(--sans);letter-spacing:-.045em;text-wrap:balance;max-width:16ch}
.kd-h em{font-style:normal;color:#03785B}.kd-stage:not(.is-light) .kd-h em{color:#7CC9AE}
.kd-p{margin:18px 0 0;max-width:44ch;color:var(--ink2);line-height:1.62;font-size:1.04rem}
.kd-clock{display:flex;align-items:baseline;gap:12px}
.kd-clock b{font:700 clamp(3rem,6.4vw,5.6rem)/.9 var(--sans);letter-spacing:-.05em;font-variant-numeric:tabular-nums}
.kd-clock span{font:500 12px var(--mono,monospace);letter-spacing:.16em;text-transform:uppercase;color:var(--ink2)}
.kd-scene h3{margin:16px 0 0;font:700 clamp(1.6rem,2.6vw,2.4rem)/1.08 var(--sans);letter-spacing:-.035em;text-wrap:balance;max-width:20ch}
.kd-svc{margin-top:22px;display:inline-flex;gap:12px;align-items:flex-start;max-width:46ch;padding:13px 16px;border-radius:14px;background:var(--chip);border:1px solid var(--chipline);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
.kd-svc i{flex:none;width:8px;height:8px;margin-top:7px;border-radius:50%;background:#03785B}
.kd-svc strong{display:block;font:600 .98rem var(--sans)}
.kd-svc span{display:block;margin-top:3px;font-size:.87rem;line-height:1.5;color:var(--ink2)}
.kd-hint{margin-top:30px;display:inline-flex;align-items:center;gap:12px;font:500 11px var(--mono,monospace);letter-spacing:.16em;text-transform:uppercase;color:var(--ink2)}
.kd-hint i{width:44px;height:1px;background:currentColor;transform-origin:left;animation:kdh 2.2s ease-in-out infinite}
@keyframes kdh{0%{transform:scaleX(0)}60%{transform:scaleX(1)}100%{transform:scaleX(1);opacity:0}}
.kd-phone{display:flex;flex-direction:column;align-items:center;gap:12px;width:340px}

.kd-stage.is-light .chat-sim-title{color:#011E2E}.kd-stage.is-light .chat-sim-explain{color:rgba(1,30,46,.65)}
.kd-stage.is-light .chat-sim-phone{box-shadow:0 24px 50px -18px rgba(1,30,46,.35)}
.kd-tag{font:500 11px var(--mono,monospace);letter-spacing:.14em;text-transform:uppercase;color:var(--ink2);display:flex;align-items:center;gap:8px}
.kd-tag::before{content:"";width:7px;height:7px;border-radius:50%;background:#1FB386}
.kd-pause{all:unset;cursor:pointer;font:500 12px var(--sans);color:var(--ink2);padding:7px 13px;border-radius:999px;border:1px solid var(--chipline);background:var(--chip)}
.kd-pause:hover{color:var(--ink)}.kd-pause:focus-visible{outline:2px solid #03785B;outline-offset:2px}
.kd-sys{display:block;width:min(380px,80vw);height:auto;margin:0 auto}
.kd-sys .l{stroke:var(--chipline);stroke-width:2}
.kd-sys .n circle{fill:var(--chip);stroke:var(--chipline);stroke-width:1.5}
.kd-sys .n text{fill:var(--ink);font:600 12px var(--sans)}
.kd-sys.on .l{stroke:#03785B;transition:stroke .4s}
.kd-sys.on .n circle{fill:#03785B;stroke:#03785B;transition:fill .4s,stroke .4s}
.kd-sys.on .n text{fill:#fff}
.kd-sys .kbar{fill:var(--kbar,#C1D9E5)}
.kd-stage.is-light .kd-sys{--kbar:#011E2E}
.kd.static{height:auto}
.kd.static .kd-stage{position:relative;height:auto;overflow:visible}
.kd.static .kd-track{position:relative;flex-direction:column}
.kd.static .kd-panel{width:auto;height:auto;min-height:0;padding:64px clamp(16px,5vw,72px)}
.kd.static .kd-top,.kd.static .kd-sun,.kd.static .kd-moon,.kd.static .kd-arc,.kd.static .kd-sky,.kd.static .kd-stars,.kd.static .kd-pause{display:none}

/* ── Envies, résultat, méthode ── */
.kg2{padding:clamp(72px,10vw,130px) clamp(16px,5vw,64px);background:var(--kt-bg);color:var(--kt-ink);transition:background-color .8s,color .8s}
.kg2+.kg2{padding-top:0}
.kg2-in{max-width:1180px;margin:0 auto}
.kg2-eb{font:500 12px var(--mono,monospace);letter-spacing:.2em;text-transform:uppercase;color:var(--kt-em)}
.kg2 h2{margin:14px 0 0;font:700 clamp(2.1rem,4vw,3.6rem)/1.02 var(--sans);letter-spacing:-.045em;text-wrap:balance;color:var(--kt-ink)}
.kg2 h2 em{font-style:normal;color:var(--kt-em)}
.kg2-sub{margin:16px 0 0;color:var(--kt-muted);line-height:1.62;max-width:52ch;font-size:1.02rem}
.kg2-grid{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:clamp(28px,5vw,72px);align-items:start}
.kg2-goals{margin-top:28px;display:grid;gap:10px}
.kg2-goal{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:14px;width:100%;padding:15px 18px;border-radius:14px;border:1px solid var(--kt-line);background:var(--kt-surface);color:var(--kt-ink);font:500 1rem/1.35 var(--sans);transition:border-color .25s,background .25s,box-shadow .25s}
.kg2-goal:hover{border-color:rgba(3,120,91,.45)}
.kg2-goal i{flex:none;width:22px;height:22px;border-radius:7px;border:1.5px solid var(--kt-line);display:grid;place-items:center;transition:background .2s,border-color .2s}
.kg2-goal i svg{width:13px;height:13px;opacity:0;transition:opacity .2s}
.kg2-goal[aria-pressed="true"]{border-color:#03785B;background:var(--kt-chip);box-shadow:0 0 0 1px #03785B inset}
.kg2-goal[aria-pressed="true"] i{background:#03785B;border-color:#03785B}.kg2-goal[aria-pressed="true"] i svg{opacity:1}
.kg2-goal:focus-visible{outline:2px solid #03785B;outline-offset:3px}
.kg2-res{position:sticky;top:100px;border-radius:22px;padding:26px;background:var(--kt-surface);border:1px solid var(--kt-line);box-shadow:0 30px 60px -40px rgba(1,30,46,.5)}
.kg2-hub{display:block;width:100%;max-width:280px;height:auto;margin:0 auto}
.kg2-hub .l{stroke:var(--kt-line);stroke-width:1.5;transition:stroke .35s}
.kg2-hub .n circle{fill:var(--kt-surface2);stroke:var(--kt-line);stroke-width:1.5;transition:fill .35s,stroke .35s}
.kg2-hub .n text{fill:var(--kt-muted);font:600 10.5px var(--sans);transition:fill .35s}
.kg2-hub .on.l{stroke:#03785B}.kg2-hub .n.on circle{fill:#03785B;stroke:#03785B}.kg2-hub .n.on text{fill:#fff}
.kg2-hub .kbar{fill:var(--kt-kbar)}
.kg2-lab{margin:20px 0 10px;font:500 11px var(--mono,monospace);letter-spacing:.16em;text-transform:uppercase;color:var(--kt-muted)}
.kg2-empty{margin:18px 0 0;color:var(--kt-muted);line-height:1.55;text-align:center}
.kg2-fits{display:flex;flex-wrap:wrap;gap:8px}
.kg2-fits span{border:1px solid rgba(3,120,91,.45);color:var(--kt-ink);border-radius:999px;padding:6px 12px;font-size:.85rem;background:var(--kt-chip)}
.kg2-plan{padding:16px 18px;border-radius:14px;background:var(--kt-surface2);border:1px solid var(--kt-line)}
.kg2-plan strong{display:block;font:700 1.2rem var(--sans);letter-spacing:-.02em}
.kg2-plan small{display:block;margin-top:4px;color:var(--kt-muted);font-size:.86rem}
.kg2-together{margin:18px 0 0;font-weight:500;color:var(--kt-ink)}
.kg2-ctas{margin-top:14px;display:flex;flex-wrap:wrap;gap:12px 18px;align-items:center}
.kg2-btn{display:inline-block;background:#03785B;color:#fff;border-radius:10px;padding:14px 20px;font:600 15px var(--sans);text-decoration:none;box-shadow:0 14px 36px -16px rgba(3,120,91,.9);transition:filter .2s,transform .2s}
.kg2-btn:hover{filter:brightness(1.1);transform:translateY(-1px)}
.kg2-wa{color:var(--kt-ink);font-weight:500;text-decoration:underline;text-underline-offset:6px;text-decoration-color:var(--kt-line)}
.kg2-note{margin:12px 0 0;font-size:.84rem;color:var(--kt-muted)}
.kg2-res[data-empty="true"] .kg2-full{display:none}.kg2-res[data-empty="false"] .kg2-empty{display:none}
.kg2-steps{margin:40px 0 0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;counter-reset:s}
.kg2-steps li{counter-increment:s;padding:22px 20px;border-radius:16px;background:var(--kt-surface);border:1px solid var(--kt-line)}
.kg2-steps li::before{content:counter(s);display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--kt-chip);color:var(--kt-em);font:700 .9rem var(--sans);margin-bottom:14px;border:1px solid rgba(3,120,91,.35)}
.kg2-steps b{display:block;font:600 1.05rem var(--sans);letter-spacing:-.01em}
.kg2-steps p{margin:8px 0 0;color:var(--kt-muted);line-height:1.55;font-size:.93rem}
.kg2-line{margin:28px 0 0;padding:18px 20px;border-radius:14px;border:1px dashed rgba(3,120,91,.45);background:var(--kt-chip);font-weight:500;line-height:1.5}
/* intro : l'annonce de la journée */
.kd-introp .kd-h{font-size:clamp(2.2rem,4.2vw,4rem);max-width:18ch}
.kd-legend{margin:24px 0 0;padding:0;list-style:none;display:grid;gap:10px;max-width:46ch}
.kd-legend li{display:flex;align-items:center;gap:12px;font-size:.98rem;color:var(--ink)}
.kd-legend i{flex:none;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font-style:normal;font-weight:700;font-size:.9rem;color:#03785B;background:var(--chip);border:1px solid var(--chipline)}
.kd-hint{font-weight:600}
.kd-hint i{width:56px}
.kd-agenda{width:340px;padding:22px 22px 12px;border-radius:20px;background:var(--chip);border:1px solid var(--chipline);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
.kd-agenda-t{margin:0 0 10px;font:500 11px var(--mono,monospace);letter-spacing:.16em;text-transform:uppercase;color:var(--ink2)}
.kd-agenda ul{margin:0;padding:0;list-style:none}
.kd-agenda li{display:grid;grid-template-columns:52px 1fr;column-gap:12px;padding:11px 0;border-top:1px solid var(--chipline)}
.kd-agenda li:first-child{border-top:0}
.kd-agenda b{font:700 .95rem var(--sans);font-variant-numeric:tabular-nums;color:#03785B}
.kd-stage:not(.is-light) .kd-agenda b{color:#7CC9AE}
.kd-agenda span{font-size:.9rem;line-height:1.35}
.kd-agenda small{grid-column:2;font-size:.75rem;color:var(--ink2);margin-top:2px}
/* hub animé et cliquable */
.kd-sys .ring{fill:none;stroke:var(--chipline);stroke-width:1.5;stroke-dasharray:4 7;animation:kdring 3s linear infinite}
@keyframes kdring{to{stroke-dashoffset:-44}}
.kd-sys .l{stroke:rgba(3,120,91,.55);stroke-width:2;stroke-dasharray:5 6;animation:kdring 1.4s linear infinite}
.kd-sys .pulse{fill:#1FB386;filter:drop-shadow(0 0 4px rgba(31,179,134,.9))}
.kd-sys .ringp{fill:var(--ink)}
.kd-sys .core{fill:var(--chip);stroke:#03785B;stroke-width:1.5}
.kd-sys .n{cursor:pointer;outline:none}
.kd-sys .n circle{fill:#03785B;stroke:rgba(255,255,255,.35);stroke-width:1.5;transition:transform .25s,stroke .25s;transform-box:fill-box;transform-origin:center}
.kd-sys .n text{fill:#fff;font:600 12px var(--sans);pointer-events:none}
.kd-sys .n:hover circle,.kd-sys .n:focus-visible circle{transform:scale(1.08)}
.kd-sys .n.sel circle{stroke:var(--ink);stroke-width:3}
.kd-sysD{margin-top:20px;min-height:110px}
.kd-sysHint{margin:0;font-size:.9rem;color:var(--ink2)}
.kd-sysI{padding:14px 16px;border-radius:14px;background:var(--chip);border:1px solid var(--chipline);max-width:44ch}
.kd-sysI strong{display:block;font:600 1rem var(--sans)}
.kd-sysI span{display:block;margin:4px 0 10px;font-size:.9rem;line-height:1.5;color:var(--ink2)}
/* le plan qui se construit */
.kg2-lab0{margin-top:0}
.kg2-plan-list{position:relative;margin:0;padding:0;list-style:none;display:grid;gap:10px}
.kg2-plan-list::before{content:"";position:absolute;left:14px;top:18px;bottom:18px;width:2px;background:repeating-linear-gradient(180deg,#03785B 0 5px,transparent 5px 11px);background-size:2px 11px;animation:kgflow 1s linear infinite;opacity:.8}
.kg2-res[data-empty="true"] .kg2-plan-list::before{opacity:.25;animation:none}
@keyframes kgflow{to{background-position:0 11px}}
.kg2-plan-list li{position:relative;display:flex;gap:14px;align-items:flex-start;padding:10px 12px 10px 0;border-radius:12px}
.kg2-plan-list li i{flex:none;position:relative;z-index:1;width:30px;height:30px;border-radius:50%;display:grid;place-items:center;font:700 .85rem var(--sans);font-style:normal;color:#fff;background:#03785B;box-shadow:0 0 0 4px var(--kt-surface)}
.kg2-plan-list li strong{display:block;font:600 .98rem var(--sans)}
.kg2-plan-list li span{display:block;margin-top:2px;font-size:.84rem;line-height:1.45;color:var(--kt-muted)}
.kg2-plan-list li.ghost i{background:var(--kt-surface2);border:1.5px dashed var(--kt-line)}
.kg2-plan-list li.ghost strong{width:55%;height:10px;border-radius:6px;background:var(--kt-surface2);margin-top:6px}
.kg2-plan-list li.ghost span{width:80%;height:8px;border-radius:6px;background:var(--kt-surface2);margin-top:8px}
.kg2-plan-list li.arrive{animation:kgarr .9s ease}
@keyframes kgarr{0%{background:rgba(3,120,91,.22);transform:translateX(-6px)}100%{background:transparent;transform:none}}
.kg2-empty{margin:14px 0 0;text-align:left}
.kg2-flow{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
.kg2-flow path{fill:none;stroke:#1FB386;stroke-width:1.6;stroke-dasharray:4 7;opacity:.75;animation:kdring 1.2s linear infinite}
.kg2-grid{position:relative}
.kg2-fly{position:fixed;left:0;top:0;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:#1FB386;box-shadow:0 0 0 4px rgba(31,179,134,.25),0 0 18px 4px rgba(31,179,134,.7);z-index:50;pointer-events:none}
/* bande de faits : une seule bande, sans espaces */
.kt-zone .numbers-strip .numbers-grid{gap:0!important;background:transparent!important;border:0!important;max-width:1200px;margin:0 auto}
.kt-zone .numbers-strip .num-card{border-radius:0!important;border:0!important;border-left:1px solid var(--kt-line)!important;padding:3rem 1.5rem}
.kt-zone .numbers-strip .num-card:first-child{border-left:0!important}
.kt-zone .num-label{font-family:var(--sans)!important;text-transform:none!important;letter-spacing:0!important;font-size:.95rem!important;max-width:22ch;margin:0 auto}
.kt-facts-note{border-top:1px solid var(--kt-line)}
@media (max-width:700px){.kt-zone .numbers-strip .num-card:nth-child(3){border-left:0!important}.kt-zone .numbers-strip .num-card:nth-child(n+3){border-top:1px solid var(--kt-line)!important}}
@media (max-width:900px){
  .kd-introp .kd-h{font-size:2rem}
  .kd-legend{margin-top:16px;gap:8px}.kd-legend li{font-size:.9rem}.kd-legend i{width:26px;height:26px}
  .kd-agenda{display:none}
  .kd-phone .chat-sim-phasebar{display:none}
  .kd-sysD{min-height:0}.kd-sys{width:min(300px,78vw)}
  .kd-pin{grid-template-columns:1fr;gap:14px;align-content:start}
  .kd-panel{align-items:flex-start;padding:146px 16px 16px}
  .kd-h{font-size:2.2rem}.kd-p{font-size:.93rem;margin-top:12px}
  .kd-clock b{font-size:2.6rem}.kd-scene h3{font-size:1.35rem;margin-top:8px}
  .kd-scene .kd-p{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
  .kd-svc{display:none}
  .kd-phone{width:100%;gap:8px}.kd-tag{display:none}
  .kd-top{top:80px}.kd-tick{font-size:9px}.kd-tick small{display:none}
  .kd-hint{margin-top:18px}
  .kg2-grid{grid-template-columns:1fr}.kg2-res{position:static}
  .kg2-steps{grid-template-columns:1fr 1fr}
}
@media (max-width:560px){.kg2-steps{grid-template-columns:1fr}}
`;
  if (!document.getElementById('kt-style')) { const st = document.createElement('style'); st.id = 'kt-style'; st.textContent = css; document.head.appendChild(st); }

  // Zone thématisée : tout ce qui suit le hero, jusqu'au pied de page
  const first = document.querySelector('.marquee-wrap') || sec;
  const zone = document.createElement('div'); zone.className = 'kt-zone';
  first.parentNode.insertBefore(zone, first);
  let node = first;
  while (node && !(node.tagName === 'FOOTER')) { const next = node.nextSibling; zone.appendChild(node); node = next; }

  // Bascule soleil/lune (menu ordi + menu mobile)
  const ICONS = {
    auto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2"/><path d="M12 7.8a4.2 4.2 0 0 1 0 8.4z" fill="currentColor"/></svg>',
    light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/></svg>',
    dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>'
  };
  const toggles = [];
  [document.querySelector('.nav .lang-switch'), document.querySelector('.nav-mobile .lang-switch')].forEach((anchor) => {
    if (!anchor) return;
    const b = document.createElement('button'); b.type = 'button'; b.className = 'kt-toggle';
    b.addEventListener('click', () => { mode = mode === 'auto' ? 'light' : mode === 'light' ? 'dark' : 'auto'; store.set('kelthen-ambience', mode); applyAmbience(); });
    anchor.parentNode.insertBefore(b, anchor); toggles.push(b);
  });
  function updateToggles() { toggles.forEach((b) => { b.innerHTML = ICONS[mode]; const l = T[lang].mode[mode]; b.setAttribute('aria-label', l); b.title = l; }); }

  /* ═════════════ 2. La journée, de gauche à droite ═════════════ */
  // Ciel selon l'heure : [heure, haut, bas]
  const SKY = [[0, '#04131B', '#0A2230'], [4.5, '#0A2230', '#1C4153'], [6, '#4A7A8E', '#CFE0E7'], [8, '#A3C8D7', '#EAF2F5'], [12, '#C3DCE6', '#F4F8FA'],
    [16, '#AFD0DC', '#E6F0F3'], [18.5, '#4C7A8C', '#AFC9D1'], [20, '#15384A', '#2E5767'], [21.5, '#06192A', '#0D2B3A'], [24, '#04131B', '#0A2230']];
  const hx = (c) => [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)];
  const mixc = (a, b, t) => { const A = hx(a), B = hx(b); return A.map((v, i) => Math.round(v + (B[i] - v) * t)); };
  function skyAt(h) {
    h = ((h % 24) + 24) % 24;
    let i = 0; while (i < SKY.length - 2 && SKY[i + 1][0] <= h) i++;
    const [h0, t0, b0] = SKY[i], [h1, t1, b1] = SKY[i + 1], t = (h - h0) / (h1 - h0 || 1);
    const top = mixc(t0, t1, t), bot = mixc(b0, b1, t);
    const mid = top.map((v, k) => (v + bot[k]) / 2), lum = (0.2126 * mid[0] + 0.7152 * mid[1] + 0.0722 * mid[2]) / 255;
    return { top: `rgb(${top})`, bot: `rgb(${bot})`, light: lum > .52, night: Math.max(0, Math.min(1, (0.3 - lum) / 0.2)) };
  }

  const startH = nowH();
  // Moments dans l'ordre à partir de l'heure réelle : les prochaines occurrences
  const upcoming = SCENES.map((s) => ({ ...s, abs: s.h > startH ? s.h : s.h + 24 })).sort((a, b) => a.abs - b.abs);
  const period0 = periodOf(startH);
  const PANELS = [{ kind: 'intro', abs: startH }, ...upcoming.map((s) => ({ kind: 'scene', s, abs: s.abs })), { kind: 'system', abs: upcoming[upcoming.length - 1].abs + 1.2 }];
  const NP = PANELS.length;

  let root = null, stage = null, track = null, sky = null, stars = null, sun = null, moon = null, fill = null;
  const panelEls = [], ticks = [];
  const angle = (i, n) => -Math.PI / 2 + i * (Math.PI * 2 / n);
  const SYS_ORDER = [5, 1, 2, 4, 6, 3];
  const K_MARK = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path class="kbar" d="M269.8 767.1L0 767.1L323.5 234.8L587.6 243.4Z"/><path fill="#03785B" d="M734.6 532.4L1049.9 1000L773.5 1000L602 745.7L461.6 537.4L594.1 324.2L795.7 0L1065.5 0Z"/></g>`;

  if (canDemo) {
    root = document.createElement('div');
    root.className = 'kd' + (reduce ? ' static' : ''); root.id = 'day';
    root.style.setProperty('--kd-n', NP);
    root.innerHTML = `<div class="kd-stage">
      <div class="kd-sky"></div><div class="kd-stars"></div>
      <svg class="kd-arc" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true"><path d="M60 500 Q500 100 940 500" fill="none" stroke="currentColor" stroke-opacity=".16" stroke-width="1.5" stroke-dasharray="3 8" vector-effect="non-scaling-stroke"/></svg>
      <div class="kd-sun" aria-hidden="true"></div><div class="kd-moon" aria-hidden="true"></div><div class="kd-haze" aria-hidden="true"></div>
      <div class="kd-top"><div class="kd-line" role="group"><span class="kd-fill"></span></div></div>
      <div class="kd-track"></div>
    </div>`;
    sec.insertBefore(root, sec.firstChild);
    sec.classList.add('kd-on');
    stage = root.querySelector('.kd-stage'); track = root.querySelector('.kd-track');
    sky = root.querySelector('.kd-sky'); stars = root.querySelector('.kd-stars'); sun = root.querySelector('.kd-sun'); moon = root.querySelector('.kd-moon');
    fill = root.querySelector('.kd-fill');
    const line = root.querySelector('.kd-line');

    PANELS.forEach((P, k) => {
      const el = document.createElement('section');
      el.className = 'kd-panel';
      if (P.kind === 'intro') {
        el.classList.add('kd-introp');
        el.innerHTML = `<div class="kd-pin"><div><p class="kd-eb"><span data-t="now"></span> ${fmtTime(startH)} · <span data-greet></span></p><h2 class="kd-h" data-th="dayTitle"></h2><p class="kd-p" data-t="intro"></p>
          <ol class="kd-legend">${[0, 1, 2].map((i) => `<li><i>${['↓', '→', '●'][i]}</i><span data-leg="${i}"></span></li>`).join('')}</ol>
          <div class="kd-hint"><span data-t="hint"></span><i></i></div></div>
          <div class="kd-agenda"><p class="kd-agenda-t" data-t="agenda"></p><ul>${upcoming.map((u, i) => `<li><b>${fmtTime(u.h)}</b><span data-ag="${i}"></span><small data-agd="${i}"></small></li>`).join('')}</ul></div></div>`;
      } else if (P.kind === 'scene') {
        el.innerHTML = `<div class="kd-pin"><div class="kd-scene"><div class="kd-clock"><b>${fmtTime(P.s.h)}</b><span data-day></span></div><h3></h3><p class="kd-p"></p>
          <div class="kd-svc"><i></i><div><strong></strong><span></span></div></div></div>
          <div class="kd-phone" data-demo="${P.s.demo}"></div></div>`;
      } else {
        const R = 128, C = 190, pts = SYS_ORDER.map((n, i) => { const a = angle(i, 6); return [C + Math.cos(a) * R, C + Math.sin(a) * R]; });
        const ring = 'M' + pts.map((p) => p.map((v) => v.toFixed(1)).join(' ')).join(' L') + ' Z';
        el.innerHTML = `<div class="kd-pin"><div class="kd-sysT"><p class="kd-eb" data-t="sysEb"></p><h2 class="kd-h" data-th="sysTitle"></h2><p class="kd-p" data-t="sysSub"></p>
            <div class="kd-sysD" aria-live="polite"><p class="kd-sysHint" data-t="sysHint"></p><div class="kd-sysI" hidden><strong></strong><span></span><button type="button" class="kd-pause kd-see"></button></div></div></div>
          <svg class="kd-sys" viewBox="0 0 380 380" role="group">
            <path class="ring" d="${ring}"/>
            ${pts.map(([x, y]) => `<line class="l" x1="${C}" y1="${C}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`).join('')}
            ${pts.map(([x, y], i) => `<circle class="pulse" r="3.4"><animateMotion dur="2.2s" begin="${(i * .37).toFixed(2)}s" repeatCount="indefinite" path="M${C} ${C} L${x.toFixed(1)} ${y.toFixed(1)}"/></circle>`).join('')}
            <circle class="pulse ringp" r="3"><animateMotion dur="7s" repeatCount="indefinite" path="${ring}"/></circle>
            <circle cx="${C}" cy="${C}" r="44" class="core"/>
            ${K_MARK(C - 25, C - 23, .047)}
            ${SYS_ORDER.map((n, i) => `<g class="n" tabindex="0" role="button" data-sn="${n}"><circle cx="${pts[i][0].toFixed(1)}" cy="${pts[i][1].toFixed(1)}" r="38"/><text x="${pts[i][0].toFixed(1)}" y="${(pts[i][1] + 4).toFixed(1)}" text-anchor="middle" data-node="${n}"></text></g>`).join('')}
          </svg></div>`;
        const pick = (n) => {
          el.querySelectorAll('.kd-sys .n').forEach((g) => g.classList.toggle('sel', +g.dataset.sn === n));
          const box = el.querySelector('.kd-sysI'); box.hidden = false; el.querySelector('.kd-sysHint').hidden = true;
          box.querySelector('strong').textContent = svcText(n, 'name'); box.querySelector('span').textContent = svcText(n, 'desc');
          const btn = box.querySelector('.kd-see'); btn.textContent = '← ' + T[lang].see; btn.dataset.sn = n;
        };
        el.querySelectorAll('.kd-sys .n').forEach((g) => {
          g.addEventListener('click', () => pick(+g.dataset.sn));
          g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(+g.dataset.sn); } });
        });
        el.querySelector('.kd-see').addEventListener('click', (e) => { const n = +e.currentTarget.dataset.sn; const k = PANELS.findIndex((q) => q.kind === 'scene' && q.s.svc === n); if (k > 0) goTo(k); });
      }
      track.appendChild(el); panelEls.push(el);
      const b = document.createElement('button'); b.type = 'button'; b.className = 'kd-tick';
      b.innerHTML = `<i></i><span>${P.kind === 'system' ? '✓' : fmtTime(P.abs)}</span><small></small>`;
      b.addEventListener('click', () => goTo(k)); line.appendChild(b); ticks.push(b);
    });
  }

  /* Démos : une seule tourne à la fois, dans le panneau actif */
  function fillStatic(host, id) {
    const d = SERVICE_DEMOS[id]; if (!d) return;
    const ph = (d[lang] || d.fr)[0];
    host.innerHTML = mkChatSim();
    const q = (s) => host.querySelector(s);
    q('.chat-sim-step').textContent = ph.step; q('.chat-sim-title').textContent = ph.title; q('.chat-sim-explain').textContent = ph.explain;
    q('.chat-sim-ava').textContent = ph.head[0]; q('.chat-sim-name').textContent = ph.head[1]; q('.chat-sim-sub').textContent = ph.head[2]; q('.chat-sim-head').style.background = ph.head[3];
  }
  function mountPhone(el, live) {
    const host = el.querySelector('.kd-phone'); if (!host) return;
    const id = host.dataset.demo;
    host.innerHTML = `<span class="kd-tag" data-t="demo">${esc(T[lang].demo)}</span><div class="kd-simwrap"></div>${reduce ? '' : `<button type="button" class="kd-pause"></button>`}`;
    const wrap = host.querySelector('.kd-simwrap'), btn = host.querySelector('.kd-pause');
    const setBtn = (playing) => { if (btn) { btn.textContent = playing ? '⏸ ' + T[lang].pause : '▶ ' + T[lang].play; btn.dataset.playing = playing ? '1' : ''; } };
    const start = () => { wrap.innerHTML = mkChatSim(); const d = SERVICE_DEMOS[id]; playChatSim(wrap.querySelector('.chat-sim'), d[lang] || d.fr); setBtn(true); };
    const stop = () => { fillStatic(wrap, id); setBtn(false); };
    if (btn) btn.addEventListener('click', () => (btn.dataset.playing ? stop() : start()));
    live || reduce ? start() : stop();
    if (reduce) setBtn(false);
    fitPhone(el);
  }
  function fitPhone(el) {
    const host = el.querySelector('.kd-phone'), sim = host && host.querySelector('.chat-sim');
    if (!sim || reduce) return;
    sim.style.zoom = 1;
    const natural = sim.offsetHeight || 420, txt = el.querySelector('.kd-scene');
    const mobile = innerWidth <= 900;
    const avail = mobile ? innerHeight - 146 - (txt ? txt.offsetHeight : 0) - 14 - 44 - 18 : innerHeight - 150 - 40 - 70;
    sim.style.zoom = clamp(avail / natural, .5, mobile ? .95 : 1.12).toFixed(3);
  }

  function renderDayText() {
    if (!root) return;
    const t = T[lang];
    root.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t[el.dataset.t]; });
    root.querySelectorAll('[data-th]').forEach((el) => { el.innerHTML = t[el.dataset.th]; });
    root.querySelector('[data-greet]').textContent = t.greet[period0][0];
    root.querySelectorAll('[data-leg]').forEach((el) => { el.textContent = t.legend[+el.dataset.leg]; });
    root.querySelectorAll('[data-ag]').forEach((el) => { const u = upcoming[+el.dataset.ag]; el.textContent = u[lang][0]; });
    root.querySelectorAll('[data-agd]').forEach((el) => { const u = upcoming[+el.dataset.agd]; el.textContent = u.abs >= 24 ? t.tomorrow : t.today; });
    root.querySelectorAll('.kd-see[data-sn]').forEach((b) => { b.textContent = '← ' + t.see; });
    PANELS.forEach((P, k) => {
      const el = panelEls[k];
      if (P.kind === 'scene') {
        el.querySelector('[data-day]').textContent = P.abs >= 24 ? t.tomorrow : t.today;
        el.querySelector('h3').textContent = P.s[lang][0];
        el.querySelector('.kd-p').textContent = P.s[lang][1];
        el.querySelector('.kd-svc strong').textContent = svcText(P.s.svc, 'name');
        el.querySelector('.kd-svc span').textContent = svcText(P.s.svc, 'desc');
      }
      ticks[k].querySelector('small').textContent = P.kind === 'scene' ? (P.abs >= 24 ? t.tomorrow : t.today) : '';
    });
    root.querySelectorAll('[data-node]').forEach((el) => { el.textContent = t.nodes[el.dataset.node]; });
    panelEls.forEach((el, k) => mountPhone(el, k === active));
  }

  /* Scroll → position horizontale, heure, ciel, soleil */
  let active = 0, pos = 0, W = innerWidth;
  const ease = (x) => (x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  const dwell = (t) => ease(clamp((t - .18) / .64, 0, 1));
  function progress() { const r = root.getBoundingClientRect(), total = root.offsetHeight - innerHeight; return total > 0 ? clamp(-r.top / total, 0, 1) : 0; }
  function goTo(k) { const total = root.offsetHeight - innerHeight; window.scrollTo({ top: root.getBoundingClientRect().top + scrollY + total * (k / (NP - 1)), behavior: 'smooth' }); }
  function render() {
    const seg = progress() * (NP - 1), k = Math.min(NP - 2, Math.floor(seg)), f = dwell(seg - k);
    pos = k + f;
    track.style.transform = `translate3d(${(-pos * W).toFixed(1)}px,0,0)`;
    const h = PANELS[k].abs + (PANELS[k + 1].abs - PANELS[k].abs) * f;
    const s = skyAt(h);
    sky.style.background = `linear-gradient(180deg,${s.top},${s.bot})`;
    stage.classList.toggle('is-light', s.light);
    stage.style.color = s.light ? '#011E2E' : '#F0EDE8';
    stars.style.opacity = s.night.toFixed(2);
    // soleil de 6 h à 20 h, lune de 20 h à 6 h
    const hh = ((h % 24) + 24) % 24, sh = stage.clientHeight;
    const u = (hh - 6) / 14, uv = u >= 0 && u <= 1 ? Math.sin(Math.PI * u) : 0;
    sun.style.transform = `translate(${(W * (.06 + .88 * clamp(u, 0, 1))).toFixed(1)}px,${(sh * (.5 - .3 * uv)).toFixed(1)}px)`;
    const soft = W <= 900 ? .35 : 1;
    sun.style.opacity = (clamp(uv * 3, 0, 1) * soft).toFixed(2);
    const hm = hh >= 20 ? hh - 20 : hh + 4, um = hm / 10, umv = um >= 0 && um <= 1 ? Math.sin(Math.PI * um) : 0;
    moon.style.transform = `translate(${(W * (.06 + .88 * clamp(um, 0, 1))).toFixed(1)}px,${(sh * (.5 - .26 * umv)).toFixed(1)}px)`;
    moon.style.opacity = (clamp(umv * 3, 0, 1) * soft).toFixed(2);
    fill.style.width = `calc((100% - 100% / ${NP}) * ${(pos / (NP - 1)).toFixed(4)})`;
    const a = Math.round(pos);
    ticks.forEach((b, i) => { b.classList.toggle('on', i === a); b.classList.toggle('done', i < a); b.setAttribute('aria-current', i === a ? 'step' : 'false'); });
    if (a !== active) {
      const prev = active; active = a;
      if (panelEls[prev]) mountPhone(panelEls[prev], false);
      mountPhone(panelEls[a], true);
    }
    const sys = root.querySelector('.kd-sys'); if (sys) sys.classList.toggle('on', a === NP - 1);
  }
  function renderStatic() {
    PANELS.forEach((P, k) => {
      const s = skyAt(P.kind === 'system' ? 12 : P.abs), el = panelEls[k];
      el.style.background = `linear-gradient(180deg,${s.top},${s.bot})`;
      el.style.color = s.light ? '#011E2E' : '#F0EDE8';
      el.classList.toggle('is-light', s.light);
    });
    const sys = root.querySelector('.kd-sys'); if (sys) sys.classList.add('on');
  }

  /* ═════════════ 3. Envies, résultat, méthode ═════════════ */
  const CHECK = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const hubN = [1, 2, 3, 4, 5, 6];
  const hub = `<svg class="kg2-hub" viewBox="0 0 300 300" aria-hidden="true">
    ${hubN.map((n, i) => { const a = angle(i, 6), x = 150 + Math.cos(a) * 104, y = 150 + Math.sin(a) * 104; return `<line class="l" data-s="${n}" x1="150" y1="150" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`; }).join('')}
    <circle cx="150" cy="150" r="38" fill="var(--kt-surface)" stroke="var(--kt-line)" stroke-width="1.5"/>
    ${K_MARK(129, 131, .04)}
    ${hubN.map((n, i) => { const a = angle(i, 6), x = 150 + Math.cos(a) * 104, y = 150 + Math.sin(a) * 104; return `<g class="n" data-s="${n}"><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="33"/><text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" data-hn="${n}"></text></g>`; }).join('')}
  </svg>`;
  const goalsSec = document.createElement('div');
  goalsSec.className = 'kg2'; goalsSec.id = 'diagnostic';
  goalsSec.innerHTML = `<div class="kg2-in kg2-grid">
    <div><p class="kg2-eb" data-g="gEb"></p><h2 id="kg2Title" data-gh="gTitle"></h2><p class="kg2-sub" data-g="gSub"></p>
      <div class="kg2-goals" role="group" aria-labelledby="kg2Title">${GOALS.map((g, i) => `<button type="button" class="kg2-goal" aria-pressed="false" data-i="${i}"><i>${CHECK}</i><span></span></button>`).join('')}</div></div>
    <div class="kg2-res" data-empty="true" aria-live="polite">
      <p class="kg2-lab kg2-lab0" data-g="planTitle"></p>
      <ol class="kg2-plan-list"></ol>
      <p class="kg2-empty" data-g="planEmpty"></p>
      <div class="kg2-full">
        <p class="kg2-lab" data-g="plan"></p><div class="kg2-plan"><strong></strong><small></small></div>
        <p class="kg2-together" data-g="together"></p>
        <div class="kg2-ctas"><a class="kg2-btn" href="contact.html" data-g="cta"></a><a class="kg2-wa" target="_blank" rel="noopener noreferrer" data-g="wa"></a></div>
        <p class="kg2-note" data-g="note"></p></div>
    </div></div>`;
  const workSec = document.createElement('div');
  workSec.className = 'kg2'; workSec.id = 'how-we-work';
  workSec.innerHTML = `<div class="kg2-in"><p class="kg2-eb" data-g="wEb"></p><h2 data-gh="wTitle"></h2><ol class="kg2-steps">${[0, 1, 2, 3].map((i) => `<li><b data-step="${i}" data-part="0"></b><p data-step="${i}" data-part="1"></p></li>`).join('')}</ol><p class="kg2-line" data-g="wLine"></p></div>`;
  sec.appendChild(goalsSec); sec.appendChild(workSec);

  const goalBtns = [...goalsSec.querySelectorAll('.kg2-goal')], picked = new Set();
  const gridEl = goalsSec.querySelector('.kg2-grid');
  const flowSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  flowSvg.setAttribute('class', 'kg2-flow'); flowSvg.setAttribute('aria-hidden', 'true');
  gridEl.appendChild(flowSvg);
  let fresh = -1;
  goalBtns.forEach((b) => b.addEventListener('click', () => {
    const i = +b.dataset.i; const on = !picked.has(i); on ? picked.add(i) : picked.delete(i);
    b.setAttribute('aria-pressed', on); fresh = on ? GOALS[i].svc : -1;
    renderResult();
    if (on) flyTo(b, GOALS[i].svc);
  }));
  const JOURNEY = [5, 1, 2, 4, 6, 3];
  const wide = () => innerWidth > 900;
  // un point lumineux part de l'envie cochée et rejoint son étape dans le plan
  function flyTo(btn, svc) {
    if (reduce || !wide()) return;
    const row = goalsSec.querySelector(`.kg2-plan-list [data-s="${svc}"]`); if (!row) return;
    const a = btn.getBoundingClientRect(), b = row.getBoundingClientRect();
    const x0 = a.right - 6, y0 = a.top + a.height / 2, x1 = b.left + 14, y1 = b.top + b.height / 2;
    const dot = document.createElement('span'); dot.className = 'kg2-fly'; document.body.appendChild(dot);
    const pts = []; for (let k = 0; k <= 16; k++) { const t = k / 16, cx = (x0 + x1) / 2, cy = Math.min(y0, y1) - 60;
      const x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1, y = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * cy + t * t * y1;
      pts.push({ transform: `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`, opacity: t < .1 ? t * 10 : 1 }); }
    const anim = dot.animate(pts, { duration: 700, easing: 'cubic-bezier(.4,0,.2,1)' });
    anim.onfinish = () => { dot.remove(); row.classList.remove('arrive'); void row.offsetWidth; row.classList.add('arrive'); };
  }
  // fils qui relient chaque envie cochée à son étape (ordi)
  function drawFlows() {
    flowSvg.innerHTML = '';
    if (!wide()) return;
    const g = gridEl.getBoundingClientRect();
    flowSvg.setAttribute('viewBox', `0 0 ${g.width.toFixed(0)} ${g.height.toFixed(0)}`);
    let html = '';
    [...picked].forEach((i) => {
      const b = goalBtns[i].getBoundingClientRect(), row = goalsSec.querySelector(`.kg2-plan-list [data-s="${GOALS[i].svc}"]`); if (!row) return;
      const r = row.getBoundingClientRect();
      const x0 = b.right - g.left, y0 = b.top + b.height / 2 - g.top, x1 = r.left - g.left + 8, y1 = r.top + r.height / 2 - g.top, mx = (x0 + x1) / 2;
      html += `<path d="M${x0.toFixed(1)} ${y0.toFixed(1)} C${mx.toFixed(1)} ${y0.toFixed(1)} ${mx.toFixed(1)} ${y1.toFixed(1)} ${x1.toFixed(1)} ${y1.toFixed(1)}"/>`;
    });
    flowSvg.innerHTML = html;
  }
  addEventListener('resize', drawFlows);
  function renderResult() {
    const t = T[lang], box = goalsSec.querySelector('.kg2-res');
    const sel = [...picked].sort((a, b) => a - b).map((i) => GOALS[i]), svcs = [...new Set(sel.map((g) => g.svc))];
    const list = goalsSec.querySelector('.kg2-plan-list');
    const order = JOURNEY.filter((n) => svcs.includes(n));
    list.innerHTML = (order.length ? order : [0, 0, 0]).map((n, i) => n
      ? `<li data-s="${n}" class="${n === fresh ? 'arrive' : ''}"><i>${i + 1}</i><div><strong>${esc(svcText(n, 'name'))}</strong><span>${esc(svcText(n, 'desc'))}</span></div></li>`
      : `<li class="ghost"><i></i><div><strong></strong><span></span></div></li>`).join('');
    fresh = -1;
    box.dataset.empty = sel.length ? 'false' : 'true';
    requestAnimationFrame(drawFlows);
    if (!sel.length) return;
    const tier = Math.max(...sel.map((g) => g.tier)), plan = PLANS[lang][tier];
    goalsSec.querySelector('.kg2-plan strong').textContent = plan[0];
    goalsSec.querySelector('.kg2-plan small').textContent = `${plan[2]} · ${plan[1] ? t.from + ' ' + plan[1] : QUOTE[lang]}`;
    const msg = `${t.msgHead}\n\n${t.msgGoals}\n${sel.map((g) => '- ' + g[lang]).join('\n')}\n\n${t.msgPlan} ${plan[0]}`;
    goalsSec.querySelector('.kg2-btn').href = 'contact.html?audit=' + encodeURIComponent(msg);
    goalsSec.querySelector('.kg2-wa').href = `https://wa.me/${WA}?text=` + encodeURIComponent(msg);
  }

  /* ═════════════ 4. Des faits vérifiables à la place des chiffres ═════════════ */
  const numGrid = document.querySelector('.numbers-strip .numbers-grid');
  let factsNote = null;
  if (numGrid) {
    factsNote = document.createElement('p'); factsNote.className = 'kt-facts-note';
    numGrid.parentNode.insertAdjacentElement('afterend', factsNote);
  }
  function renderFacts() {
    if (!numGrid) return;
    numGrid.innerHTML = T[lang].facts.map(([v, l]) => `<div class="num-card"><div class="num-val">${esc(v)}</div><div class="num-label">${esc(l)}</div></div>`).join('');
    factsNote.textContent = T[lang].factsNote;
  }

  /* ═════════════ Langue ═════════════ */
  function renderAll() {
    const t = T[lang];
    [goalsSec, workSec].forEach((s) => {
      s.querySelectorAll('[data-g]').forEach((el) => { el.textContent = t[el.dataset.g]; });
      s.querySelectorAll('[data-gh]').forEach((el) => { el.innerHTML = t[el.dataset.gh]; });
    });
    goalBtns.forEach((b, i) => { b.querySelector('span').textContent = GOALS[i][lang]; });
    workSec.querySelectorAll('[data-step]').forEach((el) => { el.textContent = t.steps[+el.dataset.step][+el.dataset.part]; });
    renderResult(); renderFacts(); updateToggles(); renderDayText();
  }
  document.querySelectorAll('[data-lang-btn]').forEach((b) => b.addEventListener('click', () => setTimeout(() => {
    const l = getLang() === 'fr' ? 'fr' : 'en'; if (l !== lang) { lang = l; renderAll(); }
  }, 30)));

  /* ═════════════ Démarrage ═════════════ */
  applyAmbience();
  setInterval(applyAmbience, 5 * 60 * 1000);
  try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyAmbience); } catch (e) {}
  renderAll();
  if (root) {
    if (reduce) renderStatic();
    else {
      let queued = false;
      const tick = () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; render(); }); } };
      addEventListener('scroll', tick, { passive: true });
      addEventListener('resize', () => { W = innerWidth; panelEls.forEach(fitPhone); tick(); });
      // balayer du doigt pour avancer / reculer d'un moment
      let tx = 0, ty = 0;
      stage.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
      stage.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) goTo(clamp(Math.round(pos) + (dx < 0 ? 1 : -1), 0, NP - 1));
      }, { passive: true });
      render();
    }
  }
})();
