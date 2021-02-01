class Rain {

    constructor(x, y){
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 5, options)
        
        this.radius = 5

        World.add(world, this.body)

    }

    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(-100,0)})
        }
    }
    display(){
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius)


    }

   
   
}