class Sistema {
  constructor() {
    this.listaProductos = [];
    this.listaPersonas = [];
    this.recuperarPersonas();
  }

  ordenarPorPrecio() {
    this.listaProductos.sort();
  }

  darProductos() {
    return this.listaProductos;
  }

  darPersonas() {
    return this.listaPersonas;
  }

  cedulaRepetida(cedula) {
    let existe = false;
    for (let i = 0; i < this.listaPersonas.length && !existe; i++) {
      if (this.listaPersonas[i].cedula == cedula) {
        existe = true;
      }
    }
    return existe;
  }

  buscarCedula(cedula) {
    let esta = false;
    let persona = sistema.listaPersonas[0];
    for (let i = 1; i < this.listaPersonas.length && !esta; i++) {
      if (this.listaPersonas[i].cedula == cedula) {
        esta = true;
        persona = this.listaPersonas[i];
      }
    }
    return persona;
  }
  /*-----Personas-----*/
  guardarPersonas() {
    localStorage.setItem('listaPersonas', JSON.stringify(this.listaPersonas));
  }
  agregarPersona(unaPersona) {
    this.listaPersonas.push(unaPersona);
    this.guardarPersonas();
    console.log('Persona agregada:', unaPersona);
  }
  recuperarPersonas() {
    const listaPersonasString = localStorage.getItem('listaPersonas');
    if (listaPersonasString) {
      this.listaPersonas = JSON.parse(listaPersonasString);
    }
  }
  /*-----Personas-----*/
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
    for (const producto of this.listaProductos) {
      if (producto.idProducto == product.idProducto) {
        cant++;
      }
    }
    return cant;
  }
}

class Persona {
  constructor(elNombrePersona, elApellido, laCedula, laContraseña, elUsuario) {
    this.nombre = elNombrePersona;
    this.apellido = elApellido;
    this.cedula = laCedula;
    this.contraseña = laContraseña;
    this.usuario = elUsuario;
  }
  toString() {
    return this.nombre + " " + this.apellido;
  }
}

class Producto {
  constructor(nombreProducto, idProducto, categoriaProducto, precioProducto) {
    this.nombreProducto = nombreProducto;
    this.idProducto = idProducto;
    this.categoriaProducto = categoriaProducto;
    this.precioProducto = precioProducto;
  }
  toString() {
    return this.nombreProducto + " id: " + this.idProducto + " precio: " + this.precioProducto;
  }
}
