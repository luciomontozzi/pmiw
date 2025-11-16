class Juego {
  constructor(posX, posY) {
    this.estado = "menu";
    this.posX = 270;
    this.posY = 400;
    this.Hernando = new Hernando (280, 350);
    this.Autos_centrales = new Autos_centrales (1);
    if (random() > 0) {
      this.Autos_laterales = new Autos_laterales(1);
    } else {
      this.Autos_laterales = 1;
    }
    this.tiempo = 0;
    this.tiempoMax = 1200;
  }
  reiniciarJuego() {
    this.Hernando = new Hernando (280, 350);
    this.Autos_centrales.reiniciar(1);
    if (random() > 0) {
      if (this.Autos_laterales) {
        this.Autos_laterales.reiniciar(1);
      } else {
        this.Autos_laterales = new Autos_laterales(1);
      }
    } else {
      this.Autos_laterales = 1;
    }
    this.tiempo = frameCount;
  }
  diapositiva() {
    this.pantallas();
  }
  pantallas() {
    if (this.estado === "menu") {
      image(img[0], 0, 0, width, height);
      fill(240, 10, 29);
      rect(this.posX, this.posY, 120, 50);
      fill(255);
      text("Iniciar", 300, 435);
    } else if (this.estado === "instrucciones") {
      image(img[1], 0, 0, width, height);
      fill(50, 150, 255);
      rect(this.posX + 130, this.posY, 120, 50);
      fill(240, 200, 29);
      rect(this.posX/2, this.posY, 120, 50);
      fill(255);
      text("Jugar", 430, 435);
      text("Volver", 160, 435);
    } else if (this.estado === "jugar") {
      image(img[8], 0, 0, width, height);
      this.Hernando.dibujar();
      this.Autos_centrales.dibujar();
      this.Autos_centrales.mover();
      if (this.Autos_laterales) {
        this.Autos_laterales.dibujar();
        this.Autos_laterales.mover();
      }
      if (keyCode === RIGHT_ARROW) {
        this.Hernando.mover();
      } else if (keyCode === LEFT_ARROW) {
        this.Hernando.mover();  
      }
      if (this.Autos_centrales.choque(this.Hernando)) {
        this.estado = "perder";
      } else if (this.Autos_laterales && this.Autos_laterales.choque(this.Hernando)) {
        this.estado = "perder";
      }
      if (frameCount - this.tiempo >= this.tiempoMax) {
        this.estado = "ganar";
      }
    } else if (this.estado === "perder") {
      image(img[2], 0, 0, width, height);
      fill(240, 10, 29);
      rect(this.posX + 130, this.posY, 120, 50);
      fill(240, 10, 29);
      rect(this.posX/2, this.posY, 120, 50);
      fill(255);
      text("Reintentar", 405, 435);
      text("Menú", 160, 435);
    } else if (this.estado === "ganar") {
      image(img[3], 0, 0, width, height);
      fill(50, 150, 255);
      rect(this.posX + 130, this.posY, 120, 50);
      fill(240, 200, 29);
      rect(this.posX/2, this.posY, 120, 50);
      fill(255);
      text("Jugar", 430, 435);
      text("Menú", 160, 435);
    }
  }
  botonMouse() {
    if (this.estado === "menu") {
      if (mouseX < 390 && mouseX >= 270 && mouseY < 450 && mouseY >= 400) {
        this.estado = "instrucciones";
        click.play();
      }
    } else if (this.estado === "instrucciones") {
      if (mouseX < 520 && mouseX >= 400 && mouseY < 450 && mouseY >= 400) {
        this.estado = "jugar";
        this.reiniciarJuego();
        click.play();
      }
      if (mouseX < 254 && mouseX >= 134 && mouseY < 450 && mouseY >= 400) {
        this.estado = "menu";
        click.play();
      }
    } else if (this.estado === "ganar") {
      if (mouseX < 520 && mouseX >= 400 && mouseY < 450 && mouseY >= 400) {
        this.estado = "jugar";
        this.reiniciarJuego();
        click.play();
      }
      if (mouseX < 254 && mouseX >= 134 && mouseY < 450 && mouseY >= 400) {
        this.estado = "menu";
        click.play();
      }
    } else if (this.estado === "perder") {
      if (mouseX < 520 && mouseX >= 400 && mouseY < 450 && mouseY >= 400) {
        this.estado = "jugar";
        this.reiniciarJuego();
        click.play();
      }
      if (mouseX < 254 && mouseX >= 134 && mouseY < 450 && mouseY >= 400) {
        this.estado = "menu";
        click.play();
      }
    }
  }
}
