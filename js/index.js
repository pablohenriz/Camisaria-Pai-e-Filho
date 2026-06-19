// ══════════════════════════════════════════════════════════════
// js/index.js — LÓGICA EXCLUSIVA DA HOME (index.html)
// ══════════════════════════════════════════════════════════════

// ── LOADER ──
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('done');
    }, 1600);
});

// ── MARQUEE ──
(function () {
    const el = document.getElementById('marquee-track');
    if (!el) return;
    const words = ['Elegância', 'Tradição', 'Qualidade', 'Estilo', 'Exclusividade', 'Sofisticação', 'Distinção', 'Requinte'];
    const all = [...words, ...words, ...words, ...words];
    el.innerHTML = all.map(w => `<span class="marquee-item">${w}<span class="marquee-sep"></span></span>`).join('');
})();

// ── HERO: CARROSSEL AUTOMÁTICO ──
(function startHeroCarousel() {
    const imgs = document.querySelectorAll('#hero-bg .hero-bg-img');
    if (imgs.length < 2) return;
    let idx = 0;
    setInterval(() => {
        imgs[idx].classList.remove('is-active');
        idx = (idx + 1) % imgs.length;
        imgs[idx].classList.add('is-active');
    }, 5000);
})();

// ── HERO: PARALLAX ──
(function () {
    const hero = document.getElementById('hero-sect');
    const bg = document.getElementById('hero-bg');
    if (!hero || !bg) return;
    hero.addEventListener('mousemove', e => {
        const r = hero.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - .5) * 14;
        const y = ((e.clientY - r.top) / r.height - .5) * 6;
        bg.style.transform = `translate(${x}px,${y}px)`;
    });
    hero.addEventListener('mouseleave', () => {
        bg.style.transform = 'translate(0,0)';
    });
})();

// ── HOME: CATEGORIA BAR ──
let homeCatFilter = 'Todos';
let homeVisibleCount = 8;
let homeLoadObserver = null;

function renderHomeCatBar() {
    const el = document.getElementById('home-cat-bar');
    if (!el) return;
    el.innerHTML = productTypes.map(c =>
        `<button class="home-cat-chip${c === homeCatFilter ? ' active' : ''}" onclick="setHomeFilter('${c}')">${c}</button>`
    ).join('');
}

function setHomeFilter(c) {
    homeCatFilter = c;
    homeVisibleCount = 8;
    renderHomeCatBar();
    renderHomeFeatured();
}

function homeFilteredList() {
    return homeCatFilter === 'Todos' ? suits : suits.filter(s => s.type === homeCatFilter);
}

function renderHomeFeatured() {
    const list = homeFilteredList();
    const top3 = list.slice(0, 3);
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    grid.innerHTML = top3.map((s, i) => `
        <button class="suit-card reveal${i > 0 ? ' delay-' + i : ''}" onclick="location.href='./produto.html?id=${s.id}'" style="text-align:left">
            <div class="suit-card-img-wrap">
                <img src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/>
                <div class="suit-card-overlay"></div>
                ${s.badge ? `<span class="suit-card-badge">${s.badge}</span>` : ''}
                <div class="suit-card-info">
                    <span class="suit-card-cat">${s.type}</span>
                    <h3 class="suit-card-name serif">${s.name}</h3>
                    <div class="suit-card-cta">Ver detalhes <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                </div>
            </div>
        </button>
    `).join('');
    renderHomeMore();
    attachReveal();
}

function renderHomeMore() {
    const list = homeFilteredList();
    const rest = list.slice(3, 3 + homeVisibleCount);
    const el = document.getElementById('home-more-grid');
    if (!el) return;
    el.innerHTML = rest.map(s => `
        <button class="p-card" onclick="location.href='./produto.html?id=${s.id}'">
            <div class="p-card-img">
                <img src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/>
                <div class="p-card-over"></div>
                ${s.badge ? `<span class="p-card-badge">${s.badge}</span>` : ''}
                <div class="p-card-info">
                    <span class="p-card-cat">${s.type}</span>
                    <h3 class="p-card-name serif">${s.name}</h3>
                </div>
                <div class="p-card-arrow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
            </div>
        </button>
    `).join('');
    const totalAvailable = list.length - 3;
    const msg = document.getElementById('home-load-msg');
    if (msg) {
        if (totalAvailable <= 0) msg.textContent = '';
        else if (homeVisibleCount >= totalAvailable) msg.textContent = 'Você viu todos os produtos desta categoria';
        else msg.textContent = 'Carregando mais produtos ao rolar a página…';
    }
}

function setupHomeInfiniteScroll() {
    if (homeLoadObserver) homeLoadObserver.disconnect();
    homeLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const list = homeFilteredList();
                const totalAvailable = list.length - 3;
                if (homeVisibleCount < totalAvailable) {
                    homeVisibleCount = Math.min(homeVisibleCount + 4, totalAvailable);
                    renderHomeMore();
                }
            }
        });
    }, { rootMargin: '400px' });
    const sentinel = document.getElementById('home-load-sentinel');
    if (sentinel) homeLoadObserver.observe(sentinel);
}

// ── SERVICES ──
(function () {
    const el = document.getElementById('services-grid');
    if (!el) return;
    el.innerHTML = services.map((s, i) => `
        <div class="service-item reveal delay-${i}">
            <span class="service-num">${s.num}</span>
            <div class="service-icon">${s.icon}</div>
            <h3 class="service-title serif">${s.title}</h3>
            <p class="service-desc">${s.desc}</p>
        </div>
    `).join('');
    attachReveal();
})();

// ── TESTIMONIALS ──
let tIdx = 0, tTimer = null;

function renderT(i) {
    const t = testimonials[i];
    const txt = document.getElementById('t-text');
    if (!txt) return;
    txt.classList.add('fade-out');
    setTimeout(() => {
        txt.textContent = '\u201c' + t.text + '\u201d';
        const name = document.getElementById('t-name');
        const role = document.getElementById('t-role');
        const avatar = document.getElementById('t-avatar');
        const stars = document.getElementById('t-stars');
        if (name) name.textContent = t.name;
        if (role) role.textContent = t.role;
        if (avatar) avatar.textContent = t.name[0];
        if (stars) stars.innerHTML = Array.from({ length: t.stars }).map(() =>
            `<svg width="13" height="13" viewBox="0 0 24 24" fill="#b8966e"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
        ).join('');
        document.querySelectorAll('.t-dot').forEach((d, j) => {
            d.classList.toggle('active', j === i);
        });
        tIdx = i;
        txt.classList.remove('fade-out');
    }, 200);
}

(function () {
    const dots = document.getElementById('t-dots');
    if (!dots) return;
    dots.innerHTML = testimonials.map((_, i) =>
        `<button class="t-dot" onclick="renderT(${i});clearInterval(tTimer)"></button>`
    ).join('');
    renderT(0);
    tTimer = setInterval(() => renderT((tIdx + 1) % testimonials.length), 5000);
})();

// ── INIT ──
renderHomeCatBar();
renderHomeFeatured();
setupHomeInfiniteScroll();