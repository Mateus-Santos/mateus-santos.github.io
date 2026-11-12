# Portfólio V2.5 — publicação controlada

Esta atualização é incremental sobre a **V2.4 da branch portfolio-v2**, não sobre a V2 presente na main.

## Alterações

- Tema claro/escuro em todas as páginas, mantendo escuro como padrão.
- Menu responsivo nas páginas técnicas, coerente com a página inicial.
- Refinos de layout em telas menores e respeito a redução de movimentos.
- Inspeção estática adicional.

## Passos sugeridos no WSL

```bash
cd ~/projetos/mateus-santos.github.io
git status -sb
git switch portfolio-v2
git pull --ff-only origin portfolio-v2
unzip -o ~/Downloads/portfolio_mateus_v2_5_atualizacao.zip -d .
python3 tools/verificar_portfolio.py
python3 tools/auditar_apresentacao.py
node --check assets/js/portfolio.js
git diff --check
python3 -m http.server 9000
```

Com a prévia aprovada, criar commit e push na branch portfolio-v2; abrir PR para main depois de validar conteúdos e o visual.

## Cuidados

- Não contém capturas reais, bases corporativas, novas alegações de resultados ou arquivos de certificados.
- O uso local do tema não transmite informações; preferências ficam no próprio navegador.
- O estudo de caso de hospedagens continua marcado como demonstração pendente de revisão de segurança e direitos.
- Acessibilidade requer avaliação manual de teclado, leitor de telas e contraste; Lighthouse é complementar.
