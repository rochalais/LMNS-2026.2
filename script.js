const reduzirMovimento = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const revelarAoRolar = (elemento, classeAguardando, limite = 0.18) => {
  if (!elemento) return;

  if (!("IntersectionObserver" in window) || reduzirMovimento) {
    elemento.classList.add("visivel");
    return;
  }

  let observador;

  const revelar = () => {
    elemento.classList.add("visivel");
    observador?.disconnect();
  };

  observador = new IntersectionObserver(
    ([entrada]) => {
      if (entrada?.isIntersecting && entrada.intersectionRatio >= limite) {
        revelar();
      }
    },
    { threshold: [limite] },
  );

  elemento.classList.add(classeAguardando);
  observador.observe(elemento);
};

const exposicao = document.querySelector(".exposicao-fade");
const angelaDavis = document.querySelector(".trajetoria-reveal");

revelarAoRolar(exposicao, "exposicao-fade--aguardando");
revelarAoRolar(angelaDavis, "trajetoria-reveal--aguardando", 0.12);

const ativarRolagemSuave = (seletorDoLink, destino) => {
  const link = document.querySelector(seletorDoLink);

  if (!link || !destino) return;

  link.addEventListener("click", (evento) => {
    evento.preventDefault();
    destino.scrollIntoView({
      behavior: reduzirMovimento ? "auto" : "smooth",
      block: "start",
    });

    window.setTimeout(
      () => destino.focus({ preventScroll: true }),
      reduzirMovimento ? 0 : 650,
    );
  });
};

ativarRolagemSuave(".home-hero__acao", exposicao);
ativarRolagemSuave(".exposicao__primeira", angelaDavis);

const galeriaLightbox = document.querySelector(".galeria__lightbox");
const lightboxImagem = galeriaLightbox?.querySelector(".galeria__imagem");
const lightboxDescricao = galeriaLightbox?.querySelector(
  ".galeria__descricao-ampliada",
);
const lightboxCredito = galeriaLightbox?.querySelector(
  ".galeria__credito-link",
);
const lightboxLicenca = galeriaLightbox?.querySelector(
  ".galeria__licenca-link",
);
const fecharLightbox = galeriaLightbox?.querySelector(".galeria__fechar");

if (
  typeof HTMLDialogElement !== "undefined" &&
  galeriaLightbox instanceof HTMLDialogElement &&
  lightboxImagem instanceof HTMLImageElement &&
  lightboxDescricao instanceof HTMLElement &&
  lightboxCredito instanceof HTMLAnchorElement &&
  lightboxLicenca instanceof HTMLAnchorElement &&
  fecharLightbox instanceof HTMLButtonElement
) {
  let acionadorAnterior = null;
  let estadoDaRolagem = null;

  const bloquearRolagem = () => {
    if (estadoDaRolagem) return;

    estadoDaRolagem = {
      x: window.scrollX,
      y: window.scrollY,
      bodyTop: document.body.style.top,
      bodyLeft: document.body.style.left,
    };

    document.documentElement.classList.add("lightbox-aberto");
    document.body.classList.add("lightbox-aberto");
    document.body.style.top = `-${estadoDaRolagem.y}px`;
    document.body.style.left = `-${estadoDaRolagem.x}px`;
  };

  const restaurarRolagem = () => {
    if (!estadoDaRolagem) return;

    const { x, y, bodyTop, bodyLeft } = estadoDaRolagem;
    estadoDaRolagem = null;

    document.documentElement.classList.remove("lightbox-aberto");
    document.body.classList.remove("lightbox-aberto");
    document.body.style.top = bodyTop;
    document.body.style.left = bodyLeft;
    window.scrollTo({ left: x, top: y, behavior: "auto" });
  };

  const atualizarVisibilidade = (aberto) => {
    galeriaLightbox.setAttribute("aria-hidden", String(!aberto));
    galeriaLightbox.dataset.state = aberto ? "open" : "closed";
  };

  const fecharDialogo = () => {
    if (!galeriaLightbox.open) return;

    galeriaLightbox.close();
  };

  document.querySelectorAll("[data-lightbox]").forEach((acionador) => {
    if (!(acionador instanceof HTMLAnchorElement)) return;

    acionador.addEventListener("click", (evento) => {
      const imagem = acionador.querySelector("img");
      if (!imagem) return;

      evento.preventDefault();
      acionadorAnterior = acionador;

      lightboxImagem.src = imagem.currentSrc || imagem.src;
      lightboxImagem.alt = imagem.alt;
      lightboxDescricao.textContent = acionador.dataset.lightboxCaption || "";
      lightboxCredito.href =
        acionador.dataset.lightboxCreditHref || imagem.src;
      lightboxCredito.textContent =
        acionador.dataset.lightboxCredit || "Crédito da imagem";
      lightboxLicenca.href = acionador.dataset.lightboxLicenseHref || "";
      lightboxLicenca.textContent = acionador.dataset.lightboxLicense || "";
      lightboxLicenca.hidden = !acionador.dataset.lightboxLicenseHref;

      galeriaLightbox.showModal();
      atualizarVisibilidade(true);
      bloquearRolagem();
      fecharLightbox.focus();
    });
  });

  fecharLightbox.addEventListener("click", () => {
    fecharDialogo();
  });

  galeriaLightbox.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
      evento.preventDefault();
      fecharDialogo();
    }
  });

  galeriaLightbox.addEventListener("cancel", (evento) => {
    evento.preventDefault();
    fecharDialogo();
  });

  galeriaLightbox.addEventListener("click", (evento) => {
    if (evento.target !== galeriaLightbox) return;

    const limites = galeriaLightbox.getBoundingClientRect();
    const clicouNoFundo =
      evento.clientX < limites.left ||
      evento.clientX > limites.right ||
      evento.clientY < limites.top ||
      evento.clientY > limites.bottom;

    if (clicouNoFundo) {
      fecharDialogo();
    }
  });

  galeriaLightbox.addEventListener("close", () => {
    atualizarVisibilidade(false);
    restaurarRolagem();
    acionadorAnterior?.focus({ preventScroll: true });
    acionadorAnterior = null;
  });
}
