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

    /* ════ MamaShop — React Native, palette forêt #2D6A4F / tomate #C0392B / crème #FAF7F2 ════ */
    // Uniform green app header for all MamaShop screens
    function mamaHead(title) {
      return `<div style="display:flex;align-items:center;gap:8px;background:#2D6A4F;color:#fff;padding:11px 12px"><span style="font-size:14px">☰</span><span style="font-size:12px;font-weight:800;flex:1">${title}</span><div style="width:22px;height:22px;border-radius:50%;background:#B9C7BE"></div></div>`;
    }
    function mkMamaDash() {
      const kpis = [['9k', 'Ventes F', '#2D6A4F'], ['0', 'Crédit F', '#3F4A54'], ['0', 'Critique', '#3F4A54'], ['22%', 'Marge', '#2D6A4F']];
      const bars = [0, 0, 0, 0, 0, 0, 100];
      const days = ['J-6', 'J-5', 'J-4', 'J-3', 'J-2', 'Hier', 'Auj.'];
      return `<div class="mk" style="background:#FAF7F2;color:#1C2B22;font-size:11px;position:relative;min-height:430px;padding-bottom:28px">
        ${mamaHead('Tableau de bord')}
        <div style="padding:11px 12px 0">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><div style="width:30px;height:30px;border-radius:50%;background:#40916C;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">E</div><div style="flex:1"><div style="font-size:12px;font-weight:800">Essivi</div><div style="font-size:8px;color:#6B7F74">Gérant(e) · En direct</div></div><span style="background:#D8F3DC;color:#2D6A4F;border-radius:20px;padding:3px 8px;font-size:7px;font-weight:700">Mar. 28 juil</span></div>
          <div style="display:flex;gap:4px;margin-bottom:9px">${kpis.map(k => `<div style="flex:1;background:#fff;border:1px solid rgba(45,106,79,.1);border-radius:10px;padding:8px 1px;text-align:center"><div style="font-size:13px;font-weight:800;color:${k[2]}">${k[0]}</div><div style="margin-top:2px;font-size:6px;font-weight:700;text-transform:uppercase;color:#9CA3AF">${k[1]}</div></div>`).join('')}</div>
          <div style="display:flex;align-items:center;gap:8px;background:#FBEFD0;border:1px solid #E9D19B;border-radius:11px;padding:9px 10px;margin-bottom:9px"><span style="font-size:14px">🙋🏾</span><div style="flex:1"><div style="font-size:9px;font-weight:800">1 demande(s) de prix</div><div style="font-size:7px;color:#8A7B54">Un agent attend ta réponse · Tap pour répondre</div></div><span style="color:#B08428;font-size:13px">→</span></div>
          <div style="background:#fff;border-radius:11px;padding:9px 10px;margin-bottom:9px"><div style="font-size:6.5px;font-weight:700;text-transform:uppercase;color:#9CA3AF;margin-bottom:9px">Ventes — 7 jours</div><div style="display:flex;height:40px;align-items:flex-end;gap:4px">${bars.map((h, i) => `<div style="flex:1;position:relative">${i === 6 ? `<div style="position:absolute;top:-10px;left:0;right:0;text-align:center;font-size:6px;color:#40916C;font-weight:700">9k</div>` : ''}<div style="height:${h ? h + '%' : '2px'};border-radius:3px 3px 0 0;background:${i === 6 ? '#40916C' : '#E4EAE6'}"></div></div>`).join('')}</div><div style="display:flex;gap:4px;margin-top:4px">${days.map((d, i) => `<div style="flex:1;text-align:center;font-size:5.5px;color:${i === 6 ? '#40916C' : '#B98A8A'}">${d}</div>`).join('')}</div></div>
          <div style="background:#fff;border-radius:11px;padding:9px 10px;margin-bottom:9px"><div style="font-size:6.5px;font-weight:700;text-transform:uppercase;color:#9CA3AF;margin-bottom:7px">Alertes actives</div>
            <div style="display:flex;gap:7px;background:#FBF3D3;border-radius:8px;padding:7px;margin-bottom:6px"><span style="color:#B08428;font-weight:700">$</span><div><div style="font-size:9px;font-weight:700">65 500 F d'impayés en cours</div><div style="font-size:7px;color:#8A7B54">Vérifier les clients avec dettes</div></div></div>
            <div style="display:flex;gap:7px;background:#E3F3E4;border-radius:8px;padding:7px"><span>🌧️</span><div><div style="font-size:9px;font-weight:700">Saison des pluies active</div><div style="font-size:7px;color:#5B7A5E">Bonne période pour les piments · Saison sèche dans 14 sem.</div></div></div>
          </div>
          <div style="background:#fff;border-radius:11px;padding:9px 10px"><div style="font-size:6.5px;font-weight:700;text-transform:uppercase;color:#9CA3AF;margin-bottom:6px">Top produits aujourd'hui</div><div style="display:flex;align-items:center;gap:8px"><div style="width:24px;height:24px;border-radius:7px;background:#F5EBE0;display:flex;align-items:center;justify-content:center;font-size:12px">🍅</div><div style="flex:1"><div style="font-size:10px;font-weight:700">Tomate</div><div style="font-size:7px;color:#9CA3AF">1 vendue</div></div><div style="font-size:11px;font-weight:800;color:#40916C">8 500 F</div></div></div>
        </div>
      </div>`;
    }
    function mkMamaStock() {
      const items = [['Tomate', '3 cuvettes', 'crit'], ['Banane plantain', 'Rupture', 'crit'], ['Piment', '8 paniers', 'warn'], ['Oignon', '22 sacs', 'ok'], ['Ananas', '15 caisses', 'ok']];
      const sty = { crit: ['#C0392B', '#FDEDEC'], warn: ['#7A4A00', '#FEF3C7'], ok: ['#2D6A4F', '#D8F3DC'] };
      return `<div class="mk" style="background:#FAF7F2;color:#1C2B22;font-size:11px;min-height:380px">
        ${mamaHead('Stock actuel')}
        <div style="padding:12px 14px">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:9px"><span style="font-size:8px;font-weight:700;text-transform:uppercase;color:#6B7F74">5 produits</span><span style="background:#FEF3C7;color:#7A4A00;border-radius:20px;padding:3px 8px;font-size:8px;font-weight:700">⏳ 1 en attente</span></div>
          ${items.map(it => `<div style="display:flex;align-items:center;gap:8px;background:#fff;border:1px solid rgba(45,106,79,0.08);border-radius:11px;padding:9px;margin-bottom:7px"><div style="width:30px;height:30px;border-radius:8px;background:#F5EBE0;display:flex;align-items:center;justify-content:center;font-size:14px">📦</div><div style="flex:1"><div style="font-size:11px;font-weight:700">${it[0]}</div><div style="font-size:8px;color:#9CA3AF">Cuvette · seuil 5</div></div><span style="background:${sty[it[2]][1]};color:${sty[it[2]][0]};border-radius:7px;padding:4px 7px;font-size:9px;font-weight:700">${it[1]}${it[2] === 'crit' ? ' ⚠' : ''}</span></div>`).join('')}
        </div>
        <div style="position:sticky;bottom:0;padding:10px 14px;background:linear-gradient(to top,#FAF7F2 60%,transparent)"><div style="background:#2D6A4F;color:#fff;text-align:center;border-radius:11px;padding:10px;font-size:11px;font-weight:800">+ Enregistrer un arrivage</div></div>
      </div>`;
    }
    function mkMamaCredits() {
      const wait = [['A', 'Awa M.', '💎 VIP · depuis le 4 mars', '25 000 F'], ['K', 'Kodjo D.', 'Standard · depuis le 12 avr', '18 000 F'], ['Y', 'Yao A.', '👑 Grand compte', '14 000 F']];
      return `<div class="mk" style="background:#FAF7F2;color:#1C2B22;font-size:11px;min-height:380px">
        ${mamaHead('Crédits clients')}
        <div style="padding:12px 14px">
          <div style="background:#2D6A4F;color:#fff;border-radius:14px;padding:13px 14px;margin-bottom:11px"><div style="font-size:8px;opacity:.82;text-transform:uppercase;letter-spacing:.06em">FCFA à encaisser</div><div style="font-size:23px;font-weight:900;margin-top:2px">57 000 <span style="font-size:11px;font-weight:600;opacity:.85">F</span></div></div>
          <div style="background:#fff;border-radius:14px;padding:11px"><div style="font-size:8px;font-weight:700;text-transform:uppercase;color:#6B7F74;margin-bottom:7px">En attente</div>${wait.map((c, i) => `<div style="display:flex;align-items:center;gap:8px;padding:7px 0;${i < 2 ? 'border-bottom:1px solid rgba(45,106,79,0.06)' : ''}"><div style="width:30px;height:30px;border-radius:50%;background:#2D6A4F;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">${c[0]}</div><div style="flex:1"><div style="font-size:11px;font-weight:700">${c[1]}</div><div style="font-size:8px;color:#6B7F74">${c[2]}</div></div><div style="text-align:right"><div style="font-size:11px;font-weight:800;color:#C0392B">${c[3]}</div><div style="margin-top:3px;background:#2D6A4F;color:#fff;border-radius:6px;padding:3px 8px;font-size:8px;font-weight:700">Encaisser</div></div></div>`).join('')}</div>
          <div style="background:#fff;border-radius:14px;padding:11px;margin-top:9px"><div style="font-size:8px;font-weight:700;text-transform:uppercase;color:#6B7F74;margin-bottom:7px">Soldés ✅</div><div style="display:flex;align-items:center;gap:8px;padding:3px 0"><div style="width:30px;height:30px;border-radius:50%;background:#95D5B2;color:#1C2B22;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px">M</div><div style="flex:1"><div style="font-size:11px;font-weight:700">Mensah K.</div><div style="font-size:8px;color:#6B7F74">Standard</div></div><div style="font-size:11px;font-weight:800;color:#40916C">0 F</div></div></div>
        </div>
      </div>`;
    }
    function mkMamaFinances() {
      const rows = [['CA 30 jours', '420 000 F'], ['CA 90 jours', '1 180 000 F'], ['Ventes totales', '134'], ['Dettes clients', '57 000 F'], ['Panier moyen', '3 130 F'], ['Top produit', 'Tomate'], ['Ratio dette / CA', '14 %']];
      return `<div class="mk" style="background:#FAF7F2;color:#1C2B22;font-size:11px;min-height:380px">
        ${mamaHead('Dossier Financier')}
        <div style="padding:12px 14px">
          <div style="border:2px solid #2D6A4F;background:rgba(45,106,79,0.08);border-radius:16px;padding:16px;text-align:center;margin-bottom:12px"><div style="font-size:40px;font-weight:900;color:#2D6A4F;line-height:1">72<span style="font-size:16px">/100</span></div><div style="font-size:11px;font-weight:700;color:#2D6A4F;margin-top:4px">Éligible microfinance</div><div style="font-size:8px;color:#6B7F74;margin-top:3px">Score de bankabilité — Mon Commerce</div></div>
          <div style="background:#fff;border-radius:14px;padding:4px 12px">${rows.map((r, i) => `<div style="display:flex;justify-content:space-between;padding:8px 0;${i < rows.length - 1 ? 'border-bottom:1px solid rgba(45,106,79,0.07)' : ''}"><span style="font-size:11px;color:#6B7F74">${r[0]}</span><span style="font-size:11px;font-weight:700">${r[1]}</span></div>`).join('')}</div>
        </div>
      </div>`;
    }
    // MamaShop — the real "déstockage" WhatsApp blast to nearby clients
    function mkMamaWhatsApp() {
      const waIn = (t) => `<div style="align-self:flex-start;max-width:82%;background:#fff;border-radius:8px 8px 8px 2px;padding:6px 9px;font-size:10px;line-height:1.45;box-shadow:0 1px 1px rgba(0,0,0,.08)">${t}</div>`;
      const waOut = (t) => `<div style="align-self:flex-end;max-width:85%;background:#DCF8C6;border-radius:8px 8px 2px 8px;padding:6px 9px;font-size:10px;line-height:1.45;box-shadow:0 1px 1px rgba(0,0,0,.08)">${t}</div>`;
      return `<div class="mk" style="font-size:11px;color:#1f2c33;background:#ECE5DD;min-height:380px">
        <div style="display:flex;align-items:center;gap:8px;background:#075E54;color:#fff;padding:10px 12px"><span style="font-size:13px">‹</span><div style="width:28px;height:28px;border-radius:50%;background:#2D6A4F;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0">A</div><div style="line-height:1.2;flex:1"><div style="font-size:11px;font-weight:600">Awa M.</div><div style="font-size:8px;color:rgba(255,255,255,.75)">cliente proche · en ligne</div></div></div>
        <div style="display:flex;flex-direction:column;gap:6px;padding:12px 10px;min-height:300px">
          <div style="align-self:center;background:rgba(0,0,0,.06);color:#5b6b63;border-radius:8px;padding:3px 9px;font-size:8px">Déstockage → alerte clientes proches</div>
          ${waOut("Bonjour Awa 👋 Arrivage de <b>Tomate</b> — prix cassé à <b>2 500 F</b> la cuvette. C'est dispo maintenant, passe vite ! 🍅")}
          ${waIn("J'arrive ! 🙌 Garde-moi 2 cuvettes")}
          ${waOut("C'est noté 👍 À tout de suite !")}
        </div>
      </div>`;
    }
    // MamaShop — Diaspora: read-only live view for the family abroad
    function mkMamaDiaspora() {
      const kpis = [['Cette semaine', '312k F', '#2D6A4F'], ['Ventes du jour', '18', '#40916C'], ['Impayés', '45k F', '#C0392B']];
      const bars = [40, 55, 48, 70, 60, 85, 72, 90];
      return `<div class="mk" style="background:#FAF7F2;color:#1C2B22;font-size:11px;min-height:380px">
        ${mamaHead('Suivi diaspora')}
        <div style="padding:12px 14px">
          <div style="background:#2D6A4F;color:#fff;border-radius:14px;padding:13px 14px;margin-bottom:11px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><div style="font-size:10px;font-weight:700">📍 Lomé · <span style="color:#95D5B2">🟢 En direct</span></div><span style="background:#F0E6FF;color:#4A235A;border-radius:20px;padding:3px 9px;font-size:8px;font-weight:700">👨‍👩‍👧 Famille</span></div>
            <div style="font-size:8px;opacity:.82;text-transform:uppercase;letter-spacing:.06em">Encaissé aujourd'hui</div>
            <div style="font-size:23px;font-weight:900;margin-top:2px">84 500 <span style="font-size:11px;font-weight:600;opacity:.85">F</span></div>
          </div>
          <div style="display:flex;gap:6px;margin-bottom:11px">${kpis.map(k => `<div style="flex:1;border:1px solid rgba(45,106,79,.12);background:#fff;border-radius:11px;padding:8px 5px;text-align:center"><div style="font-size:13px;font-weight:800;color:${k[2]}">${k[1]}</div><div style="margin-top:2px;font-size:7px;font-weight:700;text-transform:uppercase;color:#9CA3AF">${k[0]}</div></div>`).join('')}</div>
          <div style="background:#fff;border-radius:14px;padding:10px;margin-bottom:9px"><div style="font-size:8px;font-weight:700;text-transform:uppercase;color:#6B7F74;margin-bottom:7px">Tendance — 30 jours</div><div style="display:flex;height:44px;align-items:flex-end;gap:4px">${bars.map((h, i) => `<div style="flex:1;height:${h}%;border-radius:3px 3px 0 0;background:${i === bars.length - 1 ? '#40916C' : '#95D5B2'}"></div>`).join('')}</div></div>
          <div style="background:#fff;border-radius:14px;padding:10px"><div style="font-size:8px;font-weight:700;text-transform:uppercase;color:#6B7F74;margin-bottom:7px">Alertes actives</div><div style="display:flex;gap:7px;background:#FEF3C7;border-radius:8px;padding:7px"><span>💰</span><div style="font-size:10px;font-weight:600">Vérifier les crédits en cours</div></div></div>
          <div style="text-align:center;margin-top:10px;font-size:8px;color:#9CA3AF">🔒 Vue en lecture seule · Famille MamaShop</div>
        </div>
      </div>`;
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
        <div style="display:flex;align-items:center;gap:8px;background:#527da3;color:#fff;padding:11px 12px 9px"><span style="font-size:13px">‹</span><div style="width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:13px">🔔</div><div style="line-height:1.2"><div style="font-size:11px;font-weight:600">Cuties Chichi · n8n</div><div style="font-size:8px;color:rgba(255,255,255,.7)">notifications · en ligne</div></div></div>
        <div style="display:flex;flex-direction:column;gap:7px;padding:12px 10px;min-height:300px">${tgIn(msg)}<div style="align-self:flex-start">${tgBtn('🔎 Voir &amp; valider la demande')}</div><div style="align-self:center;background:rgba(0,0,0,.08);color:#5b6b63;border-radius:20px;padding:3px 10px;font-size:8px">📨 aussi envoyé sur WhatsApp ✓</div></div>
      </div>`;
    }

    // 3 — the REAL n8n validation workflow, redrawn on-brand
    function mkChichiFlow() {
      const node = (icon, title, sub, tint) => `<div style="display:flex;align-items:center;gap:9px;background:#0C1220;border:1px solid rgba(59,130,246,.28);border-left:3px solid ${tint || '#3B82F6'};border-radius:9px;padding:8px 10px"><span style="font-size:14px;line-height:1;flex-shrink:0">${icon}</span><div style="line-height:1.25"><div style="font-size:10px;font-weight:700;color:#F0EDE8">${title}</div>${sub ? `<div style="font-size:8px;color:rgba(240,237,232,.5)">${sub}</div>` : ''}</div></div>`;
      const wire = `<div style="height:11px;width:2px;background:linear-gradient(#3B82F6,rgba(59,130,246,.2));margin:2px auto"></div>`;
      const mini = (icon, label, tint) => `<div style="background:#0C1220;border:1px solid rgba(59,130,246,.22);border-top:2px solid ${tint};border-radius:8px;padding:7px 4px;text-align:center"><div style="font-size:13px;line-height:1">${icon}</div><div style="font-size:7.5px;color:rgba(240,237,232,.7);margin-top:3px">${label}</div></div>`;
      return `<div class="mk" style="background:#080A0F;padding:13px 12px;min-height:300px">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:11px"><span style="width:7px;height:7px;border-radius:50%;background:#EA4B71"></span><span style="font-family:var(--mono);font-size:7px;letter-spacing:.14em;text-transform:uppercase;color:rgba(240,237,232,.55)">n8n · Validation (réel)</span></div>
        ${node('⚡', 'Nouvelle demande', 'Webhook · depuis le site', '#EA4B71')}
        ${wire}
        ${node('⚙️', 'Normaliser la demande', 'Set')}
        ${wire}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">${mini('📨', 'Telegram', '#3B82F6')}${mini('🟢', 'WhatsApp', '#25D366')}</div>
        <div style="font-size:7.5px;color:rgba(240,237,232,.5);text-align:center;margin:7px 0 5px">Chichi confirme / décline 👆</div>
        ${node('🗄️', 'Supabase', 'set_booking_status · anti-doublon', '#3ECF8E')}
        ${wire}
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px">${mini('✉️', 'Email', '#EA4335')}${mini('💬', 'SMS', '#F22F46')}${mini('📅', 'Agenda', '#4285F4')}</div>
      </div>`;
    }

    // 4 — what the client receives: confirmation SMS + automatic reminder
    function mkChichiConfirm() {
      const smsIn = (t) => `<div style="align-self:flex-start;max-width:87%;background:#fff;border-radius:14px 14px 14px 4px;padding:8px 11px;font-size:10px;line-height:1.5;box-shadow:0 1px 1px rgba(0,0,0,.06)">${t}</div>`;
      return `<div class="mk" style="font-size:11px;color:#1f2c33;background:#eceff3">
        <div style="display:flex;align-items:center;gap:8px;background:#f7f8fa;border-bottom:1px solid #e2e6ea;padding:10px 12px"><span style="font-size:13px;color:#8a97a3">‹</span><div style="width:26px;height:26px;border-radius:50%;background:#C6447A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700">C</div><div style="line-height:1.2"><div style="font-size:11px;font-weight:600">Cuties Chichi</div><div style="font-size:8px;color:#8a97a3">SMS · Twilio</div></div></div>
        <div style="display:flex;flex-direction:column;gap:9px;padding:13px 10px;min-height:300px">${smsIn('Bonjour Marie ✨ Votre rendez-vous chez Cuties Chichi est <b>CONFIRMÉ</b> : Tresses — 140 $, le samedi 2 août à 14:00. 1066 Somerset St W, Ottawa. À bientôt !')}<div style="align-self:center;background:rgba(0,0,0,.07);color:#66727d;border-radius:20px;padding:3px 10px;font-size:8px">— la veille · rappel automatique —</div>${smsIn("⏰ Rappel : votre RDV <b>Tresses</b> c'est demain à <b>14:00</b> chez Cuties Chichi. Un empêchement ? Répondez à ce message. 💛")}</div>
      </div>`;
    }

    /* ════ Kelthen — le site agence (palette bleu/dark) ════ */
    function mkNovaHero() {
      return `<div class="mk" style="background:#080A0F;color:#F0EDE8;font-size:11px;min-height:200px;padding:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:26px"><span style="font-size:12px;font-weight:800">Kel<span style="color:#3B82F6">then</span></span><span style="background:#3B82F6;color:#080A0F;border-radius:3px;padding:4px 9px;font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:.08em">Start a project</span></div>
        <div style="font-family:var(--mono);font-size:7px;letter-spacing:.16em;text-transform:uppercase;color:#3B82F6;margin-bottom:10px">— Based in Canada · Est. 2025</div>
        <div style="font-family:var(--serif);font-weight:300;font-size:30px;line-height:.95;letter-spacing:-.02em">We <em style="color:#93C5FD">build</em><br><span style="-webkit-text-stroke:0.6px rgba(240,237,232,.3);color:transparent">digital</span><br>products.</div>
        <div style="display:flex;gap:7px;margin-top:18px"><span style="background:#3B82F6;color:#080A0F;border-radius:3px;padding:7px 14px;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.06em">Start a project</span><span style="border:1px solid rgba(59,130,246,.2);color:rgba(240,237,232,.6);border-radius:3px;padding:7px 14px;font-size:8px;font-weight:500;text-transform:uppercase;letter-spacing:.06em">See our work</span></div>
      </div>`;
    }
    function mkNovaServices() {
      const s = [['01', '◈', 'Web Design'], ['02', '⬡', 'Mobile Apps'], ['03', '⟳', 'Automation'], ['04', '✦', 'AI Integration'], ['05', '◇', 'Consulting'], ['06', '⬡', 'SaaS Dev']];
      return `<div class="mk" style="background:#080A0F;color:#F0EDE8;font-size:11px;min-height:200px;padding:14px">
        <div style="font-family:var(--mono);font-size:7px;letter-spacing:.16em;text-transform:uppercase;color:#3B82F6;margin-bottom:8px">— What we do</div>
        <div style="font-family:var(--serif);font-weight:300;font-size:22px;line-height:1;margin-bottom:14px">Every tool you <em style="color:#93C5FD;font-style:italic">need</em></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(240,237,232,.06);border:1px solid rgba(240,237,232,.06)">${s.map(x => `<div style="background:#080A0F;padding:11px 10px"><div style="font-family:var(--mono);font-size:7px;color:#1E40AF;margin-bottom:6px">${x[0]}</div><div style="color:rgba(59,130,246,.5);font-size:13px;margin-bottom:5px">${x[1]}</div><div style="font-family:var(--serif);font-size:13px">${x[2]}</div></div>`).join('')}</div>
      </div>`;
    }
    function mkNovaPricing() {
      const t = [['Starter', '$800', false], ['Growth', '$2 500', true], ['Enterprise', 'Custom', false]];
      return `<div class="mk" style="background:#080A0F;color:#F0EDE8;font-size:11px;min-height:200px;padding:14px">
        <div style="font-family:var(--mono);font-size:7px;letter-spacing:.16em;text-transform:uppercase;color:#3B82F6;margin-bottom:8px">— Pricing</div>
        <div style="font-family:var(--serif);font-weight:300;font-size:22px;line-height:1;margin-bottom:14px">Transparent. <em style="color:#93C5FD;font-style:italic">No surprises.</em></div>
        <div style="display:flex;gap:1px;background:rgba(240,237,232,.06);border:1px solid rgba(240,237,232,.06)">${t.map(x => `<div style="flex:1;background:${x[2] ? '#0C0F16' : '#080A0F'};${x[2] ? 'border-top:2px solid #3B82F6;' : ''}padding:13px 9px;text-align:center"><div style="font-family:var(--mono);font-size:7px;text-transform:uppercase;letter-spacing:.1em;color:rgba(240,237,232,.4);margin-bottom:8px">${x[0]}</div><div style="font-family:var(--serif);font-weight:300;font-size:20px;letter-spacing:-.02em">${x[1]}</div><div style="margin-top:10px;border-radius:2px;padding:6px;font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;${x[2] ? 'background:#3B82F6;color:#080A0F' : 'border:1px solid rgba(59,130,246,.2);color:rgba(240,237,232,.6)'}">${x[2] ? 'Get started' : 'Choose'}</div></div>`).join('')}</div>
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
        id: "001", name: "MamaShop", category: "Mobile · Commerce", year: "2026",
        accent: "#2D6A4F", device: "phone", featured: true,
        desc: "MamaShop — l'app mobile (React Native / Expo) de gestion pour les commerçantes en gros : stock, ventes, crédits clients et finances, avec trois espaces selon le rôle. Offline-first, pensée pour Lomé et les marchés d'Afrique de l'Ouest (FCFA).",
        stack: ["React Native", "Expo", "TypeScript", "Supabase", "WhatsApp"],
        features: [
          { icon: "🧭", title: "Trois rôles, trois espaces", desc: "Gérante, vendeur terrain et diaspora — chacun ne voit que ce qui le concerne." },
          { icon: "📶", title: "Offline-first", desc: "Fonctionne sans réseau, puis se synchronise dès le retour du signal." },
          { icon: "⚠️", title: "Alertes de stock", desc: "Seuils critiques et ruptures signalés en temps réel." },
          { icon: "💳", title: "Crédits clients", desc: "Impayés, encaissements et relances suivis au FCFA près." },
          { icon: "📍", title: "Déstockage géolocalisé", desc: "Alerte par WhatsApp les acheteuses à moins de 3 km." },
          { icon: "📊", title: "Score de bankabilité", desc: "Un dossier financier prêt à présenter à la microfinance." }
        ],
        screens: [
          { t: "Dashboard Gérant", f: mkMamaDash },
          { t: "Stock & arrivages", f: mkMamaStock },
          { t: "Déstockage WhatsApp", f: mkMamaWhatsApp },
          { t: "Crédits clients", f: mkMamaCredits },
          { t: "Finances & score", f: mkMamaFinances },
          { t: "Diaspora en direct", f: mkMamaDiaspora }
        ]
      },
      {
        id: "002", name: "ABO", category: "Web · Marketplace", year: "2025",
        accent: "#0D9488", device: "browser", url: "abo.tg", featured: false,
        desc: "Marketplace mobile-first (Next.js 14) qui donne une présence numérique crédible aux artisans de Lomé : badge « Vérifié ABO » après vérification d'identité, recherche par métier et quartier, devis directs via WhatsApp.",
        stack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Cloudflare R2", "WhatsApp"],
        features: [
          { icon: "🛡️", title: "Badge Vérifié ABO", desc: "Identité contrôlée manuellement (CNI) avant publication du profil." },
          { icon: "🔎", title: "Recherche métier + quartier", desc: "Trouver un artisan de confiance près de chez soi, à Lomé." },
          { icon: "💬", title: "Devis WhatsApp direct", desc: "Le client parle à l'artisan, sans intermédiaire." },
          { icon: "⭐", title: "Avis authentiques", desc: "Seuls les vrais clients (passés par un devis) peuvent noter." },
          { icon: "🚫", title: "Anti-fraude", desc: "Signalements et suspension automatique au-delà d'un seuil." }
        ],
        screens: [
          { t: "Accueil & recherche", f: mkAboHome },
          { t: "Résultats", f: mkAboResults },
          { t: "Profil artisan", f: mkAboProfile },
          { t: "Devis WhatsApp", f: mkAboDevis, device: "phone" },
          { t: "Vérification d'identité", f: mkAboVerif }
        ]
      },
      {
        id: "003", name: "Cuties Chichi", category: "Web · Booking & Automation", year: "2026",
        accent: "#C6447A", device: "browser", url: "chichi-cuties.vercel.app", featured: false,
        desc: "Site de réservation (Next.js 16 + Supabase) pour un salon afro à Ottawa, doublé d'une automatisation n8n : chaque demande prévient Chichi sur Telegram et WhatsApp, elle valide d'un tap, puis la cliente reçoit email + SMS, l'agenda Google se met à jour, et des rappels partent automatiquement 24h et 2h avant le rendez-vous.",
        stack: ["Next.js 16", "Supabase", "n8n", "Twilio", "Google Calendar", "Telegram", "WhatsApp"],
        features: [
          { icon: "📅", title: "Réservation en ligne", desc: "6 prestations, prix exact confirmé sous 48h." },
          { icon: "🤖", title: "Réceptionniste IA (AURA)", desc: "Répond sur web, Telegram, WhatsApp, Messenger et Instagram." },
          { icon: "👆", title: "Validation en 1 tap", desc: "Chichi confirme ou décline depuis Telegram/WhatsApp." },
          { icon: "📎", title: "Photo de référence", desc: "Jointe à la demande pour cadrer le style et le prix." },
          { icon: "🔔", title: "Confirmation multi-canal", desc: "Email + SMS + ajout automatique à Google Agenda." },
          { icon: "⏰", title: "Rappels automatiques", desc: "24h et 2h avant le rendez-vous, sans doublon." }
        ],
        screens: [
          { t: "Site de réservation", f: mkChichiSite, device: "browser" },
          { t: "Démo animée · bot → validation", f: mkChatSim, device: "raw" },
          { t: "Chichi est notifiée", f: mkChichiNotif, device: "phone" },
          { t: "Workflow n8n (réel)", f: mkChichiFlow, device: "bare" },
          { t: "Confirmation & rappel auto", f: mkChichiConfirm, device: "phone" }
        ]
      },
      {
        id: "004", name: "Kelthen", category: "Web · Agence", year: "2025",
        accent: "#3B82F6", device: "browser", url: "kelthen.com", featured: false,
        desc: "Le site vitrine de l'agence — HTML/CSS/JS vanilla en un seul fichier, zéro framework, zéro build. Direction artistique premium (noir profond + bleu royal), micro-interactions soignées, score Lighthouse > 90.",
        stack: ["HTML", "CSS", "JavaScript", "Vercel"],
        features: [
          { icon: "📄", title: "Un seul fichier", desc: "HTML/CSS/JS vanilla, zéro dépendance, zéro build." },
          { icon: "🔎", title: "SEO + Analytics", desc: "Métadonnées OG, JSON-LD, sitemap et GA4 intégrés." },
          { icon: "⚡", title: "Lighthouse > 90", desc: "Chargement rapide, responsive de 360 à 1440px." },
          { icon: "✨", title: "Animations sur-mesure", desc: "Mascotte, curseur bleu, révélations au scroll, marquee." }
        ],
        screens: [
          { t: "Hero", f: mkNovaHero },
          { t: "Services", f: mkNovaServices },
          { t: "Pricing", f: mkNovaPricing }
        ]
      }
    ];

    // Shared inner markup for a work card (used by the full grid and the home preview)
    function workCardInner(p, hintText) {
      const stackHtml = p.stack.map(s => `<span class="ws">${s}</span>`).join('');
      const hero = wrapFrame(p, screenContent(p.screens[0]), p.screens[0].device);
      return `
        <div class="work-mockup" style="background:linear-gradient(150deg, ${hexA(p.accent, 0.22)} 0%, #0a0d13 78%)">
          <div class="mk-scale">${hero}</div>
          <span class="work-mockup-hint">↗ ${hintText}</span>
        </div>
        <div class="work-card-top">
          <span class="work-id">${p.id}</span>
          <span class="work-category">${p.category}</span>
        </div>
        <div class="work-body">
          <h3 class="work-name">${p.name}</h3>
          <p class="work-desc">${p.desc}</p>
          <div class="work-stack">${stackHtml}</div>
        </div>
        <div class="work-card-bottom">
          <span class="work-year">${p.year}</span>
          <span class="work-arrow" aria-hidden="true">↗</span>
        </div>
      `;
    }

    // Full portfolio grid + modal — only on work.html
    (function renderWork() {
      const grid = document.getElementById('workGrid');
      if (!grid) return;
      projects.forEach((p, idx) => {
        const card = document.createElement('article');
        card.className = p.featured ? 'work-card featured reveal' : 'work-card reveal';
        card.setAttribute('role', 'listitem');
        card.tabIndex = 0;
        card.setAttribute('aria-label', `${p.name} — voir les écrans`);
        card.innerHTML = workCardInner(p, `${p.screens.length} écrans — cliquer`);
        card.addEventListener('click', () => openProjectModal(idx));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModal(idx); }
        });
        grid.appendChild(card);
      });
    })();

    // Home preview — a few featured cards that link to the full Work page
    (function renderWorkPreview() {
      const grid = document.getElementById('workPreview');
      if (!grid) return;
      projects.slice(0, 3).forEach((p) => {
        const card = document.createElement('a');
        card.className = (p.featured ? 'work-card featured reveal' : 'work-card reveal') + ' work-card-link';
        card.href = 'work.html';
        card.setAttribute('aria-label', `${p.name} — voir sur la page Work`);
        card.innerHTML = workCardInner(p, 'voir le projet');
        grid.appendChild(card);
      });
    })();

    // ─── Project detail modal (gallery of screens) ───
    const pmOverlay = document.getElementById('projectModal');
    const pmDialog  = document.getElementById('projectModalBody');
    let pmLastFocus = null;

    function openProjectModal(idx) {
      const p = projects[idx];
      pmLastFocus = document.activeElement;
      const stackHtml = p.stack.map(s => `<span class="ws">${s}</span>`).join('');
      const screensHtml = p.screens.map(s =>
        `<div class="pm-screen"><div>${wrapFrame(p, screenContent(s), s.device)}</div><div class="pm-screen-cap"><span>◆</span>${s.t}</div></div>`
      ).join('');
      const featuresHtml = (p.features || []).map(f =>
        `<div class="pm-feature"><span class="pm-feature-icon">${f.icon}</span><div><div class="pm-feature-title">${f.title}</div><div class="pm-feature-desc">${f.desc}</div></div></div>`
      ).join('');

      pmDialog.innerHTML = `
        <button class="pm-close" id="pmClose" type="button" aria-label="Fermer">✕</button>
        <p class="pm-eyebrow">${p.category} · ${p.year}</p>
        <h2 class="pm-name">${p.name}</h2>
        <p class="pm-desc">${p.desc}</p>
        <div class="pm-stack">${stackHtml}</div>
        ${p.features ? `<p class="pm-screens-label">Fonctionnalités clés</p><div class="pm-features">${featuresHtml}</div>` : ''}
        <p class="pm-screens-label">${p.screens.length} écrans clés</p>
        <div class="pm-screens">${screensHtml}</div>
      `;

      pmOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      const closeBtn = document.getElementById('pmClose');
      closeBtn.addEventListener('click', closeProjectModal);
      closeBtn.focus();
      pmDialog.querySelectorAll('.chat-sim').forEach(playChatSim);
    }

    function closeProjectModal() {
      pmOverlay.classList.remove('open');
      document.body.style.overflow = '';
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
      window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 20);
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

    // ─── Mascot: pupils follow the cursor ───
    (function () {
      const svg = document.querySelector('.mascot-svg');
      if (!svg || !window.matchMedia('(pointer: fine)').matches) return;
      const pupils = svg.querySelectorAll('.pupil');
      const VBW = 200, VBH = 240, MAX = 6;

      window.addEventListener('mousemove', (e) => {
        const rect = svg.getBoundingClientRect();
        if (!rect.width) return;
        pupils.forEach((p) => {
          const cx = parseFloat(p.getAttribute('data-cx'));
          const cy = parseFloat(p.getAttribute('data-cy'));
          const sx = rect.left + (cx / VBW) * rect.width;
          const sy = rect.top + (cy / VBH) * rect.height;
          const ang = Math.atan2(e.clientY - sy, e.clientX - sx);
          p.setAttribute('transform', `translate(${(Math.cos(ang) * MAX).toFixed(1)} ${(Math.sin(ang) * MAX).toFixed(1)})`);
        });
      }, { passive: true });
    })();

    // ─── Mascot gets excited when hovering the "Start a project" CTA ───
    (function () {
      const mascot = document.querySelector('.hero-mascot');
      if (!mascot) return;
      const triggers = [
        document.getElementById('navCta'),
        document.getElementById('navMobileCta'),
        document.querySelector('.hero-actions .btn-primary')
      ].filter(Boolean);
      const excite = (on) => mascot.classList.toggle('excited', on);
      triggers.forEach((btn) => {
        btn.addEventListener('mouseenter', () => excite(true));
        btn.addEventListener('mouseleave', () => excite(false));
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
        head: ['🔔', 'Cuties Chichi · n8n', 'notifications · en ligne', '#527da3'],
        msgs: [
          ['in', '💇 <b>Nouvelle demande</b><br>👤 Marie L.<br>💅 Tresses Knotless (120–160 $)<br>🗓️ sam. 2 août · 14:00<br>📎 Photo de référence :'],
          ['photo-in', ''],
          ['btn', '🔎 Voir & valider la demande']
        ] },
      { step: '3 / 3', title: 'Validation', explain: 'Un tap → SMS, email, agenda et rappels auto.',
        head: ['💬', 'Cuties Chichi', 'SMS · Twilio', '#2D6A4F'],
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
      if (kind === 'photo-out') return `<div class="cs-photo right">💇🏾‍♀️</div>`;
      if (kind === 'photo-in') return `<div class="cs-photo left">💇🏾‍♀️</div>`;
      if (kind === 'out') return `<div class="cs-out">${text}</div>`;
      return `<div class="cs-in">${text}</div>`;
    }

    function playChatSim(root) {
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
      const noTyping = (k) => k === 'note' || k === 'btn' || k === 'tap';

      (async function loop() {
        do {
          for (const phase of CHAT_SIM_SCRIPT) {
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
          <button class="cookie-prefs-close" type="button" data-cookie-close aria-label="Close">✕</button>
          <h2 class="cookie-prefs-title">Cookie preferences</h2>
          <p class="cookie-prefs-intro">Choose which cookies we can use. You can change this anytime.</p>
          <div class="cookie-cat">
            <div class="cookie-cat-top">
              <span class="cookie-cat-name">Strictly necessary</span>
              <span class="cookie-cat-always">Always on</span>
            </div>
            <p class="cookie-cat-desc">Needed for the site to function. These never track you.</p>
          </div>
          <div class="cookie-cat">
            <div class="cookie-cat-top">
              <span class="cookie-cat-name">Analytics — Google Analytics</span>
              <label class="cookie-switch"><input type="checkbox" data-cookie-analytics><span class="cookie-slider"></span></label>
            </div>
            <p class="cookie-cat-desc">Anonymous stats (pages viewed, device) so we can improve the site. Google Analytics loads only if this is on.</p>
          </div>
          <div class="cookie-prefs-actions">
            <button class="cookie-btn cookie-secondary" type="button" data-cookie-save>Save preferences</button>
            <button class="cookie-btn cookie-accept" type="button" data-cookie-accept-all>Accept all</button>
          </div>
        </div>`;
      document.body.appendChild(prefs);
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
            <p class="cookie-text">We use cookies to measure and improve our site. Accept, reject, or manage your choices — see our <button type="button" class="cookie-link" data-cookie-privacy>Privacy Policy</button>.</p>
            <div class="cookie-actions">
              <button type="button" class="cookie-btn cookie-secondary" data-cookie-reject>Reject all</button>
              <button type="button" class="cookie-btn cookie-secondary" data-cookie-manage>Manage</button>
              <button type="button" class="cookie-btn cookie-accept" data-cookie-accept>Accept all</button>
            </div>
          </div>`;
        document.body.appendChild(banner);
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
