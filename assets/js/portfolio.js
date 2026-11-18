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
    document.dispatchEvent(new Event('portfolio:filters-changed'));
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

  // Carrosséis de projetos: avanço automático e controles manuais acessíveis.
  // Diferente da versão anterior, o cursor sobre o cartão NÃO bloqueia o autoplay.
  // Movimento reduzido desativa somente o autoplay; setas continuam funcionando.
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-project-carousel]').forEach(carousel => {
    const slides = Array.from(carousel.querySelectorAll('.project-preview-slide'));
    if (slides.length < 2) return;
    const card = carousel.closest('.project-card');
    const preview = carousel.closest('.project-preview');
    if (!card || !preview) return;
    const caption = card.querySelector('[data-preview-caption]');
    const suffix = caption?.textContent?.split(' · ').slice(1).join(' · ') || 'galeria do projeto';
    const delay = Math.max(4000, Number.parseInt(carousel.dataset.delay, 10) || 5300);
    let index = Math.max(0, slides.findIndex(slide => slide.classList.contains('is-current')));
    let interval = null;
    let onScreen = true;
    let userPaused = false;

    // Não declare a região como imagem quando contiver botões interativos.
    preview.setAttribute('role', 'group');
    const name = preview.getAttribute('aria-label') || 'Galeria do projeto';
    const controls = document.createElement('div');
    controls.className = 'project-preview-controls';
    const button = (label, symbol, cssClass) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = `project-preview-control ${cssClass}`;
      item.setAttribute('aria-label', `${label}: ${name}`);
      item.textContent = symbol;
      return item;
    };
    const previous = button('Imagem anterior', '‹', 'preview-previous');
    const toggle = button('Pausar animação', 'Ⅱ', 'preview-toggle');
    const next = button('Próxima imagem', '›', 'preview-next');
    controls.append(previous, toggle, next);
    preview.appendChild(controls);

    const autoplayAllowed = () => !document.hidden && onScreen &&
      !card.hidden && !reduceMotion?.matches && !userPaused;
    const stop = () => { if (interval !== null) { window.clearInterval(interval); interval = null; } };
    const render = (newIndex) => {
      index = (newIndex + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        const active = i === index;
        slide.classList.toggle('is-current', active);
        slide.setAttribute('aria-hidden', String(!active));
      });
      if (caption) caption.textContent = `${slides[index].dataset.previewLabel || 'Prévia'} · ${suffix}`;
    };
    const refresh = () => {
      stop();
      if (autoplayAllowed()) interval = window.setInterval(() => render(index + 1), delay);
      const isPaused = userPaused || !!reduceMotion?.matches;
      toggle.setAttribute('aria-pressed', String(userPaused));
      toggle.setAttribute('aria-label', `${isPaused ? 'Reproduzir' : 'Pausar'} animação: ${name}`);
      toggle.textContent = isPaused ? '▶' : 'Ⅱ';
    };
    previous.addEventListener('click', () => { render(index - 1); refresh(); });
    next.addEventListener('click', () => { render(index + 1); refresh(); });
    toggle.addEventListener('click', () => { userPaused = !userPaused; refresh(); });
    document.addEventListener('visibilitychange', refresh);
    document.addEventListener('portfolio:filters-changed', refresh);
    if (reduceMotion?.addEventListener) reduceMotion.addEventListener('change', refresh);
    else if (reduceMotion?.addListener) reduceMotion.addListener(refresh);
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        onScreen = entries.some(entry => entry.isIntersecting);
        refresh();
      }, { threshold: 0.15 });
      observer.observe(card);
    }
    render(index);
    refresh();
  });

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
