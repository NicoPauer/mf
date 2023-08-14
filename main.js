// Codigo principal que se encarga de generar el Martin Fierro

// Selecciono elementos a manipular o de donde extraer informacion

let boton = document.getElementById("entrega");

let ternado = document.getElementById("ternado");

let terna = document.getElementById("terna");

let edicion = document.getElementById("edicion");

let certificado = document.getElementById("martin-fierro");

let marco = certificado.getContext("2d");

// Defino funciones a usar

function generar(notificacion)
{
  // Funcion que genera las alertas visuales con el certificado 
   alert(notificacion);
  // En texto amarillo con fondo negro completo con la informacion recibida

 // Color de texto(stroke) 
   marco.strokeStyle = "#ffff00";
// Color de fondo(fill)  
   marco.fillStyle = "#000000";
// Hago rectangulo de fondo, x = 0, y = 0, altura = 150px, ancho = 300px
  marco.fillRect(0, 0, 300, 150);
// Escribo texto   
   marco.strokeText(notificacion, 5, 75);
}

function descargar()
{
   // Descarga contenido del canvas
   // Creo un enlace con la etiquta <a> de atributo download para descargar y la URL del canvas
   let enlace = document.createElement("a");
   enlace.href = certificado.toDataURL();
   enlace.download = ("martin-fierro_" + ternado.value + "_" + terna.value + "_" + edicion.value + ".png");
  // Hago la descarga automaticamente
   enlace.click();
}
/* cuando se oprime el botón si los datos son válidos genera la imagen para descargar */
boton.addEventListener("click", () => generar("A " + ternado.value + " le dan Martín Fierro como " + terna.value + " " + edicion.value + "."));
boton.addEventListener("click", () => descargar());
