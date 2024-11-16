class Juego {
  constructor(cantidadObjetos) {
  this.cantidadObjetos = cantidadObjetos;
  this.crearPersonaje(width / 2, 100);
  this.crearObjetos();
  this.vidas = new Vidas(3); // Inicializa 3 vidas
}

  dibujar() {
    this.personaje.dibujar();
    for (let i = 0; i < this.cantidadObjetos; i++) {
      this.objetos[i].dibujar();
    }
     this.vidas.dibujar();
  }

  actualizar() {
    for (let i = 0; i < this.cantidadObjetos; i++) {
      this.objetos[i].mover();
    }
  }

  crearObjetos() {
    this.objetos = [];
    for (let i = 0; i < this.cantidadObjetos; i++) {
      let posX = random(width); // Posición aleatoria en X
      let posY = height + random(50, 1000); // Inicia fuera de la pantalla en la parte inferior
      this.objetos[i] = new Objeto(posX, posY);
    }
  }

  crearPersonaje(posX, posY) {
    this.personaje = new Personaje(posX, posY);
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }

 verificarColisiones() {
  for (let i = 0; i < this.cantidadObjetos; i++) {
    let objeto = this.objetos[i];
    if (this.personaje.colisionaCon(objeto)) {
      this.vidas.perderVida(); // Pierde una vida
      objeto.posY = height + random(50, 1000); // Reinicia posición del objeto

      if (this.vidas.vidasRestantes() === 0) {
        juegoIniciado = 3; // Vuelve a la pantalla inicial
      }
      break;
    }
  }
}
}
