/* ================================
   BOTóN DE MODO OSCURO
   ================================ */
const botonModoOscuro = document.getElementById("modoOscuro")

function actualizarBotonModoOscuro() {
    if (document.body.classList.contains("dark-mode")) {
        botonModoOscuro.textContent = "Modo claro";
    } else {
        botonModoOscuro.textContent = "Modo oscuro";
    }
}

botonModoOscuro.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    actualizarBotonModoOscuro();
});

actualizarBotonModoOscuro()

/* ================================
   ENTRADAS DE BLOG
   ================================ */
const
