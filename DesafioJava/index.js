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
                precioTotal = precioTotal - precioTotal * 0.01 * descuento ;
                alert( 'El precio final con descuento es: $' +  precioTotal);
                banderaDescuento = false;
            }
        }
        return;
    } else {
        return;
    }
}
