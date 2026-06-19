// ══════════════════════════════════════════════════════════════
// js/produtos.js — LÓGICA DA PÁGINA PRODUTOS (produtos.html)
// ══════════════════════════════════════════════════════════════

let curFilter = 'Todos';
let curView = 'grid';

function renderProducts() {
    const filtered = curFilter === 'Todos' ? suits : suits.filter(s => s.type === curFilter);

    // chips de filtro
    const chipsEl = document.getElementById('filter-chips');
    if (chipsEl) {
        chipsEl.innerHTML = productTypes.map(c =>
            `<button class="filter-chip${c === curFilter ? ' active' : ''}" onclick="setFilter('${c}')">${c}</button>`
        ).join('');
    }

    // contador
    const countEl = document.getElementById('filter-count');
    if (countEl) countEl.textContent = filtered.length + ' peças';

    // lista / grade
    const cont = document.getElementById('products-container');
    if (!cont) return;

    if (curView === 'grid') {
        cont.innerHTML = `<div class="products-grid">${filtered.map(s => `
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
        `).join('')}</div>`;
    } else {
        cont.innerHTML = `<div class="products-list">${filtered.map(s => `
            <div class="p-list-item" onclick="location.href='./produto.html?id=${s.id}'" style="cursor:pointer">
                <div class="p-list-thumb"><img src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/></div>
                <div class="p-list-info">
                    <span class="p-list-cat">${s.type}</span>
                    <h3 class="p-list-name serif">${s.name}</h3>
                    <p class="p-list-desc">${s.desc}</p>
                    ${s.badge ? `<span style="font-size:.52rem;color:var(--gold);letter-spacing:.2em;text-transform:uppercase">${s.badge}</span>` : ''}
                </div>
            </div>
        `).join('')}</div>`;
    }
}

function setFilter(f) {
    curFilter = f;
    renderProducts();
}

function setView(v) {
    curView = v;
    const vg = document.getElementById('vg');
    const vl = document.getElementById('vl');
    if (vg) vg.classList.toggle('active', v === 'grid');
    if (vl) vl.classList.toggle('active', v === 'list');
    renderProducts();
}

// ── Lê parâmetro ?cat=Ternos da URL para filtro automático via footer/links ──
(function () {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat && productTypes.includes(cat)) {
        curFilter = cat;
    }
    renderProducts();
})();