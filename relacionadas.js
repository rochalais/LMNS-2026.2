(() => {
  const perfis = Array.isArray(window.vozesPerfis)
    ? window.vozesPerfis
    : [];
  const lista = document.querySelector("[data-relacionadas-lista]");
  const perfilAtual = document.body.dataset.profileId;
  const eCatalogoDaPaginaInicial =
    perfilAtual === "angela-davis" &&
    !document.body.classList.contains("pagina-perfil-completa");

  if (!lista || perfis.length === 0) {
    return;
  }

  const criarLinkExterno = (texto, destino) => {
    const link = document.createElement("a");
    link.href = destino;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = texto;
    return link;
  };

  const criarTituloGrupo = (grupo) => {
    const item = document.createElement("li");
    const titulo = document.createElement("h3");
    const total = perfis.filter((perfil) => perfil.grupo === grupo).length;

    item.className = "relacionadas__grupo-titulo";
    titulo.textContent = `${grupo} — ${total} trajetórias`;
    item.append(titulo);
    return item;
  };

  const criarCard = (perfil) => {
    const item = document.createElement("li");
    const card = document.createElement("article");
    const figura = document.createElement("figure");
    const moldura = document.createElement("div");
    const imagem = document.createElement("img");
    const legenda = document.createElement("figcaption");
    const conteudo = document.createElement("div");
    const grupo = document.createElement("p");
    const nome = document.createElement("h3");
    const resumo = document.createElement("p");
    const acao = document.createElement("a");

    item.dataset.grupo = perfil.grupo;
    card.className = `relacionadas__card relacionadas__card--${perfil.id}`;
    moldura.className = "relacionadas__imagem";
    conteudo.className = "relacionadas__conteudo";
    grupo.className = "relacionadas__tipo";
    acao.className = "relacionadas__acao";

    imagem.src = perfil.imagem.src;
    imagem.alt = perfil.imagem.alt;
    imagem.width = perfil.imagem.largura;
    imagem.height = perfil.imagem.altura;
    imagem.loading = "lazy";
    imagem.decoding = "async";

    legenda.append(
      "Foto: ",
      criarLinkExterno(perfil.imagem.credito, perfil.imagem.creditoUrl),
      " · ",
    );
    if (perfil.imagem.licencaUrl) {
      legenda.append(
        criarLinkExterno(perfil.imagem.licenca, perfil.imagem.licencaUrl),
      );
    } else {
      legenda.append(perfil.imagem.licenca);
    }

    grupo.textContent = perfil.grupo === "Mulheres indígenas"
      ? "Trajetória indígena"
      : "Trajetória negra";
    nome.textContent = perfil.nome;
    resumo.textContent = perfil.resumo;
    acao.href = perfil.destino;
    acao.setAttribute("aria-label", `Conhecer a trajetória de ${perfil.nome}`);
    acao.textContent = "Conhecer trajetória";

    moldura.append(imagem);
    figura.append(moldura, legenda);
    conteudo.append(grupo, nome, resumo, acao);
    card.append(figura, conteudo);
    item.append(card);
    return item;
  };

  const fragmento = document.createDocumentFragment();
  const grupos = ["Mulheres negras", "Mulheres indígenas"];

  grupos.forEach((grupo) => {
    fragmento.append(criarTituloGrupo(grupo));
    perfis
      .filter(
        (perfil) =>
          perfil.grupo === grupo &&
          (eCatalogoDaPaginaInicial || perfil.id !== perfilAtual),
      )
      .forEach((perfil) => fragmento.append(criarCard(perfil)));
  });

  lista.replaceChildren(fragmento);
})();
