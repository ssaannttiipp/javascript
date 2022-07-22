let contenedor = document.getElementById("container");
let productos = [
    { id: 1, nombre: "Parrilla Modular", precio: 7000 },
    { id: 2, nombre: "Disco", precio: 8300 },
    { id: 3, nombre: "Fogonero", precio: 15600 },
    { id: 4, nombre: "Tabla", precio: 1500 },
    { id: 5, nombre: "Tabla Gravada", precio: 1800 },
    { id: 6, nombre: "Set Asador", precio: 1200 },
];

for (const producto of productos) {
    let li = document.createElement("li");
    li.innerHTML = `<h5> <b>${producto.id}  <h5>${producto.nombre} <b>$${producto.precio}</b> </h5> `;
    contenedor.append(li);
}

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
  e.preventDefault();

  if(e.target.children[1].value.includes("-") && e.target.children[1].value.includes(".")){
    let mensaje = document.createElement("div");
    mensaje.innerHTML = "Bienvenido";
    mensaje.className = "verde";
    document.body.append(mensaje);
  }else{
    let mensaje = document.createElement("div");
    mensaje.innerHTML = "Por favor seleccione un correo existente";
    mensaje.className = "rojo";
    document.body.append(mensaje);
    e.target.children[1].value = "";
  }
}


let nombreProducto = 'Producto';
var precioCompras = []; //creamos el array para que simule el canasto con los precios...
var precioTotal = 0;
var bandera = true;
while (bandera) {
    //Tomamos la compra y la metemos al canasto(array)

    nombreProducto = prompt('Elegi el producto para tu asador que desea comprar:'); //asignamos el nombre del combo

    var precioSiguienteCompra = parseInt(prompt("Indique el precio del elemento a comprar: "));
    if (isNaN(precioSiguienteCompra)) {
        break;
    } else {
        precioCompras.push(precioSiguienteCompra);
    }

    //Preguntamos si quiere seguir añadiendo
    if (confirm('Queres seguir agregando elementos?')) {
        bandera = true;
    } else {
        calcularPrecioTotal();
        calcularDescuento();
        bandera = false;
    }
    
}

//funcion para calcular el precio total e informmar
function calcularPrecioTotal() {
    precioTotal = 0;
    for (var i = 0; i < precioCompras.length; i++) {
        precioTotal += precioCompras[i];
    }
    alert("El precio total es: $ " + precioTotal + ". Cantidad de elementos: " + precioCompras.length);
    return;
}


//funcion para preguntar si tiene descuento y si lo tiene calcular el precio final e informarlo... todo esta logica deberia separarse
function calcularDescuento() {
    if (confirm('Tiene descuento? (compra mayor a 2 unidades)')) {
        var banderaDescuento = true;
        while (banderaDescuento) {
            var descuento = parseInt(prompt("Indique el descuento a aplicar  (20-35): "));
            if (isNaN(descuento) && 20 < descuento < 35) {
                alert("Datos invalidos");
            } else {
                precioTotal = precioTotal - precioTotal * 0.01 * descuento;
                alert('El precio final con descuento es: $' + precioTotal);
                banderaDescuento = false;
            }
        }
        return;
    } else {
        return;
    }

}
comprar ()
