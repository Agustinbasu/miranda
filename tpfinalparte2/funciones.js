// Función que maneja las colisiones del botón de tiempo
function colisionBoton(x, y, w, h) {
  if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h) {
    return true;  // Si el mouse está dentro del área del botón, devuelve true
  } else {
    return false;  // Si el mouse está fuera del área del botón, devuelve false
  }
}

// Función de interactividad que revisa las colisiones con los botones
function interactividad() {
  // Botón de Musica ON/OFF
  if (colisionBoton(0, 50, 100, 30)) {
    miMusica.stop();  // Detener la música
  } else if (colisionBoton(0, 0, 100, 30)) {
    miMusica.play();  // Reproducir la música
  }

  // Verificar si es el tiempo del juego y ejecutar la lógica asociada


  // Botón de instrucciones y otras interacciones
  if (juegoIniciado === 0) {
    if (colisionBoton(0, 430, 200, 30)) {  // Verifica si se hace clic en el botón de instrucciones
      juegoIniciado = 2;  // Cambia a la pantalla de instrucciones
    }
  } else if (juegoIniciado === 2) {
    if (colisionBoton(0, 430, 100, 30)) {  // Verifica si se hace clic en el botón para regresar al juego
      juegoIniciado = 0;  // Regresar al juego principal
    }
  } else if (juegoIniciado >= 3) {  // Desde el estado 3 en adelante
    if (colisionBoton(500, 400, 100, 50)) {
      if (juegoIniciado === 3) {
        juegoIniciado = 4; // Si es la pantalla de Game Over, va a la pantalla de créditos
      } else if (juegoIniciado === 4) {
        juegoIniciado = 0; // Si está en la pantalla de créditos, regresa al inicio
      } 
    }
  }
}

// Función para dibujar los botones en pantalla
function dibujoboton() {
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
  rect(0, 430, 200, 30);  // El tamaño del botón de instrucciones
  fill(255);
  text(botones[4], 0 + 20, 430 + 15);  // Ajusta la posición del texto
}

// Función que dibuja los botones cuando el juego está en el estado de instrucciones
function asignaciondeboton() {
  if (juegoIniciado == 2) {
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

    // Botón para regresar a instrucciones
    push();
    textAlign(LEFT);
    fill(134, 120, 8);
    rect(0, 430, 100, 30);  // El tamaño del botón de instrucciones
    fill(255);
    text(botones[5], 0 + 20, 430 + 15);  // Ajusta la posición del texto
    pop();
  }
}

// Función de texto de instrucciones
function texto() {
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

  text("¡Objetivo Final! Esquiva y cae hábilmente dudrante 1 minuto hasta el final de la madriguera.", width / 2, 400);
  text("Si lo logras sin perder todas tus vidas, ¡Alicia llega sana y salva al País de las Maravillas!", width / 2, 420);
}
