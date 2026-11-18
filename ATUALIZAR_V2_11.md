# Atualização do portfólio V2.11 — HotelVagas

**Base confirmada (arquivos em `main`):** `index.html`, `assets/css/portfolio.css`, `cases/plataforma-hospedagens.html`, `README.md`. Os hashes blob de cada arquivo anterior foram comparados com a versão `main` acessível em 18/11/2026.

## Alterações

1. Cartão HotelVagas: substitui status "demonstração em preparação" por demonstração publicada, com link e resumo full-stack; o painel estilizado no cartão é resumo gráfico em HTML/CSS, **não screenshot real**.
2. Estudo de caso: funcionalidades de catálogo, clientes, leads e administração; arquitetura Laravel/Vue/Docker/SQLite/Nginx; CI, snapshots, HTTPS, tratamento de Mixed Content; limites e validações pendentes.
3. Link externo para `https://hotelvagas-mateus.duckdns.org/` em cartão e estudo de caso.
4. Atualização do disclosure do portfólio e do README.

## Verificações antes da publicação

- O relatório fornecido registra retorno HTTP 200 em `/up` em 18/11/2026. A URL pública **não pôde ser acessada independentemente** pelo ambiente que montou este pacote. Confirme no navegador e com `curl -I`.
- O patch de `PermissionsSeeder` e `hotelvagas:admin-bootstrap` ainda estava pendente no momento do relatório; a versão do portfólio não afirma conclusão.
- Confirme que a demonstração não exibe imagens, dados, contas reais ou materiais sem direito de publicação.
- Teste responsividade, modo claro, CTA externo, e valide os scripts do repositório.

## Aplicar no WSL

```bash
cd ~/projetos/mateus-santos.github.io
git switch main
git pull --ff-only origin main
git switch -c portfolio-hotelvagas-v211
unzip -o ~/Downloads/ATUALIZACAO_HOTELVAGAS_V2_11.zip -d .
python3 tools/verificar_portfolio.py
python3 tools/auditar_apresentacao.py
node --check assets/js/portfolio.js
git diff --check
git diff --stat
```

Confira a visualização local antes do commit. Não execute push/merge automaticamente sem validar os links e direitos de publicação.
