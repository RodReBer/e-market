let sistema = new Sistema();
window.addEventListener("load", inicio);

function inicio() {
    /*verificar que la cedula no este repetida*/
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
                alert("El nombre no puede contener espacios");
                valido = false;
                break;
            case espacio(apellido):
                alert("El apellido no puede contener espacios")
                valido = false;
            case espacio(usuario):
                alert("El usuario no puede contener espacios")
                valido = false;
            case valido:
                if (sistema.cedulaRepetida(cedula)) {
                    alert("Cedula repetida");
                    valido = false;
                }

        }
        if (valido) {
            let nuevoUsuario = new Usuario(nombre, apellido, cedula, contraseña, usuario);
            sistema.agregarUsuario(nuevoUsuario);
        }
    }
}

function espacio(palabra) {
    let flag = false;
    if (palabra[0] == " " || palabra[palabra.length] == " ") {
        flag = true;
    }
    return flag;
}