// Codigo principal que se encarga de generar el Martin Fierro

// Selecciono elementos a manipular o de donde extraer informacion
let boton = document.getElementById("entrega");
let ternado = document.getElementById("ternado");
let terna = document.getElementById("terna");
let edicion = document.getElementById("edicion");
// Defino funciones a usar
function generar(notificacion)
{
 // Genera la imagen con la notificacion del ganador 
 if (ternado.value !== "")
 {
   // Cambia solo si los formualrios han sido completados
   alert(notificacion);
 }
}
/* cuando se oprime el botón si los datos son válidos genera la imagen para descargar */
boton.addEventListener("click", generar("A " + ternado.value + " le dan Martín Fierro como " + terna.value + " " + edicion.value + "."));
