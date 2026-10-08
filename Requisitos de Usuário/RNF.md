# Requisitos Não Funcionais

Este documento define os atributos de qualidade da exposição virtual **Vozes Negras e Indígenas**. Cada requisito possui um critério verificável para orientar a implementação e a validação.

| ID | Categoria | Descrição e critério de verificação | Prioridade | RFs relacionados |
| --- | --- | --- | --- | --- |
| **RNF01** | Compatibilidade e responsividade | O sistema deverá permanecer utilizável entre 320 px e 1920 px de largura, sem texto sobreposto, conteúdo cortado ou rolagem horizontal não prevista. A verificação deverá abranger, no mínimo, as larguras de 320 px, 768 px, 1024 px e 1440 px. | Alta | RF01–RF12 |
| **RNF02** | Acessibilidade | O sistema deverá atender ao nível AA das WCAG 2.2: operação por teclado, foco visível, nomes acessíveis nos controles, textos alternativos nas imagens informativas e contraste mínimo de 4,5:1 para texto comum e 3:1 para texto grande. Elementos decorativos não deverão gerar anúncios desnecessários em leitores de tela. | Alta | RF01–RF12 |
| **RNF03** | Compatibilidade entre navegadores | As funcionalidades principais deverão operar nas duas versões estáveis mais recentes de Chrome, Edge, Firefox e Safari. Recursos opcionais, como a View Transition API, deverão possuir alternativa funcional quando não forem suportados. | Alta | RF01, RF02, RF04, RF09, RF12 |
| **RNF04** | Desempenho | Em auditoria Lighthouse no perfil móvel padrão, a página inicial deverá obter pontuação mínima de 90 em desempenho, LCP de até 2,5 segundos e CLS de até 0,1. Imagens deverão ser dimensionadas e compactadas para seu contexto de uso, e scripts não deverão bloquear desnecessariamente a renderização. | Média | RF01, RF02, RF03, RF05, RF06, RF09, RF11 |
| **RNF05** | Manutenibilidade | HTML, CSS e JavaScript deverão permanecer separados por responsabilidade; nomes e caminhos deverão seguir padrão consistente; não deverá haver IDs duplicados, arquivos referenciados ausentes nem seletores sem elemento correspondente. A verificação será feita por inspeção do repositório e validação das páginas. | Média | RF01–RF12 |
| **RNF06** | Integridade dos textos | Todos os documentos deverão utilizar UTF-8, e títulos, textos e nomes deverão ser exibidos sem caracteres de substituição, perda de acentos ou codificação corrompida em todas as páginas. | Alta | RF01–RF12 |
| **RNF07** | Confiabilidade e disponibilidade do conteúdo | O conteúdo principal e os links deverão permanecer acessíveis quando o JavaScript estiver desativado ou quando uma animação falhar. Com `prefers-reduced-motion: reduce`, transições não essenciais deverão ser removidas e nenhum conteúdo poderá permanecer invisível. | Alta | RF01, RF02, RF03, RF04, RF09, RF12 |
| **RNF08** | Segurança | Todos os recursos e links externos deverão utilizar HTTPS. Links que abrem em nova aba deverão incluir `rel="noopener noreferrer"`, e a aplicação não deverá carregar conteúdo ativo por conexão insegura. | Alta | RF09, RF10, RF12 |

## Método de validação

1. Testar as larguras definidas no RNF01 e verificar ausência de sobreposição, corte e rolagem horizontal indevida.
2. Percorrer todos os controles somente por teclado e executar auditoria de contraste e nomes acessíveis.
3. Executar a página nos navegadores definidos no RNF03 ou em serviços equivalentes de teste.
4. Registrar a auditoria Lighthouse usada para validar o RNF04.
5. Validar HTML, referências de arquivos, IDs, codificação UTF-8 e links.
6. Repetir os fluxos principais com JavaScript desativado e com movimento reduzido.
