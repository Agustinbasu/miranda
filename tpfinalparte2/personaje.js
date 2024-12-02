class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.ancho = 100;
    this.alto = 100;
    this.movimientoInfinito = false; // Nueva propiedad para controlar el movimiento
    this.vel = 5
    this.moverizq = false
    this.moverder= false
  }

  dibujar() {
    image(img, this.posX, this.posY, this.ancho, this.alto);
  }
  
  velocidad(){
   if (this.moverizq) {
    this.posX -= this.vel; // Mover a la izquierda
  }
  if (this.moverder) {
    this.posX += this.vel; // Mover a la derecha
  } 
  }

  teclaPresionada(keyCode) {
      if (keyCode === LEFT_ARROW) {
    this.moverizq = true; // Activar movimiento hacia la izquierda
  }
  if (keyCode === RIGHT_ARROW) {
    this.moverder = true; // Activar movimiento hacia la derecha
  }
  }
  
  teclanoPresionada(keyCode){
     if (keyCode === LEFT_ARROW) {
    this.moverizq = false; // Detener movimiento hacia la izquierda
  }
  if (keyCode === RIGHT_ARROW) {
    this.moverder = false; // Detener movimiento hacia la derecha
  }
  }

  colisionaCon(objeto) {
    // Verifica si los bordes del personaje se superponen con los bordes del objeto
    return (
      this.posX < objeto.posX + 20 &&
      this.posX + this.ancho > objeto.posX &&
      this.posY < objeto.posY + 20 &&
      this.posY + this.alto > objeto.posY
      );
  }

  habilitarMovimiento() {
    this.movimientoInfinito = true; // Activa el movimiento hacia abajo
  }

  actualizarPosicion() {
    if (this.movimientoInfinito) {
      this.posY += 2; // Aumenta la posición en Y indefinidamente
      if (this.posY > height) {

        fill(8, 30, 134);
        rect(500, 400, 100, 50);
        fill(255);
        text(botones[3], 500 + 50, 400 + 35);
        fill(255); // Color del texto
        textAlign(CENTER, CENTER);
        textSize(32);
        text("¡Felicidades, Alicia!", width / 2, height / 2 - 50);
        textSize(24);
        text("Has llegado al final de la madriguera", width / 2, height / 2);
        text("y aterrizado en el País de las Maravillas.", width / 2, height / 2 + 30);
        textSize(20);
        text("¡El Sombrerero Loco te espera para celebrar!", width / 2, height / 2 + 80);
      }
    }
  }
}
