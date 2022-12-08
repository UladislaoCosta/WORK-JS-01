let monto = ingresaNumero("Ingrese el monto a pagar.")

let cantCuotas;
while(true) {
      cantCuotas = ingresaNumero("Ingrese la cantidad de cuotas en que va a pagar. (3, 6, 9, 12)")
      if(cantCuotas === 3 || cantCuotas === 6 || cantCuotas === 9 || cantCuotas === 12) {
        break;
      } else {
        alert("Cantidad de cuotas no disponible, intente de nuevo.")
      }
}

alert("El valor de cada cuota es de: " + monto / cantCuotas)

function ingresaNumero(mensaje) {
    return parseInt(prompt(mensaje))
}

