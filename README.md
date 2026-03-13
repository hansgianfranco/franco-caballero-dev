# 📄 Next.js Resume / CV

Aplicación web moderna para mostrar mi **currículum profesional**
construida con **Next.js** y optimizada para **SEO, rendimiento y
accesibilidad**.

El proyecto presenta información profesional como experiencia,
habilidades, proyectos y certificaciones de forma estructurada y
optimizada para buscadores mediante **Schema.org structured data**.

------------------------------------------------------------------------

# 🚀 Características

-   ⚡ **Next.js App Router** para renderizado optimizado
-   🌍 **Internacionalización basada en rutas** (`/es`, `/en`)
-   🔀 **Redirección automática por idioma** usando middleware
-   🧠 **SEO avanzado** con metadata dinámica
-   📊 **Datos estructurados schema.org**
-   📱 **Responsive design**
-   🧩 Arquitectura modular basada en servicios
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

# 📂 Estructura del proyecto

    .
    ├── app/
    │   ├── layout.tsx         # Root layout
    │   └── [lang]/            # Rutas internacionalizadas
    │       ├── layout.tsx
    │       └── page.tsx
    │
    ├── components/            # Componentes reutilizables
    ├── services/              # Servicios para obtener datos
    ├── contexts/              # Contextos React
    ├── data/                  # Datos
    ├── lib/                   # Librerias
    ├── utils/                 # Utilidades
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

Los servicios permiten **separar lógica de datos del renderizado UI**.

------------------------------------------------------------------------

# 🌍 Internacionalización (i18n)

El proyecto utiliza **routing basado en idioma**:

    /es
    /en

El idioma se determina mediante:

-   prefijo en la URL
-   middleware que detecta `Accept-Language`

Ejemplo:

    / → redirige a /es o /en

Esto permite:

-   mejor SEO internacional
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

-   mejorar visibilidad en buscadores
-   facilitar indexación
-   estructurar información profesional

Ejemplo:

``` json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Franco Caballero",
  "jobTitle": "Fullstack Developer",
  "sameAs": [
    "https://github.com/username",
    "https://linkedin.com/in/username"
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

    npm run build
    npm start

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
