class Hernando {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.personaje = img [5];
    this.ancho = 70;
    this.alto = 70;
    this.desplazar = 5;
  }
  mover() {
    if (keyCode === RIGHT_ARROW && this.x<width-160) {
      this.x += this.desplazar;
    } else if (keyCode === LEFT_ARROW && this.x>100) {
      this.x -= this.desplazar;
    }
  }
  dibujar() {
    image (this.personaje, this.x, this.y, this.ancho, this.alto);
    if (keyCode === RIGHT_ARROW) {
      this.personaje = img [7];
    } else if (keyCode === LEFT_ARROW) {
      this.personaje = img [6];
    }
  }
}
