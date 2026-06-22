// ══════════════════════════════════════════════════════════════
// js/produto.js — LÓGICA DA PÁGINA PRODUTO (produto.html)
// ══════════════════════════════════════════════════════════════

let currentImgIndex = 0;
let allImgs = [];

function switchImg(src, thumbEl, index) {
    const mainImg = document.getElementById('pd-main-img');
    if (!mainImg) return;

    currentImgIndex = index !== undefined ? index : allImgs.indexOf(src);

    mainImg.classList.add('changing');
    setTimeout(() => {
        mainImg.src = src;
        mainImg.classList.remove('changing');
    }, 250);

    document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
    if (thumbEl) {
        thumbEl.classList.add('active');
    } else {
        // atualiza thumb pelo index quando chamado pelo swipe
        const thumbEls = document.querySelectorAll('.pd-thumb');
        if (thumbEls[currentImgIndex]) thumbEls[currentImgIndex].classList.add('active');
    }
}

function initSwipe(element) {
    let startX = 0;
    let startY = 0;
    let isDragging = false;

    element.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    }, { passive: true });

    element.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const diffX = Math.abs(e.touches[0].clientX - startX);
        const diffY = Math.abs(e.touches[0].clientY - startY);
        // se movimento horizontal > vertical, impede scroll da página
        if (diffX > diffY) e.preventDefault();
    }, { passive: false });

    element.addEventListener('touchend', (e) => {
        if (!isDragging) return;
        isDragging = false;

        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        // threshold de 50px para considerar swipe
        if (Math.abs(diff) < 50) return;

        if (diff > 0) {
            // swipe para esquerda → próxima imagem
            const next = (currentImgIndex + 1) % allImgs.length;
            switchImg(allImgs[next], null, next);
        } else {
            // swipe para direita → imagem anterior
            const prev = (currentImgIndex - 1 + allImgs.length) % allImgs.length;
            switchImg(allImgs[prev], null, prev);
        }
    }, { passive: true });
}

(function () {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const s = suits.find(x => x.id === id);

    if (!s) {
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

    allImgs = s.imgs;
    currentImgIndex = 0;

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
            <div class="pd-thumb${i === 0 ? ' active' : ''}" onclick="switchImg('${img}', this, ${i})">
                <img src="${img}" alt="${s.name} ${i + 1}" loading="lazy"/>
            </div>
        `).join('');
    }

    if (waBtn) {
        const waMsg = encodeURIComponent(`Olá! Tenho interesse no ${s.name} (Ref. ${s.ref}). Poderia me dar mais informações?`);
        waBtn.href = `https://wa.me/5511999999999?text=${waMsg}`;
    }

    // inicializa swipe na galeria
    const gallery = document.querySelector('.pd-gallery-main');
    if (gallery) initSwipe(gallery);
})();