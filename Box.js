class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
     // this.image = loadImage("sprites/wood1.png");
     this.visibility=255;
  
  this.image = loadImage("block.png");
 
    }

    score(){
      
        if (this.visibility < 0 && this.visibility > -105){
          score++;
        }
    }

    display(){

     // console.log(this.body.speed);
      
      if(this.body.speed<2){
       
       super.display();
     
       }
      
      else{
       
       World.remove(world,this.body);
     
         push ();
       this.visibility=this.visibility-7;
       tint (255,this.visibility);
       image(this.image,this.body.position.x, this.body.position.y,this.width,this.height);
        pop ();
      
      }
     
     
  };

 
}

  
    



