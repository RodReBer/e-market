class Sistema {
  constructor() {
    this.listaProductos = [];
    this.listaUsuarios = [];
    this.recuperarUsuarios();
  }

  registrosPorNombre(palabra) {
    return this.listaProductos.filter((producto) => producto.nombre.toLowerCase().includes(palabra));
  }
  registrosPorId(id) {
    return this.listaProductos.filter((producto) => producto.id == id);
  }

  ordenarPorPrecio() {
    this.listaProductos.sort();
  }

  darUsuarios() {
    return this.listaUsuarios;
  }

  cedulaRepetida(cedula) {
    let existe = false;
    for (let i = 0; i < this.listaUsuarios.length && !existe; i++) {
      if (this.listaUsuarios[i].cedula == cedula) {
        existe = true;
      }
    }
    return existe;
  }

  buscarCedula(cedula) {
    let esta = false;
    let Usuario = sistema.listaUsuarios[0];
    for (let i = 1; i < this.listaUsuarios.length && !esta; i++) {
      if (this.listaUsuarios[i].cedula == cedula) {
        esta = true;
        Usuario = this.listaUsuarios[i];
      }
    }
    return Usuario;
  }
  guardarUsuarios() {
    localStorage.setItem('listaUsuarios', JSON.stringify(this.listaUsuarios));
  }
  agregarUsuario(unUsuario) {
    this.listaUsuarios.push(unUsuario);
    this.guardarUsuarios();
  }
  recuperarUsuarios() {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    if (listaUsuariosString) {
      this.listaUsuarios = JSON.parse(listaUsuariosString);
    }
  }
  estaUsuario(unUsuario, unaContraseña) {
    let flag = false;
    for (const user of this.listaUsuarios) {
      if (user.Usuario == unUsuario && user.contraseña == unaContraseña) {
        flag = true;
      }
    }
    return flag;
  }
  borrarProducto(unProducto) {
    this.listaProductos = this.listaProductos.filter(
      (p) => p.id !== unProducto.id
    );
  }
  productosDisponibles(product) {
    let cant = 0;
    for (let producto of this.listaProductos) {
      if (producto.idProducto == product.idProducto) {
        cant++;
      }
    }
    return cant;
  }
}
class Usuario {
  constructor(elNombreUsuario, elApellido, laCedula, laContraseña, elUsuario) {
    this.nombre = elNombreUsuario;
    this.apellido = elApellido;
    this.cedula = laCedula;
    this.contraseña = laContraseña;
    this.Usuario = elUsuario;
  }
  toString() {
    return this.nombre + " " + this.apellido;
  }
}

class Producto {
  constructor(idProducto, nombreProducto, categoriaProducto, precioProducto, cantidadProducto, unaImagen) {
    this.id = idProducto;
    this.nombre = nombreProducto;
    this.categoria = categoriaProducto;
    this.precio = precioProducto;
    this.cantidad = cantidadProducto;
    this.imagen = unaImagen;

  }
  toString() {
    return this.nombre + " id: " + this.id + " precio: " + this.precio;
  }
}

class Carrito {
  constructor() {
    const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    this.carrito = carritoStorage || [];
    this.total = 0;
    this.totalProductos = 0;
    this.listar();
  }
  vaciar() {
    this.carrito = [];
    localStorage.removeItem("carrito");
    this.listar();
  }

  listar() {
    this.total = 0;
    this.totalProductos = 0;
    const divCarrito = document.querySelector("#divCarro");
    divCarrito.innerHTML = "";
    for (const producto of this.carrito) {
      divCarrito.innerHTML += `
        <div class="productoCarrito">
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <p>Cantidad: ${producto.cantidad}</p>
            <a href="#" data-id="${producto.id}" class="btn btnQuitar">Quitar del carrito</a>
        </div>
    `;

      this.total += producto.precio * producto.cantidad;
      this.totalProductos += producto.cantidad;
    }
    divCarrito.innerHTML += `<button id="botonComprar" class="btn">Comprar</button>`;
    if (this.totalProductos > 0) {
      botonComprar.classList.remove("oculto");
    } else {
      botonComprar.classList.add("oculto");
    }
    const botonesQuitar = document.querySelectorAll(".btnQuitar");
    for (const boton of botonesQuitar) {
      boton.onclick = (event) => {
        event.preventDefault();
        this.quitar(boton.dataset.id);
      };
    }
     document.getElementById("cantidadProductos").innerText =  "Cantidad de productos: "+this.totalProductos;
     document.getElementById("totalCarrito").innerText =+this.total;
  }

  quitar(id) {
    const indice = this.carrito.findIndex((producto) => producto.id === id);
    if (this.carrito[indice].cantidad > 1) {
      this.carrito[indice].cantidad--;
    } else {
      this.carrito.splice(indice, 1);
    }
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.listar();
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
  }

  estaEnCarrito({ id }) {
    return this.carrito.find((producto) => producto.id === id);
  }

  agregarProductoCarrito(producto) {
    const productoEnCarrito = this.estaEnCarrito(producto);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.listar();
    Toastify({
      text: `${producto.nombre} fue agregado al carrito`,
      position: "center",
      className: "info",
      gravity: "bottom",
      style: {
        background: "red",
      },
    }).showToast();
    document.getElementById("botonComprar").addEventListener("click", (event) => {
      event.preventDefault();
      Swal.fire({
        title: "Su pedido está en camino",
        text: "¡Su compra ha sido realizada con éxito!",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      // Vacíamos el carrito
      this.vaciar();
    });
  }
  
}
// `https://api.mercadolibre.com/sites/MLA/search?category=CATEGORIA&limmimt=LIMITE&offset=OFFSET`
// `https://api.mercadolibre.com/sites/MLA/search?category=CATEGORIA&limmimt=LIMITE&offset=OFFSET&q=QUERY`