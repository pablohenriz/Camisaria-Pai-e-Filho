// ══════════════════════════════════════════════════════════════
// js/sobre.js — LÓGICA DA PÁGINA SOBRE (sobre.html)
// ══════════════════════════════════════════════════════════════

// ── TIMELINE ──
(function () {
    const el = document.getElementById('timeline-el');
    if (!el) return;
    el.innerHTML = `<div class="timeline-line"></div><div class="tl-items">` +
        timeline.map((t, i) => {
            const isEven = i % 2 === 0;
            return `<div class="tl-item reveal">
                <div class="tl-dot"></div>
                ${isEven ? `
                    <div class="tl-left">
                        <span class="tl-year serif">${t.year}</span>
                        <h3 class="tl-title serif">${t.title}</h3>
                        <p class="tl-desc">${t.desc}</p>
                    </div>
                    <div class="tl-right empty"></div>
                ` : `
                    <div class="tl-left empty"></div>
                    <div class="tl-right">
                        <span class="tl-year serif">${t.year}</span>
                        <h3 class="tl-title serif">${t.title}</h3>
                        <p class="tl-desc">${t.desc}</p>
                    </div>
                `}
            </div>`;
        }).join('') + `</div>`;
    attachReveal();
})();

// ── TEAM ──
(function () {
    const el = document.getElementById('team-grid');
    if (!el) return;
    el.innerHTML = team.map((m, i) => `
        <div class="team-card reveal delay-${i}">
            <div class="team-card-img">
                <img src="${m.img}" alt="${m.name}" loading="lazy"/>
                <div class="team-card-over"></div>
                <div class="team-card-sheen"></div>
            </div>
            <span class="team-role">${m.role}</span>
            <h3 class="team-name serif">${m.name}</h3>
            <p class="team-desc">${m.desc}</p>
        </div>
    `).join('');
    attachReveal();
})();