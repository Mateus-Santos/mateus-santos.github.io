# Publicar o novo portfólio pelo WSL

## 1. Pré-requisitos

Git, Python 3 e `unzip` instalados no WSL. Tenha o repositório local `Mateus-Santos/mateus-santos.github.io` clonado e configurado com permissão de push.

Se ainda não tiver o repositório local:

```bash
mkdir -p ~/projetos
cd ~/projetos
git clone git@github.com:Mateus-Santos/mateus-santos.github.io.git
cd mateus-santos.github.io
```

Se você utiliza HTTPS em vez de SSH, use `https://github.com/Mateus-Santos/mateus-santos.github.io.git` e sua autenticação habitual.

## 2. Localize o ZIP

Se o arquivo foi salvo nos Downloads **dentro do WSL**, o caminho será semelhante a:

```bash
~/Downloads/portfolio_mateus_v2.zip
```

Se foi salvo nos Downloads do Windows, verifique:

```bash
ls /mnt/c/Users/*/Downloads/portfolio_mateus_v2.zip
```

Copie o arquivo para `~/Downloads`, usando o caminho real encontrado, por exemplo:

```bash
mkdir -p ~/Downloads
cp '/mnt/c/Users/SEU_USUARIO/Downloads/portfolio_mateus_v2.zip' ~/Downloads/
```

## 3. Atualize com segurança

Entre na pasta do repositório (ajuste se estiver em outro lugar):

```bash
cd ~/projetos/mateus-santos.github.io
```

Confira se há alterações ainda não salvas:

```bash
git status --short
```

Se houver alterações suas, faça commit delas ou `git stash` **antes** de prosseguir. Evite perder trabalho.

```bash
git pull --ff-only
# Salva um backup do HTML e da documentação existentes
BACKUP="../portfolio-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP"
cp -a index.html README.md "$BACKUP"/
# Cria branch para inspecionar antes de publicar
git switch -c portfolio-v2-$(date +%Y%m%d)
unzip -o ~/Downloads/portfolio_mateus_v2.zip -d .
python3 tools/verificar_portfolio.py
git diff --stat
git status --short
```

**Atenção:** o ZIP substitui `index.html` e `README.md` e acrescenta novos arquivos. Ele **não exclui** imagens, certificados, CSS antigos nem repositórios de projetos. O backup acima protege somente os dois arquivos que são substituídos; para uma cópia completa, duplique o repositório antes da instalação.

## 4. Pré-visualize

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000`. Teste o filtro de projetos, navegação mobile e links dos estudos de caso. Interrompa o servidor com `Ctrl+C`.

## 5. Commit e publicação

Depois de revisar o site:

```bash
git add index.html README.md DEPLOY_WSL.md assets/css/portfolio.css assets/js/portfolio.js cases tools/verificar_portfolio.py
git commit -m "feat(portfolio): moderniza pagina e documenta projetos"
git push -u origin "$(git branch --show-current)"
```

Crie um Pull Request da branch para `main` em https://github.com/Mateus-Santos/mateus-santos.github.io/pulls e revise as mudanças antes do merge. Se GitHub Pages estiver configurado para publicar a partir de `main`, o site será atualizado após a fusão e o processamento do Pages.

### Se houver conflito de branch

Se a branch `portfolio-v2-AAAAmmdd` já existir, escolha outra, por exemplo `portfolio-v2-revisao2`. Não force push para `main`.

### Problemas comuns

- `Permission denied (publickey)`: sua chave SSH não está associada ao GitHub; use HTTPS ou configure sua chave.
- `unzip: command not found`: `sudo apt install unzip`.
- `git pull --ff-only` falhou: pare e inspecione o histórico; não faça `git reset --hard`.
- O Pages ainda mostra a página antiga: confira branch de publicação em Settings → Pages e a execução de deploy no GitHub.
