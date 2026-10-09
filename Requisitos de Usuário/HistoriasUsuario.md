# Histórias de Usuário

As histórias abaixo descrevem as necessidades das pessoas que visitam a exposição virtual **Vozes Negras e Indígenas**. Os critérios de aceitação são verificáveis e vinculados aos requisitos funcionais e não funcionais.

> Revisadas na Atividade 04 com apoio do OpenAI Codex e avaliação da equipe pelo método INVEST.

## US01 — Conhecer a proposta da exposição

**História:** Como visitante, eu quero conhecer a proposta da exposição virtual, para compreender seu objetivo e iniciar a exploração das trajetórias.

**Prioridade:** Alta  
**Story Points:** 3  
**Requisitos relacionados:** RF01, RF02; RNF01, RNF02, RNF07

### Critérios de aceitação

- [ ] A página inicial apresenta o nome e uma descrição da exposição.
- [ ] A quantidade de trajetórias é informada.
- [ ] O botão **Conhecer exposição** mantém o visitante na página e direciona para `#catalogo`.
- [ ] A seção da exposição aparece por transição de opacidade depois de entrar na área visível durante a rolagem.
- [ ] A seção permanece visível sem JavaScript, em caso de falha da animação e com movimento reduzido.

## US02 — Explorar as 20 trajetórias

**História:** Como visitante, eu quero visualizar os perfis de mulheres negras e indígenas, para escolher uma trajetória que desejo conhecer.

**Prioridade:** Alta  
**Story Points:** 8  
**Requisitos relacionados:** RF03; RNF01, RNF02, RNF04, RNF06

### Critérios de aceitação

- [ ] A exposição apresenta 20 perfis, sendo 10 de mulheres negras e 10 de mulheres indígenas.
- [ ] Cada perfil apresenta nome, categoria, imagem, resumo e estado de disponibilidade.
- [ ] Os dados exibidos em cada perfil pertencem à mesma mulher.
- [ ] Perfis ainda indisponíveis são identificados como planejados.
- [ ] Perfis disponíveis permitem acessar a trajetória correspondente.

## US03 — Acessar uma trajetória individual

**História:** Como visitante, eu quero acessar a página individual de uma mulher, para conhecer sua história e suas contribuições.

**Prioridade:** Alta  
**Story Points:** 5  
**Requisitos relacionados:** RF04; RNF01, RNF02, RNF03, RNF06

### Critérios de aceitação

- [ ] A trajetória pode ser aberta a partir do perfil correspondente na exposição.
- [ ] A página identifica claramente a mulher apresentada.
- [ ] A página contém destaque inicial, biografia, linha do tempo, legado, galeria, referências e trajetórias relacionadas.
- [ ] Cada seção possui título e identificador únicos.
- [ ] A navegação interna leva à seção selecionada.

## US04 — Visualizar o destaque da trajetória

**História:** Como visitante, eu quero visualizar um destaque inicial da mulher retratada, para reconhecer rapidamente sua identidade e relevância.

**Prioridade:** Média  
**Story Points:** 3  
**Requisitos relacionados:** RF05; RNF01, RNF02, RNF04, RNF06

### Critérios de aceitação

- [ ] O destaque apresenta imagem, citação, autoria e crédito associados à mesma mulher.
- [ ] A citação e sua autoria são sustentadas pelas referências do perfil.
- [ ] O texto permanece legível sobre ou ao lado da imagem nas larguras previstas.
- [ ] A imagem possui texto alternativo quando for informativa.

## US05 — Ler a biografia

**História:** Como visitante, eu quero ler a biografia da mulher apresentada, para compreender sua vida, seu contexto e sua atuação.

**Prioridade:** Alta  
**Story Points:** 5  
**Requisitos relacionados:** RF06; RNF01, RNF02, RNF06

### Critérios de aceitação

- [ ] A biografia é organizada em parágrafos e pode ser lida integralmente.
- [ ] Imagens informativas possuem texto alternativo.
- [ ] Legenda e crédito acompanham a imagem quando disponíveis.
- [ ] Não há texto cortado ou sobreposição em telas entre 320 px e 1920 px.

## US06 — Consultar a linha do tempo

**História:** Como visitante, eu quero consultar uma linha do tempo, para compreender os principais acontecimentos da trajetória em ordem cronológica.

**Prioridade:** Alta  
**Story Points:** 5  
**Requisitos relacionados:** RF07; RNF01, RNF02, RNF06

### Critérios de aceitação

- [ ] Os acontecimentos são apresentados em ordem cronológica.
- [ ] Cada acontecimento possui ano ou período e descrição.
- [ ] Novos eventos seguem a mesma estrutura dos eventos existentes.
- [ ] A linha do tempo permanece legível e navegável em computadores e dispositivos móveis.

## US07 — Conhecer o legado

**História:** Como visitante, eu quero conhecer o legado da mulher apresentada, para compreender seu impacto histórico, social, cultural ou educacional.

**Prioridade:** Média  
**Story Points:** 3  
**Requisitos relacionados:** RF08; RNF01, RNF02, RNF06

### Critérios de aceitação

- [ ] A página possui uma seção específica sobre legado.
- [ ] O conteúdo apresenta contribuições apoiadas nas referências da trajetória.
- [ ] O texto diferencia fatos biográficos das contribuições e impactos.
- [ ] A seção permanece clara e legível nas larguras previstas.

## US08 — Ampliar imagens da galeria

**História:** Como visitante, eu quero visualizar e ampliar fotografias e documentos, para complementar meu conhecimento sobre a trajetória apresentada.

**Prioridade:** Média  
**Story Points:** 5  
**Requisitos relacionados:** RF09; RNF01, RNF02, RNF03, RNF07

### Critérios de aceitação

- [ ] A galeria apresenta imagens com descrição, texto alternativo e crédito.
- [ ] Uma imagem selecionada é ampliada em um lightbox.
- [ ] O lightbox pode ser fechado pelo botão, pelo clique no fundo e pela tecla `Escape`.
- [ ] Enquanto o lightbox está aberto, a rolagem da página é bloqueada e restaurada após o fechamento.
- [ ] O controle de fechamento possui nome acessível e pode ser acionado por teclado.

## US09 — Consultar as fontes

**História:** Como visitante, eu quero consultar as fontes utilizadas na exposição, para verificar a origem e a confiabilidade das informações.

**Prioridade:** Alta  
**Story Points:** 3  
**Requisitos relacionados:** RF10; RNF02, RNF06, RNF08

### Critérios de aceitação

- [ ] Cada trajetória possui uma seção de referências.
- [ ] Cada referência apresenta título, instituição ou autoria, descrição e endereço eletrônico.
- [ ] Os links levam às fontes indicadas e utilizam HTTPS.
- [ ] Links abertos em nova aba usam `target="_blank"` e `rel="noopener noreferrer"`.

## US10 — Encontrar outras trajetórias

**História:** Como visitante, eu quero encontrar outras mulheres relacionadas, para continuar explorando a exposição.

**Prioridade:** Baixa  
**Story Points:** 3  
**Requisitos relacionados:** RF11; RNF01, RNF02, RNF06

### Critérios de aceitação

- [ ] A página individual apresenta uma seção de trajetórias relacionadas.
- [ ] Cada recomendação possui nome, imagem, crédito e resumo consistentes.
- [ ] O botão da recomendação abre a trajetória indicada.
- [ ] Conteúdos ainda indisponíveis são identificados sem oferecer um link quebrado.

## US11 — Navegar pelo conteúdo

**História:** Como visitante, eu quero navegar entre a página inicial, a exposição e as seções de cada trajetória, para encontrar o conteúdo desejado com rapidez.

**Prioridade:** Alta  
**Story Points:** 5  
**Requisitos relacionados:** RF12; RNF01, RNF02, RNF03, RNF07, RNF08

### Critérios de aceitação

- [ ] O logotipo leva à página inicial.
- [ ] A página atual é indicada com `aria-current="page"`.
- [ ] O menu funciona por teclado e em telas a partir de 320 px.
- [ ] Transições não interceptam links externos, downloads, âncoras nem cliques com teclas modificadoras.
- [ ] A navegação funciona normalmente quando a transição visual não está disponível.

## US12 — Usar a exposição em diferentes telas

**História:** Como visitante que utiliza celular, tablet ou computador, eu quero que o conteúdo se adapte à minha tela, para consultar a exposição sem perda de informação.

**Prioridade:** Alta

**Story Points:** 5

**Requisitos relacionados:** RF01–RF12; RNF01, RNF04

### Critérios de aceitação

- [ ] O conteúdo permanece utilizável nas larguras de 320 px, 768 px, 1024 px e 1440 px.
- [ ] Não há textos sobrepostos, conteúdo cortado nem rolagem horizontal não prevista.
- [ ] Links, botões, imagens e menus permanecem visíveis e utilizáveis.
- [ ] A mudança de largura não altera a ordem nem o significado do conteúdo.

## US13 — Navegar somente por teclado

**História:** Como visitante que não utiliza mouse, eu quero acessar todos os links e controles pelo teclado, para explorar a exposição com autonomia.

**Prioridade:** Alta

**Story Points:** 5

**Requisitos relacionados:** RF01, RF03, RF04, RF09, RF12; RNF02

### Critérios de aceitação

- [ ] Todos os links, botões e controles interativos recebem foco pelo teclado em ordem coerente.
- [ ] O elemento focado possui indicador visual perceptível.
- [ ] Links e botões podem ser acionados pelas teclas previstas para seu tipo de controle.
- [ ] O lightbox pode ser fechado pela tecla `Escape`, e o foco retorna ao elemento que o abriu.

## US14 — Compreender o conteúdo com leitor de tela

**História:** Como visitante que utiliza leitor de tela, eu quero receber nomes e descrições acessíveis, para compreender e navegar pelo conteúdo da exposição.

**Prioridade:** Alta

**Story Points:** 5

**Requisitos relacionados:** RF01–RF12; RNF02, RNF06

### Critérios de aceitação

- [ ] Títulos, regiões e seções seguem uma ordem lógica e identificável.
- [ ] Links, botões e controles possuem nomes acessíveis que descrevem sua finalidade.
- [ ] Imagens informativas possuem texto alternativo, e imagens decorativas são ignoradas.
- [ ] A página atual é identificada no menu sem depender somente de cor ou posição.

## US15 — Acessar o conteúdo sem animações obrigatórias

**História:** Como visitante sensível a movimento ou sem suporte aos recursos avançados do navegador, eu quero acessar o conteúdo sem depender de animações, para utilizar a exposição com conforto e confiabilidade.

**Prioridade:** Alta

**Story Points:** 3

**Requisitos relacionados:** RF02, RF09, RF12; RNF03, RNF07

### Critérios de aceitação

- [ ] Com `prefers-reduced-motion: reduce`, transições não essenciais são removidas.
- [ ] A seção da exposição permanece visível quando o movimento reduzido está ativo.
- [ ] Com JavaScript desativado, o conteúdo principal e os links continuam acessíveis.
- [ ] A navegação continua funcionando quando APIs visuais opcionais não são suportadas.

## Resumo de estimativas

| História | Story Points |
| --- | ---: |
| US01 | 3 |
| US02 | 8 |
| US03 | 5 |
| US04 | 3 |
| US05 | 5 |
| US06 | 5 |
| US07 | 3 |
| US08 | 5 |
| US09 | 3 |
| US10 | 3 |
| US11 | 5 |
| US12 | 5 |
| US13 | 5 |
| US14 | 5 |
| US15 | 3 |
| **Total** | **66** |
