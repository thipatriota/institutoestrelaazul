# Instituto Estrela Azul (Next.js)

Este repositório foi recriado a partir de um backup estático/minificado, para que o site volte a ter **código-fonte editável**.

## Rodar localmente

1. Instale dependências:
   - `npm install`
2. Rode o servidor:
   - `npm run dev`
3. Abra:
   - http://localhost:3000

## Estrutura

- Páginas: `src/app/*`
- Componentes: `src/components/*`
- Assets públicos: `public/*`
- Backup do export estático original: `static-backup/*`

## Deploy na Vercel

- Importe o repositório na Vercel e mantenha os padrões:
  - Build Command: `next build`
  - Output: padrão do Next.js

## Avaliações do Google na página de depoimentos

- Configure estas variáveis na Vercel (Project Settings → Environment Variables):
  - `GOOGLE_MAPS_API_KEY`
  - `GOOGLE_PLACE_ID` (opcional, recomendado)
  - `GOOGLE_PLACE_QUERY` (opcional)
