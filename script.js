var botonVerificar = document.getElementById('verificarEdad');
var campoEdadUsuario = document.getElementById('edadUsuario');
var contenedorMensaje = document.getElementById('mensaje');

botonVerificar.addEventListener('click', function() {
    var edad = parseInt(campoEdadUsuario.value);

    if (edad >= 18) {
        contenedorMensaje.textContent = '¡Puedes votar!';
    } else if (edad > 0) {
        contenedorMensaje.textContent = 'No puedes votar, debes ser mayor de 18 años.';
    } else {
        contenedorMensaje.textContent = 'Por favor, ingresa una edad válida.';
    }
});
