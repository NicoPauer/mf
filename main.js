// Codigo principal que se encarga de generar el Martin Fierro

// Selecciono elementos a manipular o de donde extraer informacion
let boton = document.getElementById("entrega");
let ternado = document.getElementById("ternado");
let terna = document.getElementById("terna");
let edicion = document.getElementById("edicion");
let certificado = document.getElementById("martin-fierro");
// Defino funciones a usar
function generar(notificacion)
{
   alert(notificacion);
}
/* cuando se oprime el botón si los datos son válidos genera la imagen para descargar */
boton.addEventListener("click", () => generar("A " + ternado.value + " le dan Martín Fierro como " + terna.value + " " + edicion.value + "."));
