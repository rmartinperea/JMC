// Detectamos el evento de scroll
window.onscroll = function () {
    toggleHeader();
};

// Elementos del DOM
var header = document.querySelector('.header-principal');
var contactBar = document.querySelector('.header-contacto');

// Función que se ejecuta al hacer scroll
function toggleHeader() {
    // Si el desplazamiento es mayor que la altura de la barra de contacto
    if (window.pageYOffset > contactBar.offsetHeight) {
        // Ocultamos la barra de contacto
        contactBar.style.top = '-60px';  // Ajusta este valor según la altura de tu barra
        // Movemos el header más hacia arriba al hacer scroll
        header.style.top = '-30px';  // Ajusta este valor según cuánto quieres que suba
    } else {
        // Cuando volvemos hacia arriba, mostramos la barra de contacto
        contactBar.style.top = '0';  // Vuelve a la posición original
        // Restauramos el padding original y el top del header
        header.style.top = '0';  // El header vuelve a su posición original
    }
}
