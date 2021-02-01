class Um {

    constructor(x, y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y - 100, 65, options)
        
    
        this.r = 50
        

        this.image = loadImage("walking_1.png");

        



        World.add(world, this.body)

    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y + 100, 300, 300)


    }

   
   
}