let cantidad;
let valor;
let descuento;
let total;

function cotizar() {
  cantidad = document.getElementById("cantidad").value;

  if(cantidad <= 2){
    valor = cantidad * 800;
    total = valor;
    document.getElementById("valor").value = valor;
    document.getElementById("descuento").value = 0;
    document.getElementById("total").value = total;
    document.getElementById('valorDesc').innerHTML = `Esta compra no tiene descuento`
  } 
  else if (cantidad == 3 || cantidad == 4) {
    valor = cantidad * 800;
    descuento = valor * 0.15;
    total = valor - descuento;
    document.getElementById("valor").value = valor;
    document.getElementById("descuento").value = descuento;
    document.getElementById("total").value = total;
    document.getElementById('valorDesc').innerHTML = `¡Usted ha ganado un 15% de descuento!`
  }
  else if (cantidad >=5){
    valor = cantidad * 800;
    descuento = valor * 0.3;
    total = valor - descuento;
    document.getElementById("valor").value = valor;
    document.getElementById("descuento").value = descuento;
    document.getElementById("total").value = total;
    document.getElementById('valorDesc').innerHTML = `¡Usted ha ganado un 30% de descuento!`
  }
   else {
      alert('Igrese una cantidad')
  }
}
