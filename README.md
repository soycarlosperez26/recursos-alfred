# RecursosAlfred.online — Landing Page (MVP)

Landing page de validación de mercado, construida con **Astro + TailwindCSS v4 + TypeScript**, orientada a SEO y dirigida a pequeñas y medianas empresas de la Costa Caribe colombiana (Barranquilla, Cartagena, Santa Marta, Montería, Valledupar, Sincelejo, Riohacha).

Todos los botones de las herramientas y servicios abren WhatsApp con un mensaje precargado distinto según la herramienta seleccionada, permitiendo identificar el interés real de cada visitante.

## Antes de publicar — pendientes obligatorios

1. **Google Analytics 4**: en `src/data/site.ts`, reemplaza `gaMeasurementId: "G-XXXXXXXXXX"` por tu Measurement ID real. Ya está integrado en `src/layouts/Layout.astro` y dispara un evento `whatsapp_click` (con la herramienta/origen como `event_label`) cada vez que alguien hace clic en un botón de WhatsApp — así podrás medir qué herramienta genera más interés directamente en GA4.
2. **Número de WhatsApp**: ya configurado en `src/data/site.ts` (`whatsappNumber: "573044775117"`). Verifica que sea el número correcto antes de publicar.
3. **Dominio**: `astro.config.mjs` y `src/data/site.ts` usan `https://recursosalfred.online`. Actualízalo si cambia.
4. **Imagen Open Graph**: `public/og-image.png` es una versión inicial generada automáticamente (1200×630). Puedes reemplazarla por un diseño propio con el mismo nombre y tamaño.
5. **Google Search Console**: una vez publicado, da de alta el sitio y envía el sitemap (`/sitemap-index.xml`, generado automáticamente por `@astrojs/sitemap`).

## SEO ya implementado

- Metadatos: `title`, `description`, `keywords`, `canonical`, Open Graph y Twitter Cards (`src/layouts/Layout.astro`).
- Datos estructurados JSON-LD tipo `ProfessionalService` y `WebSite` (schema.org) para mejorar la aparición en resultados de Google, incluyendo área de servicio "Costa Caribe, Colombia".
- `robots.txt` y `sitemap-index.xml` generados automáticamente.
- HTML semántico (`<header>`, `<main>`, `<section>`, `<footer>`), jerarquía de encabezados `h1` → `h2` → `h3`.
- Copy en lenguaje simple y conversacional, orientado a palabras clave como "automatización de procesos empresariales", "herramientas para pymes", "inteligencia artificial para empresas en Colombia" y menciones de ciudades de la Costa Caribe (SEO local).
- Sitio 100% estático (Astro), rápido y sin JavaScript innecesario — bueno para Core Web Vitals.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera ./dist
npm run preview   # sirve ./dist localmente
```

## Estructura

```
src/
  components/     Header, Hero, Beneficios, Herramientas, ServiciosEmpresariales,
                   PorQueElegirnos, CTAFinal, Footer, WhatsAppFloat, AnalyticsEvents
  data/           site.ts (config general) y herramientas.ts (catálogo de herramientas/servicios)
  layouts/        Layout.astro (SEO, JSON-LD, GA4, fuentes)
  pages/          index.astro
public/           robots.txt, favicon.svg, og-image.png
```

Para agregar o quitar una herramienta, edita únicamente `src/data/herramientas.ts` — la landing se actualiza sola.

## Métricas que podrás ver en GA4

- Vistas totales de la página.
- Evento `whatsapp_click` por cada botón, con `event_label` igual al slug de la herramienta (ej. `control-asistencia`, `ocr-documentos`, `cotizacion-servicios`, `hero`, `footer`, `flotante`) — así sabrás qué herramienta o sección genera más conversación.

## Siguiente fase

Según el documento de diseño (`first-step.md`), la versión 2 del proyecto se construirá en **Nuxt 4** e incluirá login, planes premium, pagos y dashboard. Esta landing en Astro es solo el MVP de validación.
