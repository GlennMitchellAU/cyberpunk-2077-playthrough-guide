(() => {
  // Single source of truth for anything that changes as this playthrough progresses.
  // The historical HTML loaded by index.html is now treated as a visual/template shell only.
  const STATE = {
    updated: '10 Sep 2026 — ManualSave-201 verified',
    version: 'Patch 2.31 / Phantom Liberty',
    level: '40',
    streetCred: '50',
    money: '€$324,778',
    attributePoints: '0',
    perkPoints: '?',
    playtime: '31h 12m',
    attributes: { intelligence: 20, reflexes: 19, technical: 15, body: 4, cool: 3 },
    targetAttributes: { intelligence: 20, reflexes: 20, technical: 20, body: 15, cool: 6 },

    loadout: [
      '<b>Prototype: Shingen Mark V</b> — save-verified in V inventory/stash',
      '<b>Electrifying Mantis Blades</b> — installed and active',
      '<b>Gris-Gris</b> — save-verified; acquired from Slider’s hideout',
      '<b>Tsumetogi</b> — save-verified; acquired during Pisces',
      '<b>Genjiroh</b> — save-verified',
      '<b>Jinchu-Maru</b> — save-verified',
      '<b>Ogou</b> — save-verified from Treating Symptoms',
      '<b>Overwatch</b> — save-verified',
      '<b>Skippy</b> — save flag confirms <b>Stone Cold Killer</b> mode',
      '<b>Yinglong</b> — previously acquired, but absent from V’s backpack/stash in ManualSave-201; whereabouts unresolved'
    ],

    cyberware: [
      '<b>Militech Paraline</b> — previously confirmed installed OS',
      '<b>Kiroshi Optics</b> — previously confirmed installed',
      '<b>Smart Link</b> — previously confirmed installed',
      '<b>Reinforced Tendons</b> — previously confirmed installed',
      '<b>Electrifying Mantis Blades</b> — installed and active',
      'Exact current cyberware/capacity still needs a dedicated save-node decode; older slot screenshots are not treated as complete'
    ],

    confirmed: [
      '<b>ManualSave-201:</b> Patch 2.31, PC, unmodded; playtime ~31h 12m',
      '<b>Female Corpo V</b>; Level 40 / Street Cred 50 / €$324,778',
      '<b>Current attributes:</b> INT 20 / REF 19 / TECH 15 / BODY 4 / COOL 3; 0 unspent attribute points',
      '<b>Next attribute:</b> REF 20',
      '<b>Judy romance route healthy:</b> judy_romanceable = 1; Pisces complete; <b>Pyramid Song active/unlocked</b>; Judy lover flag not set yet, as expected before Pyramid Song',
      '<b>Panam / Aldecaldos:</b> Queen of the Highway complete; <b>The Star route secured</b>',
      '<b>Takemura alive</b> — q112_takemura_dead = 0',
      '<b>Brick was saved</b>',
      '<b>Fortunate Son:</b> happy-ending flag set; Jake’s good outcome secured',
      '<b>Iguana egg placed</b> in V’s apartment; not hatched yet',
      '<b>Skippy:</b> Stone Cold Killer / headshot mode confirmed by save flag',
      '<b>Chippin’ In:</b> available/active, but secret-ending Johnny-friend flag is <b>not set yet</b>; oil-field dialogue remains a critical STOP',
      '<b>The Damned</b> remains active in Phantom Liberty',
      '<b>Delamain:</b> all Epistrophy cars returned; Don’t Lose Your Mind / HQ sequence is current',
      '<b>Save-verified Iconics in V backpack/stash:</b> Apparition, Butcher’s Cleaver, Chaos, Cocktail Stick, Cottonmouth, Death and Taxes, Dying Night, Genjiroh, Guts, Jinchu-Maru, Kongou, La Chingona Dorada ×2, Lizzie, Nehan, Ogou, Overwatch, Problem Solver, Prototype: Shingen Mark V, Satori, Sir John Phallustiff, Skippy, Stinger, Tsumetogi, Widow Maker, Errata and Gris-Gris',
      '<b>Active Chimera Core</b> confirmed in V’s backpack',
      '<b>Major perks save-verified as unlocked:</b> Overclock, Smart Synergy, Target Lock Transfer, Targeting Prism, Terminal Velocity, Air Dash, Finisher: Bladerunner, Sharpshooter, License to Chrome, Renaissance Punk, Driver Update and Chipware Connoisseur',
      'Meredith survived The Pickup; Venus in Furs completed; Sir John Phallustiff acquired',
      'Royce defeated; Chaos acquired',
      'Jackie sent to family; Heroes completed; Jackie’s ARCH acquired',
      'Nibbles adopted and living in V’s H10 apartment',
      'I Walk the Line: sided with the NetWatch agent',
      'Transmission completed; Placide defeated and looted',
      'Riders on the Storm completed; Problem Solver acquired',
      'I’ll Fly Away completed before lockout; Stinger acquired',
      'Gimme Danger completed; Prototype: Shingen Mark V acquired',
      'Play It Safe / Search and Destroy progressed through Hanako’s proxy motel visit; Takemura rescued'
    ],

    confirmLater: [
      '<b>Sasquatch’s Hammer</b> — not save-confirmed in V inventory/stash',
      '<b>Yinglong current location</b> — previously acquired, but absent from V backpack/stash in ManualSave-201',
      '<b>Oda survival status</b> — Jinchu-Maru is confirmed, but Oda’s explicit story flag still needs decoding',
      '<b>Treating Symptoms Alan/Milko outcome</b> — Ogou is confirmed; final choice flag still needs explicit decode',
      '<b>Exact current cyberware and cyberware capacity</b> — requires deeper save-node decode'
    ],

    mainJobs: [
      '<b>Delamain HQ / Don’t Lose Your Mind</b> — CURRENT. Explore normally, but <b>STOP at Delamain’s core choice</b> before resetting, destroying or merging the personalities.',
      '<b>Pyramid Song</b> — ACTIVE/UNLOCKED. Judy’s final romance lock-in quest; use the romance guide when you start it.',
      '<b>The Damned</b> — ACTIVE in Phantom Liberty; Gris-Gris is already secured.',
      '<b>Chippin’ In</b> — available/active. <b>STOP at Johnny’s oil-field conversation</b>; the secret-ending friend flag is not set yet.',
      '<b>Base story</b> — do <b>not</b> enter Embers yet.'
    ],

    sideJobs: [
      'Don’t Lose Your Mind / Delamain HQ', 'Pyramid Song', 'The Damned', 'Chippin’ In',
      'The Beast in Me', 'Big in Japan', 'Fool on the Hill', 'Beat on the Brat', 'Psycho Killer', 'Paid in Full'
    ],

    nextActions: [
      '<b>Delamain STOP:</b> when you reach the core and are offered reset / destroy / merge, stop before choosing. With INT 20, V can access the merge option.',
      '<b>Judy:</b> <b>Pyramid Song is ready.</b> This is the romance lock-in quest, so use the exact dialogue guide when you begin.',
      '<b>Phantom Liberty:</b> continue <b>The Damned</b> whenever you want. Gris-Gris is already acquired and Slider’s outcome is fixed.',
      '<b>Johnny SECRET ENDING STOP:</b> during <b>Chippin’ In</b>, stop at the oil fields. The save confirms sq032_johnny_friend is not set yet.',
      '<b>Build:</b> next attribute point goes to <b>REF 20</b>. INT is already 20 and TECH is 15.',
      '<b>ENDGAME:</b> keep Embers untouched until Judy, Johnny and the Phantom Liberty branches we want are resolved.'
    ],

    weaponRoadmap: [
      { name: 'Skippy', status: 'Stone Cold Killer', statusClass: 'now', cardClass: 'good', desc: 'Iconic Smart pistol. Final lethal/headshot mode is save-confirmed.', note: 'Owned and mode conversion complete.' },
      { name: 'Prototype: Shingen Mark V', status: 'Owned', statusClass: 'now', cardClass: 'good', desc: 'Explosive Iconic Smart SMG and one of the best fits for the NETBLADE hybrid.', note: 'Save-verified in V inventory/stash.' },
      { name: 'Genjiroh', status: 'Owned', statusClass: 'now', cardClass: 'good', desc: 'Electrical multi-target Iconic Smart pistol.', note: 'Save-verified; Play It Safe missable successfully collected.' },
      { name: 'Gris-Gris', status: 'Owned', statusClass: 'now', cardClass: 'good', desc: 'Iconic Tech revolver that can upload random quickhacks.', note: 'Collected from Slider’s hideout using the Treating Symptoms key.' },
      { name: 'Ogou', status: 'Owned', statusClass: 'now', cardClass: 'good', desc: 'Iconic Smart pistol from Robot R Mk.2.', note: 'Save-verified from Treating Symptoms.' },
      { name: 'Tsumetogi', status: 'Owned', statusClass: 'now', cardClass: 'good', desc: 'Iconic katana from the Pisces penthouse meeting.', note: 'Save-verified; Pisces complete.' },
      { name: 'Overwatch', status: 'Owned', statusClass: 'now', cardClass: 'good', desc: 'Panam’s silenced Iconic sniper rifle.', note: 'Save-verified in V inventory/stash.' },
      { name: 'Yinglong', status: 'Locate', statusClass: 'target', cardClass: 'warn', desc: 'Iconic Smart SMG with Electrical damage and EMP potential.', note: 'Previously acquired, but not present in backpack/stash at ManualSave-201. Do not treat as uncollected; whereabouts unresolved.' },
      { name: 'Byakko', status: 'Future', statusClass: 'target', cardClass: '', desc: 'Excellent Iconic katana with leap-focused melee utility.', note: 'Complete all Wakako gigs → Professional Widow → delivered to stash.' },
      { name: 'Divided We Stand', status: 'Future', statusClass: 'target', cardClass: '', desc: 'Iconic Smart assault rifle capable of tracking multiple enemies.', note: 'Stadium Love reward / encounter outcome.' },
      { name: 'Pizdets', status: 'Future — PL', statusClass: 'target', cardClass: '', desc: 'Silenced Iconic Smart SMG with ramping fire-rate potential.', note: 'Dogtown gig Spy in the Jungle; Boris Ribakov.' }
    ],

    futureAlerts: [
      { tone: 'red', title: 'DELAMAIN CORE', body: '<b>Choice STOP:</b> do not autopilot the reset / destroy / merge decision. With INT 20, merge is available; check in before choosing.' },
      { tone: 'red', title: 'PYRAMID SONG', body: '<b>Judy romance lock-in.</b> Go diving, stay the night, choose the romantic interaction, then confirm the relationship the next morning. Ping me when you start it.' },
      { tone: 'red', title: 'CHIPPIN’ IN', body: 'Loot <b>Johnny’s Malorian Arms 3516</b>, secure the <b>Porsche 911</b>, and <b>STOP at the oil-field conversation</b> for the exact three dialogue choices that unlock the secret ending.' },
      { tone: '', title: 'WAKAKO', body: 'Finish all eight Westbrook gigs → <b>Professional Widow</b> → <b>Byakko</b> is delivered to your stash.' },
      { tone: '', title: 'STADIUM LOVE', body: 'Secure <b>Divided We Stand</b>, the Iconic Smart assault rifle.' },
      { tone: '', title: 'SPY IN THE JUNGLE', body: 'Dogtown gig → Boris Ribakov → secure <b>Pizdets</b>, the silenced Iconic Smart SMG.' },
      { tone: 'red', title: 'PHANTOM LIBERTY — FIRESTARTER', body: '<b>Major branch STOP later.</b> Do not make the Songbird/Reed route decision without checking the consequences first.' },
      { tone: 'red', title: 'EMBERS', body: '<b>Point of no return.</b> Do not meet Hanako at Embers until Judy, Johnny and the Phantom Liberty setup are where we want them.' }
    ],

    confirmedPerks: [
      'opt','prox','eye','hq1','hq2','acq1','acq2','emb1','emb2','spec','prec','rec','data','noesc',
      'slip','dash1','dash2','atc1','atc2','pain','ren','driver','chip','over1','tlt1','prism','term',
      'synergy','air1','blade1','ltc1'
    ]
  };

  const list = (items, prefix='✓') => items.map(x => `<div style="margin:5px 0">${prefix} ${x}</div>`).join('');
  const statCards = a => `
    <div class="stat"><strong>${a.intelligence}</strong><small>Intelligence</small></div>
    <div class="stat"><strong>${a.reflexes}</strong><small>Reflexes</small></div>
    <div class="stat"><strong>${a.technical}</strong><small>Technical</small></div>
    <div class="stat"><strong>${a.body}</strong><small>Body</small></div>
    <div class="stat"><strong>${a.cool}</strong><small>Cool</small></div>`;

  // Header also comes from live state so an old template cannot show an old review date/status.
  const sub = document.querySelector('header .sub');
  if (sub) sub.innerHTML = 'Female Corpo V • Smart Weapons + Mantis Blades • Combat Netrunner • Judy route healthy • The Star secured • Phantom Liberty active';
  const version = document.querySelector('header .version');
  if (version) version.textContent = `Live state: ${STATE.updated} • ${STATE.version}`;

  const nav = document.querySelector('nav');
  if (nav && !nav.querySelector('a[href="#current"]')) {
    const first = nav.querySelector('a');
    if (first) first.insertAdjacentHTML('beforebegin', '<a href="#current">Current V</a>');
  }
  const snapNav = nav?.querySelector('a[href="#snapshot"]');
  if (snapNav) snapNav.textContent = 'Target Build';

  // Current-state dashboard is fully generated from STATE.
  const snapshot = document.querySelector('#snapshot');
  if (snapshot && !document.querySelector('#current')) {
    snapshot.insertAdjacentHTML('beforebegin', `
<section id="current">
<h2>Current V // Live Playthrough State</h2>
<div class="stats">
  <div class="stat"><strong>${STATE.level}</strong><small>Level</small></div>
  <div class="stat"><strong>${STATE.streetCred}</strong><small>Street Cred</small></div>
  <div class="stat"><strong>${STATE.money}</strong><small>Eurodollars</small></div>
  <div class="stat"><strong>${STATE.playtime}</strong><small>Playtime</small></div>
  <div class="stat"><strong>${STATE.attributePoints} / ${STATE.perkPoints}</strong><small>Attr / Perk Pts</small></div>
</div>
<div class="stats">${statCards(STATE.attributes)}</div>
<div class="grid">
  <div class="card good searchable"><h3>Current loadout / key weapons</h3>${list(STATE.loadout,'•')}<h3 style="margin-top:13px">Current cyberware knowledge</h3>${list(STATE.cyberware,'•')}</div>
  <div class="card danger searchable"><h3>Next six moves</h3>${STATE.nextActions.map((x,i)=>`<div style="margin:7px 0"><b style="color:var(--yellow)">${i+1}.</b> ${x}</div>`).join('')}</div>
</div>
<div class="grid">
  <div class="card searchable"><h3>Confirmed playthrough state</h3>${list(STATE.confirmed,'✓')}</div>
  <div class="card warn searchable"><h3>Still needs explicit decode / confirmation</h3>${list(STATE.confirmLater,'•')}</div>
</div>
<div class="callout cyan searchable"><b>Current priority quests:</b><br>${STATE.mainJobs.join('<br>')}</div>
<div class="callout searchable"><b>Visible / remaining side content:</b> ${STATE.sideJobs.join(' • ')}</div>
<div class="footer" style="border-top:0;padding-top:0">Live state synced: ${STATE.updated}. Save-derived facts override older screenshot-era assumptions.</div>
</section>`);
  }

  // The template's old Build Snapshot contained playthrough-specific callouts.
  // Replace the entire section so it cannot drift out of date again.
  if (snapshot) {
    snapshot.innerHTML = `
<h2>Target Endgame Build</h2>
<div class="stats">${statCards(STATE.targetAttributes)}</div>
<div class="grid">
  <div class="card good searchable"><h3>NETBLADE concept</h3><p>Quickhack priority targets, acquire Smart lock, turn Smart-weapon neutralisations back into RAM, then Dash / Air Dash into survivors with Mantis Blades. <b>Overclock + Smart Synergy</b> is already online.</p><span class="tag c">Smart weapons</span><span class="tag c">Netrunner</span><span class="tag r">Mantis</span></div>
  <div class="card warn searchable"><h3>Current build milestone</h3><p><b>INT 20 / REF 19 / TECH 15 / BODY 4 / COOL 3</b>.</p><p><b>Next point: REF 20</b>, then continue TECH toward 20. BODY 15 remains the later survivability milestone.</p></div>
</div>
<div class="callout green searchable"><b>SKIPPY COMPLETE:</b> ManualSave-201 confirms <b>Stone Cold Killer</b> / headshot mode is active.</div>
<div class="callout cyan searchable"><b>Current focus:</b> Delamain HQ core decision, Pyramid Song romance lock-in, then The Damned / Chippin’ In as desired. <b>Do not enter Embers.</b></div>`;
  }

  const attrIntro = document.querySelector('#attributes > p.muted');
  if (attrIntro) attrIntro.innerHTML = 'ManualSave-201 confirmed spread: <b>20 INT / 19 REF / 15 TECH / 4 BODY / 3 COOL</b>. <b>Next attribute point: REF 20.</b> The timeline below remains the target progression, not a statement of current state.';

  STATE.confirmedPerks.forEach(id => {
    const box = document.querySelector(`input[data-id="${id}"]`);
    if (box && !box.checked) {
      box.checked = true;
      box.dispatchEvent(new Event('change', {bubbles:true}));
    }
  });

  const perkIntro = document.querySelector('#perks > p.muted');
  if (perkIntro) perkIntro.innerHTML = 'ManualSave-201 confirms the major NETBLADE milestones are online, including <b>Overclock, Smart Synergy, Target Lock Transfer, Targeting Prism, Terminal Velocity, Air Dash, Bladerunner, Sharpshooter and License to Chrome</b>. Checkbox ranks remain conservative where the exact rank was not decoded.';

  // Weapon Roadmap is now rendered wholly from STATE instead of trying to patch stale cards by text matching.
  const weapons = document.querySelector('#weapons');
  if (weapons) {
    weapons.innerHTML = `
<h2>Weapon Roadmap</h2>
<p class="muted">Statuses below are derived from ManualSave-201 plus confirmed playthrough history. “Future” means still worth targeting; “Locate” means previously acquired but not present in the latest backpack/stash snapshot.</p>
<div class="grid3">
${STATE.weaponRoadmap.map(w => `
  <div class="card ${w.cardClass || ''} searchable">
    <div class="itemhead"><b>${w.name}</b><span class="status ${w.statusClass || ''}">${w.status}</span></div>
    <p>${w.desc}</p><p><small>${w.note}</small></p>
  </div>`).join('')}
</div>`;
  }

  // Keep the useful static cyberware roadmap, but ensure any current-status wording is live-state aware.
  document.querySelectorAll('#cyberware .callout').forEach(el => {
    const t = el.textContent || '';
    if (t.includes('First purchase if missing: Smart Link') || t.includes('Already installed:')) {
      el.classList.remove('cyan'); el.classList.add('green');
      el.innerHTML = '<b>Core cyberware confirmed:</b> Smart Link, Reinforced Tendons and Electrifying Mantis Blades are installed. Exact current cyberware/capacity will be filled from a deeper save decode.';
    }
  });
  document.querySelectorAll('#cyberware .card').forEach(card => {
    const text = card.textContent || '';
    const status = card.querySelector('.status');
    if (!status) return;
    if (text.includes('Smart Link')) { status.textContent='Installed'; status.className='status now'; }
    if (text.includes('Reinforced Tendons')) { status.textContent='Installed'; status.className='status now'; }
    if (text.includes('Electrifying Mantis Blades')) { status.textContent='Installed'; status.className='status now'; }
    if (text.includes('Militech Paraline')) { status.textContent='Installed'; status.className='status now'; }
  });

  // Completed loot alerts from the old template are removed entirely.
  const alerts = document.querySelector('#alerts');
  if (alerts) {
    alerts.innerHTML = `
<h2>Future Stops & Loot Alerts</h2>
${STATE.futureAlerts.map(a => `<div class="callout ${a.tone || ''} searchable"><b>${a.title}:</b> ${a.body}</div>`).join('')}`;
  }

  // Nibbles/iguana status anywhere else in the old template is forced current.
  document.querySelectorAll('.callout').forEach(el => {
    const t = el.textContent || '';
    if (t.includes('NIBBLES:')) {
      el.classList.remove('cyan'); el.classList.add('green');
      el.innerHTML = '<b>NIBBLES:</b> adopted and living in V’s H10 apartment. Iguana egg is placed; hatch still pending.';
    }
  });
})();