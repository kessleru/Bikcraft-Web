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

- **Primária**: `#FFBB00` (Amarelo Bikcraft)
- **Secundária**: `#000000`, `#111111` (Preto e cinza escuro)
- **Neutras**: Escala de cinzas (12 variações)
- **Gradiente**: `#FFBF00 → #F2A50C`

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

### Core Web Vitals Implementados

| Métrica | Otimização                             | Impacto                           |
| ------- | -------------------------------------- | --------------------------------- |
| **LCP** | `fetchpriority="high"` em imagens hero | ⚡ Carregamento prioritário       |
| **CLS** | `width` e `height` em todas as imagens | 🎯 Layout estável (zero shift)    |
| **FID** | CSS minificado (19KB)                  | 🚀 Menos bloqueio de renderização |

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

✅ **Otimização de Fontes**

- Preconnect para `fonts.googleapis.com`
- Preconnect para `fonts.gstatic.com`
- Font-display: swap implícito

⭐ **Desenvolvido como projeto de estudos em desenvolvimento web**

[![GitHub](https://img.shields.io/badge/GitHub-kessleru-181717?logo=github)](https://github.com/kessleru)

</div>
