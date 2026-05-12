// ─── FADE-IN ON SCROLL ────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ─── RENDER PROJECTS ──────────────────────────────────────────
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const iconGithub = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>`;

  const iconLive = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`;

  PROJECTS.forEach((p, i) => {
    const num = String(i + 1).padStart(3, '0');

    const stackHTML = p.stack
      .map(s => `<span class="stack-tag">${s}</span>`)
      .join('');

    const linksHTML = [
      p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link">${iconGithub} GitHub</a>` : '',
      p.live   ? `<a href="${p.live}"   target="_blank" rel="noopener" class="project-link">${iconLive} Live</a>` : ''
    ].join('');

    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.innerHTML = `
      <div class="project-num">${num}</div>
      <div class="project-title">${p.title}</div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-stack">${stackHTML}</div>
      <div class="project-links">${linksHTML}</div>
    `;

    grid.appendChild(card);
  });

  // Re-observe newly added cards
  grid.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
}

renderProjects();
