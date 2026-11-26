# LMNS-2026.2

<p align="center">
  <img width="220" alt="Logo do grupo LMNS" src="https://github.com/user-attachments/assets/26dbf0c6-d0e5-4290-9cbd-fddec61ff1c3" />
</p>

**Grupo:** LMNS<br>
**Disciplina:** Desenvolvimento Ágil<br>
**Ano:** 2026<br>
**Semestre:** 2º semestre

## Integrantes

| Foto | Nome | GitHub |
| :---: | --- | --- |
| <img src="https://github.com/rochalais.png" width="60" alt="Foto de Laís" /> | Laís Joana Marcondes da Rocha | [rochalais](https://github.com/rochalais) |
| <img src="https://github.com/marcelolukas.png" width="60" alt="Foto de Marcelo" /> | Marcelo da Silva Júnior | [marcelolukas](https://github.com/marcelolukas) |
| <img src="https://github.com/niicolegimenez.png" width="60" alt="Foto de Nicole" /> | Nicole Gimenez Machado | [niicolegimenez](https://github.com/niicolegimenez) |
| <img src="https://github.com/sarahselva13.png" width="60" alt="Foto de Sarah" /> | Sarah Alves de Oliveira | [sarahselva13](https://github.com/sarahselva13) |

## Sobre o projeto: Vozes Negras e Indígenas

Exposição virtual dedicada a apresentar trajetórias de mulheres negras e indígenas que marcaram a história, a cultura, a resistência e a memória coletiva.

**Objetivo:** reunir, em um só lugar e com fontes identificadas, a história de 20 mulheres negras e indígenas, para que o visitante conheça suas trajetórias, seus legados e as referências utilizadas.

**Público-alvo:** estudantes e professores da educação básica e do ensino superior que buscam material de apoio sobre história e cultura afro-brasileira e indígena, conteúdo previsto nas Leis 10.639/2003 e 11.645/2008, e o público em geral interessado em conhecer essas trajetórias. O site também foi pensado para quem navega pelo teclado ou utiliza leitor de tela.

### Principais funcionalidades

- Página inicial com a apresentação da exposição e acesso direto ao catálogo.
- Catálogo com 20 trajetórias, sendo 10 de mulheres negras e 10 de mulheres indígenas.
- Página individual para cada mulher, com destaque inicial, biografia, linha do tempo, legado, galeria e referências.
- Galeria com ampliação das imagens, que pode ser fechada pelo botão, pela tecla Esc ou pelo clique fora da imagem.
- Referências com links para as fontes consultadas.
- Indicação de outras trajetórias para continuar a visita.
- Navegação entre as páginas e entre as seções de cada trajetória.

### Acervo da exposição

- **10 mulheres negras:** Angela Davis, Lélia Gonzalez, Conceição Evaristo,
  Carolina Maria de Jesus, Sueli Carneiro, Antonieta de Barros, Ruth de Souza,
  Marielle Franco, Benedita da Silva e Luiza Bairros.
- **10 mulheres indígenas:** Sônia Guajajara, Célia Xakriabá, Joênia Wapichana,
  Eliane Potiguara, Djuena Tikuna, Tuíre Kayapó, Alessandra Korap, Daiara
  Tukano, Txai Suruí e Watatakalu Yawalapiti.

## Protótipo

O grupo optou por desenvolver o front-end do sistema no lugar de um protótipo de telas.

- Site publicado: <https://rochalais.github.io/LMNS-2026.2/>
- Detalhes das telas e das histórias atendidas: [Prototipação](<Prototipação/LinkPrototipo.md>)

## Vídeo de apresentação

[Assistir à apresentação do projeto](assets/videos/apresentacao.mp4)

## Documentos do repositório

**Requisitos de Usuário**

- [Requisitos Funcionais](<Requisitos de Usuário/RF.md>)
- [Requisitos Não Funcionais](<Requisitos de Usuário/RNF.md>)
- [Histórias de Usuário](<Requisitos de Usuário/HistoriasUsuario.md>) (com a coluna Story Points)
- [Histórias de Usuário com IA (Atividade 04)](<Requisitos de Usuário/Prompt-Historias-Usuarios.pdf>)
- [Inspeção realizada (Atividade 06)](<Requisitos de Usuário/Inspecao_Realizada.pdf>)
- [Inspeção recebida (Atividade 06)](<Requisitos de Usuário/Inspecao_Recebida.pdf>)

**Requisitos de Sistema**

- [Projeto Astah: diagramas de casos de uso e de atividades](<Requisitos de Sistema/Vozes Negras e Indígenas.asta>)

**Prototipação**

- [Link do protótipo (front-end)](<Prototipação/LinkPrototipo.md>)

**Gerenciamento**

- [Project Controle de Tarefas](https://github.com/users/rochalais/projects/1)

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

## Acessibilidade e compatibilidade

- Layout responsivo com pontos de quebra para celular, tablet e desktop.
- Navegação nomeada, link para pular ao conteúdo, foco visível e imagens com
  texto alternativo.
- A galeria abre imagens em uma lightbox quando o JavaScript está disponível e
  mantém links para as imagens originais como alternativa.
- Animações respeitam `prefers-reduced-motion`; o conteúdo e os links principais
  continuam disponíveis sem JavaScript.

## Como atualizar as páginas

Os conteúdos das trajetórias ficam em `dados-perfis.mjs`. Depois de alterar esse arquivo, gere e valide as páginas com o Node.js:

```powershell
node gerar-paginas.mjs
node validar-site.mjs
```
