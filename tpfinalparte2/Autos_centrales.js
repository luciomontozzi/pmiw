class Autos_centrales {
  constructor(pY) {
    this.reiniciar(pY);
  }
  reiniciar(pY) {
    this.pX = 280;
    this.pY = pY;
    this.acelerar = 4;
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
