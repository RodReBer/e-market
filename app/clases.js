class Sistema {
  constructor() {
    this.listaProductos = [];
    this.listaPersonas = [];
    this.listaOfertas = [];
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

  darOfertas() {
    return this.listaOfertas;
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

  agregarPersona(unaPersona) {
    this.listaPersonas.push(unaPersona);
  }

  agregarProducto(unProducto) {
    this.listaProductos.push(unProducto);
  }

  borrarProducto(unProducto) {
    this.listaProductos = this.listaProductos.filter(
      (p) => p.id !== unProducto.id
    );
  }
}

class Persona {
  constructor(elNombrePersona, elApellido, laCedula, laEdad, elCelular) {
    this.nombre = elNombrePersona;
    this.apellido = elApellido;
    this.cedula = laCedula;
    this.edad = laEdad;
    this.celular = elCelular;
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
    return this.nombreProducto + " id: " + this.idProducto + " precio: "+ this.precioProducto;
  }
}
