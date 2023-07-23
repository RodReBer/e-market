let sistema = new Sistema();
let carrito = new Carrito();
window.addEventListener("load", inicio);


function inicio() {
  document.getElementById("inputBuscar").addEventListener("keyup", function () {
    renderizarProductos(sistema);
  });
  /*compro y borro de la lista*/
  // document.getElementById("comprarProducto").addEventListener("click", function () {
  //     comprarProducto(sistema)
  // });
}
let categoriaSeleccionada = "MLA1055";
const limiteProductos = 50;
const productos = [];

function registrosPorId(id) {
  return productos.filter((producto) => producto.id == id);
}
function registrosPorNombre(palabra) {
  return productos.filter((producto) => producto.nombre.toLowerCase().includes(palabra));
}


async function apiProductosPorCategoria(categoria = categoriaSeleccionada) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoria}&limit=${limiteProductos}&offset=0`);
  const api = await response.json();
  const productosMercadoLibre = api.results;

  for (const productosML of productosMercadoLibre) {
    productos.push(new Producto(productosML.id, productosML.title, productosML.category_id, productosML.price, 0, productosML.thumbnail))
  }
  return productos;
}

apiProductosPorCategoria().then(productos => cargarProductos(productos));

function cargarProductos(productos) {
  let divProductos = document.getElementById("sectionProductos");
  divProductos.innerHTML = "";
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
            <img src="${producto.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">$${producto.precio}</p>
              <a href="#" class="btn btn-primary botonAgregar" data-id="${producto.id}">Agregar al carrito</a>          </div>
          </div>
        `;
    }
  }


  const botonesAgregar = document.querySelectorAll(".botonAgregar");
  for (const boton of botonesAgregar) {
    boton.addEventListener("click", (e) => {
      e.preventDefault();
      const id = boton.dataset.id;
      const producto = registrosPorId(id);
      carrito.agregarProductoCarrito(producto[0]);
    });
  }
}
document.getElementById("botonComprar").addEventListener("click", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "Su pedido está en camino",
    text: "¡Su compra ha sido realizada con éxito!",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
  // Vacíamos el carrito
  carrito.vaciar();
});

function renderizarProductos(sistema) {
  const palabra = inputBuscar.value;
  const productosEncontrados = registrosPorNombre(palabra.toLowerCase());
  cargarProductos(productosEncontrados);
}

