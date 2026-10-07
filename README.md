# Vozes Negras e Indígenas

Exposição virtual dedicada a apresentar trajetórias de mulheres negras e indígenas que marcaram a história, a cultura, a resistência e a memória coletiva.

O projeto possui uma página inicial com o catálogo da exposição e páginas de trajetória com biografia, linha do tempo, legados, galeria de imagens e referências.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Histórias de usuário

A Tabela 3 apresenta as histórias de usuário elicitadas para o desenvolvimento da exposição virtual.

### Tabela 3 – Histórias de usuário

| ID | História de usuário | Critérios de aceitação | Prioridade | RF/RNF relacionado | Story Points |
| --- | --- | --- | --- | --- | ---: |
| **US01** | Eu, como visitante, quero conhecer a proposta da exposição virtual para compreender seu objetivo e sua importância. | 1. A página inicial deve apresentar o nome e uma breve descrição da exposição.<br>2. Deve ser informada a quantidade de trajetórias disponíveis ou planejadas.<br>3. Deve existir um botão que direcione o visitante ao catálogo. | Alta | RF01 | 3 |
| **US02** | Eu, como visitante, quero visualizar o catálogo de mulheres negras e indígenas para escolher uma trajetória que desejo conhecer. | 1. O catálogo deve apresentar as mulheres em formato de cartões.<br>2. Cada cartão deve exibir imagem, nome e uma breve descrição.<br>3. Trajetórias ainda não disponíveis devem ser identificadas como planejadas.<br>4. Os cartões disponíveis devem permitir o acesso à respectiva trajetória. | Alta | RF02 | 5 |
| **US03** | Eu, como visitante, quero acessar a página individual de uma mulher para conhecer sua história e suas contribuições. | 1. A página deve identificar claramente a mulher apresentada.<br>2. Deve ser exibida uma frase ou informação de destaque relacionada à sua trajetória.<br>3. A página deve apresentar biografia, imagem e créditos das informações utilizadas.<br>4. O acesso deve ser possível pelo botão ou pelo cartão do catálogo. | Alta | RF03, RF04 | 8 |
| **US04** | Eu, como visitante, quero consultar uma linha do tempo para compreender os principais acontecimentos da trajetória da mulher apresentada. | 1. Os acontecimentos devem ser apresentados em ordem cronológica.<br>2. Cada acontecimento deve possuir uma data ou período e uma descrição.<br>3. A linha do tempo deve permanecer legível em computadores e dispositivos móveis. | Alta | RF05 | 5 |
| **US05** | Eu, como visitante, quero conhecer os legados da mulher apresentada para compreender seu impacto histórico, cultural e social. | 1. A página deve possuir uma seção específica sobre os legados.<br>2. O conteúdo deve destacar as principais contribuições da personalidade.<br>3. O texto deve ser organizado de forma clara e legível. | Média | RF06 | 3 |
| **US06** | Eu, como visitante, quero navegar diretamente entre as seções da trajetória para encontrar rapidamente o conteúdo desejado. | 1. Deve existir um menu com links para biografia, linha do tempo, legados, galeria e referências.<br>2. Ao selecionar uma opção, o visitante deve ser direcionado à seção correspondente.<br>3. O menu deve continuar utilizável em telas menores. | Média | RF07 | 3 |
| **US07** | Eu, como visitante, quero visualizar fotografias e documentos históricos para complementar meu conhecimento sobre a trajetória apresentada. | 1. A galeria deve exibir imagens acompanhadas de descrição e crédito.<br>2. Ao selecionar uma imagem, ela deve ser apresentada em tamanho ampliado.<br>3. A imagem ampliada deve poder ser fechada pelo botão, pela tecla `Esc` ou pelo clique fora da imagem.<br>4. O texto alternativo deve ser mantido na visualização ampliada. | Média | RF08 | 5 |
| **US08** | Eu, como visitante, quero consultar as fontes utilizadas na exposição para verificar a confiabilidade das informações. | 1. A página deve apresentar uma seção de referências.<br>2. Cada referência deve possuir título, descrição e endereço eletrônico.<br>3. Os links externos devem abrir em uma nova aba.<br>4. Os links devem utilizar configurações seguras para páginas externas. | Alta | RF09 | 3 |
| **US09** | Eu, como visitante, quero encontrar outras mulheres relacionadas para continuar explorando a exposição. | 1. A página da trajetória deve apresentar uma seção com outras mulheres.<br>2. Cada indicação deve possuir nome, imagem e breve descrição.<br>3. Quando a trajetória estiver disponível, deve existir um link para acessá-la.<br>4. Conteúdos indisponíveis devem ser identificados adequadamente. | Baixa | RF10 | 3 |
| **US10** | Eu, como visitante que utiliza diferentes dispositivos ou recursos assistivos, quero acessar a exposição com facilidade para aproveitar todo o conteúdo. | 1. O site deve adaptar seu conteúdo a celulares, tablets e computadores.<br>2. Imagens informativas devem possuir textos alternativos.<br>3. Os elementos interativos devem ser acessíveis por teclado.<br>4. O foco dos elementos selecionados deve estar visualmente evidente.<br>5. As animações devem respeitar a preferência por movimento reduzido. | Alta | RNF01, RNF02, RNF03 | 8 |

**Total estimado: 46 Story Points.**

## Requisitos relacionados

| ID | Tipo | Descrição |
| --- | --- | --- |
| RF01 | Funcional | Apresentar a página inicial da exposição. |
| RF02 | Funcional | Disponibilizar o catálogo de mulheres. |
| RF03 | Funcional | Permitir o acesso às trajetórias individuais. |
| RF04 | Funcional | Apresentar a biografia da personalidade. |
| RF05 | Funcional | Apresentar os acontecimentos em uma linha do tempo. |
| RF06 | Funcional | Apresentar os legados e as contribuições. |
| RF07 | Funcional | Permitir a navegação entre as seções da trajetória. |
| RF08 | Funcional | Disponibilizar uma galeria de imagens ampliável. |
| RF09 | Funcional | Disponibilizar referências e fontes externas. |
| RF10 | Funcional | Recomendar outras trajetórias da exposição. |
| RNF01 | Não funcional | Garantir responsividade. |
| RNF02 | Não funcional | Garantir acessibilidade. |
| RNF03 | Não funcional | Garantir usabilidade e transições visuais adequadas. |
