/* ================================
   BOTóN DE MODO OSCURO
   ================================ */
const ModoOscuro = document.getElementById("modoOscuro");

ModoOscuro.addEventListener("change", function() {
    if (ModoOscuro.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
});

/* ================================
   GESTOR DE ENTRADAS DE BLOG
   ================================ */
/* Selección de cada elemento del formulario */
const formPublicar   = document.querySelector(".blog-formulario form");
const inputTitulo    = document.getElementById("titulo-blog");
const inputFecha     = document.getElementById("fecha-publicacion");
const inputImagen    = document.getElementById("imagen-blog");
const inputContenido = document.getElementById("entrada-blog");
const inputCheck     = formPublicar?.querySelector("input[type='checkbox']");
const blogSection    = document.querySelector(".blog-blog");

/* Validación de errores */
const mostrarError = (campo, mensajeError) => {
    let mensajeSpan = campo.parentElement.querySelector(".error-msg");
    if (!mensajeSpan) {
        mensajeSpan = document.createElement("span");
        mensajeSpan.classList.add("error-msg");
        campo.parentElement.insertBefore(mensajeSpan, campo.nextSibling);
    }

    if (mensajeError) {
        mensajeSpan.textContent = mensajeError;
        campo.classList.add("campo-invalido");
        campo.classList.remove("campo-valido");
    } else {
        mensajeSpan.textContent = "";
        campo.classList.remove("campo-invalido");
        campo.classList.add("campo-valido");
    }
};

/*Validación de errores*/
const validarCampo = (campo) => {
    const ContenidoCampo = campo.value.trim();

    if (!ContenidoCampo) {
        mostrarError(campo, "Este campo es obligatorio.");
        return false;
    }

    if (campo === inputTitulo && ContenidoCampo.length < 5) {
        mostrarError(campo, "El título debe contener mínimo 5 caracteres.");
        return false;
    }

    if (campo === inputContenido && ContenidoCampo.length < 20) {
        mostrarError(campo, "El contenido debe contener mínimo 20 caracteres.");
        return false;
    }

    mostrarError(campo, "");
    return true;
};

/* Validación en el mismo momento en el que escribes */
[inputTitulo, inputFecha, inputContenido].forEach((campo) => {
    campo?.addEventListener("input", () => validarCampo(campo));
});

/* Creación de un artículo con la estructura de los blogs anteriores */
const crearArticulo = ({titulo, fecha, contenido, imagen}) => {
    const article = document.createElement("article");
    article.classList.add("blog-articulo", "articulo-usuario");

    /* Formatear la fecha para que coincida con las anteriores*/
    const fechaDate = new Date(fecha + "T00:00:00");
    const fechaEnEspanol = fechaDate.toLocaleDateString("es-ES", {
        year: "numeric", month: "long", day: "numeric"
    });
    const fechaFormateada = fechaDate.toISOString().split("T")[0];

    const imagenElegida = imagen || "assets/images/placeholder-blog.png";

    /* Estructura html */
    article.innerHTML = `
    <h3>${titulo}</h3>
    <p>Publicado el <time datetime="${fechaFormateada}">${fechaEnEspanol}</time></p>
    <img src="${imagenElegida}" alt="Imagen de la entrada: ${titulo}">
    <p>${contenido}</p>
    <button class="boton-eliminar" aria-label="Eliminar esta entrada">🗑 Eliminar entrada</button>
  `;

    /* Botón para eliminar */
    const botonEliminar = article.querySelector(".boton-eliminar");
    botonEliminar.addEventListener("click", () => {
        if (confirm("¿Seguro que quieres eliminar esta entrada?")) {
            if (article && article.parentElement) {
                article.remove();
            }
        }
    });
    }


