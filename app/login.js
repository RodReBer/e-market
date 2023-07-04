let sistema = new Sistema();
window.addEventListener("load", inicio);

function inicio() {
    document.getElementById("ingresarButton").addEventListener("click", function (e) {
        e.preventDefault();
        ingresarUsuario(sistema);
    });

}
function ingresarUsuario(sistema) {
    let formulario = document.getElementById("formLogin");
    if (formulario.reportValidity()) {
        sistema.estaUsuario(document.getElementById("Usuario").value, document.getElementById("contraseña").value) ? window.location.href = '../index.html' : console.log("Datos incorrectos");
    }
}
