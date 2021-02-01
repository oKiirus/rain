class Box {

    constructor(x, y){

        var options = {
            restitution : 0.6,
            friction : 0.2,
            density : 0.5
        }

        this.width = 100
        this.height = 100
        


        this.body = Bodies.rectangle(x, y, 100, 100, options)

        World.add(world, this.body)
        


    }

    display(){

        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        noStroke()
        fill("red")
        rectMode(CENTER)
        rect(0, 0, this.width, this.height)
        pop()

    }



}