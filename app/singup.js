let sistema = new Sistema();
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("agregarBoton").addEventListener("click", function (e) {
        e.preventDefault();
        crearCuenta(sistema);
    });
}

function crearCuenta(sistema) {
    let formulario = document.getElementById("formSingup");
    if (formulario.reportValidity()) {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let cedula = document.getElementById("cedula").value;
        let contraseña = document.getElementById("contraseña").value;
        let usuario = document.getElementById("Usuario").value;
        let valido = true;
        switch (valido) {
            case espacio(nombre):
                console.log("El nombre no puede empezar con espacios");
                valido = false;
                break;
            case espacio(apellido):
                console.log("El apellido no puede empezar con espacios")
                valido = false;
                break;
            case espacio(usuario):
                console.log("El usuario no puede empezar con espacios")
                valido = false
                break;
        }
        if (valido) {
            sistema.cedulaRepetida(cedula) ? (console.log("Cedula repetida"), valido = false) : sistema.agregarUsuario(new Usuario(nombre, apellido, cedula, contraseña, usuario));
        }
    }
}

function espacio(palabra) {
    return palabra.startsWith(" ") || palabra.endsWith(" ");
}