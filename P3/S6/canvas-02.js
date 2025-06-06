console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 400;
canvas.height = 200;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
ctx.beginPath();
  //-- Definir un rectángulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5)
  ctx.rect(10,10, 100, 50);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'red';

  //-- Cambiar el tamaño de la línea del trazo
  ctx.lineWidth = 4;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
ctx.closePath();