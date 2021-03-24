class stone{
     
    constructor(x,y, w, h) {

        var op={

               isStatic: true 

        }

        this.body=Bodies.rectangle(x,y, w,h, op)
        this.width = w
        this.heigth = h
   
         World.add(world, this.body)

    }

     display() {
       
        push();
         rectMode(CENTER)
         fill("blue");
        // translate(this.body.position.x, this.body.position.y);
        // rotate(this.body.angle);
         rect(this.body.position.x, this.body.position.y, 500, 50);
         pop();        
         
     }

}