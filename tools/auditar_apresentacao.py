#!/usr/bin/env python3
"""Checagens estáticas de qualidade (não equivale a auditoria WCAG)."""
from html.parser import HTMLParser
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
FILES = [ROOT / 'index.html', *sorted((ROOT / 'cases').glob('*.html'))]

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.main_count = 0
        self.h1_count = 0
        self.has_lang = False
        self.has_title = False
        self.has_desc = False
        self.has_viewport = False
        self.has_toggle = False
        self.has_script = False
        self.has_nav_id = False
        self.has_menu = False
    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if data.get('id'):
            self.ids.append(data['id'])
        if tag == 'html' and data.get('lang') == 'pt-BR':
            self.has_lang = True
        if tag == 'main':
            self.main_count += 1
        if tag == 'h1':
            self.h1_count += 1
        if tag == 'title':
            self.has_title = True
        if tag == 'meta' and data.get('name') == 'description':
            self.has_desc = bool(data.get('content'))
        if tag == 'meta' and data.get('name') == 'viewport':
            self.has_viewport = True
        if tag == 'button' and 'data-theme-toggle' in data:
            self.has_toggle = True
        if tag == 'button' and 'menu-toggle' in data.get('class',''):
            self.has_menu = data.get('aria-controls') == 'site-nav'
        if tag == 'script' and 'portfolio.js' in data.get('src',''):
            self.has_script = True
        if tag == 'nav' and data.get('id') == 'site-nav':
            self.has_nav_id = True

errors = []
for file in FILES:
    data = Document()
    data.feed(file.read_text(encoding='utf-8'))
    checks = {
        'lang pt-BR': data.has_lang,
        'meta description': data.has_desc,
        'meta viewport': data.has_viewport,
        'title': data.has_title,
        'um main': data.main_count == 1,
        'um h1': data.h1_count == 1,
        'IDs sem duplicação': len(data.ids) == len(set(data.ids)),
        'alternância de tema': data.has_toggle,
        'script de interatividade': data.has_script,
        'menu responsivo': data.has_menu and data.has_nav_id,
    }
    for item, passed in checks.items():
        if not passed:
            errors.append(f'{file.relative_to(ROOT)}: {item}')
if errors:
    print('REPROVADO:\n- ' + '\n- '.join(errors), file=sys.stderr)
    sys.exit(1)
print(f'APROVADO: {len(FILES)} páginas, 10 verificações estáticas por página.')
print('NÃO TESTADO: conformidade WCAG completa, segurança de aplicações externas, métricas reais de desempenho.')
