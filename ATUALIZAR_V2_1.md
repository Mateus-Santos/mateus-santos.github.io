# Aplicar o ajuste v2.1 ao portfólio V2

Pacote incremental: cabeçalho sem o monograma “M.”, WhatsApp, depoimentos, certificados, textos revisados e favicon funcional.

1. Estar no repositório `~/projetos/mateus-santos.github.io`, na branch `portfolio-v2` criada anteriormente.
2. Conferir `git status --short` e preservar outras alterações, caso existam.
3. Aplicar o ZIP incremental pela raiz do repositório; o ZIP contém apenas arquivos alterados e o novo SVG:

```bash
unzip -o ~/Downloads/portfolio_mateus_v2_1_ajustes.zip -d .
python3 tools/verificar_portfolio.py
python3 -m http.server 9000
```

4. Abrir `http://localhost:9000`, verificar o WhatsApp, o cabeçalho, as três referências e expandir a galeria dos certificados. Se as imagens não aparecerem, verificar a presença de `assets/imgs/certificados/{1..10}.jpg` na cópia local. A galeria depende das imagens preexistentes.
5. Depois de revisar, preparar commit na branch:

```bash
git add index.html README.md DEPLOY_WSL.md ATUALIZAR_V2_1.md cases/ assets/css/portfolio.css assets/js/portfolio.js assets/imgs/icons/portfolio-icon.svg tools/verificar_portfolio.py
git diff --cached --check
git commit -m "fix: restaura contato e referencias do portfolio"
git push -u origin portfolio-v2
```

Não publicar diretamente em `main` sem revisar. Este pacote não modifica o Docker nem o sistema SOS Mecânica.
