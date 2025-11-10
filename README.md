# 🚴 Bikcraft

> Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para você.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://kessleru.github.io/Bikcraft-Web/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Performance](https://img.shields.io/badge/performance-optimized-brightgreen.svg)](https://web.dev/measure/)

## 📖 Sobre o Projeto

Bikcraft é um projeto de estudos de desenvolvimento web que apresenta um site completo para uma empresa fictícia de bicicletas elétricas personalizadas. O projeto foi desenvolvido com foco em **web performance**, **acessibilidade** e **boas práticas modernas**.

### ✨ Funcionalidades

- 🏠 **Home**: Apresentação dos produtos e tecnologia
- 🚲 **Catálogo de Bicicletas**: 3 modelos (Nimbus, Magic, Nebula) com páginas individuais
- 🛡️ **Seguros**: Planos de proteção e FAQ
- 💰 **Orçamento**: Formulário interativo com seleção de produtos
- 📍 **Contato**: Informações e localização das lojas
- 📄 **Termos e Condições**: Políticas do site

## 🌐 Demo

Acesse o projeto online: **[https://kessleru.github.io/Bikcraft-Web/](https://kessleru.github.io/Bikcraft-Web/)**

## 🎨 Sistema de Design

### Cores

- **Primária**: ![#FFBB00](https://via.placeholder.com/20/FFBB00/FFBB00?text=+) `#FFBB00` (Amarelo Bikcraft)
- **Secundária**: ![#000000](https://via.placeholder.com/20/000000/000000?text=+) `#000000`, ![#111111](https://via.placeholder.com/20/111111/111111?text=+) `#111111` (Preto e cinza escuro)
- **Neutras**: Escala de cinzas (12 variações)
  - ![#F7F7F7](https://via.placeholder.com/20/F7F7F7/F7F7F7?text=+) `#F7F7F7`
  - ![#EDEDED](https://via.placeholder.com/20/EDEDED/EDEDED?text=+) `#EDEDED`
  - ![#DEDEDE](https://via.placeholder.com/20/DEDEDE/DEDEDE?text=+) `#DEDEDE`
  - ![#CCCCCC](https://via.placeholder.com/20/CCCCCC/CCCCCC?text=+) `#CCCCCC`
  - ![#B2B2B2](https://via.placeholder.com/20/B2B2B2/B2B2B2?text=+) `#B2B2B2`
  - ![#9C9C9C](https://via.placeholder.com/20/9C9C9C/9C9C9C?text=+) `#9C9C9C`
  - ![#717171](https://via.placeholder.com/20/717171/717171?text=+) `#717171`
  - ![#595959](https://via.placeholder.com/20/595959/595959?text=+) `#595959`
  - ![#404040](https://via.placeholder.com/20/404040/404040?text=+) `#404040`
  - ![#2E2E2E](https://via.placeholder.com/20/2E2E2E/2E2E2E?text=+) `#2E2E2E`
  - ![#111111](https://via.placeholder.com/20/111111/111111?text=+) `#111111`
  - ![#000000](https://via.placeholder.com/20/000000/000000?text=+) `#000000`
- **Gradiente**: ![#FFBF00](https://via.placeholder.com/20/FFBF00/FFBF00?text=+) `#FFBF00` → ![#F2A50C](https://via.placeholder.com/20/F2A50C/F2A50C?text=+) `#F2A50C`

### Tipografia

- **Títulos**: Poppins (600, 500)
- **Corpo**: Roboto (400, 500)
- **Detalhes**: Merriweather (900i)
- Sistema de tamanhos responsivos (1rem a 4rem)

### Layout

- **Grid System**: CSS Grid com gaps consistentes
- **Flexbox**: Para alinhamento e distribuição
- **Breakpoints**: Mobile-first com media queries
- **Espaçamento**: Sistema baseado em múltiplos de 20px

## ⚡ Otimizações de Performance

### Técnicas Aplicadas

✅ **CSS Bundling + Minificação**

- 23 módulos → 1 arquivo
- 25KB → 19KB (24% menor)
- 1 requisição HTTP vs 24

✅ **Lazy Loading Inteligente**

- `loading="lazy"` em imagens abaixo da dobra
- `fetchpriority="high"` em imagens LCP
- Economia de ~2MB no carregamento inicial

✅ **Resource Hints**

- `<link rel="preload">` para CSS crítico
- `<link rel="preconnect">` para Google Fonts
- DNS-prefetch reduz latência em 200-300ms

⭐ **Desenvolvido como projeto de estudos em desenvolvimento web**

[![GitHub](https://img.shields.io/badge/GitHub-kessleru-181717?logo=github)](https://github.com/kessleru)

</div>
