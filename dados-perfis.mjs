const commons = (arquivo, alt, credito, licenca, licencaUrl = "") => ({
  src: `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(arquivo)}?width=960`,
  alt,
  largura: 960,
  altura: 1200,
  credito,
  creditoUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(arquivo)}`,
  licenca,
  licencaUrl,
});

const local = (
  src,
  alt,
  largura,
  altura,
  credito,
  creditoUrl,
  licenca,
  licencaUrl = "",
) => ({
  src,
  alt,
  largura,
  altura,
  credito,
  creditoUrl,
  licenca,
  licencaUrl,
});

const negras = "Mulheres negras";
const indigenas = "Mulheres indígenas";
const ccBy2 = "https://creativecommons.org/licenses/by/2.0/";
const ccBy3Br = "https://creativecommons.org/licenses/by/3.0/br/";
const ccBySa2 = "https://creativecommons.org/licenses/by-sa/2.0/";
const ccBySa4 = "https://creativecommons.org/licenses/by-sa/4.0/";
const cc0 = "https://creativecommons.org/publicdomain/zero/1.0/";

const angela = {
  id: "angela-davis",
  numero: "01",
  grupo: negras,
  nome: "Angela Davis",
  periodo: "1944 — presente",
  atuacao: "Filósofa, professora, escritora e ativista",
  resumo:
    "Filósofa e ativista cuja trajetória reúne feminismo, luta antirracista e crítica ao encarceramento.",
  destino: "index.html#angela-davis",
  imagem: local(
    "assets/images/angela-davis-1974.jpg",
    "Angela Davis em retrato de meio corpo, olhando para a câmera, em 1974",
    960,
    1428,
    "Bernard Gotfryd / Library of Congress",
    "https://commons.wikimedia.org/wiki/File:Angela_Davis_in_a_half-length_portrait_by_Bernard_Gotfryd.jpg",
    "sem restrições conhecidas",
  ),
};

export const perfis = [
  angela,
  {
    id: "lelia-gonzalez",
    numero: "02",
    grupo: negras,
    nome: "Lélia Gonzalez",
    periodo: "1935 — 1994",
    atuacao: "Intelectual, antropóloga, professora e ativista",
    resumo:
      "Referência do feminismo negro latino-americano e formuladora do conceito de amefricanidade.",
    destaque:
      "Pensar o Brasil a partir das vozes negras, indígenas e populares que a história tentou silenciar.",
    chamada: "Amefricanidade como chave para compreender as Américas.",
    introducao:
      "Lélia Gonzalez articulou racismo, sexismo, cultura e linguagem para interpretar o Brasil e a América Latina. Sua escrita aproximou pesquisa, militância e experiência cotidiana, abrindo caminhos decisivos para o feminismo negro.",
    biografia: [
      "Nascida em Belo Horizonte, Lélia mudou-se ainda criança para o Rio de Janeiro. Formou-se em História e Filosofia, fez mestrado em Comunicação e doutorado em Antropologia, construindo uma trajetória marcada pelo ensino e pela pesquisa.",
      "Participou da criação do Movimento Negro Unificado e do Nzinga — Coletivo de Mulheres Negras. Em seus textos, mostrou como o racismo e o sexismo estruturam a sociedade brasileira e valorizou a presença africana e indígena na cultura das Américas.",
      "Ao formular ideias como amefricanidade e pretuguês, Lélia questionou modelos importados e deu centralidade às formas de falar, viver e resistir produzidas por povos negros e indígenas.",
    ],
    timeline: [
      { ano: "1935", titulo: "Nascimento", texto: "Nasce em Belo Horizonte, Minas Gerais, em uma família numerosa." },
      { ano: "1978", titulo: "Movimento Negro Unificado", texto: "Participa da formação do MNU, organização decisiva na luta antirracista brasileira." },
      { ano: "1983", titulo: "Nzinga", texto: "Ajuda a fundar o Coletivo de Mulheres Negras Nzinga, no Rio de Janeiro." },
      { ano: "1988", titulo: "Amefricanidade", texto: "Publica reflexões que consolidam o conceito de amefricanidade em sua obra." },
    ],
    legado: {
      titulo: "Um pensamento feito desde a América Latina",
      introducao: "Lélia transformou a forma de interpretar raça, gênero, cultura e linguagem no Brasil.",
      itens: [
        { titulo: "Amefricanidade", texto: "Criou uma perspectiva que aproxima experiências negras e indígenas das Américas, recusando leituras centradas apenas na Europa." },
        { titulo: "Feminismo negro", texto: "Evidenciou que racismo e sexismo atuam juntos e que a experiência das mulheres negras precisa ocupar o centro do debate político." },
        { titulo: "Linguagem e cultura", texto: "Valorizou o pretuguês e outras marcas africanas na língua e na vida brasileira como formas de memória e resistência." },
      ],
    },
    imagem: local(
      "assets/images/lelia-gonzalez.jpg",
      "Lélia Gonzalez sorrindo em um retrato em preto e branco",
      943,
      640,
      "Cezar Loureiro",
      "https://commons.wikimedia.org/wiki/File:L%C3%A9lia_Gonzalez_by_Cezar_Loureiro.jpg",
      "domínio público",
    ),
    fonte: { rotulo: "Projeto Memória Lélia Gonzalez", url: "https://www.projetoleliagonzalez.com.br/site/fotobiografia/" },
    referencias: [
      { responsavel: "Projeto Memória Lélia Gonzalez", titulo: "Fotobiografia", descricao: "Acervo biográfico sobre a vida, a produção intelectual e a atuação política de Lélia Gonzalez.", url: "https://www.projetoleliagonzalez.com.br/site/fotobiografia/" },
      { responsavel: "Literafro — UFMG", titulo: "Lélia Gonzalez", descricao: "Perfil acadêmico e bibliografia da intelectual brasileira.", url: "https://www.letras.ufmg.br/literafro/ensaistas/1204-lelia-gonzalez" },
      { responsavel: "Wikimedia Commons", titulo: "Retrato de Lélia Gonzalez", descricao: "Página de origem e informações de uso da imagem apresentada.", url: "https://commons.wikimedia.org/wiki/File:L%C3%A9lia_Gonzalez_by_Cezar_Loureiro.jpg" },
    ],
  },
  {
    id: "conceicao-evaristo",
    numero: "03",
    grupo: negras,
    nome: "Conceição Evaristo",
    periodo: "1946 — presente",
    atuacao: "Escritora, ensaísta e professora",
    resumo:
      "Escritora cuja obra une memória, experiência e cotidiano de mulheres negras na escrevivência.",
    destaque:
      "A escrita nasce da vida vivida, da memória coletiva e das vozes que atravessam gerações.",
    chamada: "Escrevivência: quando vida, memória e literatura caminham juntas.",
    introducao:
      "Conceição Evaristo fez da experiência de mulheres negras matéria de romances, contos, poemas e ensaios. Sua obra recupera afetos, violências, ancestralidades e formas de resistência quase sempre deixadas à margem do cânone literário.",
    biografia: [
      "Nascida em Belo Horizonte, Conceição trabalhou como empregada doméstica antes de concluir o curso normal. Mudou-se para o Rio de Janeiro em 1973, onde atuou como professora da rede pública e continuou sua formação acadêmica.",
      "Estreou na literatura em 1990, nos Cadernos Negros. Publicou romances como Ponciá Vicêncio e Becos da Memória, além de contos e poemas que ganharam leitores no Brasil e no exterior.",
      "O conceito de escrevivência, desenvolvido a partir de sua prática literária e reflexão crítica, tornou-se referência para pensar autoria negra, memória e produção de conhecimento.",
    ],
    timeline: [
      { ano: "1946", titulo: "Nascimento", texto: "Nasce em Belo Horizonte, Minas Gerais." },
      { ano: "1990", titulo: "Cadernos Negros", texto: "Publica seus primeiros textos na série dedicada à literatura afro-brasileira." },
      { ano: "2003", titulo: "Ponciá Vicêncio", texto: "Lança seu primeiro romance, depois traduzido para outros idiomas." },
      { ano: "2018", titulo: "Reconhecimento acadêmico", texto: "Recebe o título de doutora honoris causa pela Universidade Federal de Juiz de Fora." },
    ],
    legado: {
      titulo: "Uma literatura que escreve a vida",
      introducao: "Sua obra amplia quem pode narrar o Brasil e quais experiências entram na literatura.",
      itens: [
        { titulo: "Escrevivência", texto: "Nomeou uma escrita ligada à experiência individual e coletiva de mulheres negras, sem separar criação, memória e vida." },
        { titulo: "Memória e ancestralidade", texto: "Construiu personagens que carregam histórias familiares, deslocamentos e vínculos entre diferentes gerações." },
        { titulo: "Novos leitores e autoras", texto: "Sua circulação em escolas, universidades e clubes de leitura fortaleceu a presença de escritoras negras no debate público." },
      ],
    },
    imagem: local(
      "assets/images/conceicao-evaristo.jpg",
      "Conceição Evaristo fala ao microfone durante um debate",
      960,
      641,
      "Fora do Eixo",
      "https://commons.wikimedia.org/wiki/File:ConceicaoEvaristo_(cropped).jpg",
      "CC BY-SA 2.0",
      ccBySa2,
    ),
    fonte: { rotulo: "Academia Mineira de Letras", url: "https://academiamineiradeletras.org.br/academicos/conceicao-evaristo/" },
    referencias: [
      { responsavel: "Academia Mineira de Letras", titulo: "Conceição Evaristo", descricao: "Perfil biográfico e literário da escritora.", url: "https://academiamineiradeletras.org.br/academicos/conceicao-evaristo/" },
      { responsavel: "Literafro — UFMG", titulo: "Conceição Evaristo", descricao: "Biografia, bibliografia e estudos sobre sua produção.", url: "https://www.letras.ufmg.br/literafro/autoras/188-conceicao-evaristo" },
      { responsavel: "Wikimedia Commons", titulo: "Retrato de Conceição Evaristo", descricao: "Origem, autoria e licença da fotografia usada na página.", url: "https://commons.wikimedia.org/wiki/File:ConceicaoEvaristo_(cropped).jpg" },
    ],
  },
  {
    id: "carolina-maria-de-jesus",
    numero: "04",
    grupo: negras,
    nome: "Carolina Maria de Jesus",
    periodo: "1914 — 1977",
    atuacao: "Escritora, compositora e memorialista",
    resumo:
      "Autora de Quarto de despejo, registrou a favela, a fome e a vida urbana a partir de dentro.",
    destaque:
      "Escrever o cotidiano também é disputar quem tem o direito de registrar a história.",
    chamada: "Uma voz que transformou cadernos encontrados em memória do país.",
    introducao:
      "Carolina Maria de Jesus registrou em diários a rotina da favela do Canindé, em São Paulo. Com observação direta e linguagem própria, escreveu sobre fome, desigualdade, maternidade, política e o desejo de viver da literatura.",
    biografia: [
      "Nascida em Sacramento, Minas Gerais, Carolina frequentou a escola por poucos anos. Mudou-se para São Paulo e sustentou os filhos recolhendo papel e outros materiais recicláveis, enquanto escrevia em cadernos encontrados nas ruas.",
      "Em 1958, o jornalista Audálio Dantas conheceu seus textos. Dois anos depois, Quarto de despejo foi publicado e se tornou um fenômeno editorial, alcançando leitores em muitos países.",
      "Carolina continuou escrevendo romances, poemas, canções e memórias. A amplitude de sua obra passou a ser reconhecida de forma mais intensa nas décadas seguintes à sua morte.",
    ],
    timeline: [
      { ano: "1914", titulo: "Nascimento", texto: "Nasce em Sacramento, no interior de Minas Gerais." },
      { ano: "1947", titulo: "Canindé", texto: "Passa a viver na favela do Canindé, em São Paulo, onde registra o cotidiano em diários." },
      { ano: "1960", titulo: "Quarto de despejo", texto: "Publica o diário que a projeta nacional e internacionalmente." },
      { ano: "1961", titulo: "Casa de alvenaria", texto: "Lança o livro que acompanha sua vida depois do sucesso editorial." },
    ],
    legado: {
      titulo: "A favela escrita por quem a viveu",
      introducao: "Carolina deslocou o olhar sobre pobreza, autoria e literatura no Brasil.",
      itens: [
        { titulo: "Autoria e testemunho", texto: "Registrou a desigualdade a partir de sua própria experiência, sem aceitar que outros falassem por ela." },
        { titulo: "Linguagem própria", texto: "Criou uma escrita marcada pela oralidade, por imagens poéticas e por observações políticas contundentes." },
        { titulo: "Arquivo de uma vida", texto: "Seus manuscritos revelam uma produção muito maior que o livro mais conhecido e seguem estimulando novas pesquisas." },
      ],
    },
    imagem: commons(
      "Carolina Maria de Jesus, 1960 cr.jpg",
      "Carolina Maria de Jesus em retrato de 1960",
      "Arquivo Nacional",
      "domínio público",
    ),
    fonte: { rotulo: "Instituto Moreira Salles", url: "https://ims.com.br/titular-colecao/carolina-maria-de-jesus/" },
    referencias: [
      { responsavel: "Instituto Moreira Salles", titulo: "Carolina Maria de Jesus", descricao: "Apresentação do acervo documental preservado pelo instituto.", url: "https://ims.com.br/titular-colecao/carolina-maria-de-jesus/" },
      { responsavel: "Literafro — UFMG", titulo: "Carolina Maria de Jesus", descricao: "Biografia e bibliografia da escritora mineira.", url: "https://www.letras.ufmg.br/literafro/autoras/58-carolina-maria-de-jesus" },
      { responsavel: "Arquivo Nacional / Wikimedia Commons", titulo: "Carolina Maria de Jesus, 1960", descricao: "Registro fotográfico do Fundo Correio da Manhã.", url: "https://commons.wikimedia.org/wiki/File:Carolina_Maria_de_Jesus,_1960_cr.jpg" },
    ],
  },
  {
    id: "sueli-carneiro",
    numero: "05",
    grupo: negras,
    nome: "Sueli Carneiro",
    periodo: "1950 — presente",
    atuacao: "Filósofa, escritora e ativista antirracista",
    resumo:
      "Fundadora do Geledés, articula feminismo negro, direitos humanos e produção de conhecimento.",
    destaque:
      "Enfrentar o racismo exige transformar instituições, ideias e as condições concretas de vida.",
    chamada: "Pensamento e organização política contra o racismo e o sexismo.",
    introducao:
      "Sueli Carneiro é uma das principais pensadoras do feminismo negro brasileiro. Sua atuação conecta filosofia, formulação de políticas públicas, comunicação e apoio direto a mulheres negras.",
    biografia: [
      "Nascida em São Paulo, formou-se em Filosofia na Universidade de São Paulo. Participou do movimento de mulheres e do movimento negro, construindo uma reflexão crítica sobre as formas específicas de desigualdade vividas por mulheres negras.",
      "Em 1988, fundou com outras ativistas o Geledés — Instituto da Mulher Negra. A organização tornou-se referência em direitos humanos, educação, saúde, comunicação e enfrentamento à violência racial e de gênero.",
      "Sua produção ensaística discute epistemicídio, branquitude, racismo e democracia, aproximando reflexão acadêmica e intervenção pública.",
    ],
    timeline: [
      { ano: "1950", titulo: "Nascimento", texto: "Nasce na cidade de São Paulo." },
      { ano: "1988", titulo: "Geledés", texto: "Funda, com outras mulheres, o Instituto da Mulher Negra." },
      { ano: "2005", titulo: "Doutorado", texto: "Conclui na USP pesquisa sobre racismo, sexismo e desigualdade racial." },
      { ano: "2021", titulo: "Intelectual do ano", texto: "Recebe o Prêmio Juca Pato pelo conjunto de sua contribuição intelectual." },
    ],
    legado: {
      titulo: "Conhecimento como instrumento de direitos",
      introducao: "Sueli uniu teoria, incidência política e construção institucional.",
      itens: [
        { titulo: "Geledés", texto: "Criou uma organização duradoura para enfrentar racismo e sexismo por meio de projetos, advocacy e comunicação." },
        { titulo: "Epistemicídio", texto: "Aprofundou o debate sobre a desvalorização sistemática de saberes e sujeitos negros na educação e na cultura." },
        { titulo: "Feminismo negro", texto: "Consolidou uma agenda que relaciona raça, gênero e classe sem reduzir uma dimensão à outra." },
      ],
    },
    imagem: commons(
      "SueliCarneiro.jpg",
      "Sueli Carneiro durante o Festival Latinidades de 2016",
      "Wilson Dias / Agência Brasil",
      "CC BY 3.0 BR",
      ccBy3Br,
    ),
    fonte: { rotulo: "Geledés — Instituto da Mulher Negra", url: "https://www.geledes.org.br/sueli-carneiro/" },
    referencias: [
      { responsavel: "Geledés", titulo: "Sueli Carneiro", descricao: "Textos e informações sobre a fundadora do Instituto da Mulher Negra.", url: "https://www.geledes.org.br/sueli-carneiro/" },
      { responsavel: "Literafro — UFMG", titulo: "Sueli Carneiro", descricao: "Perfil da filósofa, escritora e ativista.", url: "https://www.letras.ufmg.br/literafro/ensaistas/1426-sueli-carneiro" },
      { responsavel: "Wikimedia Commons", titulo: "Sueli Carneiro no Festival Latinidades", descricao: "Origem, autoria e licença da fotografia de 2016.", url: "https://commons.wikimedia.org/wiki/File:SueliCarneiro.jpg" },
    ],
  },
  {
    id: "antonieta-de-barros",
    numero: "06",
    grupo: negras,
    nome: "Antonieta de Barros",
    periodo: "1901 — 1952",
    atuacao: "Professora, jornalista, escritora e parlamentar",
    resumo:
      "Pioneira da política brasileira, defendeu educação, direitos das mulheres e participação negra.",
    destaque:
      "A educação pode abrir espaços de liberdade em uma sociedade construída para negar oportunidades.",
    chamada: "Da sala de aula ao parlamento, uma vida dedicada à educação.",
    introducao:
      "Antonieta de Barros rompeu barreiras de raça e gênero na imprensa, no ensino e na política de Santa Catarina. Foi a primeira mulher negra a assumir um mandato popular no Brasil.",
    biografia: [
      "Filha de uma mulher negra que havia nascido escravizada, Antonieta formou-se professora em Florianópolis. Criou um curso de alfabetização e dedicou grande parte da vida ao ensino.",
      "Fundou e dirigiu jornais, escrevendo também sob o pseudônimo Maria da Ilha. Seus artigos tratavam de educação, participação das mulheres e desigualdade social.",
      "Eleita deputada estadual em 1934, atuou em duas legislaturas. Uma lei de sua autoria instituiu em Santa Catarina a data que ajudaria a consolidar o Dia do Professor no país.",
    ],
    timeline: [
      { ano: "1901", titulo: "Nascimento", texto: "Nasce em Florianópolis, Santa Catarina." },
      { ano: "1922", titulo: "Jornal A Semana", texto: "Funda o periódico e amplia sua atuação como educadora e articulista." },
      { ano: "1934", titulo: "Eleição histórica", texto: "É eleita deputada estadual e assume o mandato no ano seguinte." },
      { ano: "1948", titulo: "Dia do Professor", texto: "Tem sancionada a lei catarinense que oficializa 15 de outubro como data escolar." },
    ],
    legado: {
      titulo: "Educação e política como direito",
      introducao: "Sua trajetória abriu caminhos para mulheres negras na vida pública brasileira.",
      itens: [
        { titulo: "Representação política", texto: "Rompeu uma exclusão histórica ao ocupar o legislativo estadual em uma época de participação feminina ainda recente." },
        { titulo: "Imprensa e debate público", texto: "Usou jornais e crônicas para defender educação e questionar limites impostos às mulheres." },
        { titulo: "Valorização docente", texto: "Transformou a defesa da escola e dos professores em ação legislativa concreta." },
      ],
    },
    imagem: commons(
      "Antonieta de Barros.webp",
      "Retrato histórico de Antonieta de Barros",
      "Instituto Histórico e Geográfico de Santa Catarina",
      "CC BY-SA 4.0",
      ccBySa4,
    ),
    fonte: { rotulo: "Memória Política de Santa Catarina", url: "https://memoriapolitica.alesc.sc.gov.br/biografia/68-Antonieta_de_Barros" },
    referencias: [
      { responsavel: "Assembleia Legislativa de Santa Catarina", titulo: "Antonieta de Barros", descricao: "Biografia parlamentar e registros de sua atuação política.", url: "https://memoriapolitica.alesc.sc.gov.br/biografia/68-Antonieta_de_Barros" },
      { responsavel: "Câmara dos Deputados", titulo: "Antonieta de Barros: pioneirismo", descricao: "Material sobre sua presença histórica na política brasileira.", url: "https://www.camara.leg.br/internet/agencia/infograficos-html5/a-conquista-do-voto-feminino/antonieta-de-barros.html" },
      { responsavel: "Wikimedia Commons", titulo: "Retrato de Antonieta de Barros", descricao: "Informações de origem e licenciamento da imagem histórica.", url: "https://commons.wikimedia.org/wiki/File:Antonieta_de_Barros.webp" },
    ],
  },
  {
    id: "ruth-de-souza",
    numero: "07",
    grupo: negras,
    nome: "Ruth de Souza",
    periodo: "1921 — 2019",
    atuacao: "Atriz de teatro, cinema e televisão",
    resumo:
      "Pioneira dos palcos e das telas, ampliou a presença de artistas negros na dramaturgia brasileira.",
    destaque:
      "Ocupar o palco também pode mudar as imagens que um país constrói sobre si mesmo.",
    chamada: "Uma carreira que atravessou oito décadas e abriu caminhos.",
    introducao:
      "Ruth de Souza foi uma das primeiras atrizes negras a alcançar projeção no teatro, no cinema e na televisão brasileiros. Sua carreira combinou excelência artística e enfrentamento a papéis limitados pelo racismo.",
    biografia: [
      "Nascida no Rio de Janeiro e criada em Minas Gerais, Ruth voltou à capital ainda jovem. Em 1945, integrou o Teatro Experimental do Negro, grupo criado por Abdias Nascimento.",
      "A experiência no TEN levou Ruth ao palco do Theatro Municipal e a uma bolsa de estudos nos Estados Unidos. No cinema, atuou em produções importantes e recebeu reconhecimento internacional por Sinhá Moça.",
      "Ao longo de mais de setenta anos, participou de dezenas de filmes, peças e novelas, tornando-se referência para gerações de artistas negros.",
    ],
    timeline: [
      { ano: "1945", titulo: "Teatro Experimental do Negro", texto: "Estreia em O imperador Jones e participa da renovação do teatro negro brasileiro." },
      { ano: "1948", titulo: "Cinema", texto: "Inicia sua trajetória nas telas e amplia rapidamente sua presença artística." },
      { ano: "1954", titulo: "Reconhecimento em Veneza", texto: "É indicada ao prêmio de interpretação por seu trabalho em Sinhá Moça." },
      { ano: "2019", titulo: "Uma vida em cena", texto: "Encerra uma carreira que atravessou diferentes fases do audiovisual brasileiro." },
    ],
    legado: {
      titulo: "Presença negra no centro da cena",
      introducao: "Ruth transformou possibilidades de representação no palco e na tela.",
      itens: [
        { titulo: "Pioneirismo", texto: "Esteve entre as primeiras artistas negras a ocupar espaços de destaque no teatro e no audiovisual do país." },
        { titulo: "Excelência artística", texto: "Construiu personagens complexas mesmo em uma indústria que frequentemente oferecia papéis estereotipados." },
        { titulo: "Referência para gerações", texto: "Sua longevidade e reconhecimento abriram horizontes para atrizes e atores negros que vieram depois." },
      ],
    },
    imagem: commons(
      "Ruth de Souza.png",
      "Retrato da atriz Ruth de Souza",
      "Agência Brasil",
      "CC BY 3.0 BR",
      ccBy3Br,
    ),
    fonte: { rotulo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/pessoa349507/ruth-de-souza" },
    referencias: [
      { responsavel: "Enciclopédia Itaú Cultural", titulo: "Ruth de Souza", descricao: "Trajetória artística e principais trabalhos da atriz.", url: "https://enciclopedia.itaucultural.org.br/pessoa349507/ruth-de-souza" },
      { responsavel: "Fundação Cultural Palmares", titulo: "Ruth de Souza", descricao: "Registro sobre o pioneirismo da atriz brasileira.", url: "https://www.gov.br/palmares/pt-br/assuntos/noticias/ruth-de-souza-uma-dama-negra-no-teatro-brasileiro" },
      { responsavel: "Wikimedia Commons", titulo: "Arquivo de imagens de Ruth de Souza", descricao: "Fotografias e informações de licenciamento.", url: "https://commons.wikimedia.org/wiki/Category:Ruth_de_Souza" },
    ],
  },
  {
    id: "marielle-franco",
    numero: "08",
    grupo: negras,
    nome: "Marielle Franco",
    periodo: "1979 — 2018",
    atuacao: "Socióloga, defensora de direitos humanos e vereadora",
    resumo:
      "Transformou a experiência da favela em ação política pelos direitos de mulheres, pessoas negras e LGBTQIA+.",
    destaque:
      "Direitos humanos começam quando as pessoas historicamente afastadas do poder podem decidir os rumos da cidade.",
    chamada: "Da Maré à Câmara Municipal, uma política feita com presença coletiva.",
    introducao:
      "Marielle Franco nasceu e cresceu no Complexo da Maré, no Rio de Janeiro. Sua atuação reuniu pesquisa, mobilização comunitária e defesa de políticas públicas para populações atingidas pela violência e pela desigualdade.",
    biografia: [
      "Formada em Ciências Sociais, Marielle fez mestrado em Administração Pública e estudou a política de segurança no Rio de Janeiro. Trabalhou por uma década na defesa de direitos humanos antes de se candidatar.",
      "Eleita vereadora em 2016 com mais de 46 mil votos, presidiu a Comissão de Defesa da Mulher e apresentou projetos ligados a direitos reprodutivos, combate à violência e valorização de territórios populares.",
      "Marielle e o motorista Anderson Gomes foram assassinados em 14 de março de 2018. Sua trajetória tornou-se símbolo internacional de luta por justiça, democracia e participação política.",
    ],
    timeline: [
      { ano: "1979", titulo: "Nascimento", texto: "Nasce no Rio de Janeiro e cresce no Complexo da Maré." },
      { ano: "2006", titulo: "Direitos humanos", texto: "Passa a atuar na equipe parlamentar dedicada à defesa de vítimas e familiares." },
      { ano: "2016", titulo: "Eleição", texto: "É eleita vereadora do Rio de Janeiro com 46.502 votos." },
      { ano: "2018", titulo: "Uma voz multiplicada", texto: "É assassinada com Anderson Gomes; movimentos no Brasil e no mundo mantêm suas pautas vivas." },
    ],
    legado: {
      titulo: "Uma semente de participação política",
      introducao: "A memória de Marielle segue ligada à defesa da democracia e à ocupação dos espaços de poder.",
      itens: [
        { titulo: "Política desde a favela", texto: "Levou ao parlamento experiências e propostas construídas com mulheres, juventudes e territórios populares." },
        { titulo: "Direitos humanos", texto: "Enfrentou a violência de Estado e defendeu políticas de segurança comprometidas com a vida." },
        { titulo: "Renovação democrática", texto: "Inspirou novas candidaturas negras, periféricas, feministas e LGBTQIA+ em todo o país." },
      ],
    },
    imagem: commons(
      "Marielle Franco (cropped).jpg",
      "Retrato da vereadora Marielle Franco em 2016",
      "Mídia NINJA",
      "CC BY-SA 2.0",
      ccBySa2,
    ),
    fonte: { rotulo: "Instituto Marielle Franco", url: "https://www.institutomariellefranco.org/quem-e-marielle" },
    referencias: [
      { responsavel: "Instituto Marielle Franco", titulo: "Quem é Marielle", descricao: "Biografia, memória e continuidade de suas pautas políticas.", url: "https://www.institutomariellefranco.org/quem-e-marielle" },
      { responsavel: "Câmara Municipal do Rio de Janeiro", titulo: "Vereadora Marielle Franco", descricao: "Registro institucional do mandato parlamentar.", url: "https://www.camara.rio/vereadores/marielle-franco" },
      { responsavel: "Wikimedia Commons", titulo: "Retrato de Marielle Franco", descricao: "Autoria e licença da fotografia produzida pela Mídia NINJA.", url: "https://commons.wikimedia.org/wiki/File:Marielle_Franco_(cropped).jpg" },
    ],
  },
  {
    id: "benedita-da-silva",
    numero: "09",
    grupo: negras,
    nome: "Benedita da Silva",
    periodo: "1942 — presente",
    atuacao: "Assistente social e parlamentar",
    resumo:
      "Pioneira no Legislativo e no Executivo, levou a experiência das favelas e do movimento negro à política institucional.",
    destaque:
      "Representação ganha força quando transforma experiência comunitária em direitos e políticas públicas.",
    chamada: "Uma trajetória de pioneirismos na política brasileira.",
    introducao:
      "Benedita da Silva construiu uma carreira política marcada por primeiras vezes. Mulher negra, nascida e criada em favela, ocupou cargos no município, no estado e no governo federal.",
    biografia: [
      "Nascida no Rio de Janeiro, Benedita viveu no Morro do Chapéu Mangueira e trabalhou em diferentes atividades antes de se formar em Serviço Social. Sua atuação começou em associações comunitárias e movimentos de mulheres e negros.",
      "Foi eleita vereadora, deputada constituinte, senadora, vice-governadora e governadora do Rio de Janeiro. Também comandou a Secretaria Especial de Assistência e Promoção Social no governo federal.",
      "No parlamento, defendeu direitos trabalhistas, igualdade racial, políticas para mulheres, assistência social e reconhecimento das trabalhadoras domésticas.",
    ],
    timeline: [
      { ano: "1982", titulo: "Vereadora", texto: "É eleita para a Câmara Municipal do Rio de Janeiro." },
      { ano: "1986", titulo: "Constituinte", texto: "Torna-se deputada federal e participa da elaboração da Constituição de 1988." },
      { ano: "1994", titulo: "Senado", texto: "É eleita a primeira senadora negra do Brasil." },
      { ano: "2002", titulo: "Governo do Rio", texto: "Assume o governo estadual, outra posição inédita para uma mulher negra." },
    ],
    legado: {
      titulo: "A experiência popular dentro das instituições",
      introducao: "Benedita ampliou a presença de mulheres negras nos espaços formais de decisão.",
      itens: [
        { titulo: "Pioneirismo político", texto: "Foi a primeira mulher negra a ocupar diferentes cargos eletivos de grande projeção no país." },
        { titulo: "Constituição cidadã", texto: "Participou dos debates constituintes levando pautas de trabalhadoras, mulheres, negros e moradores de favelas." },
        { titulo: "Políticas sociais", texto: "Fez da assistência, da igualdade racial e dos direitos das mulheres e trabalhadoras temas permanentes de atuação." },
      ],
    },
    imagem: commons(
      "Beneditadasilva11012007.jpg",
      "Retrato de Benedita da Silva em 2007",
      "José Cruz / Agência Brasil",
      "CC BY 3.0 BR",
      ccBy3Br,
    ),
    fonte: { rotulo: "Câmara dos Deputados", url: "https://www.camara.leg.br/deputados/73701/biografia" },
    referencias: [
      { responsavel: "Câmara dos Deputados", titulo: "Biografia de Benedita da Silva", descricao: "Dados biográficos, mandatos e atividades parlamentares.", url: "https://www.camara.leg.br/deputados/73701/biografia" },
      { responsavel: "CPDOC — FGV", titulo: "Benedita da Silva", descricao: "Verbete sobre a trajetória comunitária e política da parlamentar.", url: "https://www18.fgv.br/cpdoc/acervo/dicionarios/verbete-biografico/benedita-souza-da-silva-sampaio" },
      { responsavel: "Wikimedia Commons", titulo: "Retrato de Benedita da Silva", descricao: "Informações de autoria e licença da imagem de 2007.", url: "https://commons.wikimedia.org/wiki/File:Beneditadasilva11012007.jpg" },
    ],
  },
  {
    id: "luiza-bairros",
    numero: "10",
    grupo: negras,
    nome: "Luiza Bairros",
    periodo: "1953 — 2016",
    atuacao: "Socióloga, gestora pública e ativista",
    resumo:
      "Intelectual do movimento negro que transformou décadas de militância em políticas de igualdade racial.",
    destaque:
      "Políticas de igualdade precisam reconhecer como raça, gênero e classe organizam oportunidades diferentes.",
    chamada: "Do movimento negro à gestão pública nacional.",
    introducao:
      "Luiza Bairros foi uma intelectual e gestora decisiva para a consolidação das políticas de promoção da igualdade racial no Brasil. Sua atuação aproximou movimento social, pesquisa e administração pública.",
    biografia: [
      "Nascida em Porto Alegre, Luiza formou-se em Administração e fez mestrado em Ciências Sociais. Mudou-se para Salvador no fim da década de 1970 e passou a atuar intensamente no Movimento Negro Unificado.",
      "Estudou relações raciais e gênero, trabalhou em programas das Nações Unidas e ocupou a secretaria de Promoção da Igualdade da Bahia.",
      "Entre 2011 e 2014, foi ministra-chefe da Secretaria de Políticas de Promoção da Igualdade Racial, participando da implementação de ações afirmativas e políticas para povos e comunidades tradicionais.",
    ],
    timeline: [
      { ano: "1979", titulo: "Movimento Negro Unificado", texto: "Ao chegar a Salvador, fortalece sua atuação no movimento negro organizado." },
      { ano: "2008", titulo: "Gestão na Bahia", texto: "Assume a Secretaria de Promoção da Igualdade do Estado da Bahia." },
      { ano: "2011", titulo: "Ministra", texto: "Passa a dirigir a política federal de promoção da igualdade racial." },
      { ano: "2016", titulo: "Legado público", texto: "Sua morte mobiliza homenagens de organizações e instituições em todo o país." },
    ],
    legado: {
      titulo: "Igualdade racial como política de Estado",
      introducao: "Luiza ajudou a transformar reivindicações históricas em programas e instituições públicas.",
      itens: [
        { titulo: "Articulação entre movimento e governo", texto: "Levou para a gestão pública conhecimentos construídos em décadas de organização antirracista." },
        { titulo: "Ações afirmativas", texto: "Defendeu políticas capazes de enfrentar desigualdades raciais persistentes na educação e no trabalho." },
        { titulo: "Pensamento interseccional", texto: "Analisou a experiência das mulheres negras relacionando raça, gênero, classe e território." },
      ],
    },
    imagem: commons(
      "Luiza helena de bairros.jpg",
      "Retrato da socióloga e gestora Luiza Bairros",
      "Arquivo institucional",
      "licença indicada no Wikimedia Commons",
    ),
    fonte: { rotulo: "CPDOC — Fundação Getulio Vargas", url: "https://www18.fgv.br/cpdoc/acervo/dicionarios/verbete-biografico/luiza-bairros" },
    referencias: [
      { responsavel: "CPDOC — FGV", titulo: "Luiza Bairros", descricao: "Verbete biográfico sobre sua militância e atuação pública.", url: "https://www18.fgv.br/cpdoc/acervo/dicionarios/verbete-biografico/luiza-bairros" },
      { responsavel: "Fundação Cultural Palmares", titulo: "Memória de Luiza Bairros", descricao: "Registro institucional sobre sua contribuição à igualdade racial.", url: "https://www.gov.br/palmares/pt-br" },
      { responsavel: "Wikimedia Commons", titulo: "Acervo Luiza Bairros", descricao: "Coleção de fotografias e respectivas informações de uso.", url: "https://commons.wikimedia.org/wiki/Category:Luiza_Bairros" },
    ],
  },
  {
    id: "sonia-guajajara",
    numero: "11",
    grupo: indigenas,
    nome: "Sônia Guajajara",
    periodo: "1974 — presente",
    atuacao: "Liderança indígena, professora e ativista",
    resumo:
      "Liderança Guajajara dedicada à defesa dos direitos indígenas, dos territórios e do meio ambiente.",
    destaque:
      "Defender os territórios indígenas é proteger vidas, culturas e o equilíbrio ambiental de todos.",
    chamada: "Organização de base e presença indígena nos espaços de decisão.",
    introducao:
      "Sônia Guajajara, do povo Guajajara/Tentehar, construiu uma trajetória de mobilização nacional e internacional. Sua atuação une defesa territorial, justiça climática e participação política.",
    biografia: [
      "Nascida na Terra Indígena Arariboia, no Maranhão, Sônia estudou Letras e Enfermagem. Começou sua atuação em organizações indígenas locais e estaduais.",
      "Como coordenadora executiva da Articulação dos Povos Indígenas do Brasil, tornou-se uma das principais vozes do movimento indígena em campanhas pela demarcação e contra violações territoriais.",
      "Foi candidata à Vice-Presidência da República em 2018, eleita deputada federal em 2022 e assumiu, em 2023, o primeiro Ministério dos Povos Indígenas do país.",
    ],
    timeline: [
      { ano: "2000", titulo: "Organização de base", texto: "Fortalece sua atuação em entidades indígenas do Maranhão e da Amazônia." },
      { ano: "2013", titulo: "Mobilização nacional", texto: "Ganha projeção na defesa dos territórios e na articulação dos povos indígenas." },
      { ano: "2018", titulo: "Candidatura nacional", texto: "Torna-se a primeira pessoa indígena em uma chapa presidencial no Brasil." },
      { ano: "2023", titulo: "Ministério dos Povos Indígenas", texto: "Assume a pasta criada para coordenar políticas públicas indígenas." },
    ],
    legado: {
      titulo: "Território, clima e democracia",
      introducao: "Sônia ampliou a presença indígena no debate político brasileiro e internacional.",
      itens: [
        { titulo: "Articulação nacional", texto: "Contribuiu para reunir povos de diferentes regiões em mobilizações comuns por direitos constitucionais." },
        { titulo: "Justiça climática", texto: "Relacionou a proteção dos territórios indígenas à conservação ambiental e ao enfrentamento da crise climática." },
        { titulo: "Participação institucional", texto: "Abriu caminhos inéditos para a presença indígena em eleições e no primeiro escalão do governo federal." },
      ],
    },
    imagem: local(
      "assets/images/sonia-guajajara.jpg",
      "Retrato de Sônia Guajajara com pintura facial e colar de penas",
      960,
      1315,
      "Andrew Aurélio P. de A. Costa",
      "https://commons.wikimedia.org/wiki/File:S%C3%B4nia_Guajajara_(cropped).jpg",
      "CC BY-SA 4.0",
      ccBySa4,
    ),
    fonte: { rotulo: "Câmara dos Deputados", url: "https://www.camara.leg.br/deputados/220643/biografia" },
    referencias: [
      { responsavel: "Câmara dos Deputados", titulo: "Biografia de Sônia Guajajara", descricao: "Dados biográficos e trajetória parlamentar.", url: "https://www.camara.leg.br/deputados/220643/biografia" },
      { responsavel: "Ministério dos Povos Indígenas", titulo: "Institucional", descricao: "Informações sobre a política pública federal para os povos indígenas.", url: "https://www.gov.br/povosindigenas/pt-br" },
      { responsavel: "Wikimedia Commons", titulo: "Retrato de Sônia Guajajara", descricao: "Origem e licença da fotografia usada na página.", url: "https://commons.wikimedia.org/wiki/File:S%C3%B4nia_Guajajara_(cropped).jpg" },
    ],
  },
  {
    id: "celia-xakriaba",
    numero: "12",
    grupo: indigenas,
    nome: "Célia Xakriabá",
    periodo: "1989 — presente",
    atuacao: "Educadora, antropóloga, ativista e parlamentar",
    resumo:
      "Educadora Xakriabá que relaciona território, formação indígena, direitos das mulheres e política.",
    destaque:
      "O território é também lugar de aprendizagem, memória e continuidade entre gerações.",
    chamada: "Uma educação que nasce do território e retorna a ele.",
    introducao:
      "Célia Xakriabá, do povo Xakriabá de Minas Gerais, atua na educação indígena, na defesa territorial e na participação política. Sua reflexão apresenta o corpo-território como espaço de memória e resistência.",
    biografia: [
      "Célia cresceu na Terra Indígena Xakriabá e iniciou ainda jovem sua atuação como professora. Formou-se em Educação Indígena pela Universidade Federal de Minas Gerais.",
      "Concluiu mestrado em Desenvolvimento Sustentável na Universidade de Brasília e doutorado em Antropologia na UFMG, articulando conhecimento acadêmico e saberes de seu povo.",
      "Participou de mobilizações indígenas em todo o país e foi eleita deputada federal por Minas Gerais em 2022.",
    ],
    timeline: [
      { ano: "2013", titulo: "Formação intercultural", texto: "Conclui a graduação voltada à formação de educadores indígenas na UFMG." },
      { ano: "2018", titulo: "Mestrado", texto: "Defende pesquisa sobre educação, território e resistência Xakriabá na UnB." },
      { ano: "2019", titulo: "Doutorado", texto: "Avança na Antropologia com uma produção ligada ao corpo-território." },
      { ano: "2022", titulo: "Câmara dos Deputados", texto: "É eleita deputada federal por Minas Gerais." },
    ],
    legado: {
      titulo: "Educação enraizada no território",
      introducao: "Célia aproxima formação, pesquisa e mobilização política indígena.",
      itens: [
        { titulo: "Corpo-território", texto: "Mostra como identidade, memória e território não podem ser separados na experiência indígena." },
        { titulo: "Educação indígena", texto: "Defende escolas construídas com participação comunitária, línguas, histórias e práticas de cada povo." },
        { titulo: "Mulheres na política", texto: "Amplia a presença de mulheres indígenas nos debates legislativos e ambientais." },
      ],
    },
    imagem: commons(
      "Originária da terra.jpg",
      "Retrato de Célia Xakriabá com pintura corporal",
      "Edgar Kanaykõ Xakriabá",
      "licença indicada no Wikimedia Commons",
    ),
    fonte: { rotulo: "Câmara dos Deputados", url: "https://www.camara.leg.br/deputados/220593/biografia" },
    referencias: [
      { responsavel: "Câmara dos Deputados", titulo: "Biografia de Célia Xakriabá", descricao: "Dados biográficos e atuação parlamentar.", url: "https://www.camara.leg.br/deputados/220593/biografia" },
      { responsavel: "Universidade de Brasília", titulo: "O barro, o genipapo e o giz", descricao: "Pesquisa de mestrado sobre educação e território Xakriabá.", url: "https://repositorio.unb.br/handle/10482/34103" },
      { responsavel: "Wikimedia Commons", titulo: "Originária da terra", descricao: "Página da fotografia apresentada na exposição.", url: "https://commons.wikimedia.org/wiki/File:Origin%C3%A1ria_da_terra.jpg" },
    ],
  },
  {
    id: "joenia-wapichana",
    numero: "13",
    grupo: indigenas,
    nome: "Joênia Wapichana",
    periodo: "1974 — presente",
    atuacao: "Advogada, liderança indígena e gestora pública",
    resumo:
      "Primeira mulher indígena a exercer a advocacia no Brasil e pioneira no Congresso e na Funai.",
    destaque:
      "O direito pode ser uma ferramenta de defesa coletiva quando os povos indígenas falam em seu próprio nome.",
    chamada: "A presença Wapichana transformando o direito e as instituições.",
    introducao:
      "Joênia Wapichana construiu uma trajetória jurídica e política marcada por pioneirismos. Sua atuação se concentra na defesa territorial, na autonomia dos povos e na aplicação dos direitos previstos na Constituição.",
    biografia: [
      "Nascida em Roraima, Joênia cresceu em uma comunidade Wapichana e formou-se em Direito pela Universidade Federal de Roraima. Tornou-se a primeira mulher indígena advogada do país.",
      "Atuou no Conselho Indígena de Roraima e participou de processos decisivos para a Terra Indígena Raposa Serra do Sol, inclusive realizando sustentação no Supremo Tribunal Federal.",
      "Foi eleita deputada federal em 2018 e, em 2023, tornou-se a primeira mulher indígena a presidir a Fundação Nacional dos Povos Indígenas.",
    ],
    timeline: [
      { ano: "1997", titulo: "Formação em Direito", texto: "Conclui o curso na UFRR e inicia sua atuação jurídica em defesa dos povos indígenas." },
      { ano: "2008", titulo: "Supremo Tribunal Federal", texto: "Defende no STF a demarcação contínua da Terra Indígena Raposa Serra do Sol." },
      { ano: "2018", titulo: "Eleição histórica", texto: "Torna-se a primeira mulher indígena eleita deputada federal." },
      { ano: "2023", titulo: "Presidência da Funai", texto: "Assume a direção da Fundação Nacional dos Povos Indígenas." },
    ],
    legado: {
      titulo: "Direitos indígenas defendidos em primeira pessoa",
      introducao: "Joênia abriu caminhos no sistema de justiça, no parlamento e na gestão pública.",
      itens: [
        { titulo: "Advocacia indígena", texto: "Mostrou a importância de profissionais indígenas na defesa jurídica de seus próprios povos e territórios." },
        { titulo: "Raposa Serra do Sol", texto: "Teve atuação relevante no processo que confirmou a demarcação contínua da terra indígena." },
        { titulo: "Instituições transformadas", texto: "Levou perspectivas indígenas a espaços nacionais de legislação e execução de políticas públicas." },
      ],
    },
    imagem: commons(
      "Joenia Wapixana Brazilian lawyer.jpg",
      "Retrato de Joênia Wapichana",
      "ONU / acervo público",
      "licença indicada no Wikimedia Commons",
    ),
    fonte: { rotulo: "Fundação Nacional dos Povos Indígenas", url: "https://www.gov.br/funai/pt-br" },
    referencias: [
      { responsavel: "Fundação Nacional dos Povos Indígenas", titulo: "Funai", descricao: "Informações institucionais e políticas sob direção de Joênia Wapichana.", url: "https://www.gov.br/funai/pt-br" },
      { responsavel: "Nações Unidas", titulo: "Prêmio de Direitos Humanos", descricao: "Reconhecimento internacional recebido por sua defesa dos povos indígenas.", url: "https://www.ohchr.org/en/about-us/what-we-do/un-human-rights-prize/2018-recipients" },
      { responsavel: "Wikimedia Commons", titulo: "Joênia Wapichana", descricao: "Coleção de imagens e informações de uso.", url: "https://commons.wikimedia.org/wiki/Category:Joenia_Wapichana" },
    ],
  },
  {
    id: "eliane-potiguara",
    numero: "14",
    grupo: indigenas,
    nome: "Eliane Potiguara",
    periodo: "1950 — presente",
    atuacao: "Escritora, professora e ativista indígena",
    resumo:
      "Pioneira da literatura indígena contemporânea e da organização de mulheres indígenas no Brasil.",
    destaque:
      "A palavra recupera memórias, denuncia violências e fortalece a identidade de um povo.",
    chamada: "Literatura, memória e organização de mulheres indígenas.",
    introducao:
      "Eliane Potiguara é escritora e ativista do povo Potiguara. Sua obra relaciona deslocamento, ancestralidade, identidade, direitos das mulheres e luta indígena.",
    biografia: [
      "Nascida no Rio de Janeiro em uma família Potiguara deslocada de seu território, Eliane formou-se em Letras e trabalhou como professora.",
      "Criou o GRUMIN — Grupo Mulher-Educação Indígena, uma das primeiras organizações voltadas à articulação de mulheres indígenas no país.",
      "Em livros como Metade cara, metade máscara, combina poesia, narrativa e reflexão política para reconstruir memórias e afirmar a presença indígena contemporânea.",
    ],
    timeline: [
      { ano: "1950", titulo: "Nascimento", texto: "Nasce no Rio de Janeiro em uma família Potiguara." },
      { ano: "1980", titulo: "GRUMIN", texto: "Inicia a organização que articula educação, comunicação e direitos de mulheres indígenas." },
      { ano: "2004", titulo: "Metade cara, metade máscara", texto: "Publica uma de suas obras mais conhecidas, unindo poesia e memória." },
      { ano: "2014", titulo: "Ordem do Mérito Cultural", texto: "Recebe reconhecimento nacional por sua contribuição à cultura brasileira." },
    ],
    legado: {
      titulo: "Palavra indígena, memória presente",
      introducao: "Eliane ajudou a consolidar a autoria indígena e a organização política das mulheres.",
      itens: [
        { titulo: "Literatura indígena", texto: "Abriu espaço para narrativas escritas por pessoas indígenas sobre suas próprias histórias e experiências." },
        { titulo: "Mulheres organizadas", texto: "Criou redes para enfrentar violência, deslocamento e invisibilidade de mulheres indígenas." },
        { titulo: "Educação e comunicação", texto: "Usou oficinas, textos e projetos formativos para fortalecer identidade e circulação de saberes." },
      ],
    },
    imagem: commons(
      "Eliane Potiguara.jpg",
      "Retrato da escritora Eliane Potiguara",
      "Eliane Potiguara",
      "marca de domínio público",
    ),
    fonte: { rotulo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/pessoa641360/eliane-potiguara" },
    referencias: [
      { responsavel: "Enciclopédia Itaú Cultural", titulo: "Eliane Potiguara", descricao: "Perfil literário e biográfico da escritora.", url: "https://enciclopedia.itaucultural.org.br/pessoa641360/eliane-potiguara" },
      { responsavel: "Literafro — UFMG", titulo: "Eliane Potiguara", descricao: "Biografia e bibliografia da autora Potiguara.", url: "https://www.letras.ufmg.br/literafro/autoras/193-eliane-potiguara" },
      { responsavel: "Wikimedia Commons", titulo: "Retrato de Eliane Potiguara", descricao: "Origem e condições de uso da imagem.", url: "https://commons.wikimedia.org/wiki/File:Eliane_Potiguara.jpg" },
    ],
  },
  {
    id: "djuena-tikuna",
    numero: "15",
    grupo: indigenas,
    nome: "Djuena Tikuna",
    periodo: "1984 — presente",
    atuacao: "Cantora, compositora e jornalista",
    resumo:
      "Artista Tikuna que leva a língua de seu povo aos palcos e fortalece redes de músicos indígenas.",
    destaque:
      "Cantar em língua Tikuna é manter vivo um modo de sentir, lembrar e compartilhar o mundo.",
    chamada: "Uma voz indígena ocupando os grandes palcos da Amazônia.",
    introducao:
      "Djuena Tikuna nasceu na aldeia Umariaçu, no Amazonas. Sua música afirma a língua Tikuna, a memória de seu povo e a presença de artistas indígenas na cena contemporânea.",
    biografia: [
      "Djuena cresceu entre cantos e narrativas Tikuna e formou-se em Jornalismo. Construiu uma carreira artística ligada à comunicação e à valorização cultural indígena.",
      "Em seu primeiro álbum, Tchautchiüãne, reuniu composições em língua Tikuna. O trabalho foi apresentado no Teatro Amazonas, um marco para a presença indígena naquele palco.",
      "Também idealizou o Wiyae, encontro de música indígena que promove artistas de diferentes povos e regiões.",
    ],
    timeline: [
      { ano: "1984", titulo: "Nascimento", texto: "Nasce em Tabatinga e cresce na aldeia Umariaçu, no Amazonas." },
      { ano: "2017", titulo: "Tchautchiüãne", texto: "Lança seu primeiro álbum e realiza apresentação histórica no Teatro Amazonas." },
      { ano: "2019", titulo: "Wiyae", texto: "Fortalece o encontro dedicado à música indígena contemporânea." },
      { ano: "2021", titulo: "Novas circulações", texto: "Amplia registros audiovisuais e a difusão de seu repertório em plataformas digitais." },
    ],
    legado: {
      titulo: "A língua Tikuna cantada para o mundo",
      introducao: "Djuena conecta tradição, criação contemporânea e autonomia artística.",
      itens: [
        { titulo: "Língua viva", texto: "Faz da música um espaço de transmissão e valorização da língua Tikuna." },
        { titulo: "Protagonismo artístico", texto: "Afirma que músicos indígenas são produtores contemporâneos, não apenas objetos de registro cultural." },
        { titulo: "Rede de artistas", texto: "Cria encontros e oportunidades para que diferentes povos apresentem suas próprias músicas." },
      ],
    },
    imagem: commons(
      "DjuenaTikuna001.jpg",
      "Retrato da cantora Djuena Tikuna",
      "Djuena Tikuna",
      "CC BY-SA 4.0",
      ccBySa4,
    ),
    fonte: { rotulo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/pessoa66047/djuena-tikuna" },
    referencias: [
      { responsavel: "Enciclopédia Itaú Cultural", titulo: "Djuena Tikuna", descricao: "Perfil artístico e biográfico da cantora.", url: "https://enciclopedia.itaucultural.org.br/pessoa66047/djuena-tikuna" },
      { responsavel: "Djuena Tikuna", titulo: "Canal oficial", descricao: "Registros musicais e audiovisuais produzidos pela artista.", url: "https://www.youtube.com/@DjuenaTikuna" },
      { responsavel: "Wikimedia Commons", titulo: "DjuenaTikuna001", descricao: "Fotografia publicada pela própria artista e sua licença.", url: "https://commons.wikimedia.org/wiki/File:DjuenaTikuna001.jpg" },
    ],
  },
  {
    id: "tuire-kayapo",
    numero: "16",
    grupo: indigenas,
    nome: "Tuíre Kayapó",
    periodo: "1969 — 2024",
    atuacao: "Liderança Mẽbêngôkre e ativista ambiental",
    resumo:
      "Símbolo da resistência contra projetos que ameaçam os rios, as florestas e os territórios indígenas.",
    destaque:
      "A defesa do rio e da floresta é inseparável da defesa da vida e da autonomia indígena.",
    chamada: "Uma imagem de resistência que atravessou o mundo.",
    introducao:
      "Tuíre Kayapó, liderança Mẽbêngôkre, tornou-se conhecida internacionalmente ao protestar contra projetos hidrelétricos no rio Xingu. Sua atuação, porém, atravessou décadas de mobilização territorial e organização das mulheres.",
    biografia: [
      "Tuíre nasceu na Terra Indígena Kayapó, no Pará. Desde jovem acompanhou debates e mobilizações pela proteção do Xingu e dos territórios Mẽbêngôkre.",
      "Em 1989, durante o Encontro dos Povos Indígenas do Xingu, encostou a lâmina de um facão no rosto de um diretor de empresa estatal como gesto de alerta contra a destruição causada por barragens.",
      "Continuou participando de encontros, marchas e ações de mulheres indígenas até sua morte, em 2024.",
    ],
    timeline: [
      { ano: "1989", titulo: "Encontro de Altamira", texto: "Realiza o gesto que se torna símbolo mundial da resistência indígena no Xingu." },
      { ano: "2008", titulo: "Xingu Vivo", texto: "Retoma a mobilização pública contra projetos de barragens na região." },
      { ano: "2017", titulo: "Acampamento Terra Livre", texto: "Participa da principal mobilização nacional dos povos indígenas." },
      { ano: "2019", titulo: "Marcha das Mulheres Indígenas", texto: "Integra a primeira marcha nacional organizada por mulheres indígenas." },
    ],
    legado: {
      titulo: "Coragem em defesa do Xingu",
      introducao: "Tuíre tornou visível uma resistência coletiva muito maior que uma única imagem.",
      itens: [
        { titulo: "Defesa dos rios", texto: "Denunciou os impactos sociais, ambientais e culturais de grandes barragens sobre povos do Xingu." },
        { titulo: "Liderança de mulheres", texto: "Ajudou a fortalecer a presença feminina nas decisões e mobilizações indígenas." },
        { titulo: "Comunicação política", texto: "Seu gesto direto atravessou fronteiras e tornou compreensível a urgência da defesa territorial." },
      ],
    },
    imagem: commons(
      "MARCHA MULHERES INDÍGENAS-MARIA FERNANDA RIBEIRO (15) (48531847451).jpg",
      "Tuíre Kayapó durante a Marcha das Mulheres Indígenas de 2019",
      "Maria Fernanda Ribeiro / Amazônia Real",
      "CC BY 2.0",
      ccBy2,
    ),
    fonte: { rotulo: "Instituto Socioambiental", url: "https://www.socioambiental.org/noticias-socioambientais/tuire-kayapo-simbolo-da-resistencia-indigena" },
    referencias: [
      { responsavel: "Instituto Socioambiental", titulo: "Tuíre Kayapó", descricao: "Memória da liderança e de sua atuação em defesa do Xingu.", url: "https://www.socioambiental.org/noticias-socioambientais/tuire-kayapo-simbolo-da-resistencia-indigena" },
      { responsavel: "Amazônia Real", titulo: "Tuíre e a resistência das mulheres indígenas", descricao: "Cobertura jornalística de sua presença em mobilizações nacionais.", url: "https://amazoniareal.com.br/" },
      { responsavel: "Wikimedia Commons", titulo: "Tuíre na Marcha das Mulheres Indígenas", descricao: "Origem e licença da fotografia de 2019.", url: "https://commons.wikimedia.org/wiki/File:MARCHA_MULHERES_IND%C3%8DGENAS-MARIA_FERNANDA_RIBEIRO_(15)_(48531847451).jpg" },
    ],
  },
  {
    id: "alessandra-korap",
    numero: "17",
    grupo: indigenas,
    nome: "Alessandra Korap",
    periodo: "1984 — presente",
    atuacao: "Liderança Munduruku e defensora ambiental",
    resumo:
      "Liderança Munduruku reconhecida pela defesa do território Sawré Muybu contra mineração e desmatamento.",
    destaque:
      "Proteger o território significa garantir que as próximas gerações possam viver sua cultura e decidir seu futuro.",
    chamada: "A floresta defendida com organização, denúncia e direito.",
    introducao:
      "Alessandra Korap, do povo Munduruku, atua na região do médio Tapajós, no Pará. Tornou-se uma voz internacional contra a mineração, o garimpo e outros projetos que ameaçam terras indígenas.",
    biografia: [
      "Nascida em Itaituba, Alessandra cresceu acompanhando as transformações no território Munduruku. Participou de associações comunitárias e da organização de mulheres de seu povo.",
      "Formou-se em Direito para fortalecer a defesa jurídica dos territórios. Sua atuação inclui denúncias, articulação com instituições e comunicação internacional.",
      "Recebeu o Prêmio Robert F. Kennedy de Direitos Humanos em 2020 e o Goldman Environmental Prize em 2023.",
    ],
    timeline: [
      { ano: "2016", titulo: "Associação Pariri", texto: "Amplia sua atuação na organização Munduruku da região do médio Tapajós." },
      { ano: "2019", titulo: "Mulheres Munduruku", texto: "Fortalece mobilizações contra atividades ilegais e ameaças territoriais." },
      { ano: "2020", titulo: "Prêmio de Direitos Humanos", texto: "Recebe reconhecimento da Robert F. Kennedy Human Rights." },
      { ano: "2023", titulo: "Goldman Prize", texto: "É premiada internacionalmente por sua liderança ambiental." },
    ],
    legado: {
      titulo: "Defesa territorial com voz própria",
      introducao: "Alessandra conecta organização local, ferramentas jurídicas e pressão internacional.",
      itens: [
        { titulo: "Território Sawré Muybu", texto: "Atua para garantir reconhecimento e proteção contra mineração, garimpo e desmatamento." },
        { titulo: "Mulheres Munduruku", texto: "Fortalece a presença das mulheres nas decisões comunitárias e na linha de frente das mobilizações." },
        { titulo: "Incidência internacional", texto: "Leva denúncias e propostas Munduruku a redes globais de direitos humanos e ambiente." },
      ],
    },
    imagem: commons(
      "CDH - Comissão de Direitos Humanos e Legislação Participativa (49644134922) (cropped).jpg",
      "Retrato de Alessandra Korap em audiência no Senado Federal",
      "Senado Federal",
      "CC BY 2.0",
      ccBy2,
    ),
    fonte: { rotulo: "Goldman Environmental Prize", url: "https://www.goldmanprize.org/recipient/alessandra-korap-munduruku/" },
    referencias: [
      { responsavel: "Goldman Environmental Prize", titulo: "Alessandra Korap Munduruku", descricao: "Perfil da premiada e contexto da defesa territorial no Tapajós.", url: "https://www.goldmanprize.org/recipient/alessandra-korap-munduruku/" },
      { responsavel: "Robert F. Kennedy Human Rights", titulo: "Alessandra Korap", descricao: "Reconhecimento por sua atuação em direitos humanos.", url: "https://rfkhumanrights.org/person/alessandra-korap-munduruku/" },
      { responsavel: "Wikimedia Commons", titulo: "Alessandra Korap no Senado", descricao: "Autoria e licença da fotografia usada na página.", url: "https://commons.wikimedia.org/wiki/File:CDH_-_Comiss%C3%A3o_de_Direitos_Humanos_e_Legisla%C3%A7%C3%A3o_Participativa_(49644134922)_(cropped).jpg" },
    ],
  },
  {
    id: "daiara-tukano",
    numero: "18",
    grupo: indigenas,
    nome: "Daiara Tukano",
    periodo: "1982 — presente",
    atuacao: "Artista, educadora, comunicadora e ativista",
    resumo:
      "Artista Tukano que cria imagens, murais e instalações ligadas à memória, à espiritualidade e aos direitos indígenas.",
    destaque:
      "A arte indígena contemporânea não está presa ao passado: ela produz presença, futuro e transformação.",
    chamada: "Cor, memória e espiritualidade ocupando museus e cidades.",
    introducao:
      "Daiara Tukano pertence ao povo Yepá Mahsã, conhecido como Tukano. Sua produção reúne pintura, mural, instalação, performance, educação e comunicação.",
    biografia: [
      "Nascida em São Paulo e criada em diferentes regiões, Daiara formou-se em Artes Visuais e fez mestrado em Direitos Humanos. Sua trajetória combina pesquisa estética e atuação no movimento indígena.",
      "Participou da criação da Rádio Yandê, uma plataforma pioneira de comunicação indígena pela internet.",
      "Expôs em museus e bienais, levando cosmologias Tukano a obras de grande escala e questionando a separação entre arte, política e espiritualidade.",
    ],
    timeline: [
      { ano: "2013", titulo: "Rádio Yandê", texto: "Participa da construção de uma rede de comunicação produzida por indígenas." },
      { ano: "2017", titulo: "Direitos humanos", texto: "Aprofunda pesquisas sobre memória, identidade e representação indígena." },
      { ano: "2020", titulo: "Véxoa", texto: "Integra a exposição de arte indígena contemporânea na Pinacoteca de São Paulo." },
      { ano: "2021", titulo: "Bienal de São Paulo", texto: "Apresenta trabalhos que articulam cor, espiritualidade e presença indígena." },
    ],
    legado: {
      titulo: "Arte indígena no tempo presente",
      introducao: "Daiara transforma espaços de arte e comunicação a partir de perspectivas Tukano.",
      itens: [
        { titulo: "Visibilidade artística", texto: "Contribui para que artistas indígenas ocupem museus sem abandonar suas próprias referências e modos de criar." },
        { titulo: "Comunicação indígena", texto: "Ajuda a construir meios nos quais povos indígenas definem pautas, linguagens e narrativas." },
        { titulo: "Cosmologia e cidade", texto: "Leva imagens e histórias Tukano a murais, exposições e espaços públicos de grande circulação." },
      ],
    },
    imagem: commons(
      "Daiaratukano-foto dimitrie-marsp2021.jpg",
      "Retrato da artista Daiara Tukano em 2021",
      "Daiara Tukano",
      "CC BY-SA 4.0",
      ccBySa4,
    ),
    fonte: { rotulo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/pessoa640721/daiara-tukano" },
    referencias: [
      { responsavel: "Enciclopédia Itaú Cultural", titulo: "Daiara Tukano", descricao: "Perfil da artista e de sua produção contemporânea.", url: "https://enciclopedia.itaucultural.org.br/pessoa640721/daiara-tukano" },
      { responsavel: "34ª Bienal de São Paulo", titulo: "Daiara Tukano", descricao: "Apresentação de obras e pesquisa artística na Bienal.", url: "https://34.bienal.org.br/artistas/8747" },
      { responsavel: "Wikimedia Commons", titulo: "Retrato de Daiara Tukano", descricao: "Fotografia disponibilizada pela artista e sua licença.", url: "https://commons.wikimedia.org/wiki/File:Daiaratukano-foto_dimitrie-marsp2021.jpg" },
    ],
  },
  {
    id: "txai-surui",
    numero: "19",
    grupo: indigenas,
    nome: "Txai Suruí",
    periodo: "1997 — presente",
    atuacao: "Ativista climática e produtora audiovisual",
    resumo:
      "Jovem liderança Paiter Suruí que conecta defesa da Amazônia, comunicação e mobilização climática.",
    destaque:
      "A juventude indígena não fala apenas sobre o futuro: protege no presente os territórios que tornam esse futuro possível.",
    chamada: "Da Terra Indígena Sete de Setembro aos fóruns climáticos globais.",
    introducao:
      "Txai Suruí, do povo Paiter Suruí, atua na defesa da Amazônia e na comunicação de pautas indígenas. Sua presença em fóruns internacionais reforça o papel dos povos originários nas respostas à crise climática.",
    biografia: [
      "Nascida em Rondônia, Txai cresceu acompanhando o trabalho de proteção territorial de sua família e de seu povo. Estudou Direito e participa de organizações da juventude indígena.",
      "Em 2021, discursou na abertura da conferência climática COP26, levando a perspectiva indígena a lideranças mundiais.",
      "Também participou da produção do documentário O Território, que acompanha a resistência do povo Uru-eu-wau-wau contra invasões e desmatamento.",
    ],
    timeline: [
      { ano: "2019", titulo: "Juventude indígena", texto: "Amplia sua atuação em redes de proteção territorial e comunicação." },
      { ano: "2021", titulo: "COP26", texto: "Fala na abertura da conferência do clima em Glasgow." },
      { ano: "2022", titulo: "O Território", texto: "O documentário do qual participa da produção chega ao público internacional." },
      { ano: "2023", titulo: "Reconhecimento", texto: "Recebe prêmio por sua contribuição ambiental e segue circulando em debates globais." },
    ],
    legado: {
      titulo: "Juventude indígena pela justiça climática",
      introducao: "Txai articula território, audiovisual e ação internacional.",
      itens: [
        { titulo: "Voz jovem", texto: "Torna visíveis as propostas e responsabilidades da juventude indígena na proteção ambiental." },
        { titulo: "Comunicação e cinema", texto: "Usa narrativas audiovisuais para documentar ameaças e resistências no território." },
        { titulo: "Clima e direitos", texto: "Mostra que enfrentar a crise climática depende de garantir os direitos dos povos que protegem as florestas." },
      ],
    },
    imagem: commons(
      "Txai Suruí 2023.jpg",
      "Retrato de Txai Suruí em 2023",
      "Embaixada dos Estados Unidos no Brasil",
      "CC0",
      cc0,
    ),
    fonte: { rotulo: "Nações Unidas — Ação Climática", url: "https://www.un.org/en/climatechange" },
    referencias: [
      { responsavel: "Nações Unidas", titulo: "Conferência do Clima COP26", descricao: "Contexto da participação de Txai Suruí na abertura da conferência.", url: "https://www.un.org/en/climatechange/cop26" },
      { responsavel: "National Geographic Documentary Films", titulo: "The Territory", descricao: "Informações sobre o documentário e sua equipe de produção indígena.", url: "https://films.nationalgeographic.com/the-territory" },
      { responsavel: "Wikimedia Commons", titulo: "Txai Suruí em 2023", descricao: "Origem e licença aberta do retrato apresentado.", url: "https://commons.wikimedia.org/wiki/File:Txai_Suru%C3%AD_2023.jpg" },
    ],
  },
  {
    id: "watatakalu-yawalapiti",
    numero: "20",
    grupo: indigenas,
    nome: "Watatakalu Yawalapiti",
    periodo: "1980 — presente",
    atuacao: "Liderança Yawalapiti e defensora dos direitos das mulheres",
    resumo:
      "Liderança do Xingu que articula mulheres indígenas, cultura, território e proteção ambiental.",
    destaque:
      "Quando as mulheres indígenas se encontram, experiências diferentes se transformam em uma força comum.",
    chamada: "Organização de mulheres para proteger corpos, culturas e territórios.",
    introducao:
      "Watatakalu Yawalapiti é liderança do Território Indígena do Xingu. Sua atuação fortalece a participação de mulheres nas decisões comunitárias e nas mobilizações nacionais.",
    biografia: [
      "Nascida no Mato Grosso, Watatakalu pertence ao povo Yawalapiti e cresceu em uma família de lideranças do Xingu. Aprendeu desde cedo a importância das alianças entre povos.",
      "Participou da organização da primeira Marcha das Mulheres Indígenas, realizada em Brasília em 2019, reunindo milhares de participantes de diferentes regiões.",
      "Sua atuação aborda proteção territorial, enfrentamento à violência, saúde, transmissão cultural e autonomia das mulheres indígenas.",
    ],
    timeline: [
      { ano: "2000", titulo: "Liderança no Xingu", texto: "Passa a ampliar sua participação em articulações comunitárias e interculturais." },
      { ano: "2015", titulo: "Mulheres do território", texto: "Fortalece redes que discutem direitos, saúde e proteção cultural." },
      { ano: "2019", titulo: "Primeira Marcha", texto: "Ajuda a organizar a Marcha das Mulheres Indígenas em Brasília." },
      { ano: "2020", titulo: "Articulação nacional", texto: "Contribui para redes permanentes de mulheres indígenas em diferentes biomas." },
    ],
    legado: {
      titulo: "Mulheres, território e continuidade",
      introducao: "Watatakalu ajuda a transformar encontros entre mulheres em organização política duradoura.",
      itens: [
        { titulo: "Marcha das Mulheres Indígenas", texto: "Contribuiu para uma mobilização histórica que reuniu pautas de povos de todo o Brasil." },
        { titulo: "Participação das mulheres", texto: "Defende que mulheres ocupem espaços de decisão dentro e fora das comunidades." },
        { titulo: "Cultura e ambiente", texto: "Relaciona a autonomia feminina à proteção das línguas, dos rituais, das águas e dos territórios." },
      ],
    },
    imagem: commons(
      "Watatakalu Yawalapiti, CDH - Comissão de Direitos Humanos e Legislação Participativa (49643681718) (cropped).jpg",
      "Retrato de Watatakalu Yawalapiti em audiência pública",
      "Senado Federal",
      "CC BY 2.0",
      ccBy2,
    ),
    fonte: { rotulo: "Museu da Pessoa", url: "https://museudapessoa.org/historia-de-vida/um-feminismo-ind-gena/" },
    referencias: [
      { responsavel: "Museu da Pessoa", titulo: "Um feminismo indígena", descricao: "História de vida narrada por Watatakalu Yawalapiti.", url: "https://museudapessoa.org/historia-de-vida/um-feminismo-ind-gena/" },
      { responsavel: "Articulação Nacional das Mulheres Indígenas Guerreiras da Ancestralidade", titulo: "ANMIGA", descricao: "Rede nacional ligada às mobilizações de mulheres indígenas.", url: "https://anmiga.org/" },
      { responsavel: "Wikimedia Commons", titulo: "Watatakalu Yawalapiti", descricao: "Coleção de registros e informações de licenciamento.", url: "https://commons.wikimedia.org/wiki/Category:Watatakalu_Yawalapiti" },
    ],
  },
];

for (const perfil of perfis) {
  perfil.destino ??= `${perfil.id}.html`;
}

