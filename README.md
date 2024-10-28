Frontend - Asociación Yambo
===========================

Este es el frontend de la aplicación web para la Asociación Yambo, construido con **React**.

Requisitos
----------

*   **Node.js**
*   **NPM**

## Instalación y Ejecución (sin Docker)

**1. Instala las dependencias**:
    
```bash
npm install
```
    
**2. Inicia el servidor de desarrollo**:
    
```bash
npm start
```

Esto iniciará la aplicación en `http://localhost:3000`.
    
**3. Configuración para producción**:
    
Si necesitas conectar el frontend con el backend sin Docker, puedes configurar la URL de la API en los archivos de configuración del frontend, en un archivo `.env` o en el archivo de configuración de la API `src/config.ts`:

```typescript
const config = {
    apiHost: process.env.API_HOST || '/api',
};
```
    
