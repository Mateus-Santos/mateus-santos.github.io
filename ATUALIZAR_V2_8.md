# Portfólio V2.8 — prévias automáticas e contato atualizado

Atualização incremental sobre a branch `portfolio-v2` no commit `83bac9f` (V2.7).

## Mudanças

- WhatsApp público alterado de `+55 75 99714-8570` para `+55 75 98702-8960` em todos os três pontos da página inicial.
- Cartões de ETL/BI e SOS Mecânica agora apresentam carrossel **automático**, sem setas, miniaturas ou bolinhas; usa apenas imagens sanitizadas já presentes no repositório.
- Carrosséis pausam quando o visitante coloca o mouse no cartão, foca um link, sai da aba ou quando os cartões não estão na tela; `prefers-reduced-motion` mostra uma imagem estática.
- Todos os cinco cartões receberam link visível no topo: **Ver projeto** ou **Ver testes**, de acordo com o material realmente disponível.
- Descrição do painel de sortimento atualizada para refletir o acompanhamento por **marca**, **% da meta atingido** e **% proporcional de comissão em caso de consolidação do período**.

## Requisitos

- Não publica novos prints nem altera bases de dados.
- CSS/JS são progressivos: com JavaScript desativado, a primeira imagem continua visível.
- As outras três iniciativas permanecem com cartões estáticos, pois não há imagens autorizadas correspondentes.

## Validação

1. `python3 tools/verificar_portfolio.py`
2. `python3 tools/auditar_apresentacao.py`
3. `node --check assets/js/portfolio.js`
4. `git diff --check`
5. Revisão visual de desktop e celular, principalmente layout do botão e alternância das prévias.

## Observações

O GitHub Pages publica somente a branch configurada (normalmente `main`). Faça PR `portfolio-v2` -> `main` depois de revisar. O número antigo permanece no histórico Git salvo em commits anteriores; esta versão muda o site vigente, não reescreve histórico.
