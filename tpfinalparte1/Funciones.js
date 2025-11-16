function textos() {
  texto=["", "En un día lluvioso, Hernando sale de su cabaña y camina por la carretera esperando a que pasen autos", "De repente aparecen una gran variedad de autos simultáneamente, los cuales parecen apresurados", "Nuevamente la carretera vuelve a estar vacía, y Hermando se sienta a esperar, pero también ve a otro auto a lo lejos que se aproxima", "El joven que conduce ese auto frena rápidamente para pedirle a Hernando agua, mientras hay dos chicas jovenes llorando y tapándose con diarios para no mojarse", "Hernando vuelve a su casa a buscar agua mientras cae un rayo y empiezan las tormentas", "Hernando pasa a entregarles el agua en un jarro y una tapa de rueda de auto como regalo", "Hernando le pregunta al chico porque se ve desesperado, y el chico le responde que llego la guerra y que se tienen que escapar", "Los jovenes se van rápidamente y la lluvia comienza a calmarse, mientras Hernando se queda quieto unos minutos en la carretera", "Hernando vuelve a casa y su esposa le pregunta que si había pasado algo y el le responde amablemente que no", "La lluvia se fue por completo y Hernando sale a pasear con su burro", "El joven le cuenta que están empezando a bombardear casas en todas las ciudades, haciendo que Hernando se sienta en peligro", "Hernando vuelve a casa desesperado y le cuenta todo a su esposa lo que hace que ella también entre pánico", "Hernando y su esposa se suben al auto y se escapan desesperadamente", "Hernando vuelve a casa sin interés de esperar a nadie"]
}

function boton(x, y, ancho, alto, textoBoton) {
  fill(250, 3, 65);
  rect(x, y, ancho, alto, 10);
  fill(255);
  push();
  textSize(15);
  textAlign(CENTER, CENTER);
  text(textoBoton, x + ancho / 2, y + alto / 2);
  pop();
}

function decisiones(x, y, ancho, alto, textoBoton) {
  fill(50, 150, 255);
  rect(x, y, ancho, alto, 10);
  fill(255);
  push();
  textSize(15);
  textAlign(CENTER, CENTER);
  text(textoBoton, x + ancho / 2, y + alto / 2);
  pop();
}

function click(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
