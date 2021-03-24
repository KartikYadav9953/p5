class bob{

    constructor(x, y) {
        
                var option={
        
                       isStatic: true 
        
                }

                this.body=Bodies.circle(x, y, 50, option);

                World.add(world, this.body);
        
               
            }
        
             display() {
               
                push();
                 rectMode(CENTER)
                 fill("white");
                // translate(this.body.position.x, this.body.position.y);
                // rotate(this.body.angle);
                 circle(this.body.position.x, this.body.position.y, 100) 
                 pop();        
                 
             }
        
        }
