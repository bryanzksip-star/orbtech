'use strict';

// 01. Contato: todos os fluxos usam o mesmo destino e identificam a origem.
const WHATSAPP_URL = 'https://wa.me/5547992004663';
const CONTACT_ORIGIN = 'Olá! Vim pelo site da ORBE TECH.';
function whatsappUrl(lines) {
  return WHATSAPP_URL + '?text=' + encodeURIComponent([CONTACT_ORIGIN, '', ...lines].join('\n'));
}
function openWhatsApp(lines, status) {
  if (status) status.textContent = 'Abrindo o WhatsApp. Revise e envie a mensagem para concluir.';
  window.location.assign(whatsappUrl(lines));
}

// 02. Navegação móvel, inclusive fechamento por Escape.
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.links');
toggle.hidden = false;
document.documentElement.classList.add('menu-ready');
function setMenu(open) {
  navigation.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  toggle.textContent = open ? '✕' : '☰';
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav')) setMenu(false);
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
  if (event.matches) setMenu(false);
});
document.getElementById('year').textContent = new Date().getFullYear();

// 03. Tema escuro por padrão; preferência persistida quando permitido.
const themeButton = document.getElementById('theme-toggle');
themeButton.hidden = false;
function updateThemeButton() {
  const light = document.documentElement.dataset.theme === 'light';
  themeButton.setAttribute('aria-pressed', String(light));
  themeButton.setAttribute('aria-label', light ? 'Ativar modo escuro' : 'Ativar modo claro');
  themeButton.title = light ? 'Ativar modo escuro' : 'Ativar modo claro';
  document.querySelector('meta[name="theme-color"]').content = light ? '#f3f7fc' : '#05070c';
}
updateThemeButton();
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('orbe-theme', theme); } catch (error) { /* Preferência opcional. */ }
  updateThemeButton();
});

// 04. Movimento: animação por transform, pausa manual e preferência do sistema.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.getElementById('motion-toggle');
let motionPaused = reducedMotion.matches;
motionButton.hidden = false;
function updateMotion() {
  document.documentElement.classList.toggle('motion-paused', motionPaused);
  motionButton.setAttribute('aria-pressed', String(motionPaused));
  motionButton.textContent = reducedMotion.matches
    ? 'Movimento reduzido pelo sistema'
    : motionPaused ? 'Retomar animações' : 'Pausar animações';
  motionButton.disabled = reducedMotion.matches;
}
updateMotion();
motionButton.addEventListener('click', () => {
  motionPaused = !motionPaused;
  updateMotion();
});
reducedMotion.addEventListener('change', (event) => {
  motionPaused = event.matches;
  updateMotion();
});
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('[data-reveal], .section-head, .about-grid, .portfolio-placeholder, .quote-form, .contact-panel').forEach((element) => {
    element.classList.add('reveal-pending');
    observer.observe(element);
  });
}

// Os cards preenchem o serviço no formulário de orçamento.
document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    document.getElementById('quote-service').value = link.dataset.service;
  });
});
// 06. Orçamento direto. "Sua ideia" permanece opcional.
const quoteForm = document.getElementById('quote-form');
document.getElementById('quote-submit').disabled = false;
quoteForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;
  const fields = new FormData(quoteForm);
  const name = String(fields.get('nome') || '').trim();
  const company = String(fields.get('empresa') || '').trim();
  const service = String(fields.get('servico') || '').trim();
  const message = String(fields.get('mensagem') || '').trim();
  const status = document.getElementById('quote-status');
  if (!name || !service) {
    status.textContent = 'Preencha seu nome e o serviço para continuar.';
    document.getElementById(!name ? 'quote-name' : 'quote-service').focus();
    return;
  }
  openWhatsApp([
    'Gostaria de solicitar um orçamento.',
    '',
    'Nome: ' + name,
    'Empresa: ' + (company || 'Não informada'),
    'Serviço desejado: ' + service,
    '',
    'Mensagem: ' + (message || 'Não informada')
  ], status);
});

