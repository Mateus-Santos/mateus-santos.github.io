# Portfólio profissional — Mateus Santos

Site de apresentação de projetos e experiências em **Dados, BI, ETL, automação, integrações e desenvolvimento de software**.

**Endereço:** https://mateus-santos.github.io/

## Conteúdo

- Projetos: pipeline ETL corporativo, ERP SOS Mecânica / Jaime Automotivo, gestão pedagógica, ViagemOKBrasil e Forge automotivo.
- Estudos de caso de ETL e SOS Mecânica, com limites explícitos de acesso a dados e código corporativo.
- Trajetória profissional, formação, competências, referências e certificados da versão anterior.
- Contato via WhatsApp, e-mail e LinkedIn.

## Arquitetura do site

Site estático em HTML, CSS e JavaScript sem dependências de build. `index.html` é a página inicial; `cases/` contém estudos de caso; `assets/css/portfolio.css` e `assets/js/portfolio.js` contêm os recursos de estilo e interatividade. Os arquivos existentes em `assets/imgs/certificados/` são preservados no repositório original e referenciados pela galeria.

## Rodar localmente

```bash
python3 -m http.server 9000
```

Depois, abrir `http://localhost:9000`. Para verificar referências e conteúdo:

```bash
python3 tools/verificar_portfolio.py
```

## Publicação

O GitHub Pages publica o conteúdo da branch/pasta configurada. Faça o merge da branch de atualização apenas após conferir os links e se os arquivos de certificados existentes carregam corretamente. O pacote v2.1 **não apaga** arquivos antigos nem inclui os certificados; estes permanecem na árvore do repositório original.

## Confidencialidade

Não publicar bases corporativas, dados pessoais de clientes, credenciais ou código de terceiros. Resultados numéricos refletem informações declaradas no currículo, não auditoria externa. 

## Manutenção

- Confirmar nomenclaturas, períodos e indicadores antes de publicar alterações.
- Substituir ilustrações por capturas reais autorizadas sempre que possível.
- Adicionar demos somente com dados sintéticos e revisão de segurança.
- Rever referências e certificados com seus autores e documentos originais.
