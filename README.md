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

### 2. Configura tu Clave de API

Esta aplicación utiliza la API de Google Gemini para sus funciones de IA.

1.  Ve a [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Inicia sesión con tu cuenta de Google.
3.  Haz clic en **"Create API key"** para generar una nueva clave.
4.  Copia la clave. La necesitarás en el siguiente paso.

### 3. Configuración de Variables de Entorno (¡Importante!)

Para proteger tu clave de API y otras configuraciones sensibles, utilizamos variables de entorno.

1.  En la raíz del proyecto, crea un nuevo archivo llamado `.env` (si no existe).
2.  Añade la siguiente línea al archivo `.env`:

    ```
    VITE_GOOGLE_API_KEY="PEGA_AQUÍ_TU_CLAVE_DE_API_DE_GEMINI"
    ```

3.  Reemplaza `PEGA_AQUÍ_TU_CLAVE_DE_API_DE_GEMINI` con la clave que copiaste de Google AI Studio. **Asegúrate de mantener las comillas.**
4.  El archivo `.env` ya está incluido en `.gitignore`, por lo que no se subirá accidentalmente a tu repositorio.

### 4. Ejecuta la Aplicación

Sigue estos pasos para tener la aplicación funcionando en tu máquina local.

1.  **Instala las dependencias:**
    ```bash
    pnpm install
    ```
2.  **Inicia el servidor backend:**
    ```bash
    pnpm run dev:server
    ```
    Esto iniciará el servidor en `http://localhost:3001`.
3.  **Inicia la aplicación frontend:**
    ```bash
    pnpm run dev
    ```
    Esto abrirá la aplicación en tu navegador web predeterminado (generalmente en una URL como `http://localhost:5173`).

¡Y eso es todo! La aplicación ahora es totalmente funcional en tu entorno local.

### 5. Scripts de Desarrollo

Puedes usar los siguientes scripts para el desarrollo:

*   `pnpm run dev`: Inicia el servidor de desarrollo frontend.
*   `pnpm run build`: Compila la aplicación para producción.
*   `pnpm run dev:server`: Inicia el servidor backend.
*   `pnpm run preview`: Previsualiza la compilación de producción.
*   `pnpm run lint`: Ejecuta ESLint para verificar el código.
*   `pnpm run lint:fix`: Ejecuta ESLint y corrige automáticamente los problemas.

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
