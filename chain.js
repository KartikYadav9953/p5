class chain {

   constructor(body1, body2, offsetX, offsetY) {

  this.offsetX = offsetX
  this.offsetY = offsetY

      var options={
           
           bodyA:body1,
           bodyB:body2,
           pointB:{x:this.offsetX, y:this.offsetY}

      }

      this.rope = Constraint.create(options);
      World.add(world,this.rope)
      
   }

   display() {

       var pointB=this.rope.bodyA.position;
       var pointB=yhis.rope.bodyB.position;
       
       strokeWeight(2);
       
       var Anchor1X=pointA.x
       var Anchor1Y=ponitA.y

       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
       


   }

}