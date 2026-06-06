# Semana de la Ingeniería - UNViMe

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado **Node.js**.
* Para verificar si ya lo tienes, abre tu terminal y ejecuta:

  ```bash
  node -v
  npm -v

  ```

## Instalación de Browser-Sync (Local)

1. **Inicializa el proyecto con npm** (esto creará un archivo `package.json`):

  ```bash
  npm init -y

  ```


2. **Instala Browser-Sync como dependencia de desarrollo**:
  ```bash
  npm install browser-sync --save-dev

  ```

## Ejecutar el Servidor en Vivo

  ```bash
  npx browser-sync start --server --files "*.html, css/*.css, js/*.js"

  ```

### ¿Qué sucederá al ejecutar este comando?

1. Se abrirá automáticamente una pestaña en tu navegador predeterminado (por lo general en `http://localhost:3000`).
2. Cada vez que guardes un archivo (`Ctrl + S` o `Cmd + S`), la página se recargará sola reflejando tus cambios.

## Flujo de Trabajo Recomendado (Git)

1. Cada grupo debe trabajar **únicamente** en los archivos que le fueron asignados (ej. `js/lunes.js` o `css/weather.css`).
2. Mantén Browser-Sync corriendo en tu terminal mientras trabajas.
3. Cuando estés listo para enviar tus cambios:
* Detén el servidor presionando `Ctrl + C` en la terminal.
* Ejecuta tu ciclo normal de Git:
  ```bash
  git add .
  git commit -m "Descripción de lo que hiciste"
  git push

  ```
