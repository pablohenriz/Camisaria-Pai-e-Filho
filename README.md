🌐 English (current) | **[Leia em Português](./README.pt-BR.md)**

# Camisaria Pai & Filho

🔗 **[Live Demo](https://pablohenriz.github.io/Camisaria-Pai-e-Filho/)**

An institutional website and digital showcase for **Camisaria Pai & Filho**, a fictional menswear store founded in 1987. The project simulates a full business site spanning three generations, combining brand storytelling, a browsable product catalog, and an editorial blog — built from scratch with plain HTML, CSS, and JavaScript, no frameworks or build tools.

> 🎯 A front-end portfolio project focused on multi-page architecture, centralized data, reusable components, and a polished UX (animations, filters, pagination, and responsiveness).

## ✨ Features

- **Institutional homepage** with an animated hero section, testimonial carousel, featured categories, a services section, and a brand timeline.
- **Product catalog** (`produtos.html`) with category filters (Suits, Shirts, Shoes, Ties, Belts), grid/list view toggle, and incremental "load more" pagination with a progress bar.
- **Dynamic product page** (`produto.html`): details are rendered via JavaScript based on the product ID in the URL (`?id=`), including an image gallery, technical specs, and reference code.
- **Blog** (`blog.html` + `artigo.html`) with a post listing and individual article pages generated dynamically from a single structured JS data source.
- **"About Us" page** telling the family's story across decades, with a timeline and team presentation.
- **Contact page** with a validated form, success state, and reset flow.
- **Mobile menu** (drawer) and a header with a scroll effect.
- **Reveal-on-scroll animations** via `IntersectionObserver`, applied consistently across all pages.
- **Initial loading screen** with a logo animation.

## 🗂️ Project structure

```
Camisaria-Pai-e-Filho/
├── index.html          # Homepage
├── produtos.html        # Catalog with filters and pagination
├── produto.html          # Product detail (rendered via JS)
├── blog.html            # Blog post listing
├── artigo.html           # Individual article (rendered via JS)
├── sobre.html            # Story, timeline, and team
├── contato.html          # Contact form
├── css/
│   └── style.css        # Global styles (design system, components, responsiveness)
├── js/
│   ├── data.js           # Single source of truth: products, testimonials, team, timeline, blog posts
│   ├── shared.js          # Functions shared across all pages (drawer, scroll, reveal)
│   ├── index.js, produtos.js, produto.js, blog.js, artigo.js, sobre.js, contato.js
│   └── script.js          # Earlier version of the catalog data
└── img/                  # Logos and favicon
```

> Note: file and folder names remain in Portuguese (e.g. `produtos.html`, `sobre.html`) to match the original repository structure.

## 🏗️ Architecture and technical decisions

- **Centralized data in `js/data.js`**: products, testimonials, team, timeline, and blog posts all live in a single file. Pages like `produto.html` and `artigo.html` read the URL parameter and render content dynamically, avoiding per-item HTML duplication.
- **No frameworks**: a deliberate choice to focus on fundamentals — semantic HTML, modern CSS (custom properties, Grid, Flexbox), and vanilla JavaScript (DOM manipulation, `IntersectionObserver`, simple query-string-based routing).
- **Componentization by convention**: repeated elements (navbar, drawer, product cards, testimonial cards) follow the same CSS class patterns across pages for visual consistency.
- **Performance**: lazy-loaded images (`loading="lazy"`) and incremental pagination in the catalog instead of loading everything at once.

## 🚀 Running locally

Since this is a fully static site, you can open the files directly in your browser or use a simple local server:

```bash
# Clone the repository
git clone <repository-url>
cd Camisaria-Pai-e-Filho

# Option 1: open directly
open index.html

# Option 2: local server (recommended, avoids CORS/path issues)
npx serve .
# or
python3 -m http.server 8000
```

## 🎨 Stack

| Layer         | Technology                            |
|---------------|-----------------------------------------|
| Markup        | Semantic HTML5                          |
| Styling       | CSS3 (custom properties, Grid, Flexbox) |
| Interactivity | Vanilla JavaScript (ES6+)               |
| Fonts         | Google Fonts (Cormorant Garamond, DM Sans) |
| Product images | Unsplash (placeholders for demo purposes) |

## 📌 Roadmap

Planned improvements already mapped out:

- [ ] Legal information page/section (company registration, business name, address) following e-commerce best practices
- [ ] Privacy policy and cookie notice
- [ ] Visual refinement of the product listing
- [ ] Additional performance optimizations
- [ ] Real store photos on the About and Contact pages

## 📄 License

Built for study and portfolio purposes.
