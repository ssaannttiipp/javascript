let nombreCombo = 'Combo Nuevo';
var item1; //creamos el primer producto
var item2; //creamos el segundo producto
var item3;
var precio1 = 0;
var precio2 = 0;
var precio3 = 0;
var precioTotal = 0;
let bandera = 1;
while (bandera < 3 && bandera > 0) {
  if (bandera === 1) {
    nombreCombo = prompt('Indique el nombre del combo: '); //asignamos el nombre del combo

    //asignamos precio y nombre al producto a agregar
    item1 = asignarNombreProducto();
    precio1 = asignarPrecioProducto(item1);
    item2 = asignarNombreProducto();
    precio2 = asignarPrecioProducto(item2);
    if (!item1 || !item2 || !precio1 || !precio2) {
      break;
    }

    //Preguntamos si quiere seguir añadiendo
    if (confirm('Quiere agregar un tercer producto al combo?')) {
      item3 = asignarNombreProducto();
      precio3 = asignarPrecioProducto(item3);
      if (!item3 || !precio3) {
        break;
      }
      bandera++;
    } else {
      calcularPrecioTotal();
      calcularDescuento();
      bandera = 0;
    }
  } else {
    calcularPrecioTotal();
    calcularDescuento();
    bandera = 0;
  }
}

//esta funcion asigna nombre y precio a los productos
function asignarNombreProducto() {
  var nombre = prompt('Indique el nombre del elemento: ');
  if (nombre === '') {
    alert('El nombre no puede estar vacio');
    return false;
  } else {
    return nombre;
  }
}

function asignarPrecioProducto(item) {
  var precio = parseInt(prompt('Indique el precio de ' + item + ': '));
  if (isNaN(precio) || precio === 0) {
    alert('El precio no es correcto');
    return false;
  } else {
    return precio;
  }
}

//funcion para calcular el precio total e informmar
function calcularPrecioTotal() {
  precioTotal = precio1 + precio2 + precio3;
  alert(
    `Los productos seleccionados para el combo "${nombreCombo}" son: ${devolverString()}. El precio inicial es de $${precioTotal}. EL siguiente paso es agregar el descuento al combo.`
  );
  return;
}

//funcion para concatenar en caso de tener 2 o 3 productos
function devolverString() {
  if (item3 !== '') {
    return `${item1}, ${item2} y ${item3}`;
  } else return `${item1}y ${item2} `;
}

//funcion para preguntar si tiene descuento y si lo tiene calcular el precio final e informarlo... todo esta logica deberia separarse
function calcularDescuento() {
  if (confirm('Tiene descuento?')) {
    var banderaDescuento = true;
    while (banderaDescuento) {
      var descuento = parseInt(
        prompt('Indique el descuento a aplicar (1-100): ')
      );
      if (isNaN(descuento) && 1 < descuento < 100) {
        alert('Datos invalidos');
      } else {
        precioTotal = precioTotal - precioTotal * 0.01 * descuento;
        alert(
          'El precio FINAL del combo ' + nombreCombo + ' es de: $' + precioTotal
        );
        banderaDescuento = false;
      }
    }
    return;
  } else {
    return;
  }
}
