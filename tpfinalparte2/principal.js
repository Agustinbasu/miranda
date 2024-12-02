class JuegoPrincipal {
  constructor() {
    this.juegoIniciado = 0;
    this.tiempo = 0;
    this.vidas = new Vidas(3);
    this.cantidadObjetos = 12;
    this.crearPersonaje(width / 2, 100);
    this.crearObjetos();
    this.vidas = new Vidas(3); // Inicializa 3 vidas
    this.personaje = new Personaje(width / 2, 100)
  }

  reiniciarJuego() {
    this.tiempo = 0;
    this.vidas = new Vidas(3); // Resetear las vidas
    this.cantidadObjetos = 12; // Reiniciar cantidad de objetos
    this.crearPersonaje(width / 2, 100); // Reiniciar personaje
    this.crearObjetos(); // Reiniciar objetos
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

  iniciarJuego() {
    push();
    tint(255, 127);
    image(imagenes[0], 0, 0, width, height);
    pop();
    this.dibujar();
    this.actualizar();
    this.verificarColisiones();

    this.personaje.actualizarPosicion();
    this.tiempo++;
    if (this.juegoIniciado == 3 || this.juegoIniciado == 4) {
      this.reiniciarJuego();
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

  mostrarPantallaInicio() {
    image(imagenes[1], 0, 0, width, height);
    this.dibujoboton();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("CAIDA AL PAIS ", 320, 100);
    text("DE LAS MARAVILLAS", 320, 130);
    fill(0);
    textSize(24);
    text("Presiona Enter para comenzar", width / 2, height - 100);
    this.tiempo = 0;
  }

  mostrarInstrucciones() {
    fill(0);
    image(imagenes[2], 0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(18);
    this.texto();
    this.asignaciondeboton();
    this.tiempo = 0
  }

  mostrarPantallaGameOver() {
    image(imagenes[3], 0, 0, width, height);
    fill(0);
    textSize(48);
    text("¡LO SIENTO, ALICIA!", width / 2, height / 2 - 60);
    textSize(24);
    text("Te has quedado sin vidas.", width / 2, height / 2);
    text("La madriguera es un lugar traicionero y los obstáculos fueron demasiados.", width / 2, height / 2 + 30);
    textSize(28);
    text("¡Pero no te preocupes! Puedes intentarlo de nuevo.", width / 2, height / 2 + 90);
    textSize(20);
    fill(8, 30, 134);
    rect(500, 400, 100, 50);
    fill(255);
    text(botones[3], 500 + 50, 400 + 35);
    this.tiempo = 0
  }

  mostrarPantallaFinal() {
    image(imagenes[4], 0, 0, width, height);
    fill(134, 120, 8);
    rect(0, 430, 100, 50);
    fill(255);
    text(botones[6], 0 + 50, 430 + 35);
    fill(0);
    textSize(40);
    text("CAIDA AL PAIS ", 320, 100);
    text("DE LAS MARAVILLAS", 320, 130);
    textSize(20);
    text("Producido por Miranda Alverde(118955/4)", 320, 240);
    text("y Agustin Basualdo(118969/0)", 320, 270);
    this.tiempo = 0;
  }

  asignaciondeboton() {
    if (this.juegoIniciado == 2) {
      fill(255);
      textSize(20);
      textAlign(CENTER);

      // Botón "MusicaON"
      fill(8, 134, 24);
      rect(0, 0, 100, 30);
      fill(255);
      text(botones[1], 0 + 50, 0 + 15);

      // Botón "MusicaOff"
      fill(134, 8, 12);
      rect(0, 50, 100, 30);
      fill(255);
      text(botones[2], 0 + 50, 50 + 15);

      // Botón para regresar
      push();
      textAlign(LEFT);
      fill(134, 120, 8);
      rect(0, 430, 100, 30);
      fill(255);
      text(botones[5], 0 + 20, 430 + 15);
      pop();
    }
  }

  texto() {
    fill(0);
    textSize(18);
    textAlign(CENTER);

    text("Cae, cae y sigue cayendo… ¡Alicia está en caída libre!", width / 2, 200);
    text("Usa las flechas del teclado para mover a Alicia de izquierda a derecha mientras desciende por la madriguera.", width / 2, 220);
    text("¡Evita los cachivaches! En su viaje al País de las Maravillas,", width / 2, 240);
    text("Alicia pasa flotando al lado de cosas extrañas y fantásticas.", width / 2, 260);
    text("Desde relojes flotantes hasta copas de té que intentan hacerla tropezar,", width / 2, 280);
    text("¡esquiva todos estos obstáculos o perderás una vida!", width / 2, 300);

    text("¡Cuidado con tus vidas! Alicia tiene 3 vidas.", width / 2, 320);
    text("Si toca un objeto, pierde una. Cuando las tres vidas desaparecen,", width / 2, 340);
    text("¡se acabó el sueño! La madriguera la expulsa, y Alicia se pierde en un limbo de teteras y espejos...", width / 2, 360);
    text("¡Nadie quiere eso!", width / 2, 380);

    text("¡Objetivo Final! Esquiva y cae hábilmente durante 1 minuto hasta el final de la madriguera.", width / 2, 400);
    text("Si lo logras sin perder todas tus vidas, ¡Alicia llega sana y salva al País de las Maravillas!", width / 2, 420);
  }

  pantallas() {
    background(50);

    if (this.juegoIniciado == 1) {
      this.iniciarJuego();
    }
    if (this.juegoIniciado == 0) {
      this.mostrarPantallaInicio();
    }
    if (this.juegoIniciado == 2) {
      this.mostrarInstrucciones();
    }
    if (this.juegoIniciado == 3) {
      this.mostrarPantallaGameOver();
    }
    if (this.juegoIniciado == 4) {
      this.mostrarPantallaFinal();
    }

    if (this.tiempo >= 600) {
      this.cantidadObjetos = 0;
      this.personaje.habilitarMovimiento();
    }
    this.personaje.velocidad()
  }
  
  dibujoboton() {
    fill(255);
    textSize(20);
    textAlign(CENTER);

    // Botón "MusicaON"
    fill(8, 134, 24);
    rect(0, 0, 100, 30);
    fill(255);
    text(botones[1], 0 + 50, 0 + 15);

    // Botón "MusicaOff"
    fill(134, 8, 12);
    rect(0, 50, 100, 30);
    fill(255);
    text(botones[2], 0 + 50, 50 + 15);

    // Botón Instrucciones
    textAlign(LEFT);
    fill(134, 120, 8);
    rect(0, 430, 200, 30);
    fill(255);
    text(botones[4], 0 + 20, 430 + 15);
  }

  interactividad() {
    if (this.colisionBoton(0, 50, 100, 30)) {
      miMusica.stop();
    } else if (this.colisionBoton(0, 0, 100, 30)) {
      miMusica.play();
    }
    if (this.juegoIniciado === 0) {
      if (this.colisionBoton(0, 430, 200, 30)) {
        this.juegoIniciado = 2;
      }
    } else if (this.juegoIniciado === 2 || this.juegoIniciado===4) {
      if (this.colisionBoton(0, 430, 100, 30)) {
        this.juegoIniciado = 0;
      }
    } else if (this.juegoIniciado===3 || this.tiempo>=600) {
      if (this.colisionBoton(500, 400, 100, 50)) {
        this.juegoIniciado = 4
      }
    }
  }

  colisionBoton(x, y, w, h) {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  }

  Movimientodealicia() {
    if (keyCode === ENTER && this.juegoIniciado == 0) {
      this.juegoIniciado = 1;
      this.reiniciarJuego();
    }
    this.personaje.teclaPresionada(keyCode)
  }

  Movimientodealiciadetener() {
    this.personaje.teclanoPresionada(keyCode)
  }

  verificarColisiones() {
    for (let i = 0; i < this.cantidadObjetos; i++) {
      let objeto = this.objetos[i];
      if (this.personaje.colisionaCon(objeto)) {
        this.vidas.perderVida(); // Pierde una vida
        objeto.posY = height + random(50, 1000); // Reinicia posición del objeto

        if (this.vidas.vidasRestantes() === 0) {
          this.juegoIniciado=3; // Vuelve a la pantalla inicial
        }
        break;
      }
    }
  }
}
