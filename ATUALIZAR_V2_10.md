# Atualização V2.10 — Forge DB Oficina

**Base:** `main` do portfólio (commit `1491a11`), com `index.html`, `assets/css/portfolio.css` e JS da V2.8/V2.9, verificados por hashes Git.

## Incluído
- Estudo de caso `cases/forge-db.html` com arquitetura, engenharia, decisões técnicas e limitações do parecer de 14/11/2026.
- Cinco imagens originais do Forge fornecidas em 14/11/2026, convertidas para WebP com tarjas opacas em ocorrências visíveis de `Sky` / `sky` (não são reconstruções geradas por IA).
- Cartão do Forge na página inicial com rotação automática pelas cinco imagens usando `assets/js/portfolio.js` já existente; CTA `Ver projeto` no topo.
- CSS específico para manter o cartão compacto com prévia, responsivo e compatível com preferências de movimento reduzido já atendidas pelo JS.

## Privacidade e segurança
- Somente a palavra da fonte foi mascarada; números, marcas de peças, modelos e datas presentes nas capturas ainda podem ser visíveis. Verificar autorização e eventuais informações comerciais antes de publicar.
- As capturas são retratos do sistema, não prova externa de qualidade, disponibilidade, licenças ou ganhos de desempenho.
- O código do extrator principal não foi publicado no portfólio; o caso referencia somente o validador público da integração Laravel.
- Multifonte e integração de novos fornecedores em homologação, não apresentados como prontos para produção.

## Instalação
```bash
cd ~/projetos/mateus-santos.github.io
git switch main
git pull --ff-only origin main
unzip -o ~/Downloads/portfolio_forge_v2_10.zip -d .
python3 tools/verificar_portfolio.py
python3 tools/auditar_apresentacao.py
node --check assets/js/portfolio.js
git diff --check
```

## Checklist antes de publicar
1. Conferir todas as imagens ampliadas e os dados visíveis, inclusive direitos de uso.
2. Conferir o carrossel e o botão Ver projeto em celular e desktop.
3. Criar branch, registrar alterações e abrir PR para `main`; não alterar a configuração da origem da coleta.
