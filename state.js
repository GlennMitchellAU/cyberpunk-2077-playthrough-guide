(() => {
  const STATE = {
    updated: '09 Sep 2026',
    level: '≥19',
    streetCred: '≥14',
    money: 'last €$48,174',
    carry: 'last 72 / 250',
    attributePoints: '?',
    perkPoints: '?',
    attributes: { intelligence: 15, reflexes: 9, technical: 9, body: 4, cool: 3 },
    loadout: [
      '<b>Yinglong</b> — acquired; primary Smart SMG candidate',
      '<b>Prototype: Shingen Mark V</b> — acquired from container 667 during Gimme Danger; strong Smart SMG option',
      '<b>Electrifying Mantis Blades</b> — installed and active',
      '<b>Widow Maker</b> — acquired from Nash',
      '<b>Problem Solver</b> — acquired during Riders on the Storm',
      '<b>Stinger</b> — acquired from I’ll Fly Away',
      '<b>La Chingona Dorada ×2</b> — collected from Jackie’s ofrenda at El Coyote Cojo',
      '<b>Skippy</b> — reached the 50-maim conversation; final mode choice not yet reconfirmed',
      '<b>Sir John Phallustiff</b> — acquired after Venus in Furs',
      '<b>Black Unicorn</b> — confirmed katana'
    ],
    cyberware: [
      '<b>Militech Paraline</b> — installed OS',
      '<b>Kiroshi Optics</b> — installed',
      '<b>Smart Link</b> — installed',
      '<b>Reinforced Tendons</b> — installed',
      '<b>Electrifying Mantis Blades</b> — installed and active',
      '1 Skeleton implant and 1 Integumentary implant previously visible; exact names not yet confirmed'
    ],
    confirmed: [
      'Female Corpo V',
      'Judy romance route protected',
      'Meredith survived The Pickup; <b>Venus in Furs</b> completed; <b>Sir John Phallustiff</b> acquired',
      'Royce defeated; <b>Chaos</b> acquired',
      'Jackie sent to family; <b>Heroes</b> completed; Jackie’s ARCH acquired',
      'Iguana egg acquired',
      '<b>Nibbles adopted</b> and now living in V’s H10 apartment',
      '<b>La Chingona Dorada ×2</b> collected from the ofrenda at El Coyote Cojo',
      'Andrew’s niche visited for <b>Happy Together</b>',
      '<b>Butcher’s Cleaver</b> acquired during M’ap Tann Pèlen',
      '<b>I Walk the Line:</b> sided with the NetWatch agent',
      '<b>Transmission</b> completed; Placide defeated and looted',
      '<b>Yinglong</b> acquired',
      '<b>Electrifying Mantis Blades</b> equipped',
      '<b>INT 15 / REF 9 / TECH 9 / BODY 4 / COOL 3</b>',
      '<b>Ghost Town:</b> Nash defeated; <b>Widow Maker</b> acquired',
      '<b>Life During Wartime</b> completed; Hellman captured and interrogated',
      'Post-Hellman <b>Tapeworm</b> conversation completed with Johnny',
      '<b>Phantom Liberty:</b> opening completed far enough for free movement; <b>The Damned</b> paused before Slider',
      '<b>Riders on the Storm</b> completed; <b>Problem Solver</b> acquired',
      '<b>I’ll Fly Away</b> completed before the lockout; <b>Stinger</b> acquired',
      '<b>With a Little Help from My Friends</b> completed successfully; Panam is happy with V and the Aldecaldo / The Star route remains protected',
      '<b>Gimme Danger</b> completed; <b>Prototype: Shingen Mark V</b> acquired from container 667'
    ],
    confirmLater: [
      'Iguana egg placed in V’s apartment',
      'Brick survival status',
      'Nehan / Satori collected from Konpeki',
      'Errata collected from Electric Corp',
      'Sasquatch’s Hammer collected from the Grand Imperial Mall',
      '<b>Chimera Core</b> collected after the boss fight',
      '<b>War Pigs</b> / <b>Apparition</b> completion status',
      '<b>Ex-Factor</b> / <b>Death and Taxes</b> completion status'
    ],
    mainJobs: [
      '<b>Play It Safe</b> — ACTIVE. Secure <b>Genjiroh</b> on the way to the second sniper and <b>Jinchu-Maru</b> from Oda; spare Oda after the fight.',
      '<b>Queen of the Highway</b> — waiting to trigger. Leave the Aldecaldo camp and pass about 24 in-game hours for Panam to call; complete it to fully unlock the Aldecaldo / The Star ending option.',
      '<b>The Damned</b> — paused before Slider; safe to resume after Takemura / Panam / Judy detours',
      '<b>Judy chain</b> — waiting for the next call/message after Ex-Factor; Pisces remains the major romance STOP'
    ],
    sideJobs: [
      'Epistrophy / Delamain cars', 'The Beast in Me', 'Shoot to Thrill',
      'Big in Japan', 'Fool on the Hill', 'Beat on the Brat', 'Psycho Killer', 'Paid in Full'
    ],
    nextActions: [
      '<b>Play It Safe STOP #1:</b> on floor 21, after the elevator and before climbing the ladder toward the second sniper, open the side room with code <b>2906</b> and collect <b>Genjiroh</b>.',
      '<b>Oda:</b> defeat him and loot <b>Jinchu-Maru</b>. His mask interferes with Smart weapons, so use Cyberware Malfunction / quickhacks, Mantis Blades, or destroy the mask. When Takemura asks, <b>spare Oda</b>.',
      '<b>NEXT QUEST CRITICAL:</b> <b>Search and Destroy</b> begins after Play It Safe. At Takemura’s hideout, <b>knock four times</b>. After the Arasaka assault, ignore the obvious exit route and <b>go back upstairs to rescue Takemura</b>.',
      '<b>Panam:</b> when <b>Queen of the Highway</b> triggers, prioritize it and complete the quest to lock in the Aldecaldo / The Star ending option.',
      '<b>Judy / PL:</b> continue Judy’s chain when she calls; otherwise resume <b>The Damned</b> with Slider after the Takemura sequence.',
      '<b>Build:</b> next attribute target remains <b>REF 15</b> for Air Dash + Finisher: Bladerunner.'
    ],
    confirmedPerks: ['opt','prox','eye','hq1','hq2','acq1','acq2','emb1','emb2','spec','prec','rec','data','noesc','slip','dash1','dash2','atc1','atc2','pain']
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
<div class="callout searchable"><b>Visible / remaining side jobs:</b> ${STATE.sideJobs.join(' • ')}</div>
<div class="footer" style="border-top:0;padding-top:0">Live state synced: ${STATE.updated}. Exact current level / Street Cred / money / carry await the next screenshot; attributes are confirmed.</div>
</section>`);
  }

  const snapH2 = document.querySelector('#snapshot h2');
  if (snapH2) snapH2.textContent = 'Target Endgame Build';

  document.querySelectorAll('.callout').forEach(el => {
    const t = el.textContent || '';
    if (t.includes('Best side-job detours right now')) {
      el.innerHTML = '<b>Build status:</b> Yinglong + <b>Prototype: Shingen Mark V</b> + Electrifying Mantis Blades are online. Current priority is Play It Safe, then preserving Takemura in Search and Destroy.';
    }
    if (t.includes('First purchase if missing: Smart Link') || t.includes('Already installed:')) {
      el.classList.remove('cyan'); el.classList.add('green');
      el.innerHTML = '<b>Core cyberware online:</b> Smart Link, Reinforced Tendons and <b>Electrifying Mantis Blades</b> are confirmed installed. Keep upgrading Paraline and RAM support as tiers/capacity allow.';
    }
    if (t.includes('NIBBLES:')) {
      el.classList.remove('cyan'); el.classList.add('green');
      el.innerHTML = '<b>NIBBLES:</b> adopted and confirmed living in V’s H10 apartment.';
    }
  });

  const attrIntro = document.querySelector('#attributes > p.muted');
  if (attrIntro) attrIntro.innerHTML = 'Current confirmed spread: <b>15 INT / 9 REF / 9 TECH / 4 BODY / 3 COOL</b>. <b>Next attribute milestone is REF 15</b>.';

  STATE.confirmedPerks.forEach(id => {
    const box = document.querySelector(`input[data-id="${id}"]`);
    if (box && !box.checked) {
      box.checked = true;
      box.dispatchEvent(new Event('change', {bubbles:true}));
    }
  });

  const perkIntro = document.querySelector('#perks > p.muted');
  if (perkIntro) perkIntro.innerHTML = 'Current checked perks synced from the latest screenshot. <b>Next perk priority: Overclock 1/3 → 3/3, then Target Lock Transfer 1/3 → 3/3.</b>';

  document.querySelectorAll('.card').forEach(card => {
    const text = card.textContent || '';
    const status = card.querySelector('.status');
    if (status && text.includes('Skippy')) { status.textContent='Owned'; status.className='status now'; }
    if (status && text.includes('Yinglong')) { status.textContent='Owned'; status.className='status now'; }
    if (status && text.includes('Smart Link')) { status.textContent='Installed'; status.className='status now'; }
    if (status && text.includes('Reinforced Tendons')) { status.textContent='Installed'; status.className='status now'; }
    if (status && text.includes('Electrifying Mantis Blades')) { status.textContent='Installed'; status.className='status now'; }
  });
})();