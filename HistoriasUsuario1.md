
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
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">3</td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US02</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero visualizar os perfis de mulheres negras e indígenas, para escolher uma trajetória que desejo conhecer.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A exposição apresenta 20 perfis, sendo 10 de mulheres negras e 10 de mulheres indígenas.</li><li>Cada perfil apresenta nome, categoria, imagem, resumo e estado de disponibilidade.</li><li>Os dados exibidos em cada perfil pertencem à mesma mulher.</li><li>Perfis ainda indisponíveis são identificados como planejados.</li><li>Perfis disponíveis permitem acessar a trajetória correspondente.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF03; RNF01, RNF02, RNF04, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">13</td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US03</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero acessar a página individual de uma mulher, para conhecer sua história e suas contribuições.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A trajetória pode ser aberta a partir do perfil correspondente na exposição.</li><li>A página identifica claramente a mulher apresentada.</li><li>A página contém destaque inicial, biografia, linha do tempo, legado, galeria, referências e trajetórias relacionadas.</li><li>Cada seção possui título e identificador únicos.</li><li>A navegação interna leva à seção selecionada.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF04; RNF01, RNF02, RNF03, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">8</td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US04</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero visualizar um destaque inicial da mulher retratada, para reconhecer rapidamente sua identidade e relevância.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>O destaque apresenta imagem, citação, autoria e crédito associados à mesma mulher.</li><li>A citação e sua autoria são sustentadas pelas referências do perfil.</li><li>O texto permanece legível sobre ou ao lado da imagem nas larguras previstas.</li><li>A imagem possui texto alternativo quando for informativa.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF05; RNF01, RNF02, RNF04, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">5</td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US05</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero ler a biografia da mulher apresentada, para compreender sua vida, seu contexto e sua atuação.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>A biografia é organizada em parágrafos e pode ser lida integralmente.</li><li>Imagens informativas possuem texto alternativo.</li><li>Legenda e crédito acompanham a imagem quando disponíveis.</li><li>Não há texto cortado ou sobreposição em telas entre 320 px e 1920 px.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF06; RNF01, RNF02, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">5</td>
        </tr>
        <tr>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US06</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">Como visitante, eu quero consultar uma linha do tempo, para compreender os principais acontecimentos da trajetória em ordem cronológica.</td>
            <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle"><ol><li>Os acontecimentos são apresentados em ordem cronológica.</li><li>Cada acontecimento possui ano ou período e descrição.</li><li>Novos eventos seguem a mesma estrutura dos eventos existentes.</li><li>A linha do tempo permanece legível e navegável em computadores e dispositivos móveis.</li></ol></td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF07; RNF01, RNF02, RNF06</td>
            <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">5</td>
        </tr>
    </tbody>
</table>

<div style="text-align: center">
<p>Tabela 3: História de Usuário</p>
</div>

## 5. Referências bibliográficas
