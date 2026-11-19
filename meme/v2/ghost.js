// make.fun's ghost, built from the shapes of the press kit's mark.svg (assets/mark.svg),
// minus the magenta disc, so it can stand inside a scene as a character.
// Usage: <div class="ghost" data-ghost data-coin="1" data-tilt="-6"></div>
(function () {
  const INK = '#191419';
  const PINK = '#c41c83';
  const BODY =
    'M6.2 13a8.2 8.2 0 0 1 16.4 0v4.6c1 .2 1.8.8 2 2-.2 1.2-1 1.9-2 2.2V25a2.6 2.6 0 0 1-2.6 2.6c-2 0-4.6 0-5.7-.7-1.1.7-3.7.7-5.5.7A2.6 2.6 0 0 1 6.2 25v-.7c-1.2.3-3.5.1-3.6-1.9-.1-2.1 1.3-4.8 3.6-6.2z';
  const sparkle = (x, y) =>
    `<path d="M${x} ${y - 1.8}Q${x + 0.43} ${y - 0.43} ${x + 1.8} ${y}Q${x + 0.43} ${y + 0.43} ${x} ${y + 1.8}Q${x - 0.43} ${y + 0.43} ${x - 1.8} ${y}Q${x - 0.43} ${y - 0.43} ${x} ${y - 1.8}z" fill="${INK}"/>`;
  const STAR =
    'M26.926 11.395L27.154 12.811L28.539 13.186L27.262 13.84L27.334 15.273L26.317 14.261L24.977 14.772L25.625 13.492L24.725 12.375L26.142 12.596z';

  // A bow tie on the ghost's chest, for formal occasions (data-bowtie).
  const BOWTIE = `<g transform="translate(14.4 18.6)">
      <path d="M0 0L-3.6-2.2Q-4.4-.1-3.6 2.2z M0 0L3.6-2.2Q4.4-.1 3.6 2.2z" fill="${PINK}" stroke="${INK}" stroke-width=".7" stroke-linejoin="round"/>
      <circle r="1.1" fill="${INK}"/></g>`;

  function ghost({ coin = true, bowtie = false } = {}) {
    const coinSvg = coin
      ? `<circle cx="26.5" cy="13.4" r="5.5" fill="${INK}"/><circle cx="26.5" cy="13.4" r="3.8" fill="${PINK}"/>
         <path d="${STAR}" fill="#fff" stroke="#fff" stroke-width=".5" stroke-linejoin="round"/>`
      : '';
    const w = coin ? 31.4 : 25.4;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.8 3 ${w} 26.4" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <path d="${BODY}" fill="${INK}" stroke="${INK}" stroke-width="3.4" stroke-linejoin="round"/>
      <path d="${BODY}" fill="#fff"/>
      <path d="M6.3 24.1v-2.5m8 5.8v-1.5" fill="none" stroke="${INK}" stroke-width="1.25" stroke-linecap="round"/>
      ${sparkle(13.2, 12.4)}${sparkle(19.3, 11.6)}
      ${bowtie ? BOWTIE : ''}
      ${coinSvg}
      <circle cx="24.9" cy="19.6" r="4" fill="${INK}"/><circle cx="24.9" cy="19.6" r="2.3" fill="#fff"/>
    </svg>`;
  }

  document.querySelectorAll('[data-ghost]').forEach((el) => {
    el.innerHTML = ghost({ coin: el.dataset.coin !== '0', bowtie: 'bowtie' in el.dataset });
    if (el.dataset.tilt) el.style.transform = `rotate(${el.dataset.tilt}deg)`;
  });
})();
