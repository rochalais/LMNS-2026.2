(() => {
  const transicao = document.querySelector(".div_transicao");

  if (!(transicao instanceof HTMLElement)) {
    return;
  }

  const reduzirMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const finalizarEntrada = () => {
    if (reduzirMovimento) {
      transicao.hidden = true;
      return;
    }

    requestAnimationFrame(() => {
      transicao.classList.add("div_transicao--liberada");
    });

    window.setTimeout(() => {
      transicao.hidden = true;
    }, 400);
  };

  const possuiTeclaModificadora = (evento) =>
    evento.altKey || evento.ctrlKey || evento.metaKey || evento.shiftKey;

  const eDestinoInterno = (destino) => {
    if (destino.protocol === "file:") {
      return window.location.protocol === "file:";
    }

    return destino.origin === window.location.origin;
  };

  const deveUsarTransicao = (evento, link) => {
    if (
      evento.defaultPrevented ||
      evento.button !== 0 ||
      possuiTeclaModificadora(evento) ||
      link.hasAttribute("download")
    ) {
      return false;
    }

    const alvo = link.getAttribute("target");
    if (alvo && alvo.toLowerCase() !== "_self") {
      return false;
    }

    const href = link.getAttribute("href");
    if (!href || href.includes("#")) {
      return false;
    }

    const destino = new URL(href, window.location.href);
    if (destino.hash || !eDestinoInterno(destino)) {
      return false;
    }

    return destino.protocol === "http:" ||
      destino.protocol === "https:" ||
      destino.protocol === "file:";
  };

  const navegarComTransicao = (destino) => {
    let navegou = false;
    const navegar = () => {
      if (navegou) return;
      navegou = true;
      window.location.assign(destino);
    };

    transicao.hidden = false;
    transicao.className = "div_transicao div_transicao--saindo";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        transicao.classList.add("div_transicao--ativa");
      });
    });

    transicao.addEventListener("transitionend", navegar, { once: true });
    window.setTimeout(navegar, 360);
  };

  finalizarEntrada();

  if (reduzirMovimento) {
    return;
  }

  document.addEventListener("click", (evento) => {
    const origem = evento.target;
    if (!(origem instanceof Element)) return;

    const link = origem.closest("a[href]");
    if (!(link instanceof HTMLAnchorElement) || !deveUsarTransicao(evento, link)) {
      return;
    }

    evento.preventDefault();
    navegarComTransicao(link.href);
  });
})();
