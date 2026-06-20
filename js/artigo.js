// ══════════════════════════════════════════════════════════════
// js/artigo.js — LÓGICA DA PÁGINA ARTIGO (artigo.html)
// Lê ?id=1 da URL e preenche a página com o conteúdo do post.
// ══════════════════════════════════════════════════════════════

(function () {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const p = blogPosts.find(x => x.id === id);

    if (!p) {
        const body = document.getElementById('article-body');
        if (body) {
            body.innerHTML = `
                <div style="padding:6rem 2rem;text-align:center">
                    <p style="color:var(--text2);margin-bottom:2rem">Artigo não encontrado.</p>
                    <a class="btn btn-primary" href="./blog.html"><span>Ver todos os artigos</span></a>
                </div>
            `;
        }
        return;
    }

    document.title = p.title + ' — Camisaria Pai & Filho';

    const img = document.getElementById('article-img');
    const meta = document.getElementById('article-meta');
    const title = document.getElementById('article-title');
    const body = document.getElementById('article-body');

    if (img) {
        img.src = p.img;
        img.alt = p.title;
    }
    if (meta) meta.textContent = p.tag + ' · ' + p.date + ' · ' + p.readTime;
    if (title) title.textContent = p.title;
    if (body) {
        body.innerHTML = '<div class="article-divider"></div>' +
            p.body.map(block => block.type === 'h2' ? `<h2>${block.text}</h2>` : `<p>${block.text}</p>`).join('');
    }
})();