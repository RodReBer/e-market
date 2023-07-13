let sistema = new Sistema();
let carrito = new Carrito()
window.addEventListener("load", inicio);


function inicio() {
  sistema.darProductos().then((productos) => cargarProductos(productos))

  /*entrar a la lista de productos, hacer un push del producto y actualizar en tiempo real*/
  document.getElementById("inputBuscar").addEventListener("keyup", function () {
    renderizarProductos(sistema);
  });
  /*compro y borro de la lista*/
  // document.getElementById("comprarProducto").addEventListener("click", function () {
  //     comprarProducto(sistema)
  // });
}
//cargar por primera vez
function cargarProductos(productos) {
  let divProductos = document.getElementById("sectionProductos");
  divProductos.innerHTML = "";
  // Recorremos todos los productos y lo agregamos al div #productos
  if (sistema.darUsuarios().length == 0) {
    divProductos.innerHTML = "";
    divProductos.innerHTML = `<h2>Ingrese a su cuenta para poder ver los productos</h2>`
    Swal.fire({
      title: "Tiene que registrarse para poder ver los productos",
      text: "Cree una cuenta / ingrese",
      icon: "error",
      confirmButtonText: "Aceptar",
    });
  } else {
    for (const producto of productos) {
      divProductos.innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="assets/img/${producto.unaImagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombreProducto}</h5>
              <p class="card-text">${producto.precioProducto}</p>
              <a href="#" class="btn btn-primary botonAgregar" data-id="${producto.id}">Agregar al carrito</a>          </div>
          </div>
        `;
    }
  }

  const botonesAgregar = document.querySelectorAll(".botonAgregar");
  for (const boton of botonesAgregar) {
    // Le agregamos un evento click a cada uno
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      // Obtenemos el ID del producto del atributo data-id
      const id = Number(boton.dataset.id);
      // Con ese ID, consultamos a nuestra base de datos por el producto
      const producto = sistema.registrosPorId(id);
      console.log(producto)
      // Agregamos el registro (producto) a nuestro carrito
      carrito.agregarProductoCarrito(producto);
    });
  }
}

function renderizarProductos(sistema) {
  const palabra = inputBuscar.value;
  const productosEncontrados = sistema.registrosPorNombre(palabra.toLowerCase());
  cargarProductos(productosEncontrados);
}

