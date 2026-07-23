// ============================================
// REVISTA ÁPICE — Comportamento compartilhado
// ============================================

// Troque pelo número real, formato 55DDDNUMERO (só dígitos)
const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = "Olá! Vim pelo site da Revista Ápice e quero saber mais sobre ser destaque.";

function whatsappLink() {
  const msg = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Menu mobile
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => mobileNav.classList.toggle("open"));
  }

  // Preenche todos os links/botões de WhatsApp da página
  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    el.setAttribute("href", whatsappLink());
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Botão flutuante de WhatsApp (injetado em todas as páginas)
  const float = document.createElement("a");
  float.href = whatsappLink();
  float.target = "_blank";
  float.rel = "noopener";
  float.className = "wa-float";
  float.setAttribute("aria-label", "Falar no WhatsApp");
  float.innerHTML = `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1h.003a7.94 7.94 0 0 0 5.55-13.58ZM12.05 18.4h-.003a6.58 6.58 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 5.6 3.1Zm3.6-4.94c-.2-.1-1.16-.57-1.34-.64-.18-.07-.31-.1-.44.1-.13.2-.5.63-.62.77-.11.13-.23.15-.43.05a5.4 5.4 0 0 1-2.7-2.36c-.2-.35.2-.32.58-1.08.06-.13.03-.24-.02-.34-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.2-.68.67-.68 1.62s.7 1.88.8 2.01c.1.13 1.38 2.1 3.34 2.95.47.2.83.32 1.12.41.47.15.9.13 1.24.08.38-.06 1.16-.47 1.32-.93.16-.45.16-.85.11-.93-.05-.08-.18-.13-.38-.23Z"/></svg>`;
  document.body.appendChild(float);

  // Ano no rodapé
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  initScrollReveal();
});

function initScrollReveal() {
  const targets = document.querySelectorAll(
    "section > .container > *, .feature-card, .card, .cover-item, .testi, .value-item, .step"
  );
  targets.forEach(el => el.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  targets.forEach(el => observer.observe(el));
}

window.addEventListener("load", () => {
  setTimeout(initScrollReveal, 50);
});
