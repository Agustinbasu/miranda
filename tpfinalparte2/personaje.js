class Personaje {
  constructor(){
   
    this.miColor = color (230,130,50);
    this.x = width/2;
    this.y = height-50;
    this.vel = 2;
    this.ancho = 50;
    this.alto = 20;
    this.img = loadImage("data/remy.png");
  }
  actualizar() {
    this.teclaPresionada();
    this.dibujar();
  }
  
  dibujar() {
    push();
    translate(this.x, this.y); 
    imageMode(CENTER);
    image( this.img, 0,-30  ,150,150) ;
    pop();
  }
 
  //se mueve el personaje
teclaPresionada(keyCode){
    if ( keyIsPressed ) {
      if ( keyCode===LEFT_ARROW ) {
        this.x-=40;
      } else if ( keyCode===RIGHT_ARROW ) {
        this.x+=40;
      }
      
      this.x = constrain(this.x, 30, width-90);
    }
  }
  
}
