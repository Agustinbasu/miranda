class Vidas {
  constructor(cantidadVidas) {
    this.cantidadVidas = cantidadVidas;
    this.vidas = []; // Creamos un arreglo vacío para las vidas
    this.imagenCorazon = loadImage("data/corazon.png"); // Imagen de corazón

    // Inicializa las vidas
    for (let i = 0; i < this.cantidadVidas; i++) {
      this.vidas[i] = true; // Asigna `true` a cada vida
    }
  }

  dibujar() {
    for (let i = 0; i < this.vidas.length; i++) {
      if (this.vidas[i]) {
        // Dibuja un corazón por cada vida restante
        image(this.imagenCorazon, 10 + i * 40, 10, 30, 30);
      }
    }
  }

  perderVida() {
    for (let i = this.vidas.length - 1; i >= 0; i--) {
      if (this.vidas[i]) {
        this.vidas[i] = false;
        break;
      }
    }
  }

  // Contamos las vidas restantes sin usar filter()
  vidasRestantes() {
    let contador = 0; // Iniciamos un contador en 0
    for (let i = 0; i < this.vidas.length; i++) {
      if (this.vidas[i]) { // Si la vida es `true`, contamos esta vida
        contador++;
      }
    }
    return contador; // Devolvemos el total de vidas restantes
  }
}
