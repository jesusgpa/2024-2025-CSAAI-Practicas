console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 400;
canvas.height = 200;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Texto solido
ctx.font = "25px Sans";
ctx.fillStyle = 'yellow'
ctx.fillText("Texto sólido", 10, 30);

//-- Texto trazo
ctx.strokeStyle = 'red';
ctx.font = "50px Arial";
ctx.strokeText("Texto trazo", 5, 80);