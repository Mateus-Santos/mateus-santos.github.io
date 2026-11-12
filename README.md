# Portfólio profissional — Mateus Santos

Site de apresentação de projetos e experiências em **Dados, BI, ETL, automação, integrações e desenvolvimento de software**.

**Endereço:** https://mateus-santos.github.io/

## Conteúdo

- Projetos: pipeline ETL corporativo, ERP SOS Mecânica / Jaime Automotivo, gestão pedagógica, plataforma de hospedagens (antigo ViagemOKBrasil, nome em revisão) e Forge automotivo.
- Estudos de caso de ETL, SOS Mecânica, gestão pedagógica e plataforma de hospedagens, com limites explícitos de confidencialidade e demonstração.
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

O GitHub Pages publica o conteúdo da branch/pasta configurada. Faça o merge da branch de atualização apenas após conferir os links e se os arquivos de certificados existentes carregam corretamente. O pacote v2.3 **não apaga** arquivos antigos nem inclui os certificados; estes permanecem na árvore do repositório original.

## Confidencialidade

Não publicar bases corporativas, dados pessoais de clientes, credenciais ou código de terceiros. Resultados numéricos refletem informações declaradas no currículo, não auditoria externa.

## Manutenção

- Confirmar nomenclaturas, períodos e indicadores antes de publicar alterações.
- Substituir ilustrações por capturas reais autorizadas sempre que possível.
- Adicionar demos somente com dados sintéticos e revisão de segurança.
- Rever referências e certificados com seus autores e documentos originais.

## Atualização v2.3 — projeto de hospedagens

- O projeto antes conhecido como **ViagemOKBrasil** aparece publicamente como **Plataforma de hospedagens** até escolha do novo nome.
- Natureza: **software desenvolvido sob encomenda**, conforme declaração do autor. Não apresentar como produto implantado pelo cliente.
- A publicação não menciona problemas comerciais nem afirma que existe uma demonstração disponível.
- Segurança, dados fictícios e direitos de publicação devem ser verificados antes de publicar acesso ao sistema ou código da aplicação.
- A página `cases/plataforma-hospedagens.html` distingue funcionalidades descritas em currículo antigo de implementação auditada. Quando houver código revisado, atualizar as evidências.
- Mantidos WhatsApp, referências, certificados e monograma centralizado da v2.2.

## Atualização V2.5 — experiência e acessibilidade

- Navegação responsiva consistente nas páginas dos estudos de caso.
- Controle de alternância entre os temas escuro/claro em todas as páginas; preferência local no navegador.
- Ajustes em telas menores e tratamento de preferência por movimento reduzido.
- Sem alteração de fatos profissionais, datas, métricas ou direitos de publicação.
- A auditoria automática verifica estrutura local, mas não certifica conformidade integral às WCAG ou Core Web Vitals.
