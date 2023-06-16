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
        let UsuarioInp = document.getElementById("Usuario").value;
        let contraseñaInp = document.getElementById("contraseña").value;
        if (sistema.estaUsuario(UsuarioInp, contraseñaInp)) {
            window.location.href = '../index.html';
        }else{
            alert("Datos incorrectos");
        }
    }
}
