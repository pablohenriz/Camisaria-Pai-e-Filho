// ══════════════════════════════════════════════════════════════
// js/shared.js — FUNÇÕES COMPARTILHADAS ENTRE TODAS AS PÁGINAS
// ══════════════════════════════════════════════════════════════

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE DRAWER ──
let drawerOpen = false;

function toggleDrawer() {
    drawerOpen = !drawerOpen;
    document.getElementById('drawer').classList.toggle('open', drawerOpen);
    document.getElementById('hamburger').classList.toggle('open', drawerOpen);
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
}

function closeDrawer() {
    drawerOpen = false;
    const drawer = document.getElementById('drawer');
    const hamburger = document.getElementById('hamburger');
    if (drawer) drawer.classList.remove('open');
    if (hamburger) hamburger.classList.remove('open');
    document.body.style.overflow = '';
}

// ── SCROLL REVEAL ──
const revObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
    });
}, { threshold: 0.12 });

function attachReveal() {
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => {
        if (!el.classList.contains('in')) revObs.observe(el);
    });
}

// Dispara o reveal ao carregar a página
document.addEventListener('DOMContentLoaded', attachReveal);