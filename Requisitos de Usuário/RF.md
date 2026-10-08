# Requisitos Funcionais

Este documento registra as funcionalidades da exposição virtual **Vozes Negras e Indígenas**. Os requisitos descrevem o que o sistema deverá fazer e mantêm a numeração adotada nas issues do projeto.

| ID | Descrição | Prioridade | Requisitos relacionados |
| --- | --- | --- | --- |
| **RF01** | O sistema deverá apresentar, na página inicial, o título da exposição, um texto introdutório, a quantidade de trajetórias e o botão **Conhecer exposição**, que direciona o visitante ao fragmento `#catalogo` sem abrir outra página ou aba. | Alta | RF02, RF03 |
| **RF02** | O sistema deverá revelar a seção da exposição com uma transição de opacidade quando ela entrar na área visível durante a rolagem, preservando todo o conteúdo existente. | Média | RF01, RF03 |
| **RF03** | O sistema deverá apresentar 20 perfis na exposição, sendo 10 de mulheres negras e 10 de mulheres indígenas. Cada perfil deverá exibir nome, categoria, imagem, resumo, estado de disponibilidade e acesso à trajetória correspondente quando disponível. | Alta | RF01, RF04 |
| **RF04** | O sistema deverá disponibilizar uma página individual para cada trajetória, organizada em destaque inicial, biografia, linha do tempo, legado, galeria, referências e trajetórias relacionadas. | Alta | RF03, RF05, RF06, RF07, RF08, RF09, RF10, RF11, RF12 |
| **RF05** | O sistema deverá apresentar, no início de cada trajetória, uma imagem de destaque, uma citação com autoria e o crédito da imagem. | Média | RF04, RF10 |
| **RF06** | O sistema deverá apresentar a biografia da mulher retratada em parágrafos, acompanhada de imagem, texto alternativo, legenda e crédito quando esses elementos estiverem disponíveis. | Alta | RF04, RF10 |
| **RF07** | O sistema deverá apresentar os principais acontecimentos da trajetória em ordem cronológica, com ano ou período e descrição para cada evento. | Alta | RF04 |
| **RF08** | O sistema deverá apresentar uma seção de legado que explique as contribuições e a relevância histórica, social, cultural ou educacional da mulher retratada. | Média | RF04, RF10 |
| **RF09** | O sistema deverá apresentar uma galeria responsiva e permitir ampliar suas imagens em um lightbox, que possa ser fechado por botão, clique no fundo ou tecla `Escape`. | Média | RF04, RF06 |
| **RF10** | O sistema deverá apresentar as fontes utilizadas em cada trajetória, identificando título, instituição ou autoria, descrição e endereço eletrônico. | Alta | RF04, RF05, RF06, RF07, RF08 |
| **RF11** | O sistema deverá recomendar outras mulheres da exposição por meio de cartões com nome, imagem, crédito, resumo e acesso à trajetória correspondente. | Baixa | RF03, RF04 |
| **RF12** | O sistema deverá manter uma navegação global padronizada entre a página inicial, a exposição e as seções das trajetórias, indicando a página atual e preservando o funcionamento de links externos, downloads, âncoras e cliques com teclas modificadoras. | Alta | RF01, RF03, RF04 |

## Regras complementares

- Identificadores de seções e páginas devem ser únicos.
- Nome, imagem, resumo, crédito e destino de cada perfil devem corresponder à mesma mulher.
- Links externos abertos em nova aba devem utilizar `target="_blank"` e `rel="noopener noreferrer"`.
- O lightbox deve bloquear a rolagem da página enquanto estiver aberto e restaurá-la ao ser fechado.
- Os recursos visuais e interativos devem atender também aos requisitos não funcionais documentados em [RNF.md](./RNF.md).
