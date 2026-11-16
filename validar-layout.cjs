const { spawn } = require("node:child_process");
const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const raiz = process.cwd();
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const perfilTemporario = path.join(raiz, ".tmp-edge-vozes-20");
const porta = 9342;
const esperar = (tempo) => new Promise((resolve) => setTimeout(resolve, tempo));
const manterNodeAtivo = setInterval(() => {}, 1000);
const arquivoUrl = (arquivo) =>
  encodeURI(`file:///${path.join(raiz, arquivo).replace(/\\/g, "/")}`);

const obterJson = (url) =>
  new Promise((resolve, reject) => {
    http
      .get(url, (resposta) => {
        let dados = "";
        resposta.setEncoding("utf8");
        resposta.on("data", (parte) => (dados += parte));
        resposta.on("end", () => {
          try {
            resolve(JSON.parse(dados));
          } catch (erro) {
            reject(erro);
          }
        });
      })
      .on("error", reject);
  });

const executar = async () => {
  fs.rmSync(perfilTemporario, { recursive: true, force: true });
  const navegador = spawn(
    edge,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-first-run",
      "--no-default-browser-check",
      `--remote-debugging-port=${porta}`,
      `--user-data-dir=${perfilTemporario}`,
      "about:blank",
    ],
    { stdio: "ignore" },
  );

  try {
    let enderecoSocket;
    for (let tentativa = 0; tentativa < 80; tentativa += 1) {
      try {
        const alvos = await obterJson(`http://127.0.0.1:${porta}/json/list`);
        enderecoSocket = alvos.find((alvo) => alvo.type === "page")?.webSocketDebuggerUrl;
        if (enderecoSocket) break;
      } catch {}
      await esperar(100);
    }
    if (!enderecoSocket) throw new Error("Edge não disponibilizou a depuração remota.");

    const socket = new WebSocket(enderecoSocket);
    const pendentes = new Map();
    let proximoId = 0;

    socket.onmessage = ({ data }) => {
      const mensagem = JSON.parse(data);
      const pendente = pendentes.get(mensagem.id);
      if (!pendente) return;
      pendentes.delete(mensagem.id);
      if (mensagem.error) pendente.reject(new Error(mensagem.error.message));
      else pendente.resolve(mensagem.result);
    };

    await new Promise((resolve, reject) => {
      socket.onopen = resolve;
      socket.onerror = reject;
    });

    const enviar = (method, params = {}) =>
      new Promise((resolve, reject) => {
        const id = ++proximoId;
        pendentes.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params }));
      });

    const avaliar = async (expression) => {
      const resposta = await enviar("Runtime.evaluate", {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      if (resposta.exceptionDetails) {
        throw new Error(resposta.exceptionDetails.text);
      }
      return resposta.result.value;
    };

    const viewport = (width, height, mobile) =>
      enviar("Emulation.setDeviceMetricsOverride", {
        width,
        height,
        deviceScaleFactor: 1,
        mobile,
      });

    const abrir = async (arquivo) => {
      await enviar("Page.navigate", { url: arquivoUrl(arquivo) });
      for (let tentativa = 0; tentativa < 100; tentativa += 1) {
        await esperar(100);
        if (await avaliar("document.readyState === 'complete'")) {
          await esperar(500);
          return;
        }
      }
      throw new Error(`Tempo excedido ao abrir ${arquivo}.`);
    };

    const captura = async (arquivo) => {
      const resultado = await enviar("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
      });
      fs.writeFileSync(path.join(raiz, arquivo), Buffer.from(resultado.data, "base64"));
    };

    await enviar("Page.enable");
    await enviar("Runtime.enable");
    await enviar("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });

    await viewport(390, 844, true);
    await abrir("watatakalu-yawalapiti.html");
    const celular = await avaliar(`(() => {
      const seletores = [
        '.trajetoria__cabecalho h1',
        '.trajetoria__atuacao',
        '.trajetoria__citacao',
        '.trajetoria__historia'
      ];
      return {
        largura: innerWidth,
        semOverflow: document.documentElement.scrollWidth <= innerWidth,
        elementos: seletores.map((seletor) => {
          const caixa = document.querySelector(seletor)?.getBoundingClientRect();
          return {
            seletor,
            esquerda: Math.round(caixa?.left || 0),
            direita: Math.round(caixa?.right || 0),
            dentroDaTela: Boolean(caixa && caixa.left >= 0 && caixa.right <= innerWidth)
          };
        })
      };
    })()`);
    await captura(".tmp-layout-mobile-cdp.png");

    await viewport(1440, 1000, false);
    await abrir("index.html");
    const catalogo = await avaliar(`(() => {
      const secao = document.querySelector('#trajetorias-relacionadas');
      secao?.scrollIntoView();
      const grupos = [...document.querySelectorAll('.relacionadas__grupo-titulo h3')]
        .map((elemento) => elemento.textContent.trim());
      return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve({
        grupos,
        cartoes: document.querySelectorAll('.relacionadas__card').length,
        negras: document.querySelectorAll('[data-grupo="Mulheres negras"] .relacionadas__card').length,
        indigenas: document.querySelectorAll('[data-grupo="Mulheres indígenas"] .relacionadas__card').length,
        semOverflow: document.documentElement.scrollWidth <= innerWidth
      }))));
    })()`);
    await captura(".tmp-layout-catalogo-cdp.png");

    socket.close();
    console.log(JSON.stringify({ celular, catalogo }, null, 2));
  } finally {
    navegador.kill();
    clearInterval(manterNodeAtivo);
    await esperar(300);
    fs.rmSync(perfilTemporario, { recursive: true, force: true });
  }
};

executar().catch((erro) => {
  clearInterval(manterNodeAtivo);
  console.error(erro);
  process.exitCode = 1;
});

