import { writeFile } from "node:fs/promises";
import { perfis } from "./dados-perfis.mjs";

const escapar = (valor = "") =>
  String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const nomeQuebrado = (nome) => {
  const partes = nome.split(" ");
  const ultimo = partes.pop();
  return `<span>${escapar(partes.join(" "))}</span><span>${escapar(ultimo)}</span>`;
};

const credito = (imagem) => {
  const licenca = imagem.licencaUrl
    ? `<a href="${escapar(imagem.licencaUrl)}" target="_blank" rel="noopener noreferrer">${escapar(imagem.licenca)}</a>`
    : escapar(imagem.licenca);

  return `Foto: <a href="${escapar(imagem.creditoUrl)}" target="_blank" rel="noopener noreferrer">${escapar(imagem.credito)}</a> · ${licenca}`;
};

const pagina = (perfil) => `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Conheça a trajetória de ${escapar(perfil.nome)}, sua biografia, marcos, legado e referências." />
    <title>${escapar(perfil.nome)} | Vozes Negras e Indígenas</title>
    <link rel="stylesheet" href="global.css" />
    <link rel="stylesheet" href="transicao.css" />
    <script src="dados-perfis.js" defer></script>
    <script src="navegacao.js" defer></script>
    <script src="script.js" defer></script>
    <script src="relacionadas.js" defer></script>
    <noscript><style>.div_transicao { display: none; }</style></noscript>
  </head>
  <body class="pagina-perfil-completa" data-profile-id="${escapar(perfil.id)}">
    <div class="div_transicao" aria-hidden="true"></div>
    <a class="skip-link" href="#conteudo-principal">Pular para o conteúdo</a>
    <header class="site-header">
      <nav class="site-nav" aria-label="Navegação principal">
        <a class="site-nav__marca" href="index.html#inicio" aria-label="Vozes Negras e Indígenas — página inicial">
          <span class="site-nav__marca-titulo">Vozes</span>
          <span class="site-nav__marca-complemento">Negras e Indígenas</span>
        </a>
        <ul class="site-nav__links">
          <li><a href="index.html#inicio">Início</a></li>
          <li><a href="#perfil-${escapar(perfil.id)}" aria-current="page">${escapar(perfil.nome)}</a></li>
          <li><a href="#biografia-${escapar(perfil.id)}">Biografia</a></li>
          <li><a href="#linha-do-tempo-${escapar(perfil.id)}">Linha do tempo</a></li>
          <li><a href="#legado-${escapar(perfil.id)}">Legado</a></li>
          <li><a href="#galeria-${escapar(perfil.id)}">Galeria</a></li>
          <li><a href="#referencias-${escapar(perfil.id)}">Referências</a></li>
          <li><a href="#trajetorias-relacionadas">Outras mulheres</a></li>
        </ul>
      </nav>
    </header>

    <main id="conteudo-principal" tabindex="-1">
      <section id="perfil-${escapar(perfil.id)}" class="trajetoria trajetoria-reveal" aria-labelledby="titulo-${escapar(perfil.id)}" tabindex="-1">
        <span class="trajetoria__numero" aria-hidden="true">${escapar(perfil.numero)}</span>
        <figure class="trajetoria__retrato">
          <div class="trajetoria__imagem">
            <img src="${escapar(perfil.imagem.src)}" alt="${escapar(perfil.imagem.alt)}" width="${perfil.imagem.largura}" height="${perfil.imagem.altura}" decoding="async" />
          </div>
          <figcaption>${credito(perfil.imagem)}</figcaption>
        </figure>
        <header class="trajetoria__cabecalho">
          <p class="trajetoria__periodo">${escapar(perfil.periodo)}</p>
          <h1 id="titulo-${escapar(perfil.id)}">${nomeQuebrado(perfil.nome)}</h1>
          <p class="trajetoria__atuacao">${escapar(perfil.atuacao)}</p>
        </header>
        <div class="trajetoria__historia">
          <blockquote class="trajetoria__citacao">
            <p>${escapar(perfil.destaque)}</p>
            <footer><cite>Curadoria da exposição</cite><span>Síntese sobre ${escapar(perfil.nome)}</span></footer>
          </blockquote>
          <p class="trajetoria__chamada">${escapar(perfil.chamada)}</p>
          <p>${escapar(perfil.introducao)}</p>
          <a class="trajetoria__fonte" href="${escapar(perfil.fonte.url)}" target="_blank" rel="noopener noreferrer">Consultar ${escapar(perfil.fonte.rotulo)}</a>
        </div>
      </section>

      <section id="biografia-${escapar(perfil.id)}" class="biografia" aria-labelledby="titulo-biografia-${escapar(perfil.id)}">
        <figure class="biografia__retrato">
          <div class="biografia__imagem">
            <img src="${escapar(perfil.imagem.src)}" alt="${escapar(perfil.imagem.alt)}" width="${perfil.imagem.largura}" height="${perfil.imagem.altura}" loading="lazy" decoding="async" />
          </div>
          <figcaption>${credito(perfil.imagem)}</figcaption>
        </figure>
        <div class="biografia__conteudo">
          <h2 id="titulo-biografia-${escapar(perfil.id)}">Uma vida que abriu caminhos</h2>
          ${perfil.biografia.map((texto) => `<p>${escapar(texto)}</p>`).join("\n          ")}
          <a class="biografia__fonte" href="${escapar(perfil.fonte.url)}" target="_blank" rel="noopener noreferrer">Consultar ${escapar(perfil.fonte.rotulo)}</a>
        </div>
      </section>

      <section id="linha-do-tempo-${escapar(perfil.id)}" class="linha-do-tempo" aria-labelledby="titulo-linha-${escapar(perfil.id)}">
        <div class="linha-do-tempo__cabecalho">
          <h2 id="titulo-linha-${escapar(perfil.id)}">Marcos de uma trajetória</h2>
          <p>Momentos que ajudam a compreender a atuação de ${escapar(perfil.nome)}.</p>
        </div>
        <ol class="linha-do-tempo__eventos">
          ${perfil.timeline.map((evento) => `<li><article><time>${escapar(evento.ano)}</time><h3>${escapar(evento.titulo)}</h3><p>${escapar(evento.texto)}</p></article></li>`).join("\n          ")}
        </ol>
        <p class="linha-do-tempo__fonte">Fonte dos acontecimentos: <a href="${escapar(perfil.fonte.url)}" target="_blank" rel="noopener noreferrer">${escapar(perfil.fonte.rotulo)}</a>.</p>
      </section>

      <section id="legado-${escapar(perfil.id)}" class="legado" aria-labelledby="titulo-legado-${escapar(perfil.id)}">
        <header class="legado__cabecalho">
          <h2 id="titulo-legado-${escapar(perfil.id)}">${escapar(perfil.legado.titulo)}</h2>
          <p>${escapar(perfil.legado.introducao)}</p>
        </header>
        <ul class="legado__contribuicoes">
          ${perfil.legado.itens.map((item) => `<li><article><h3>${escapar(item.titulo)}</h3><p>${escapar(item.texto)}</p></article></li>`).join("\n          ")}
        </ul>
        <p class="legado__fonte">Conteúdo baseado em <a href="${escapar(perfil.fonte.url)}" target="_blank" rel="noopener noreferrer">${escapar(perfil.fonte.rotulo)}</a>.</p>
      </section>

      <section id="galeria-${escapar(perfil.id)}" class="galeria" aria-labelledby="titulo-galeria-${escapar(perfil.id)}">
        <header class="galeria__cabecalho">
          <h2 id="titulo-galeria-${escapar(perfil.id)}">Presença e memória</h2>
          <p>Um registro visual que acompanha a trajetória de ${escapar(perfil.nome)}.</p>
        </header>
        <ul class="galeria__itens galeria__itens--registro-unico">
          <li>
            <figure class="galeria__item">
              <a class="galeria__abrir" href="${escapar(perfil.imagem.src)}" aria-label="Ampliar imagem: ${escapar(perfil.imagem.alt)}" data-lightbox data-lightbox-caption="${escapar(perfil.imagem.alt)}" data-lightbox-credit="${escapar(perfil.imagem.credito)}" data-lightbox-credit-href="${escapar(perfil.imagem.creditoUrl)}"${perfil.imagem.licencaUrl ? ` data-lightbox-license="${escapar(perfil.imagem.licenca)}" data-lightbox-license-href="${escapar(perfil.imagem.licencaUrl)}"` : ""}>
                <img src="${escapar(perfil.imagem.src)}" alt="${escapar(perfil.imagem.alt)}" width="${perfil.imagem.largura}" height="${perfil.imagem.altura}" loading="lazy" decoding="async" />
                <span aria-hidden="true">Ampliar imagem</span>
              </a>
              <figcaption class="galeria__legenda">${escapar(perfil.imagem.alt)}. ${credito(perfil.imagem)}</figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <section id="referencias-${escapar(perfil.id)}" class="referencias" aria-labelledby="titulo-referencias-${escapar(perfil.id)}">
        <header class="referencias__cabecalho">
          <h2 id="titulo-referencias-${escapar(perfil.id)}">Fontes para continuar</h2>
          <p>Referências usadas para organizar esta trajetória e caminhos para aprofundar a pesquisa.</p>
        </header>
        <ul class="referencias__lista">
          ${perfil.referencias.map((referencia) => `<li><article><p class="referencias__responsavel">${escapar(referencia.responsavel)}</p><div class="referencias__conteudo"><h3>${escapar(referencia.titulo)}</h3><p>${escapar(referencia.descricao)}</p><a href="${escapar(referencia.url)}" target="_blank" rel="noopener noreferrer">Consultar fonte</a></div></article></li>`).join("\n          ")}
        </ul>
      </section>

      <section id="trajetorias-relacionadas" class="relacionadas relacionadas--perfil" aria-labelledby="titulo-relacionadas">
        <header class="relacionadas__cabecalho">
          <h2 id="titulo-relacionadas">Continue a exposição</h2>
          <p>Explore as 10 trajetórias de mulheres negras e as 10 trajetórias de mulheres indígenas.</p>
        </header>
        <ul class="relacionadas__lista" data-relacionadas-lista></ul>
        <noscript><p class="relacionadas__sem-script">Ative o JavaScript ou volte à <a href="index.html#trajetorias-relacionadas">página inicial</a> para conhecer as outras trajetórias.</p></noscript>
      </section>

      <dialog class="galeria__lightbox" aria-labelledby="galeria-lightbox-titulo" aria-modal="true" aria-hidden="true" data-state="closed">
        <h2 id="galeria-lightbox-titulo" class="galeria__titulo-ampliado">Imagem ampliada</h2>
        <button class="galeria__fechar" type="button" aria-label="Fechar imagem ampliada"><span aria-hidden="true">&times;</span></button>
        <figure class="galeria__imagem-ampliada">
          <img class="galeria__imagem" src="" alt="" />
          <figcaption class="galeria__credito-ampliado">
            <span class="galeria__descricao-ampliada"></span>
            <a class="galeria__credito-link" href="" target="_blank" rel="noopener noreferrer"></a>
            <a class="galeria__licenca-link" href="" target="_blank" rel="noopener noreferrer" hidden></a>
          </figcaption>
        </figure>
      </dialog>
    </main>
  </body>
</html>
`;

const catalogo = perfis.map((perfil) => ({
  id: perfil.id,
  numero: perfil.numero,
  grupo: perfil.grupo,
  nome: perfil.nome,
  periodo: perfil.periodo,
  atuacao: perfil.atuacao,
  resumo: perfil.resumo,
  destino: perfil.destino,
  imagem: perfil.imagem,
}));

await writeFile(
  "dados-perfis.js",
  `window.vozesPerfis = ${JSON.stringify(catalogo, null, 2)};\n`,
  "utf8",
);

for (const perfil of perfis.filter(({ id }) => id !== "angela-davis")) {
  await writeFile(`${perfil.id}.html`, pagina(perfil), "utf8");
}

console.log(`Geradas ${perfis.length - 1} páginas e catálogo com ${perfis.length} trajetórias.`);
