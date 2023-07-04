class Sistema {
  constructor() {
    this.listaProductos = [];
    this.listaUsuarios = [];
    this.recuperarUsuarios();
  }

  ordenarPorPrecio() {
    this.listaProductos.sort();
  }

  darProductos() {
    return this.listaProductos;
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

  /*-----Usuarios-----*/
  //use el localStorage porque queria testear si funcionaban todas las funcionalidades jajajaj, me tenia loco sino con el debugger :)
  guardarUsuarios() {
    localStorage.setItem('listaUsuarios', JSON.stringify(this.listaUsuarios));
  }
  agregarUsuario(unUsuario) {
    this.listaUsuarios.push(unUsuario);
    this.guardarUsuarios();
    console.log('Usuario agregado:', unUsuario);
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
  /*-----Usuarios-----*/

  agregarProducto(unProducto) {
    this.listaProductos.push(unProducto);
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
  constructor(nombreProducto, idProducto, categoriaProducto, precioProducto, stockProducto) {
    this.nombreProducto = nombreProducto;
    this.idProducto = idProducto;
    this.categoriaProducto = categoriaProducto;
    this.precioProducto = precioProducto;
    this.stockProducto = stockProducto;
  }
  toString() {
    return this.nombreProducto + " id: " + this.idProducto + " precio: " + this.precioProducto;
  }
}

class Carrito {
  constructor() {
    this.productosCarrito = [];
    this.recuperarCarrito();

  }
  guardarCarrito() {
    localStorage.setItem('listaUsuarios', JSON.stringify(this.listaUsuarios));
  }
  agregarProductoCarrito(producto) {
    this.productosCarrito.push(producto);
    this.guardarCarrito();
    console.log('Producto agregado:', producto);
  }
  recuperarCarrito() {
    const listaProductosCarrito = localStorage.getItem('productosCarrito');
    if (listaProductosCarrito) {
      this.productosCarrito = JSON.parse(listaProductosCarrito);
    }
  }

  eliminarProducto(nombreProducto) {
    this.productos = this.productos.filter(producto => producto.nombre !== nombreProducto);
  }

  calcularTotal() {
    let total = 0;
    for (const producto of this.productos) {
      total += producto.precio;
    }
    return total;
  }

  obtenerCantidadProductos() {
    return this.productos.length;
  }

  vaciarCarrito() {
    this.productos = [];
  }
}
