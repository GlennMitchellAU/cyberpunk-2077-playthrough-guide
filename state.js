(() => {
  const STATE = {
    updated: '10 Sep 2026 — ManualSave-201 verified',
    level: '40',
    streetCred: '50',
    money: '€$324,778',
    carry: 'save checkpoint',
    attributePoints: '0',
    perkPoints: '?',
    playtime: '31h 12m',
    attributes: { intelligence: 20, reflexes: 19, technical: 15, body: 4, cool: 3 },
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
      '<b>Yinglong</b> — previously acquired, but not present in V’s backpack/stash in ManualSave-201; current whereabouts unresolved'
    ],
    cyberware: [
      '<b>Militech Paraline</b> — previously confirmed installed OS',
      '<b>Kiroshi Optics</b> — previously confirmed installed',
      '<b>Smart Link</b> — previously confirmed installed',
      '<b>Reinforced Tendons</b> — previously confirmed installed',
      '<b>Electrifying Mantis Blades</b> — installed and active',
      'Exact current cyberware/capacity still needs a dedicated save-node decode; do not rely on the older slot snapshot for completeness'
    ],
    confirmed: [
      '<b>ManualSave-201:</b> Patch 2.31, PC, unmodded, timestamp 17:20:47 on 10 Sep 2026; playtime ~31h 12m',
      '<b>Female Corpo V</b>; Level 40 / Street Cred 50 / €$324,778',
      '<b>Current attributes:</b> INT 20 / REF 19 / TECH 15 / BODY 4 / COOL 3; 0 unspent attribute points',
      '<b>Next attribute:</b> REF 20',
      '<b>Judy romance route healthy:</b> judy_romanceable = 1; Pisces complete; <b>Pyramid Song is active/unlocked</b>; Judy lover flag not yet set, as expected before completing Pyramid Song',
      '<b>Panam / Aldecaldos:</b> Queen of the Highway complete; <b>The Star route secured</b>',
      '<b>Takemura alive</b> — save flag q112_takemura_dead = 0',
      '<b>Brick was saved</b>',
      '<b>Fortunate Son:</b> happy-ending flag set; Jake’s good outcome secured',
      '<b>Iguana egg placed</b> in V’s apartment; not hatched yet',
      '<b>Skippy:</b> Stone Cold Killer / headshot mode confirmed by save flag',
      '<b>Chippin’ In:</b> chain available/active, but the secret-ending Johnny-friend flag is <b>not set yet</b>; oil-field dialogue remains a critical STOP',
      '<b>The Damned</b> remains active in Phantom Liberty',
      '<b>Delamain:</b> all Epistrophy cars returned; heading into HQ / Don’t Lose Your Mind sequence',
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
      'I’ll Fly Away completed before the lockout; Stinger acquired',
      'Gimme Danger completed; Prototype: Shingen Mark V acquired',
      'Play It Safe / Search and Destroy progressed through Hanako’s proxy motel visit; Takemura rescued'
    ],
    confirmLater: [
      '<b>Sasquatch’s Hammer</b> — still not save-confirmed in V inventory/stash',
      '<b>Yinglong current location</b> — previously acquired, but absent from V backpack/stash in ManualSave-201',
      '<b>Oda survival status</b> — Jinchu-Maru is confirmed, but preserve this as a separate story-state check until decoded explicitly',
      '<b>Treating Symptoms Alan/Milko final outcome</b> — Ogou is confirmed; final choice flag still needs explicit decode',
      '<b>Exact current cyberware and cyberware capacity</b> — requires deeper save-node decode'
    ],
    mainJobs: [
      '<b>Delamain HQ / Don’t Lose Your Mind</b> — CURRENT. Proceed through HQ, but <b>STOP at Delamain’s core choice</b> before resetting, destroying or merging the personalities.',
      '<b>Pyramid Song</b> — ACTIVE/UNLOCKED. This is Judy’s final romance lock-in quest; prioritize it when ready and use the romance guide.',
      '<b>The Damned</b> — ACTIVE in Phantom Liberty; Gris-Gris is already secured, so continue Slider/reed sequence when ready.',
      '<b>Chippin’ In</b> — available/active. <b>STOP at Johnny’s oil-field conversation</b>; the secret-ending friend flag is not set yet.',
      '<b>Base story</b> — do <b>not</b> enter Embers yet.'
    ],
    sideJobs: [
      'Don’t Lose Your Mind / Delamain HQ', 'Pyramid Song', 'The Damned', 'Chippin’ In',
      'The Beast in Me', 'Big in Japan', 'Fool on the Hill', 'Beat on the Brat', 'Psycho Killer', 'Paid in Full'
    ],
    nextActions: [
      '<b>Delamain STOP:</b> explore HQ normally. When you reach Delamain’s core and are offered the final reset / destroy / merge decision, check the guide before choosing. With INT 20, V is positioned for the merge option.',
      '<b>Judy:</b> <b>Pyramid Song is ready now.</b> Go diving, stay the night, choose the romantic interaction with Judy, and confirm the relationship the next morning; stop for the exact dialogue guide if needed.',
      '<b>Phantom Liberty:</b> continue <b>The Damned</b> whenever you want. Gris-Gris is already acquired and Slider’s outcome is fixed.',
      '<b>Johnny SECRET ENDING STOP:</b> during <b>Chippin’ In</b>, stop at the oil fields. The save confirms sq032_johnny_friend is not yet set, so those exact lines still matter.',
      '<b>Build:</b> next attribute point goes to <b>REF 20</b>. INT is already 20 and TECH is 15.',
      '<b>ENDGAME:</b> keep Embers untouched until Judy, Johnny and any Phantom Liberty branches we want are resolved.'
    ],
    confirmedPerks: ['opt','prox','eye','hq1','hq2','acq1','acq2','emb1','emb2','spec','prec','rec','data','noesc','slip','dash1','dash2','atc1','atc2','pain','ren','driver','chip','over1','tlt1','prism','term','synergy','air1','blade1','ltc1']
  };

  const list = (items, prefix='✓') => items.map(x => `<div style="margin:5px 0">${prefix} ${x}</div>`).join('');

  const nav = document.querySelector('nav');
  if (nav && !nav.querySelector('a[href="#current"]')) {
    const first = nav.querySelector('a');
    if (first) first.insertAdjacentHTML('beforebegin', '<a href="#current">Current V</a>');
  }

  const snapshot = document.querySelector('#snapshot');
  if (snapshot && !document.querySelector('#current')) {
    const a = STATE.attributes;
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
<div class="stats">
  <div class="stat"><strong>${a.intelligence}</strong><small>Intelligence</small></div>
  <div class="stat"><strong>${a.reflexes}</strong><small>Reflexes</small></div>
  <div class="stat"><strong>${a.technical}</strong><small>Technical</small></div>
  <div class="stat"><strong>${a.body}</strong><small>Body</small></div>
  <div class="stat"><strong>${a.cool}</strong><small>Cool</small></div>
</div>
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

  const snapH2 = document.querySelector('#snapshot h2');
  if (snapH2) snapH2.textContent = 'Target Endgame Build';

  document.querySelectorAll('.callout').forEach(el => {
    const t = el.textContent || '';
    if (t.includes('SKIPPY NOW:')) {
      el.classList.remove('red'); el.classList.add('green');
      el.innerHTML = '<b>SKIPPY:</b> ManualSave-201 confirms <b>Stone Cold Killer</b> / headshot mode is active.';
    }
    if (t.includes('Best side-job detours right now')) {
      el.innerHTML = '<b>Save checkpoint:</b> Level 40 / SC 50 / INT 20 / REF 19 / TECH 15. Current priorities are <b>Delamain HQ</b>, <b>Pyramid Song</b>, then The Damned / Chippin’ In as desired.';
    }
    if (t.includes('First purchase if missing: Smart Link') || t.includes('Already installed:')) {
      el.classList.remove('cyan'); el.classList.add('green');
      el.innerHTML = '<b>Core cyberware previously confirmed:</b> Smart Link, Reinforced Tendons and Electrifying Mantis Blades. Exact current cyberware/capacity will be filled from a deeper save decode.';
    }
    if (t.includes('NIBBLES:')) {
      el.classList.remove('cyan'); el.classList.add('green');
      el.innerHTML = '<b>NIBBLES:</b> adopted and confirmed living in V’s H10 apartment. Iguana egg is also placed; hatch is still pending.';
    }
  });

  const attrIntro = document.querySelector('#attributes > p.muted');
  if (attrIntro) attrIntro.innerHTML = 'ManualSave-201 confirmed spread: <b>20 INT / 19 REF / 15 TECH / 4 BODY / 3 COOL</b>. <b>Next attribute point: REF 20.</b>';

  STATE.confirmedPerks.forEach(id => {
    const box = document.querySelector(`input[data-id="${id}"]`);
    if (box && !box.checked) {
      box.checked = true;
      box.dispatchEvent(new Event('change', {bubbles:true}));
    }
  });

  const perkIntro = document.querySelector('#perks > p.muted');
  if (perkIntro) perkIntro.innerHTML = 'ManualSave-201 confirms the major NETBLADE milestones are online, including <b>Overclock, Smart Synergy, Target Lock Transfer, Targeting Prism, Terminal Velocity, Air Dash, Bladerunner, Sharpshooter and License to Chrome</b>. Checkbox ranks remain conservative where the exact rank was not decoded.';

  document.querySelectorAll('.card').forEach(card => {
    const text = card.textContent || '';
    const status = card.querySelector('.status');
    if (status && text.includes('Skippy')) { status.textContent='Stone Cold Killer'; status.className='status now'; }
    if (status && text.includes('Yinglong')) { status.textContent='Previously acquired'; status.className='status target'; }
    if (status && text.includes('Smart Link')) { status.textContent='Installed'; status.className='status now'; }
    if (status && text.includes('Reinforced Tendons')) { status.textContent='Installed'; status.className='status now'; }
    if (status && text.includes('Electrifying Mantis Blades')) { status.textContent='Installed'; status.className='status now'; }
  });
})();