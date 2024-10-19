function colisionBoton(x, y, w, h) {
  if (mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h) {
    return true
  } else {
    return false
  }
}

function interactividad() {
  if (colisionBoton(0, 50, 100, 50)) {
    mimusica.stop();
  } else if (colisionBoton(0, 0, 100, 50)) {
    mimusica.play();
  }

  if (pantalla === 0) {
    // Botón "Sí"
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 1; // Ir a la siguiente pantalla
    }
    // Botón "No"
    else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 7; // Ir a la pantalla 7
    }
  } else if (pantalla === 1) {
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 2; // Ir a la siguiente pantalla
    } else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 9; // Ir a la pantalla 9
    }
  } else if (pantalla === 2) {
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 3; // Ir a la siguiente pantalla
    } else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 10; // Ir a la pantalla 10
    }
  } else if (pantalla === 3) {
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 11; // Ir a la siguiente pantalla
    } else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 4; // Ir a la pantalla 4
    }
  } else if (pantalla === 4) {
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 5; // Ir a la siguiente pantalla
    } else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 12; // Ir a la pantalla 12
    }
  } else if (pantalla === 5) {
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 13; // Ir a la siguiente pantalla
    } else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 6; // Ir a la pantalla 6
    }
  } else if (pantalla === 6 || pantalla === 8 || pantalla === 10 || pantalla === 11 || pantalla === 13 || pantalla === 14) {
    if (colisionBoton(500, 400, 100, 50)) {
      pantalla = 16; // Ir a la pantalla 16
    }
  } else if (pantalla === 7) {
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 8; // Ir a la siguiente pantalla
    } else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 14; // Ir a la pantalla 14
    }
  } else if (pantalla === 9) {
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 8; // Ir a la siguiente pantalla
    } else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 14; // Ir a la pantalla 14
    }
  } else if (pantalla === 12) {
    if (colisionBoton(150, 400, 100, 50)) {
      pantalla = 11; // Ir a la siguiente pantalla
    } else if (colisionBoton(350, 400, 100, 50)) {
      pantalla = 10; // Ir a la pantalla 10
    }
  } else if (pantalla === 15) {
    if (colisionBoton(500, 400, 100, 50)) {
      pantalla = 0; // Volver a la pantalla inicial
    }
  } else if (pantalla === 16) {
    if (colisionBoton(500, 400, 100, 50)) {
      pantalla = 15; // Ir a la pantalla 15
    }
  }
}

function dibujoboton() {
  fill(255);
  textSize(20);
  textAlign(CENTER);
  // Botón "Sí"
  fill(8, 30, 134)
    rect(150, 400, 100, 50);
  fill(255);
  text(botones[0], 150 + 50, 400 + 35); // Centrar texto en el botón
  // Botón "No"
  fill(8, 30, 134);
  rect(350, 400, 100, 50);
  fill(255);
  text(botones[1], 350 + 50, 400 + 35); // Centrar texto en el botón
  // Boton "MusicaON"
  fill(8, 134, 24);
  rect(0, 0, 100, 50);
  fill(255);
  text(botones[3], 0 + 50, 0 + 35);
  // Boton "MusicaOff"
  fill(134, 8, 12);
  rect(0, 50, 100, 50);
  fill(255);
  text(botones[4], 0 + 50, 50 + 35);
}

function asignaciondebotones() {
  if (pantalla===0||pantalla===1||pantalla===2||pantalla===3||pantalla===4||pantalla===5||pantalla===7||pantalla===9||pantalla===12) {
    dibujoboton();
  } else if (pantalla===6||pantalla===8||pantalla===10||pantalla===11||pantalla===13||pantalla===14) {
    fill(8, 30, 134);
    rect(500, 400, 100, 50);
    fill(255);
    text(botones[5], 500 + 50, 400 + 35);
  } else if (pantalla===15) {
    //empezar
    fill(134, 120, 8);
    rect(500, 400, 100, 50);
    fill(255);
    text(botones[2], 500 + 50, 400 + 35);
    //Musica on
    fill(8, 134, 24);
    rect(0, 0, 100, 50);
    fill(255);
    text(botones[3], 0 + 50, 0 + 35);
    //musica off
    fill(134, 8, 12);
    rect(0, 50, 100, 50);
    fill(255);
    text(botones[4], 0 + 50, 50 + 35);
  } else if (pantalla===16) {
    fill(134, 120, 8);
    rect(500, 400, 100, 50);
    fill(255);
    text(botones[6], 500 + 50, 400 + 35);
    fill(0)
      text("Producido por \nMiranda Alverde(118955/4) y AgustinBasualdo(118969/0) \nInspirados en el magnifico Tim Burton", 320, 240)
      textSize(40)
      text("ALICIA \nEN EL \nPAIS DE LAS MARAVILLAS", 320, 100)
  }
}
