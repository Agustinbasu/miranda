let juegoIniciado = 0;
let img;  // Aquí falta el punto y coma
let imgobjetos = [];
let imagenes = [];
let botones = ["EMPEZAR", "Musica on", "Musica off", "CREDITOS", "INSTRUCCIONES", "VOLVER", "INICIO"];
let miMusica;
let tipografia;
let tiempo = 0;

function preload() {
  tipografia = loadFont("data/tipografia.ttf");
  img = loadImage("data/aliciap.png");
  for (let i = 0; i < 3; i++) {
    imgobjetos[i] = loadImage("data/objetos/objeto_" + nf(i + 1, 2) + ".png");
  }
  for (let i = 0; i < 5; i++) {
    imagenes[i] = loadImage("data/imagenes/alicia_" + nf(i + 1, 2) + ".jpg");
  }
  soundFormats("mp3", "ogg");
  miMusica = loadSound("data/sonidos/musica");
}

function setup() {
  createCanvas(640, 480);
  textFont(tipografia);
  objJuego = new Juego(12);
}

function draw() {
  background(50);
  if (juegoIniciado == 1) {
    push();
    tint(255, 127);
    image(imagenes[0], 0, 0, width, height);
    pop();
    objJuego.dibujar();
    objJuego.actualizar();
    objJuego.verificarColisiones();
    objJuego.personaje.actualizarPosicion(); // Nueva lógica para mover a Alicia
    tiempo++;
  }
  if (juegoIniciado == 0) {
    image(imagenes[1], 0, 0, width, height);
    dibujoboton();
    fill(255);
    
    textAlign(CENTER, CENTER);
     textSize(50); // Tamaño de fuente para el título
  text("CAIDA AL PAIS ", 320, 100); // Texto centrado
  text("DE LAS MARAVILLAS",320,130)
  fill(0)
    textSize(24);
    text("Presiona Enter para comenzar", width / 2, height - 100);
    tiempo = 0;
  }
  if (juegoIniciado == 2) {
    fill(0);
    image(imagenes[2], 0, 0, width, height);
    textAlign(CENTER, CENTER);
    textSize(18);
    texto();
    asignaciondeboton();
  }
  if (juegoIniciado == 3) {
   image(imagenes[3], 0, 0, width, height)
    
    fill(0)
   textSize(48);
  text("¡LO SIENTO, ALICIA!", width / 2, height / 2 - 60);
  
  // Texto adicional explicando la situación
  textSize(24);
  text("Te has quedado sin vidas.", width / 2, height / 2);
  text("La madriguera es un lugar traicionero y los obstáculos fueron demasiados.", width / 2, height / 2 + 30);
  
  // Texto para invitar a intentar de nuevo
  textSize(28);
  text("¡Pero no te preocupes! Puedes intentarlo de nuevo.", width / 2, height / 2 + 90);  
  textSize(20)
   fill(8, 30, 134);
    rect(500, 400, 100, 50);
    fill(255);
    text(botones[3], 500 + 50, 400 + 35);
}
if (juegoIniciado==4) {
  
  image(imagenes[4],0,0, width, height)
    fill(134, 120, 8);
    rect(500, 400, 100, 50);
    fill(255);
    text(botones[6], 500 + 50, 400 + 35);
    fill(0)
     textSize(40); // Tamaño de fuente para el título
  text("CAIDA AL PAIS ", 320, 100); // Texto centrado
  text("DE LAS MARAVILLAS",320,130)
  textSize(20); // Tamaño de fuente más pequeño
  text("Producido por Miranda Alverde(118955/4)", 320, 240); // Texto centrado
  text("y Agustin Basualdo(118969/0)", 320,270)
tiempo=0
  }
  
  if (tiempo == 3600) {  
    objJuego = new Juego(0); // Reinicia el juego con 0 objetos
    objJuego.personaje.habilitarMovimiento(); // Activa el movimiento infinito de Alicia
  }
}

function mousePressed() {
  interactividad();
   if (tiempo>=3600) {
    if (colisionBoton(500, 400, 100, 50)) {
      juegoIniciado = 4; // Si el jugador hace clic, cambia el estado del juego
    }
   }
}

function keyPressed() {
  if (keyCode === ENTER && juegoIniciado == 0) {
    juegoIniciado = 1;
    objJuego = new Juego(12); // Reinicia el juego
  }
  objJuego.teclaPresionada(keyCode);
}
