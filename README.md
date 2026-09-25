# Mini App de Productos con Fetch, ESLint y Husky

Aplicación web que consume una API pública con JavaScript, implementando validaciones de código estático con ESLint y pre-commit hooks con Husky.

## Estructura del Proyecto
- `index.html`: Estructura semántica y buscador de productos.
- `style.css`: Diseño en cuadrícula responsiva.
- `script.js`: Petición `fetch()`, manipulación del DOM y filtros de búsqueda.
- `.husky/`: Configuración del hook `pre-commit`.
- `eslint.config.mjs`: Reglas de estilo de código.

## Requisitos
- Node.js (v18+)
- Git

## Instalación y Ejecución
1. Instalar las dependencias de desarrollo:
   ```bash
   npm install