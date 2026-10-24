/* Seleccionar todas las pestañas */
const pestanas = document.querySelectorAll(".pestana");

/* Seleccionar todos los contenidos */
const contenidos = document.querySelectorAll(".contenido");

/* Recorrer cada pestaña */
pestanas.forEach(function(pestana) {

    /* Detectar cuando se hace clic */
    pestana.addEventListener("click", function() {

        /* Quitar la selección de todas las pestañas */
        pestanas.forEach(function(elemento) {
            elemento.classList.remove("activa");
        });

        /* Ocultar todos los contenidos */
        contenidos.forEach(function(elemento) {
            elemento.classList.remove("activo");
        });

        /* Activar la pestaña seleccionada */
        pestana.classList.add("activa");

        /* Obtener el número de la pestaña */
        const numero = pestana.dataset.pestana;

        /* Buscar el contenido correspondiente */
        const contenidoSeleccionado = document.querySelector(
            "#contenido-" + numero
        );

        /* Mostrar el contenido seleccionado */
        contenidoSeleccionado.classList.add("activo");

    });

});