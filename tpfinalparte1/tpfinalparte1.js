//tpfinalparte1
//Gaspar Slomka 122906/3
//Lucio Lorenzo Montozzi 122803/7
//comisión 1
//https://youtu.be/o_Gy3nfnIlU?si=TLU1UMi7uR-6e-uE

let musicadeinicio, clickbut;
let imagen = [];
let título = 0;
let texto = [];

function preload() {
  for (let i = 0; i < 15; i++) {
    imagen[i] = loadImage('data/' + i + '.png');
  }
  musicadeinicio = loadSound('data/musicadeinicio.mp3')
  clickbut = loadSound('data/clickbut.mp3')
}

function setup() {
  createCanvas(640, 480);
  textSize(25);
  textAlign(CENTER);
  textos();
}

function draw() {
  image(imagen[título], 0, 0, width, height);
  fill(255);
  text(texto[título], 50, 50, 540, 300);
  if (título === 0) {
    fill(240, 10, 29);
    rect(269, 400, 120, 50);
    fill(255);
    text("Iniciar", 330, 435);
  }
  if (título == 1) {
    boton (411, 411, 160, 40, 'Seguir esperando');
  }
  if (título == 2) {
    boton (411, 411, 160, 40, 'Siguiente');
  }
  if (título == 3) {
    boton (411, 411, 160, 40, 'Siguiente');
  }
  if (título == 4) {
    boton (411, 411, 160, 40, 'Taerle agua');
  }
  if (título == 5) {
    boton (411, 411, 160, 40, 'Siguiente');
  }
  if (título == 6) {
    boton (411, 411, 160, 40, 'Siguiente');
  }
  if (título == 7) {
    boton (411, 411, 160, 40, 'No preguntar');
  }
  if (título == 8) {
    boton (411, 411, 160, 40, 'Siguiente');
  }
  if (título == 9) {
    boton (411, 411, 160, 40, 'Siguiente');
  }
  if (título == 11) {
    boton (411, 411, 160, 40, 'Siguiente');
  }
  if (título == 12) {
    boton (411, 411, 160, 40, 'Siguiente');
  }
  if (título == 1) {
    decisiones (111, 411, 160, 40, 'Volver a casa');
  }
  if (título == 4) {
    decisiones (111, 411, 160, 40, 'No traerle agua');
  }
  if (título == 7) {
    decisiones (111, 411, 160, 40, 'Preguntar que guerra');
  }
  if (título == 10) {
    boton (411, 411, 160, 40, 'Reiniciar');
  }
  if (título == 13) {
    boton (411, 411, 160, 40, 'Reiniciar');
  }
  if (título == 14) {
    boton (411, 411, 160, 40, 'Reiniciar');
  }
}

function mousePressed() {
  if (título === 0) {
    if (mouseX < 390 && mouseX >= 270 && mouseY < 450 && mouseY >= 400) {
      título = 1;
      musicadeinicio.loop();
      clickbut.play();
    }
  } else {
    if (click(411, 411, 160, 40)) {
      if (título < imagen.length - 1) {
        título++;
      }
    }
    if (título === 11) {
      título = 0;
    }
    if (click(111, 411, 160, 40)) {
      if (título === 1) {
        título = 14;
      }
    }
    if (click(111, 411, 160, 40)) {
      if (título === 4) {
        título = 8;
      }
    }
    if (click(111, 411, 160, 40)) {
      if (título === 7) {
        título = 11;
      }
    }
    if (click(411, 411, 160, 40)) {
      if (título === 14) {
        título = 0;
      }
    }
    if (click(411, 411, 160, 40)) {
      if (título === 11) {
        título = 12;
      }
    }
  }
}
function mouseClicked() {
  if (click(111, 411, 160, 40)) {
    clickbut.play();
  }
  if (click(411, 411, 160, 40)) {
    clickbut.play();
  }
}
