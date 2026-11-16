import { access, readFile } from "node:fs/promises";
import { perfis } from "./dados-perfis.mjs";

const erros = [];
const exigir = (condicao, mensagem) => {
  if (!condicao) erros.push(mensagem);
};

exigir(perfis.length === 20, `Esperados 20 perfis; encontrados ${perfis.length}.`);

for (const grupo of ["Mulheres negras", "Mulheres indígenas"]) {
  const total = perfis.filter((perfil) => perfil.grupo === grupo).length;
  exigir(total === 10, `${grupo}: esperados 10 perfis; encontrados ${total}.`);
}

const ids = new Set();
for (const perfil of perfis) {
  exigir(!ids.has(perfil.id), `ID de perfil repetido: ${perfil.id}.`);
  ids.add(perfil.id);

  if (perfil.id === "angela-davis") continue;

  const arquivo = `${perfil.id}.html`;
  try {
    await access(arquivo);
    const html = await readFile(arquivo, "utf8");
    const idsDaPagina = [...html.matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id);
    const idsUnicos = new Set(idsDaPagina);

    exigir(idsDaPagina.length === idsUnicos.size, `${arquivo}: existem IDs HTML repetidos.`);
    exigir((html.match(/<h1\b/g) ?? []).length === 1, `${arquivo}: deve existir exatamente um h1.`);
    exigir((html.match(/linha-do-tempo__eventos/g) ?? []).length === 1, `${arquivo}: linha do tempo ausente.`);
    exigir((html.match(/legado__contribuicoes/g) ?? []).length === 1, `${arquivo}: seção de legado ausente.`);
    exigir((html.match(/galeria__itens/g) ?? []).length === 2, `${arquivo}: galeria ausente.`);
    exigir((html.match(/referencias__responsavel/g) ?? []).length === 3, `${arquivo}: devem existir três referências.`);
    exigir(!/[ÃÂ�]/.test(html), `${arquivo}: possível texto com codificação corrompida.`);
  } catch (erro) {
    erros.push(`${arquivo}: não foi possível ler o arquivo (${erro.message}).`);
  }
}

const index = await readFile("index.html", "utf8");
exigir(index.includes('src="dados-perfis.js"'), "index.html não carrega o catálogo compartilhado.");
exigir(index.includes('data-profile-id="angela-davis"'), "index.html não identifica Angela Davis como perfil atual.");

const dadosBrowser = await readFile("dados-perfis.js", "utf8");
exigir((dadosBrowser.match(/"id":/g) ?? []).length === 20, "dados-perfis.js não contém 20 perfis.");

if (erros.length > 0) {
  console.error(erros.map((erro) => `- ${erro}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log("Validação concluída: 20 perfis, divisão 10/10 e 19 páginas completas sem erros estruturais.");
}

