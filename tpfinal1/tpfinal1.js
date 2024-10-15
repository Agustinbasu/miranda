let apuntador = 0
let pantalla = 0
let textos = []
let imagenes = [];
let textosEnCrudo = [];
let botonA = text("SI")
let botonB = text ("NO")
let botonI = text ("EMPEZAR")




function preload() {
    textosEnCrudo = loadStrings("data/textos.txt")
     for (let i = 0; i < 15; i++) {
    imagenes[i] = loadImage(`data/imagenes/pantalla_0${i + 1}.jpg`);
  }
}

function setup() {
  createCanvas(800, 600);
  console.log(textosEnCrudo)
  for(let i = 0; i< textosEnCrudo.length; i++){
  let linea= textosEnCrudo[i]
  let lineaArray = split (linea, "#")
 textos[lineaArray[0]] = lineaArray[1];
  }
  console.log(textos)
}

function draw() {
  background(0);
  image(imagenes[pantalla], 0,0, 800,600)
  
  fill(255)
  textSize(20)
  textAlign(CENTER)
  text(textos[apuntador], 0, height * 0.6, width, height * 0.4);
}



function mousePressed() {
  pantalla++;
 apuntador++
  if (apuntador >= textos.length) {
      apuntador = 0;
    }
  if (pantalla >= 15) {
    pantalla = 0;
  }

    
}
