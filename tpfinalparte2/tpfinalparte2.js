/*
 *TpFinal parte 2: Programacion orientada a objetos
 *Comision 3: David Bedoian
 *Agustin Basualdo(118969/0)
 *Compañera: Miranda Alverde(118955/4)
 *DNI: 46936592
 *Link del video explicativo: https://youtu.be/qDwOToZT4f0
 */
 
let img;
let imgobjetos = [];
let imagenes = [];
let botones = ["EMPEZAR", "Musica on", "Musica off", "CREDITOS", "INSTRUCCIONES", "VOLVER", "INICIO"];
let miMusica;
let tipografia;
let principal

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
  principal= new JuegoPrincipal()
}

 function draw() {
    principal.pantallas()
  }
function mousePressed() {
  principal.interactividad();
}

function keyPressed() {
  principal.Movimientodealicia()
}

function keyReleased() {
 principal.Movimientodealiciadetener() 
}
