let sistema = new Sistema();
window.addEventListener("load", inicio);

function inicio() {
    /*verificar que la cedula no este repetida*/
    document.getElementById("agregarBoton").addEventListener("click", function () {
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
        let usuario = document.getElementById("usuario").value;
        if (!sistema.cedulaRepetida(cedula)) {
            let persona = new Persona(
                nombre, apellido, cedula, contraseña, usuario
            );
            sistema.agregarPersona(persona);
        } else {
            alert("cedula repetida");
        }
    }
}