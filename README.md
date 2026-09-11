# Nutrir — site institucional

Landing page em React + Vite, com CSS convencional e ícones Lucide. Todos os arquivos necessários estão incluídos. Requer Node.js 20.19+ ou 22+ e npm.

## Executar

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite. Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

A pasta `dist` contém a versão estática. Pode ser hospedada em um serviço de sites estáticos. Os caminhos consideram publicação na raiz do domínio.

## Estrutura

- `index.html`: título, descrição SEO, idioma, ícone e entrada do aplicativo.
- `src/main.jsx`: componentes, seções, menu mobile e interações.
- `src/data.js`: identidade, textos, navegação, serviços, etapas, diferenciais, equipe e contatos.
- `src/styles.css`: paleta, tipografia, layout, estados de foco e breakpoints.
- `public/images/`: logo original e foto do hero otimizada em WebP.
- `package.json` e `package-lock.json`: dependências e scripts.
- `dist/`: versão de produção já compilada.

## Onde editar

| Conteúdo | Local |
|---|---|
| Logo | `public/images/nutrir-logo.jpg` ou `identity.logo` em `src/data.js` |
| Foto do hero | `public/images/bovinos.webp` ou `identity.hero` |
| WhatsApp, e-mail, Instagram e endereço | Objeto `contacts` em `src/data.js` |
| Integrantes | Array `team`: `id`, `name`, `role`, `photo` |
| Serviços e detalhes expansíveis | Array `services` |
| Título e descrição do hero | Objeto `hero` |
| Quem somos e apresentação da equipe | Objeto `sectionText` |
| Processo e diferenciais | Arrays `process` e `differences` |
| Outros títulos e rótulos | `src/main.jsx` |
| Cores e responsividade | `src/styles.css` |
| SEO | `index.html` |

WhatsApp deve conter somente dígitos, com país e DDD. Instagram deve ser uma URL completa. Para fotos da equipe, coloque os arquivos em `public/images/` e use `/images/nome-do-arquivo.webp`. Cadastre quantos integrantes precisar: os quatro primeiros aparecem inicialmente e o botão expande os demais.

## Atualização com o portfólio

Fonte institucional: `portfolio.pdf`, fornecido pelo solicitante. Incorporados: atuação desde 2003; missão, visão e valores com revisão ortográfica; seis frentes de serviços; WhatsApp (14) 99886-7015; Instagram @ejnutrir; e-mail diretorianutrir@gmail.com. Nenhum procedimento clínico ou protocolo medicamentoso é instruído no site.

Equipe continua pendente de nomes, cargos e fotos reais. O portfólio cita LinkedIn como “Nutrir Empresa Júnior”, mas não fornece URL: esse canal aparece identificado e com link a preencher. Não foi inventado um endereço. Os contatos foram transcritos do portfólio; não foram enviados testes por mensagem.

## Imagem e licença

Foto atual: Andrey Câmara / Unsplash — imagem U-cc6ac5chg.
Página: https://unsplash.com/photos/white-cow-on-brown-field-during-daytime-U-cc6ac5chg
Fonte consultada: https://unsplash.com/s/photos/nelore
Arquivo: https://images.unsplash.com/photo-1608671071793-db93efcf33df
Licença: https://unsplash.com/license (consultada em 11/09/2026).
Uso comercial e não comercial permitido, sem obrigatoriedade de atribuição. A referência é mantida nesta documentação; não é necessária legenda de crédito na interface. A foto é ilustrativa, não representa propriedade ou cliente da Nutrir.

Limitação: mostra Nelore em curral, não animais comendo no cocho. Não foi confirmada uma alternativa de nelores no cocho com licença sem atribuição e arquivo acessível. A foto anterior veio da busca “cow feed” do Unsplash, arquivo photo-1771962152057-4c3015841488, mas a página individual e o autor não foram recuperados. Por isso, ela foi substituída nesta versão por uma imagem com origem rastreável.

## UX e acessibilidade

Menu mobile com estado expandido, fechamento por Escape e por seleção de seção; link para pular ao conteúdo; foco visível; títulos hierárquicos; textos alternativos; preferência de movimento reduzido; serviços em detalhes nativos. Processo horizontal no desktop e vertical no celular. Fotos futuras da equipe têm carregamento tardio. Hero é carregado com prioridade.

## Verificação

Compilação de produção com Vite. Não foi executado teste visual em navegador nesta entrega. Revisar os dados institucionais e os contatos reais antes da divulgação.

## Ícones

Sistema visual em `src/Icon.jsx`; estilos em `src/styles.css`. A seleção de cada serviço fica em `src/data.js`, propriedade `icon`.

Lucide React (`lucide-react`) já consta em `package.json` e no `package-lock.json`, que são os arquivos de dependências deste projeto JavaScript. Nenhuma biblioteca adicional foi necessária. `npm install` instala todas as dependências. Não há dependências Python nem necessidade de `requirements.txt`.

Símbolos: broto para solos e pastagens, escudo para manejo sanitário e reprodutivo, galpão para instalações, trigo para nutrição, calculadora para viabilidade econômica e gráfico para produção. Bases azuis discretas, espessura uniforme e dimensões adaptadas ao celular.
