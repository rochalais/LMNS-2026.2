window.addEventListener("load", () => {
  const transicao = document.querySelector(".div_transicao");

  if (transicao) {
    transicao.style.opacity = "0";
    window.setTimeout(() => {
      transicao.style.display = "none";
    }, 500);
  }
});

const exposicao = document.querySelector(".exposicao-fade");
const botaoConhecerExposicao = document.querySelector(".home-hero__acao");

if (exposicao) {
  const reduzirMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if ("IntersectionObserver" in window && !reduzirMovimento) {
    let observador;

    const revelarExposicao = () => {
      exposicao.classList.add("visivel");
      if (observador) {
        observador.disconnect();
      }
      window.removeEventListener("scroll", verificarPosicao);
      window.removeEventListener("resize", verificarPosicao);
    };

    const verificarPosicao = () => {
      const limites = exposicao.getBoundingClientRect();
      const entrouNaTela =
        limites.top < window.innerHeight * 0.9 && limites.bottom > 0;

      if (entrouNaTela) {
        revelarExposicao();
      }
    };

    try {
      observador = new IntersectionObserver(
        ([entrada]) => {
          if (
            entrada &&
            entrada.isIntersecting &&
            entrada.intersectionRatio >= 0.18
          ) {
            revelarExposicao();
          }
        },
        { threshold: 0.18 },
      );

      window.addEventListener("scroll", verificarPosicao, {
        passive: true,
      });
      window.addEventListener("resize", verificarPosicao, {
        passive: true,
      });
      observador.observe(exposicao);
      exposicao.classList.add("exposicao-fade--aguardando");
      window.requestAnimationFrame(verificarPosicao);
    } catch (erro) {
      revelarExposicao();
    }
  } else {
    exposicao.classList.add("visivel");
  }
}

if (botaoConhecerExposicao && exposicao) {
  botaoConhecerExposicao.addEventListener("click", () => {
    window.setTimeout(
      () => exposicao.focus({ preventScroll: true }),
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 500,
    );
  });
}
