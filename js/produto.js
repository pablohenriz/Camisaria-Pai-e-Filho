// ══════════════════════════════════════════════════════════════
// js/produto.js — LÓGICA DA PÁGINA PRODUTO (produto.html)
// Lê ?id=1 da URL e preenche a página com os dados do produto.
// ══════════════════════════════════════════════════════════════

function switchImg(src, thumbEl) {
    const mainImg = document.getElementById('pd-main-img');
    if (!mainImg) return;
    mainImg.classList.add('changing');
    setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove('changing');
    }, 250);
    document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
}

(function () {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const s = suits.find(x => x.id === id);

    if (!s) {
        // Produto não encontrado — mostra mensagem em vez de quebrar a página
        const wrap = document.querySelector('.pd-wrap');
        if (wrap) {
            wrap.innerHTML = `
                <div style="padding:6rem 2rem;text-align:center">
                    <p style="color:var(--text2);margin-bottom:2rem">Produto não encontrado.</p>
                    <a class="btn btn-primary" href="./produtos.html"><span>Ver todos os produtos</span></a>
                </div>
            `;
        }
        return;
    }

    document.title = s.name + ' — Camisaria Pai & Filho';

    const cat = document.getElementById('pd-cat');
    const name = document.getElementById('pd-name');
    const ref = document.getElementById('pd-ref');
    const desc = document.getElementById('pd-desc');
    const specs = document.getElementById('pd-specs');
    const mainImg = document.getElementById('pd-main-img');
    const thumbs = document.getElementById('pd-thumbs');
    const waBtn = document.getElementById('pd-wa');

    if (cat) cat.textContent = s.type + (s.category ? ' · ' + s.category : '');
    if (name) name.innerHTML = s.name;
    if (ref) ref.textContent = 'Ref. ' + s.ref;
    if (desc) desc.textContent = s.desc;

    if (specs) {
        specs.innerHTML = Object.entries(s.specs).map(([label, val]) => `
            <div class="pd-spec">
                <span class="pd-spec-label">${label}</span>
                <span class="pd-spec-val">${val}</span>
            </div>
        `).join('');
    }

    if (mainImg) {
        mainImg.src = s.imgs[0];
        mainImg.alt = s.name;
    }

    if (thumbs) {
        thumbs.innerHTML = s.imgs.map((img, i) => `
            <div class="pd-thumb${i === 0 ? ' active' : ''}" onclick="switchImg('${img}',this)">
                <img src="${img}" alt="${s.name} ${i + 1}" loading="lazy"/>
            </div>
        `).join('');
    }

    if (waBtn) {
        const waMsg = encodeURIComponent(`Olá! Tenho interesse no ${s.name} (Ref. ${s.ref}). Poderia me dar mais informações?`);
        waBtn.href = `https://wa.me/5511999999999?text=${waMsg}`;
    }
})();