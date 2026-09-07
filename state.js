(() => {
  const STATE = {
    updated: '07 Sep 2026',
    level: 15,
    streetCred: 14,
    money: '€$48,174',
    carry: '72 / 250',
    attributePoints: 0,
    perkPoints: 0,
    attributes: { intelligence: 12, reflexes: 9, technical: 9, body: 3, cool: 3 },
    loadout: [
      '<b>Skippy</b> — Puppy-Loving Pacifist, currently farming the mode switch',
      '<b>Second equipped pistol</b> — 248 power pistol; exact name not confirmed from screenshot',
      '<b>Black Unicorn</b> — current katana'
    ],
    cyberware: [
      '<b>Militech Paraline</b> — installed OS',
      '<b>Kiroshi Optics</b> — installed',
      '<b>Smart Link</b> — installed',
      '<b>Reinforced Tendons</b> — installed',
      '1 Skeleton implant and 1 Integumentary implant visible; names not yet confirmed',
      '<b>Arms slot empty</b> — this is the big gap right now'
    ],
    confirmed: [
      'Female Corpo V',
      'Judy romance route protected',
      'Meredith survived; <b>Venus in Furs</b> is available',
      'Royce defeated; <b>Chaos</b> acquired',
      'Jackie sent to family',
      '<b>Heroes</b> completed; Jackie’s ARCH acquired',
      'Iguana egg acquired',
      'Nibbles has been fed',
      'Andrew’s niche visited for <b>Happy Together</b>',
      'Skippy acquired in Puppy-Loving Pacifist mode',
      '<b>Butcher’s Cleaver</b> acquired during M’ap Tann Pèlen'
    ],
    confirmLater: [
      'Nibbles actually adopted after returning to H10',
      'Iguana egg placed in V’s apartment',
      'La Chingona Dorada collected from the ofrenda after 24h',
      'Brick survival status',
      'Nehan / Satori collected from Konpeki',
      'Errata collected from Electric Corp'
    ],
    mainJobs: [
      '<b>I Walk the Line</b> — active; infiltrate the Grand Imperial Mall, get Sasquatch’s Hammer, then side with the NetWatch agent',
      '<b>Ghost Town</b> — Rogue is gathering intel after payment',
      '<b>Down on the Street</b> — meet with Takemura'
    ],
    sideJobs: [
      'Epistrophy', 'Venus in Furs', 'The Beast in Me', 'Shoot to Thrill',
      'Big in Japan', 'Fool on the Hill', 'Beat on the Brat', 'Psycho Killer', 'Paid in Full'
    ],
    nextActions: [
      '<b>I Walk the Line:</b> reach the cinema, <b>fight Sasquatch</b>, and take <b>Sasquatch’s Hammer</b>. Do not sneak past her on this run.',
      '<b>NetWatch choice:</b> hear the agent out and <b>accept his deal</b>. Placide already planted lethal malware in V, so our Corpo V treats that as the Voodoo Boys breaking the deal first.',
      '<b>Ripperdoc:</b> install <b>Electrifying Mantis Blades</b>. Your Arms slot is empty and this finally activates the other half of the build.',
      '<b>Next perk points:</b> take <b>Dash 1/2 → Dash 2/2</b>. You already have Slippery, so the path is open.',
      '<b>Next attributes:</b> INT 13 → 14 → 15 for Overclock / Target Lock Transfer tier.',
      '<b>Weapon detour:</b> Wellsprings Organized Crime Activity / “Living the Big Life” for the <b>Yinglong</b> crafting spec.'
    ],
    confirmedPerks: ['opt','prox','eye','hq1','hq2','acq1','acq2','emb1','emb2','spec','prec','rec','data','noesc','slip']
  };

  const esc = s => String(s);
  const list = (items, prefix='✓') => items.map(x => `<div style="margin:5px 0">${prefix} ${x}</div>`).join('');

  const nav = document.querySelector('nav');
  if (nav && !nav.querySelector('a[href="#current"]')) {
    const first = nav.querySelector('a');
    if (first) first.insertAdjacentHTML('beforebegin', '<a href="#current">Current V</a>');
  }

  const main = document.querySelector('main');
  const snapshot = document.querySelector('#snapshot');
  if (main && snapshot && !document.querySelector('#current')) {
    const a = STATE.attributes;
    const section = `
<section id="current">
<h2>Current V // Live Playthrough State</h2>
<div class="stats">
  <div class="stat"><strong>${STATE.level}</strong><small>Level</small></div>
  <div class="stat"><strong>${STATE.streetCred}</strong><small>Street Cred</small></div>
  <div class="stat"><strong>${STATE.money}</strong><small>Eurodollars</small></div>
  <div class="stat"><strong>${STATE.carry}</strong><small>Carry</small></div>
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
  <div class="card good searchable"><h3>Current loadout</h3>${list(STATE.loadout,'•')}<h3 style="margin-top:13px">Current cyberware</h3>${list(STATE.cyberware,'•')}</div>
  <div class="card danger searchable"><h3>Next six moves</h3>${STATE.nextActions.map((x,i)=>`<div style="margin:7px 0"><b style="color:var(--yellow)">${i+1}.</b> ${x}</div>`).join('')}</div>
</div>
<div class="grid">
  <div class="card searchable"><h3>Confirmed playthrough state</h3>${list(STATE.confirmed,'✓')}</div>
  <div class="card warn searchable"><h3>Needs confirmation / collection</h3>${list(STATE.confirmLater,'•')}</div>
</div>
<div class="callout cyan searchable"><b>Main jobs currently open:</b><br>${STATE.mainJobs.join('<br>')}</div>
<div class="callout searchable"><b>Visible side jobs:</b> ${STATE.sideJobs.join(' • ')}</div>
<div class="footer" style="border-top:0;padding-top:0">Live state synced: ${STATE.updated}.</div>
</section>`;
    snapshot.insertAdjacentHTML('beforebegin', section);
  }

  const snapH2 = document.querySelector('#snapshot h2');
  if (snapH2) snapH2.textContent = 'Target Endgame Build';

  document.querySelectorAll('.callout').forEach(el => {
    const t = el.textContent || '';
    if (t.includes('Best side-job detours right now')) {
      el.innerHTML = '<b>Best build detours right now:</b> install <b>Electrifying Mantis Blades</b>, get <b>Yinglong</b> from Wellsprings, then work through <b>Wakako’s gigs</b> toward Byakko. Smart Link and Reinforced Tendons are already installed.';
    }
    if (t.includes('First purchase if missing: Smart Link')) {
      el.classList.remove('cyan'); el.classList.add('green');
      el.innerHTML = '<b>Already installed:</b> Smart Link and Reinforced Tendons are visible in the current save. The <b>Arms slot is empty</b>, so Electrifying Mantis Blades are now the first cyberware purchase.';
    }
    if (t.includes('NIBBLES:')) {
      el.innerHTML = '<b>NIBBLES:</b> food is already down. Adoption itself is not yet confirmed — return to H10 and check the bowl for Johnny + Nibbles.';
    }
  });

  const attrIntro = document.querySelector('#attributes > p.muted');
  if (attrIntro) attrIntro.innerHTML = 'Adapted to the actual Level 15 save. From <b>12 INT / 9 REF / 9 TECH / 3 BODY / 3 COOL</b>, push INT to 15 first, then take BODY 4.';
  const timeline = document.querySelector('#attributes .timeline');
  if (timeline && !timeline.textContent.includes('CURRENT • Level 15')) {
    timeline.insertAdjacentHTML('afterbegin', '<div class="step searchable"><div class="lvl">CURRENT • Level 15</div><b>INT 12 / REF 9 / TECH 9 / BODY 3 / COOL 3</b></div><div class="step searchable"><div class="lvl">NEXT • Levels 16–18</div><b>INT → 15</b> — immediate priority for Overclock / Target Lock Transfer tier.</div>');
  }

  STATE.confirmedPerks.forEach(id => {
    const box = document.querySelector(`input[data-id="${id}"]`);
    if (box && !box.checked) {
      box.checked = true;
      box.dispatchEvent(new Event('change', {bubbles:true}));
    }
  });
  const perkIntro = document.querySelector('#perks > p.muted');
  if (perkIntro) perkIntro.innerHTML = 'Perks visible as purchased in the supplied Level 15 screenshots are pre-checked. <b>Next perk priority: Dash 1/2 → Dash 2/2</b>, then All Things Cyber.';

  document.querySelectorAll('.card').forEach(card => {
    const text = card.textContent || '';
    const status = card.querySelector('.status');
    if (status && text.includes('Smart Link')) { status.textContent='Installed'; status.className='status now'; }
    if (status && text.includes('Reinforced Tendons')) { status.textContent='Installed'; status.className='status now'; }
    if (status && text.includes('Electrifying Mantis Blades')) { status.textContent='NEXT BUY'; status.className='status target'; }
  });
})();