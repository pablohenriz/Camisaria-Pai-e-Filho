🌐 **[Read this in English](./README.md)** | Português (atual)

# Camisaria Pai & Filho

🔗 **[Ver site online](https://pablohenriz.github.io/Camisaria-Pai-e-Filho/)**

Site institucional e vitrine digital para a **Camisaria Pai & Filho**, uma loja fictícia de moda masculina fundada em 1987. O projeto simula o site completo de um negócio de três gerações, unindo storytelling de marca, catálogo de produtos navegável e blog editorial — construído do zero em HTML, CSS e JavaScript puro, sem frameworks ou dependências de build.

> 🎯 Projeto de portfólio focado em front-end: arquitetura de múltiplas páginas, dados centralizados, componentes reutilizáveis e experiência de usuário cuidada (animações, filtros, paginação e responsividade).

## ✨ Funcionalidades

- **Home institucional** com hero animado, carrossel de depoimentos, categorias em destaque, seção de serviços e linha do tempo da marca.
- **Catálogo de produtos** (`produtos.html`) com filtro por categoria (Ternos, Camisas, Sapatos, Gravatas, Cintos), alternância entre grade/lista e carregamento incremental ("ver mais produtos") com barra de progresso.
- **Página de produto** (`produto.html`) dinâmica: os detalhes são renderizados via JavaScript a partir do ID do produto na URL (`?id=`), incluindo galeria de imagens, especificações técnicas e referência.
- **Blog** (`blog.html` + `artigo.html`) com listagem de posts e páginas de artigo geradas dinamicamente a partir de um único conteúdo estruturado em JS.
- **Página "Sobre Nós"** contando a história da família ao longo de décadas, com timeline e apresentação da equipe.
- **Página de Contato** com formulário validado, estado de sucesso e reset.
- **Menu mobile** (drawer) e header com efeito de scroll.
- **Animações de entrada** (`reveal`) via `IntersectionObserver`, aplicadas de forma consistente em todas as páginas.
- **Loader de carregamento** inicial com animação de logo.

## 🗂️ Estrutura do projeto

```
Camisaria-Pai-e-Filho/
├── index.html          # Página inicial
├── produtos.html        # Catálogo com filtros e paginação
├── produto.html          # Detalhe de produto (renderizado via JS)
├── blog.html            # Listagem de artigos
├── artigo.html           # Artigo individual (renderizado via JS)
├── sobre.html            # História, timeline e equipe
├── contato.html          # Formulário de contato
├── css/
│   └── style.css        # Estilos globais (design system, componentes, responsividade)
├── js/
│   ├── data.js           # Fonte única de dados: produtos, depoimentos, equipe, timeline, posts do blog
│   ├── shared.js          # Funções comuns a todas as páginas (drawer, scroll, reveal)
│   ├── index.js, produtos.js, produto.js, blog.js, artigo.js, sobre.js, contato.js
│   └── script.js          # Base inicial de dados do catálogo (versão anterior)
└── img/                  # Logos e favicon
```

## 🏗️ Arquitetura e decisões técnicas

- **Dados centralizados em `js/data.js`**: produtos, depoimentos, equipe, linha do tempo e posts do blog vivem em um único arquivo. Páginas como `produto.html` e `artigo.html` leem o parâmetro da URL e renderizam o conteúdo dinamicamente, evitando duplicação de HTML por item.
- **Sem frameworks**: escolha deliberada para focar em fundamentos de HTML semântico, CSS moderno (variáveis, grid, flexbox) e JavaScript vanilla (manipulação de DOM, `IntersectionObserver`, roteamento simples via query string).
- **Componentização por convenção**: elementos repetidos (navbar, drawer, cards de produto, cards de depoimento) seguem os mesmos padrões de classes CSS em todas as páginas para consistência visual.
- **Performance**: imagens com `loading="lazy"`, paginação incremental no catálogo em vez de carregar tudo de uma vez.

## 🚀 Como rodar localmente

Por ser um site 100% estático, basta abrir os arquivos diretamente no navegador ou usar um servidor local simples:

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd Camisaria-Pai-e-Filho

# Opção 1: abrir diretamente
open index.html

# Opção 2: servidor local (recomendado, evita problemas de CORS com fetch/paths absolutos)
npx serve .
# ou
python3 -m http.server 8000
```

## 🎨 Stack

| Camada       | Tecnologia                          |
|--------------|--------------------------------------|
| Marcação     | HTML5 semântico                      |
| Estilo       | CSS3 (variáveis, Grid, Flexbox)      |
| Interatividade | JavaScript (Vanilla, ES6+)         |
| Fontes       | Google Fonts (Cormorant Garamond, DM Sans) |
| Imagens de produto | Unsplash (placeholders para fins de demonstração) |

## 📌 Roadmap / próximos passos

Ideias já mapeadas para evolução do projeto:

- [ ] Página/seção de informações legais (CNPJ, razão social, endereço) conforme boas práticas de e-commerce
- [ ] Política de privacidade e aviso de cookies
- [ ] Refino visual da listagem de produtos
- [ ] Otimizações adicionais de performance
- [ ] Imagens reais da loja física nas páginas de Sobre e Contato

## 📄 Licença

Projeto desenvolvido para fins de estudo e portfólio.
