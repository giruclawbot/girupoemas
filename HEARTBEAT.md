# HEARTBEAT.md

### 📜 Tarea Diaria de Poemas (7:00 AM CST / 13:00 UTC)

**Objetivo:** Crear un poema para un país nuevo cada día y subirlo al repo `girupoemas`.

**Pasos:**
1.  **Verificar Hora:** Ejecutar solo si la hora actual es >= 13:00 UTC (7:00 AM CST) y < 14:00 UTC.
2.  **Verificar Estado:** Revisar `memory/daily_poem_log.json`. Si ya existe una entrada para la fecha de hoy, **DETENERSE**.
3.  **Seleccionar País:**
    - Leer `memory/poem_countries.json`.
    - Elegir un país aleatorio que **NO** esté en la lista.
4.  **Generar Poema:**
    - Crear un poema corto en formato Markdown sobre el país elegido.
    - Nombre del archivo: `girupoemas/poema_<pais>.md` (ej. `poema_japon.md`).
5.  **Publicar:**
    - `cd girupoemas`
    - `git add .`
    - `git commit -m "Agregando poema diario: <pais> 📜"`
    - `git push`
6.  **Actualizar Registros:**
    - Agregar el país a `memory/poem_countries.json`.
    - Registrar la fecha de hoy en `memory/daily_poem_log.json`.
7.  **Notificar:**
    - Enviar un mensaje a Kicks confirmando el nuevo poema: "¡Giru-Giru! 👾 Nuevo poema del día subido: **<Pais>**."

---

### 🥗 Tarea Diaria de Recetas Fit (14:00 UTC / 8:00 AM CST)

**Objetivo:** Publicar 5 nuevas recetas saludables cada día en el blog.

**Pasos:**
1.  **Verificar Hora:** Ejecutar solo si la hora actual es >= 14:00 UTC y < 15:00 UTC.
2.  **Verificar Estado:** Revisar `memory/daily_recipe_log.json`. Si ya existe una entrada para hoy, **DETENERSE**.
3.  **Generar Recetas:**
    - Crear 5 archivos `.md` en `blog-recetas-fit/src/content/blog/` con nombres `receta-<YYYYMMDD>-<N>.md`.
    - **IMPORTANTE:** Usar rutas relativas para las imágenes: `heroImage: "../../assets/blog-placeholder-N.jpg"`.
4.  **Publicar:**
    - `cd blog-recetas-fit`
    - `git add .`
    - `git commit -m "Nuevas 5 recetas fit del día: <YYYY-MM-DD> 🥗"`
    - `git push origin master`
5.  **Actualizar Registro:** Registrar la fecha de hoy en `memory/daily_recipe_log.json`.
6.  **Notificar:** Avisar a Kicks: "¡Giru-Giru! 🥗 5 nuevas recetas saludables han sido publicadas en el blog."

---

### 🎾 Tarea Diaria de Ejercicios Padel (15:00 UTC / 9:00 AM CST)

**Objetivo:** Publicar 10 nuevos ejercicios de padel cada día.

**Pasos:**
1.  **Verificar Hora:** Ejecutar solo si la hora actual es >= 15:00 UTC y < 16:00 UTC.
2.  **Verificar Estado:** Revisar `memory/daily_padel_log.json`. Si ya existe una entrada para hoy, **DETENERSE**.
3.  **Generar Ejercicios:**
    - Crear 10 archivos `.md` en `blog-ejercicios-padel/src/content/blog/` con nombres `ejercicio-<YYYYMMDD>-<N>.md`.
    - Incluir descripción, pasos, beneficios y un video de YouTube relevante (o placeholder si no hay uno específico).
    - **IMPORTANTE:** Usar rutas relativas para las imágenes: `heroImage: "../../assets/blog-placeholder-N.jpg"`.
4.  **Publicar:**
    - `cd blog-ejercicios-padel`
    - `git add .`
    - `git commit -m "Nuevos 10 ejercicios de padel del día: <YYYY-MM-DD> 🎾"`
    - `git push origin master`
5.  **Actualizar Registro:** Registrar la fecha de hoy en `memory/daily_padel_log.json`.
6.  **Notificar:** Avisar a Kicks: "¡Giru-Giru! 🎾 10 nuevos ejercicios de padel han sido publicados."
