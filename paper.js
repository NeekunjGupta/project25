class Paper{
    constructor(x,y,radius){
     var options = { 
       restitution : 0.3,
       density : 1.2
     }
     this.body = Bodies.circle(x,y,radius-20/2,options);
     this.radius  = radius;
     this.image = loadImage("paper.png");
     World.add(world,this.body)
    }

  display()
{
   var pose = this.body.position
   var angle = this.body.angle
   push()
   translate(pose.x,pose.y)
   rotate(angle)
    imageMode(CENTER);
    image(this.image,0,0,this.radius+35,this.radius+35);
    pop();
}
}
