
# 1. História de Usuário

A Tabela 3 a seguir contém as Histórias de Usuárias elicitadas. 

<table>
    <thead>
        <tr style="background-color: purple; color: white" >
            <th style="border-style:solid;border-width:1px;text-align:center">ID</th>
            <th style="border-style:solid;border-width:1px;text-align:center">História de Usuário</th>
            <th style="border-style:solid;border-width:1px;text-align:center">Critérios de aceitação</th>
            <th style="border-style:solid;border-width:1px;text-align:center">Prioridade</th>
            <th style="border-style:solid;border-width:1px;text-align:center">RF/RNF relacionado</th>
            <th style="border-style:solid;border-width:1px;text-align:center">Story Points</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US01</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero conhecer a proposta da exposição virtual, para compreender seu objetivo e iniciar a exploração das trajetórias.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A página inicial apresenta o nome e uma descrição da exposição.</li><li>A quantidade de trajetórias é informada.</li><li>O botão **Conhecer exposição** mantém o visitante na página e direciona para `#catalogo`.</li><li>A seção da exposição aparece por transição de opacidade depois de entrar na área visível durante a rolagem.</li><li>A seção permanece visível sem JavaScript, em caso de falha da animação e com movimento reduzido.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF01, RF02; RNF01, RNF02, RNF07</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US02</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero visualizar os perfis de mulheres negras e indígenas, para escolher uma trajetória que desejo conhecer.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A exposição apresenta 20 perfis, sendo 10 de mulheres negras e 10 de mulheres indígenas.</li><li>Cada perfil apresenta nome, categoria, imagem, resumo e estado de disponibilidade.</li><li>Os dados exibidos em cada perfil pertencem à mesma mulher.</li><li>Perfis ainda indisponíveis são identificados como planejados.</li><li>Perfis disponíveis permitem acessar a trajetória correspondente.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF03; RNF01, RNF02, RNF04, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US03</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero acessar a página individual de uma mulher, para conhecer sua história e suas contribuições.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A trajetória pode ser aberta a partir do perfil correspondente na exposição.</li><li>A página identifica claramente a mulher apresentada.</li><li>A página contém destaque inicial, biografia, linha do tempo, legado, galeria, referências e trajetórias relacionadas.</li><li>Cada seção possui título e identificador únicos.</li><li>A navegação interna leva à seção selecionada.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF04; RNF01, RNF02, RNF03, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US04</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero visualizar um destaque inicial da mulher retratada, para reconhecer rapidamente sua identidade e relevância.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>O destaque apresenta imagem, citação, autoria e crédito associados à mesma mulher.</li><li>A citação e sua autoria são sustentadas pelas referências do perfil.</li><li>O texto permanece legível sobre ou ao lado da imagem nas larguras previstas.</li><li>A imagem possui texto alternativo quando for informativa.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF05; RNF01, RNF02, RNF04, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US05</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero ler a biografia da mulher apresentada, para compreender sua vida, seu contexto e sua atuação.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A biografia é organizada em parágrafos e pode ser lida integralmente.</li><li>Imagens informativas possuem texto alternativo.</li><li>Legenda e crédito acompanham a imagem quando disponíveis.</li><li>Não há texto cortado ou sobreposição em telas entre 320 px e 1920 px.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF06; RNF01, RNF02, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US06</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero consultar uma linha do tempo, para compreender os principais acontecimentos da trajetória em ordem cronológica.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>Os acontecimentos são apresentados em ordem cronológica.</li><li>Cada acontecimento possui ano ou período e descrição.</li><li>Novos eventos seguem a mesma estrutura dos eventos existentes.</li><li>A linha do tempo permanece legível e navegável em computadores e dispositivos móveis.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF07; RNF01, RNF02, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US07</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero conhecer o legado da mulher apresentada, para compreender seu impacto histórico, social, cultural ou educacional.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A página possui uma seção específica sobre legado.</li><li>O conteúdo apresenta contribuições apoiadas nas referências da trajetória.</li><li>O texto diferencia fatos biográficos das contribuições e impactos.</li><li>A seção permanece clara e legível nas larguras previstas.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF08; RNF01, RNF02, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US08</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero visualizar e ampliar fotografias e documentos, para complementar meu conhecimento sobre a trajetória apresentada.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A galeria apresenta imagens com descrição, texto alternativo e crédito.</li><li>Uma imagem selecionada é ampliada em um lightbox.</li><li>O lightbox pode ser fechado pelo botão, pelo clique no fundo e pela tecla `Escape`.</li><li>Enquanto o lightbox está aberto, a rolagem da página é bloqueada e restaurada após o fechamento.</li><li>O controle de fechamento possui nome acessível e pode ser acionado por teclado.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF09; RNF01, RNF02, RNF03, RNF07</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US09</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero consultar as fontes utilizadas na exposição, para verificar a origem e a confiabilidade das informações.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>Cada trajetória possui uma seção de referências.</li><li>Cada referência apresenta título, instituição ou autoria, descrição e endereço eletrônico.</li><li>Os links levam às fontes indicadas e utilizam HTTPS.</li><li>Links abertos em nova aba usam `target="_blank"` e `rel="noopener noreferrer"`.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF10; RNF02, RNF06, RNF08</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US10</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero encontrar outras mulheres relacionadas, para continuar explorando a exposição.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A página individual apresenta uma seção de trajetórias relacionadas.</li><li>Cada recomendação possui nome, imagem, crédito e resumo consistentes.</li><li>O botão da recomendação abre a trajetória indicada.</li><li>Conteúdos ainda indisponíveis são identificados sem oferecer um link quebrado.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Baixa</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF11; RNF01, RNF02, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US11</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero navegar entre a página inicial, a exposição e as seções de cada trajetória, para encontrar o conteúdo desejado com rapidez.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>O logotipo leva à página inicial.</li><li>A página atual é indicada com `aria-current="page"`.</li><li>O menu funciona por teclado e em telas a partir de 320 px.</li><li>Transições não interceptam links externos, downloads, âncoras nem cliques com teclas modificadoras.</li><li>A navegação funciona normalmente quando a transição visual não está disponível.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF12; RNF01, RNF02, RNF03, RNF07, RNF08</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US12</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante que utiliza celular, tablet ou computador, eu quero que o conteúdo se adapte à minha tela, para consultar a exposição sem perda de informação.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>O conteúdo permanece utilizável nas larguras de 320 px, 768 px, 1024 px e 1440 px.</li><li>Não há textos sobrepostos, conteúdo cortado nem rolagem horizontal não prevista.</li><li>Links, botões, imagens e menus permanecem visíveis e utilizáveis.</li><li>A mudança de largura não altera a ordem nem o significado do conteúdo.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF01–RF12; RNF01, RNF04</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US13</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante que não utiliza mouse, eu quero acessar todos os links e controles pelo teclado, para explorar a exposição com autonomia.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>Todos os links, botões e controles interativos recebem foco pelo teclado em ordem coerente.</li><li>O elemento focado possui indicador visual perceptível.</li><li>Links e botões podem ser acionados pelas teclas previstas para seu tipo de controle.</li><li>O lightbox pode ser fechado pela tecla `Escape`, e o foco retorna ao elemento que o abriu.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF01, RF03, RF04, RF09, RF12; RNF02</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US14</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante que utiliza leitor de tela, eu quero receber nomes e descrições acessíveis, para compreender e navegar pelo conteúdo da exposição.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>Títulos, regiões e seções seguem uma ordem lógica e identificável.</li><li>Links, botões e controles possuem nomes acessíveis que descrevem sua finalidade.</li><li>Imagens informativas possuem texto alternativo, e imagens decorativas são ignoradas.</li><li>A página atual é identificada no menu sem depender somente de cor ou posição.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF01–RF12; RNF02, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US15</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante sensível a movimento ou sem suporte aos recursos avançados do navegador, eu quero acessar o conteúdo sem depender de animações, para utilizar a exposição com conforto e confiabilidade.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>Com `prefers-reduced-motion: reduce`, transições não essenciais são removidas.</li><li>A seção da exposição permanece visível quando o movimento reduzido está ativo.</li><li>Com JavaScript desativado, o conteúdo principal e os links continuam acessíveis.</li><li>A navegação continua funcionando quando APIs visuais opcionais não são suportadas.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF02, RF09, RF12; RNF03, RNF07</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
        </tr>
    </tbody>
</table>

<div style="text-align: center">
<p>Tabela 3: História de Usuário</p>
</div>

## 5. Referências bibliográficas
