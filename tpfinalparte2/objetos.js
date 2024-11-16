class Objeto {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.imagenIndex = int(random(0, imgobjetos.length)); // Índice de imagen al azar, simplificado
  }

  dibujar() {
    image(imgobjetos[this.imagenIndex], this.posX, this.posY, 50, 50);
  }

  mover() {
    this.posY -= 2; // Velocidad hacia arriba
    if (this.posY < 0) {
      this.posY = height + random(50, 1000); // Reinicia en la parte inferior
      this.posX = random(width); // Posición aleatoria en X
    }
  }
}
