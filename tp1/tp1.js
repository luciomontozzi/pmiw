//tp3p
//Montozzi Lucio Lorenzo
//Comision 1
//https://youtu.be/EPUEzKj04Y8
function preload() {
 cuadro = loadImage("data/cuadro.jpg");
}

let cuadro;
let cant= 8;
let tam;  
let cambiar;
let colorcubo = color(255);

function setup() {
createCanvas(800, 400);
  tam = height/cant; 
  noStroke();
  cambiar = color(255);
  
}
function draw() {
 background(230);
   for (let i = 0; i < cant; i++) {
    for (let j = 0; j < cant; j++) {
      let lado = tam/1.7;
      let Px = 400 + i * 60;
      let Py= -15 + j * 90;
    
      Dibujarcubo(Px, Py, lado);
    }
   }
  for (let i = 0; i < cant; i++) {
    for (let j = 0; j< cant; j++) {
    let lado = tam/1.7;
    let Px = 370 + i * 60;
    let Py= 30 + j * 90;
      
      Dibujarcubo(Px, Py, lado); 
    }
  }
  image(cuadro, 0, 0, 400, 400);
}
function calcularBrillo(c) {
  let r = red(c);
  let g = green(c);
  let b = blue(c);
  return (r+g+b)/3.0;
}

function mousePressed() {
  cambiar = color(random(255), random(255), random(255));
  let brillo = calcularBrillo(cambiar);

  if (brillo > 120) {
    console.log("Color claro");
  } else {
    console.log("Color oscuro");
  }
}


function keyPressed() {
  if (key == 'r' || key == 'R') {
    cambiar = color(255);
  }
}
