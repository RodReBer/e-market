let sistema = new Sistema();
window.addEventListener("load", inicio);

function inicio(sistema) {
    /*Verificar si la persona si ya esta registrada, si esta tirar alerta sino registrar con un push*/
    document.getElementById("agregarPersona").addEventListener("click", function(){
        agregarPersona(sistema);
    });
    /*entrar a la lista de productos, hacer un push del producto y actualizar en tiempo real*/
    document.getElementById("agregarProducto").addEventListener("click", function(){
        agregarProducto(sistema)
    });
    /*compro y borro de la lista*/
    document.getElementById("comprarProducto").addEventListener("click", function(){
        comprarProducto(sistema)
    });
}
