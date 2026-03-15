# 📄 Next.js Resume / CV

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38bdf8)
![SEO](https://img.shields.io/badge/SEO-Optimized-green)
![Lighthouse](https://img.shields.io/badge/Lighthouse-Performance%20100-success)

Aplicación web moderna para mostrar mi **currículum profesional**,
construida con **Next.js** y optimizada para **SEO, rendimiento y
accesibilidad**.

El proyecto presenta información profesional como experiencia,
habilidades, proyectos y certificaciones de forma estructurada y
optimizada para buscadores mediante **Schema.org structured data**.

------------------------------------------------------------------------

# 🌐 Live Demo

https://francocaballero.dev

------------------------------------------------------------------------

# 🚀 Características

-   ⚡ **Next.js App Router** para renderizado optimizado
-   🌍 **Internacionalización basada en rutas** (`/es`, `/en`)
-   🔀 **Redirección automática por idioma** usando middleware
-   🧠 **SEO avanzado** con metadata dinámica
-   📊 **Datos estructurados con schema.org**
-   📱 **Responsive design**
-   🧩 **Arquitectura modular basada en servicios**
-   📂 Contenido estructurado (perfil, experiencia, proyectos, skills)
-   🎯 Optimizado para **portfolios profesionales**
-   ⚡ Optimizado para **Lighthouse performance**

------------------------------------------------------------------------

# 🛠️ Tecnologías

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   Schema.org Structured Data
-   Vercel (deployment opcional)

------------------------------------------------------------------------

# 🧱 Arquitectura

El proyecto sigue una arquitectura modular para mantener el código
escalable y fácil de mantener.

-   **components/** contiene la interfaz de usuario reutilizable
-   **services/** gestiona el acceso y la estructura de los datos
-   **helpers/** contiene funciones utilitarias
-   **constants/** almacena valores globales
-   **types/** define contratos TypeScript
-   **contexts/** gestiona estado global de React

Esta separación permite **desacoplar la lógica de negocio del
renderizado UI**.

------------------------------------------------------------------------

# 📂 Estructura del proyecto


    .
    ├── app/
    │   ├── api/               # API de contacto
    │   ├── layout.tsx         # Root layout
    │   └── [lang]/            # Rutas internacionalizadas
    │       ├── layout.tsx
    │       └── page.tsx
    │
    ├── components/            # Componentes reutilizables
    ├── services/              # Servicios para obtener datos
    ├── constants/             # Constantes globales
    ├── contexts/              # Contextos React
    ├── data/                  # Datos
    ├── lib/                   # Librerias
    ├── helpers/               # Funciones utilitarias
    ├── types/                 # Tipos TypeScript
    ├── public/                # Assets estáticos
    └── globals.css

Ejemplo de servicios:

    services/
     ├── personal.service.ts
     ├── profile.service.ts
     ├── experience.service.ts
     ├── projects.service.ts
     └── skills.service.ts

Los servicios permiten **separar la lógica de datos del renderizado de
la interfaz**.

------------------------------------------------------------------------

# 🌍 Internacionalización (i18n)

El proyecto utiliza **routing basado en idioma**:

/es /en

El idioma se determina mediante:

-   Prefijo en la URL
-   Middleware que detecta `Accept-Language`

Ejemplo:

/ → redirige a /es o /en

Esto permite:

-   mejor **SEO internacional**
-   URLs claras para buscadores
-   metadata específica por idioma

------------------------------------------------------------------------

# 📊 SEO Semántico

El proyecto genera **datos estructurados automáticamente** usando
**schema.org**.

Tipos utilizados:

-   Person
-   WorkExperience
-   Project
-   Skills

Esto ayuda a:

-   Mejorar visibilidad en buscadores
-   Facilitar indexación
-   Estructurar información profesional

Ejemplo:

``` json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Franco Caballero",
  "jobTitle": "Fullstack Developer",
  "sameAs": [
    "https://github.com/hansgianfranco",
    "https://linkedin.com/in/francocaballero"
  ]
}
```

------------------------------------------------------------------------

# 🧪 Desarrollo

Instalar dependencias:

npm install

Ejecutar servidor de desarrollo:

npm run dev

Abrir en navegador:

http://localhost:3000

------------------------------------------------------------------------

# 🏗️ Build

Generar versión de producción:

npm run build npm start

------------------------------------------------------------------------

# 📦 Deployment

El proyecto puede desplegarse en:

-   Vercel
-   AWS
-   VPS
-   Docker
-   Plesk

------------------------------------------------------------------------

# 👨‍💻 Autor

**Franco Caballero**

-   GitHub
-   LinkedIn
-   Portfolio

------------------------------------------------------------------------

# 📄 Licencia

Este proyecto es de uso personal como **currículum profesional online**.
