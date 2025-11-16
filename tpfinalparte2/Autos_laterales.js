class Autos_laterales {
  constructor(pY) {
    this.reiniciar(pY);
  }
  reiniciar(pY) {
    let posiciones = [100, 450];
    this.pX = random(posiciones);
    this.pY = pY;
    this.acelerar = 5;
  }
  mover () {
    this.pY += this.acelerar;
    if (this.pY > height) {
      this.reiniciar(-170);
    }
  }
  dibujar() {
    image(img[4], this.pX, this.pY, 100, 170);
  }
  choque(Hernando) {
    if (Hernando.x < this.pX + 100 && Hernando.x + Hernando.ancho > this.pX && Hernando.y < this.pY + 170 && Hernando.y + Hernando.alto > this.pY) {
      return true;
    }
    return false;
  }
}
