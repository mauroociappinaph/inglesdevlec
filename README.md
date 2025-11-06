# Tech English Hub

"Tech English Hub" es una aplicación educativa diseñada para ayudar a los programadores a mejorar su inglés técnico desde un nivel B1 hasta C2. Combina teoría, práctica interactiva y herramientas impulsadas por IA para crear una experiencia de aprendizaje completa.

## ✨ Características

-   **Dashboard:** Sigue tu progreso, nivel actual y racha diaria.
-   **Guía de Estudio:** Lecciones estructuradas por módulos para un aprendizaje progresivo.
-   **AI Chatbot:** Practica conversaciones y obtén explicaciones rápidas.
-   **Analizador de Documentación:** Resume y extrae vocabulario de textos técnicos.
-   **Editor de Código:** Recibe feedback sobre el inglés en tus comentarios y código.
-   **Práctica de Conversación:** Simula una entrevista técnica en tiempo real con IA de audio.
-   **Práctica de Debate:** Aprende a expresar acuerdo y desacuerdo de forma diplomática.
-   **Práctica de Entrevista:** Prepárate para entrevistas de trabajo con preguntas y feedback de IA.

## 🛠️ Requisitos Previos

Para ejecutar esta aplicación localmente, necesitarás:

1.  **Visual Studio Code:** [Descárgalo aquí](https://code.visualstudio.com/).
2.  **Extensión "Live Server":** Instálala desde el Marketplace de VS Code. Es esencial para servir la aplicación.

## 🚀 Configuración y Ejecución

Sigue estos pasos para tener la aplicación funcionando en tu máquina local.

### 1. Obtén una Clave de API de Gemini

Esta aplicación utiliza la API de Google Gemini para sus funciones de IA.

1.  Ve a [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Inicia sesión con tu cuenta de Google.
3.  Haz clic en **"Create API key"** para generar una nueva clave.
4.  Copia la clave. La necesitarás en el siguiente paso.

### 2. Configura tu Clave de API

1.  Abre la carpeta del proyecto en Visual Studio Code.
2.  En la raíz del proyecto (al mismo nivel que `index.html`), crea un nuevo archivo llamado `config.js`.
3.  Pega el siguiente código en el archivo `config.js`:

    ```javascript
    window.APP_CONFIG = {
      API_KEY: "PEGA_AQUÍ_TU_CLAVE_DE_API_DE_GEMINI"
    };
    ```

4.  Reemplaza `"PEGA_AQUÍ_TU_CLAVE_DE_API_DE_GEMINI"` con la clave que copiaste de Google AI Studio. **Asegúrate de mantener las comillas.**

### 3. Evita Subir tu Clave a Git (¡Importante!)

Para proteger tu clave de API, debemos asegurarnos de que no se suba a ningún repositorio de código.

1.  Crea un archivo llamado `.gitignore` en la raíz del proyecto (si no existe).
2.  Añade la siguiente línea al archivo `.gitignore`:

    ```
    config.js
    ```

    Esto le indicará a Git que ignore el archivo `config.js`, protegiendo tu clave.

### 4. Ejecuta la Aplicación

1.  En el explorador de archivos de VS Code, haz clic derecho sobre el archivo `index.html`.
2.  Selecciona la opción **"Open with Live Server"**.
3.  La aplicación se abrirá automáticamente en tu navegador web predeterminado (generalmente en una URL como `http://127.0.0.1:5500`).

¡Y eso es todo! La aplicación ahora es totalmente funcional en tu entorno local.

## 🎤 Solución de Problemas

-   **La aplicación no carga o muestra un error de "API_KEY is not configured":**
    -   Asegúrate de que el archivo `config.js` existe en la raíz del proyecto.
    -   Verifica que has reemplazado el texto de marcador de posición con tu clave de API real.
    -   Recarga la página o reinicia Live Server.

-   **Las funciones de IA no responden:**
    -   Abre la consola de desarrollador de tu navegador (usualmente con `F12` o `Ctrl+Shift+I`).
    -   Busca errores relacionados con la API. Un error `400` o `403` usualmente indica que la clave de API es incorrecta o no está habilitada.

-   **El micrófono no funciona (en "Conversation Practice"):**
    -   Cuando uses la función por primera vez, el navegador te pedirá permiso para acceder al micrófono. Asegúrate de hacer clic en "Permitir".
    -   Si lo bloqueaste por accidente, puedes cambiar el permiso en la configuración de tu navegador para este sitio (busca un ícono de candado en la barra de direcciones).
