# Ruleta de Carreras EICA

Aplicación web progresiva (PWA) que presenta una ruleta gamificada con las carreras de la EICA (UNViMe), pensada para adolescentes del último año del secundario.

## Stack

- React + Vite + TypeScript
- SCSS modular
- Firebase Firestore (con persistencia offline)
- PWA (manifest + service worker vía `vite-plugin-pwa`)
- Framer Motion para animaciones

## Requisitos previos

- Node.js 18 o superior
- Una cuenta de Firebase con un proyecto configurado

## Configuración de variables de entorno

1. Copiar `.env.example` a `.env`.
2. Completar las variables `VITE_FIREBASE_*` con las credenciales del proyecto de Firebase.

El archivo `.env` nunca debe subirse al repositorio (ya está excluido en `.gitignore`).

## Scripts disponibles

```bash
npm install     # instala las dependencias
npm run dev     # inicia el servidor de desarrollo
npm run build   # compila la aplicación para producción
npm run preview # sirve el build de producción localmente
npm run lint    # ejecuta el linter
```

## Estructura del proyecto

```
/src
  /core
    firebase.ts    # inicialización de Firebase y persistencia offline
    pwa.ts         # registro del service worker
    types.ts       # tipos de datos (Career, Question)
    mocks.ts       # datos temporales de ejemplo (reemplazar por datos reales de Firestore)
    repository.ts  # acceso a las colecciones de Firestore
  /features
    /wheel         # ruleta de carreras
    /question      # pantalla de preguntas con timer de 30s
    /result        # pantallas de resultado (felicitación / tiempo agotado / incorrecto)
  /shared
    /components    # componentes reutilizables (Button, Layout)
    /hooks         # hooks reutilizables (useTimer)
    /styles        # variables y estilos globales
```

## Firestore

La aplicación espera dos colecciones:

- `careers`: `id`, `name`, `weight`, `color` (opcional)
- `questions`: `id`, `careerId`, `text`, `options` (4 strings), `correctIndex` (0-3)

Mientras esas colecciones no tengan datos reales, la aplicación utiliza datos de ejemplo definidos en `src/core/mocks.ts`, claramente marcados para ser reemplazados.

## Deploy en Vercel

El proyecto incluye `vercel.json` con la configuración de build (`npm run build`, carpeta `dist`). Las variables `VITE_FIREBASE_*` deben cargarse desde las Environment Variables del proyecto en Vercel.
