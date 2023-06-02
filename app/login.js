let sistema = new Sistema();
window.addEventListener("load", inicio);

function inicio() {
    /*Verifico que el usuario y contraseña coinciden y lo meto, sino alerta*/
    document.getElementById("ingresarButton").addEventListener("click", function () {
        ingresarPersona(sistema);
    });

}


function ingresarPersona(sistema) {
    let formulario = document.getElementById("formLogin");
    if (formulario.reportValidity()) {
        let usuario = document.getElementById("usuario").value;
        let contraseña = document.getElementById("contraseña").value;
        for (const persona of sistema.listaPersonas) {
            if (persona.usuario === usuario && persona.contraseña === contraseña) {
                alert("ingresado exitosamente");
            } else {
                alert("datos incorrectos");
            }
        }
    }
}
