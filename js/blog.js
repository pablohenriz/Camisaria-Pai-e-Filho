// ══════════════════════════════════════════════════════════════
// js/blog.js — LÓGICA DA PÁGINA BLOG (blog.html)
// ══════════════════════════════════════════════════════════════

(function () {
    const el = document.getElementById('blog-grid');
    if (!el) return;
    el.innerHTML = blogPosts.map((p, i) => `
        <button class="blog-card reveal delay-${i % 3}" onclick="location.href='./artigo.html?id=${p.id}'">
            <div class="blog-card-img">
                <img src="${p.img}" alt="${p.title}" loading="lazy"/>
                <span class="blog-card-tag">${p.tag}</span>
            </div>
            <div class="blog-card-body">
                <span class="blog-card-meta">${p.date} · ${p.readTime}</span>
                <h3 class="blog-card-title serif">${p.title}</h3>
                <p class="blog-card-excerpt">${p.excerpt}</p>
                <span class="blog-card-link">Ler artigo
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </span>
            </div>
        </button>
    `).join('');
    attachReveal();
})();