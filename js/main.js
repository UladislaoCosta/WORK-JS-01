/* PRIMER TRABAJO JS */

// let monto = ingresaNumero("Ingrese el monto a pagar.")

// let cantCuotas;
// while(true) {
//       cantCuotas = ingresaNumero("Ingrese la cantidad de cuotas en que va a pagar. (3, 6, 9, 12)")
//       if(cantCuotas === 3 || cantCuotas === 6 || cantCuotas === 9 || cantCuotas === 12) {
//         break;
//       } else {
//         alert("Cantidad de cuotas no disponible, intente de nuevo.")
//       }
// }

// alert("El valor de cada cuota es de: " + monto / cantCuotas)

// function ingresaNumero(mensaje) {
//     return parseInt(prompt(mensaje))
// }




 /* ---------------------SEGUNDO TRABAJO JS--------------------------- */

 const productos = [
    {nombre: "Lechuga", precio: 500},
    {nombre: "Cebolla", precio: 600},
    {nombre: "Papa", precio: 700},
    {nombre: "Zanahoria", precio: 800},
    {nombre: "Tomate", precio: 900},
 ];

 let carrito = []

 let seleccion = prompt("¿Desea comprar algun producto? Responda con SI o NO.")

 while(seleccion && seleccion.toLowerCase() != "si" && seleccion.toLowerCase() != "no" || seleccion === "") {
    alert("Por favor, coloque SI en caso de querer comprar y NO en caso de querer retirarse.")
    seleccion = prompt("¿Desea comprar algun producto?")
 }

 function mostrarProductos() {
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join("\n"))
 }

 function cerrarCompra() {
    return alert("¡Gracias por la compra!")
 }

 if(seleccion && seleccion.toLowerCase() == "si") {
    alert("Ha seleccionado SI, a continuacion podrá ver nuestra lista de productos.")
    mostrarProductos()
 } else if(seleccion && seleccion.toLowerCase() == "no") {
    alert("Ha seleccionado NO, por lo tanto se cerrará el menu de compra.");
 }

 while(seleccion && seleccion.toLowerCase() != "no") {
    let producto = prompt("Agregá un producto a tu carrito")
    let precio = 0

    if(producto === "Lechuga" || producto === "Cebolla" || producto === "Papa" || producto === "Zanahoria" || producto === "Tomate") {
        switch (producto) {
            case "Lechuga":
                precio = 500
                break;

            case "Cebolla":
                precio = 600
                break;

            case "Papa":
                precio = 700
                break;

            case "Zanahoria":
                precio = 800
                break;

            case "Tomate":
                precio = 900
                break;
        
            default:
                break;
        }

        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

        carrito.push({producto, unidades, precio})
         
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando? Responda con SI o NO.")
    while(seleccion === "no") {
    cerrarCompra()
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
    }
 }

 const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
 alert("El total a pagar es: " + total)

