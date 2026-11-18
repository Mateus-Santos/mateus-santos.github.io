# Atualização V2.12 — correções de prévia automática e HotelVagas

## O que mudou
- corrige a rotação automática das prévias ao trocar filtros na página principal;
- transforma o cartão do HotelVagas em prévia visual real com carrossel automático;
- adiciona imagens do HotelVagas ao portfólio em `assets/imgs/portfolio/hotelvagas/`;
- inclui galeria de capturas do HotelVagas no estudo de caso;
- explicita que as telas exibidas foram capturadas do ambiente demonstrativo com persistência real em banco de dados, usando registros fictícios.

## Arquivos alterados
- `index.html`
- `assets/css/portfolio.css`
- `assets/js/portfolio.js`
- `cases/plataforma-hospedagens.html`
- `assets/imgs/portfolio/hotelvagas/*`

## Revisão complementar — controles e acesso
- A rotação automática deixa de ser suspensa simplesmente por manter o mouse sobre o cartão.
- Setas anterior/próximo e pausa/reprodução são criadas para todos os carrosséis na página principal.
- Preferência de movimento reduzido é respeitada: autoplay desligado, navegação manual disponível.
- A página inicial e o estudo de caso incluem URL direta do painel administrativo de leads: `https://hotelvagas-mateus.duckdns.org/leads` (autenticação pode ser necessária).
