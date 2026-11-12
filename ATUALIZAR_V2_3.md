# Atualização do portfólio — v2.3

## Base de trabalho

Aplicar sobre a branch `portfolio-v2`, após o commit `9cbc157` (v2.2), ou em uma branch derivada dela.

O pacote **atualizacao** substitui somente `index.html`, `README.md`, o CSS, este guia e acrescenta a página do projeto de hospedagens. O pacote **completo** contém o código do portfólio v2.3 para aplicação sobre o repositório já existente. Não remove `assets/` preexistente. O pacote NÃO inclui imagens dos certificados antigos; elas devem permanecer no repositório.

## Instalação local (WSL)

```bash
cd ~/projetos/mateus-santos.github.io
git status --short
git branch --show-current
# Confirmar branch portfolio-v2 e revisar mudanças locais antes de prosseguir.
mkdir -p ~/backup-portfolio-v2-3
cp -a index.html README.md assets/css/portfolio.css ~/backup-portfolio-v2-3/
unzip -o ~/Downloads/portfolio_mateus_v2_3_atualizacao.zip -d .
python3 tools/verificar_portfolio.py
git diff --check
git status --short
python3 -m http.server 9000
```

Abrir `http://localhost:9000` e conferir as cinco fichas, o estudo de caso novo, o menu mobile, WhatsApp, os certificados e o monograma. Caso a porta esteja ocupada, usar `9001`.

## Commit após revisar

```bash
cd ~/projetos/mateus-santos.github.io
git add index.html README.md assets/css/portfolio.css cases/plataforma-hospedagens.html ATUALIZAR_V2_3.md
git diff --cached --check
git commit -m "feat: apresenta projeto de hospedagens com status transparente"
git push origin portfolio-v2
```

Não executar merge em `main` sem revisar, e não publicar dados de clientes, código proprietário ou material sem direitos de uso.
