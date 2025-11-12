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

- **Primária**: ![#FFBB00](https://img.shields.io/badge/-%23FFBB00-FFBB00?style=flat-square) (Amarelo Bikcraft)
- **Secundária**: ![#000000](https://img.shields.io/badge/-%23000000-000000?style=flat-square) ![#111111](https://img.shields.io/badge/-%23111111-111111?style=flat-square) (Preto e cinza escuro)
- **Neutras**: Escala de cinzas (12 variações)
  - ![#F7F7F7](https://img.shields.io/badge/-%23F7F7F7-F7F7F7?style=flat-square)
  - ![#EDEDED](https://img.shields.io/badge/-%23EDEDED-EDEDED?style=flat-square)
  - ![#DEDEDE](https://img.shields.io/badge/-%23DEDEDE-DEDEDE?style=flat-square)
  - ![#CCCCCC](https://img.shields.io/badge/-%23CCCCCC-CCCCCC?style=flat-square)
  - ![#B2B2B2](https://img.shields.io/badge/-%23B2B2B2-B2B2B2?style=flat-square)
  - ![#9C9C9C](https://img.shields.io/badge/-%239C9C9C-9C9C9C?style=flat-square)
  - ![#717171](https://img.shields.io/badge/-%23717171-717171?style=flat-square)
  - ![#595959](https://img.shields.io/badge/-%23595959-595959?style=flat-square)
  - ![#404040](https://img.shields.io/badge/-%23404040-404040?style=flat-square)
  - ![#2E2E2E](https://img.shields.io/badge/-%232E2E2E-2E2E2E?style=flat-square)
  - ![#111111](https://img.shields.io/badge/-%23111111-111111?style=flat-square)
  - ![#000000](https://img.shields.io/badge/-%23000000-000000?style=flat-square)
- **Gradiente**: ![#FFBF00](https://img.shields.io/badge/-%23FFBF00-FFBF00?style=flat-square)![#F2A50C](https://img.shields.io/badge/-%23F2A50C-F2A50C?style=flat-square)

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

## 💻 JavaScript

### Funcionalidades Implementadas

- **Menu de Navegação Ativo**: Destaca automaticamente o link da página atual no menu
- **Orçamento Inteligente**: Pré-seleciona o produto quando vindo de outras páginas via URL
- **FAQ Interativo**: Perguntas e respostas com accordion expansível
- **Galeria de Imagens**: Clique nas imagens para alternar a visualização principal (desktop)

## ⚡ Otimizações de Performance

O projeto implementa diversas técnicas modernas de otimização para garantir carregamento rápido e excelente experiência do usuário:

### 🖼️ Otimização de Imagens
- **Lazy Loading**: Imagens fora da viewport inicial carregam sob demanda (`loading="lazy"`)
- **Decodificação Assíncrona**: Processamento de imagens não bloqueia o thread principal (`decoding="async"`)
- **Priority Hints**: Imagem hero marcada com `fetchpriority="high"` para carregamento prioritário
- **Picture Element**: Imagens responsivas com diferentes resoluções para dispositivos móveis

### 🔤 Otimização de Fontes
- **Carregamento Assíncrono**: Fontes do Google Fonts carregadas de forma não-bloqueante
- **DNS Prefetch**: `preconnect` para Google Fonts APIs reduz latência de conexão
- **Media Print Trick**: Fontes inicialmente carregadas como `media="print"` e depois aplicadas via JavaScript
- **Fallback NoScript**: Garantia de carregamento para usuários sem JavaScript

### 🎯 Resultado de Performance
- ✅ Redução significativa do caminho crítico de renderização
- ✅ First Contentful Paint (FCP) otimizado
- ✅ Largest Contentful Paint (LCP) melhorado
- ✅ Cumulative Layout Shift (CLS) minimizado
- ✅ Score alto no PageSpeed Insights

---

⭐ **Desenvolvido como projeto de estudos em desenvolvimento web**

[![GitHub](https://img.shields.io/badge/GitHub-kessleru-181717?logo=github)](https://github.com/kessleru)

</div>
