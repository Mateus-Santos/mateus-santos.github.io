# Portfólio profissional — Mateus Santos

Site de apresentação de projetos e experiências em **Dados, BI, ETL, automação, integrações e desenvolvimento de software**.

**Endereço:** https://mateus-santos.github.io/

## Conteúdo

- Projetos: pipeline ETL corporativo, ERP SOS Mecânica / Jaime Automotivo, gestão pedagógica, HotelVagas (antigo ViagemOKBrasil, demonstração em preparação) e Forge automotivo.
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

## Atualização v2.6 — fatos e imagens

- Experiência Progresso Distribuidora / Bivolt: **05/05/2025–13/07/2026**, nomes da mesma relação profissional. Cargo informado: **Analista de Dados Comercial**; também havia apoio à conferência de pedidos para faturamento.
- Experiência Instituto Mix: **05/07/2024–15/04/2025**. Vínculo CLT iniciado como **Monitor de Informática**, com atuação como **Assessor Pedagógico** nos dois meses finais. Percentual de melhoria ainda não confirmado.
- Graduação UNEX: conclusão acadêmica em **2025**; colação e documentação em **2026**.
- ETL: cenário anterior exigia extração via API durante as atualizações do Power BI e tratamento manual de planilhas Excel pesadas. Resultado relativo à preparação de **um conjunto de relatórios**. Não publicar tempo ou percentual de melhoria até confirmação da natureza dos números.
- Nome definido: **HotelVagas**. Publicação de demonstração e código depende de segurança e direitos de uso.
- Capturas reais do SOS incluídas somente depois de mascarar valores, nomes, placas, códigos e registros. Os originais **não** integram o repositório nem o pacote distribuído.
- Depoimentos antigos autorizados, segundo o autor. **Quarto depoimento recebido de Naiane de Jesus Souza**, Orientadora Comercial do Instituto Mix de Profissões; texto mantido literalmente conforme o formulário. Certificados continuam precisando de identificação individual.

## Atualização de fatos e referências (13/11/2026)
- A experiência comercial do período de 05/05/2025 a 13/07/2026 teve o título informado de **Analista de Dados Comercial**.
- No Instituto Mix (05/07/2024 a 15/04/2025), a atividade CLT incluiu Monitor de Informática e, nos últimos dois meses, Assessor Pedagógico.
- O quarto depoimento profissional foi acrescentado sem publicação do PDF original. O formulário exportado contém um endereço privado de resposta e não deve ser colocado neste repositório.
- O cartão Forge descreve apenas a integração Laravel documentada em arquivos públicos. O extrator Forge de origem ainda depende de inspeção separada.
