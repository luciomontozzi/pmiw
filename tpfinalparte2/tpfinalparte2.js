//tpfinalparte
//Gaspar Slomka 122906/3
//Lucio Lorenzo Montozzi 122803/7
//comisión 1
//https://youtu.be/Lw6-MMg-PmY

let img = [];
let click;
let base;

function preload() {
  for (let i = 0; i < 9; i++) {
    img[i] = loadImage('data/' + i + '.png');
  }
  click = loadSound('data/clickbut.mp3')
}

function setup() {
  createCanvas(640, 480);
  base = new Juego();
  textSize(25);
}

function draw() {
  base.diapositiva();
}

function mousePressed() {
  base.botonMouse();
}
