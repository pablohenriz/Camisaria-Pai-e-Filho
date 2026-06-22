// ══════════════════════════════════════════════════════════════
// js/produtos.js — LÓGICA DA PÁGINA PRODUTOS (produtos.html)
// ══════════════════════════════════════════════════════════════

let curFilter = 'Todos';
let curView = 'grid';
let curPage = 1;
const PAGE_SIZE = 9; // quantos produtos mostrar por vez

function renderProducts() {
    const filtered = curFilter === 'Todos' ? suits : suits.filter(s => s.type === curFilter);
    const paginated = filtered.slice(0, curPage * PAGE_SIZE);
    const hasMore = paginated.length < filtered.length;

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

    const loadMoreBtn = hasMore ? `
        <div class="load-more-wrap">
            <span class="load-more-count">${paginated.length} de ${filtered.length} produtos</span>
            <div class="load-more-bar">
                <div class="load-more-bar-fill" style="width:${(paginated.length / filtered.length * 100).toFixed(0)}%"></div>
            </div>
            <button class="load-more-btn" onclick="loadMore()">
                <span>Ver mais produtos</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
            </button>
        </div>
    ` : `
        <div class="load-more-wrap">
            <span class="load-more-count load-more-done">Todos os ${filtered.length} produtos exibidos</span>
        </div>
    `;

    if (curView === 'grid') {
        cont.innerHTML = `
            <div class="products-grid">
                ${paginated.map(s => `
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
                `).join('')}
            </div>
            ${loadMoreBtn}
        `;
    } else {
        cont.innerHTML = `
            <div class="products-list">
                ${paginated.map(s => `
                    <div class="p-list-item" onclick="location.href='./produto.html?id=${s.id}'" style="cursor:pointer">
                        <div class="p-list-thumb"><img src="${s.imgs[0]}" alt="${s.name}" loading="lazy"/></div>
                        <div class="p-list-info">
                            <span class="p-list-cat">${s.type}</span>
                            <h3 class="p-list-name serif">${s.name}</h3>
                            <p class="p-list-desc">${s.desc}</p>
                            ${s.badge ? `<span style="font-size:.52rem;color:var(--gold);letter-spacing:.2em;text-transform:uppercase">${s.badge}</span>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            ${loadMoreBtn}
        `;
    }
}

function loadMore() {
    curPage++;
    renderProducts();
    // scroll suave para os novos cards
    const grid = document.querySelector('.products-grid, .products-list');
    if (grid) {
        const newItems = grid.querySelectorAll('.p-card, .p-list-item');
        const firstNew = newItems[(curPage - 1) * PAGE_SIZE];
        if (firstNew) firstNew.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function setFilter(f) {
    curFilter = f;
    curPage = 1; // reseta paginação ao trocar filtro
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

(function () {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat && productTypes.includes(cat)) {
        curFilter = cat;
    }
    renderProducts();
})();