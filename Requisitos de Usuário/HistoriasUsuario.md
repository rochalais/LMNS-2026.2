# Histórias de Usuário

As histórias abaixo descrevem as necessidades das pessoas que visitam a exposição virtual **Vozes Negras e Indígenas**. Os critérios de aceitação são verificáveis e vinculados aos requisitos funcionais e não funcionais.

## US01 — Conhecer a proposta da exposição

**História:** Como visitante, quero conhecer a proposta da exposição virtual, para compreender seu objetivo e iniciar a exploração das trajetórias.

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

**História:** Como visitante, quero visualizar os perfis de mulheres negras e indígenas, para escolher uma trajetória que desejo conhecer.

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

**História:** Como visitante, quero acessar a página individual de uma mulher, para conhecer sua história e suas contribuições.

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

**História:** Como visitante, quero visualizar um destaque inicial da mulher retratada, para reconhecer rapidamente sua identidade e relevância.

**Prioridade:** Média  
**Story Points:** 3  
**Requisitos relacionados:** RF05; RNF01, RNF02, RNF04, RNF06

### Critérios de aceitação

- [ ] O destaque apresenta imagem, citação, autoria e crédito associados à mesma mulher.
- [ ] A citação e sua autoria são sustentadas pelas referências do perfil.
- [ ] O texto permanece legível sobre ou ao lado da imagem nas larguras previstas.
- [ ] A imagem possui texto alternativo quando for informativa.

## US05 — Ler a biografia

**História:** Como visitante, quero ler a biografia da mulher apresentada, para compreender sua vida, seu contexto e sua atuação.

**Prioridade:** Alta  
**Story Points:** 5  
**Requisitos relacionados:** RF06; RNF01, RNF02, RNF06

### Critérios de aceitação

- [ ] A biografia é organizada em parágrafos e pode ser lida integralmente.
- [ ] Imagens informativas possuem texto alternativo.
- [ ] Legenda e crédito acompanham a imagem quando disponíveis.
- [ ] Não há texto cortado ou sobreposição em telas entre 320 px e 1920 px.

## US06 — Consultar a linha do tempo

**História:** Como visitante, quero consultar uma linha do tempo, para compreender os principais acontecimentos da trajetória em ordem cronológica.

**Prioridade:** Alta  
**Story Points:** 5  
**Requisitos relacionados:** RF07; RNF01, RNF02, RNF06

### Critérios de aceitação

- [ ] Os acontecimentos são apresentados em ordem cronológica.
- [ ] Cada acontecimento possui ano ou período e descrição.
- [ ] Novos eventos seguem a mesma estrutura dos eventos existentes.
- [ ] A linha do tempo permanece legível e navegável em computadores e dispositivos móveis.

## US07 — Conhecer o legado

**História:** Como visitante, quero conhecer o legado da mulher apresentada, para compreender seu impacto histórico, social, cultural ou educacional.

**Prioridade:** Média  
**Story Points:** 3  
**Requisitos relacionados:** RF08; RNF01, RNF02, RNF06

### Critérios de aceitação

- [ ] A página possui uma seção específica sobre legado.
- [ ] O conteúdo apresenta contribuições apoiadas nas referências da trajetória.
- [ ] O texto diferencia fatos biográficos das contribuições e impactos.
- [ ] A seção permanece clara e legível nas larguras previstas.

## US08 — Ampliar imagens da galeria

**História:** Como visitante, quero visualizar e ampliar fotografias e documentos, para complementar meu conhecimento sobre a trajetória apresentada.

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

**História:** Como visitante, quero consultar as fontes utilizadas na exposição, para verificar a origem e a confiabilidade das informações.

**Prioridade:** Alta  
**Story Points:** 3  
**Requisitos relacionados:** RF10; RNF02, RNF06, RNF08

### Critérios de aceitação

- [ ] Cada trajetória possui uma seção de referências.
- [ ] Cada referência apresenta título, instituição ou autoria, descrição e endereço eletrônico.
- [ ] Os links levam às fontes indicadas e utilizam HTTPS.
- [ ] Links abertos em nova aba usam `target="_blank"` e `rel="noopener noreferrer"`.

## US10 — Encontrar outras trajetórias

**História:** Como visitante, quero encontrar outras mulheres relacionadas, para continuar explorando a exposição.

**Prioridade:** Baixa  
**Story Points:** 3  
**Requisitos relacionados:** RF11; RNF01, RNF02, RNF06

### Critérios de aceitação

- [ ] A página individual apresenta uma seção de trajetórias relacionadas.
- [ ] Cada recomendação possui nome, imagem, crédito e resumo consistentes.
- [ ] O botão da recomendação abre a trajetória indicada.
- [ ] Conteúdos ainda indisponíveis são identificados sem oferecer um link quebrado.

## US11 — Navegar pelo conteúdo

**História:** Como visitante, quero navegar entre a página inicial, a exposição e as seções de cada trajetória, para encontrar o conteúdo desejado com rapidez.

**Prioridade:** Alta  
**Story Points:** 5  
**Requisitos relacionados:** RF12; RNF01, RNF02, RNF03, RNF07, RNF08

### Critérios de aceitação

- [ ] O logotipo leva à página inicial.
- [ ] A página atual é indicada com `aria-current="page"`.
- [ ] O menu funciona por teclado e em telas a partir de 320 px.
- [ ] Transições não interceptam links externos, downloads, âncoras nem cliques com teclas modificadoras.
- [ ] A navegação funciona normalmente quando a transição visual não está disponível.

## US12 — Acessar a exposição com diferentes recursos

**História:** Como visitante que utiliza diferentes dispositivos ou tecnologias assistivas, quero acessar a exposição com facilidade, para aproveitar todo o conteúdo.

**Prioridade:** Alta  
**Story Points:** 8  
**Requisitos relacionados:** RF01–RF12; RNF01–RNF08

### Critérios de aceitação

- [ ] O conteúdo se adapta a celulares, tablets e computadores sem perda de informação.
- [ ] Todas as ações essenciais podem ser concluídas somente por teclado.
- [ ] O foco do elemento ativo é visível.
- [ ] Imagens informativas possuem texto alternativo e elementos decorativos são ignorados por leitores de tela.
- [ ] Textos e controles atendem aos contrastes definidos no RNF02.
- [ ] Movimento reduzido é respeitado e nenhum conteúdo depende de animação ou JavaScript para permanecer acessível.

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
| US12 | 8 |
| **Total** | **56** |
