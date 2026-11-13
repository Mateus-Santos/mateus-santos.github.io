// Script leve: navegação mobile e filtros. A página continua legível sem JavaScript.
(() => {
  'use strict';
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const setMenu = (open) => {
    if (!menuButton || !nav) return;
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

  const buttons = Array.from(document.querySelectorAll('.filter[data-filter]'));
  const cards = Array.from(document.querySelectorAll('.project-card[data-category]'));
  buttons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => { card.hidden = filter !== 'all' && !card.dataset.category.split(/\s+/).includes(filter); });
  }));
  // Controle de tema: opção persistida apenas no navegador do visitante.
  // Mantém tema escuro como padrão e não depende de bibliotecas externas.
  const themeButtons = Array.from(document.querySelectorAll('[data-theme-toggle]'));
  const root = document.documentElement;
  const getSavedTheme = () => {
    try { return window.localStorage.getItem('mateus-portfolio-theme'); }
    catch (_) { return null; }
  };
  const saveTheme = (theme) => {
    try { window.localStorage.setItem('mateus-portfolio-theme', theme); }
    catch (_) { /* Navegadores com armazenamento bloqueado continuam funcionando. */ }
  };
  const updateTheme = (theme) => {
    const light = theme === 'light';
    root.setAttribute('data-theme', light ? 'light' : 'dark');
    themeButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(light));
      button.setAttribute('aria-label', light ? 'Ativar tema escuro' : 'Ativar tema claro');
      const label = button.querySelector('[data-theme-label]');
      if (label) label.textContent = light ? 'Tema escuro' : 'Tema claro';
    });
  };
  updateTheme(getSavedTheme() === 'light' ? 'light' : 'dark');
  themeButtons.forEach(button => button.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    updateTheme(next);
    saveTheme(next);
  }));

  // Prévias automáticas sem setas/pontos: só imagens reais sanitizadas.
  // A rotação para ao passar o mouse, focar no cartão, sair da tela ou trocar de aba.
  // Usuários com preferência por movimento reduzido veem somente a imagem inicial.
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-project-carousel]').forEach(carousel => {
    const slides = Array.from(carousel.querySelectorAll('.project-preview-slide'));
    if (slides.length < 2) return;
    const card = carousel.closest('.project-card');
    const caption = card?.querySelector('[data-preview-caption]');
    const delay = Math.max(4000, Number.parseInt(carousel.dataset.delay, 10) || 5300);
    let index = 0;
    let interval = null;
    let onScreen = true;
    let pausedByHover = false;
    let pausedByFocus = false;
    const allowed = () => !document.hidden && onScreen && !pausedByHover &&
      !pausedByFocus && !reduceMotion?.matches && !card?.hidden;
    const pause = () => { if (interval !== null) { window.clearInterval(interval); interval = null; } };
    const advance = () => {
      slides[index].classList.remove('is-current');
      index = (index + 1) % slides.length;
      slides[index].classList.add('is-current');
      if (caption) caption.textContent = `${slides[index].dataset.previewLabel || 'Prévia'} · imagens censuradas`;
    };
    const refresh = () => {
      pause();
      if (allowed()) interval = window.setInterval(advance, delay);
    };
    card?.addEventListener('mouseenter', () => { pausedByHover = true; refresh(); });
    card?.addEventListener('mouseleave', () => { pausedByHover = false; refresh(); });
    card?.addEventListener('focusin', () => { pausedByFocus = true; refresh(); });
    card?.addEventListener('focusout', () => { pausedByFocus = false; refresh(); });
    document.addEventListener('visibilitychange', refresh);
    if (reduceMotion?.addEventListener) reduceMotion.addEventListener('change', refresh);
    else if (reduceMotion?.addListener) reduceMotion.addListener(refresh);
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        onScreen = entries.some(entry => entry.isIntersecting);
        refresh();
      }, { threshold: 0.15 });
      observer.observe(card);
    }
    refresh();
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
