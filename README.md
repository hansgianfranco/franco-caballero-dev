# 📄 Next.js Resume / CV

Aplicación web moderna para mostrar mi **currículum profesional**
utilizando **Next.js**, optimizada para **SEO semántico**, rendimiento y
accesibilidad.

El proyecto presenta información profesional como experiencia,
habilidades, proyectos y certificaciones de forma estructurada y
optimizada para buscadores mediante **Schema.org**.

------------------------------------------------------------------------

## 🚀 Características

-   ⚡ **Next.js** para renderizado rápido y optimizado
-   🌍 **Traducción dinámica (i18n)** para múltiples idiomas
-   🧠 **SEO avanzado** usando datos estructurados `schema.org`
-   📱 **Responsive design**
-   🧩 Arquitectura modular basada en servicios
-   📂 Contenido estructurado (perfil, experiencia, proyectos, skills)
-   🔗 Integración con redes profesionales
-   🎯 Optimizado para **portfolios profesionales**

------------------------------------------------------------------------

## 🛠️ Tecnologías

-   **Next.js**
-   **React**
-   **TypeScript**
-   **Schema.org Structured Data**
-   **Tailwind CSS**
-   **Vercel / Hosting compatible**

------------------------------------------------------------------------

## 📂 Estructura del proyecto

    .
    ├── app/                # Rutas de Next.js
    ├── components/         # Componentes reutilizables
    ├── services/           # Servicios para obtener datos
    ├── types/              # Tipos TypeScript
    ├── utils/              # Utilidades (ej: detectLang)
    ├── public/             # Assets estáticos
    └── styles/             # Estilos globales

Ejemplo de servicios:

    services/
     ├── personal.service.ts
     ├── profile.service.ts
     ├── experience.service.ts
     ├── projects.service.ts
     └── skills.service.ts

------------------------------------------------------------------------

## 📊 SEO Semántico

El proyecto genera **datos estructurados automáticamente** usando
`schema.org`:

-   `Person`
-   `WorkExperience`
-   `Project`
-   `Skills`

Esto ayuda a:

-   mejorar visibilidad en buscadores
-   facilitar indexación
-   estructurar información profesional

Ejemplo:

``` json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Software Developer",
  "sameAs": [
    "https://github.com/username",
    "https://linkedin.com/in/username"
  ]
}
```

------------------------------------------------------------------------

## 🌍 Internacionalización

El proyecto soporta **múltiples idiomas** mediante detección automática:

    /en
    /es

Utiliza una utilidad personalizada:

    utils/detectLang.ts

------------------------------------------------------------------------

## 🧪 Desarrollo

Instalar dependencias:

``` bash
npm install
```

Ejecutar servidor de desarrollo:

``` bash
npm run dev
```

Abrir en navegador:

    http://localhost:3000

------------------------------------------------------------------------

## 🏗️ Build

Para generar la versión de producción:

``` bash
npm run build
npm start
```

------------------------------------------------------------------------

## 📦 Deployment

El proyecto puede desplegarse en:

-   Vercel
-   AWS
-   VPS
-   Plesk
-   Docker

------------------------------------------------------------------------

## 👨‍💻 Autor

**Franco Caballero**

-   GitHub
-   LinkedIn
-   Portfolio

------------------------------------------------------------------------

## 📄 Licencia

Este proyecto es de uso personal como **currículum profesional online**.
