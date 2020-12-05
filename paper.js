class Paper {
 constructor(x,y,r){
 var options={
     isStatic:false,
     restitution:0.8,
     friction:1.0,
     density:1.0

     }
 
 this.x = x;
 this.y = y;
 this.r = r;
 this.body = Bodies.rectangle(x,y,50,50,options);
 this.image=loadImage("paper3.png");
 World.add(world,this.body);
 }



 display()
 {
     var paperpos = this.body.position;

     push()
     translate(paperpos.x,paperpos.y);
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.height);
     //strokeWeight(3);
     //fill(255,0,255)
     //ellipse(0,0,this.r,this.r);
     pop()

 }
}