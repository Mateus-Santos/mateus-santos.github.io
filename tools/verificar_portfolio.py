#!/usr/bin/env python3
"""Validação de referências internas e estrutura mínima do portfólio, sem dependências externas."""
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[1]
HTML_FILES = [ROOT / 'index.html', *sorted((ROOT / 'cases').glob('*.html'))]

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
        self.ids = set()
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a:
            self.ids.add(a['id'])
        for attr in ('href', 'src'):
            if attr in a:
                self.refs.append((tag, attr, a[attr]))

errors = []
for file in HTML_FILES:
    if not file.is_file():
        errors.append(f'Falta {file.relative_to(ROOT)}')
        continue
    parser = LinkParser()
    parser.feed(file.read_text(encoding='utf-8'))
    for tag, attr, raw in parser.refs:
        url = urlparse(raw)
        if url.scheme or url.netloc or raw.startswith(('mailto:', 'tel:', 'data:', '//', 'javascript:')):
            continue
        if url.path:
            target = ((ROOT if url.path.startswith('/') else file.parent) / unquote(url.path.lstrip('/'))).resolve()
        else:
            target = file
        if not target.is_relative_to(ROOT):
            errors.append(f'{file.name}: referência fora do projeto: {raw}')
            continue
        if not target.is_file():
            errors.append(f'{file.relative_to(ROOT)}: {raw} → arquivo ausente')
            continue
        if url.fragment and target.suffix.lower() == '.html':
            other = LinkParser()
            other.feed(target.read_text(encoding='utf-8'))
            if unquote(url.fragment) not in other.ids:
                errors.append(f'{file.name}: âncora {raw} não existe')

if errors:
    print('FALHAS:\n' + '\n'.join(' - ' + error for error in errors), file=sys.stderr)
    sys.exit(1)
print(f'OK: {len(HTML_FILES)} páginas verificadas; links e arquivos internos encontrados.')
