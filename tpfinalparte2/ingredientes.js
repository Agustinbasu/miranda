class Ingrediente {
  constructor(){
    this.tipo = int (random(0,4));  
    this.reiniciarUbicacion();
    
    this.despX=0;
    this.despY= 4;
    this.lado = 60;
    
    this.img = loadImage("data/ingredientes/ingrediente_"+this.tipo+".png");
    this.vivo=true;
  }
  actualizar(){
    this.mover();
    this.dibujar();
    
  }
  mover(){
    this.y+=5
    if ( this.y>height+30 ) {
      this.reiniciarUbicacion();
    }
  }
  dibujar(){
  push();
    translate(this.x, this.y);
   imageMode(CENTER);
    image(this.img,0,0, this.lado, this.lado ) ;
    pop();
  }
    
  
 reiniciarUbicacion(){
   this.x = random (0+this.lado/2,width-this.lado/2);
   this.y = -random(10,200);
 }
 
 evaluaColision(x,y) {
      if ( dist(this.x, this.y) < this.lado/2 ) {
        //hay colision
        this.reiniciarUbicacion();
        return true;
      } 
        return false;
      }
    }
  
  
