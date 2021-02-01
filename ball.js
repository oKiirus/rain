class Ball {

    constructor(x, y){

        var options = {
            restitution : 0.6,
            friction : 0.2,
            density : 1
        }

        this.r = 50
        
        


        this.body = Bodies.circle(x, y, 50, options)

        World.add(world, this.body)
        


    }

    display(){

        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        noStroke()
        fill("yellow")
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r)
        pop()

    }



}