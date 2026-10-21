const ocultarTransicaoInicial = () => {
  const transicao = document.querySelector(".div_transicao");

  if (!transicao) return;

  transicao.style.opacity = "0";
  window.setTimeout(() => {
    transicao.style.display = "none";
  }, 500);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ocultarTransicaoInicial, {
    once: true,
  });
} else {
  ocultarTransicaoInicial();
}

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
