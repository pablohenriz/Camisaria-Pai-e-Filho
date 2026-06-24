// ══════════════════════════════════════════════════════════════
// js/index.js — LÓGICA EXCLUSIVA DA HOME (index.html)
// ══════════════════════════════════════════════════════════════

// ── LOADER ──
document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.classList.add('done');
        document.body.style.overflow = '';
    }, 2900);
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

// ── HOME: CATEGORIA BAR ──
let homeCatFilter = 'Todos';

function renderHomeCatBar() {
    const el = document.getElementById('home-cat-bar');
    if (!el) return;
    el.innerHTML = productTypes.map(c =>
        `<button class="home-cat-chip${c === homeCatFilter ? ' active' : ''}" onclick="setHomeFilter('${c}')">${c}</button>`
    ).join('');
}

function setHomeFilter(c) {
    homeCatFilter = c;
    renderHomeCatBar();
    renderHomeFeatured();
}

function homeFilteredList() {
    return homeCatFilter === 'Todos' ? suits : suits.filter(s => s.type === homeCatFilter);
}

// ── HOME: FEATURED GRID ──
function renderHomeFeatured() {
    const list = homeFilteredList();
    const top3 = list.slice(0, 3);
    const grid = document.getElementById('featured-grid');
    if (!grid) return;
    grid.innerHTML = top3.map((s, i) => `
        <button class="suit-card reveal${i > 0 ? ' delay-' + i : ''}" onclick="location.href='./produto.html?id=${s.id}'" style="text-align:left">
            <div class="suit-card-img-wrap">
                <img class="suit-img suit-img--1 is-active" src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/>
                ${s.imgs[1] ? `<img class="suit-img suit-img--2" src="${s.imgs[1]}" alt="${s.name}" loading="lazy"/>` : ''}
                <div class="suit-card-overlay"></div>
                ${s.badge ? `<span class="suit-card-badge">${s.badge}</span>` : ''}
                <div class="suit-card-info">
                    <span class="suit-card-cat">${s.type}</span>
                    <h3 class="suit-card-name serif">${s.name}</h3>
                    <div class="suit-card-cta">Ver detalhes <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
                </div>
                ${s.imgs[1] ? `<div class="suit-img-dots"><span class="suit-dot active"></span><span class="suit-dot"></span></div>` : ''}
            </div>
        </button>
    `).join('');
    attachReveal();
    attachCardHover();
}

// ── HOME: CARROSSÉIS POR CATEGORIA ──
function renderHomeCategories() {
    const el = document.getElementById('home-more-grid');
    if (!el) return;
    const cats = productTypes.filter(c => c !== 'Todos');

    el.innerHTML = cats.map(cat => {
        const items = suits.filter(s => s.type === cat);
        if (!items.length) return '';
        const trackId = 'track-' + cat.replace(/\s+/g, '-');

        return `
        <div class="cat-section reveal">
            <div class="cat-section-head">
                <h3 class="cat-section-title serif">${cat}</h3>
                <div class="cat-section-nav">
                    <button class="cat-nav-btn" onclick="scrollCatTrack('${trackId}', -1)" aria-label="Anterior">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <button class="cat-nav-btn" onclick="scrollCatTrack('${trackId}', 1)" aria-label="Próximo">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                </div>
            </div>
            <div class="cat-carousel">
                <div class="cat-track" id="${trackId}">
                    ${items.map(s => `
                        <button class="p-card cat-card" onclick="location.href='./produto.html?id=${s.id}'">
                            <div class="p-card-img">
                                <img class="suit-img suit-img--1 is-active" src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/>
                                ${s.imgs[1] ? `<img class="suit-img suit-img--2" src="${s.imgs[1]}" alt="${s.name}" loading="lazy"/>` : ''}
                                <div class="p-card-over"></div>
                                ${s.badge ? `<span class="p-card-badge">${s.badge}</span>` : ''}
                                <div class="p-card-info">
                                    <span class="p-card-cat">${s.type}</span>
                                    <h3 class="p-card-name serif">${s.name}</h3>
                                </div>
                                ${s.imgs[1] ? `<div class="suit-img-dots"><span class="suit-dot active"></span><span class="suit-dot"></span></div>` : ''}
                            </div>
                        </button>
                    `).join('')}
                    <a class="cat-card cat-viewmore" href="./produtos.html?cat=${encodeURIComponent(cat)}">
                        <span>Ver mais</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </a>
                </div>
            </div>
        </div>`;
    }).join('');

    attachReveal();
    attachCardHover();
}

// ── SCROLL CARROSSEL DE CATEGORIA ──
function scrollCatTrack(trackId, dir) {
    const track = document.getElementById(trackId);
    if (!track) return;
    const card = track.querySelector('.cat-card');
    const step = card ? card.getBoundingClientRect().width + 12 : 240;
    track.scrollBy({ left: dir * step * 2, behavior: 'smooth' });
}

// ── CARD HOVER CAROUSEL ──
function attachCardHover() {
    document.querySelectorAll('.suit-card, .p-card').forEach(card => {
        const img1 = card.querySelector('.suit-img--1');
        const img2 = card.querySelector('.suit-img--2');
        const dots = card.querySelectorAll('.suit-dot');
        if (!img2) return;

        let timer = null;

        card.addEventListener('mouseenter', () => {
            timer = setTimeout(() => {
                img1.classList.remove('is-active');
                img2.classList.add('is-active');
                dots[0]?.classList.remove('active');
                dots[1]?.classList.add('active');
            }, 600);
        });

        card.addEventListener('mouseleave', () => {
            clearTimeout(timer);
            img1.classList.add('is-active');
            img2.classList.remove('is-active');
            dots[0]?.classList.add('active');
            dots[1]?.classList.remove('active');
        });
    });
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

function nextTestimonial() {
    clearInterval(tTimer);
    renderT((tIdx + 1) % testimonials.length);
}

function prevTestimonial() {
    clearInterval(tTimer);
    renderT((tIdx - 1 + testimonials.length) % testimonials.length);
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
renderHomeCategories();

// ── BOTÃO VOLTAR AO TOPO ──
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

(function () {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('show', window.scrollY > 600);
    });
})();