# 🚴 Bikcraft

<p align="center">
  <img src="./img/mockup.jpg" alt="Bikcraft Preview" width="800">
</p>

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://kessleru.github.io/Bikcraft-Web/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 Sobre o Projeto

E-commerce completo para venda de bicicletas elétricas customizadas, desenvolvido com **HTML5, CSS3 e JavaScript puro**. O projeto demonstra boas práticas modernas de desenvolvimento web, incluindo arquitetura CSS modular, otimizações de performance e design responsivo mobile-first.

### 🎯 Páginas

- **Home**: Hero section, produtos em destaque, tecnologia, parceiros e depoimentos
- **Catálogo**: 3 modelos de bicicletas (Magic, Nimbus, Nebula) com especificações
- **Páginas Individuais**: Galeria de imagens interativa e detalhes completos de cada modelo
- **Seguros**: Planos Silver e Gold com FAQ interativo (accordion)
- **Orçamento**: Formulário dinâmico com pré-seleção via URL
- **Contato**: Formulário, informações e localização das lojas

## ✨ Funcionalidades

### 🎨 Interface

- Design responsivo mobile-first (320px+)
- Animações suaves de entrada com stagger
- Menu de navegação com indicador da página atual
- Galeria de imagens interativa (click-to-preview)
- Accordion FAQ com transições suaves

### ⚙️ JavaScript

- **Arquitetura Modular**: ES6 Modules para organização e manutenibilidade
  - `galeria.js` - Sistema de galeria de imagens interativa
  - `itens-orcamento.js` - Gerenciamento do formulário de orçamento
  - `links-menu.js` - Controle de menu ativo
  - `perguntas-frequentes.js` - Sistema de accordion FAQ
- **Menu ativo**: Destaque automático da página atual
- **Orçamento inteligente**: Pré-seleção via parâmetros de URL (`?tipo=bikcraft&produto=nimbus`)
- **FAQ interativo**: Toggle com ARIA attributes para acessibilidade
- **Galeria dinâmica**: Alternância de imagens no desktop
- **Animações**: Plugin SimpleAnime para entrada progressiva

### 🎨 Design System

**Cores**
![#FFBB00](https://img.shields.io/badge/-%23FFBB00-FFBB00?style=flat-square) Primária (Amarelo Bikcraft)
![#000000](https://img.shields.io/badge/-%23000000-000000?style=flat-square) Secundária (Preto)
Escala de 12 tons de cinza

**Tipografia**
`Poppins` (Títulos) · `Roboto` (Corpo) · `Merriweather` (Detalhes itálicos)

**Layout**
CSS Grid · Flexbox · Container 1200px · Espaçamento em múltiplos de 20px

## ⚡ Performance

### 🖼️ Imagens

- Lazy loading (`loading="lazy"`) para imagens fora da viewport
- Decodificação assíncrona (`decoding="async"`)
- Priority hint na imagem hero (`fetchpriority="high"`)
- Picture element com múltiplas resoluções para responsividade

### 🔤 Fontes

- Carregamento assíncrono do Google Fonts
- DNS prefetch (`preconnect`) para reduzir latência
- Media print trick para evitar bloqueio de renderização
- Fallback com `<noscript>` para usuários sem JavaScript

### 📦 CSS

- **Minificação**: `style.min.css` com remoção de espaços e comentários
- **Arquitetura modular**: 25 arquivos CSS organizados por seção
- **Utility-first**: Classes reutilizáveis para cores, tipografia e componentes
- **CSS Variables**: Custom properties para temas consistentes

### 🎯 Resultados

✅ First Contentful Paint (FCP) otimizado
✅ Largest Contentful Paint (LCP) reduzido
✅ Cumulative Layout Shift (CLS) minimizado
✅ Score alto no PageSpeed Insights

## 🛠️ Tecnologias

- **HTML5**: Semântico com ARIA attributes
- **CSS3**: Grid, Flexbox, Custom Properties, Gradients
- **JavaScript ES6+**:
  - Vanilla JS sem frameworks
  - ES6 Modules (`import`/`export`) para código modular
  - Separação de responsabilidades por módulos
- **SVG**: Ícones e elementos gráficos escaláveis
- **Git**: Controle de versão com commits semânticos

## ♿ Acessibilidade

- Estrutura semântica (`<header>`, `<main>`, `<nav>`, `<footer>`)
- ARIA labels e attributes (`aria-label`, `aria-controls`, `aria-expanded`)
- Labels associados a inputs via `for`/`id`
- Contraste de cores adequado (WCAG)
- Navegação por teclado funcional

## 📱 Responsividade

**Breakpoints**

- Mobile: 320px - 599px
- Tablet: 600px - 799px
- Desktop: 800px - 1199px
- Large Desktop: 1200px+

**Técnicas**

- Mobile-first approach
- CSS Grid responsivo com `fr` units
- Imagens adaptativas com `srcset` e `<picture>`
- Typography scale que adapta em cada breakpoint

## 📚 Aprendizados

Este projeto demonstra:

- Arquitetura CSS escalável e modular
- **JavaScript modular com ES6 Modules** para melhor organização do código
- Otimizações de performance web (Core Web Vitals)
- JavaScript vanilla para interatividade
- Design responsivo mobile-first
- Acessibilidade web (WCAG)
- Boas práticas de SEO
- Git workflow com commits semânticos

<div align="center">

⭐ **Desenvolvido como projeto de estudos em desenvolvimento web**

[![GitHub](https://img.shields.io/badge/GitHub-kessleru-181717?logo=github)](https://github.com/kessleru)

</div>
