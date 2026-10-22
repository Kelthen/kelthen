    // ─── Bilingual FR / EN engine ───
    (function i18n() {
      const DICT = {
        en: {
          'nav.services': 'Services', 'nav.work': 'Work', 'nav.about': 'About', 'nav.pricing': 'Pricing', 'nav.contact': 'Contact', 'nav.cta': 'Free audit',
          'mrq.1': 'Websites', 'mrq.2': 'Online booking', 'mrq.3': 'SMS reminders', 'mrq.4': 'AI assistant', 'mrq.5': 'Google visibility', 'mrq.6': 'Client reviews', 'mrq.7': 'Loyalty', 'mrq.8': 'Secure payments',
          // Page titles & meta descriptions (FR lives in each page's <head>)
          'meta.index.title': 'Kelthen — Custom websites, apps & automations (Canada)', 'meta.index.desc': 'We build the tools that keep your business running: websites, online booking, SMS reminders, custom apps and automations. Free audit in 48 h.',
          'meta.contact.title': 'Get my free audit — Kelthen', 'meta.contact.desc': 'Request your free audit: Google presence, website, booking, reviews and follow-ups. Delivered within 48 h, no commitment. Reply within 24 h.',
          'meta.pricing.title': 'Pricing — websites, booking & automation | Kelthen', 'meta.pricing.desc': 'Clear, fixed-price plans for your business: The Essentials from $900, The Business from $2,500, or custom. Pilot offer and free audit.',
          'meta.about.title': 'About — Kelthen, web & automation agency in Canada', 'meta.about.desc': 'Kelthen is a small team based in Canada that builds websites, booking tools and automations for local businesses and entrepreneurs.',
          'meta.work.title': 'Projects we built — websites, platforms & automations | Kelthen', 'meta.work.desc': 'Projects built by Kelthen: a community platform, a marketplace, an automated booking system — and a step-by-step demo of the salon booking system.',
          'meta.salons.title': 'Website, online booking & SMS reminders for salons | Kelthen', 'meta.salons.desc': 'More appointments, less time on the phone: website, online booking with deposit, SMS reminders, Google Maps and reviews for salons and wellness businesses. Delivered in 14 days.',
          'meta.privacy.title': 'Privacy Policy — Kelthen', 'meta.terms.title': 'Terms of Use — Kelthen',
          'meta.apps.title': 'Custom apps & software | Kelthen', 'meta.apps.desc': 'Internal tools, client portals, online stores and platforms built to measure. Scoping, fixed quote, first version in 4 to 6 weeks, then maintenance. Priced on quote.',
          // Shared conversion blocks
          'lp.cta': 'Free audit in 48 h', 'lp.wa': 'Message us on WhatsApp', 'lp.trust': 'No commitment · Reply within 24 h · Based in Canada',
          'how.label': 'How it works', 'how.title': 'Three steps.<br><em>No surprises.</em>',
          'how.s1n': 'Free audit', 'how.s1d': 'We look at your Google presence, website, booking, reviews and follow-ups, then send you a clear summary within 48 h.',
          'how.s2n': 'A clear, fixed-price offer', 'how.s2d': 'You know what is included, the price and the timeline before anything starts.',
          'how.s3n': 'Delivered in 7 to 14 days', 'how.s3d': 'We set everything up, you approve, we go live — and we stay around afterwards.',
          'how.results': 'Real results',
          'audit.label': 'Free mini-audit', 'audit.title': 'Your free audit,<br><em>in 5 points.</em>', 'audit.sub': 'We review what brings you clients today and show you what to fix first.',
          'audit.p1n': 'Google presence', 'audit.p1d': 'Your listing, Maps, hours and photos: can people find you, and do they trust what they see?',
          'audit.p2n': 'Website', 'audit.p2d': 'Speed, mobile, clarity: does your site make people want to book?',
          'audit.p3n': 'Booking', 'audit.p3d': 'How many steps between “I want to come” and a confirmed appointment?',
          'audit.p4n': 'Reviews', 'audit.p4d': 'How many reviews, how recent, and how you ask for them.',
          'audit.p5n': 'Follow-ups', 'audit.p5d': 'Reminders, missed calls and clients who never came back.',
          'audit.meta': 'Delivered within 48 h · No commitment', 'audit.cta': 'Get my free audit',
          'pilot.label': 'Pilot offer', 'pilot.title': 'Pilot offer:<br><em>3 spots this month.</em>', 'pilot.sub': 'For businesses that want to get started now.',
          'pilot.i1': '30% off installation', 'pilot.i2': 'First month of follow-up free', 'pilot.i3': 'Limited to 3 spots', 'pilot.ends': 'Offer ends:', 'pilot.cta': 'Book my free audit', 'pilot.tier': 'Pilot offer',
          'annc.text': 'Pilot offer: 3 spots this month. Free audit in 48 h →', 'annc.close': 'Close the announcement',
          'wa.label': 'Chat on WhatsApp', 'wa.msg': "Hi Kelthen! I'd like a free audit for my business.", 'sticky.audit': 'Free audit in 48 h',
          'footer.salons': 'For salons', 'footer.apps': 'Custom software',
          // Work page — system demo
          'sysdemo.label': 'System demo', 'sysdemo.title': 'It <em>books</em>, <em>notifies</em><br>and <em>confirms</em>.',
          'sysdemo.sub': 'System demo: how a salon booking is handled end to end, without anyone typing a message.',
          'sysdemo.s1n': 'Booking', 'sysdemo.s1d': 'The client chats with the assistant on the website, WhatsApp or Instagram, and can send a reference photo.',
          'sysdemo.s2n': 'Notification', 'sysdemo.s2d': 'The salon gets the request on its phone, with every detail and the photo attached.',
          'sysdemo.s3n': 'Approval', 'sysdemo.s3d': 'One tap: the client gets a confirmation by SMS and email, and the calendar updates itself.',
          'sysdemo.s4n': 'Reminders', 'sysdemo.s4d': 'Reminders go out on their own before the appointment.',
          // salons.html
          'sl.eyebrow': 'Salons, beauty & wellness', 'sl.title': 'More appointments.<br><em>Less time on the phone.</em>',
          'sl.sub': 'Website, online booking and SMS reminders for salons and local businesses, in 14 days.', 'sl.demo': 'Live demo',
          'sl.b.label': 'What we set up for your salon', 'sl.b.title': 'Your bookings,<br><em>on autopilot.</em>',
          'sl.b1n': 'Online booking & deposit', 'sl.b1d': 'Clients book 24/7 and leave a deposit — fewer last-minute cancellations.',
          'sl.b2n': 'Automatic SMS reminders', 'sl.b2d': 'A text before every appointment, sent on its own. Fewer forgotten appointments.',
          'sl.b3n': 'Found on Google Maps', 'sl.b3d': 'Hours, photos and services kept up to date, right where people nearby are searching.',
          'sl.b4n': 'More Google reviews', 'sl.b4d': 'After each visit, a short message invites your client to leave a review.',
          'sl.cta.title': 'Your salon,<br><em>fully booked?</em>', 'sl.cta.sub': 'Start with a free audit: we show you what to fix first. We reply within 24 h.',
          // apps.html
          'ap.eyebrow': 'Custom software', 'ap.title': 'Custom apps<br><em>and software.</em>',
          'ap.sub': 'Internal tools, client portals, online stores and platforms: we build the tool that fits the way you work — then we maintain it.',
          'ap.cta': 'Book a scoping session', 'ap.msg': "Hi Kelthen, I'd like to book a scoping session for a custom project.",
          'ap.types.label': 'What we build', 'ap.types.title': 'Three kinds<br>of <em>projects.</em>',
          'ap.t1n': 'Internal tool', 'ap.t1d': 'Replace spreadsheets and back-and-forth: client tracking, scheduling, inventory, dashboards and automated tasks.',
          'ap.t2n': 'Client portal', 'ap.t2d': 'A private space where your clients follow their file or order, share documents and message you.',
          'ap.t3n': 'E-commerce or platform', 'ap.t3d': 'An online store, a marketplace or a booking platform, with secure payments.',
          'ap.p.label': 'How a project runs', 'ap.p.title': 'From the first call<br><em>to maintenance.</em>',
          'ap.p1n': 'Call', 'ap.p1d': 'A free 30-minute call to understand your need and see if we are the right fit.',
          'ap.p2n': 'Paid scoping', 'ap.p2d': 'Together we define the screens, the priorities and what the first version must do. You leave with a clear plan.',
          'ap.p3n': 'Fixed quote', 'ap.p3d': 'A fixed price and timeline, based on the scoping. No surprises along the way.',
          'ap.p4n': 'First version in 4 to 6 weeks', 'ap.p4d': 'A working first version (MVP), delivered in 4 to 6 weeks, that real users can start with.',
          'ap.p5n': 'Maintenance', 'ap.p5d': 'Updates, fixes and improvements over time. The tool keeps running and grows with you.',
          'ap.price.label': 'Pricing', 'ap.price.title': 'On <em>quote.</em>', 'ap.price.sub': 'Every project is different. After the scoping, you get a fixed quote before anything is built.',
          'ap.built': 'See the projects we built →',
          'ap.cta.title': "Let's scope<br><em>your project.</em>", 'ap.cta.sub': 'Tell us what you want to build. We reply within 24 h.',
          'hero.eyebrow': 'Web agency · shops & pros',
          'hero.title': '<span class="l"><span>One hub.</span></span><span class="l"><span>All your growth.</span></span>',
          'hero.desc': 'One hub connects your leads, emails, appointments and sales. Our automations and AI agents handle it — while you focus on what matters.',
          'hero.readout': 'Requests handled by our automations',
          'hero.ctaPrimary': 'Get a free audit', 'hero.ctaSecondary': 'See our projects', 'hero.scroll': 'Scroll',
          'services.label': 'What we do for you', 'services.title': 'Your goals,<br>our <em>solutions</em>',
          'services.sub': 'Simple tools to attract more clients, save time and polish your image — no jargon, no headaches.',
          'svc1.name': 'A website that brings in clients', 'svc1.desc': 'A fast, elegant website that builds trust and turns visitors into booked appointments.',
          'svc2.name': 'Online booking, 24/7', 'svc2.desc': 'Your clients book and leave a deposit in a few taps, day or night. No more phone ringing off the hook.',
          'svc3.name': 'AI virtual receptionist', 'svc3.desc': 'A smart assistant answers your clients, sorts requests and books appointments — even while you sleep.',
          'svc4.name': 'Automatic SMS & email reminders', 'svc4.desc': 'Every client gets a reminder before their appointment, and your calendar stays in sync on its own.',
          'svc5.name': 'Found on Google', 'svc5.desc': 'We get you onto Google and Google Maps, right where your clients are already searching.',
          'svc6.name': 'Reviews & loyalty', 'svc6.desc': 'After each visit, your clients are invited to leave a Google review — and gently brought back.',
          'tag.turnkey': 'Turnkey', 'tag.mobile': 'Mobile-perfect', 'tag.agenda': 'Synced calendar', 'tag.deposits': 'Deposits', 'tag.247': '24/7', 'tag.multichannel': 'Multichannel', 'tag.email': 'Email', 'tag.localseo': 'Local SEO', 'tag.reviews': 'Google reviews', 'tag.loyalty': 'Loyalty',
          'sol.label': 'For your industry', 'sol.title': 'Solutions built for <em>your world</em>', 'sol.example': 'See how it works →',
          'scene.automation': 'Automation', 'scene.assistant': 'Assistant · online', 'scene.notif': 'Notification', 'scene.newmsg': 'New message', 'scene.growth': 'Growth',
          'ind1.name': 'Clinics & health professionals', 'ind1.b1': 'Simple, smooth online appointment booking', 'ind1.b2': 'Secure, confidential patient data', 'ind1.b3': 'Automatic reminders: fewer no-shows, more attendance', 'ind1.b4': 'Google reviews to reassure new patients',
          'ind2.name': 'Salons, spas & wellness', 'ind2.b1': 'A visual, attractive services catalogue', 'ind2.b2': 'Deposit on booking: no more last-minute cancellations', 'ind2.b3': 'A loyalty program to bring your clients back', 'ind2.b4': 'Online booking 24/7, even at night',
          'ind3.name': 'Shops & local entrepreneurs', 'ind3.b1': 'An online storefront that makes people want to walk in', 'ind3.b2': 'Found on Google Maps, with up-to-date reviews and hours', 'ind3.b3': 'Simple tools to sell without spending your evenings on it',
          'stat.noshows': 'fewer missed appointments', 'stat.bookings': 'more online bookings', 'stat.timesaved': 'saved per week', 'stat.response': 'response time',
          'trust.label': 'Why Kelthen', 'trust.quote': 'A young, fast-growing studio driven by one thing: <em>helping you succeed</em>.', 'trust.desc': 'We treat every project — from the neighbourhood salon to the busy clinic — as if it were our own. You talk to real, reachable people who build simple tools that bring you clients.', 'trust.anchor': 'Based in Canada — serving entrepreneurs everywhere.',
          'work.label': 'Our work', 'work.title': 'See how<br>it <em>works</em>', 'work.sub': 'A step-by-step demo of the booking system, and the projects we have built.', 'work.viewall': 'See the demo →', 'work.viewbuilt': 'Projects we built',
          'homecta.title': "Let's talk about<br><em>your project.</em>", 'homecta.sub': 'Tell us what you need. We reply within 24 hours — no sales pitch, just a real conversation.', 'homecta.cta': 'Free audit in 48 h',
          'footer.tagline': 'Web agency · Canada', 'footer.services': 'Services', 'footer.company': 'Company', 'footer.connect': 'Follow us', 'footer.faq': 'FAQ',
          'footer.copy': '© 2026 Kelthen. All rights reserved.', 'footer.privacy': 'Privacy Policy', 'footer.terms': 'Terms of Use', 'footer.cookies': 'Cookie preferences', 'footer.flag': 'Canada',
          'pricing.label': 'Our plans', 'pricing.title': 'Clear <em>plans</em>.<br>Zero surprises.', 'pricing.cta': 'Get a quote', 'pricing.cta2': "Let's talk", 'pricing.badge': 'Recommended', 'pricing.note': 'Free, no-obligation quote · Payment in instalments available',
          'p1.tier': 'The Essentials', 'p1.price': 'from $900', 'p1.period': 'Presence & visibility', 'p1.f1': 'A fast, elegant showcase website', 'p1.f2': 'Perfect on mobile', 'p1.f3': 'Optimized for Google & Google Maps', 'p1.f4': 'Contact form + WhatsApp', 'p1.f5': 'Zero technical hassle for you', 'p1.f6': 'Hosting & maintenance included',
          'p2.tier': 'The Business', 'p2.price': 'from $2,500', 'p2.period': 'Performance & automation', 'p2.f1': 'Everything in The Essentials, plus…', 'p2.f2': 'Online appointment booking', 'p2.f3': 'Secure deposit payments', 'p2.f4': 'Automatic SMS & email reminders', 'p2.f5': 'Synced calendar', 'p2.f6': 'No hidden costs',
          'p3.tier': 'Custom', 'p3.price': 'On quote', 'p3.period': 'AI solutions & growth', 'p3.f1': 'AI virtual receptionist, 24/7', 'p3.f2': 'Advanced loyalty systems', 'p3.f3': 'Custom integrations and automations', 'p3.f4': 'Dedicated support, end to end', 'p3.f5': 'Payment in instalments available',
          'proc.label': 'How we work', 'proc.title': 'Simple.<br><em>Transparent.</em>', 'proc.s1n': 'Discovery call', 'proc.s1d': 'A free 30-minute call to understand your goals and constraints. No sales pressure — we listen.', 'proc.s2n': 'Proposal & quote', 'proc.s2d': 'You get a clear proposal within 48h: fixed price, detailed scope, realistic timeline. No surprises.', 'proc.s3n': 'Build', 'proc.s3d': "Regular updates, live previews and easy contact. You're always in the loop.", 'proc.s4n': 'Launch & support', 'proc.s4d': 'We handle deployment, testing and post-launch support. You go live with confidence.',
          'pv.tag': 'Our approach', 'pv.quote': 'Built <em>differently.</em><br>Delivered<br>on time.', 'pv.s1': 'Proposal turnaround', 'pv.s2': 'Hidden fees', 'pv.s3': 'Quote revisions included',
          'faq.title': 'Your questions,<br><em>answered.</em>',
          'faq.q1': 'How much does a project cost?', 'faq.a1': 'Most projects fall into three fixed-price plans: The Essentials from $900, The Business from $2,500, and Custom on quote. After a short discovery call we send a fixed price for your exact needs — you know the number before we start, with no surprises.',
          'faq.q2': 'How long does it take?', 'faq.a2': 'A simple site ships in about a week. A full website or app usually takes a few weeks depending on scope. Either way, you get a realistic timeline in the proposal and regular progress updates.',
          'faq.q3': 'Do you work with clients everywhere?', 'faq.a3': 'Yes. We work remotely with entrepreneurs everywhere — WhatsApp, email, calls. Distance is never a blocker, and we stay reachable and responsive.',
          'faq.q4': 'What happens after launch?', 'faq.a4': "We handle deployment, testing and post-launch support (3 months included with The Business). After that, an optional maintenance plan keeps everything up to date. We don't disappear the day you go live.",
          'faq.q5': 'Can you improve an existing site?', 'faq.a5': "Absolutely. We audit your current site, find what's holding it back, and fix or rebuild what needs it — no need to start from scratch.",
          'faq.q6': 'How do payments work?', 'faq.a6': 'Usually a deposit to start and the balance on delivery, with milestones for larger projects. Payment in instalments is possible. Everything is put in writing before we begin.',
          'pcta.title': 'Not sure which<br><em>plan fits?</em>', 'pcta.sub': "Tell us about your project and we'll recommend the right plan. We reply within 24 hours.", 'pcta.cta': 'Free audit in 48 h',
          'workpage.label': 'Our work', 'workpage.title': 'Projects<br><em>we built</em>', 'workpage.sub': 'Each project is described by what the tool does. Client names are only shown with their permission.', 'workcta.title': 'Your project<br><em>could be next.</em>', 'workcta.cta': 'Free audit in 48 h',
          'contact.label': 'Free audit', 'contact.title': 'Request my<br><em>free audit.</em>', 'contact.sub': 'Fill in the form: we look at how clients find you and book with you today, and we reply within 24 h. No commitment.', 'contact.whatsapp': 'Chat on WhatsApp',
          'form.name': 'Name', 'form.namePh': 'Your name', 'form.business': 'Business', 'form.businessPh': 'Your business name', 'form.link': 'Instagram or website', 'form.linkPh': '@yourbusiness or yourbusiness.com', 'form.reach': 'Email or phone', 'form.reachPh': 'you@email.com or your number', 'form.message': 'Message (optional)', 'form.messagePh': 'Anything we should know? (optional)', 'form.submit': 'Request my free audit →', 'form.sending': 'Sending…', 'form.sent': 'Got it!', 'form.sentSub': "We'll get back to you within 24 h.", 'form.invalid': 'Please enter a valid email or phone number.', 'form.error': 'Something went wrong — email us at',
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
          'team.role1': 'Software & automation developer', 'team.role2': 'Founder', 'team.role3': 'Marketing & social media',
          'bridge.quote': 'Our mission: give every business the <em>means to succeed</em>.', 'bridge.flags': 'Based in Canada &nbsp;·&nbsp; serving entrepreneurs everywhere &nbsp;·&nbsp; since 2025',
          'aboutcta.title': "Let's build<br><em>together?</em>", 'aboutcta.sub': 'Tell us about your project. We reply within 24 hours — no sales pitch, just a real conversation.', 'aboutcta.cta': 'Free audit in 48 h',
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
      // Attributes too: meta descriptions, placeholders, aria-labels (French is the HTML base)
      [['data-i18n-content', 'content'], ['data-i18n-ph', 'placeholder'], ['data-i18n-aria', 'aria-label']].forEach(([attr, target]) => {
        document.querySelectorAll(`[${attr}]`).forEach((el) => {
          const key = el.getAttribute(attr);
          if (DICT.fr[key] == null && el.hasAttribute(target)) DICT.fr[key] = el.getAttribute(target);
        });
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
        'svc.demo': '▶ Voir la démo',
        // Conversion UI injected by JS (announcement bar, WhatsApp, sticky bar, form states)
        'annc.text': 'Offre pilote : 3 places ce mois-ci. Audit gratuit en 48 h →', 'annc.close': 'Fermer l’annonce',
        'wa.label': 'Écrire sur WhatsApp', 'wa.msg': 'Bonjour Kelthen ! J’aimerais un audit gratuit pour mon entreprise.',
        'sticky.audit': 'Audit gratuit en 48 h', 'ap.msg': 'Bonjour Kelthen, j’aimerais réserver un cadrage pour un projet sur mesure.',
        'form.sending': 'Envoi…', 'form.invalid': 'Entrez un courriel ou un numéro de téléphone valide.', 'form.error': 'Un souci est survenu — écrivez-nous à'
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
        document.querySelectorAll('[data-i18n-content]').forEach((el) => {
          const val = dict[el.getAttribute('data-i18n-content')];
          if (val != null) el.setAttribute('content', val);
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
          const val = dict[el.getAttribute('data-i18n-aria')];
          if (val != null) el.setAttribute('aria-label', val);
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
        // Other modules that render language-dependent content (offer dates, WhatsApp links…)
        (window.__langHooks || []).forEach((fn) => { try { fn(lang); } catch (e) {} });
      }

      let current = 'en';
      try { current = localStorage.getItem('kelthen-lang') || 'en'; } catch (e) {}
      apply(current);
      // Re-apply (used after JS injects new [data-i18n] elements, e.g. cookie UI)
      window.__i18nApply = function () { apply(current); };
      window.__i18nLang = function () { return current; };
      window.__t = function (key) { const d = DICT[current] || DICT.fr; return d[key] != null ? d[key] : (DICT.fr[key] != null ? DICT.fr[key] : key); };
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
        return `<div class="mk-browser"><div class="mk-browser-bar"><span class="d d1"></span><span class="d d2"></span><span class="d d3"></span><span class="mk-url">${L(p.url) || ''}</span></div><div class="mk-browser-screen">${screenHtml}</div></div>`;
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
        ? `<img src="${s.img}" alt="${L(s.t) || ''}" loading="lazy" class="mk-shot">`
        : s.f();
    }

    /* ════ Marketplace d'artisans vérifiés — palette navy #0F2A4A / teal #0D9488 (démo, données neutres) ════ */
    const MKT_ROWS = [['P', 'Plombier', 'Centre', true], ['É', 'Électricienne', 'Nord', true], ['M', 'Menuisier', 'Est', false]];
    const mktBadge = '<span style="background:#CCFBF1;color:#0B7A70;border-radius:20px;padding:1px 6px;font-size:7px;font-weight:600">🛡 Vérifié</span>';
    function mktRow(a) {
      return `<div style="display:flex;align-items:center;gap:9px;border:1px solid #E9ECEF;background:#fff;border-radius:12px;padding:9px;margin-bottom:7px"><div style="width:36px;height:36px;border-radius:50%;background:#0F2A4A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0">${a[0]}</div><div style="flex:1"><div style="display:flex;align-items:center;gap:5px"><span style="color:#0F2A4A;font-size:12px;font-weight:600">${a[1]}</span>${a[3] ? mktBadge : ''}</div><div style="font-size:9px;color:#6C757D">Quartier ${a[2]}</div><div style="font-size:9px;color:#D97706">★ Avis de vrais clients</div></div><span style="color:#0D9488;font-size:14px">›</span></div>`;
    }
    const mktBrand = '<span style="font-size:13px;font-weight:800">Artisans<span style="color:#2DD4BF">+</span></span>';
    function mkMktHome() {
      return `<div class="mk" style="background:#F8F9FA;color:#212529;font-size:11px">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 14px;color:#0F2A4A">${mktBrand}<span style="font-size:10px;font-weight:500">Se connecter</span></div>
        <div style="background:#0F2A4A;color:#fff;padding:16px 14px"><span style="background:#CCFBF1;color:#0B7A70;border-radius:20px;padding:4px 9px;font-size:9px;font-weight:500">🛡 Identités vérifiées</span><div style="font-size:18px;font-weight:500;line-height:1.25;margin-top:10px">Trouvez un artisan <span style="color:#2DD4BF">vérifié</span> près de chez vous</div><div style="font-size:9px;line-height:1.5;color:rgba(255,255,255,.8);margin-top:7px">Identité confirmée avant publication. Avis de vrais clients. Contact WhatsApp direct.</div>
          <div style="display:flex;gap:6px;background:#fff;border-radius:11px;padding:6px;margin-top:11px"><div style="flex:1;display:flex;flex-direction:column;gap:6px"><div style="border:1px solid #E9ECEF;border-radius:8px;padding:6px 9px;font-size:10px;color:#212529">Tous les métiers ▾</div><div style="border:1px solid #E9ECEF;border-radius:8px;padding:6px 9px;font-size:10px;color:#6C757D">Ville ou quartier</div></div><div style="background:#0D9488;color:#fff;border-radius:8px;padding:0 12px;display:flex;align-items:center;font-size:10px;font-weight:500">⌕ Chercher</div></div>
        </div>
        <div style="padding:12px 14px"><div style="color:#0F2A4A;font-size:11px;font-weight:600;margin-bottom:8px">Artisans vérifiés</div>${mktRow(MKT_ROWS[0])}
          <div style="display:flex;gap:6px;margin-top:4px"><div style="flex:1;background:#25D366;color:#fff;border-radius:8px;padding:8px;text-align:center;font-size:10px;font-weight:600">WhatsApp</div><div style="flex:1;background:#0D9488;color:#fff;border-radius:8px;padding:8px;text-align:center;font-size:10px;font-weight:600">Demander un devis</div></div>
        </div>
      </div>`;
    }
    function mkMktResults() {
      return `<div class="mk" style="background:#F8F9FA;color:#212529;font-size:11px;min-height:300px">
        <div style="background:#0F2A4A;color:#fff;padding:11px 14px"><div style="margin-bottom:7px">${mktBrand}</div><div style="display:flex;gap:6px"><div style="flex:1;background:#fff;color:#212529;border-radius:8px;padding:6px 9px;font-size:10px">Métier ▾</div><div style="flex:1;background:#fff;color:#212529;border-radius:8px;padding:6px 9px;font-size:10px">Quartier ▾</div></div></div>
        <div style="padding:11px 14px"><div style="font-size:10px;color:#6C757D;margin-bottom:9px"><b style="color:#0F2A4A">Artisans</b> · près de chez vous</div>${MKT_ROWS.map(mktRow).join('')}</div>
      </div>`;
    }
    function mkMktProfile() {
      return `<div class="mk" style="background:#F8F9FA;color:#212529;font-size:11px;min-height:300px">
        <div style="background:#0F2A4A;color:#fff;padding:14px"><div style="display:flex;align-items:center;gap:11px"><div style="width:48px;height:48px;border-radius:50%;background:#fff;color:#0F2A4A;display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:600;flex-shrink:0">P</div><div><div style="display:flex;align-items:center;gap:6px"><span style="font-size:16px;font-weight:600">Plombier</span>${mktBadge}</div><div style="font-size:10px;color:rgba(255,255,255,.75)">Quartier Centre</div><div style="font-size:10px;margin-top:2px;color:#FBBF24">★ Avis de vrais clients</div></div></div></div>
        <div style="padding:12px 14px"><div style="font-size:9px;font-weight:700;text-transform:uppercase;color:#6C757D;margin-bottom:6px">Services</div><div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:11px"><span style="background:#fff;border:1px solid #E9ECEF;border-radius:7px;padding:4px 8px;font-size:9px">Dépannage fuite</span><span style="background:#fff;border:1px solid #E9ECEF;border-radius:7px;padding:4px 8px;font-size:9px">Installation</span><span style="background:#fff;border:1px solid #E9ECEF;border-radius:7px;padding:4px 8px;font-size:9px">Sanitaire</span></div>
          <div style="font-size:9px;font-weight:700;text-transform:uppercase;color:#6C757D;margin-bottom:6px">Réalisations</div><div style="display:flex;gap:6px;margin-bottom:11px"><div style="flex:1;height:46px;border-radius:9px;background:linear-gradient(135deg,#0D9488,#0F2A4A)"></div><div style="flex:1;height:46px;border-radius:9px;background:linear-gradient(135deg,#2DD4BF,#0D9488)"></div><div style="flex:1;height:46px;border-radius:9px;background:linear-gradient(135deg,#0F2A4A,#0B7A70)"></div></div>
          <div style="display:flex;gap:6px"><div style="flex:1;background:#25D366;color:#fff;border-radius:9px;padding:9px;text-align:center;font-size:11px;font-weight:600">WhatsApp</div><div style="flex:1;background:#0D9488;color:#fff;border-radius:9px;padding:9px;text-align:center;font-size:11px;font-weight:600">Demander un devis</div></div>
        </div>
      </div>`;
    }
    function mkMktVerif() {
      const steps = [['✓', 'Téléphone vérifié', 'Code reçu par SMS', 'done'], ['✓', "Pièce d'identité", 'Stockage sécurisé', 'done'], ['◐', "En revue par l'équipe", 'Dossier examiné à la main', 'active'], ['○', 'Badge « Vérifié »', 'Visible par les clients', 'todo']];
      const c = { done: ['#0D9488', '#CCFBF1'], active: ['#D97706', '#FEF3C7'], todo: ['#ADB5BD', '#F1F3F5'] };
      return `<div class="mk" style="background:#F8F9FA;color:#212529;font-size:11px;min-height:300px">
        <div style="background:#0F2A4A;color:#fff;padding:14px"><div style="font-size:14px;font-weight:800;margin-bottom:6px">Devenir artisan vérifié</div><div style="font-size:9px;color:rgba(255,255,255,.75);line-height:1.5">Inscription en quelques minutes. Identité confirmée par l'équipe.</div></div>
        <div style="padding:14px">${steps.map((st, i) => `<div style="display:flex;gap:10px;${i < 3 ? 'padding-bottom:14px' : ''}"><div style="display:flex;flex-direction:column;align-items:center"><div style="width:26px;height:26px;border-radius:50%;background:${c[st[3]][1]};color:${c[st[3]][0]};display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0">${st[0]}</div>${i < 3 ? '<div style="width:1.5px;flex:1;background:#E9ECEF;margin:3px 0"></div>' : ''}</div><div style="padding-top:3px"><div style="font-size:11px;font-weight:700">${st[1]}</div><div style="font-size:9px;color:#6C757D">${st[2]}</div></div></div>`).join('')}</div>
      </div>`;
    }
    // Le devis WhatsApp que la marketplace déclenche
    function mkMktDevis() {
      const waIn = (t) => `<div style="align-self:flex-start;max-width:82%;background:#fff;border-radius:8px 8px 8px 2px;padding:6px 9px;font-size:10px;line-height:1.45;box-shadow:0 1px 1px rgba(0,0,0,.08)">${t}</div>`;
      const waOut = (t) => `<div style="align-self:flex-end;max-width:82%;background:#DCF8C6;border-radius:8px 8px 2px 8px;padding:6px 9px;font-size:10px;line-height:1.45;box-shadow:0 1px 1px rgba(0,0,0,.08)">${t}</div>`;
      return `<div class="mk" style="font-size:11px;color:#1f2c33;background:#ECE5DD">
        <div style="display:flex;align-items:center;gap:8px;background:#075E54;color:#fff;padding:10px 12px"><span style="font-size:13px">‹</span><div style="width:28px;height:28px;border-radius:50%;background:#0F2A4A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0">P</div><div style="line-height:1.2;flex:1"><div style="display:flex;align-items:center;gap:5px"><span style="font-size:11px;font-weight:600">Plombier</span><span style="background:rgba(255,255,255,.22);border-radius:20px;padding:1px 6px;font-size:7px;font-weight:600">🛡 Vérifié</span></div><div style="font-size:8px;color:rgba(255,255,255,.75)">en ligne</div></div></div>
        <div style="display:flex;flex-direction:column;gap:6px;padding:12px 10px;min-height:300px">
          <div style="align-self:center;background:rgba(0,0,0,.06);color:#5b6b63;border-radius:8px;padding:3px 9px;font-size:8px">Devis demandé via la plateforme 🛡</div>
          ${waOut("Bonjour 👋 Fuite sous l'évier, vous êtes disponible cette semaine ?")}
          ${waIn('Bonjour ! Oui, demain matin. Une photo du problème ?')}
          ${waOut('<div style="width:72px;height:48px;border-radius:6px;background:linear-gradient(135deg,#0D9488,#0F2A4A)"></div>')}
          ${waIn('Merci 🙏 Je vous envoie le devis détaillé ici. Demain 9h, ça vous va ?')}
          ${waOut('Parfait, à demain ! 🙏')}
        </div>
      </div>`;
    }

    /* ════ Plateforme communautaire (OBNL) — palette crème / brun / rose (démo, données neutres) ════ */
    const orgNav = `<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:#FBF4EC;border-bottom:1px solid #EADBCB"><span style="display:flex;align-items:center;gap:6px;font-weight:700;color:#5A3825;font-size:12px"><span style="width:18px;height:18px;border-radius:50%;background:#F6828F;display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff">♥</span>Votre organisme</span><span style="display:flex;gap:9px;font-size:8.5px;color:#7A5A45"><span>Programmes</span><span>Événements</span><span style="background:#F6828F;color:#fff;border-radius:20px;padding:3px 9px;font-weight:700">Faire un don</span></span></div>`;
    function mkOrgHome() {
      return `<div class="mk" style="background:#FBF4EC;color:#3B2618;font-size:11px;min-height:300px">${orgNav}
        <div style="padding:18px 16px 14px"><div style="font-size:7.5px;letter-spacing:.16em;text-transform:uppercase;color:#C2566A;margin-bottom:8px">Communauté · entraide · réseau</div>
          <div style="font-size:22px;line-height:1.08;font-weight:800;color:#5A3825">Ensemble,<br><span style="color:#E36E80">on va plus loin.</span></div>
          <div style="font-size:9px;line-height:1.55;color:#7A5A45;margin-top:8px;max-width:88%">Des programmes, des événements et une communauté qui se soutient. Rejoignez-nous ou faites un don.</div>
          <div style="display:flex;gap:7px;margin-top:12px"><span style="background:#5A3825;color:#FBF4EC;border-radius:20px;padding:8px 13px;font-size:8.5px;font-weight:700">Faire un don →</span><span style="border:1px solid #CDB59F;color:#5A3825;border-radius:20px;padding:8px 13px;font-size:8.5px;font-weight:600">Nos événements</span></div></div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;padding:0 16px 16px">${[['🤝', 'Programmes'], ['🎟️', 'Événements'], ['✉️', 'Infolettre']].map((c) => `<div style="background:#fff;border:1px solid #EADBCB;border-radius:11px;padding:10px 8px"><div style="font-size:14px">${c[0]}</div><div style="font-size:9px;font-weight:700;color:#5A3825;margin-top:5px">${c[1]}</div></div>`).join('')}</div>
      </div>`;
    }
    function mkOrgDonate() {
      return `<div class="mk" style="background:#FBF4EC;color:#3B2618;font-size:11px;min-height:300px">${orgNav}
        <div style="padding:16px"><div style="font-size:17px;font-weight:800;color:#5A3825">Faire un don</div><div style="font-size:9px;color:#7A5A45;margin-top:4px">Chaque don soutient nos programmes.</div>
          <div style="display:flex;background:#EFE2D3;border-radius:20px;padding:3px;margin-top:12px;width:max-content"><span style="background:#5A3825;color:#fff;border-radius:20px;padding:5px 12px;font-size:8.5px;font-weight:700">Une fois</span><span style="padding:5px 12px;font-size:8.5px;color:#7A5A45">Chaque mois</span></div>
          <div style="margin-top:11px;background:#fff;border:1px solid #EADBCB;border-radius:10px;padding:9px 11px;font-size:9.5px;color:#9B8270">Montant libre ($)</div>
          <div style="margin-top:7px;background:#fff;border:1px solid #EADBCB;border-radius:10px;padding:9px 11px;font-size:9.5px;color:#9B8270">Courriel pour le reçu</div>
          <div style="margin-top:11px;background:#E36E80;color:#fff;border-radius:10px;padding:10px;text-align:center;font-size:10px;font-weight:700">🔒 Paiement sécurisé</div></div>
      </div>`;
    }
    function mkOrgEvents() {
      const ev = [['Conférence annuelle', 'Inscriptions ouvertes'], ['Atelier du mois', 'Places limitées'], ['Soirée réseautage', 'Bientôt']];
      return `<div class="mk" style="background:#FBF4EC;color:#3B2618;font-size:11px;min-height:300px">${orgNav}
        <div style="padding:16px"><div style="font-size:17px;font-weight:800;color:#5A3825;margin-bottom:10px">Événements à venir</div>${ev.map((e) => `<div style="display:flex;align-items:center;gap:10px;background:#fff;border:1px solid #EADBCB;border-radius:12px;padding:10px;margin-bottom:7px"><div style="width:34px;height:34px;border-radius:9px;background:#F9D4D9;display:flex;align-items:center;justify-content:center;font-size:14px">🎟️</div><div style="flex:1"><div style="font-size:10.5px;font-weight:700;color:#5A3825">${e[0]}</div><div style="font-size:8.5px;color:#9B8270">${e[1]}</div></div><span style="background:#5A3825;color:#fff;border-radius:20px;padding:5px 10px;font-size:8px;font-weight:700">S'inscrire</span></div>`).join('')}</div>
      </div>`;
    }

    /* ════ Système de réservation pour salon — démo (aucun nom ni adresse de client) ════ */
    function tgIn(t) { return `<div style="align-self:flex-start;max-width:88%;background:#fff;border-radius:9px 9px 9px 2px;padding:7px 10px;box-shadow:0 1px 1px rgba(0,0,0,.06);font-size:10px;line-height:1.45">${t}</div>`; }
    function tgBtn(t) { return `<span style="display:inline-block;background:#fff;color:#3390ec;border-radius:6px;padding:5px 10px;font-size:9px;font-weight:600;box-shadow:0 1px 1px rgba(0,0,0,.06)">${t}</span>`; }

    // 1 — le site de réservation
    function mkSalonSite() {
      return `<div class="mk" style="background:#1C1417;color:#FBF6F1;font-size:11px;min-height:300px">
        <div style="display:flex;justify-content:space-between;align-items:center;padding:11px 13px"><div style="display:flex;align-items:center;gap:7px"><span style="width:20px;height:20px;border-radius:50%;background:#C6447A;display:flex;align-items:center;justify-content:center;font-size:9px">🌸</span><span style="font-family:var(--serif);font-size:14px;font-weight:700">Votre salon</span></div><span style="background:#C6447A;color:#FBF6F1;border-radius:20px;padding:5px 12px;font-size:8px;font-weight:700">Réserver</span></div>
        <div style="padding:6px 14px 16px">
          <div style="font-family:var(--mono);font-size:7px;letter-spacing:.15em;text-transform:uppercase;color:#FF9FC4;margin-bottom:9px">Coiffure &amp; soins</div>
          <div style="font-family:var(--serif);font-size:24px;line-height:1.02;font-weight:600">La coiffure<br><em style="font-style:italic;color:#FF9FC4">que vos cheveux méritent.</em></div>
          <div style="font-size:9px;line-height:1.55;color:rgba(251,246,241,.72);margin-top:9px">Choisissez votre prestation, votre créneau, et c'est réservé — même à minuit.</div>
          <div style="display:flex;gap:7px;margin-top:13px"><span style="background:#C6447A;color:#FBF6F1;border-radius:22px;padding:9px 15px;font-size:9px;font-weight:700">Réserver un rendez-vous →</span><span style="border:1px solid rgba(251,246,241,.3);color:#FBF6F1;border-radius:22px;padding:9px 15px;font-size:9px;font-weight:600">Voir les services</span></div>
          <div style="margin-top:16px;background:rgba(251,246,241,.06);border:1px solid rgba(251,246,241,.1);border-radius:12px;padding:9px 11px;display:flex;align-items:center;gap:9px"><span style="width:22px;height:22px;border-radius:50%;background:#C6447A;display:flex;align-items:center;justify-content:center;font-size:10px">🕐</span><div><div style="font-size:9px;font-weight:700">Réservez en ligne, 24 h/24</div><div style="font-size:7.5px;color:rgba(251,246,241,.55)">Le salon confirme votre rendez-vous</div></div></div>
        </div>
      </div>`;
    }

    // 2 — la notification que reçoit le salon
    function mkSalonNotif() {
      const msg = `💇 <b>Nouvelle demande de rendez-vous</b><br><br>👤 Nouvelle cliente<br>📞 ••• ••• ••42<br>💅 Tresses knotless<br>🗓️ samedi à 14:00<br>📎 Photo de référence :<div style="margin-top:5px;width:62px;height:62px;border-radius:8px;background:linear-gradient(135deg,#C6447A,#1C1417);display:flex;align-items:center;justify-content:center;font-size:22px">💇🏾‍♀️</div>`;
      return `<div class="mk" style="font-size:11px;color:#1f2c33;background:#d9e4dd">
        <div style="display:flex;align-items:center;gap:8px;background:#527da3;color:#fff;padding:11px 12px 9px"><span style="font-size:13px">‹</span><div style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:13px">🔔</div><div style="line-height:1.2"><div style="font-size:11px;font-weight:600">Votre salon · automatisation</div><div style="font-size:8px;color:rgba(255,255,255,.7)">notifications · en ligne</div></div></div>
        <div style="display:flex;flex-direction:column;gap:7px;padding:12px 10px;min-height:300px">${tgIn(msg)}<div style="align-self:flex-start">${tgBtn('🔎 Voir &amp; valider la demande')}</div><div style="align-self:center;background:rgba(0,0,0,.08);color:#5b6b63;border-radius:20px;padding:3px 10px;font-size:8px">📨 aussi envoyé sur WhatsApp ✓</div></div>
      </div>`;
    }

    // 3 — le circuit d'automatisation, redessiné aux couleurs Kelthen
    function mkSalonFlow() {
      const node = (icon, title, sub, tint) => `<div style="display:flex;align-items:center;gap:9px;background:#052B3E;border:1px solid rgba(3, 120, 91,.28);border-left:3px solid ${tint || '#03785B'};border-radius:9px;padding:8px 10px"><span style="font-size:14px;line-height:1;flex-shrink:0">${icon}</span><div style="line-height:1.25"><div style="font-size:10px;font-weight:700;color:#F0EDE8">${title}</div>${sub ? `<div style="font-size:8px;color:rgba(240,237,232,.5)">${sub}</div>` : ''}</div></div>`;
      const wire = `<div style="height:11px;width:2px;background:linear-gradient(#03785B,rgba(3, 120, 91,.2));margin:2px auto"></div>`;
      const mini = (icon, label, tint) => `<div style="background:#052B3E;border:1px solid rgba(3, 120, 91,.22);border-top:2px solid ${tint};border-radius:8px;padding:7px 4px;text-align:center"><div style="font-size:13px;line-height:1">${icon}</div><div style="font-size:7.5px;color:rgba(240,237,232,.7);margin-top:3px">${label}</div></div>`;
      return `<div class="mk" style="background:#011E2E;padding:13px 12px;min-height:300px">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:11px"><span style="width:7px;height:7px;border-radius:50%;background:#EA4B71"></span><span style="font-family:var(--mono);font-size:7px;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,237,232,.55)">Automatisation · Validation (démo)</span></div>
        ${node('⚡', 'Nouvelle demande', 'Reçue depuis le site', '#EA4B71')}
        ${wire}
        ${node('⚙️', 'Préparer la demande', 'Automatique')}
        ${wire}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${mini('📨', 'Telegram', '#03785B')}${mini('🟢', 'WhatsApp', '#25D366')}</div>
        <div style="font-size:7.5px;color:rgba(240,237,232,.5);text-align:center;margin:7px 0 5px">Le salon confirme / décline 👆</div>
        ${node('🗄️', 'Réservation enregistrée', 'Sans doublon', '#3ECF8E')}
        ${wire}
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px">${mini('✉️', 'Courriel', '#EA4335')}${mini('💬', 'SMS', '#F22F46')}${mini('📅', 'Agenda', '#4285F4')}</div>
      </div>`;
    }

    // 4 — ce que reçoit la cliente : confirmation + rappel automatique
    function mkSalonConfirm() {
      const smsIn = (t) => `<div style="align-self:flex-start;max-width:87%;background:#fff;border-radius:14px 14px 14px 4px;padding:8px 11px;font-size:10px;line-height:1.5;box-shadow:0 1px 1px rgba(0,0,0,.06)">${t}</div>`;
      return `<div class="mk" style="font-size:11px;color:#1f2c33;background:#eceff3">
        <div style="display:flex;align-items:center;gap:8px;background:#f7f8fa;border-bottom:1px solid #e2e6ea;padding:10px 12px"><span style="font-size:13px;color:#8a97a3">‹</span><div style="width:26px;height:26px;border-radius:50%;background:#C6447A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">S</div><div style="line-height:1.2"><div style="font-size:11px;font-weight:600">Votre salon</div><div style="font-size:8px;color:#8a97a3">SMS</div></div></div>
        <div style="display:flex;flex-direction:column;gap:9px;padding:13px 10px;min-height:300px">${smsIn('Bonjour ✨ Votre rendez-vous est <b>CONFIRMÉ</b> : tresses knotless, samedi à 14:00. À bientôt !')}<div style="align-self:center;background:rgba(0,0,0,.07);color:#66727d;border-radius:20px;padding:3px 10px;font-size:8px">— la veille · rappel automatique —</div>${smsIn("⏰ Rappel : votre rendez-vous, c'est demain à <b>14:00</b>. Un empêchement ? Répondez à ce message. 💛")}</div>
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
        <div class="chat-sim-phasebar"><span class="chat-sim-step">1 / 3</span><div><div class="chat-sim-title">Réservation</div><div class="chat-sim-explain">La cliente réserve en discutant avec l’assistante.</div></div></div>
        <div class="chat-sim-phone"><div class="chat-sim-head"><span style="font-size:12px">‹</span><div class="chat-sim-ava">🤖</div><div><div class="chat-sim-name">Assistante · Votre salon</div><div class="chat-sim-sub">en ligne</div></div></div><div class="chat-sim-body"></div></div>
      </div>`;
    }

    // « Projets construits » : chaque projet est décrit par son type, ce que l'outil fait et
    // les technologies (en langage simple). Aucun nom de client, logo, lien ou résultat
    // n'est affiché sans son accord — champ `client` à remplir le jour où il dit oui.
    const projects = [
      {
        id: "001",
        name: { en: "Community platform", fr: "Plateforme communautaire" },
        client: null, // [À REMPLIR : nom du client — seulement avec son accord écrit]
        tagline: { en: 'Donations, events and a newsletter for a non-profit, managed from one place.', fr: 'Dons, événements et infolettre pour un organisme, gérés au même endroit.' },
        category: { en: "Website & platform · Non-profit", fr: "Site & plateforme · OBNL" }, year: "2026",
        accent: "#F6828F", device: "browser", url: { en: "your-organization.org", fr: "votre-organisme.ca" }, featured: true,
        desc: {
          en: "A website and community platform for a non-profit organization: online donations, event registration, a page for its annual conference, a confirmed newsletter, and content the team updates without touching any code.",
          fr: "Un site et une plateforme communautaire pour un organisme à but non lucratif : dons en ligne, inscriptions aux événements, une page pour sa conférence annuelle, une infolettre confirmée, et du contenu que l'équipe met à jour sans toucher au code."
        },
        stack: {
          en: ["Custom website", "Secure online payments", "Event registration", "Email newsletter", "Content management"],
          fr: ["Site sur mesure", "Paiement en ligne sécurisé", "Inscriptions aux événements", "Infolettre par courriel", "Gestion de contenu"]
        },
        features: [
          { icon: "💗", title: { en: "Online donations", fr: "Dons en ligne" }, desc: { en: "Secure payment — one-time or monthly, any amount.", fr: "Paiement sécurisé — don ponctuel ou mensuel, montant libre." } },
          { icon: "🎟️", title: { en: "Events & registration", fr: "Événements & inscriptions" }, desc: { en: "Sign up for events and the annual conference right from the site.", fr: "Inscription aux événements et à la conférence annuelle depuis le site." } },
          { icon: "✉️", title: { en: "Confirmed newsletter", fr: "Infolettre confirmée" }, desc: { en: "Email-confirmed sign-up, one-click unsubscribe.", fr: "Inscription confirmée par courriel, désinscription en un clic." } },
          { icon: "🗂️", title: { en: "Easy content updates", fr: "Contenu facile à gérer" }, desc: { en: "Events, news and gallery updated without touching any code.", fr: "Événements, actualités et galerie mis à jour sans toucher au code." } },
          { icon: "♿", title: { en: "Accessible & found on Google", fr: "Accessible & visible sur Google" }, desc: { en: "Strong contrasts, clean sharing previews, ready for search engines.", fr: "Bons contrastes, aperçus de partage soignés, prêt pour le référencement." } }
        ],
        screens: [
          { t: { en: "Home", fr: "Accueil" }, f: mkOrgHome, device: "browser" },
          { t: { en: "Donations", fr: "Dons" }, f: mkOrgDonate, device: "browser" },
          { t: { en: "Events", fr: "Événements" }, f: mkOrgEvents, device: "browser" }
        ]
      },
      {
        id: "002",
        name: { en: "Verified tradespeople marketplace", fr: "Marketplace d’artisans vérifiés" },
        client: null, // [À REMPLIR : nom du client — seulement avec son accord écrit]
        tagline: { en: 'Find a trusted tradesperson, check their profile, get a quote on WhatsApp.', fr: 'Trouver un artisan de confiance, voir son profil, recevoir un devis sur WhatsApp.' },
        category: { en: "Web platform · Marketplace", fr: "Plateforme web · Marketplace" }, year: "2025",
        accent: "#0D9488", device: "browser", url: { en: "marketplace", fr: "marketplace" }, featured: false,
        desc: {
          en: "A mobile-first marketplace that gives local tradespeople a credible online presence: identity checked by hand before a profile goes live, search by trade and neighbourhood, direct quotes over WhatsApp, and reviews only real clients can leave.",
          fr: "Une marketplace pensée mobile qui donne aux artisans locaux une présence en ligne crédible : identité vérifiée à la main avant publication, recherche par métier et quartier, devis directs sur WhatsApp, et avis réservés aux vrais clients."
        },
        stack: {
          en: ["Web platform", "User accounts", "Identity checks", "Search & filters", "WhatsApp contact"],
          fr: ["Plateforme web", "Comptes utilisateurs", "Vérification d'identité", "Recherche & filtres", "Contact WhatsApp"]
        },
        features: [
          { icon: "🛡️", title: { en: "“Verified” badge", fr: "Badge « Vérifié »" }, desc: { en: "Identity checked by hand before a profile goes live.", fr: "Identité contrôlée à la main avant publication du profil." } },
          { icon: "🔎", title: { en: "Search by trade + area", fr: "Recherche métier + quartier" }, desc: { en: "Find a trusted tradesperson near you.", fr: "Trouver un artisan de confiance près de chez soi." } },
          { icon: "💬", title: { en: "Direct WhatsApp quote", fr: "Devis WhatsApp direct" }, desc: { en: "The client talks to the tradesperson, no middleman.", fr: "Le client parle à l'artisan, sans intermédiaire." } },
          { icon: "⭐", title: { en: "Genuine reviews", fr: "Avis authentiques" }, desc: { en: "Only clients who requested a quote can leave a rating.", fr: "Seuls les clients passés par un devis peuvent noter." } },
          { icon: "🚫", title: { en: "Anti-fraud", fr: "Anti-fraude" }, desc: { en: "Reports and automatic suspension past a threshold.", fr: "Signalements et suspension automatique au-delà d'un seuil." } }
        ],
        screens: [
          { t: { en: "Home & search", fr: "Accueil & recherche" }, f: mkMktHome },
          { t: { en: "Results", fr: "Résultats" }, f: mkMktResults },
          { t: { en: "Tradesperson profile", fr: "Profil artisan" }, f: mkMktProfile },
          { t: { en: "WhatsApp quote", fr: "Devis WhatsApp" }, f: mkMktDevis, device: "phone" },
          { t: { en: "Identity check", fr: "Vérification d'identité" }, f: mkMktVerif }
        ]
      },
      {
        id: "003",
        name: { en: "Salon booking system", fr: "Système de réservation pour salon" },
        client: null, // [À REMPLIR : nom du client — seulement avec son accord écrit]
        tagline: { en: "A salon's bookings, approvals and reminders, automated.", fr: "Les réservations, validations et rappels d'un salon, automatisés." },
        category: { en: "Website · Booking & automation", fr: "Site · Réservation & automatisation" }, year: "2026",
        accent: "#C6447A", device: "browser", url: { en: "your-salon.com", fr: "votre-salon.ca" }, featured: false,
        desc: {
          en: "A booking website for a hair salon, paired with automation: every request reaches the salon on Telegram and WhatsApp, the owner approves with one tap, then the client gets an email and an SMS, the calendar updates, and reminders go out automatically before the appointment.",
          fr: "Un site de réservation pour un salon de coiffure, doublé d'une automatisation : chaque demande arrive au salon sur Telegram et WhatsApp, la propriétaire valide d'un tap, puis la cliente reçoit un courriel et un SMS, l'agenda se met à jour, et des rappels partent automatiquement avant le rendez-vous."
        },
        stack: {
          en: ["Booking website", "Automation", "SMS & email", "Synced calendar", "WhatsApp & Telegram"],
          fr: ["Site de réservation", "Automatisation", "SMS & courriel", "Agenda synchronisé", "WhatsApp & Telegram"]
        },
        features: [
          { icon: "📅", title: { en: "Online booking", fr: "Réservation en ligne" }, desc: { en: "Services shown online, exact price confirmed by the salon.", fr: "Prestations en ligne, prix exact confirmé par le salon." } },
          { icon: "🤖", title: { en: "AI assistant", fr: "Assistante IA" }, desc: { en: "Answers on the website, Telegram, WhatsApp, Messenger and Instagram.", fr: "Répond sur le site, Telegram, WhatsApp, Messenger et Instagram." } },
          { icon: "👆", title: { en: "One-tap approval", fr: "Validation en 1 tap" }, desc: { en: "The salon confirms or declines from Telegram or WhatsApp.", fr: "Le salon confirme ou décline depuis Telegram ou WhatsApp." } },
          { icon: "📎", title: { en: "Reference photo", fr: "Photo de référence" }, desc: { en: "Attached to the request to nail the style and the price.", fr: "Jointe à la demande pour cadrer le style et le prix." } },
          { icon: "🔔", title: { en: "Multi-channel confirmation", fr: "Confirmation multicanal" }, desc: { en: "Email + SMS + automatic calendar entry.", fr: "Courriel + SMS + ajout automatique à l'agenda." } },
          { icon: "⏰", title: { en: "Automatic reminders", fr: "Rappels automatiques" }, desc: { en: "Sent before the appointment, no duplicates.", fr: "Envoyés avant le rendez-vous, sans doublon." } }
        ],
        screens: [
          { t: { en: "Booking website", fr: "Site de réservation" }, f: mkSalonSite, device: "browser" },
          { t: { en: "Animated demo · assistant → approval", fr: "Démo animée · assistante → validation" }, f: mkChatSim, device: "raw" },
          { t: { en: "The salon gets notified", fr: "Le salon est prévenu" }, f: mkSalonNotif, device: "phone" },
          { t: { en: "Automation", fr: "Automatisation" }, f: mkSalonFlow, device: "bare" },
          { t: { en: "Confirmation & auto reminder", fr: "Confirmation & rappel auto" }, f: mkSalonConfirm, device: "phone" }
        ]
      },
      {
        id: "004",
        name: { en: "Kelthen", fr: "Kelthen" },
        client: "Kelthen", // notre propre site
        tagline: { en: 'Our own site: fast, alive and built to convert.', fr: 'Notre propre site : rapide, vivant et pensé pour convertir.' },
        category: { en: "Website · Agency", fr: "Site · Agence" }, year: "2025",
        accent: "#03785B", device: "browser", url: "kelthen.com", link: "https://www.kelthen.com", featured: false,
        desc: {
          en: "The agency's own site — light and fast, with no needless bloat. Art direction, refined micro-interactions and a 3D experience.",
          fr: "Le site de l'agence — léger et rapide, sans surcouche inutile. Direction artistique, micro-interactions soignées et expérience 3D."
        },
        stack: {
          en: ["Showcase website", "3D animation", "Found on Google", "Visit statistics"],
          fr: ["Site vitrine", "Animation 3D", "Visible sur Google", "Statistiques de visite"]
        },
        features: [
          { icon: "📄", title: { en: "Lightweight", fr: "Léger" }, desc: { en: "No heavy layers: pages load quickly.", fr: "Aucune surcouche : les pages chargent vite." } },
          { icon: "🔎", title: { en: "Found on Google", fr: "Visible sur Google" }, desc: { en: "Well referenced, with clean sharing previews.", fr: "Bien référencé, avec des aperçus de partage soignés." } },
          { icon: "✨", title: { en: "Custom animations", fr: "Animations sur mesure" }, desc: { en: "Signature motion, scroll reveals and interactions.", fr: "Animations signatures, révélations au scroll et interactions." } }
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
      en: { screensHint: (n) => `${n} screens — click`, viewProject: 'view project', seeScreens: 'see the screens', onWorkPage: 'see it on the Work page', visit: 'Visit site', features: 'What the tool does', tech: 'Technologies', keyScreens: (n) => `${n} key screens`, close: 'Close' },
      fr: { screensHint: (n) => `${n} écrans — cliquer`, viewProject: 'voir le projet', seeScreens: 'voir les écrans', onWorkPage: 'voir sur la page Work', visit: 'Visiter le site', features: 'Ce que fait l’outil', tech: 'Technologies', keyScreens: (n) => `${n} écrans clés`, close: 'Fermer' }
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
          <h3 class="work-name">${L(p.name)}</h3>
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
        card.setAttribute('aria-label', `${L(p.name)} — ${pfUI().seeScreens}`);
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
        card.setAttribute('aria-label', `${L(p.name)} — ${pfUI().onWorkPage}`);
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
        <h2 class="pm-name">${L(p.name)}</h2>
        <p class="pm-tagline">${L(p.tagline || p.desc)}</p>
        ${p.link ? `<a class="pm-visit" href="${p.link}" target="_blank" rel="noopener noreferrer">${ui.visit} <span aria-hidden="true">↗</span></a>` : ''}
        <div class="pm-screens">${screensHtml}</div>
        <p class="pm-desc">${L(p.desc)}</p>
        ${p.features ? `<p class="pm-screens-label">${ui.features}</p><div class="pm-features">${featuresHtml}</div>` : ''}
        <p class="pm-screens-label">${ui.tech}</p>
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
      const c = document.querySelector('#audit');
      if (c) c.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = 'contact.html#audit';
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

    // ─── Logo → scroll rapide vers le haut quand on est déjà sur l'accueil ───
    (function setupLogoTop() {
      const onHome = () => {
        const p = location.pathname;
        return p === '/' || /(^|\/)index\.html$/.test(p);
      };
      const fastTop = () => {
        const start = window.pageYOffset || document.documentElement.scrollTop || 0;
        if (start <= 0) return;
        const de = document.documentElement;
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) { window.scrollTo(0, 0); return; }
        const prev = de.style.scrollBehavior;
        de.style.scrollBehavior = 'auto'; // évite le conflit avec scroll-behavior:smooth du CSS
        const dur = 520, t0 = performance.now(), ease = (x) => 1 - Math.pow(1 - x, 3);
        const step = (now) => {
          const k = Math.min(1, (now - t0) / dur);
          window.scrollTo(0, Math.round(start * (1 - ease(k))));
          if (k < 1) requestAnimationFrame(step);
          else de.style.scrollBehavior = prev;
        };
        requestAnimationFrame(step);
      };
      document.querySelectorAll('.nav-logo').forEach((el) => {
        el.addEventListener('click', (e) => {
          if (!onHome()) return; // depuis une autre page : laisser la navigation normale
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; // laisser ouvrir dans un onglet
          e.preventDefault();
          if (history.replaceState) history.replaceState(null, '', location.pathname);
          fastTop();
        });
      });
    })();

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

    // ─── Audit form → Web3Forms (5 champs, succès/erreur) ───
    (function setupContactForm() {
      const form = document.querySelector('.contact-form');
      if (!form) return;
      const btn = form.querySelector('.form-submit');
      const t = (k) => (window.__t ? window.__t(k) : k);
      const val = (id) => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
      const reach = document.getElementById('contactReach');
      const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      const isPhone = (v) => /^[+\d\s().-]+$/.test(v) && v.replace(/\D/g, '').length >= 7;
      if (reach) reach.addEventListener('input', () => reach.setCustomValidity(''));

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = val('contactName'), business = val('contactBusiness'), link = val('contactLink'), contact = val('contactReach'), message = val('contactMessage');
        if (reach && !(isEmail(contact) || isPhone(contact))) { reach.setCustomValidity(t('form.invalid')); reach.reportValidity(); return; }
        if (!name || !business || !link || !contact) return;

        const label = btn.textContent;
        btn.textContent = t('form.sending');
        btn.disabled = true;
        form.querySelectorAll('.form-error').forEach((n) => n.remove());

        const payload = {
          access_key: '42da83fb-4e37-4310-ae5f-99d38f624226',
          subject: 'Audit gratuit — ' + business,
          from_name: 'kelthen.com',
          name,
          business,
          instagram_or_website: link,
          contact,
          message: message || '—'
        };
        if (isEmail(contact)) payload.email = contact; // pour répondre directement au courriel

        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error('send failed');
          form.style.display = 'none';
          document.getElementById('formSuccess').classList.add('visible');
          track('audit_form_submit', { form_name: 'audit' }); // aucune donnée personnelle
        } catch {
          btn.textContent = label;
          btn.disabled = false;
          btn.insertAdjacentHTML('afterend', `<p class="form-error">${t('form.error')} <a href="mailto:contact@kelthen.com">contact@kelthen.com</a></p>`);
        }
      });
    })();

    // ─── GA4 : événements de conversion ───
    // gtag n'existe que si le visiteur a accepté les statistiques ; les paramètres
    // ne contiennent jamais de donnée personnelle (seulement l'emplacement du bouton).
    function track(name, params) {
      try { if (typeof window.gtag === 'function') window.gtag('event', name, params || {}); } catch (e) {}
    }
    (function trackClicks() {
      const where = (el) => {
        const tagged = el.closest('[data-track-loc]');
        if (tagged) return tagged.getAttribute('data-track-loc');
        const box = el.closest('section[id], nav, footer, [id]');
        return box ? (box.id || box.tagName.toLowerCase()) : 'page';
      };
      document.addEventListener('click', (e) => {
        const el = e.target.closest('a, button');
        if (!el) return;
        const href = el.getAttribute('href') || '';
        if (/^https:\/\/wa\.me\//.test(href)) { track('whatsapp_click', { link_location: where(el) }); return; }
        const toAudit = /(^|\/)contact\.html/.test(href) && /#audit|[?&]audit=/.test(href);
        if (toAudit || el.matches('[data-track="audit"]')) track('audit_click', { link_location: where(el) });
      }, true);
    })();

    // ─── Offre pilote, bandeau d'annonce, WhatsApp flottant, barre mobile « Audit gratuit » ───
    const OFFER_END = '2026-11-12'; // dernier jour de l'offre pilote (inclus) : après, bandeau + blocs pilote disparaissent seuls
    const WA_NUMBER = '14185735199';
    const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>';
    (function conversionUi() {
      const live = new Date() <= new Date(OFFER_END + 'T23:59:59');
      const t = (k) => (window.__t ? window.__t(k) : k);
      const lang = () => (window.__i18nLang && window.__i18nLang()) || 'en';
      const root = document.documentElement;
      const hooks = (window.__langHooks = window.__langHooks || []);

      // 1. Blocs « Offre pilote » : retirés après la date, sinon date de fin affichée
      if (!live) document.querySelectorAll('[data-offer]').forEach((el) => el.remove());
      function renderOfferDates() {
        const txt = new Date(OFFER_END + 'T12:00:00').toLocaleDateString(lang() === 'fr' ? 'fr-CA' : 'en-CA', { day: 'numeric', month: 'long', year: 'numeric' });
        document.querySelectorAll('[data-offer-end]').forEach((el) => { el.textContent = txt; });
      }

      // 2. Bandeau d'annonce, fermable (le choix est retenu jusqu'à la fin de l'offre)
      const ANNC_KEY = 'kelthen-annc-closed';
      let closed = false;
      try { closed = localStorage.getItem(ANNC_KEY) === OFFER_END; } catch (e) {}
      const nav = document.getElementById('nav');
      if (live && !closed) {
        const bar = document.createElement('div');
        bar.className = 'annc';
        bar.setAttribute('data-track-loc', 'announcement');
        bar.innerHTML = `<a class="annc-link" href="contact.html#audit"><span data-i18n="annc.text">${t('annc.text')}</span></a><button class="annc-close" type="button" data-i18n-aria="annc.close" aria-label="${t('annc.close')}">✕</button>`;
        document.body.insertBefore(bar, document.body.firstChild);
        root.classList.add('has-annc');
        // the bar sits in the page flow; the fixed menu slides up as the bar scrolls away
        const place = () => { const h = bar.offsetHeight; if (nav) nav.style.top = Math.max(0, h - window.scrollY) + 'px'; };
        place();
        window.addEventListener('scroll', place, { passive: true });
        window.addEventListener('resize', place);
        bar.querySelector('.annc-close').addEventListener('click', () => {
          try { localStorage.setItem(ANNC_KEY, OFFER_END); } catch (e) {}
          window.removeEventListener('scroll', place);
          window.removeEventListener('resize', place);
          bar.remove();
          root.classList.remove('has-annc');
          if (nav) nav.style.top = '';
        });
      }

      // 3. WhatsApp flottant (toutes les pages) + barre collante « Audit gratuit » sur mobile
      const onAuditPage = !!document.querySelector('form#audit');
      const wa = document.createElement('a');
      wa.className = 'wa-float' + (onAuditPage ? ' wa-always' : '');
      wa.target = '_blank';
      wa.rel = 'noopener noreferrer';
      wa.setAttribute('data-track-loc', 'floating_button');
      wa.innerHTML = WA_SVG;
      document.body.appendChild(wa);
      let sticky = null;
      if (!onAuditPage) {
        sticky = document.createElement('div');
        sticky.className = 'k-sticky';
        sticky.setAttribute('data-track-loc', 'sticky_bar');
        sticky.innerHTML = `<a class="k-sticky-audit" href="contact.html#audit" data-i18n="sticky.audit">${t('sticky.audit')}</a><a class="k-sticky-wa" target="_blank" rel="noopener noreferrer">${WA_SVG}</a>`;
        document.body.appendChild(sticky);
        root.classList.add('has-sticky');
        // n'apparaît qu'après un peu de défilement : pas de doublon avec le bouton du premier écran
        const toggleSticky = () => sticky.classList.toggle('show', window.scrollY > window.innerHeight * 0.6);
        toggleSticky();
        window.addEventListener('scroll', toggleSticky, { passive: true });
      }
      // Pre-filled WhatsApp message on every generic WhatsApp link (footer, contact, pages…)
      function renderWa() {
        const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t('wa.msg'))}`;
        const label = t('wa.label');
        [wa, sticky && sticky.querySelector('.k-sticky-wa')].filter(Boolean).forEach((a) => { a.href = href; a.setAttribute('aria-label', label); a.title = label; });
        document.querySelectorAll(`a[data-wa], a[href="https://wa.me/${WA_NUMBER}"]`).forEach((a) => { a.setAttribute('data-wa', ''); a.href = href; });
      }

      // « Réserver un cadrage » (apps.html) : ouvre le formulaire avec le message déjà écrit
      function renderScope() {
        document.querySelectorAll('a[data-scope]').forEach((a) => { a.href = 'contact.html?audit=' + encodeURIComponent(t('ap.msg')) + '#audit'; });
      }

      function renderAll() { renderOfferDates(); renderWa(); renderScope(); }
      renderAll();
      hooks.push(renderAll);
      if (window.__i18nApply) window.__i18nApply();
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

    // ─── Chat simulation engine (system demo + salon project modal) ───
    // Démonstration du système de réservation (aucun nom, adresse ni prix de client réel)
    const CHAT_SIM_SCRIPT = {
      fr: [
        { step: '1 / 3', title: 'Réservation', explain: 'La cliente réserve en discutant avec l’assistante.',
          head: ['🤖', 'Assistante · Votre salon', 'en ligne', '#527da3'],
          msgs: [
            ['in', 'Bonjour 👋 Je suis l’assistante du salon. Quelle prestation vous ferait plaisir ?'],
            ['out', 'Des tresses knotless 💁🏾‍♀️'],
            ['in', 'Parfait ✨ Quel jour vous arrange ?'],
            ['out', 'Samedi après-midi si possible'],
            ['in', 'J’ai samedi à 14:00 🗓️ Une photo de référence ?'],
            ['photo-out', ''],
            ['in', 'Reçu 📎 Demande envoyée au salon, qui vous confirme le prix 💛']
          ] },
        { step: '2 / 3', title: 'Notification', explain: 'Le salon est prévenu sur son téléphone.',
          head: ['🔔', 'Votre salon · automatisation', 'notifications', '#527da3'],
          msgs: [
            ['in', '💇 <b>Nouvelle demande</b><br>💅 Tresses knotless<br>🗓️ samedi · 14:00<br>📎 Photo de référence :'],
            ['photo-in', ''],
            ['btn', '🔎 Voir & valider la demande']
          ] },
        { step: '3 / 3', title: 'Validation', explain: 'Un tap → SMS, courriel, agenda et rappels.',
          head: ['💬', 'Votre salon', 'SMS', '#2D6A4F'],
          msgs: [
            ['tap', '✅ Confirmer'],
            ['sms', 'RDV <b>CONFIRMÉ</b> ✨ Tresses knotless, samedi à 14:00. À bientôt !'],
            ['note', '— la veille · rappel automatique —'],
            ['sms', '⏰ Rappel : votre RDV, c’est demain à 14:00 💛']
          ] }
      ],
      en: [
        { step: '1 / 3', title: 'Booking', explain: 'The client books by chatting with the assistant.',
          head: ['🤖', 'Assistant · Your salon', 'online', '#527da3'],
          msgs: [
            ['in', 'Hi 👋 I’m the salon’s assistant. Which service would you like?'],
            ['out', 'Knotless braids 💁🏾‍♀️'],
            ['in', 'Perfect ✨ What day works for you?'],
            ['out', 'Saturday afternoon if possible'],
            ['in', 'I have Saturday at 2:00 pm 🗓️ A reference photo?'],
            ['photo-out', ''],
            ['in', 'Got it 📎 Request sent to the salon, who will confirm the price 💛']
          ] },
        { step: '2 / 3', title: 'Notification', explain: 'The salon is notified on its phone.',
          head: ['🔔', 'Your salon · automation', 'notifications', '#527da3'],
          msgs: [
            ['in', '💇 <b>New request</b><br>💅 Knotless braids<br>🗓️ Saturday · 2:00 pm<br>📎 Reference photo:'],
            ['photo-in', ''],
            ['btn', '🔎 View & approve the request']
          ] },
        { step: '3 / 3', title: 'Approval', explain: 'One tap → SMS, email, calendar and reminders.',
          head: ['💬', 'Your salon', 'SMS', '#2D6A4F'],
          msgs: [
            ['tap', '✅ Confirm'],
            ['sms', 'Appointment <b>CONFIRMED</b> ✨ Knotless braids, Saturday at 2:00 pm. See you soon!'],
            ['note', '— the day before · automatic reminder —'],
            ['sms', '⏰ Reminder: your appointment is tomorrow at 2:00 pm 💛']
          ] }
      ]
    };

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
      script = script || CHAT_SIM_SCRIPT[pfLang()] || CHAT_SIM_SCRIPT.fr;
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

    ['autoSim', 'lpSim'].forEach((id) => {
      const host = document.getElementById(id);
      if (host) { host.innerHTML = mkChatSim(); initChatSims(host); }
    });

    // ─── Service demos: a clear animated demo per service card ───
    const SERVICE_DEMOS = {
      site: {
        fr: [
          { step: '1 / 2', title: 'Notre propre site en est la preuve', explain: 'Rapide, élégant, pensé pour convertir — comme le vôtre.', head: ['🌐', 'kelthen.com', 'en ligne · rapide', '#03785B'],
            msgs: [ ['card', '<b>kelthen.com</b><br>Agence web · Canada<br><span style="color:#03785B">⚡ Rapide sur mobile et ordi</span>'], ['note', 'Zéro lenteur, parfait sur mobile et ordi'] ] },
          { step: '2 / 2', title: 'Conçu pour transformer le visiteur', explain: 'Message clair, design premium, appel à l\'action évident.', head: ['✨', 'kelthen.com', 'conversion', '#03785B'],
            msgs: [ ['in', 'Plus de clients. Moins de gestion. 👋'], ['out', "C'est exactement ce qu'il me faut"], ['tap', '🚀 Audit gratuit'] ] }
        ],
        en: [
          { step: '1 / 2', title: 'Our own site is the proof', explain: 'Fast, elegant, built to convert — just like yours.', head: ['🌐', 'kelthen.com', 'online · fast', '#03785B'],
            msgs: [ ['card', '<b>kelthen.com</b><br>Web agency · Canada<br><span style="color:#03785B">⚡ Fast on phone and desktop</span>'], ['note', 'Zero lag, perfect on phone and desktop'] ] },
          { step: '2 / 2', title: 'Built to convert the visitor', explain: 'Clear message, premium design, obvious call to action.', head: ['✨', 'kelthen.com', 'conversion', '#03785B'],
            msgs: [ ['in', 'More clients. Less admin. 👋'], ['out', "That's exactly what I need"], ['tap', '🚀 Free audit'] ] }
        ]
      },
      booking: {
        fr: [
          { step: '1 / 2', title: 'Réservation en ligne, 24 h/24', explain: 'Démonstration : la cliente choisit sa prestation et son créneau.', head: ['💇', 'Votre salon', 'réservation · 24/7', '#C6447A'],
            msgs: [ ['card', '<b>Votre salon</b><br>votre-salon.ca<br><span style="color:#C6447A">Prestations · réserver en ligne</span>'], ['in', 'Bonjour 👋 Quelle prestation vous ferait plaisir ?'], ['out', 'Des tresses knotless'], ['in', 'Parfait ✨ Quel jour vous arrange ?'] ] },
          { step: '2 / 2', title: 'Réservé, même la nuit', explain: 'Un acompte bloque le créneau, la confirmation part toute seule.', head: ['📅', 'Votre salon', 'acompte', '#2D6A4F'],
            msgs: [ ['out', 'Samedi après-midi'], ['in', 'Samedi 14:00 ✅ Un acompte réserve votre place.'], ['tap', '💳 Laisser l’acompte'], ['sms', 'Réservation confirmée ✅ À samedi, 14:00 💛'] ] }
        ],
        en: [
          { step: '1 / 2', title: 'Online booking, 24/7', explain: 'Demo: the client picks a service and a time slot.', head: ['💇', 'Your salon', 'booking · 24/7', '#C6447A'],
            msgs: [ ['card', '<b>Your salon</b><br>your-salon.com<br><span style="color:#C6447A">Services · book online</span>'], ['in', 'Hi 👋 Which service would you like?'], ['out', 'Knotless braids'], ['in', 'Perfect ✨ What day works for you?'] ] },
          { step: '2 / 2', title: 'Booked, even at night', explain: 'A deposit holds the slot, the confirmation goes out on its own.', head: ['📅', 'Your salon', 'deposit', '#2D6A4F'],
            msgs: [ ['out', 'Saturday afternoon'], ['in', 'Saturday 2:00 pm ✅ A deposit holds your spot.'], ['tap', '💳 Leave the deposit'], ['sms', 'Booking confirmed ✅ See you Saturday, 2:00 pm 💛'] ] }
        ]
      },
      ai: {
        fr: [
          { step: '1 / 2', title: 'Une assistante IA', explain: 'Démonstration : l’assistante répond aux clients à votre place.', head: ['🤖', 'Assistante · Votre salon', 'multicanal · en ligne', '#C6447A'],
            msgs: [ ['in', "Bonjour, je suis l'assistante du salon 👋"], ['out', 'Vous faites les box braids ?'], ['in', 'Oui ✅ Je vous explique les tarifs et je trouve un créneau.'] ] },
          { step: '2 / 2', title: 'Un seul assistant, tous les canaux', explain: 'Même conversation depuis Instagram, WhatsApp ou Telegram.', head: ['📱', 'Assistante', 'Instagram · WhatsApp', '#527da3'],
            msgs: [ ['card', '🤖 <b>L’assistante répond partout</b><br>🌐 Site · 💬 WhatsApp<br>📸 Instagram · ✈️ Telegram'], ['note', 'Réponses 24/7, sans faire attendre le client'] ] }
        ],
        en: [
          { step: '1 / 2', title: 'An AI assistant', explain: 'Demo: the assistant answers clients for you.', head: ['🤖', 'Assistant · Your salon', 'multichannel · online', '#C6447A'],
            msgs: [ ['in', "Hi, I'm the salon's assistant 👋"], ['out', 'Do you do box braids?'], ['in', 'Yes ✅ I\'ll explain the pricing and find you a slot.'] ] },
          { step: '2 / 2', title: 'One assistant, every channel', explain: 'Same conversation from Instagram, WhatsApp or Telegram.', head: ['📱', 'Assistant', 'Instagram · WhatsApp', '#527da3'],
            msgs: [ ['card', '🤖 <b>The assistant answers everywhere</b><br>🌐 Site · 💬 WhatsApp<br>📸 Instagram · ✈️ Telegram'], ['note', 'Replies 24/7, never keeps a client waiting'] ] }
        ]
      },
      reminders: {
        fr: [
          { step: '1 / 3', title: 'À la réservation', explain: 'Confirmation immédiate par SMS.', head: ['💬', 'Votre salon', 'SMS', '#2D6A4F'],
            msgs: [ ['sms', 'RDV <b>CONFIRMÉ</b> ✨ Tresses knotless — samedi à 14:00.'] ] },
          { step: '2 / 3', title: 'Rappel automatique 24 h avant', explain: 'Le système relance le client tout seul — fini les oublis.', head: ['⏰', 'Votre salon', 'rappel auto', '#2D6A4F'],
            msgs: [ ['note', '— 24 h avant · automatique —'], ['sms', "⏰ Rappel : votre RDV c'est <b>demain à 14:00</b> 💛 Un empêchement ? Répondez."], ['out', 'Parfait, je serai là ✅'] ] },
          { step: '3 / 3', title: 'Et un 2ᵉ rappel 2 h avant', explain: 'Un second rappel, sans doublon.', head: ['🔔', 'Votre salon', '2 h avant', '#2D6A4F'],
            msgs: [ ['note', '— 2 h avant · automatique —'], ['sms', '🔔 À tout à l\'heure ! Votre RDV est à <b>14:00</b> aujourd\'hui.'], ['note', 'Moins de rendez-vous manqués, sans y penser 📉'] ] }
        ],
        en: [
          { step: '1 / 3', title: 'At booking', explain: 'Instant SMS confirmation.', head: ['💬', 'Your salon', 'SMS', '#2D6A4F'],
            msgs: [ ['sms', 'Appointment <b>CONFIRMED</b> ✨ Knotless braids — Saturday, 2:00 pm.'] ] },
          { step: '2 / 3', title: 'Automatic reminder 24 h before', explain: 'The system follows up on its own — no more no-shows.', head: ['⏰', 'Your salon', 'auto reminder', '#2D6A4F'],
            msgs: [ ['note', '— 24 h before · automatic —'], ['sms', "⏰ Reminder: your appointment is <b>tomorrow at 2:00 pm</b> 💛 Can't make it? Just reply."], ['out', "Perfect, I'll be there ✅"] ] },
          { step: '3 / 3', title: 'And a 2nd reminder 2 h before', explain: 'A second reminder, no duplicates.', head: ['🔔', 'Your salon', '2 h before', '#2D6A4F'],
            msgs: [ ['note', '— 2 h before · automatic —'], ['sms', '🔔 See you soon! Your appointment is at <b>2:00 pm</b> today.'], ['note', 'Fewer missed appointments, effortlessly 📉'] ] }
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
            msgs: [ ['stars', '★★★★★'], ['note', '— la cliente écrit son avis —'], ['card', '✅ <b>Avis publié sur votre fiche Google</b>'] ] },
          { step: '3 / 3', title: 'Et on les fait revenir', explain: 'Relance de fidélité automatique, au bon moment.', head: ['🎁', 'Fidélité', 'automatique', '#C6447A'],
            msgs: [ ['note', '— quelques semaines plus tard —'], ['sms', '🎁 Ça fait un moment ! Une petite attention pour votre prochain RDV 💛'], ['out', 'Je réserve !'] ] }
        ],
        en: [
          { step: '1 / 3', title: 'After the appointment', explain: 'An automatic SMS invites the client to leave a review.', head: ['💬', 'Reviews', 'SMS · post-visit', '#2D6A4F'],
            msgs: [ ['sms', 'Thanks for your visit 💛 A quick review of your experience?'], ['tap', '⭐ Leave my review'] ] },
          { step: '2 / 3', title: 'Posted on Google in one tap', explain: 'The client rates, the review lands on your Google listing.', head: ['⭐', 'Google review', 'publishing', '#F5A623'],
            msgs: [ ['stars', '★★★★★'], ['note', '— the client writes their review —'], ['card', '✅ <b>Review posted on your Google listing</b>'] ] },
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
