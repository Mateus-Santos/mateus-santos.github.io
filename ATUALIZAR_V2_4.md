# Portfólio V2.4 — Gestão pedagógica

Atualização incremental sobre a branch `portfolio-v2` após a V2.3.

## Alterações

- Nova descrição do sistema de gestão pedagógica no cartão principal.
- Nova página `cases/gestao-pedagogica.html` com escopo, tecnologias e contexto profissional.
- Descrição da experiência no Instituto Mix atualizada para refletir os processos acompanhados.
- Sem afirmação de resultados quantitativos não confirmados.
- Sem modificação de contatos, cabeçalho, CSS, depoimentos, certificados ou projetos existentes.

## Instalação

```bash
cd ~/projetos/mateus-santos.github.io
git branch --show-current
git status --short
mkdir -p ~/backup-portfolio-v24
cp -a index.html ~/backup-portfolio-v24/
unzip -o ~/Downloads/portfolio_mateus_v2_4_gestao_pedagogica.zip -d .
python3 tools/verificar_portfolio.py
git diff --check
```

## Publicação após aprovação

```bash
git add index.html cases/gestao-pedagogica.html ATUALIZAR_V2_4.md
git diff --cached --check
git commit -m "docs: detalha sistema interno de gestao pedagogica"
git push origin portfolio-v2
```

Se o push falhar por falta de conexão, o commit local fica salvo; repita apenas o push quando a rede voltar.
