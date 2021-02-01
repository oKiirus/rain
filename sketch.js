const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let ar = []

var engine, world

function preload(){
    th1 = loadImage("1.png")
    th2 = loadImage("2.png")
    th3 = loadImage("3.png")
    th4 = loadImage("4.png")
}

function setup(){
    createCanvas(400, 600)
    engine = Engine.create();
    world = engine.world;

    

    umbrella = new Um(200, 480)
    if(frameCount %150 ===0){
        for(var i = 0; i<100;i++){
            ar.push(new Rain(random(0,400),random(0,400)))
        }
    }    
}

function draw(){
    background(0)
    Engine.update(engine);
  
    for(let i = 0; i < 100; i++){
        ar[i].display()
        ar[i].updateY()
        }

    rand = Math.round(random(1,4))
    if(frameCount %80 === 0){
         thunder = createSprite(random(10, 370), 10, 10, 10) 
         
         switch(rand){

            case 1: thunder.addImage(th1)
            break

            case 2: thunder.addImage(th2)
            break

            case 3: thunder.addImage(th3)
            break

            case 4: thunder.addImage(th4)
            break

         }

         thunder.lifetime = 20
    }
   
    umbrella.display()
    drawSprites()
}   

