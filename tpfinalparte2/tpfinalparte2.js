//Alumna: Candela Macca
//Legajo: 119072/9
//Comision 3
//Profesor: David Bedoian

let juego;

function preload(){
 
}
function setup() {
  createCanvas (640,480);
  juego = new Juego();
}

function draw() {
  background(192,221,227);
  juego.actualizar();
  
}
 
function keyPressed(){
  juego.teclaPresionada(keyCode);
  
  
}

function mousePressed() {
  juego.mousePressed();
}
