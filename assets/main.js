    // ─── Bilingual FR / EN engine ───
    (function i18n() {
      const DICT = {
        en: {
          'nav.services': 'Services', 'nav.work': 'Work', 'nav.about': 'About', 'nav.pricing': 'Pricing', 'nav.contact': 'Contact', 'nav.cta': 'Free audit',
          'mrq.1': 'Websites', 'mrq.2': 'Online booking', 'mrq.3': 'SMS reminders', 'mrq.4': 'AI assistant', 'mrq.5': 'Google visibility', 'mrq.6': 'Client reviews', 'mrq.7': 'Loyalty', 'mrq.8': 'Secure payments',
          'hero.eyebrow': 'Web agency · shops & pros',
          'hero.title': '<span class="l"><span>One hub.</span></span><span class="l"><span>All your growth.</span></span>',
          'hero.desc': 'One hub connects your leads, emails, appointments and sales. Our automations and AI agents handle it — while you focus on what matters.',
          'hero.readout': 'Requests handled by our automations',
          'hero.ctaPrimary': 'Get a free audit', 'hero.ctaSecondary': 'See our projects', 'hero.scroll': 'Scroll',
          'services.label': 'What we do for you', 'services.title': 'Your goals,<br>our <em>solutions</em>',
          'services.sub': 'Simple tools to attract more clients, save time and polish your image — no jargon, no headaches.',
          'svc1.name': 'A website that brings in clients', 'svc1.desc': 'A fast, elegant website that builds trust and turns visitors into booked appointments.',
          'svc2.name': 'Online booking, 24/7', 'svc2.desc': 'Your clients book and pay a deposit in 30 seconds, day or night. No more phone ringing off the hook.',
          'svc3.name': 'AI virtual receptionist', 'svc3.desc': 'A smart assistant answers your clients, sorts requests and books appointments — even while you sleep.',
          'svc4.name': 'Automatic SMS & email reminders', 'svc4.desc': 'Up to 80% fewer missed appointments, and your calendar synced automatically.',
          'svc5.name': 'Found on Google', 'svc5.desc': 'We get you onto Google and Google Maps, right where your clients are already searching.',
          'svc6.name': 'Reviews & loyalty', 'svc6.desc': 'We automatically collect your 5-star Google reviews and bring your clients back.',
          'tag.turnkey': 'Turnkey', 'tag.mobile': 'Mobile-perfect', 'tag.agenda': 'Synced calendar', 'tag.deposits': 'Deposits', 'tag.247': '24/7', 'tag.multichannel': 'Multichannel', 'tag.email': 'Email', 'tag.localseo': 'Local SEO', 'tag.reviews': 'Google reviews', 'tag.loyalty': 'Loyalty',
          'sol.label': 'For your industry', 'sol.title': 'Solutions built for <em>your world</em>', 'sol.example': 'See a real example →',
          'scene.automation': 'Automation', 'scene.assistant': 'Assistant · online', 'scene.notif': 'Notification', 'scene.newmsg': 'New message', 'scene.growth': 'Growth',
          'ind1.name': 'Clinics & health professionals', 'ind1.b1': 'Simple, smooth online appointment booking', 'ind1.b2': 'Secure, confidential patient data', 'ind1.b3': 'Automatic reminders: fewer no-shows, more attendance', 'ind1.b4': 'Google reviews to reassure new patients',
          'ind2.name': 'Salons, spas & wellness', 'ind2.b1': 'A visual, attractive services catalogue', 'ind2.b2': 'Deposit on booking: no more last-minute cancellations', 'ind2.b3': 'A loyalty program to bring your clients back', 'ind2.b4': 'Online booking 24/7, even at night',
          'ind3.name': 'Shops & local entrepreneurs', 'ind3.b1': 'An online storefront that makes people want to walk in', 'ind3.b2': 'Found on Google Maps, with up-to-date reviews and hours', 'ind3.b3': 'Simple tools to sell without spending your evenings on it',
          'stat.noshows': 'fewer missed appointments', 'stat.bookings': 'more online bookings', 'stat.timesaved': 'saved per week', 'stat.response': 'response time',
          'trust.label': 'Why Kelthen', 'trust.quote': 'A young, fast-growing studio driven by one thing: <em>helping you succeed</em>.', 'trust.desc': 'We treat every project — from the neighbourhood salon to the busy clinic — as if it were our own. You talk to real, reachable people who build simple tools that bring you clients.', 'trust.anchor': 'Based in Canada — serving entrepreneurs everywhere.',
          'work.label': 'Our work', 'work.title': 'Projects that<br><em>deliver</em>', 'work.viewall': 'View all projects →',
          'homecta.title': "Let's talk about<br><em>your project.</em>", 'homecta.sub': 'Tell us what you need. We reply within 24 hours — no sales pitch, just a real conversation.', 'homecta.cta': 'Get a free audit',
          'footer.tagline': 'Web agency · Canada', 'footer.services': 'Services', 'footer.company': 'Company', 'footer.connect': 'Follow us', 'footer.faq': 'FAQ',
          'footer.copy': '© 2026 Kelthen. All rights reserved.', 'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms of Use', 'footer.cookies': 'Cookie preferences', 'footer.flag': 'Canada',
          'pricing.label': 'Our plans', 'pricing.title': 'Clear <em>plans</em>.<br>Zero surprises.', 'pricing.cta': 'Get a quote', 'pricing.cta2': "Let's talk", 'pricing.badge': 'Most popular', 'pricing.note': 'Free, no-obligation quote · Payment in instalments available',
          'p1.tier': 'The Essentials', 'p1.price': 'from $900', 'p1.period': 'Presence & visibility', 'p1.f1': 'A fast, elegant showcase website', 'p1.f2': 'Perfect on mobile', 'p1.f3': 'Optimized for Google & Google Maps', 'p1.f4': 'Contact form + WhatsApp', 'p1.f5': 'Zero technical hassle for you', 'p1.f6': 'Hosting & maintenance included',
          'p2.tier': 'The Business', 'p2.price': 'from $2,500', 'p2.period': 'Performance & automation', 'p2.f1': 'Everything in The Essentials, plus…', 'p2.f2': 'Online appointment booking', 'p2.f3': 'Secure deposit payments', 'p2.f4': 'Automatic SMS & email reminders', 'p2.f5': 'Synced calendar', 'p2.f6': 'No hidden costs',
          'p3.tier': 'Custom', 'p3.price': 'On quote', 'p3.period': 'AI solutions & growth', 'p3.f1': 'AI virtual receptionist, 24/7', 'p3.f2': 'Advanced loyalty systems', 'p3.f3': 'Custom integrations and automations', 'p3.f4': 'Dedicated support, end to end', 'p3.f5': 'Payment in instalments available',
          'proc.label': 'How we work', 'proc.title': 'Simple.<br><em>Transparent.</em>', 'proc.s1n': 'Discovery call', 'proc.s1d': 'A free 30-minute call to understand your goals and constraints. No sales pressure — we listen.', 'proc.s2n': 'Proposal & quote', 'proc.s2d': 'You get a clear proposal within 48h: fixed price, detailed scope, realistic timeline. No surprises.', 'proc.s3n': 'Build', 'proc.s3d': "Regular updates, live previews and easy contact. You're always in the loop.", 'proc.s4n': 'Launch & support', 'proc.s4d': 'We handle deployment, testing and post-launch support. You go live with confidence.',
          'pv.tag': 'Our approach', 'pv.quote': 'Built <em>differently.</em><br>Delivered<br>on time.', 'pv.s1': 'Proposal turnaround', 'pv.s2': 'Hidden fees', 'pv.s3': 'Revisions on the quote',
          'faq.title': 'Your questions,<br><em>answered.</em>',
          'faq.q1': 'How much does a project cost?', 'faq.a1': 'Most projects fall into three fixed-price plans: The Essentials from $900, The Business from $2,500, and Custom on quote. After a short discovery call we send a fixed price for your exact needs — you know the number before we start, with no surprises.',
          'faq.q2': 'How long does it take?', 'faq.a2': 'A simple site ships in about a week. A full website or app usually takes a few weeks depending on scope. Either way, you get a realistic timeline in the proposal and regular progress updates.',
          'faq.q3': 'Do you work with clients everywhere?', 'faq.a3': 'Yes. We work remotely with entrepreneurs everywhere — WhatsApp, email, calls. Distance is never a blocker, and we stay reachable and responsive.',
          'faq.q4': 'What happens after launch?', 'faq.a4': "We handle deployment, testing and post-launch support (3 months included with The Business). After that, an optional maintenance plan keeps everything up to date. We don't disappear the day you go live.",
          'faq.q5': 'Can you improve an existing site?', 'faq.a5': "Absolutely. We audit your current site, find what's holding it back, and fix or rebuild what needs it — no need to start from scratch.",
          'faq.q6': 'How do payments work?', 'faq.a6': 'Usually a deposit to start and the balance on delivery, with milestones for larger projects. Payment in instalments is possible. Everything is put in writing before we begin.',
          'pcta.title': 'Not sure which<br><em>plan fits?</em>', 'pcta.sub': "Tell us about your project and we'll recommend the right plan. We reply within 24 hours.", 'pcta.cta': "Let's talk",
          'workpage.title': 'Projects that<br><em>deliver</em>', 'workcta.title': 'Are you<br><em>next?</em>',
          'contact.label': 'Ready to start?', 'contact.title': "Let's talk about<br><em>your project.</em>", 'contact.sub': 'Tell us about your project. We reply within 24 hours — no sales pitch, just a real conversation.', 'contact.whatsapp': 'Chat on WhatsApp',
          'form.name': 'Name', 'form.namePh': 'Your name', 'form.email': 'Email', 'form.emailPh': 'your@email.com', 'form.message': 'Message', 'form.messagePh': 'Tell us about your project…', 'form.submit': 'Send message →', 'form.sent': 'Message sent.', 'form.sentSub': "We'll be in touch within 24 hours.",
          'cookie.text': 'We use cookies to measure and improve our site. Accept, reject, or manage your choices — see our', 'cookie.privacy': 'Privacy Policy', 'cookie.reject': 'Reject all', 'cookie.manage': 'Manage', 'cookie.accept': 'Accept all',
          'cprefs.title': 'Cookie preferences', 'cprefs.intro': 'Choose which cookies we can use. You can change this anytime.', 'cprefs.necessary': 'Strictly necessary', 'cprefs.always': 'Always on', 'cprefs.necessaryDesc': 'Needed for the site to function. These never track you.', 'cprefs.analytics': 'Analytics — Google Analytics', 'cprefs.analyticsDesc': 'Anonymous stats (pages viewed, device) so we can improve the site. Google Analytics loads only if this is on.', 'cprefs.save': 'Save preferences', 'cprefs.acceptAll': 'Accept all',
          'about.label': 'Who we are', 'about.title': 'Technology that works while <em>you run your business</em>.', 'about.intro': 'Kelthen is a fast-growing digital agency driven by one thing: helping entrepreneurs and local businesses win more customers while spending less time on admin. We build the websites, tools and automations that keep your business running quietly in the background. We stay small on purpose — so every project puts you in direct contact with the people actually building it.',
          'about.story1Title': 'Why we started', 'about.story1a': 'Kelthen was born from a simple observation: too many great businesses are held back by clunky tools, slow websites and manual work a little technology could handle in seconds.', 'about.story1b': 'We set out to build the agency we wished existed — one that moves fast, speaks plainly, and treats a small business budget with the same respect as a big one.',
          'about.story2Title': 'How we work', 'about.story2a': 'We take on a limited number of projects at a time. That means real attention, visible progress every week, and direct access to the team — no middlemen, no telephone game.', 'about.story2b': "Our greatest pride is seeing a shop fill up, a calendar get booked, a business owner finally breathe. We build it right the first time and stay around after launch.",
          'values.label': 'What guides us', 'values.title': 'Our <em>values</em>',
          'val1.title': 'Craft over shortcuts', 'val1.desc': "We sweat the details no one notices — because they're exactly what earns trust.",
          'val2.title': 'Total clarity', 'val2.desc': 'Fixed prices, plain language, honest timelines. No jargon, no hidden fees, no bad surprises at the end.',
          'val3.title': 'Built to last', 'val3.desc': 'We build systems that keep running — maintainable, documented, and yours. No lock-in.',
          'val4.title': 'Close to you', 'val4.desc': 'You talk directly to the people building. Your goals become ours, from start to finish.',
          'val5.title': 'Real impact', 'val5.desc': 'We measure success by what changes for you — more customers, less busywork, more loyal clients.',
          'val6.title': 'Here for everyone', 'val6.desc': 'Based in Canada, we support entrepreneurs everywhere — every business deserves the same tools, wherever it is.',
          'team.label': 'The faces', 'team.title': 'Executive <em>team</em>', 'svc.demo': '▶ See the demo', 'demo.eyebrow': 'Live demo',
          'team.role1': 'Software & automation developer', 'team.role2': 'Founder', 'team.role3': 'Marketing & social media', 'team.note': "Real photos of the team are on the way — we're putting faces to the work so you know exactly who you're building with.",
          'bridge.quote': 'Our mission: give every business the <em>means to succeed</em>.', 'bridge.flags': 'Based in Canada &nbsp;·&nbsp; serving entrepreneurs everywhere &nbsp;·&nbsp; since 2025',
          'aboutcta.title': "Let's build<br><em>together?</em>", 'aboutcta.sub': 'Tell us about your project. We reply within 24 hours — no sales pitch, just a real conversation.', 'aboutcta.cta': 'Start a project',
          'legal.eyebrow': 'Legal', 'legal.updated': 'Last updated · July 2026',
          'privacy.name': 'Privacy Policy', 'privacy.intro': 'Kelthen (“we”, “us”) is a digital agency based in Canada. This policy explains what data we collect when you visit <strong>kelthen.com</strong> and how we use it. For any question, reach us at <a href="mailto:contact@kelthen.com">contact@kelthen.com</a>.', 'privacy.h1': 'Analytics & cookies', 'privacy.p1': 'We use Google Analytics 4 to understand how visitors use the site. It sets cookies and processes technical data such as your IP-anonymized approximate location, device, browser and the pages you view. We use this only to measure and improve the site — never to identify you personally.', 'privacy.h2': 'Contact form', 'privacy.p2': 'If you contact us through the form or by email, we use the details you provide (name, email, message) solely to reply to your request. We never sell your data or share it with third parties for marketing.', 'privacy.h3': 'Your rights', 'privacy.p3': 'You can request access to, correction of, or deletion of your personal data at any time by emailing <a href="mailto:contact@kelthen.com">contact@kelthen.com</a>. You can also block or delete cookies through your browser settings.', 'privacy.h4': 'Hosting & jurisdiction', 'privacy.p4': 'The site is hosted on Vercel’s global infrastructure; analytics data is processed by Google. This policy is governed by the laws of Canada.',
          'terms.name': 'Terms of Use', 'terms.intro': 'These terms govern your use of <strong>kelthen.com</strong> (the “site”), operated by Kelthen (“we”, “us”), a digital agency based in Canada. By using the site, you agree to these terms. If you do not agree, please do not use the site.', 'terms.h1': 'Use of the site', 'terms.p1': 'You may browse the site for lawful, personal or business purposes. You agree not to misuse it — no attempts to disrupt, probe, or gain unauthorized access, and no automated scraping that harms the service.', 'terms.h2': 'Intellectual property', 'terms.p2': "The site's design, text, code, logos and visuals are owned by Kelthen unless stated otherwise. Project names and screenshots shown in our portfolio remain the property of their respective owners and are displayed as work samples. You may not copy or reuse our content without written permission.", 'terms.h3': 'Our services', 'terms.p3': 'The site is informational. Prices and packages shown are indicative starting points, not binding offers. Any actual engagement is governed by a separate written agreement (proposal, quote or contract) signed between you and Kelthen — those terms prevail over anything on the site.', 'terms.h4': 'No warranties & limitation of liability', 'terms.p4': 'The site is provided “as is”, without warranties of any kind. To the fullest extent permitted by law, Kelthen is not liable for any indirect or consequential damages arising from your use of the site or reliance on its content.', 'terms.h5': 'External links', 'terms.p5': 'The site may link to third-party services (e.g. WhatsApp, social networks). We are not responsible for their content or practices.', 'terms.h6': 'Changes', 'terms.p6': 'We may update these terms from time to time. Continued use of the site after changes means you accept the revised terms.', 'terms.h7': 'Governing law', 'terms.p7': 'These terms are governed by the laws of Canada. For any question, reach us at <a href="mailto:contact@kelthen.com">contact@kelthen.com</a>.'
        }
      };
      // French is the base text already in the HTML — capture it as the "fr" dictionary
      DICT.fr = {};
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (DICT.fr[key] == null) DICT.fr[key] = el.hasAttribute('data-i18n-html') ? el.innerHTML : el.textContent;
      });
      // French strings for JS-injected UI (cookie banner / preferences), which
      // aren't in the initial DOM when the dictionary is captured.
      Object.assign(DICT.fr, {
        'cookie.text': 'Nous utilisons des cookies pour mesurer et améliorer notre site. Acceptez, refusez ou gérez vos choix — voir notre',
        'cookie.privacy': 'Politique de confidentialité', 'cookie.reject': 'Tout refuser', 'cookie.manage': 'Gérer', 'cookie.accept': 'Tout accepter',
        'cprefs.title': 'Préférences cookies', 'cprefs.intro': 'Choisissez les cookies que nous pouvons utiliser. Modifiable à tout moment.',
        'cprefs.necessary': 'Strictement nécessaires', 'cprefs.always': 'Toujours actifs', 'cprefs.necessaryDesc': 'Indispensables au fonctionnement du site. Ils ne vous suivent jamais.',
        'cprefs.analytics': 'Analytics — Google Analytics', 'cprefs.analyticsDesc': 'Statistiques anonymes (pages vues, appareil) pour améliorer le site. Google Analytics ne se charge que si activé.',
        'cprefs.save': 'Enregistrer', 'cprefs.acceptAll': 'Tout accepter',
        'svc.demo': '▶ Voir la démo'
      });

      function apply(lang) {
        current = lang;
        const dict = DICT[lang] || DICT.fr;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach((el) => {
          const val = dict[el.getAttribute('data-i18n')];
          if (val == null) return;
          if (el.hasAttribute('data-i18n-html')) el.innerHTML = val; else el.textContent = val;
        });
        document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
          const val = dict[el.getAttribute('data-i18n-ph')];
          if (val != null) el.setAttribute('placeholder', val);
        });
        document.querySelectorAll('[data-lang-btn]').forEach((b) => {
          b.classList.toggle('active', b.getAttribute('data-lang-btn') === lang);
        });
        // Whole-block language switch (used on the legal pages)
        document.querySelectorAll('[data-lang-block]').forEach((el) => {
          el.style.display = el.getAttribute('data-lang-block') === lang ? '' : 'none';
        });
        // Drive the hero "Intelligence System" experience if mounted
        if (typeof window.__kxSetLang === 'function') window.__kxSetLang(lang);
        // Re-render the portfolio cards / open modal in the new language
        if (typeof window.__portfolioRerender === 'function') window.__portfolioRerender();
      }

      let current = 'en';
      try { current = localStorage.getItem('kelthen-lang') || 'en'; } catch (e) {}
      apply(current);
      // Re-apply (used after JS injects new [data-i18n] elements, e.g. cookie UI)
      window.__i18nApply = function () { apply(current); };
      window.__i18nLang = function () { return current; };
      document.querySelectorAll('[data-lang-btn]').forEach((b) => {
        b.addEventListener('click', () => {
          const l = b.getAttribute('data-lang-btn');
          try { localStorage.setItem('kelthen-lang', l); } catch (e) {}
          apply(l);
        });
      });
    })();

    // ─── Portfolio: real projects + faithful CSS mockups (3-5 screens each) ───
    // Mockups reproduce the real apps' UIs (palettes & content from the source code).

    // hex → rgba helper (for accent-tinted card previews)
    function hexA(hex, a) {
      const n = parseInt(hex.slice(1), 16);
      return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
    }

    // device frames
    function wrapFrame(p, screenHtml, deviceOverride) {
      const device = deviceOverride || p.device;
      if (device === 'browser') {
        return `<div class="mk-browser"><div class="mk-browser-bar"><span class="d d1"></span><span class="d d2"></span><span class="d d3"></span><span class="mk-url">${p.url || ''}</span></div><div class="mk-browser-screen">${screenHtml}</div></div>`;
      }
      if (device === 'raw') {
        return screenHtml;
      }
      if (device === 'bare') {
        return `<div class="mk-bare">${screenHtml}</div>`;
      }
      return `<div class="mk-phone"><div class="mk-phone-screen">${screenHtml}</div></div>`;
    }

    // A screen is either a hand-drawn mockup (f) OR a real screenshot (img: "screens/xxx.png")
    function screenContent(s) {
      return s.img
        ? `<img src="${s.img}" alt="${s.t || ''}" loading="lazy" class="mk-shot">`
        : s.f();
    }

    /* ════ ABO — Next.js marketplace, palette navy #0F2A4A / teal #0D9488 ════ */
    function mkAboHome() {
      return `<div class="mk" style="background:#F8F9FA;color:#212529;font-size:11px">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 14px"><span style="color:#0F2A4A;font-size:14px;font-weight:800">ABO</span><span style="color:#0F2A4A;font-size:10px;font-weight:500">Se connecter</span></div>
        <div style="background:#0F2A4A;color:#fff;padding:16px 14px"><span style="background:#CCFBF1;color:#0B7A70;border-radius:20px;padding:4px 9px;font-size:9px;font-weight:500">🛡 12 artisans vérifiés</span><div style="font-size:18px;font-weight:500;line-height:1.25;margin-top:10px">Trouvez un artisan <span style="color:#2DD4BF">vérifié</span> à Lomé</div><div style="font-size:9px;line-height:1.5;color:rgba(255,255,255,.8);margin-top:7px">Identité confirmée par l'équipe ABO. Avis authentiques. Contact WhatsApp direct — plus de mauvaises surprises.</div>
          <div style="display:flex;gap:6px;background:#fff;border-radius:11px;padding:6px;margin-top:11px"><div style="flex:1;display:flex;flex-direction:column;gap:6px"><div style="border:1px solid #E9ECEF;border-radius:8px;padding:6px 9px;font-size:10px;color:#212529">Tous les métiers ▾</div><div style="border:1px solid #E9ECEF;border-radius:8px;padding:6px 9px;font-size:10px;color:#6C757D">Ville ou quartier</div></div><div style="background:#0D9488;color:#fff;border-radius:8px;padding:0 12px;display:flex;align-items:center;font-size:10px;font-weight:500">⌕ Chercher</div></div>
        </div>
        <div style="padding:12px 14px"><div style="color:#0F2A4A;font-size:11px;font-weight:600;margin-bottom:8px">Artisans vérifiés en vedette</div><div style="display:flex;align-items:center;gap:10px;border:1px solid #E9ECEF;background:#fff;border-radius:14px;padding:10px"><div style="width:40px;height:40px;border-radius:50%;background:#0F2A4A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0">K</div><div style="flex:1"><div style="display:flex;align-items:center;gap:5px"><span style="color:#0F2A4A;font-size:13px;font-weight:500">Kofi A.</span><span style="background:#CCFBF1;color:#0B7A70;border-radius:20px;padding:1px 6px;font-size:8px;font-weight:500">🛡 Vérifié</span></div><div style="font-size:10px;color:#6C757D">Plombier · Lomé · Tokoin</div><div style="font-size:10px"><span style="color:#D97706">★ 4.8</span><span style="color:#6C757D"> · 23 avis</span></div></div></div>
          <div style="display:flex;gap:6px;margin-top:8px"><div style="flex:1;background:#25D366;color:#fff;border-radius:8px;padding:8px;text-align:center;font-size:10px;font-weight:600">WhatsApp</div><div style="flex:1;background:#0D9488;color:#fff;border-radius:8px;padding:8px;text-align:center;font-size:10px;font-weight:600">Demander un devis</div></div>
        </div>
      </div>`;
    }
    function mkAboResults() {
      const list = [['K', 'Kofi A.', 'Plombier · Tokoin', '4.8', '23', true], ['E', 'Esi M.', 'Plombier · Bè', '4.9', '31', true], ['D', 'Dodzi K.', 'Plombier · Adidogomé', '4.6', '12', false]];
      return `<div class="mk" style="background:#F8F9FA;color:#212529;font-size:11px;min-height:300px">
        <div style="background:#0F2A4A;color:#fff;padding:11px 14px"><div style="font-size:14px;font-weight:800;margin-bottom:7px">ABO</div><div style="display:flex;gap:6px"><div style="flex:1;background:#fff;color:#212529;border-radius:8px;padding:6px 9px;font-size:10px">Plombier ▾</div><div style="flex:1;background:#fff;color:#212529;border-radius:8px;padding:6px 9px;font-size:10px">Lomé ▾</div></div></div>
        <div style="padding:11px 14px"><div style="font-size:10px;color:#6C757D;margin-bottom:9px"><b style="color:#0F2A4A">8 artisans</b> · Plombier à Lomé</div>${list.map(a => `<div style="display:flex;align-items:center;gap:9px;border:1px solid #E9ECEF;background:#fff;border-radius:12px;padding:9px;margin-bottom:7px"><div style="width:36px;height:36px;border-radius:50%;background:#0F2A4A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">${a[0]}</div><div style="flex:1"><div style="display:flex;align-items:center;gap:5px"><span style="color:#0F2A4A;font-size:12px;font-weight:600">${a[1]}</span>${a[5] ? '<span style="background:#CCFBF1;color:#0B7A70;border-radius:20px;padding:1px 6px;font-size:7px;font-weight:600">🛡 Vérifié</span>' : ''}</div><div style="font-size:9px;color:#6C757D">${a[2]}</div><div style="font-size:9px"><span style="color:#D97706">★ ${a[3]}</span><span style="color:#6C757D"> · ${a[4]} avis</span></div></div><span style="color:#0D9488;font-size:14px">›</span></div>`).join('')}</div>
      </div>`;
    }
    function mkAboProfile() {
      return `<div class="mk" style="background:#F8F9FA;color:#212529;font-size:11px;min-height:300px">
        <div style="background:#0F2A4A;color:#fff;padding:14px"><div style="display:flex;align-items:center;gap:11px"><div style="width:48px;height:48px;border-radius:50%;background:#fff;color:#0F2A4A;display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:600;flex-shrink:0">K</div><div><div style="display:flex;align-items:center;gap:6px"><span style="font-size:16px;font-weight:600">Kofi A.</span><span style="background:#CCFBF1;color:#0B7A70;border-radius:20px;padding:2px 7px;font-size:8px;font-weight:600">🛡 Vérifié ABO</span></div><div style="font-size:10px;color:rgba(255,255,255,.75)">Plombier · Lomé · Tokoin</div><div style="font-size:10px;margin-top:2px"><span style="color:#FBBF24">★ 4.8</span> · 23 avis</div></div></div></div>
        <div style="padding:12px 14px"><div style="font-size:9px;font-weight:700;text-transform:uppercase;color:#6C757D;margin-bottom:6px">Services</div><div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:11px"><span style="background:#fff;border:1px solid #E9ECEF;border-radius:7px;padding:4px 8px;font-size:9px">Dépannage fuite</span><span style="background:#fff;border:1px solid #E9ECEF;border-radius:7px;padding:4px 8px;font-size:9px">Installation</span><span style="background:#fff;border:1px solid #E9ECEF;border-radius:7px;padding:4px 8px;font-size:9px">Sanitaire</span></div>
          <div style="font-size:9px;font-weight:700;text-transform:uppercase;color:#6C757D;margin-bottom:6px">Réalisations</div><div style="display:flex;gap:6px;margin-bottom:11px"><div style="flex:1;height:46px;border-radius:9px;background:linear-gradient(135deg,#0D9488,#0F2A4A)"></div><div style="flex:1;height:46px;border-radius:9px;background:linear-gradient(135deg,#2DD4BF,#0D9488)"></div><div style="flex:1;height:46px;border-radius:9px;background:linear-gradient(135deg,#0F2A4A,#0B7A70)"></div></div>
          <div style="display:flex;gap:6px"><div style="flex:1;background:#25D366;color:#fff;border-radius:9px;padding:9px;text-align:center;font-size:11px;font-weight:600">WhatsApp</div><div style="flex:1;background:#0D9488;color:#fff;border-radius:9px;padding:9px;text-align:center;font-size:11px;font-weight:600">Demander un devis</div></div>
        </div>
      </div>`;
    }
    function mkAboVerif() {
      const steps = [['✓', 'Téléphone vérifié', 'Code OTP par SMS · +228', 'done'], ['✓', "Pièce d'identité", 'CNI · stockage sécurisé R2', 'done'], ['◐', 'En revue par ABO', "Dossier examiné sous 48 h", 'active'], ['○', 'Badge Vérifié ABO', 'Visible par les clients', 'todo']];
      const c = { done: ['#0D9488', '#CCFBF1'], active: ['#D97706', '#FEF3C7'], todo: ['#ADB5BD', '#F1F3F5'] };
      return `<div class="mk" style="background:#F8F9FA;color:#212529;font-size:11px;min-height:300px">
        <div style="background:#0F2A4A;color:#fff;padding:14px"><div style="font-size:14px;font-weight:800;margin-bottom:6px">Devenir artisan vérifié</div><div style="font-size:9px;color:rgba(255,255,255,.75);line-height:1.5">Inscription en moins de 10 minutes. Identité confirmée par l'équipe ABO.</div></div>
        <div style="padding:14px">${steps.map((s, i) => `<div style="display:flex;gap:10px;${i < 3 ? 'padding-bottom:14px' : ''}"><div style="display:flex;flex-direction:column;align-items:center"><div style="width:26px;height:26px;border-radius:50%;background:${c[s[3]][1]};color:${c[s[3]][0]};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0">${s[0]}</div>${i < 3 ? '<div style="width:1.5px;flex:1;background:#E9ECEF;margin:3px 0"></div>' : ''}</div><div style="padding-top:3px"><div style="font-size:11px;font-weight:700">${s[1]}</div><div style="font-size:9px;color:#6C757D">${s[2]}</div></div></div>`).join('')}</div>
      </div>`;
    }
    // ABO — the WhatsApp quote (devis) execution the marketplace triggers
    function mkAboDevis() {
      const waIn = (t) => `<div style="align-self:flex-start;max-width:82%;background:#fff;border-radius:8px 8px 8px 2px;padding:6px 9px;font-size:10px;line-height:1.45;box-shadow:0 1px 1px rgba(0,0,0,.08)">${t}</div>`;
      const waOut = (t) => `<div style="align-self:flex-end;max-width:82%;background:#DCF8C6;border-radius:8px 8px 2px 8px;padding:6px 9px;font-size:10px;line-height:1.45;box-shadow:0 1px 1px rgba(0,0,0,.08)">${t}</div>`;
      return `<div class="mk" style="font-size:11px;color:#1f2c33;background:#ECE5DD">
        <div style="display:flex;align-items:center;gap:8px;background:#075E54;color:#fff;padding:10px 12px"><span style="font-size:13px">‹</span><div style="width:28px;height:28px;border-radius:50%;background:#0F2A4A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">K</div><div style="line-height:1.2;flex:1"><div style="display:flex;align-items:center;gap:5px"><span style="font-size:11px;font-weight:600">Kofi A.</span><span style="background:rgba(255,255,255,.22);border-radius:20px;padding:1px 6px;font-size:7px;font-weight:600">🛡 Vérifié ABO</span></div><div style="font-size:8px;color:rgba(255,255,255,.75)">Plombier · en ligne</div></div></div>
        <div style="display:flex;flex-direction:column;gap:6px;padding:12px 10px;min-height:300px">
          <div style="align-self:center;background:rgba(0,0,0,.06);color:#5b6b63;border-radius:8px;padding:3px 9px;font-size:8px">Devis initié via ABO 🛡</div>
          ${waOut("Bonjour Kofi 👋 Fuite sous l'évier à Tokoin, dispo cette semaine ?")}
          ${waIn('Bonjour ! Oui, dispo demain matin. Une photo du problème ?')}
          ${waOut('<div style="width:72px;height:48px;border-radius:6px;background:linear-gradient(135deg,#0D9488,#0F2A4A)"></div>')}
          ${waIn('Merci 🙏 Siphon + joint : <b>8 000–12 000 FCFA</b>, déplacement inclus. Je confirme pour 9h ?')}
          ${waOut('Parfait, à demain ! 🙏')}
        </div>
      </div>`;
    }

    /* ════ Cuties Chichi — site de réservation + automation n8n réelle (brand #C6447A) ════ */
    function tgIn(t) { return `<div style="align-self:flex-start;max-width:88%;background:#fff;border-radius:9px 9px 9px 2px;padding:7px 10px;box-shadow:0 1px 1px rgba(0,0,0,.06);font-size:10px;line-height:1.45">${t}</div>`; }
    function tgBtn(t) { return `<span style="display:inline-block;background:#fff;color:#3390ec;border-radius:6px;padding:5px 10px;font-size:9px;font-weight:600;box-shadow:0 1px 1px rgba(0,0,0,.06)">${t}</span>`; }

    // 1 — booking site, reproduced faithfully from the live chichi-cuties.vercel.app
    function mkChichiSite() {
      const stats = [['7', 'Styles signature'], ['7j/7', 'Ouvert tous les jours'], ['10h–22h', 'Horaires']];
      return `<div class="mk" style="background:#1C1417;color:#FBF6F1;font-size:11px;min-height:300px">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:11px 13px"><div style="display:flex;align-items:center;gap:7px"><span style="width:20px;height:20px;border-radius:50%;background:#C6447A;display:flex;align-items:center;justify-content:center;font-size:9px">🌸</span><span style="font-family:var(--serif);font-size:14px;font-weight:700">Cuties Chichi</span></div><span style="background:#C6447A;color:#FBF6F1;border-radius:20px;padding:5px 12px;font-size:8px;font-weight:700">Let's shine</span></div>
        <div style="padding:6px 14px 16px">
          <div style="font-family:var(--mono);font-size:7px;letter-spacing:.15em;text-transform:uppercase;color:#FF9FC4;margin-bottom:9px">Ottawa, ON — Tressage artisanal</div>
          <div style="font-family:var(--serif);font-size:24px;line-height:1.02;font-weight:600">La coiffure<br><em style="font-style:italic;color:#FF9FC4">que vos cheveux méritent.</em></div>
          <div style="font-size:9px;line-height:1.55;color:rgba(251,246,241,.72);margin-top:9px">Chaque installation est faite à la main, mèche par mèche — des tresses knotless aux locs complètes.</div>
          <div style="display:flex;gap:7px;margin-top:13px"><span style="background:#C6447A;color:#FBF6F1;border-radius:22px;padding:9px 15px;font-size:9px;font-weight:700">Réserver un rendez-vous →</span><span style="border:1px solid rgba(251,246,241,.3);color:#FBF6F1;border-radius:22px;padding:9px 15px;font-size:9px;font-weight:600">Voir les services</span></div>
          <div style="display:flex;gap:15px;margin-top:16px">${stats.map(s => `<div><div style="font-family:var(--serif);font-size:18px;font-weight:700;color:#FF9FC4">${s[0]}</div><div style="font-size:7px;color:rgba(251,246,241,.6)">${s[1]}</div></div>`).join('')}</div>
          <div style="margin-top:14px;background:rgba(251,246,241,.06);border:1px solid rgba(251,246,241,.1);border-radius:12px;padding:9px 11px;display:flex;align-items:center;gap:9px"><span style="width:22px;height:22px;border-radius:50%;background:#C6447A;display:flex;align-items:center;justify-content:center;font-size:10px">🕐</span><div><div style="font-size:9px;font-weight:700">Réservez en ligne, payez sur place</div><div style="font-size:7.5px;color:rgba(251,246,241,.55)">Prix exact confirmé sous 48h</div></div></div>
        </div>
      </div>`;
    }

    // 2 — the real notification Chichi receives (Telegram + WhatsApp)
    function mkChichiNotif() {
      const msg = `💇 <b>Nouvelle demande de rendez-vous</b><br><br>👤 Marie L.<br>📞 +1 613 •••-••42<br>💅 Tresses Knotless&nbsp;&nbsp;(120–160 $)<br>🗓️ samedi 2 août à 14:00<br>📎 Photo de référence :<div style="margin-top:5px;width:62px;height:62px;border-radius:8px;background:linear-gradient(135deg,#C6447A,#1C1417);display:flex;align-items:center;justify-content:center;font-size:22px">💇🏾‍♀️</div>`;
      return `<div class="mk" style="font-size:11px;color:#1f2c33;background:#d9e4dd">
        <div style="display:flex;align-items:center;gap:8px;background:#527da3;color:#fff;padding:11px 12px 9px"><span style="font-size:13px">‹</span><div style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:13px">🔔</div><div style="line-height:1.2"><div style="font-size:11px;font-weight:600">Cuties Chichi · automatisation</div><div style="font-size:8px;color:rgba(255,255,255,.7)">notifications · en ligne</div></div></div>
        <div style="display:flex;flex-direction:column;gap:7px;padding:12px 10px;min-height:300px">${tgIn(msg)}<div style="align-self:flex-start">${tgBtn('🔎 Voir &amp; valider la demande')}</div><div style="align-self:center;background:rgba(0,0,0,.08);color:#5b6b63;border-radius:20px;padding:3px 10px;font-size:8px">📨 aussi envoyé sur WhatsApp ✓</div></div>
      </div>`;
    }

    // 3 — the REAL n8n validation workflow, redrawn on-brand
    function mkChichiFlow() {
      const node = (icon, title, sub, tint) => `<div style="display:flex;align-items:center;gap:9px;background:#052B3E;border:1px solid rgba(3, 120, 91,.28);border-left:3px solid ${tint || '#03785B'};border-radius:9px;padding:8px 10px"><span style="font-size:14px;line-height:1;flex-shrink:0">${icon}</span><div style="line-height:1.25"><div style="font-size:10px;font-weight:700;color:#F0EDE8">${title}</div>${sub ? `<div style="font-size:8px;color:rgba(240,237,232,.5)">${sub}</div>` : ''}</div></div>`;
      const wire = `<div style="height:11px;width:2px;background:linear-gradient(#03785B,rgba(3, 120, 91,.2));margin:2px auto"></div>`;
      const mini = (icon, label, tint) => `<div style="background:#052B3E;border:1px solid rgba(3, 120, 91,.22);border-top:2px solid ${tint};border-radius:8px;padding:7px 4px;text-align:center"><div style="font-size:13px;line-height:1">${icon}</div><div style="font-size:7.5px;color:rgba(240,237,232,.7);margin-top:3px">${label}</div></div>`;
      return `<div class="mk" style="background:#011E2E;padding:13px 12px;min-height:300px">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:11px"><span style="width:7px;height:7px;border-radius:50%;background:#EA4B71"></span><span style="font-family:var(--mono);font-size:7px;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,237,232,.55)">Automatisation · Validation (réel)</span></div>
        ${node('⚡', 'Nouvelle demande', 'Reçue depuis le site', '#EA4B71')}
        ${wire}
        ${node('⚙️', 'Préparer la demande', 'Automatique')}
        ${wire}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${mini('📨', 'Telegram', '#03785B')}${mini('🟢', 'WhatsApp', '#25D366')}</div>
        <div style="font-size:7.5px;color:rgba(240,237,232,.5);text-align:center;margin:7px 0 5px">Chichi confirme / décline 👆</div>
        ${node('🗄️', 'Réservation enregistrée', 'Sans doublon', '#3ECF8E')}
        ${wire}
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px">${mini('✉️', 'Email', '#EA4335')}${mini('💬', 'SMS', '#F22F46')}${mini('📅', 'Agenda', '#4285F4')}</div>
      </div>`;
    }

    // 4 — what the client receives: confirmation SMS + automatic reminder
    function mkChichiConfirm() {
      const smsIn = (t) => `<div style="align-self:flex-start;max-width:87%;background:#fff;border-radius:14px 14px 14px 4px;padding:8px 11px;font-size:10px;line-height:1.5;box-shadow:0 1px 1px rgba(0,0,0,.06)">${t}</div>`;
      return `<div class="mk" style="font-size:11px;color:#1f2c33;background:#eceff3">
        <div style="display:flex;align-items:center;gap:8px;background:#f7f8fa;border-bottom:1px solid #e2e6ea;padding:10px 12px"><span style="font-size:13px;color:#8a97a3">‹</span><div style="width:26px;height:26px;border-radius:50%;background:#C6447A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">C</div><div style="line-height:1.2"><div style="font-size:11px;font-weight:600">Cuties Chichi</div><div style="font-size:8px;color:#8a97a3">SMS</div></div></div>
        <div style="display:flex;flex-direction:column;gap:9px;padding:13px 10px;min-height:300px">${smsIn('Bonjour Marie ✨ Votre rendez-vous chez Cuties Chichi est <b>CONFIRMÉ</b> : Tresses — 140 $, le samedi 2 août à 14:00. 1066 Somerset St W, Ottawa. À bientôt !')}<div style="align-self:center;background:rgba(0,0,0,.07);color:#66727d;border-radius:20px;padding:3px 10px;font-size:8px">— la veille · rappel automatique —</div>${smsIn("⏰ Rappel : votre RDV <b>Tresses</b> c'est demain à <b>14:00</b> chez Cuties Chichi. Un empêchement ? Répondez à ce message. 💛")}</div>
      </div>`;
    }

    /* ════ Kelthen — le site agence (palette bleu/dark) ════ */
    const KMARK = (barCol) => `<svg viewBox="0 0 258 242" style="height:15px;width:auto" aria-hidden="true"><path d="M65.3 185.8 L0 185.8 L78.4 56.9 L142.3 59 Z" fill="${barCol}"></path><path d="M177.9 129 L254.3 242.2 L187.3 242.2 L145.8 180.6 L111.8 130.2 L143.9 78.6 L192.7 0 L258.1 0 Z" fill="#03785B"></path></svg>`;
    function mkNovaHero() {
      return `<div class="mk" style="background:radial-gradient(120% 100% at 80% 28%,#022B34,#011E2E 55%,#00121B);color:#F0EDE8;font-size:11px;min-height:210px;padding:14px;position:relative;overflow:hidden">
        <svg viewBox="0 0 258 242" style="position:absolute;right:-26px;top:16px;height:170px;opacity:.06" aria-hidden="true"><path d="M65.3 185.8 L0 185.8 L78.4 56.9 L142.3 59 Z" fill="#C1D9E5"></path><path d="M177.9 129 L254.3 242.2 L187.3 242.2 L145.8 180.6 L111.8 130.2 L143.9 78.6 L192.7 0 L258.1 0 Z" fill="#03785B"></path></svg>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:28px;position:relative">
          <span style="display:flex;align-items:center;gap:6px">${KMARK('#F0EDE8')}<span style="font-weight:700;letter-spacing:.06em;font-size:10px">KELTHEN</span></span>
          <span style="background:#03785B;color:#fff;border-radius:7px;padding:5px 11px;font-size:7px;font-weight:700">Free audit</span>
        </div>
        <div style="font-family:var(--mono);font-size:7px;letter-spacing:.2em;text-transform:uppercase;color:#7CC9AE;margin-bottom:9px;position:relative">Web · Automation · AI agents</div>
        <div style="font-weight:800;font-size:27px;line-height:.98;letter-spacing:-.03em;position:relative">One hub.<br><span style="color:#7CC9AE;font-style:italic;font-weight:700">All your growth.</span></div>
        <div style="display:flex;gap:8px;margin-top:16px;position:relative"><span style="background:#03785B;color:#fff;border-radius:9px;padding:8px 14px;font-size:8px;font-weight:700">Get a free audit</span><span style="color:rgba(240,237,232,.72);padding:8px 4px;font-size:8px;font-weight:500;text-decoration:underline;text-underline-offset:4px">See our projects</span></div>
      </div>`;
    }
    function mkNovaServices() {
      const s = [['01', 'Website'], ['02', 'Online booking'], ['03', 'AI receptionist'], ['04', 'SMS reminders'], ['05', 'Found on Google'], ['06', 'Reviews & loyalty']];
      return `<div class="mk" style="background:#011E2E;color:#F0EDE8;font-size:11px;min-height:210px;padding:14px">
        <div style="font-family:var(--mono);font-size:7px;letter-spacing:.18em;text-transform:uppercase;color:#7CC9AE;margin-bottom:8px">What we do for you</div>
        <div style="font-weight:700;font-size:22px;line-height:1;letter-spacing:-.03em;margin-bottom:14px">Your goals, <em style="color:#7CC9AE;font-style:italic">our solutions</em></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">${s.map(x => `<div style="background:#04283A;border:1px solid rgba(193,217,229,.1);border-radius:11px;padding:11px 10px"><div style="font-family:var(--mono);font-size:7px;color:#7CC9AE;margin-bottom:8px">${x[0]}</div><div style="font-weight:600;font-size:11px;letter-spacing:-.01em">${x[1]}</div></div>`).join('')}</div>
      </div>`;
    }
    function mkNovaPricing() {
      const t = [['The Essentials', '$900', false], ['The Business', '$2,500', true], ['Custom', 'On quote', false]];
      return `<div class="mk" style="background:#011E2E;color:#F0EDE8;font-size:11px;min-height:210px;padding:14px">
        <div style="font-family:var(--mono);font-size:7px;letter-spacing:.18em;text-transform:uppercase;color:#7CC9AE;margin-bottom:8px">Our plans</div>
        <div style="font-weight:700;font-size:22px;line-height:1;letter-spacing:-.03em;margin-bottom:14px">Clear plans. <em style="color:#7CC9AE;font-style:italic">Zero surprises.</em></div>
        <div style="display:flex;gap:8px">${t.map(x => `<div style="flex:1;background:#04283A;border:1px solid ${x[2] ? 'rgba(3,120,91,.6)' : 'rgba(193,217,229,.1)'};${x[2] ? 'border-top:2px solid #03785B;' : ''}border-radius:12px;padding:13px 8px;text-align:center"><div style="font-family:var(--mono);font-size:6.5px;text-transform:uppercase;letter-spacing:.08em;color:rgba(240,237,232,.5);margin-bottom:8px">${x[0]}</div><div style="font-weight:800;font-size:17px;letter-spacing:-.02em">${x[1]}</div><div style="margin-top:10px;border-radius:7px;padding:6px;font-size:7px;font-weight:700;${x[2] ? 'background:#03785B;color:#fff' : 'border:1px solid rgba(3,120,91,.35);color:rgba(240,237,232,.7)'}">${x[2] ? 'Get a quote' : "Let's talk"}</div></div>`).join('')}</div>
      </div>`;
    }

    // Animated chat simulation skeleton (engine fills .chat-sim-body)
    function mkChatSim() {
      return `<div class="chat-sim" data-chat-sim>
        <div class="chat-sim-phasebar"><span class="chat-sim-step">1 / 3</span><div><div class="chat-sim-title">Réservation</div><div class="chat-sim-explain">Le client réserve en discutant avec le bot AURA.</div></div></div>
        <div class="chat-sim-phone"><div class="chat-sim-head"><span style="font-size:12px">‹</span><div class="chat-sim-ava">🤖</div><div><div class="chat-sim-name">AURA · Cuties Chichi</div><div class="chat-sim-sub">assistante · en ligne</div></div></div><div class="chat-sim-body"></div></div>
      </div>`;
    }

    const projects = [
      {
        id: "001", name: "Network of Black Women",
        tagline: { en: 'A home online for a sisterhood of Black women in Alberta.', fr: 'Une maison en ligne pour une sororité de femmes noires en Alberta.' },
        category: { en: "Web · Nonprofit & Community", fr: "Web · OBNL & Communauté" }, year: "2026",
        accent: "#F6828F", device: "browser", url: "networkofblackwomen.ca", link: "https://networkofblackwomen.ca", featured: true,
        desc: {
          en: "Website and community platform for Network of Black Women — a sisterhood for Black women in Alberta. Online donations, event registration, an annual conference, a newsletter and easy content updates, in a warm identity (cream, brown, pink).",
          fr: "Site web et plateforme communautaire pour Network of Black Women — une sororité pour les femmes noires de l'Alberta. Dons en ligne, inscription aux événements, conférence annuelle, infolettre et mises à jour de contenu faciles, dans une identité chaleureuse (crème, brun, rose)."
        },
        stack: {
          en: ["Custom website", "Online donations", "Event tickets", "Newsletter", "Content management"],
          fr: ["Site sur-mesure", "Dons en ligne", "Billetterie", "Infolettre", "Gestion de contenu"]
        },
        features: [
          { icon: "💗", title: { en: "Online donations", fr: "Dons en ligne" }, desc: { en: "Secure payment — one-time or monthly, any amount.", fr: "Paiement sécurisé — don ponctuel ou mensuel, montant libre." } },
          { icon: "🎟️", title: { en: "Events & tickets", fr: "Événements & billetterie" }, desc: { en: "Sign up for events and the annual conference right from the site.", fr: "Inscription aux événements et à la conférence annuelle depuis le site." } },
          { icon: "🎤", title: { en: "Annual conference", fr: "Conférence annuelle" }, desc: { en: "A dedicated page (#OurEssence) for the organization's flagship event.", fr: "Une page dédiée (#OurEssence) pour l'événement phare de l'organisation." } },
          { icon: "✉️", title: { en: "Confirmed newsletter", fr: "Infolettre confirmée" }, desc: { en: "Email-confirmed sign-up, one-click unsubscribe — fully compliant.", fr: "Inscription confirmée par email, désinscription en un clic — conforme." } },
          { icon: "🗂️", title: { en: "Easy content updates", fr: "Contenu facile à gérer" }, desc: { en: "Events, news and gallery updated without touching any code.", fr: "Événements, actualités et galerie mis à jour sans toucher au code." } },
          { icon: "♿", title: { en: "Accessible & found on Google", fr: "Accessible & visible sur Google" }, desc: { en: "Strong contrasts, polished sharing previews and search-engine ready.", fr: "Bons contrastes, aperçus de partage soignés et prêt pour le référencement." } }
        ],
        screens: [
          { t: { en: "Home", fr: "Accueil" }, img: "assets/work/nbw-home.jpg", device: "browser" },
          { t: { en: "Donations", fr: "Dons" }, img: "assets/work/nbw-donate.jpg", device: "browser" },
          { t: { en: "Programs & initiatives", fr: "Programmes & initiatives" }, img: "assets/work/nbw-programs.jpg", device: "browser" },
          { t: { en: "Annual conference", fr: "Conférence annuelle" }, img: "assets/work/nbw-conference.jpg", device: "browser" }
        ]
      },
      {
        id: "002", name: "ABO",
        tagline: { en: 'Verified, trusted tradespeople across West Africa.', fr: "Des artisans vérifiés et de confiance en Afrique de l'Ouest." },
        category: { en: "Web · Marketplace", fr: "Web · Marketplace" }, year: "2025",
        accent: "#0D9488", device: "browser", url: "abo.tg", featured: false,
        desc: {
          en: "A mobile-first marketplace that gives the craftspeople of Lomé a credible online presence: a “Verified ABO” badge after identity checks, search by trade and neighbourhood, and direct quotes over WhatsApp.",
          fr: "Une marketplace pensée mobile qui donne aux artisans de Lomé une présence numérique crédible : badge « Vérifié ABO » après vérification d'identité, recherche par métier et quartier, et devis directs via WhatsApp."
        },
        stack: {
          en: ["Marketplace", "Verified profiles", "Local search", "WhatsApp contact", "Mobile-first"],
          fr: ["Marketplace", "Profils vérifiés", "Recherche locale", "Contact WhatsApp", "Pensé mobile"]
        },
        features: [
          { icon: "🛡️", title: { en: "Verified ABO badge", fr: "Badge Vérifié ABO" }, desc: { en: "Identity checked by hand before a profile goes live.", fr: "Identité contrôlée manuellement avant publication du profil." } },
          { icon: "🔎", title: { en: "Search by trade + area", fr: "Recherche métier + quartier" }, desc: { en: "Find a trusted craftsperson near you, in Lomé.", fr: "Trouver un artisan de confiance près de chez soi, à Lomé." } },
          { icon: "💬", title: { en: "Direct WhatsApp quote", fr: "Devis WhatsApp direct" }, desc: { en: "The client talks to the craftsperson, no middleman.", fr: "Le client parle à l'artisan, sans intermédiaire." } },
          { icon: "⭐", title: { en: "Genuine reviews", fr: "Avis authentiques" }, desc: { en: "Only real clients (who requested a quote) can leave a rating.", fr: "Seuls les vrais clients (passés par un devis) peuvent noter." } },
          { icon: "🚫", title: { en: "Anti-fraud", fr: "Anti-fraude" }, desc: { en: "Reports and automatic suspension past a threshold.", fr: "Signalements et suspension automatique au-delà d'un seuil." } }
        ],
        screens: [
          { t: { en: "Home & search", fr: "Accueil & recherche" }, f: mkAboHome },
          { t: { en: "Results", fr: "Résultats" }, f: mkAboResults },
          { t: { en: "Craftsperson profile", fr: "Profil artisan" }, f: mkAboProfile },
          { t: { en: "WhatsApp quote", fr: "Devis WhatsApp" }, f: mkAboDevis, device: "phone" },
          { t: { en: "Identity check", fr: "Vérification d'identité" }, f: mkAboVerif }
        ]
      },
      {
        id: "003", name: "Cuties Chichi",
        tagline: { en: "A hair salon's bookings, on autopilot.", fr: "Les réservations d'un salon, en pilote automatique." },
        category: { en: "Web · Booking & Automation", fr: "Web · Réservation & Automatisation" }, year: "2026",
        accent: "#C6447A", device: "browser", url: "chichi-cuties.vercel.app", link: "https://chichi-cuties.vercel.app", featured: false,
        desc: {
          en: "A booking site for an Afro hair salon in Ottawa, paired with automation: every request pings Chichi on Telegram and WhatsApp, she approves with one tap, then the client gets an email + SMS, Google Calendar updates, and reminders go out automatically 24h and 2h before the appointment.",
          fr: "Un site de réservation pour un salon afro à Ottawa, doublé d'une automatisation : chaque demande prévient Chichi sur Telegram et WhatsApp, elle valide d'un tap, puis la cliente reçoit email + SMS, l'agenda Google se met à jour, et des rappels partent automatiquement 24h et 2h avant le rendez-vous."
        },
        stack: {
          en: ["Online booking", "Automation", "SMS reminders", "Google Calendar", "WhatsApp & Telegram"],
          fr: ["Réservation en ligne", "Automatisation", "Rappels SMS", "Google Agenda", "WhatsApp & Telegram"]
        },
        features: [
          { icon: "📅", title: { en: "Online booking", fr: "Réservation en ligne" }, desc: { en: "6 services, exact price confirmed within 48h.", fr: "6 prestations, prix exact confirmé sous 48h." } },
          { icon: "🤖", title: { en: "AI receptionist (AURA)", fr: "Réceptionniste IA (AURA)" }, desc: { en: "Answers on web, Telegram, WhatsApp, Messenger and Instagram.", fr: "Répond sur web, Telegram, WhatsApp, Messenger et Instagram." } },
          { icon: "👆", title: { en: "One-tap approval", fr: "Validation en 1 tap" }, desc: { en: "Chichi confirms or declines from Telegram/WhatsApp.", fr: "Chichi confirme ou décline depuis Telegram/WhatsApp." } },
          { icon: "📎", title: { en: "Reference photo", fr: "Photo de référence" }, desc: { en: "Attached to the request to nail the style and price.", fr: "Jointe à la demande pour cadrer le style et le prix." } },
          { icon: "🔔", title: { en: "Multi-channel confirmation", fr: "Confirmation multi-canal" }, desc: { en: "Email + SMS + automatic add to Google Calendar.", fr: "Email + SMS + ajout automatique à Google Agenda." } },
          { icon: "⏰", title: { en: "Automatic reminders", fr: "Rappels automatiques" }, desc: { en: "24h and 2h before the appointment, no duplicates.", fr: "24h et 2h avant le rendez-vous, sans doublon." } }
        ],
        screens: [
          { t: { en: "Booking site", fr: "Site de réservation" }, f: mkChichiSite, device: "browser" },
          { t: { en: "Animated demo · bot → approval", fr: "Démo animée · bot → validation" }, f: mkChatSim, device: "raw" },
          { t: { en: "Chichi gets notified", fr: "Chichi est notifiée" }, f: mkChichiNotif, device: "phone" },
          { t: { en: "Automation (live)", fr: "Automatisation (réelle)" }, f: mkChichiFlow, device: "bare" },
          { t: { en: "Confirmation & auto reminder", fr: "Confirmation & rappel auto" }, f: mkChichiConfirm, device: "phone" }
        ]
      },
      {
        id: "004", name: "Kelthen",
        tagline: { en: 'Our own site: fast, alive and built to convert.', fr: 'Notre propre site : rapide, vivant et pensé pour convertir.' },
        category: { en: "Web · Agency", fr: "Web · Agence" }, year: "2025",
        accent: "#03785B", device: "browser", url: "kelthen.com", link: "https://kelthen.com", featured: false,
        desc: {
          en: "The agency's own site — ultra-light and ultra-fast, with no needless bloat. Premium art direction, refined micro-interactions and top performance.",
          fr: "Le site vitrine de l'agence — ultra-léger et ultra-rapide, sans surcouche inutile. Direction artistique premium, micro-interactions soignées et performance au top."
        },
        stack: {
          en: ["Showcase site", "Ultra-fast", "Found on Google", "Custom animations"],
          fr: ["Site vitrine", "Ultra-rapide", "Visible sur Google", "Animations sur-mesure"]
        },
        features: [
          { icon: "📄", title: { en: "Ultra-light", fr: "Ultra-léger" }, desc: { en: "No heavy layers — near-instant loading.", fr: "Aucune surcouche — chargement quasi instantané." } },
          { icon: "🔎", title: { en: "Found on Google", fr: "Visible sur Google" }, desc: { en: "Well referenced, with polished sharing previews and visit tracking.", fr: "Bien référencé, avec aperçus de partage soignés et suivi des visites." } },
          { icon: "⚡", title: { en: "Top performance", fr: "Performance au top" }, desc: { en: "Fast and smooth on phone and desktop alike.", fr: "Rapide et fluide sur mobile comme sur ordi." } },
          { icon: "✨", title: { en: "Custom animations", fr: "Animations sur-mesure" }, desc: { en: "Signature motion, scroll reveals and interactions.", fr: "Animations signatures, révélations au scroll et interactions." } }
        ],
        screens: [
          { t: { en: "Hero", fr: "Hero" }, f: mkNovaHero },
          { t: { en: "Services", fr: "Services" }, f: mkNovaServices },
          { t: { en: "Pricing", fr: "Tarifs" }, f: mkNovaPricing }
        ]
      }
    ];

    // ─── Portfolio i18n helpers ───
    // Localized fields are stored as { en, fr }; L() picks the current language.
    function pfLang() { return (window.__i18nLang && window.__i18nLang()) || 'en'; }
    function L(v) {
      if (v && typeof v === 'object' && !Array.isArray(v) && ('en' in v || 'fr' in v)) return v[pfLang()] != null ? v[pfLang()] : (v.en != null ? v.en : v.fr);
      return v;
    }
    const PF_UI = {
      en: { screensHint: (n) => `${n} screens — click`, viewProject: 'view project', seeScreens: 'see the screens', onWorkPage: 'see it on the Work page', visit: 'Visit site', features: 'Key features', keyScreens: (n) => `${n} key screens`, close: 'Close' },
      fr: { screensHint: (n) => `${n} écrans — cliquer`, viewProject: 'voir le projet', seeScreens: 'voir les écrans', onWorkPage: 'voir sur la page Work', visit: 'Visiter le site', features: 'Fonctionnalités clés', keyScreens: (n) => `${n} écrans clés`, close: 'Fermer' }
    };
    function pfUI() { return PF_UI[pfLang()]; }

    // Shared inner markup for a work card (used by the full grid and the home preview)
    function workCardInner(p, hintText) {
      const hero = wrapFrame(p, screenContent(p.screens[0]), p.screens[0].device);
      return `
        <div class="work-mockup" style="background:linear-gradient(150deg, ${hexA(p.accent, 0.22)} 0%, #0a0d13 78%)">
          <div class="mk-scale">${hero}</div>
          <span class="work-mockup-hint">↗ ${hintText}</span>
        </div>
        <div class="work-card-top">
          <span class="work-id">${p.id}</span>
          <span class="work-category">${L(p.category)}</span>
        </div>
        <div class="work-body">
          <h3 class="work-name">${p.name}</h3>
          <p class="work-desc">${L(p.tagline || p.desc)}</p>
        </div>
        <div class="work-card-bottom">
          <span class="work-year">${p.year}</span>
          <span class="work-arrow" aria-hidden="true">↗</span>
        </div>
      `;
    }

    // Full portfolio grid + modal — only on work.html
    function buildWorkGrid(revealNow) {
      const grid = document.getElementById('workGrid');
      if (!grid) return;
      grid.innerHTML = '';
      projects.forEach((p, idx) => {
        const card = document.createElement('article');
        card.className = (p.featured ? 'work-card featured reveal' : 'work-card reveal') + (revealNow ? ' visible' : '');
        card.setAttribute('role', 'listitem');
        card.tabIndex = 0;
        card.setAttribute('aria-label', `${p.name} — ${pfUI().seeScreens}`);
        card.innerHTML = workCardInner(p, pfUI().screensHint(p.screens.length));
        card.addEventListener('click', () => openProjectModal(idx));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(idx); }
        });
        grid.appendChild(card);
      });
    }
    buildWorkGrid(false);

    // Home preview — a few featured cards that link to the full Work page
    function buildWorkPreview(revealNow) {
      const grid = document.getElementById('workPreview');
      if (!grid) return;
      grid.innerHTML = '';
      projects.slice(0, 3).forEach((p) => {
        const card = document.createElement('a');
        card.className = (p.featured ? 'work-card featured reveal' : 'work-card reveal') + ' work-card-link' + (revealNow ? ' visible' : '');
        card.href = 'work.html';
        card.setAttribute('aria-label', `${p.name} — ${pfUI().onWorkPage}`);
        card.innerHTML = workCardInner(p, pfUI().viewProject);
        grid.appendChild(card);
      });
    }
    buildWorkPreview(false);

    // Re-render the portfolio (cards + open modal) when the language changes.
    window.__portfolioRerender = function () {
      buildWorkGrid(true);
      buildWorkPreview(true);
      if (pmOverlay && pmOverlay.classList.contains('open') && pmCurrentIdx != null) renderModalBody(pmCurrentIdx);
    };

    // ─── Project detail modal (gallery of screens) ───
    const pmOverlay = document.getElementById('projectModal');
    const pmDialog  = document.getElementById('projectModalBody');
    let pmLastFocus = null;
    let pmCurrentIdx = null;

    // Build the modal body for a project (also used to re-render on language change)
    function renderModalBody(idx) {
      const p = projects[idx];
      const ui = pfUI();
      const stackHtml = L(p.stack).map(s => `<span class="ws">${s}</span>`).join('');
      const screensHtml = p.screens.map(s =>
        `<div class="pm-screen"><div>${wrapFrame(p, screenContent(s), s.device)}</div><div class="pm-screen-cap"><span>◆</span>${L(s.t)}</div></div>`
      ).join('');
      const featuresHtml = (p.features || []).map(f =>
        `<div class="pm-feature"><span class="pm-feature-icon">${f.icon}</span><div><div class="pm-feature-title">${L(f.title)}</div><div class="pm-feature-desc">${L(f.desc)}</div></div></div>`
      ).join('');

      pmDialog.innerHTML = `
        <button class="pm-close" id="pmClose" type="button" aria-label="${ui.close}">✕</button>
        <p class="pm-eyebrow">${L(p.category)} · ${p.year}</p>
        <h2 class="pm-name">${p.name}</h2>
        <p class="pm-tagline">${L(p.tagline || p.desc)}</p>
        ${p.link ? `<a class="pm-visit" href="${p.link}" target="_blank" rel="noopener noreferrer">${ui.visit} <span aria-hidden="true">↗</span></a>` : ''}
        <div class="pm-screens">${screensHtml}</div>
        <p class="pm-desc">${L(p.desc)}</p>
        ${p.features ? `<p class="pm-screens-label">${ui.features}</p><div class="pm-features">${featuresHtml}</div>` : ''}
        <div class="pm-stack">${stackHtml}</div>
      `;
      const closeBtn = document.getElementById('pmClose');
      closeBtn.addEventListener('click', closeProjectModal);
      pmDialog.querySelectorAll('.chat-sim').forEach((el) => playChatSim(el));
      return closeBtn;
    }

    function openProjectModal(idx) {
      pmLastFocus = document.activeElement;
      pmCurrentIdx = idx;
      const closeBtn = renderModalBody(idx);
      pmOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function closeProjectModal() {
      pmOverlay.classList.remove('open');
      document.body.style.overflow = '';
      pmCurrentIdx = null;
      if (pmLastFocus && pmLastFocus.focus) pmLastFocus.focus();
    }

    if (pmOverlay) {
      pmOverlay.addEventListener('click', (e) => {
        if (e.target === pmOverlay) closeProjectModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pmOverlay.classList.contains('open')) closeProjectModal();
      });
    }

    // Deep-link: open a project from ?p=00X (e.g. from the homepage sector cards).
    // Deferred so the chat-sim engine (defined later in this file) is ready first.
    (function openProjectFromQuery() {
      if (!document.getElementById('workGrid')) return;
      const id = new URLSearchParams(location.search).get('p');
      if (!id) return;
      const idx = projects.findIndex((p) => p.id === id);
      if (idx >= 0) setTimeout(() => openProjectModal(idx), 0);
    })();

    // ─── Privacy Policy modal ───
    const privacyModal = document.getElementById('privacyModal');
    const privacyOpenBtn = document.getElementById('privacyOpen');
    const privacyCloseBtn = document.getElementById('privacyClose');
    let privacyLastFocus = null;

    function openPrivacy() {
      privacyLastFocus = document.activeElement;
      privacyModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      privacyCloseBtn.focus();
    }

    function closePrivacy() {
      privacyModal.classList.remove('open');
      document.body.style.overflow = '';
      if (privacyLastFocus && privacyLastFocus.focus) privacyLastFocus.focus();
    }

    if (privacyOpenBtn && privacyCloseBtn && privacyModal) {
      privacyOpenBtn.addEventListener('click', openPrivacy);
      privacyCloseBtn.addEventListener('click', closePrivacy);
      privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) closePrivacy();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && privacyModal.classList.contains('open')) closePrivacy();
      });
    }

    // ─── Nav fills on scroll ───
    const nav = document.getElementById('nav');

    if (nav) {
      let lastY = window.scrollY;
      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        nav.classList.toggle('scrolled', y > 20);
        // Hide the menu while scrolling down, bring it back as soon as the visitor scrolls up
        const menuOpen = document.getElementById('navMobile')?.classList.contains('open');
        if (!menuOpen && Math.abs(y - lastY) > 6) nav.classList.toggle('nav-hidden', y > lastY && y > 140);
        lastY = y;
      }, { passive: true });
    }

    // ─── Send a CTA to the contact section (same page) or the contact page ───
    function goToContact() {
      const c = document.querySelector('#contact');
      if (c) c.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = 'contact.html';
    }

    // ─── Nav CTA → contact ───
    const navCtaBtn = document.getElementById('navCta');
    if (navCtaBtn) navCtaBtn.addEventListener('click', goToContact);

    // ─── Mobile hamburger menu ───
    const hamburger   = document.getElementById('navHamburger');
    const mobileMenu  = document.getElementById('navMobile');
    const mobileLinks = document.querySelectorAll('[data-mobile-link]');
    const mobileCta   = document.getElementById('navMobileCta');
    const mobileClose = document.getElementById('navMobileClose');

    function openMenu() {
      hamburger.classList.add('open');
      mobileMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        if (mobileMenu.classList.contains('open')) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      // Close (✕) button
      if (mobileClose) mobileClose.addEventListener('click', closeMenu);

      // Close when a nav link is tapped
      mobileLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
      });

      // Mobile CTA → contact + close menu
      if (mobileCta) {
        mobileCta.addEventListener('click', () => {
          closeMenu();
          setTimeout(goToContact, 350);
        });
      }

      // Close on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
          closeMenu();
          hamburger.focus();
        }
      });
    }

    // ─── Scroll reveal ───
    (function setupReveal() {
      // stagger items within each group by their local index
      const groups = [
        '.section-label',
        '.section-title',
        '.services-sub',
        '.service-card',
        '.num-card',
        '.step',
        '.process-visual',
        '.price-card',
      ];

      groups.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el, i) => {
          el.classList.add('reveal');
          const mod = i % 4;
          if (mod === 1) el.classList.add('reveal-d1');
          if (mod === 2) el.classList.add('reveal-d2');
          if (mod === 3) el.classList.add('reveal-d3');
        });
      });

      // Contact section children
      document.querySelectorAll('.contact-info > *, .contact-form-wrap').forEach((el, i) => {
        el.classList.add('reveal');
        if (i === 1) el.classList.add('reveal-d1');
        if (i === 2) el.classList.add('reveal-d2');
        if (i === 3) el.classList.add('reveal-d3');
      });

      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    })();

    // ─── Contact form → Web3Forms (with success/error feedback) ───
    (function setupContactForm() {
      const form = document.querySelector('.contact-form');
      if (!form) return;
      const btn = form.querySelector('.form-submit');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name    = document.getElementById('contactName').value.trim();
        const email   = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        if (!name || !email || !message) return;

        btn.textContent = 'Sending…';
        btn.disabled = true;

        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              access_key: '42da83fb-4e37-4310-ae5f-99d38f624226',
              subject: 'New inquiry from ' + name,
              name,
              email,
              message,
            }),
          });

          if (!res.ok) throw new Error('send failed');

          form.style.display = 'none';
          document.getElementById('formSuccess').classList.add('visible');
        } catch {
          btn.textContent = 'Send message →';
          btn.disabled = false;
          btn.insertAdjacentHTML('afterend', '<p class="form-error">Something went wrong — email us at <a href="mailto:contact@kelthen.com">contact@kelthen.com</a></p>');
        }
      });
    })();

    // ─── Hero K-bot scene: parallax layers, pupils follow cursor, excite on hover ───
    (function kbotScene() {
      const scene = document.querySelector('[data-kbot-scene]');
      if (!scene) return;
      const fine = window.matchMedia('(pointer: fine)').matches;
      const pupils = scene.querySelectorAll('.kb-pupil');
      const layers = scene.querySelectorAll('.kb-parallax');
      const mascot = scene.querySelector('[data-kbot-mascot]');
      const VBW = 200, VBH = 240, MAX = 6;

      function move(e) {
        const r = scene.getBoundingClientRect();
        if (!r.width) return;
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        layers.forEach((el) => {
          const d = parseFloat(el.getAttribute('data-depth')) || 1;
          el.style.transform = `translate(${(dx * d * 16).toFixed(1)}px, ${(dy * d * 16).toFixed(1)}px)`;
        });
        const mr = mascot ? mascot.getBoundingClientRect() : null;
        if (!mr || !mr.width) return;
        pupils.forEach((p) => {
          const cx = parseFloat(p.getAttribute('data-cx'));
          const cy = parseFloat(p.getAttribute('data-cy'));
          const sx = mr.left + (cx / VBW) * mr.width;
          const sy = mr.top + (cy / VBH) * mr.height;
          const ang = Math.atan2(e.clientY - sy, e.clientX - sx);
          p.setAttribute('transform', `translate(${(Math.cos(ang) * MAX).toFixed(1)} ${(Math.sin(ang) * MAX).toFixed(1)})`);
        });
      }

      function setExcited(on) {
        if (!mascot) return;
        const sn = mascot.querySelector('.kb-smile-normal');
        const sh = mascot.querySelector('.kb-smile-happy');
        if (sn) sn.style.display = on ? 'none' : 'block';
        if (sh) sh.style.display = on ? 'block' : 'none';
        mascot.style.animation = on
          ? 'kb-excite 0.5s ease-in-out infinite'
          : 'kb-mascotFloat 6s ease-in-out infinite';
      }

      if (fine) window.addEventListener('mousemove', move, { passive: true });
      scene.addEventListener('mouseenter', () => setExcited(true));
      scene.addEventListener('mouseleave', () => setExcited(false));

      [document.getElementById('navCta'), document.getElementById('navMobileCta'), document.querySelector('.hero-actions .btn-primary')].filter(Boolean).forEach((btn) => {
        btn.addEventListener('mouseenter', () => setExcited(true));
        btn.addEventListener('mouseleave', () => setExcited(false));
      });
    })();

    // ─── Chat simulation engine (home demo + Cuties modal) ───
    const CHAT_SIM_SCRIPT = [
      { step: '1 / 3', title: 'Réservation', explain: 'Le client réserve en discutant avec le bot AURA.',
        head: ['🤖', 'AURA · Cuties Chichi', 'assistante · en ligne', '#527da3'],
        msgs: [
          ['in', 'Bonjour 👋 Je suis AURA, l\'assistante de Cuties Chichi. Quelle prestation vous ferait plaisir ?'],
          ['out', 'Des tresses knotless 💁🏾‍♀️'],
          ['in', 'Parfait ✨ Knotless : 120–160 $ selon la longueur. Quel jour vous arrange ?'],
          ['out', 'Samedi après-midi si possible'],
          ['in', 'J\'ai samedi 2 août à 14:00 🗓️ Une photo de référence ?'],
          ['photo-out', ''],
          ['in', 'Reçu 📎 Demande envoyée à Chichi — elle confirme le prix sous 48h 💛']
        ] },
      { step: '2 / 3', title: 'Notification', explain: 'Chichi est prévenue sur Telegram + WhatsApp.',
        head: ['🔔', 'Cuties Chichi · automatisation', 'notifications · en ligne', '#527da3'],
        msgs: [
          ['in', '💇 <b>Nouvelle demande</b><br>👤 Marie L.<br>💅 Tresses Knotless (120–160 $)<br>🗓️ sam. 2 août · 14:00<br>📎 Photo de référence :'],
          ['photo-in', ''],
          ['btn', '🔎 Voir & valider la demande']
        ] },
      { step: '3 / 3', title: 'Validation', explain: 'Un tap → SMS, email, agenda et rappels auto.',
        head: ['💬', 'Cuties Chichi', 'SMS', '#2D6A4F'],
        msgs: [
          ['tap', '✅ Confirmer'],
          ['sms', 'RDV <b>CONFIRMÉ</b> ✨ Tresses Knotless — 140 $, sam. 2 août 14:00. 1066 Somerset St W, Ottawa.'],
          ['note', '— la veille · rappel automatique —'],
          ['sms', '⏰ Rappel : votre RDV c\'est demain à 14:00 💛']
        ] }
    ];

    function csBubble(kind, text) {
      if (kind === 'note') return `<div class="cs-note">${text}</div>`;
      if (kind === 'btn') return `<div class="cs-btn">${text}</div>`;
      if (kind === 'tap') return `<div class="cs-tap">${text}</div>`;
      if (kind === 'sms') return `<div class="cs-sms">${text}</div>`;
      if (kind === 'stars') return `<div class="cs-stars">${text || '★★★★★'}</div>`;
      if (kind === 'card') return `<div class="cs-card">${text}</div>`;
      if (kind === 'photo-out') return `<div class="cs-photo right">💇🏾‍♀️</div>`;
      if (kind === 'photo-in') return `<div class="cs-photo left">💇🏾‍♀️</div>`;
      if (kind === 'out') return `<div class="cs-out">${text}</div>`;
      return `<div class="cs-in">${text}</div>`;
    }

    function playChatSim(root, script) {
      script = script || CHAT_SIM_SCRIPT;
      if (root.dataset.simRunning) return;
      root.dataset.simRunning = '1';
      const body = root.querySelector('.chat-sim-body');
      const stepEl = root.querySelector('.chat-sim-step');
      const titleEl = root.querySelector('.chat-sim-title');
      const explainEl = root.querySelector('.chat-sim-explain');
      const headEl = root.querySelector('.chat-sim-head');
      const avaEl = root.querySelector('.chat-sim-ava');
      const nameEl = root.querySelector('.chat-sim-name');
      const subEl = root.querySelector('.chat-sim-sub');
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const wait = (ms) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
      const rightSide = (k) => k === 'out' || k === 'photo-out' || k === 'tap';
      const noTyping = (k) => k === 'note' || k === 'btn' || k === 'tap' || k === 'stars' || k === 'card';

      (async function loop() {
        do {
          for (const phase of script) {
            if (!root.isConnected) { root.dataset.simRunning = ''; return; }
            stepEl.textContent = phase.step;
            titleEl.textContent = phase.title;
            explainEl.textContent = phase.explain;
            avaEl.textContent = phase.head[0];
            nameEl.textContent = phase.head[1];
            subEl.textContent = phase.head[2];
            headEl.style.background = phase.head[3];
            body.innerHTML = '';
            await wait(450);
            for (const [kind, text] of phase.msgs) {
              if (!root.isConnected) { root.dataset.simRunning = ''; return; }
              if (!reduce && !noTyping(kind)) {
                const t = document.createElement('div');
                t.className = 'chat-typing ' + (rightSide(kind) ? 'right' : 'left');
                t.innerHTML = '<span></span><span></span><span></span>';
                body.appendChild(t); body.scrollTop = body.scrollHeight;
                await wait(650);
                t.remove();
              }
              body.insertAdjacentHTML('beforeend', csBubble(kind, text));
              body.scrollTop = body.scrollHeight;
              await wait(850);
            }
            await wait(2300);
          }
        } while (!reduce && root.isConnected);
        root.dataset.simRunning = '';
      })();
    }

    function initChatSims(scope) {
      (scope || document).querySelectorAll('.chat-sim').forEach((el) => playChatSim(el));
    }

    const autoSimEl = document.getElementById('autoSim');
    if (autoSimEl) { autoSimEl.innerHTML = mkChatSim(); initChatSims(autoSimEl); }

    // ─── Service demos: a clear animated demo per service card ───
    const SERVICE_DEMOS = {
      site: {
        fr: [
          { step: '1 / 2', title: 'Notre propre site en est la preuve', explain: 'Rapide, élégant, pensé pour convertir — comme le vôtre.', head: ['🌐', 'kelthen.com', 'en ligne · Vercel', '#03785B'],
            msgs: [ ['card', '<b>kelthen.com</b><br>Agence web · Canada<br><span style="color:#03785B">⚡ Ultra-rapide · chargé en &lt; 1 s</span>'], ['note', 'Zéro lenteur, parfait sur mobile et ordi'] ] },
          { step: '2 / 2', title: 'Conçu pour transformer le visiteur', explain: 'Message clair, design premium, appel à l\'action évident.', head: ['✨', 'kelthen.com', 'conversion', '#03785B'],
            msgs: [ ['in', 'Plus de clients. Moins de gestion. 👋'], ['out', "C'est exactement ce qu'il me faut"], ['tap', '🚀 Audit gratuit'] ] }
        ],
        en: [
          { step: '1 / 2', title: 'Our own site is the proof', explain: 'Fast, elegant, built to convert — just like yours.', head: ['🌐', 'kelthen.com', 'online · Vercel', '#03785B'],
            msgs: [ ['card', '<b>kelthen.com</b><br>Web agency · Canada<br><span style="color:#03785B">⚡ Ultra-fast · loads in &lt; 1 s</span>'], ['note', 'Zero lag, perfect on phone and desktop'] ] },
          { step: '2 / 2', title: 'Built to convert the visitor', explain: 'Clear message, premium design, obvious call to action.', head: ['✨', 'kelthen.com', 'conversion', '#03785B'],
            msgs: [ ['in', 'More clients. Less admin. 👋'], ['out', "That's exactly what I need"], ['tap', '🚀 Free audit'] ] }
        ]
      },
      booking: {
        fr: [
          { step: '1 / 2', title: 'Un vrai système en ligne', explain: 'Cuties Chichi (client réel) — réservation 24/7, entièrement automatisée.', head: ['💇', 'Cuties Chichi', 'réservation · 24/7', '#C6447A'],
            msgs: [ ['card', '<b>Cuties Chichi</b> · Ottawa<br>chichi-cuties.vercel.app<br><span style="color:#C6447A">6 prestations · réserver en ligne</span>'], ['in', 'Bonjour 👋 Quelle prestation vous ferait plaisir ?'], ['out', 'Des tresses knotless'], ['in', 'Parfait ✨ Quel jour vous arrange ?'] ] },
          { step: '2 / 2', title: 'Réservé, même la nuit', explain: 'Demande envoyée, prix exact confirmé sous 48 h.', head: ['📅', 'Cuties Chichi', 'demande envoyée', '#2D6A4F'],
            msgs: [ ['out', 'Samedi après-midi'], ['tap', '📅 Envoyer la demande'], ['sms', 'Demande reçue ✅ Chichi confirme le prix sous 48 h 💛'] ] }
        ],
        en: [
          { step: '1 / 2', title: 'A real live system', explain: 'Cuties Chichi (real client) — 24/7 booking, fully automated.', head: ['💇', 'Cuties Chichi', 'booking · 24/7', '#C6447A'],
            msgs: [ ['card', '<b>Cuties Chichi</b> · Ottawa<br>chichi-cuties.vercel.app<br><span style="color:#C6447A">6 services · book online</span>'], ['in', 'Hi 👋 Which service would you like?'], ['out', 'Knotless braids'], ['in', 'Perfect ✨ What day works for you?'] ] },
          { step: '2 / 2', title: 'Booked, even at night', explain: 'Request sent, exact price confirmed within 48 h.', head: ['📅', 'Cuties Chichi', 'request sent', '#2D6A4F'],
            msgs: [ ['out', 'Saturday afternoon'], ['tap', '📅 Send request'], ['sms', 'Request received ✅ Chichi confirms the price within 48 h 💛'] ] }
        ]
      },
      ai: {
        fr: [
          { step: '1 / 2', title: 'AURA, réceptionniste IA réelle', explain: 'La vraie assistante de Cuties Chichi répond aux clients.', head: ['🤖', 'AURA · Cuties Chichi', 'multicanal · en ligne', '#C6447A'],
            msgs: [ ['in', "Bonjour, je suis AURA, l'assistante de Cuties Chichi 👋"], ['out', 'Vous faites les box braids ?'], ['in', 'Oui ✅ Je vous explique les tarifs et je trouve un créneau.'] ] },
          { step: '2 / 2', title: 'Un seul assistant, tous les canaux', explain: 'Même conversation depuis Instagram, WhatsApp ou Telegram.', head: ['📱', 'AURA', 'Instagram · WhatsApp', '#527da3'],
            msgs: [ ['card', '🤖 <b>AURA répond partout</b><br>🌐 Site · 💬 WhatsApp<br>📸 Instagram · ✈️ Telegram'], ['note', 'Réponses 24/7, sans faire attendre le client'] ] }
        ],
        en: [
          { step: '1 / 2', title: 'AURA, a real AI receptionist', explain: "Cuties Chichi's real assistant answers clients.", head: ['🤖', 'AURA · Cuties Chichi', 'multichannel · online', '#C6447A'],
            msgs: [ ['in', "Hi, I'm AURA, Cuties Chichi's assistant 👋"], ['out', 'Do you do box braids?'], ['in', 'Yes ✅ I\'ll explain the pricing and find you a slot.'] ] },
          { step: '2 / 2', title: 'One assistant, every channel', explain: 'Same conversation from Instagram, WhatsApp or Telegram.', head: ['📱', 'AURA', 'Instagram · WhatsApp', '#527da3'],
            msgs: [ ['card', '🤖 <b>AURA answers everywhere</b><br>🌐 Site · 💬 WhatsApp<br>📸 Instagram · ✈️ Telegram'], ['note', 'Replies 24/7, never keeps a client waiting'] ] }
        ]
      },
      reminders: {
        fr: [
          { step: '1 / 3', title: 'À la réservation', explain: 'Confirmation immédiate par SMS.', head: ['💬', 'Cuties Chichi', 'SMS', '#2D6A4F'],
            msgs: [ ['sms', 'RDV <b>CONFIRMÉ</b> ✨ Tresses knotless — sam. 2 août 14:00, Ottawa.'] ] },
          { step: '2 / 3', title: 'Rappel automatique 24 h avant', explain: 'Le système relance le client tout seul — fini les oublis.', head: ['⏰', 'Cuties Chichi', 'rappel auto', '#2D6A4F'],
            msgs: [ ['note', '— 24 h avant · automatique —'], ['sms', "⏰ Rappel : votre RDV c'est <b>demain à 14:00</b> 💛 Un empêchement ? Répondez."], ['out', 'Parfait, je serai là ✅'] ] },
          { step: '3 / 3', title: 'Et un 2ᵉ rappel 2 h avant', explain: 'Second rappel, sans doublon — exactement comme sur le vrai système.', head: ['🔔', 'Cuties Chichi', '2 h avant', '#2D6A4F'],
            msgs: [ ['note', '— 2 h avant · automatique —'], ['sms', '🔔 À tout à l\'heure ! Votre RDV est à <b>14:00</b> aujourd\'hui.'], ['note', 'Moins de rendez-vous manqués, sans y penser 📉'] ] }
        ],
        en: [
          { step: '1 / 3', title: 'At booking', explain: 'Instant SMS confirmation.', head: ['💬', 'Cuties Chichi', 'SMS', '#2D6A4F'],
            msgs: [ ['sms', 'Appointment <b>CONFIRMED</b> ✨ Knotless braids — Sat Aug 2, 2:00 pm, Ottawa.'] ] },
          { step: '2 / 3', title: 'Automatic reminder 24 h before', explain: 'The system follows up on its own — no more no-shows.', head: ['⏰', 'Cuties Chichi', 'auto reminder', '#2D6A4F'],
            msgs: [ ['note', '— 24 h before · automatic —'], ['sms', "⏰ Reminder: your appointment is <b>tomorrow at 2:00 pm</b> 💛 Can't make it? Just reply."], ['out', "Perfect, I'll be there ✅"] ] },
          { step: '3 / 3', title: 'And a 2nd reminder 2 h before', explain: 'A second reminder, no duplicates — just like the real system.', head: ['🔔', 'Cuties Chichi', '2 h before', '#2D6A4F'],
            msgs: [ ['note', '— 2 h before · automatic —'], ['sms', '🔔 See you soon! Your appointment is at <b>2:00 pm</b> today.'], ['note', 'Fewer missed appointments, effortlessly 📉'] ] }
        ]
      },
      google: {
        fr: [
          { step: '1 / 2', title: 'On tape « kelthen agence web »', explain: 'kelthen.com ressort dans les résultats Google.', head: ['🔍', 'Google', 'recherche', '#4285F4'],
            msgs: [ ['card', '🔍 <b>kelthen agence web</b>'], ['card', '<span style="color:#1a73e8;font-weight:600">kelthen.com</span><br><b>Kelthen — Plus de clients. Moins de gestion.</b><br>Agence web au Canada · sites, réservation &amp; automatisation.'] ] },
          { step: '2 / 2', title: 'Vos photos aussi, dans Google Images', explain: 'La marque est indexée jusque dans l\'onglet Images.', head: ['🖼️', 'Google Images', '« kelthen »', '#4285F4'],
            msgs: [ ['card', '🖼️ <b>Images · « kelthen »</b><br>🔵 🔷 🖼️ 🔹<br><span style="color:#5f6368">vos visuels indexés par Google</span>'], ['note', 'Vos clients vous trouvent là où ils cherchent déjà'] ] }
        ],
        en: [
          { step: '1 / 2', title: 'Search "kelthen web agency"', explain: 'kelthen.com shows up in Google results.', head: ['🔍', 'Google', 'search', '#4285F4'],
            msgs: [ ['card', '🔍 <b>kelthen web agency</b>'], ['card', '<span style="color:#1a73e8;font-weight:600">kelthen.com</span><br><b>Kelthen — More clients. Less admin.</b><br>Web agency in Canada · sites, booking &amp; automation.'] ] },
          { step: '2 / 2', title: 'Your photos too, in Google Images', explain: 'The brand is indexed all the way to the Images tab.', head: ['🖼️', 'Google Images', '"kelthen"', '#4285F4'],
            msgs: [ ['card', '🖼️ <b>Images · "kelthen"</b><br>🔵 🔷 🖼️ 🔹<br><span style="color:#5f6368">your visuals indexed by Google</span>'], ['note', 'Your clients find you where they already look'] ] }
        ]
      },
      reviews: {
        fr: [
          { step: '1 / 3', title: 'Après le rendez-vous', explain: 'Un SMS automatique invite le client à donner son avis.', head: ['💬', 'Avis', 'SMS · après RDV', '#2D6A4F'],
            msgs: [ ['sms', 'Merci de votre visite 💛 Un petit avis sur votre expérience ?'], ['tap', '⭐ Donner mon avis'] ] },
          { step: '2 / 3', title: 'Publié sur Google en un tap', explain: 'Le client note, l\'avis part sur votre fiche Google.', head: ['⭐', 'Avis Google', 'publication', '#F5A623'],
            msgs: [ ['stars', '★★★★★'], ['out', 'Super expérience, je recommande ! 🙌'], ['card', '✅ <b>Avis publié sur votre fiche Google</b><br>« Super expérience, je recommande ! »'] ] },
          { step: '3 / 3', title: 'Et on les fait revenir', explain: 'Relance de fidélité automatique, au bon moment.', head: ['🎁', 'Fidélité', 'automatique', '#C6447A'],
            msgs: [ ['note', '— quelques semaines plus tard —'], ['sms', '🎁 Ça fait un moment ! Une petite attention pour votre prochain RDV 💛'], ['out', 'Je réserve !'] ] }
        ],
        en: [
          { step: '1 / 3', title: 'After the appointment', explain: 'An automatic SMS invites the client to leave a review.', head: ['💬', 'Reviews', 'SMS · post-visit', '#2D6A4F'],
            msgs: [ ['sms', 'Thanks for your visit 💛 A quick review of your experience?'], ['tap', '⭐ Leave my review'] ] },
          { step: '2 / 3', title: 'Posted on Google in one tap', explain: 'The client rates, the review lands on your Google listing.', head: ['⭐', 'Google review', 'publishing', '#F5A623'],
            msgs: [ ['stars', '★★★★★'], ['out', 'Amazing experience, highly recommend! 🙌'], ['card', '✅ <b>Review posted on your Google listing</b><br>"Amazing experience, highly recommend!"'] ] },
          { step: '3 / 3', title: 'And we bring them back', explain: 'Automatic loyalty follow-up, at the right moment.', head: ['🎁', 'Loyalty', 'automatic', '#C6447A'],
            msgs: [ ['note', '— a few weeks later —'], ['sms', "🎁 It's been a while! A little something for your next appointment 💛"], ['out', 'Booking now!'] ] }
        ]
      }
    };

    (function serviceDemos() {
      const cards = document.querySelectorAll('.service-card[data-demo]');
      const modal = document.getElementById('demoModal');
      const stage = document.getElementById('demoStage');
      const nameEl = document.getElementById('demoTitle');
      const closeBtn = document.getElementById('demoClose');
      if (!cards.length || !modal || !stage || !closeBtn) return;
      let lastFocus = null;

      function open(demoId, label) {
        const demo = SERVICE_DEMOS[demoId];
        if (!demo) return;
        const lang = (window.__i18nLang && window.__i18nLang()) || 'fr';
        const script = demo[lang] || demo.fr;
        if (nameEl) nameEl.textContent = label || '';
        stage.innerHTML = mkChatSim();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        lastFocus = document.activeElement;
        closeBtn.focus();
        const sim = stage.querySelector('.chat-sim');
        if (sim) playChatSim(sim, script);
      }
      function close() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        stage.innerHTML = ''; // detaches the sim node → the engine loop stops on its own
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      }

      cards.forEach((card) => {
        const id = card.getAttribute('data-demo');
        const labelOf = () => { const n = card.querySelector('.service-name'); return n ? n.textContent : ''; };
        // JS-injected "see the demo" hint (translated via the i18n dictionary)
        if (!card.querySelector('.service-demo-hint')) {
          const hint = document.createElement('span');
          hint.className = 'service-demo-hint';
          hint.setAttribute('data-i18n', 'svc.demo');
          hint.textContent = '▶ Voir la démo';
          card.appendChild(hint);
        }
        card.addEventListener('click', () => open(id, labelOf()));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(id, labelOf()); }
        });
      });
      if (window.__i18nApply) window.__i18nApply();

      closeBtn.addEventListener('click', close);
      modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
    })();

    // ─── Terms of Use modal ───
    (function setupTerms() {
      const modal = document.getElementById('termsModal');
      const openBtn = document.getElementById('termsOpen');
      const closeBtn = document.getElementById('termsClose');
      if (!modal || !openBtn || !closeBtn) return;
      let lastFocus = null;
      function open() {
        lastFocus = document.activeElement;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
      }
      function close() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      }
      openBtn.addEventListener('click', open);
      closeBtn.addEventListener('click', close);
      modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) close();
      });
    })();

    // ─── Cookie consent (granular) + consent-gated Google Analytics ───
    (function cookieConsent() {
      const KEY = 'kelthen-cookie-consent';
      const GA_ID = 'G-NM2WD2TCND';
      let gaLoaded = false;

      function loadGA() {
        if (gaLoaded) return;
        gaLoaded = true;
        const s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_ID, { anonymize_ip: true });
      }

      // Read stored consent (with backwards-compat for the old accepted/declined values)
      function readConsent() {
        const raw = localStorage.getItem(KEY);
        if (!raw) return null;
        if (raw === 'accepted') return { analytics: true };
        if (raw === 'declined') return { analytics: false };
        try { return JSON.parse(raw); } catch (e) { return null; }
      }
      function saveConsent(consent) {
        localStorage.setItem(KEY, JSON.stringify(consent));
        if (consent.analytics) loadGA();
      }

      // ── Preferences panel (built once, reusable via the footer link) ──
      const prefs = document.createElement('div');
      prefs.className = 'cookie-prefs-overlay';
      prefs.setAttribute('role', 'dialog');
      prefs.setAttribute('aria-modal', 'true');
      prefs.setAttribute('aria-label', 'Cookie preferences');
      prefs.innerHTML = `
        <div class="cookie-prefs">
          <button class="cookie-prefs-close" type="button" data-cookie-close aria-label="Fermer">✕</button>
          <h2 class="cookie-prefs-title" data-i18n="cprefs.title">Préférences cookies</h2>
          <p class="cookie-prefs-intro" data-i18n="cprefs.intro">Choisissez les cookies que nous pouvons utiliser. Modifiable à tout moment.</p>
          <div class="cookie-cat">
            <div class="cookie-cat-top">
              <span class="cookie-cat-name" data-i18n="cprefs.necessary">Strictement nécessaires</span>
              <span class="cookie-cat-always" data-i18n="cprefs.always">Toujours actifs</span>
            </div>
            <p class="cookie-cat-desc" data-i18n="cprefs.necessaryDesc">Indispensables au fonctionnement du site. Ils ne vous suivent jamais.</p>
          </div>
          <div class="cookie-cat">
            <div class="cookie-cat-top">
              <span class="cookie-cat-name" data-i18n="cprefs.analytics">Analytics — Google Analytics</span>
              <label class="cookie-switch"><input type="checkbox" data-cookie-analytics><span class="cookie-slider"></span></label>
            </div>
            <p class="cookie-cat-desc" data-i18n="cprefs.analyticsDesc">Statistiques anonymes (pages vues, appareil) pour améliorer le site. Google Analytics ne se charge que si activé.</p>
          </div>
          <div class="cookie-prefs-actions">
            <button class="cookie-btn cookie-secondary" type="button" data-cookie-save data-i18n="cprefs.save">Enregistrer</button>
            <button class="cookie-btn cookie-accept" type="button" data-cookie-accept-all data-i18n="cprefs.acceptAll">Tout accepter</button>
          </div>
        </div>`;
      document.body.appendChild(prefs);
      if (window.__i18nApply) window.__i18nApply();
      const analyticsToggle = prefs.querySelector('[data-cookie-analytics]');
      let prefsLastFocus = null;

      function openPrefs() {
        const c = readConsent();
        analyticsToggle.checked = !!(c && c.analytics);
        prefsLastFocus = document.activeElement;
        prefs.classList.add('open');
        document.body.style.overflow = 'hidden';
        prefs.querySelector('[data-cookie-close]').focus();
      }
      function closePrefs() {
        prefs.classList.remove('open');
        document.body.style.overflow = '';
        if (prefsLastFocus && prefsLastFocus.focus) prefsLastFocus.focus();
      }
      prefs.querySelector('[data-cookie-close]').addEventListener('click', closePrefs);
      prefs.addEventListener('click', (e) => { if (e.target === prefs) closePrefs(); });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && prefs.classList.contains('open')) closePrefs();
      });
      prefs.querySelector('[data-cookie-save]').addEventListener('click', () => {
        saveConsent({ analytics: analyticsToggle.checked });
        closePrefs(); hideBanner();
      });
      prefs.querySelector('[data-cookie-accept-all]').addEventListener('click', () => {
        analyticsToggle.checked = true;
        saveConsent({ analytics: true });
        closePrefs(); hideBanner();
      });

      // ── Banner (only shown until a choice is made) ──
      let banner = null;
      function hideBanner() {
        if (!banner) return;
        banner.classList.remove('show');
        const b = banner; banner = null;
        setTimeout(() => b.remove(), 300);
      }
      function showBanner() {
        banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie notice');
        banner.innerHTML = `
          <div class="cookie-banner-inner">
            <p class="cookie-text"><span data-i18n="cookie.text">Nous utilisons des cookies pour mesurer et améliorer notre site. Acceptez, refusez ou gérez vos choix — voir notre</span> <button type="button" class="cookie-link" data-cookie-privacy data-i18n="cookie.privacy">Politique de confidentialité</button>.</p>
            <div class="cookie-actions">
              <button type="button" class="cookie-btn cookie-secondary" data-cookie-reject data-i18n="cookie.reject">Tout refuser</button>
              <button type="button" class="cookie-btn cookie-secondary" data-cookie-manage data-i18n="cookie.manage">Gérer</button>
              <button type="button" class="cookie-btn cookie-accept" data-cookie-accept data-i18n="cookie.accept">Tout accepter</button>
            </div>
          </div>`;
        document.body.appendChild(banner);
        if (window.__i18nApply) window.__i18nApply();
        requestAnimationFrame(() => banner.classList.add('show'));
        banner.querySelector('[data-cookie-accept]').addEventListener('click', () => { saveConsent({ analytics: true }); hideBanner(); });
        banner.querySelector('[data-cookie-reject]').addEventListener('click', () => { saveConsent({ analytics: false }); hideBanner(); });
        banner.querySelector('[data-cookie-manage]').addEventListener('click', openPrefs);
        const privacyLink = banner.querySelector('[data-cookie-privacy]');
        if (privacyLink) privacyLink.addEventListener('click', () => {
          const pb = document.getElementById('privacyOpen');
          if (pb) pb.click();
        });
      }

      // Footer link to reopen preferences anytime (present on every page)
      const footerBtn = document.getElementById('cookiePrefsOpen');
      if (footerBtn) footerBtn.addEventListener('click', openPrefs);

      // Apply stored choice, or show the banner on first visit
      const consent = readConsent();
      if (consent) { if (consent.analytics) loadGA(); }
      else { showBanner(); }
    })();

    // ─── FAQ accordion ───
    (function setupFaq() {
      const items = document.querySelectorAll('#faq .faq-item');
      if (!items.length) return;
      items.forEach((item) => {
        const btn = item.querySelector('.faq-q');
        const ans = item.querySelector('.faq-a');
        if (!btn || !ans) return;
        btn.addEventListener('click', () => {
          const isOpen = btn.getAttribute('aria-expanded') === 'true';
          // close others
          items.forEach((other) => {
            if (other === item) return;
            const ob = other.querySelector('.faq-q');
            const oa = other.querySelector('.faq-a');
            if (ob) ob.setAttribute('aria-expanded', 'false');
            if (oa) oa.style.maxHeight = null;
          });
          if (isOpen) {
            btn.setAttribute('aria-expanded', 'false');
            ans.style.maxHeight = null;
          } else {
            btn.setAttribute('aria-expanded', 'true');
            ans.style.maxHeight = ans.scrollHeight + 'px';
          }
        });
      });
    })();
