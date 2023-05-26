function saludar(nombre, apellido) {
  console.log("Hola! " + nombre + " " + apellido + " bienvendio!");
}

function bebida(nombre) {
  let bebida = prompt("¡Bienvenido a nuestra fiesta! ¿Qué bebida quieres tomar? (resultado en consola)");
  switch (bebida) {
    case "whisky":
      let tipo = prompt("Que tipo de whisky quieres? (resultado en consola)");
      switch (tipo) {
        case "red label":
          console.log("El trago te sale 2000 pesos (resultado en consola)");
          break;
        case "green label":
          console.log("El trago te sale 3000 pesos (resultado en consola)");
          break;
        case "blue label":
          console.log("El trago te sale 4000 pesos (resultado en consola)");
          break;

        default:
          console.log("No tenemos ese whisky");
          break;
      }
      break;
    case "vodka":
      let flag = false;
      while (!false) {
        if (vodka != "smirnoff") {
          console.log("No tenemos ese smirnoff");
          flag = true;
        } else {
          console.log("El trago te sale 1200 pesos");
        }
      }
      break;
    case "ron":
      let cantidad = parseInt(
        prompt("¿Cuántos tragos quieres? (resultado en consola)")
      );
      console.log("El trago te sale " + cantidad * 1000 + " pesos");
      break;
    case "gin":
      console.log("No te puede gustar eso, sali de nuestra fiesta");
      break;

    default:
      console.log("Lo sentimos " + nombre + " no tenemos esa bebida");
      bebida(nombre);
      break;
  }
}

function ingresar() {
  let flag = false;
  let nombre;
  let apellido;
  let edad;
  while (!flag) {
    nombre = prompt("¿Cómo te llamas? (resultado en consola)");
    apellido = prompt("¿Cuál es tu apellido? (resultado en consola)");
    edad = parseInt(
      prompt("¿Cuántos años tienes? (resultado en consola)")
    );
    while (isNaN(edad)) {
      edad = parseInt(
        prompt(
          "Ingresaste un dato invalido.¿Cuántos años tienes? (resultado en consola)"
        )
      );
    }
    if (edad < 18) {
      console.log(
        "No aceptamos a personas menores a 18, volve en " +
          (18 - edad) +
          " años"
      );
    } else {
      flag = true;
    }
  }
  saludar(nombre, apellido);
  bebida(nombre);
}

ingresar();
