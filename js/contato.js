// ══════════════════════════════════════════════════════════════
// js/contato.js — LÓGICA DA PÁGINA CONTATO (contato.html)
// ══════════════════════════════════════════════════════════════

function submitForm(e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    if (form) form.style.display = 'none';
    if (success) success.classList.add('show');
}

function resetForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    if (form) {
        form.reset();
        form.style.display = '';
    }
    if (success) success.classList.remove('show');
}