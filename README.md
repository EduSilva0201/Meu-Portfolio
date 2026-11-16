# Portfólio — Carlos Eduardo

Site pessoal estático para apresentação acadêmica, com HTML5, CSS3 e JavaScript puro. Paleta grafite e azul, layout responsivo e animações leves. Entrega prevista: **24/11/2026**. Repositório: [EduSilva0201/Meu-Portfolio](https://github.com/EduSilva0201/Meu-Portfolio).

## Executar localmente

Abra `index.html` diretamente no navegador. Nenhuma instalação, backend ou compilação é necessária. Também é possível usar a extensão **Live Server** do VS Code: clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Se tiver Python instalado, execute nesta pasta:

```sh
python -m http.server 8000
```

Acesse `http://localhost:8000`. Encerre o servidor com `Ctrl+C`.

## Organização e edição

```text
index.html     Conteúdo, estrutura semântica e links
styles.css     Paleta, componentes, animações e responsividade
script.js      Menu, filtros, efeitos e ano do rodapé
assets/        Retrato, favicon e capturas dos projetos
```

O CSS e o JavaScript estão divididos em blocos comentados para facilitar a apresentação.

- **Textos:** edite as seções de `index.html`, identificadas por `inicio`, `sobre`, `experiencia`, `habilidades`, `projetos` e `contato`.
- **Cores:** altere as variáveis de `:root`, no início de `styles.css`.
- **Foto:** substitua `assets/carlos-eduardo.jpg` e mantenha o nome ou ajuste o caminho no HTML. Atualize o texto `alt` quando necessário.
- **Projetos:** duplique um `article.project-card`, edite os textos, imagens e links e use `data-category="pessoal"` ou `data-category="academico"`. Atualize também o contador visual do filtro Todos.
- **Contato:** edite o texto e os destinos `mailto:` e `tel:`. Não existe formulário nem envio de dados pelo site.
- **Animações:** procure `float`, `.reveal` e `.spotlight` no CSS; as respectivas interações estão comentadas no JavaScript.

As imagens estão armazenadas localmente. O site não consulta o GitHub durante a navegação e não depende de fontes externas. Os únicos acessos externos acontecem quando o visitante abre os links profissionais e os repositórios.

## Como explicar o funcionamento

1. **HTML:** organiza o conteúdo com `header`, `nav`, `main`, `section`, `article` e `footer`. Os links internos apontam para os IDs das seções.
2. **CSS:** usa variáveis para a identidade visual, Flexbox e Grid para os componentes e media queries para adaptar a página. O brilho decorativo é um gradiente radial.
3. **JavaScript:** escuta eventos de clique para abrir o menu e filtrar projetos. O atributo `hidden` controla a visibilidade dos cards e `aria-pressed` informa o filtro selecionado.
4. **IntersectionObserver:** acompanha a entrada de elementos na tela para revelar o conteúdo e destacar a seção na navegação, sem executar cálculos contínuos de rolagem.
5. **Melhoria progressiva:** sem JavaScript, o conteúdo e os links continuam disponíveis. Os filtros são ocultados por CSS quando não há JavaScript.

## Acessibilidade

- Link para pular ao conteúdo, títulos hierárquicos e navegação identificada.
- Indicadores de foco visíveis e controles nativos para uso com Tab, Shift+Tab e Enter.
- Menu informa seu estado e fecha com Escape; no celular, selecionar uma seção move o foco para o conteúdo.
- Filtros indicam a seleção e anunciam a quantidade de resultados.
- Imagens com textos alternativos e elementos decorativos ocultos de leitores de tela.
- Preferência `prefers-reduced-motion` desativa animações e rolagem suave. O efeito do ponteiro não é ativado com essa preferência.
- Cores de texto claras sobre superfícies grafite.

## Publicar no GitHub Pages

Publicação autorizada pelo autor. Configuração para este repositório:

1. Crie um repositório no GitHub para este portfólio.
2. Envie `index.html`, `styles.css`, `script.js` e a pasta `assets/` para a raiz da branch `main`. Pode incluir também este README.
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)` e salve.
6. Aguarde o GitHub disponibilizar o endereço em **Settings → Pages**.

Endereço do GitHub Pages: https://edusilva0201.github.io/Meu-Portfolio/. Todos os caminhos de CSS, JavaScript e imagens são relativos (`./`), por isso funcionam no subdiretório do repositório. Os links como `#projetos` fazem a navegação dentro da própria página.

## Conteúdo e referências

Dados baseados no currículo fornecido, no [perfil público](https://github.com/EduSilva0201) e nas correções informadas pelo autor: graduação retomada na UDF, cargo de suporte N3 e implantador, e contatos atualizados. Não foram inventados semestre, previsão de conclusão ou projetos. Datas profissionais seguem o currículo. Atualize essas informações caso sua situação mude.

Projetos e capturas de tela obtidos dos próprios repositórios:

- [LM SportsFoto](https://github.com/EduSilva0201/lm-sportsfoto): em desenvolvimento; a captura pode conter conteúdo demonstrativo do projeto original.
- [Mascavo Fitwear](https://github.com/EduSilva0201/mascavo-fitwear): projeto principal, com vitrine, sacola, autenticação e catálogo locais; checkout desabilitado. A capa usa a captura `docs/demo/loja-desktop.png` do projeto local, copiada para `assets/projeto-mascavo-demo.png`.
- [Estudaí](https://github.com/EduSilva0201/controle-tarefas-estudo): prática complementar criada com auxílio de IA, conforme o README original.
- [Viajô](https://github.com/EduSilva0201/viajo-2): projeto acadêmico para agência fictícia, com formulário visual.

Retrato obtido do avatar público do autor no GitHub, correspondente à foto fornecida. Não há versões de currículo, endereço residencial ou documentos pessoais incluídos no site.

Referências visuais: [Spotlight Cards no 21st.dev](https://news.21st.dev/blog/react-spotlight-effect-components) e [seleção de Dark Hero Sections](https://dev.21st.dev/community/components/s/dark-hero-section). A composição utiliza cartões com brilho discreto, navegação translúcida e hierarquia tipográfica. O código foi escrito em HTML/CSS/JS para este projeto; não utiliza os componentes React ou dependências dessas referências.

LM SportsFoto e Mascavo Fitwear são os projetos principais, exibidos primeiro e selecionados pelo filtro inicial Principais. Todos mostra os quatro projetos; Pessoais mostra três e Acadêmicos mostra um. Para destacar outro card, adicione `data-featured="true"` e a classe `featured`.

Este portfólio é independente da loja Mascavo Fitwear. Apenas uma cópia da captura de demonstração é usada como imagem de apresentação. Nenhum arquivo no projeto da loja foi modificado.

## Verificação realizada

Verificado no Chrome com automação de navegador: layouts de 320, 390, 768 e 1440 pixels sem rolagem horizontal; carregamento das imagens e links internos em subdiretório; filtros da versão inicial com 3/2/1 resultados; menu móvel, Escape e foco; link de pular ao conteúdo com Tab; preferência por movimento reduzido; conteúdo e navegação disponíveis sem JavaScript. Nenhum erro de execução foi detectado. A rolagem também foi verificada para revelar todos os blocos no celular.

A verificação não substitui uma avaliação completa com leitor de tela ou testes em todos os dispositivos. Ferramentas temporárias de verificação foram removidas e não fazem parte dos requisitos do site.

## Botões com brilho

As ações principais “Conheça meus projetos” e “Enviar um e-mail” usam `shiny-cta`. As ações secundárias e os filtros usam `origin-button`, adaptado da segunda referência: um círculo preenche o fundo a partir do ponto de entrada do ponteiro ou do centro ao receber foco por teclado. As setas foram removidas dos links e botões; as capas dos projetos permanecem sem links sobrepostos e sem o efeito Shiny. O bloco 9 de `styles.css` define o formato arredondado, a borda em gradiente cônico, a textura pontilhada e o brilho interno. Personalize `--shiny-base` e `--shiny-accent` para alterar a aparência. A animação é CSS puro e respeita movimento reduzido; navegadores sem animação de propriedades registradas mantêm uma borda estática. Os links continuam como `<a href>` e os filtros como `<button>`, com foco visível e os comportamentos originais. Não foram adicionados React, Tailwind ou TypeScript ao portfólio.

O bloco 11 de `styles.css` e o bloco 6 de `script.js` implementam o Origin Button sem dependências. O JavaScript calcula a distância até o canto mais distante para cobrir todo o botão. Sem JavaScript, o preenchimento parte do centro; com movimento reduzido, a troca é imediata. A navegação e os filtros continuam usando elementos HTML nativos.

## Retrato da hero

A foto é exibida inteira, em sua proporção original, sem zoom, recorte, sombras ou informações sobrepostas. O arquivo local tem 460 × 460 pixels e é exibido com largura máxima de 370 pixels. O bloco 12 do CSS controla o tamanho e a adaptação para celular.

## Atualizações no repositório

Após editar e conferir o site localmente, use:

```sh
git add index.html styles.css script.js README.md assets
git commit -m "Atualiza portfolio"
git push origin main
```

Com Pages configurado para `main` e `/ (root)`, cada envio nessa branch inicia uma nova publicação. Acompanhe a execução em **Actions** e o endereço em **Settings → Pages**. O arquivo `.nojekyll` dispensa o processamento Jekyll.
