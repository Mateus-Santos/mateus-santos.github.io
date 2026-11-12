# Atualização V2.6 — evidências e fatos confirmados

Base: V2.4 ou V2.5, na branch `portfolio-v2`. O ZIP inclui também os aprimoramentos de navegação da V2.5.

## Entregas
- Datas de Progresso Distribuidora/Bivolt e Instituto Mix corrigidas.
- Graduação na UNEX: conclusão em 2025, colação em 2026.
- Empresa Progresso/Bivolt consolidada como uma mesma relação profissional.
- Cargos em disputa substituídos por descrições de atuação, sem inventar títulos oficiais.
- ETL explicado a partir do fluxo real anterior: extração via API no Power BI, recargas e tratamento manual de Excel para vários relatórios. Números de tempo retirados até validação.
- Projeto renomeado HotelVagas (apenas nome; sem acesso público ou promessa de segurança concluída).
- Galeria com cinco capturas reais do SOS Mecânica, contendo censura opaca dos dados internos e pessoais. Os PNGs originais não são publicados.
- Mantidos WhatsApp, certificados, depoimentos, navegação mobile e alternância de tema.

## Pendências que o autor ainda deve confirmar
1. Cargo OFICIAL registrado em Progresso/Bivolt e Instituto Mix.
2. Se o intervalo de 4–6 h para 1–2 h na geração de conjuntos de relatórios era registrado/medido ou estimado. Sem essa resposta, não publicar o número.
3. Quarto depoimento: **enviar texto completo, autor e atribuição profissional**, além de eventual link de origem.
4. Nome e instituição de cada um dos 10 certificados.
5. Verificação de direitos autorais e condições contratuais antes de disponibilizar HotelVagas.
6. Aprovação visual das capturas redigidas, inclusive confirmação de que o mascaramento é suficiente.

## Publicação
1. `git switch portfolio-v2 && git pull --ff-only origin portfolio-v2`
2. `unzip -o ~/Downloads/portfolio_mateus_v2_6_atualizacao.zip -d .`
3. `python3 tools/verificar_portfolio.py && python3 tools/auditar_apresentacao.py && node --check assets/js/portfolio.js && git diff --check`
4. `python3 -m http.server 9000`, validar localmente.
5. `git add index.html README.md cases/ assets/css/portfolio.css assets/js/portfolio.js tools/auditar_apresentacao.py assets/imgs/portfolio/sos/ ATUALIZAR_V2_5.md RELATORIO_V2_5.md ATUALIZAR_V2_6.md`
6. `git diff --cached --check`, commit e push.
7. Criar PR para main, não trocar diretamente a branch sem revisar.

OBS: O pacote não contém arquivos de certificado. Eles já pertencem ao repositório. O verificador deve rodar dentro da cópia completa do Git.
